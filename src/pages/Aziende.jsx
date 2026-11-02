import Art from "../components/Art.jsx";
import { IfEmail, EmailLine } from "../components/Email.jsx";
import FwForm, { FormMessage, SubmitButton } from "../components/FwForm.jsx";
import Icon from "../components/Icon.jsx";
import Wave from "../components/Wave.jsx";

export default function Aziende() {
  return (
    <>
      <section className="page-hero band-deep dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label">Per le aziende</span>
            <h1>Il logo della tua azienda su una borraccia che le persone usano ogni giorno.</h1>
            <p className="lead">Distribuiamo borracce con il tuo marchio agli eventi del territorio. Chi le riceve le porta con sé e le riempie gratis nei bar della rete FairWater. Il 10% di quello che paghi finanzia progetti per l'acqua in Africa.</p>
            <div className="actions">
              <a className="btn btn-white" href="#contatto">Richiedi il listino <Icon name="down" /></a>
              <a className="btn btn-ghost" href="#formati">Vedi i formati</a>
            </div>
          </div>
          <div className="hero-art"><Art name="bottles-brand" /></div>
        </div>
        <Wave color="foam" />
      </section>

      <section className="band band-foam" id="formati" aria-labelledby="formati-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Formati</span>
            <h2 id="formati-titolo">Puoi avere la borraccia tutta per te o condividerla con altre aziende.</h2>
          </div>
          <div className="formats">
            <article className="format">
              <span className="tag">Esclusiva</span>
              <h3>Sponsor unico</h3>
              <p>Sulla borraccia c'è solo il tuo logo. Scegli quante borracce distribuire.</p>
              <div className="qty" aria-label="Quantità disponibili"><span>150<small>borracce</small></span><span>300<small>borracce</small></span><span>500<small>borracce</small></span></div>
            </article>
            <article className="format">
              <span className="tag">Condivisa</span>
              <h3>Campagna multi-sponsor</h3>
              <p>Entri come sponsor principale, con il logo in evidenza, oppure come co-sponsor accanto ad altre aziende del territorio, con un investimento più basso.</p>
              <ul>
                <li>Lo sponsor principale avvia la campagna</li>
                <li>I posti da co-sponsor si aggiungono dopo</li>
              </ul>
            </article>
            <article className="format pick">
              <span className="tag">Il formato che consigliamo</span>
              <h3>Pacchetto Stagione</h3>
              <p>Tre campagne nell'arco dell'anno, a sponsor unico o condivise. Il tuo logo torna in circolazione a ogni evento e le borracce si sommano.</p>
              <ul>
                <li>Vale anche per i co-sponsor</li>
                <li>Eventi scelti insieme a inizio stagione</li>
              </ul>
            </article>
          </div>
          <p className="note-line">I prezzi dipendono dal formato e dal numero di borracce. Ti mandiamo il listino completo su richiesta.</p>
        </div>
      </section>

      <section className="band band-white" aria-labelledby="campagna-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Come si svolge una campagna</span>
            <h2 id="campagna-titolo">Dal logo all'evento ci pensiamo noi.</h2>
          </div>
          <ol className="numbered" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "32px" }}>
            <li><h3>Scegli evento e formato</h3><p>Ti mostriamo su una mappa gli eventi del territorio in calendario e scegli dove distribuire le borracce.</p></li>
            <li><h3>Prepariamo la stampa</h3><p>Ci mandi il logo e noi prepariamo la grafica. Le borracce sono in Tritan, una plastica rigida senza BPA.</p></li>
            <li><h3>Distribuiamo all'evento</h3><p>Le borracce vanno gratis ai partecipanti, che si registrano all'app per usare la ricarica nei bar.</p></li>
            <li><h3>Ricevi il resoconto</h3><p>A fine campagna ti mandiamo un resoconto con le borracce distribuite e la quota versata ai progetti per l'acqua.</p></li>
          </ol>
        </div>
      </section>

      <section className="band band-foam" aria-labelledby="perche-titolo">
        <div className="wrap split">
          <div className="head">
            <span className="label">Perché funziona</span>
            <h2 id="perche-titolo">Una borraccia si usa tutti i giorni, e il tuo logo con lei.</h2>
          </div>
          <div className="reasons">
            <div><h3>Si vede ogni giorno</h3><p>Un volantino finisce nel cestino dopo pochi secondi. Una borraccia viene riempita, portata in ufficio, in palestra e in spiaggia.</p></div>
            <div><h3>Parla al tuo territorio</h3><p>Le borracce vengono distribuite agli eventi della tua zona, a persone che possono diventare tuoi clienti.</p></div>
            <div><h3>Ha un impatto che puoi raccontare</h3><p>Il 10% del valore della campagna va a progetti per l'accesso all'acqua in Africa, realizzati da una ONG partner. Nel resoconto trovi la cifra versata.</p></div>
          </div>
        </div>
      </section>

      <section className="band band-sky has-wave" id="contatto" aria-labelledby="contatto-titolo">
        <div className="wrap split">
          <div className="head">
            <span className="label">Contatto</span>
            <h2 id="contatto-titolo">Parliamo della tua prima campagna.</h2>
            <div className="text">
              <p>Ti mandiamo il listino e il calendario degli eventi disponibili, poi fissiamo un incontro.</p>
              <IfEmail><p>Preferisci scrivere direttamente? <EmailLine /></p></IfEmail>
            </div>
          </div>
          <FwForm kind="azienda" okMessage="Grazie. Ti mandiamo il listino e ti contattiamo per fissare un incontro.">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="az-nome-azienda">Azienda</label>
                <input id="az-nome-azienda" name="azienda" type="text" autoComplete="organization" required />
              </div>
              <div className="field">
                <label htmlFor="az-referente">Referente</label>
                <input id="az-referente" name="referente" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="az-email">Email</label>
                <input id="az-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="az-tel">Telefono <span className="hint">(facoltativo)</span></label>
                <input id="az-tel" name="telefono" type="tel" autoComplete="tel" />
              </div>
              <div className="field full">
                <label htmlFor="az-formato">Formato che ti interessa</label>
                <select id="az-formato" name="formato">
                  <option value="non-so">Non lo so ancora</option>
                  <option value="sponsor-unico">Sponsor unico</option>
                  <option value="multi-sponsor">Campagna multi-sponsor</option>
                  <option value="stagione">Pacchetto Stagione</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="az-msg">Messaggio <span className="hint">(facoltativo)</span></label>
                <textarea id="az-msg" name="messaggio" placeholder="Per esempio un evento a cui stai pensando"></textarea>
              </div>
            </div>
            <div className="hp" aria-hidden="true"><label htmlFor="az-sito">Sito</label><input id="az-sito" name="sito" tabIndex="-1" autoComplete="off" /></div>
            <FormMessage />
            <div className="form-foot">
              <p>Usiamo questi dati solo per risponderti. <a href="privacy.html">Informativa privacy</a></p>
              <SubmitButton>Richiedi il listino</SubmitButton>
            </div>
          </FwForm>
        </div>
        <Wave color="navy" />
      </section>
    </>
  );
}
