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
| `public/assets/itch.js` | Sotto il gioco, la sua pagina itch.io: testi e immagini da `store/itch/` del repo del gioco, caricati in R2 sotto `<gioco>/itch/` |
| `tools/carica-giochi.sh` | Carica nel bucket R2 l'export Web di un gioco e la sua pagina itch.io |

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
CI) e si carica con `tools/carica-giochi.sh`, passando anche il repo del gioco
per aggiornare la pagina itch.io mostrata sotto il gioco:

```bash
tools/carica-giochi.sh ciccio-massacro ../ciccio-massacro/build/web ../ciccio-massacro
```

A schermo intero il gioco va sempre in orizzontale: su Android si blocca
l'orientamento, su iPhone (niente schermo intero degli elementi) la pagina
ruota il gioco col CSS se il telefono è in verticale.
