import { CONFIG } from "../config.js";
import Icon from "./Icon.jsx";

export default function Stores() {
  return (
    <div className="stores">
      <a className="store" href={CONFIG.webappUrl}>
        <Icon name="phone" />
        <span>
          <small>Nessun download</small>Apri la webapp
        </span>
      </a>
    </div>
  );
}
