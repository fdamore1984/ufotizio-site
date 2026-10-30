# ufotizio.com

Sito dei giochi di fdamore1984: pagine statiche su **Cloudflare Pages**,
account e salvataggi su **Supabase**, file dei giochi su **Cloudflare R2**.

| File | Cosa fa |
|---|---|
| `index.html` | Home con i giochi |
| `account.html` | Accesso con link via email (magic link di Supabase) |
| `ciccio-massacro.html`, `gobelino.html` | Pagina di un gioco: il gioco in un iframe e il pulsante Schermo intero (`assets/play.js`) |
| `account/cloud.js` | Client Supabase, intestazione (Accedi / Esci) e `window.ufotizioCloud` per i salvataggi dei giochi (contratto in `docs/web.md` nei repo dei giochi) |
| `functions/games/[[path]].js` | Serve `/games/<gioco>/...` dal bucket R2 (binding `GAMES`): `index.wasm` supera i 25 MB per file di Pages |
| `tools/carica-giochi.sh` | Carica le cartelle web dei giochi nel bucket R2 |

## Configurazione

- **Supabase**: tabella `saves` con RLS (SQL in `docs/web.md` dei giochi);
  in *Authentication → URL Configuration* Site URL `https://ufotizio.com` e
  Redirect URLs `https://ufotizio.com/**` (più l'indirizzo `*.pages.dev`
  per le prove). URL del progetto e chiave publishable stanno in
  `account/cloud.js` (sono pubbliche).
- **Cloudflare Pages**: progetto collegato a questo repo, senza build
  (output `/`), binding R2 `GAMES` → bucket `ufotizio-games`, domini
  `ufotizio.com` e `www.ufotizio.com`.
- **R2**: bucket `ufotizio-games` con una cartella per gioco
  (`ciccio-massacro/`, `gobelino/`), ognuna con l'export Web del gioco.

## Aggiornare un gioco

Si esporta il preset "Web" del gioco (o si scarica l'artefatto `web` della
CI) e si carica con `tools/carica-giochi.sh`, oppure dalla dashboard R2.
