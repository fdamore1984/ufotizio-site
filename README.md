# ufotizio.com

Sito dei giochi di fdamore1984: un **Cloudflare Worker** con le pagine statiche,
account e salvataggi su **Supabase**, file dei giochi su **Cloudflare R2**.

| File | Cosa fa |
|---|---|
| `wrangler.jsonc` | Configurazione del Worker: pagine in `public/`, bucket R2 `ufotizio-games` col nome `GAMES` |
| `src/worker.js`, `src/games.js` | Serve `/games/<gioco>/...` dal bucket R2: `index.wasm` supera i 25 MB per file statico |
| `public/index.html` | Home con i giochi |
| `public/account.html` | Accesso con link via email (magic link di Supabase) |
| `public/ciccio-massacro.html`, `public/gobelino.html` | Pagina di un gioco: il gioco in un iframe e il pulsante Schermo intero (`public/assets/play.js`) |
| `public/account/cloud.js` | Client Supabase, intestazione (Accedi / Esci) e `window.ufotizioCloud` per i salvataggi dei giochi (contratto in `docs/web.md` nei repo dei giochi) |
| `tools/carica-giochi.sh` | Carica le cartelle web dei giochi nel bucket R2 |

## Configurazione

- **Supabase**: tabella `saves` con RLS (SQL in `docs/web.md` dei giochi);
  in *Authentication → URL Configuration* Site URL `https://ufotizio.com` e
  Redirect URLs `https://ufotizio.com/**`, `https://www.ufotizio.com/**` e
  `https://ufotizio-site.fabriziodamore1984.workers.dev/**` per le prove (mai
  `*.workers.dev` generico: accetterebbe Worker di chiunque). URL del progetto e chiave publishable stanno in
  `public/account/cloud.js` (sono pubbliche).
- **Cloudflare Worker** `ufotizio-site`: collegato a questo repo, deploy
  con `npx wrangler deploy` a ogni push su `main`; il bucket R2 è collegato
  da `wrangler.jsonc` (deve esistere prima del deploy); domini
  `ufotizio.com` e `www.ufotizio.com`.
- **R2**: bucket `ufotizio-games` con una cartella per gioco
  (`ciccio-massacro/`, `gobelino/`), ognuna con l'export Web del gioco.

## Aggiornare un gioco

Si esporta il preset "Web" del gioco (o si scarica l'artefatto `web` della
CI) e si carica con `tools/carica-giochi.sh`, oppure dalla dashboard R2.
