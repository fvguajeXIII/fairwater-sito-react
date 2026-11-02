import { useId, useState } from "react";
import { CONFIG } from "../config.js";

// Mostra il contenuto solo se in config.js c'è un indirizzo email.
export function IfEmail({ children }) {
  return CONFIG.email ? children : null;
}

export function EmailLine() {
  const id = useId();
  const [copied, setCopied] = useState(false);
  const email = CONFIG.email;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      const target = document.getElementById(id);
      const range = document.createRange();
      range.selectNodeContents(target);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  return (
    <span className="contact-line">
      <a id={id} href={`mailto:${email}`}>
        {email}
      </a>
      <button className="copy-btn" type="button" onClick={copy} aria-controls={id}>
        {copied ? "Copiato" : "Copia"}
      </button>
    </span>
  );
}

const LABELS = { sede: "indirizzo da inserire", piva: "P.IVA da inserire", rea: "REA da inserire" };

// Un dato societario preso da config.js, o un segnaposto se manca.
export function Cfg({ k }) {
  return CONFIG[k] ? CONFIG[k] : <span className="todo">{LABELS[k] || "da inserire"}</span>;
}
