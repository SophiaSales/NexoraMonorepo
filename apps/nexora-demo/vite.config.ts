import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  ssr: {
    noExternal: ["styled-components", "@sophiasales/nexora-button"],
  },
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"],
    tsconfigPaths: true,
  },
});
