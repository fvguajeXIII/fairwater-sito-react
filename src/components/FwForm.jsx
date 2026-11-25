import { createContext, useContext, useState } from "react";
import { CONFIG } from "../config.js";

const MessageContext = createContext(null);

const isBad = (el) => !el.value.trim() || (el.type === "email" && !/^\S+@\S+\.\S+$/.test(el.value));

const SUBJECTS = {
  azienda: (d) => `Richiesta listino – ${d.azienda || "azienda"}`,
  bar: (d) => `Adesione alla rete – ${d.locale || "bar"}${d.comune ? ` (${d.comune})` : ""}`,
};

// Testo leggibile di un campo: l'etichetta collegata, oppure la legenda del gruppo.
function fieldLabel(form, el) {
  const own = el.id && form.querySelector(`label[for="${el.id}"]`);
  const source = own && el.type !== "radio" ? own : el.closest("fieldset")?.querySelector("legend");
  if (!source) return el.name;
  const copy = source.cloneNode(true);
  copy.querySelectorAll(".hint").forEach((hint) => hint.remove());
  return copy.textContent.trim();
}

// Valore leggibile di un campo: per le tendine e le scelte usa il testo mostrato.
function fieldValue(el) {
  if (el.tagName === "SELECT") return el.selectedOptions[0]?.textContent.trim() || el.value;
  if (el.type === "radio") return el.closest("label")?.textContent.trim() || el.value;
  return el.value.trim();
}

// Prepara una mail già scritta con i dati del modulo e la apre nell'app di posta.
function openMail(form, kind, data) {
  const lines = [];
  Array.from(form.elements).forEach((el) => {
    if (!el.name || el.name === "sito" || el.type === "submit") return;
    if (el.type === "radio" && !el.checked) return;
    const value = fieldValue(el);
    if (!value) return;
    const label = fieldLabel(form, el);
    lines.push(`${label}${label.endsWith("?") ? " " : ": "}${value}`);
  });
  const subject = (SUBJECTS[kind] || (() => "Richiesta dal sito FairWater"))(data);
  const body = `Ciao FairWater,\r\n\r\n${lines.join("\r\n")}\r\n`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Modulo di contatto: controlla i campi obbligatori e invia i dati in JSON a CONFIG.formEndpoint.
// Se l'indirizzo non è impostato, apre l'app di posta con una mail già compilata per CONFIG.email.
export default function FwForm({ kind, okMessage, children }) {
  const [message, setMessage] = useState(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let firstBad = null;
    form.querySelectorAll("[required]").forEach((el) => {
      const bad = isBad(el);
      el.setAttribute("aria-invalid", bad ? "true" : "false");
      if (bad && !firstBad) firstBad = el;
    });
    if (firstBad) {
      setMessage({ kind: "warn", text: "Manca qualche dato: controlla i campi evidenziati." });
      firstBad.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.sito) return; // campo trappola per lo spam
    if (!CONFIG.formEndpoint) {
      if (CONFIG.email) {
        openMail(form, kind, data);
        setMessage({
          kind: "ok",
          text: `Abbiamo aperto la tua app di posta con la richiesta già scritta: ti basta premere Invia. Se non si è aperta, scrivici a ${CONFIG.email}.`,
        });
      } else {
        setMessage({ kind: "warn", text: "Il modulo non è ancora attivo. Riprova tra qualche giorno." });
      }
      return;
    }
    setSending(true);
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, modulo: kind, pagina: window.location.pathname }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setMessage({ kind: "ok", text: okMessage || "Ricevuto. Ti rispondiamo entro pochi giorni." });
    } catch {
      setMessage({
        kind: "warn",
        text: "L'invio non è riuscito. Riprova tra poco" + (CONFIG.email ? ` oppure scrivici a ${CONFIG.email}` : "") + ".",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <MessageContext.Provider value={{ message, sending }}>
      <form className="form-card" noValidate onSubmit={onSubmit}>
        {children}
      </form>
    </MessageContext.Provider>
  );
}

// Il punto del modulo in cui compare l'esito dell'invio.
export function FormMessage() {
  const { message } = useContext(MessageContext);
  return (
    <p className="form-msg" role="status" data-kind={message?.kind} hidden={!message}>
      {message?.text}
    </p>
  );
}

// Pulsante di invio, disattivato mentre il modulo sta inviando.
export function SubmitButton({ children }) {
  const { sending } = useContext(MessageContext);
  return (
    <button className="btn btn-navy" type="submit" disabled={sending}>
      {children}
    </button>
  );
}
