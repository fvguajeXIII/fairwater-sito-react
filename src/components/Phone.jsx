import qr from "../art/qr.svg?raw";
import RawSvg from "./RawSvg.jsx";
import { LOGO_VIEWBOX } from "./Logo.jsx";

// Il telefono con la schermata vera dell'app: codice QR, ricariche del giorno, crediti.
export default function Phone() {
  return (
    <div
      className="phone"
      role="img"
      aria-label="L'app FairWater: il codice QR da mostrare al bancone e il conteggio delle ricariche del giorno"
    >
      <div className="phone-screen" aria-hidden="true">
        <div className="app-top">
          <div className="app-status">
            <span>10:30</span>
            <span className="app-sig">
              <i />
              <i />
              <i />
            </span>
          </div>
          <svg className="app-logo" viewBox={LOGO_VIEWBOX}>
            <use href="#fw-logo" style={{ "--logo-a": "#FFFFFF", "--logo-b": "#CFE3FF" }} />
          </svg>
          <p className="app-hello">Ciao! La tua borraccia è attiva.</p>
        </div>
        <div className="app-qr">
          <p className="app-cap">Il tuo codice</p>
          <RawSvg source={qr} />
          <p className="app-hint">Mostralo al bancone del bar</p>
        </div>
        <div className="app-stats">
          <div>
            <p className="app-cap">Ricariche di oggi</p>
            <p className="app-dots">
              <i className="on" />
              <i className="on" />
              <i />
              <i />
              <i />
            </p>
            <p className="app-num">2 su 5</p>
          </div>
          <div>
            <p className="app-cap">Crediti</p>
            <p className="app-num big">12</p>
          </div>
        </div>
        <div className="app-near">
          <span className="pin" />
          Bar della rete più vicino<b>350 m</b>
        </div>
        <div className="app-tabs">
          <span>Mappa</span>
          <span className="on">Codice</span>
          <span>Profilo</span>
        </div>
      </div>
    </div>
  );
}
