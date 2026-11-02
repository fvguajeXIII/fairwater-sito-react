import sticker from "../art/sticker.svg?raw";
import decal from "../art/decal.svg?raw";
import bottlesBrand from "../art/bottles-brand.svg?raw";
import pictogram from "../art/pictogram.svg?raw";
import iconBottle from "../art/icon-bottle.svg?raw";
import iconCup from "../art/icon-cup.svg?raw";
import iconBuilding from "../art/icon-building.svg?raw";
import iconEvent from "../art/icon-event.svg?raw";
import iconQr from "../art/icon-qr.svg?raw";
import RawSvg from "./RawSvg.jsx";
import Phone from "./Phone.jsx";
import BottleCutout from "./BottleCutout.jsx";

const SVG = {
  sticker,
  decal,
  "bottles-brand": bottlesBrand,
  pictogram,
  "icon-bottle": iconBottle,
  "icon-cup": iconCup,
  "icon-building": iconBuilding,
  "icon-event": iconEvent,
  "icon-qr": iconQr,
};

// Illustrazioni del sito, richiamate per nome.
export default function Art({ name }) {
  if (name === "phone") return <Phone />;
  if (name === "bottle-cutout") return <BottleCutout />;
  if (!SVG[name]) throw new Error(`Illustrazione sconosciuta: ${name}`);
  return <RawSvg source={SVG[name]} />;
}
