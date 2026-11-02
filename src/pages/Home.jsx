import Art from "../components/Art.jsx";
import Icon from "../components/Icon.jsx";
import Wave from "../components/Wave.jsx";

export default function Home() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label">La rete dell'acqua del Sud Pontino</span>
            <h1>Questa borraccia si riempie <span className="hl">gratis</span> in tutti i bar della rete.</h1>
            <p className="lead">Te la regalano le aziende del territorio agli eventi della tua zona. Al bancone mostri il codice dell'app e il barista te la riempie di acqua filtrata.</p>
            <div className="actions">
              <a className="btn btn-white" href="/webapp">Apri la web app <Icon name="arrow" /></a>
              <a className="btn btn-ghost" href="persone.html">Come ricevere la borraccia</a>
            </div>
          </div>
          <div className="hero-art">
            <Art name="bottle-cutout" />
            <Art name="sticker" />
          </div>
        </div>
        <Wave color="foam" />
      </section>

      <section className="band band-foam has-wave" id="app" aria-labelledby="app-titolo">
        <div className="wrap app-grid">
          <div className="phone-stage"><Art name="phone" /></div>
          <div className="app-copy">
            <span className="label">Hai già la borraccia?</span>
            <h2 id="app-titolo">Apri FairWater dal browser e riempila al primo bar della rete.</h2>
            <ol className="numbered">
              <li><h3>Apri FairWater</h3><p>La web app funziona da browser, su computer e smartphone: non serve installarla.</p></li>
              <li><h3>Attiva la borraccia</h3><p>Inserisci il codice della campagna che ricevi all'evento insieme alla borraccia.</p></li>
              <li><h3>Mostra il codice al bancone</h3><p>Il barista lo legge e ti riempie la borraccia. Puoi tenere il codice in un widget sulla schermata del telefono.</p></li>
            </ol>
            <a className="btn btn-navy" href="/webapp">Entra nella web app <Icon name="arrow" /></a>
            <p className="small">Puoi fare 3 ricariche al giorno in inverno e 5 in estate, solo con la borraccia FairWater. <a href="persone.html#regole">Leggi tutte le regole</a></p>
          </div>
        </div>
        <Wave color="navy" />
      </section>

      <section className="band band-navy dark has-wave" id="ingressi" aria-labelledby="ingressi-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Da dove parti</span>
            <h2 id="ingressi-titolo">FairWater funziona se ci sono tutti e tre.</h2>
          </div>
          <div className="doors">
            <a className="door door-a" href="persone.html">
              <Art name="icon-bottle" />
              <span className="label">Per te</span>
              <h3>Voglio la borraccia</h3>
              <p>Come riceverla, dove riempirla e quali sono le regole della ricarica gratuita.</p>
              <span className="go">Scopri come<i><Icon name="arrow" /></i></span>
            </a>
            <a className="door door-b" href="bar.html">
              <Art name="icon-cup" />
              <span className="label">Per i bar</span>
              <h3>Ho un bar</h3>
              <p>Chi ha la borraccia entra nel tuo locale per riempirla. Ti spieghiamo cosa ci guadagni e come si aderisce.</p>
              <span className="go">Entra nella rete<i><Icon name="arrow" /></i></span>
            </a>
            <a className="door door-c" href="aziende.html">
              <Art name="icon-building" />
              <span className="label">Per le aziende</span>
              <h3>Ho un'azienda</h3>
              <p>Il tuo logo su borracce che le persone usano ogni giorno, distribuite agli eventi del territorio.</p>
              <span className="go">Vedi i formati<i><Icon name="arrow" /></i></span>
            </a>
          </div>
        </div>
        <Wave color="white" />
      </section>

      <section className="band band-white has-wave" id="come-funziona" aria-labelledby="come-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Come funziona</span>
            <h2 id="come-titolo">Una campagna FairWater segue sempre lo stesso percorso.</h2>
          </div>
          <ol className="journey">
            <li>
              <span className="stop"><Art name="icon-building" /></span>
              <h3>Un'azienda sponsorizza una campagna</h3>
              <p>Sceglie un evento del territorio e un numero di borracce. Il suo logo viene stampato sulla borraccia, che è in Tritan, una plastica rigida senza BPA fatta per essere riusata a lungo.</p>
            </li>
            <li>
              <span className="stop"><Art name="icon-event" /></span>
              <h3>Distribuiamo le borracce all'evento</h3>
              <p>Chi partecipa riceve la borraccia gratis e si registra all'app FairWater, anche questo senza pagare nulla.</p>
            </li>
            <li>
              <span className="stop"><Art name="icon-cup" /></span>
              <h3>La borraccia si riempie gratis al bar</h3>
              <p>Nei bar della rete basta mostrare il codice QR dell'app al bancone. Il barista lo legge e riempie la borraccia con acqua filtrata.</p>
            </li>
          </ol>
        </div>
        <Wave color="blue" />
      </section>

      <section className="band band-blue dark has-wave" id="impatto" aria-labelledby="impatto-titolo">
        <div className="wrap impact-grid">
          <div className="head" style={{ marginBottom: 0 }}>
            <span className="label">Impatto</span>
            <h2 id="impatto-titolo">Una parte di ogni campagna va a chi l'acqua non ce l'ha vicino a casa.</h2>
            <div className="text">
              <p>Il 10% dei ricavi che riceviamo dalle aziende finanzia progetti per l'accesso all'acqua in Africa, realizzati da una ONG partner. Come società benefit rendiamo conto pubblicamente di come usiamo questi soldi.</p>
              <p>Per ogni campagna pubblichiamo la cifra versata e il progetto a cui è andata, e ogni anno la <a className="inline-link" href="impatto.html">relazione d'impatto</a>.</p>
            </div>
          </div>
          <div className="impact-figure">
            <p className="big-number" aria-hidden="true">10%</p>
            <Art name="pictogram" />
            <p className="caption">Su ogni 100 € di campagna, <b>10 €</b> vanno ai progetti per l'acqua. Ogni ricarica al bar, intanto, può sostituire una bottiglia di plastica usa e getta.</p>
          </div>
        </div>
        <Wave color="navy" />
      </section>
    </>
  );
}
