import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { store } from "./src/config/store";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "store-metadata",
      transformIndexHtml(html: string) {
        return html
          .replaceAll("%STORE_NAME%", store.name)
          .replaceAll("%STORE_TAGLINE%", store.tagline)
          .replaceAll("%STORE_INK%", store.colors.ink);
      },
    },
  ],
});
