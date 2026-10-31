# Regole di lavoro per ufotizio.com

- Sito statico senza build: HTML, CSS e moduli JavaScript scritti a mano; le
  librerie esterne solo da CDN con versione fissa.
- Testi del sito in italiano e in inglese, tutti in `public/assets/testi.js`
  (quelli del devlog in `public/assets/devlog.js`), mai scritti solo in una
  lingua; documentazione, commenti e commit in italiano.
- Ogni pagina principale ha un indirizzo per lingua (`public/assets/pagine.js`)
  e il Worker la scrive già nella lingua giusta (`src/pagine.js`): una pagina
  nuova va aggiunta lì, così entra anche in sitemap, hreflang e dati
  strutturati.
- Devlog: a ogni novità del sito o di un gioco si aggiunge una voce in cima a
  `public/assets/devlog.js`, in italiano e in inglese.
- I giochi non si toccano da qui: stanno nei loro repo e nel bucket R2. Il
  contratto fra sito e giochi per i salvataggi è `window.ufotizioCloud`
  (vedi `docs/web.md` nei repo dei giochi): se cambia, va cambiato insieme
  nei giochi e in `account/cloud.js`.
- Mai segreti nel repo: solo la chiave publishable di Supabase.
