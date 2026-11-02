import Art from "../components/Art.jsx";
import Icon from "../components/Icon.jsx";
import Stores from "../components/Stores.jsx";
import Wave from "../components/Wave.jsx";

export default function Persone() {
  return (
    <>
      <section className="page-hero band-blue dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label">Per te</span>
            <h1>Una borraccia in regalo e acqua gratis nei bar della rete.</h1>
            <p className="lead">La borraccia FairWater la paga un'azienda del territorio e tu la ricevi a un evento. Da quel momento puoi riempirla senza pagare in tutti i bar che aderiscono.</p>
            <div className="actions">
              <a className="btn btn-white" href="#app">Scarica l'app <Icon name="down" /></a>
              <a className="btn btn-ghost" href="#regole">Leggi le regole</a>
            </div>
          </div>
          <div className="hero-art"><Art name="phone" /></div>
        </div>
        <Wave color="foam" />
      </section>

      <section className="band band-foam" id="ricevila" aria-labelledby="ricevila-titolo">
        <div className="wrap split middle">
          <div className="head">
            <span className="label">Come la ricevi</span>
            <h2 id="ricevila-titolo">Le borracce si distribuiscono agli eventi del territorio.</h2>
          </div>
          <div className="text">
            <p>Ogni campagna è legata a un evento: una sagra, una fiera, una manifestazione sportiva. Chi partecipa riceve la borraccia con il logo delle aziende che l'hanno sponsorizzata.</p>
            <p>Insieme alla borraccia ricevi il <strong>codice della campagna</strong>, che ti serve per attivarla nell'app la prima volta.</p>
          </div>
        </div>
      </section>

      <section className="band band-white" aria-labelledby="riempi-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Come la riempi</span>
            <h2 id="riempi-titolo">Al bancone ci vogliono pochi secondi.</h2>
          </div>
          <ol className="journey">
            <li>
              <span className="stop"><Art name="icon-cup" /></span>
              <h3>Entra in un bar della rete</h3>
              <p>Li trovi sulla mappa dell'app e li riconosci dall'adesivo FairWater in vetrina.</p>
            </li>
            <li>
              <span className="stop"><Art name="icon-qr" /></span>
              <h3>Mostra il tuo codice QR</h3>
              <p>Il codice è nell'app. Puoi anche metterlo in un widget sulla schermata del telefono, così non devi aprire l'app ogni volta.</p>
            </li>
            <li>
              <span className="stop"><Art name="icon-bottle" /></span>
              <h3>Il barista riempie la borraccia</h3>
              <p>Legge il codice e te la riempie con acqua filtrata. Non paghi nulla.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="band band-white" id="app" aria-label="Scarica l'app" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="app-strip dark">
            <div>
              <h2>Scarica l'app FairWater.</h2>
              <p>È gratuita, per iPhone e per Android. Ti serve per attivare la borraccia e per mostrare il codice al bancone.</p>
            </div>
            <Stores />
          </div>
        </div>
      </section>

      <section className="band band-sky" id="regole" aria-labelledby="regole-titolo">
        <div className="wrap split middle">
          <div className="head">
            <span className="label">Le regole</span>
            <h2 id="regole-titolo">Poche regole, uguali in tutti i bar.</h2>
            <div className="text">
              <p>Servono a far durare il servizio. Tengono lontano chi vorrebbe riempire taniche e permettono ai bar di offrire l'acqua senza rimetterci.</p>
              <p>Il barista può rifiutare qualsiasi contenitore che non sia la borraccia FairWater.</p>
              <p>Quando consumi qualcosa in un bar della rete accumuli <strong>crediti</strong>. Raggiunta la soglia, diventano uno sconto presso le aziende che sponsorizzano FairWater. La sola ricarica non dà crediti.</p>
            </div>
          </div>
          <div className="receipt" role="group" aria-label="Le regole della ricarica, in forma di scontrino">
            <div className="r-head"><b>FAIRWATER</b><span>Regole della ricarica</span></div>
            <dl>
              <div><dt>Ricariche in inverno</dt><dd>3 al giorno</dd></div>
              <div><dt>Ricariche in estate</dt><dd>5 al giorno</dd></div>
              <div><dt>Bar</dt><dd>Tutta la rete</dd></div>
              <div><dt>Contenitore</dt><dd>Borraccia FairWater</dd></div>
              <div><dt>Crediti</dt><dd>Con le consumazioni</dd></div>
            </dl>
            <div className="r-total"><span>TOTALE</span><b>€ 0,00</b></div>
            <p className="r-foot">La borraccia, l'app e la ricarica sono gratuite.</p>
          </div>
        </div>
      </section>

      <section className="band band-foam has-wave" aria-labelledby="faq-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Domande frequenti</span>
            <h2 id="faq-titolo">Quello che ci chiedono più spesso.</h2>
          </div>
          <div className="faq">
            <details>
              <summary>Ma è acqua del rubinetto?</summary>
              <div className="answer"><p>Sì, parte dalla rete idrica, che in Italia è controllata per legge dal gestore e dalla ASL. Nella rete FairWater entrano però solo bar con un sistema di filtraggio o un depuratore, quindi nella tua borraccia arriva acqua trattata dal bar.</p></div>
            </details>
            <details>
              <summary>Di che materiale è la borraccia?</summary>
              <div className="answer"><p>È in Tritan, una plastica rigida e trasparente senza BPA, fatta per essere lavata e riusata a lungo.</p></div>
            </details>
            <details>
              <summary>Posso comprarla?</summary>
              <div className="answer"><p>No. La borraccia non è in vendita: la pagano le aziende che sponsorizzano le campagne e la ricevi gratis agli eventi.</p></div>
            </details>
            <details>
              <summary>Posso riempire un'altra borraccia mostrando il mio codice?</summary>
              <div className="answer"><p>No. Il servizio vale solo per le borracce FairWater e il barista può rifiutare gli altri contenitori. È anche il modo in cui le aziende che pagano le borracce ottengono visibilità.</p></div>
            </details>
            <details>
              <summary>Dove scarico l'app?</summary>
              <div className="answer"><p>Su App Store per iPhone e su Google Play per Android: cerca FairWater oppure usa i pulsanti in questa pagina.</p></div>
            </details>
            <details>
              <summary>Che dati raccoglie l'app?</summary>
              <div className="answer"><p>Quelli che servono a far funzionare la ricarica: il tuo account, le ricariche fatte e i crediti accumulati. Trovi tutti i dettagli nell'<a href="privacy.html">informativa privacy</a>.</p></div>
            </details>
          </div>
        </div>
        <Wave color="navy" />
      </section>
    </>
  );
}
