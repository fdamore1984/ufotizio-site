// Le pagine del sito con il loro indirizzo in ogni lingua. Solo dati, niente
// DOM: li usano il browser (lingua.js, per il pulsante IT / EN e i link) e il
// Worker (src/pagine.js), che rende ogni pagina partendo dal suo modello in
// public/ e ne scrive titolo, descrizione, link alternativi, sitemap e dati
// strutturati. Nelle pagine si indicano con <html data-pagina="id"> e nei
// link con data-link="id".

export const SITO = "https://ufotizio.com";

export const PAGINE = {
  home: {
    percorso: { it: "/", en: "/en/" },
    modello: "/",
    titolo: "home.titolo",
    descrizione: "home.meta",
    immagine: "/assets/ufotizio.png",
  },
  ciccio: {
    percorso: { it: "/ciccio-massacro", en: "/en/cheech-carnage" },
    modello: "/ciccio-massacro",
    titolo: "ciccio.pagina",
    descrizione: "ciccio.meta",
    immagine: "/assets/ciccio-massacro-{lingua}.png",
    gioco: { nome: "ciccio.nome", intro: "ciccio.intro", genere: ["Action RPG", "Post-apocalyptic"], itch: "https://fdamore1984.itch.io/ciccio-massacro" },
  },
  gobelino: {
    percorso: { it: "/gobelino", en: "/en/gobelino" },
    modello: "/gobelino",
    titolo: "gobelino.pagina",
    descrizione: "gobelino.meta",
    immagine: "/assets/gobelino-{lingua}.png",
    gioco: { nome: "gobelino.nome", intro: "gobelino.intro", genere: ["Action RPG", "Fantasy"], itch: "https://fdamore1984.itch.io/gobelino" },
  },
  devlog: {
    percorso: { it: "/devlog", en: "/en/devlog" },
    modello: "/devlog",
    titolo: "devlog.pagina",
    descrizione: "devlog.meta",
    immagine: "/assets/ufotizio.png",
  },
  privacy: {
    percorso: { it: "/privacy", en: "/en/privacy" },
    modello: "/privacy",
    titolo: "privacy.pagina",
    descrizione: "privacy.meta",
    immagine: "/assets/ufotizio.png",
  },
};
