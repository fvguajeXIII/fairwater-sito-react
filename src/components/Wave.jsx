// Onda che fa da passaggio fra una fascia di colore e la successiva.
// color è il nome del colore della fascia che segue (foam, navy, white, blue, sky).
//
// Ogni livello è una somma di onde di lunghezza diversa, così il profilo non si ripete
// uguale come una sinusoide. Il disegno copre due periodi (2880 unità) e scorre di metà
// larghezza: il punto di arrivo coincide con quello di partenza e il movimento non ha scatti.

const PERIOD = 1440;
const WIDTH = PERIOD * 2;
const STEP = 40;

// [armonica, ampiezza, fase]: l'armonica è un numero intero, quindi ogni componente
// si chiude esattamente su un periodo.
const LAYERS = [
  { name: "far", base: 40, parts: [[1, 17, 0.4], [2, 9, 2.1], [3, 5, 4.0], [5, 2, 1.2]] },
  { name: "mid", base: 52, parts: [[1, 14, 2.6], [2, 8, 0.3], [4, 4, 3.3], [6, 1.8, 5.1]] },
  { name: "near", base: 64, parts: [[1, 12, 5.0], [2, 7, 1.4], [3, 4.5, 2.8], [7, 1.5, 0.6]] },
];

function height(layer, x) {
  return layer.parts.reduce(
    (y, [k, a, phase]) => y + a * Math.sin((2 * Math.PI * k * x) / PERIOD + phase),
    layer.base,
  );
}

// Curva morbida che passa per tutti i punti (Catmull-Rom convertita in Bézier).
function wavePath(layer) {
  const pts = [];
  for (let x = -STEP; x <= WIDTH + STEP; x += STEP) pts.push([x, height(layer, x)]);
  const r = (n) => Math.round(n * 10) / 10;
  let d = `M0 ${r(pts[1][1])}`;
  for (let i = 1; i < pts.length - 2; i++) {
    const [p0, p1, p2, p3] = [pts[i - 1], pts[i], pts[i + 1], pts[i + 2]];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${r(c1[0])} ${r(c1[1])} ${r(c2[0])} ${r(c2[1])} ${r(p2[0])} ${r(p2[1])}`;
  }
  return `${d}V100H0Z`;
}

const PATHS = LAYERS.map((layer) => ({ name: layer.name, d: wavePath(layer) }));

export default function Wave({ color }) {
  return (
    <div className="wave" style={{ "--wave": `var(--${color})` }} aria-hidden="true">
      {PATHS.map(({ name, d }) => (
        <svg key={name} className={`wave-${name}`} viewBox={`0 0 ${WIDTH} 100`} preserveAspectRatio="none">
          <path d={d} />
        </svg>
      ))}
    </div>
  );
}
