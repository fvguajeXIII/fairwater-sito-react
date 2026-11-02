import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import Site from "./Site.jsx";

export { PAGES } from "./pages.js";
export { CONFIG } from "./config.js";

export function render(page) {
  return renderToString(
    <StrictMode>
      <Site page={page} />
    </StrictMode>
  );
}
