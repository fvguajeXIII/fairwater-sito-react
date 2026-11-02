import { IfEmail, EmailLine, Cfg } from "../components/Email.jsx";
import Wave from "../components/Wave.jsx";

export default function Privacy() {
  return (
    <>
      {/* BOZZA: testo da far verificare al consulente legale prima della pubblicazione */}
      <section className="page-hero solo band-navy dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label">Privacy</span>
            <h1>Informativa privacy</h1>
            <p className="lead">Questo sito non usa cookie di profilazione, non carica strumenti di analisi e non richiama font o script da server esterni.</p>
          </div>
        </div>
        <Wave color="white" />
      </section>

      <section className="band band-white has-wave">
        <div className="wrap">
          <div className="legal-text">
            <section>
              <h2>Chi tratta i tuoi dati</h2>
              <p>Il titolare del trattamento è FairWater S.r.l. Società Benefit, con sede legale in <Cfg k="sede" />, P.IVA <Cfg k="piva" />.</p>
              <IfEmail><p>Per qualsiasi richiesta sui tuoi dati puoi scrivere a <EmailLine /></p></IfEmail>
            </section>
            <section>
              <h2>Quali dati raccogliamo</h2>
              <ul>
                <li>Dai moduli del sito: nome, nome del locale o dell'azienda, comune, telefono, email e il messaggio che ci scrivi.</li>
                <li>Dall'app FairWater: i dati del tuo account, le ricariche registrate nei bar e i crediti accumulati.</li>
                <li>Dalla navigazione: i dati tecnici che il fornitore di hosting registra per la sicurezza del sito, come l'indirizzo IP.</li>
              </ul>
            </section>
            <section>
              <h2>Perché li usiamo</h2>
              <p>Usiamo i dati dei moduli per rispondere alla tua richiesta e, se lo vuoi, per preparare un accordo con te. Usiamo i dati dell'app per far funzionare la ricarica: riconoscere il tuo codice, rispettare il limite giornaliero e calcolare i crediti. La base giuridica è l'esecuzione di misure precontrattuali o del contratto (art. 6.1.b del Regolamento UE 2016/679).</p>
            </section>
            <section>
              <h2>Per quanto tempo li conserviamo</h2>
              <p>Per il tempo necessario a rispondere alla richiesta oppure, se nasce un rapporto con noi, per la durata del contratto e degli obblighi di legge che ne derivano.</p>
            </section>
            <section>
              <h2>Con chi li condividiamo</h2>
              <p>Solo con i fornitori tecnici che ci aiutano a gestire il sito e l'app, che trattano i dati per nostro conto. Non vendiamo i tuoi dati e non li usiamo per pubblicità.</p>
            </section>
            <section>
              <h2>I tuoi diritti</h2>
              <p>Puoi chiederci in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli, limitarne l'uso, opporti al trattamento o riceverli in un formato leggibile. Se ritieni che il trattamento non sia corretto puoi presentare un reclamo al Garante per la protezione dei dati personali.</p>
            </section>
            <p className="small">Ultimo aggiornamento: ottobre 2026.</p>
          </div>
        </div>
        <Wave color="navy" />
      </section>
    </>
  );
}
