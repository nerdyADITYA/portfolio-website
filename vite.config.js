import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  const plugins = [
    react(),
    // Temporarily remove replit plugins that might cause issues
    // runtimeErrorOverlay(),
  ];

  // Add cartographer plugin for development in Replit
  // if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  //   const cartographerModule = await import("@replit/vite-plugin-cartographer");
  //   plugins.push(cartographerModule.cartographer());
  // }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});