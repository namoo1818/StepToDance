import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "STEP TO DANCE",
        short_name: "STD",
        start_url: "/",
        scope: ".",
        display: "standalone",
        orientation: "portrait", // landscape // portrait // portrait-primary
        background_color: "#fff",
        theme_color: "#fff",
        description: "app description",
        dir: "ltr",
        lang: "ko-KR",
        // icons: [
        //   {
        //     src: "/img/icons/android-icon-36x36.png",
        //     type: "image/png",
        //     sizes: "36x36",
        //   },
        //   {
        //     src: "/img/icons/android-icon-48x48.png",
        //     type: "image/png",
        //     sizes: "48x48",
        //   },
        //   {
        //     src: "/img/icons/android-icon-72x72.png",
        //     type: "image/png",
        //     sizes: "72x72",
        //   },
        //   {
        //     src: "/img/icons/android-icon-96x96.png",
        //     type: "image/png",
        //     sizes: "96x96",
        //   },
        //   {
        //     src: "/img/icons/android-icon-144x144.png",
        //     type: "image/png",
        //     sizes: "144x144",
        //   },
        //   {
        //     src: "/img/icons/android-icon-192x192.png",
        //     type: "image/png",
        //     sizes: "192x192",
        //   },
        // ],
      },
    }),
  ],
});
