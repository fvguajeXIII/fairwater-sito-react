import { IfEmail, EmailLine } from "../components/Email.jsx";
import Icon from "../components/Icon.jsx";
import Wave from "../components/Wave.jsx";

export default function ChiSiamo() {
  return (
    <>
      <section className="page-hero solo band-navy dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="coords">Fondi (LT) · 41°21′N 13°25′E</span>
            <h1>Siamo una società benefit nata a Fondi.</h1>
            <p className="lead">FairWater S.r.l. Società Benefit è una startup innovativa fondata nel 2026. Mettiamo insieme le aziende, i bar e le persone del territorio per ridurre la plastica usa e getta e per finanziare l'accesso all'acqua dove manca.</p>
          </div>
        </div>
        <Wave color="foam" />
      </section>

      <section className="band band-foam" aria-labelledby="perche-titolo">
        <div className="wrap split middle">
          <div className="head">
            <span className="label">Perché lo facciamo</span>
            <h2 id="perche-titolo">Il talento è distribuito ovunque, le occasioni no.</h2>
          </div>
          <div className="text">
            <p>Spesso una vita cambia per un'occasione arrivata al momento giusto: un incontro, una porta aperta, una fonte d'acqua vicino a casa invece che a ore di cammino. Le chiamiamo <strong>eventi casuali positivi</strong>.</p>
            <p>Pensiamo che un'azienda possa crearne qualcuno per gli altri. FairWater ci prova con una cosa semplice come l'acqua: a Fondi la rende gratuita in una borraccia che si riusa, in Africa finanzia progetti che la portano dove serve.</p>
          </div>
        </div>
      </section>

      <section className="band band-white" aria-labelledby="team-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Le persone</span>
            <h2 id="team-titolo">Chi c'è dietro FairWater.</h2>
          </div>
          <div className="people">
            <article className="person">
              <span className="portrait" aria-hidden="true">DM</span>
              <div>
                <span className="role">Fondatore e amministratore unico</span>
                <h3>Davide Manna</h3>
                <p>Fotografo e videomaker, nato a Fondi nel 1999, con lavori esposti anche all'estero. Segue i rapporti con bar e aziende e l'immagine di FairWater.</p>
              </div>
            </article>
            <article className="person">
              <span className="portrait" aria-hidden="true">FV</span>
              <div>
                <span className="role">Co-fondatore e CTO</span>
                <h3>Fabio Vellucci</h3>
                <p>Progetta e sviluppa l'app FairWater: la registrazione, la lettura dei codici al bancone e il registro delle ricariche.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="band band-blue dark has-wave" aria-labelledby="sb-titolo">
        <div className="wrap split middle">
          <div className="head">
            <span className="label">Società benefit</span>
            <h2 id="sb-titolo">Cosa significa essere una società benefit.</h2>
          </div>
          <div className="text">
            <p>Una società benefit è un'impresa che, oltre al profitto, persegue per statuto una o più finalità di beneficio comune. Ogni anno ne rende conto con una relazione d'impatto pubblicata sul proprio sito, come prevede la legge 208 del 2015.</p>
            <p>FairWater è anche iscritta alla sezione speciale del Registro delle imprese dedicata alle startup innovative.</p>
            <p><a className="btn btn-white" href="impatto.html">Vai alla relazione d'impatto <Icon name="arrow" /></a></p>
          </div>
        </div>
        <Wave color="foam" />
      </section>

      <section className="band band-foam has-wave" aria-labelledby="contatti-titolo">
        <div className="wrap">
          <div className="app-strip dark">
            <div>
              <h2 id="contatti-titolo">Scrivici, ti rispondiamo noi due.</h2>
              <IfEmail><p><EmailLine /></p></IfEmail>
              <p>Hai un bar o un'azienda? Usa il modulo dedicato e ti ricontattiamo.</p>
            </div>
            <div className="actions">
              <a className="btn btn-white" href="bar.html#aderisci">Ho un bar</a>
              <a className="btn btn-ghost" href="aziende.html#contatto">Ho un'azienda</a>
            </div>
          </div>
        </div>
        <Wave color="navy" />
      </section>
    </>
  );
}
