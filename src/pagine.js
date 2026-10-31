// Pagine del sito rese dal Worker: ogni pagina ha un indirizzo per lingua
// (public/assets/pagine.js) e un solo modello in public/. Qui il modello si
// scrive già nella lingua dell'indirizzo, così i motori di ricerca trovano
// testi, titolo e descrizione giusti senza JavaScript, e si aggiungono
// canonical, link alle altre lingue (hreflang), anteprime per i social e
// dati strutturati. Da qui escono anche sitemap.xml e robots.txt.
import { TESTI } from "../public/assets/testi.js";
import { PAGINE, SITO } from "../public/assets/pagine.js";
import { DEVLOG, PROGETTI } from "../public/assets/devlog.js";

const LINGUE = ["it", "en"];
const LOCALE = { it: "it_IT", en: "en_US" };
const AUTORE = { "@type": "Person", name: "fdamore1984", url: "https://fdamore1984.itch.io" };

// La pagina di un indirizzo, con la sua lingua.
export function trova(path) {
  for (const [id, pagina] of Object.entries(PAGINE)) {
    for (const lingua of LINGUE) {
      if (pagina.percorso[lingua] === path) return { id, pagina, lingua };
    }
  }
  return null;
}

function testo(lingua, chiave) {
  return TESTI[lingua][chiave] ?? TESTI.it[chiave] ?? chiave;
}

function escape(valore) {
  return String(valore).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function immagine(pagina, lingua) {
  return SITO + pagina.immagine.replace("{lingua}", lingua);
}

function data(giorno, lingua) {
  return new Intl.DateTimeFormat(lingua === "it" ? "it-IT" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
    .format(new Date(giorno + "T00:00:00Z"));
}

function datiStrutturati(id, pagina, lingua) {
  const url = SITO + pagina.percorso[lingua];
  const t = (chiave) => testo(lingua, chiave);
  if (pagina.gioco) {
    const gioco = pagina.gioco;
    const altroNome = testo(lingua === "it" ? "en" : "it", gioco.nome);
    return {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: t(gioco.nome),
      ...(altroNome !== t(gioco.nome) ? { alternateName: altroNome } : {}),
      description: t(gioco.intro),
      url,
      image: immagine(pagina, lingua),
      genre: gioco.genere,
      gamePlatform: ["Web browser", "Windows", "Linux", "Steam Deck"],
      operatingSystem: "Windows, Linux, SteamOS, Web",
      applicationCategory: "Game",
      playMode: "SinglePlayer",
      inLanguage: LINGUE,
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock", url },
      author: AUTORE,
      sameAs: [gioco.itch],
    };
  }
  if (id === "devlog") {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: t("devlog.titolo") + " · Ufotizio",
      description: t("devlog.meta"),
      url,
      inLanguage: lingua,
      author: AUTORE,
      blogPost: DEVLOG.map((voce) => ({
        "@type": "BlogPosting",
        headline: voce.titolo[lingua],
        datePublished: voce.data,
        url: url + "#" + voce.id,
        author: AUTORE,
      })),
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ufotizio",
    url,
    description: t(pagina.descrizione),
    inLanguage: lingua,
    author: AUTORE,
  };
}

// Tag da aggiungere in <head>.
function intestazione(id, pagina, lingua) {
  const t = (chiave) => testo(lingua, chiave);
  const url = SITO + pagina.percorso[lingua];
  const altra = lingua === "it" ? "en" : "it";
  const tag = [
    `<meta name="description" content="${escape(t(pagina.descrizione))}">`,
    `<link rel="canonical" href="${url}">`,
    ...LINGUE.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITO + pagina.percorso[l]}">`),
    `<link rel="alternate" hreflang="x-default" href="${SITO + pagina.percorso.en}">`,
    `<meta property="og:site_name" content="Ufotizio">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${escape(t(pagina.titolo))}">`,
    `<meta property="og:description" content="${escape(t(pagina.descrizione))}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${immagine(pagina, lingua)}">`,
    `<meta property="og:locale" content="${LOCALE[lingua]}">`,
    `<meta property="og:locale:alternate" content="${LOCALE[altra]}">`,
    `<meta name="twitter:card" content="${pagina.gioco ? "summary_large_image" : "summary"}">`,
    `<script type="application/ld+json">${JSON.stringify(datiStrutturati(id, pagina, lingua)).replace(/</g, "\\u003c")}</script>`,
  ];
  return tag.join("\n") + "\n";
}

function voceDevlog(voce, lingua) {
  const progetto = PROGETTI[voce.progetto];
  const link = PAGINE[progetto.pagina].percorso[lingua];
  const punti = voce.punti[lingua].map((punto) => `<li>${escape(punto)}</li>`).join("");
  return `<article class="voce" id="${voce.id}">
<p class="quando"><time datetime="${voce.data}">${data(voce.data, lingua)}</time> · <a href="${link}">${escape(testo(lingua, progetto.nome))}</a></p>
<h2>${escape(voce.titolo[lingua])}</h2>
<ul>${punti}</ul>
</article>
`;
}

function novita(lingua) {
  const devlog = PAGINE.devlog.percorso[lingua];
  return DEVLOG.slice(0, 3).map((voce) => `<li><time datetime="${voce.data}">${data(voce.data, lingua)}</time> · `
    + `<a href="${devlog}#${voce.id}">${escape(testo(lingua, PROGETTI[voce.progetto].nome))}: ${escape(voce.titolo[lingua])}</a></li>`).join("");
}

// Il modello della pagina (risposta di env.ASSETS) scritto nella lingua.
export function rendi(risposta, { id, pagina, lingua }, linguaPaese) {
  const t = (chiave) => testo(lingua, chiave);
  const altra = lingua === "it" ? "en" : "it";
  const pagine = new HTMLRewriter()
    .on("html", {
      element(e) {
        e.setAttribute("lang", lingua);
        e.setAttribute("class", "pronto");
        if (linguaPaese) e.setAttribute("data-lingua-paese", linguaPaese);
      },
    })
    .on("title", { element(e) { e.setInnerContent(t(pagina.titolo)); } })
    .on("head", { element(e) { e.append(intestazione(id, pagina, lingua), { html: true }); } })
    .on("[data-testo]", { element(e) { e.setInnerContent(t(e.getAttribute("data-testo"))); } })
    .on("[data-testo-alt]", { element(e) { e.setAttribute("alt", t(e.getAttribute("data-testo-alt"))); } })
    .on("[data-testo-title]", { element(e) { e.setAttribute("title", t(e.getAttribute("data-testo-title"))); } })
    .on("[data-lista]", {
      element(e) {
        const voci = [].concat(t(e.getAttribute("data-lista")));
        e.setInnerContent(voci.map((voce) => `<li>${escape(voce)}</li>`).join(""), { html: true });
      },
    })
    .on("[data-immagine]", { element(e) { e.setAttribute("src", e.getAttribute("data-immagine").replace("{lingua}", lingua)); } })
    .on("[data-link]", {
      element(e) {
        const destinazione = PAGINE[e.getAttribute("data-link")];
        if (destinazione) e.setAttribute("href", destinazione.percorso[lingua]);
      },
    })
    .on("#lingua", {
      element(e) {
        e.setAttribute("href", pagina.percorso[altra]);
        e.setAttribute("hreflang", altra);
        e.setAttribute("lang", altra);
        e.setAttribute("title", t("lingua.altra_nome"));
        e.setInnerContent(t("lingua.altra"));
      },
    })
    .on("#devlog", { element(e) { e.setInnerContent(DEVLOG.map((voce) => voceDevlog(voce, lingua)).join(""), { html: true }); } })
    .on("#novita", { element(e) { e.setInnerContent(novita(lingua), { html: true }); } });

  const headers = new Headers(risposta.headers);
  headers.delete("etag");
  headers.delete("content-length");
  headers.set("content-language", lingua);
  // La pagina dipende dal paese (data-lingua-paese): niente cache condivise.
  headers.set("cache-control", "private, no-cache");
  return pagine.transform(new Response(risposta.body, { status: risposta.status, headers }));
}

export function sitemap() {
  const ultima = DEVLOG[0].data;
  const url = Object.entries(PAGINE).flatMap(([id, pagina]) => LINGUE.map((lingua) => {
    const alternative = LINGUE.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITO + pagina.percorso[l]}"/>`)
      .concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${SITO + pagina.percorso.en}"/>`).join("");
    const modifica = id === "devlog" || id === "home" ? `<lastmod>${ultima}</lastmod>` : "";
    return `<url><loc>${SITO + pagina.percorso[lingua]}</loc>${modifica}${alternative}</url>`;
  }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${url.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}

export function robots() {
  const testo = `User-agent: *
Disallow: /api/

Sitemap: ${SITO}/sitemap.xml
`;
  return new Response(testo, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
