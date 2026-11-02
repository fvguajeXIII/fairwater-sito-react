// Dopo la build, scrive una pagina HTML completa per ogni voce di src/pages.js,
// con titolo, descrizione e anteprima social propri. Così chi apre il link
// (o Google, o WhatsApp) vede subito il contenuto, anche senza JavaScript.
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const server = await import(pathToFileURL(resolve(root, "dist-server/entry-server.js")).href);
const { render, PAGES, CONFIG } = server;
const template = readFileSync(resolve(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const page of PAGES) {
  const url = CONFIG.siteUrl + "/" + (page.file === "index.html" ? "" : page.file);
  const head = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="it_IT" />`,
    `<meta property="og:site_name" content="FairWater" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${CONFIG.siteUrl}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join("\n    ");
  const html = template
    .replace("<!--head-->", head)
    .replace('<div id="root"></div>', `<div id="root" data-page="${page.key}">${render(page.key)}</div>`);
  writeFileSync(resolve(dist, page.file), html);
  console.log("pagina:", page.file);
}

rmSync(resolve(root, "dist-server"), { recursive: true, force: true });
