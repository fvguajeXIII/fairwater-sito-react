import { CONFIG } from "../config.js";
import Icon from "./Icon.jsx";

export default function Stores() {
  return (
    <div className="stores">
      <a className="store" href={CONFIG.appStoreUrl}>
        <Icon name="phone" />
        <span>
          <small>Scarica su</small>App Store
        </span>
      </a>
      <a className="store" href={CONFIG.playStoreUrl}>
        <Icon name="play" />
        <span>
          <small>Disponibile su</small>Google Play
        </span>
      </a>
    </div>
  );
}
