import { LOGO_PATHS, LOGO_VIEWBOX } from "./logoData.js";

const [, , W, H] = LOGO_VIEWBOX.split(" ").map(Number);

// Il logo è definito una sola volta per pagina e richiamato ovunque con <use>.
export function LogoSymbol() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<symbol id="fw-logo" viewBox="${LOGO_VIEWBOX}">${LOGO_PATHS}</symbol>` }}
    />
  );
}

export function Logo({ height = 40, className, style }) {
  return (
    <svg
      className={className}
      viewBox={LOGO_VIEWBOX}
      width={Math.round((height * W) / H)}
      height={height}
      role="img"
      aria-label="FairWater"
      style={style}
    >
      <use href="#fw-logo" />
    </svg>
  );
}

export { LOGO_VIEWBOX };
