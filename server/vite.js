import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import viteConfig from "../vite.config.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viteLogger = createLogger();

function log(message, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

async function setupVite(app, server) {
  const clientRoot = path.resolve(__dirname, "..", "client");
  
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    root: clientRoot,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        const cleanMsg = typeof msg === 'string' ? msg.replace(/\(/g, '[').replace(/\)/g, ']') : msg;
        console.error('[vite error]', cleanMsg);
      },
    },
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true,
    },
    appType: "custom",
  });

  // Serve static files from client/public
  const publicPath = path.resolve(clientRoot, "public");
  app.use('/static', express.static(publicPath));
  
  // CRITICAL: Only handle non-API routes with a specific middleware
  app.use((req, res, next) => {
    // NEVER touch API routes - let them pass through completely
    if (req.path.startsWith('/api/')) {
      return next();
    }
    
    // For non-API routes, apply Vite middleware
    vite.middlewares(req, res, (err) => {
      if (err) {
        return next(err);
      }
      // If Vite middleware doesn't handle it, try serving HTML
      serveIndexHtml(req, res, next, vite, clientRoot);
    });
  });
}

async function serveIndexHtml(req, res, next, vite, clientRoot) {
  try {
    const url = req.originalUrl;
    const clientTemplate = path.resolve(clientRoot, "index.html");
    
    let template = await fs.promises.readFile(clientTemplate, "utf-8");
    const page = await vite.transformIndexHtml(url, template);
    
    res.status(200).set({ "Content-Type": "text/html" }).end(page);
  } catch (e) {
    vite.ssrFixStacktrace(e);
    next(e);
  }
}

function serveStatic(app) {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

export { log, setupVite, serveStatic };