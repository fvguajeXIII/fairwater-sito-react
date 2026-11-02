// Elenco delle pagine: file generato, titolo, descrizione e voce di menu attiva.
// Lo usano il codice nel browser, il generatore delle pagine e il server di sviluppo.
export const PAGES = [
  {
    key: "home",
    file: "index.html",
    title: "FairWater · La borraccia che si riempie gratis al bar",
    description:
      "Le aziende del territorio regalano la borraccia FairWater e i bar della rete la riempiono gratis. Il 10% dei ricavi finanzia progetti per l'acqua in Africa.",
  },
  {
    key: "persone",
    file: "persone.html",
    title: "Per te · FairWater",
    description: "Come ricevere la borraccia FairWater, dove riempirla gratis e quali sono le regole della ricarica.",
    nav: "persone",
  },
  {
    key: "bar",
    file: "bar.html",
    title: "Per i bar · FairWater",
    description:
      "Entra nella rete FairWater: chi ha la borraccia viene nel tuo bar a riempirla. Vantaggi, requisiti e modulo di adesione.",
    nav: "bar",
  },
  {
    key: "aziende",
    file: "aziende.html",
    title: "Per le aziende · FairWater",
    description:
      "Il logo della tua azienda su borracce distribuite agli eventi del territorio e riempite ogni giorno nei bar della rete.",
    nav: "aziende",
  },
  {
    key: "chi-siamo",
    file: "chi-siamo.html",
    title: "Chi siamo · FairWater",
    description: "FairWater S.r.l. Società Benefit, startup innovativa nata a Fondi.",
    nav: "chi-siamo",
  },
  {
    key: "impatto",
    file: "impatto.html",
    title: "Relazione d'impatto · FairWater",
    description: "Gli impegni e le relazioni d'impatto annuali della società benefit FairWater.",
  },
  {
    key: "privacy",
    file: "privacy.html",
    title: "Privacy · FairWater",
    description: "Informativa privacy di FairWater.",
  },
];

export const pageByKey = (key) => PAGES.find((p) => p.key === key) || PAGES[0];

export const pageFromPath = (pathname) => {
  const file = pathname.split("/").pop() || "index.html";
  return (PAGES.find((p) => p.file === file || p.file === file + ".html") || PAGES[0]).key;
};
