import { createContext, useContext, useState } from "react";
import { CONFIG } from "../config.js";

const MessageContext = createContext(null);

const isBad = (el) => !el.value.trim() || (el.type === "email" && !/^\S+@\S+\.\S+$/.test(el.value));

// Modulo di contatto: controlla i campi obbligatori e invia i dati in JSON a CONFIG.formEndpoint.
// Finché l'indirizzo non è impostato, avvisa che nel prototipo i dati non vengono inviati.
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
      setMessage({
        kind: "warn",
        text:
          "Questo è il prototipo del sito: il modulo non invia ancora i dati." +
          (CONFIG.email ? ` Per ora scrivici a ${CONFIG.email}.` : ""),
      });
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
