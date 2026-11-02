// Disegna un SVG partendo dal suo sorgente testuale (file .svg importati con ?raw).
// L'elemento <svg> esterno resta un vero elemento React, con le sue classi:
// così il foglio di stile lo tratta esattamente come nella versione statica.
const ATTRS = {
  class: "className",
  viewBox: "viewBox",
  role: "role",
  "aria-label": "aria-label",
  "aria-hidden": "aria-hidden",
  "shape-rendering": "shapeRendering",
  fill: "fill",
  stroke: "stroke",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  width: "width",
  height: "height",
};

const cache = new Map();

function parse(source) {
  if (cache.has(source)) return cache.get(source);
  const match = source.match(/<svg([^>]*)>([\s\S]*)<\/svg>/);
  if (!match) throw new Error("SVG non valido");
  const props = {};
  for (const [, name, value] of match[1].matchAll(/([\w:-]+)="([^"]*)"/g)) {
    if (ATTRS[name]) props[ATTRS[name]] = value;
  }
  const parsed = { props, inner: match[2].trim() };
  cache.set(source, parsed);
  return parsed;
}

export default function RawSvg({ source, className }) {
  const { props, inner } = parse(source);
  const cls = [props.className, className].filter(Boolean).join(" ") || undefined;
  return <svg {...props} className={cls} dangerouslySetInnerHTML={{ __html: inner }} />;
}
