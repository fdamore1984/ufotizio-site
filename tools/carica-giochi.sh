#!/usr/bin/env bash
# Carica le cartelle web dei giochi nel bucket R2 "ufotizio-games".
# Uso: tools/carica-giochi.sh <cartella-ciccio-massacro> <cartella-gobelino>
# (le cartelle con index.html, index.wasm, ...). Serve Node.js: la prima
# volta wrangler apre il browser per l'accesso a Cloudflare.
set -euo pipefail
upload() {
  local game="$1" dir="$2"
  for file in "$dir"/*; do
    npx wrangler r2 object put "ufotizio-games/$game/$(basename "$file")" --file "$file" --remote
  done
}
upload ciccio-massacro "$1"
upload gobelino "$2"
