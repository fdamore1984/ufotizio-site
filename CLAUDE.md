# Regole di lavoro per ufotizio.com

- Sito statico senza build: HTML, CSS e moduli JavaScript scritti a mano; le
  librerie esterne solo da CDN con versione fissa.
- Testi del sito in italiano; documentazione, commenti e commit in italiano.
- I giochi non si toccano da qui: stanno nei loro repo e nel bucket R2. Il
  contratto fra sito e giochi per i salvataggi è `window.ufotizioCloud`
  (vedi `docs/web.md` nei repo dei giochi): se cambia, va cambiato insieme
  nei giochi e in `account/cloud.js`.
- Mai segreti nel repo: solo la chiave publishable di Supabase.
