import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Site from "./Site.jsx";
import { pageFromPath } from "./pages.js";
import "./styles/site.css";

const root = document.getElementById("root");
// Le pagine pubblicate arrivano già scritte in HTML (data-page dice quale sono):
// React si aggancia a quel markup. In sviluppo la pagina si ricava dall'indirizzo.
const page = root.dataset.page || pageFromPath(window.location.pathname);
const app = (
  <StrictMode>
    <Site page={page} />
  </StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
