import Art from "../components/Art.jsx";
import { IfEmail, EmailLine } from "../components/Email.jsx";
import FwForm, { FormMessage, SubmitButton } from "../components/FwForm.jsx";
import Icon from "../components/Icon.jsx";
import Wave from "../components/Wave.jsx";

export default function Bar() {
  return (
    <>
      <section className="page-hero band-navy dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label">Per i bar</span>
            <h1>Porta al tuo bancone chi oggi beve l'acqua di casa o del supermercato.</h1>
            <p className="lead">Chi ha una borraccia FairWater entra nei bar della rete per riempirla gratis. Ogni ricarica è una persona in più davanti alla tua vetrina e al tuo bancone.</p>
            <div className="actions">
              <a className="btn btn-white" href="#aderisci">Chiedi un incontro <Icon name="down" /></a>
              <a className="btn btn-ghost" href="#requisiti">Requisiti e costi</a>
            </div>
          </div>
          <div className="hero-art"><Art name="decal" /></div>
        </div>
        <Wave color="foam" />
      </section>

      <section className="band band-foam" aria-labelledby="vantaggi-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Cosa ci guadagni</span>
            <h2 id="vantaggi-titolo">La ricarica è gratuita per il cliente, il passaggio al bancone è tuo.</h2>
          </div>
          <div className="perks">
            <div className="perk">
              <span className="blob"><Icon name="door" /></span>
              <h3>Persone in più nel locale</h3>
              <p>Chi riempie la borraccia passa dal tuo bancone, anche nei giorni in cui non sarebbe entrato. È lì che nasce una consumazione.</p>
            </div>
            <div className="perk">
              <span className="blob"><Icon name="coin" /></span>
              <h3>Un motivo in più per ordinare</h3>
              <p>Nell'app i clienti accumulano crediti solo quando consumano qualcosa nei bar della rete, mai con la sola ricarica. I crediti diventano sconti presso le aziende sponsor.</p>
            </div>
            <div className="perk">
              <span className="blob"><Icon name="pin" /></span>
              <h3>Il tuo locale sulla mappa</h3>
              <p>Compari nella mappa dell'app FairWater e ricevi l'adesivo per la vetrina, così chi ha la borraccia sa che può entrare.</p>
            </div>
            <div className="perk">
              <span className="blob"><Icon name="shield" /></span>
              <h3>Regole che ti tutelano</h3>
              <p>Ogni persona ha un numero massimo di ricariche al giorno e valgono solo le borracce FairWater. Puoi rifiutare qualsiasi altro contenitore.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-white" aria-labelledby="bancone-titolo">
        <div className="wrap">
          <div className="head">
            <span className="label">Al bancone</span>
            <h2 id="bancone-titolo">Ecco come si fa una ricarica.</h2>
          </div>
          <ol className="journey">
            <li>
              <span className="stop"><Art name="icon-qr" /></span>
              <h3>Il cliente mostra il codice</h3>
              <p>Ha un codice QR personale nell'app FairWater o nel widget sulla schermata del telefono.</p>
            </li>
            <li>
              <span className="stop"><Art name="icon-cup" /></span>
              <h3>Lo leggi con il telefono del locale</h3>
              <p>La ricarica viene registrata. Se la persona ha già raggiunto il limite del giorno lo vedi subito sullo schermo.</p>
            </li>
            <li>
              <span className="stop"><Art name="icon-bottle" /></span>
              <h3>Riempi la borraccia</h3>
              <p>Con l'acqua del tuo sistema di filtraggio o del depuratore. Il cliente non paga nulla.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="band band-navy dark has-wave" id="requisiti" aria-labelledby="req-titolo">
        <div className="wrap split">
          <div className="head">
            <span className="label">Requisiti e costi</span>
            <h2 id="req-titolo">Cosa serve per entrare nella rete.</h2>
            <p className="lead">Ti raccontiamo tutto di persona, nel tuo locale, con il contratto davanti.</p>
          </div>
          <ul className="checklist">
            <li><b>Acqua</b><span>Un sistema di filtraggio o un depuratore collegato alla rete idrica. Se non ce l'hai ancora, scrivici lo stesso.</span></li>
            <li><b>Attrezzatura</b><span>Uno smartphone o un tablet per leggere i codici dei clienti.</span></li>
            <li><b>Costo</b><span>Un canone mensile, con una tariffa di lancio per il primo anno e fatturazione annuale.</span></li>
            <li><b>Contratto</b><span>Un accordo di adesione al circuito FairWater, con le stesse regole per tutti i bar della rete.</span></li>
          </ul>
        </div>
        <Wave color="sky" />
      </section>

      <section className="band band-sky has-wave" id="aderisci" aria-labelledby="aderisci-titolo">
        <div className="wrap split">
          <div className="head">
            <span className="label">Aderisci</span>
            <h2 id="aderisci-titolo">Raccontaci il tuo locale e ti richiamiamo.</h2>
            <div className="text">
              <p>Compila il modulo: ti chiamiamo per fissare un incontro nel tuo locale.</p>
              <IfEmail><p>Preferisci scrivere direttamente? <EmailLine /></p></IfEmail>
            </div>
          </div>
          <FwForm kind="bar" okMessage="Grazie. Ti chiamiamo nei prossimi giorni per fissare un incontro.">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="bar-locale">Nome del locale</label>
                <input id="bar-locale" name="locale" type="text" autoComplete="organization" required />
              </div>
              <div className="field">
                <label htmlFor="bar-comune">Comune</label>
                <input id="bar-comune" name="comune" type="text" autoComplete="address-level2" required />
              </div>
              <div className="field">
                <label htmlFor="bar-nome">Il tuo nome</label>
                <input id="bar-nome" name="nome" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="bar-tel">Telefono</label>
                <input id="bar-tel" name="telefono" type="tel" autoComplete="tel" required />
              </div>
              <div className="field full">
                <label htmlFor="bar-email">Email <span className="hint">(facoltativa)</span></label>
                <input id="bar-email" name="email" type="email" autoComplete="email" />
              </div>
              <fieldset className="field full">
                <legend>Hai già un sistema di filtraggio o un depuratore?</legend>
                <div className="choices">
                  <label><input type="radio" name="filtro" value="si" id="bar-filtro-si" /> Sì</label>
                  <label><input type="radio" name="filtro" value="no" id="bar-filtro-no" /> No</label>
                  <label><input type="radio" name="filtro" value="non-so" id="bar-filtro-ns" /> Non lo so</label>
                </div>
              </fieldset>
              <div className="field full">
                <label htmlFor="bar-msg">Messaggio <span className="hint">(facoltativo)</span></label>
                <textarea id="bar-msg" name="messaggio"></textarea>
              </div>
            </div>
            <div className="hp" aria-hidden="true"><label htmlFor="bar-sito">Sito</label><input id="bar-sito" name="sito" tabIndex="-1" autoComplete="off" /></div>
            <FormMessage />
            <div className="form-foot">
              <p>Usiamo questi dati solo per ricontattarti. <a href="privacy.html">Informativa privacy</a></p>
              <SubmitButton>Invia la richiesta</SubmitButton>
            </div>
          </FwForm>
        </div>
        <Wave color="navy" />
      </section>
    </>
  );
}
