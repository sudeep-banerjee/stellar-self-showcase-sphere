import { defineConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  // Use environment variables for dynamic configuration
  const isDevelopment = mode === "development";

  return {
    server: {
      host: "::",
      port: 8080,
      open: true, // Automatically open in browser
      strictPort: true, // Fails if the port is already in use
    },
    plugins: [
      react(),
      isDevelopment && componentTagger(), // Only include in dev mode
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~components": path.resolve(__dirname, "./src/components"),
        "~styles": path.resolve(__dirname, "./src/styles"),
      },
    },
    build: {
      outDir: "dist",
      sourcemap: isDevelopment,
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
    define: {
      __DEV__: JSON.stringify(isDevelopment),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/global.scss";`,
        },
      },
    },
  };
});
