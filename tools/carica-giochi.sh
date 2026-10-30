#!/usr/bin/env bash
# Carica un gioco nel bucket R2 "ufotizio-games".
# Uso: tools/carica-giochi.sh <gioco> <cartella-web> [<repo-del-gioco>]
#   <gioco>          ciccio-massacro o gobelino (la cartella nel bucket)
#   <cartella-web>   l'export Web (index.html, index.wasm, ...)
#   <repo-del-gioco> facoltativo: carica anche la pagina itch.io
#                    (store/itch/README.md e immagini) che il sito mostra
#                    sotto il gioco (public/assets/itch.js)
# Serve Node.js: wrangler usa CLOUDFLARE_API_TOKEN se c'è, altrimenti la
# prima volta apre il browser per l'accesso a Cloudflare.
set -euo pipefail
game="$1" web="$2" repo="${3:-}"
# Cloudflare rifiuta i caricamenti troppo ravvicinati (429): si riprova
# aspettando un po' di più ogni volta.
put() {
  for wait in 0 10 30 60; do
    sleep "$wait"
    npx wrangler r2 object put "ufotizio-games/$game/$1" --file "$2" --remote && return
  done
  return 1
}
for file in "$web"/*; do
  put "$(basename "$file")" "$file"
done
if [ -n "$repo" ]; then
  for file in "$repo"/store/itch/README.md "$repo"/store/itch/*.png; do
    put "itch/$(basename "$file")" "$file"
  done
fi
