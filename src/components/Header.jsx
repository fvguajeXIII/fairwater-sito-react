import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { Logo } from "./Logo.jsx";

const NAV = [
  { href: "index.html#come-funziona", label: "Come funziona" },
  { href: "persone.html", label: "Per te", key: "persone" },
  { href: "bar.html", label: "Per i bar", key: "bar" },
  { href: "aziende.html", label: "Per le aziende", key: "aziende" },
  { href: "chi-siamo.html", label: "Chi siamo", key: "chi-siamo" },
];

export default function Header({ active }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // Trasparente sopra la testata, blu notte appena si scorre.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu a schermo intero su telefono: blocca lo scorrimento e si chiude con Esc.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip" href="#contenuto">
        Vai al contenuto
      </a>
      <header className={solid ? "site-header is-solid" : "site-header"}>
        <div className="wrap">
          <a className="brand" href="index.html" aria-label="FairWater, torna alla home">
            <Logo height={40} />
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name="menu" />
            <span>{open ? "Chiudi" : "Menu"}</span>
          </button>
          <nav className="nav" id="nav" data-open={open} aria-label="Principale" onClick={(e) => e.target.closest("a") && setOpen(false)}>
            {NAV.map((item) => (
              <a key={item.href} href={item.href} aria-current={item.key && item.key === active ? "page" : undefined}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="index.html#app">
              Scarica l'app
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
