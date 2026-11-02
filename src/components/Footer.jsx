import { CONFIG } from "../config.js";
import { Cfg, EmailLine } from "./Email.jsx";
import { Logo } from "./Logo.jsx";
import Stores from "./Stores.jsx";

export default function Footer() {
  return (
    <footer className="site-footer" id="contatti">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo height={52} className="logo" />
            <p>
              La borraccia te la regalano le aziende del territorio, l'acqua te la offrono i bar della rete. Siamo a
              Fondi, in provincia di Latina.
            </p>
            <div className="dark">
              <Stores />
            </div>
          </div>
          <div>
            <h2>Il sito</h2>
            <ul>
              <li><a href="persone.html">Per te</a></li>
              <li><a href="bar.html">Per i bar</a></li>
              <li><a href="aziende.html">Per le aziende</a></li>
              <li><a href="chi-siamo.html">Chi siamo</a></li>
              <li><a href="impatto.html">Relazione d'impatto</a></li>
            </ul>
          </div>
          <div>
            <h2>Contatti</h2>
            <ul>
              {CONFIG.email ? (
                <li><EmailLine /></li>
              ) : (
                <>
                  <li><a href="bar.html#aderisci">Scrivici se hai un bar</a></li>
                  <li><a href="aziende.html#contatto">Scrivici se hai un'azienda</a></li>
                </>
              )}
              <li>Fondi (LT)</li>
            </ul>
          </div>
        </div>
        <p className="legal">
          FairWater S.r.l. Società Benefit · Sede legale <Cfg k="sede" /> · P.IVA e C.F. <Cfg k="piva" /> · REA{" "}
          <Cfg k="rea" /> · Capitale sociale € 100,00 i.v. · Startup innovativa iscritta nella sezione speciale del
          Registro delle imprese · <a href="privacy.html">Privacy</a>
        </p>
      </div>
    </footer>
  );
}
