import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "/src") } },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.tsx"),
      name: "CustomUiLibrary",
      fileName: "custom-ui-library",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), tailwindcss(), dts({ rollupTypes: true })],
});
