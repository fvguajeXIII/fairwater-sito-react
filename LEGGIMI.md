# Sito FairWater (React)

La versione a colori del sito, in React 18 con Vite. Ogni pagina viene scritta in HTML al momento della build e poi React si aggancia nel browser. Chi apre un link, Google e l'anteprima di WhatsApp vedono subito tutto il contenuto, anche senza JavaScript.

## Comandi

```
npm install
npm run dev      # sviluppo su http://localhost:5173 (anche /persone.html, /bar.html, ...)
npm run build    # crea dist/ con una pagina HTML completa per ogni voce di src/pages.js
npm run preview  # prova in locale la cartella dist/
```

`dist/` si pubblica così com'è su qualsiasi hosting statico. Su Vercel: build command `npm run build`, output directory `dist`, nessun framework preset. I percorsi sono relativi (`base: "./"`), quindi il sito funziona anche in una sottocartella.

## Come è fatto

```
index.html              modello comune a tutte le pagine
src/
  config.js             email, dati societari, link degli store, indirizzo dei moduli
  pages.js              elenco pagine: file, titolo, descrizione, voce di menu attiva
  main.jsx              avvio nel browser (si aggancia all'HTML già generato)
  entry-server.jsx      rendering in HTML usato dalla build
  Site.jsx              collega ogni pagina al suo componente
  pages/                Home, Persone, Bar, Aziende, ChiSiamo, Impatto, Privacy
  components/           Header (menu), Footer, FwForm (moduli), Phone, BottleCutout,
                        Wave, Stores, Email (email copiabile e dati societari), Logo, Icon, Art
  art/                  illustrazioni SVG (adesivo, icone, decal vetrina, borracce, QR)
  styles/site.css       tutto lo stile, con i font
public/                 borraccia scontornata, favicon, immagine di anteprima social
scripts/prerender.mjs   scrive le pagine HTML dopo la build
```

Per aggiungere una pagina: crea il componente in `src/pages/`, aggiungilo a `COMPONENTS` in `src/Site.jsx` e a `PAGES` in `src/pages.js`.

Non c'è un router: i collegamenti fra le pagine sono normali link a `persone.html`, `bar.html` e così via. Per un sito di sette pagine è la soluzione più semplice e più veloce da caricare. Se un giorno servirà la navigazione senza ricaricare la pagina, si può aggiungere React Router senza toccare i componenti.

## Prima di andare online

Il sito descrive il servizio come sarà al lancio. Va su fairwater.it solo quando app e rete dei bar sono attive; fino ad allora tienilo su un indirizzo di anteprima con `noindex`.

In `src/config.js`:

- `email`: finché è vuoto, le righe con l'email non compaiono e al loro posto restano i link ai moduli;
- `sede`, `piva`, `rea`: dati societari del footer (la P.IVA sul sito è obbligatoria per legge);
- `appStoreUrl`, `playStoreUrl`: schede dell'app, oggi `#`;
- `relazione2026Url`: PDF della relazione d'impatto;
- `formEndpoint`: URL che riceve i moduli in POST JSON. Ogni invio contiene `modulo` (`bar` o `azienda`), `pagina` e i campi del form. Finché è vuoto, il modulo avvisa che nel prototipo i dati non vengono inviati.

Restano da fare:

- **Privacy**: `src/pages/Privacy.jsx` è una bozza basata su quello che il sito fa davvero (moduli, app, nessun cookie). Va verificata dal consulente legale.
- **Badge degli store**: i pulsanti sono disegnati senza i marchi; per la versione definitiva vanno usati i badge ufficiali di Apple e Google.
- **Foto**: va verificata la liberatoria per le persone riconoscibili nell'etichetta della borraccia (`public/img/borraccia-scontornata.*`).

## Scelte tecniche

- Font serviti dal sito (Archivo, Instrument Sans, IBM Plex Mono): nessuna richiesta a server esterni, niente cookie né analytics, quindi nessun banner cookie.
- Le animazioni (onde, adesivo, borraccia che galleggia) si fermano con la riduzione del movimento attiva.
- La versione minimal resta un sito statico separato.
