import Art from "../components/Art.jsx";
import Icon from "../components/Icon.jsx";
import Wave from "../components/Wave.jsx";
import { CONFIG } from "../config.js";

export default function Impatto() {
  return (
    <>
      <section className="page-hero band-blue dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label">Relazione d'impatto</span>
            <h1>Qui rendiamo conto di quello che facciamo.</h1>
            <p className="lead">Come società benefit pubblichiamo ogni anno una relazione sul beneficio comune che perseguiamo, con i numeri della rete e i progetti finanziati.</p>
          </div>
          <div className="hero-art impact-figure">
            <p className="big-number" aria-hidden="true">10%</p>
            <Art name="pictogram" />
          </div>
        </div>
        <Wave color="foam" />
      </section>

      <section className="band band-foam" aria-labelledby="impegni-titolo">
        <div className="wrap split">
          <div className="head">
            <span className="label">Gli impegni</span>
            <h2 id="impegni-titolo">Cosa misuriamo e pubblichiamo.</h2>
          </div>
          <div className="reasons">
            <div><h3>Acqua in Africa</h3><p>La quota del 10% dei ricavi da sponsor versata alla ONG partner, campagna per campagna, con il progetto finanziato.</p></div>
            <div><h3>Plastica</h3><p>Le ricariche registrate nei bar della rete e il metodo con cui le traduciamo in bottiglie di plastica evitate.</p></div>
            <div><h3>Territorio</h3><p>I bar e le aziende che fanno parte della rete e gli eventi in cui abbiamo distribuito le borracce.</p></div>
          </div>
        </div>
      </section>

      <section className="band band-white has-wave" aria-labelledby="doc-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Documenti</span>
            <h2 id="doc-titolo">Relazioni pubblicate</h2>
          </div>
          <div className="docs">
            <div className="doc">
              <span className="file" aria-hidden="true">PDF</span>
              <div><h3>Relazione d'impatto 2026</h3><p>Allegata al bilancio di esercizio 2026.</p></div>
              <a className="btn btn-navy" href={CONFIG.relazione2026Url}>Scarica <Icon name="down" /></a>
            </div>
          </div>
        </div>
        <Wave color="navy" />
      </section>
    </>
  );
}
