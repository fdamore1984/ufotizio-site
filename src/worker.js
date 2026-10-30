// Worker del sito: le pagine stanno in public/ (servite da Cloudflare prima
// di arrivare qui); qui arrivano solo le richieste senza file statico.
import { serveGame } from "./games.js";

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname.startsWith("/games/")) {
      return serveGame(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
