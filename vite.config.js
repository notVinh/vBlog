import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://v-blog-api.vercel.app",
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\//, ""),
      },
    },
  },
  plugins: [react()],
});
