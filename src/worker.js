// Worker del sito: le pagine stanno in public/; i file di /assets/ e
// /account/ li serve Cloudflare senza passare di qui (run_worker_first in
// wrangler.jsonc), tutto il resto arriva qui.
import { serveGame } from "./games.js";
import { contatti } from "./contatti.js";
import { PAGINE, SITO } from "../public/assets/pagine.js";
import { rendi, robots, sitemap, trova } from "./pagine.js";

// Paesi dove il sito si apre in italiano (la prima volta, vedi
// public/assets/lingua.js); negli altri si apre in inglese.
const ITALIAN_COUNTRIES = ["IT", "SM", "VA"];
const DOMINIO = new URL(SITO).host;

function linguaPaese(request) {
  const country = request.cf?.country;
  if (!country) return "";
  return ITALIAN_COUNTRIES.includes(country) ? "it" : "en";
}

async function rispondi(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Un solo indirizzo per i motori di ricerca: www va sul dominio principale.
  if (url.host === "www." + DOMINIO) {
    url.host = DOMINIO;
    return Response.redirect(url.toString(), 301);
  }
  if (path.startsWith("/games/")) {
    const risposta = await serveGame(request, env);
    // Il gioco si cerca dalla sua pagina, non dai file nell'iframe (le
    // immagini invece si possono trovare).
    if (/\.(html|js|wasm|pck|md|json)$/.test(path) || path.endsWith("/")) {
      const headers = new Headers(risposta.headers);
      headers.set("x-robots-tag", "noindex");
      return new Response(risposta.body, { status: risposta.status, headers });
    }
    return risposta;
  }
  if (path === "/api/lingua") {
    const lingua = linguaPaese(request) || "en";
    return Response.json({ lingua }, { headers: { "cache-control": "private, no-store" } });
  }
  if (path === "/api/contatti") return contatti(request, env);
  if (path === "/robots.txt") return robots();
  if (path === "/sitemap.xml") return sitemap();
  if (path === "/en") return Response.redirect(url.origin + "/en/" + url.search, 301);

  // Vecchi indirizzi con .html delle pagine: un solo indirizzo per pagina.
  for (const pagina of Object.values(PAGINE)) {
    const file = pagina.modello === "/" ? "/index.html" : pagina.modello + ".html";
    if (path === file) return Response.redirect(url.origin + pagina.percorso.it + url.search, 301);
  }

  const trovata = trova(path);
  if (trovata && (request.method === "GET" || request.method === "HEAD")) {
    // Senza le intestazioni della richiesta: il modello serve sempre intero.
    const modello = await env.ASSETS.fetch(new URL(trovata.pagina.modello, url.origin));
    if (modello.ok) return rendi(modello, trovata, linguaPaese(request));
  }
  return env.ASSETS.fetch(request);
}

export default {
  async fetch(request, env) {
    const risposta = await rispondi(request, env);
    // Gli altri indirizzi del Worker (per esempio *.workers.dev per le prove)
    // restano fuori dai motori di ricerca.
    if (new URL(request.url).host === DOMINIO || risposta.status >= 300 && risposta.status < 400) return risposta;
    const headers = new Headers(risposta.headers);
    headers.set("x-robots-tag", "noindex");
    return new Response(risposta.body, { status: risposta.status, statusText: risposta.statusText, headers });
  },
};
