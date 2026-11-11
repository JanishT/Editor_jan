import path from "path";
import fs from "fs";
import react from "@vitejs/plugin-react";
import { defineConfig, Plugin } from "vite";

function copySpaPages(): Plugin {
  return {
    name: "copy-spa-pages",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(distDir, "index.html");
      if (fs.existsSync(indexPath)) {
        // 1. Copy to 404.html for GitHub Pages fallback
        fs.copyFileSync(indexPath, path.join(distDir, "404.html"));

        // 2. Create dist/work/index.html so https://janisht.com/work loads directly on GitHub Pages
        const workDir = path.join(distDir, "work");
        if (!fs.existsSync(workDir)) {
          fs.mkdirSync(workDir, { recursive: true });
        }
        fs.copyFileSync(indexPath, path.join(workDir, "index.html"));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copySpaPages()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
