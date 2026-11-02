import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PAGES } from "./src/pages.js";

// In sviluppo, /persone.html e le altre pagine servono tutte index.html:
// è il codice React a decidere quale pagina mostrare.
const pagesInDev = {
  name: "fairwater-pages-in-dev",
  configureServer(server) {
    const files = new Set(PAGES.map((p) => "/" + p.file));
    server.middlewares.use((req, _res, next) => {
      const path = req.url.split(/[?#]/)[0];
      if (files.has(path)) req.url = "/index.html";
      next();
    });
  },
};

export default defineConfig({
  base: "./", // percorsi relativi: il sito funziona in qualsiasi cartella o dominio
  plugins: [react(), pagesInDev],
});
