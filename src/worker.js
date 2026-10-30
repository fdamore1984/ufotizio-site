// Worker del sito: le pagine stanno in public/ (servite da Cloudflare prima
// di arrivare qui); qui arrivano solo le richieste senza file statico.
import { serveGame } from "./games.js";

// Paesi dove il sito si apre in italiano (la prima volta, vedi
// public/assets/lingua.js); negli altri si apre in inglese.
const ITALIAN_COUNTRIES = ["IT", "SM", "VA"];

export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname;
    if (path.startsWith("/games/")) {
      return serveGame(request, env);
    }
    if (path === "/api/lingua") {
      const country = request.cf?.country || "";
      return Response.json(
        { lingua: ITALIAN_COUNTRIES.includes(country) ? "it" : "en" },
        { headers: { "cache-control": "private, no-store" } },
      );
    }
    return env.ASSETS.fetch(request);
  },
};
