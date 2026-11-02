// Onda che fa da passaggio fra una fascia di colore e la successiva.
// color è il nome del colore della fascia che segue (foam, navy, white, blue, sky).
export default function Wave({ color }) {
  return (
    <div className="wave" style={{ "--wave": `var(--${color})` }} aria-hidden="true">
      <svg className="back" viewBox="0 0 2880 100" preserveAspectRatio="none">
        <path d="M0 50C240 0 480 0 720 50S1200 100 1440 50S1920 0 2160 50S2640 100 2880 50V100H0Z" />
      </svg>
      <svg viewBox="0 0 2880 100" preserveAspectRatio="none">
        <path d="M0 60C240 20 480 20 720 60S1200 100 1440 60S1920 20 2160 60S2640 100 2880 60V100H0Z" />
      </svg>
    </div>
  );
}
