import express from "express";
import dotenv from "dotenv";
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";
import { createServer } from "http";

// Load environment variables
dotenv.config();

// Handle uncaught exceptions and rejections
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    console.log('Starting server setup...');
    
    // Register API routes FIRST - this is critical
    await registerRoutes(app);
    console.log('API routes registered successfully');

    const env = process.env.NODE_ENV || "development";
    console.log(`Environment: ${env}`);
    
    // Create HTTP server
    const server = createServer(app);
    
    // Setup Vite AFTER API routes are registered
    if (env === "development") {
      console.log('Setting up Vite development server...');
      try {
        await setupVite(app, server);
        console.log('Vite development server setup complete');
      } catch (viteError) {
        console.error('Vite setup failed:', viteError);
        console.log('Continuing without Vite...');
      }
    } else {
      console.log('Setting up static file serving...');
      serveStatic(app);
    }

    // Error handler should be LAST
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error('Server error:', err);
      res.status(status).json({ message });
    });

    // Start the server
    const port = 5000;
    server.listen(port, "0.0.0.0", () => {
      log(`Server running on port ${port}`);
      log(`API endpoints: http://localhost:${port}/api/health, http://localhost:${port}/api/contact`);
      log(`Visit http://localhost:${port} to view the portfolio`);
    });
    
    // Keep the process alive
    console.log('Server started successfully. Press Ctrl+C to stop.');
    
    // Add a simple keep-alive mechanism
    setInterval(() => {
      // This will keep the event loop active
    }, 1000);
    
  } catch (error) {
    console.error('Failed to start server:', error);
    console.error('Error stack:', error.stack);
    process.exit(1);
  }
})();
