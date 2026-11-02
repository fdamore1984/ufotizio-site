// Modulo "Contattami" (public/contatti.html, public/assets/contatti.js): il
// browser manda nome, email e messaggio a POST /api/contatti e il Worker li
// gira per email a Fabrizio con Cloudflare Email Routing (binding EMAIL in
// wrangler.jsonc, con l'indirizzo di destinazione in EMAIL_DESTINATARIO: sta
// solo lì e non arriva mai nella pagina).
//
// Controlli, in ordine:
// - solo POST dallo stesso sito (Origin), solo JSON e al massimo 16 KB;
// - campo esca nascosto (honeypot): se è pieno è un bot, gli si risponde
//   "fatto" senza mandare niente;
// - limite di invii per indirizzo IP (binding LIMITE_CONTATTI);
// - verifica umana con Cloudflare Turnstile, controllata qui col segreto
//   TURNSTILE_SECRET (azione e dominio compresi): il token vale una volta sola;
// - campi puliti e con limiti di lunghezza: niente caratteri di controllo né
//   caratteri invisibili che girano il testo (spoofing), email del mittente
//   con un formato rigido, al massimo 3 link;
// - l'email esce solo come testo semplice (niente HTML, niente allegati: il
//   modulo non ne accetta) e tutto quello che scrive il visitatore, oggetto
//   compreso, è codificato in base64, così non può aggiungere intestazioni
//   (header injection) né codice che il programma di posta esegua.

const MAX_CORPO = 16 * 1024;
const MAX_NOME = 80;
const MAX_EMAIL = 254;
const MAX_MESSAGGIO = 5000;
const MIN_MESSAGGIO = 10;
const MAX_LINK = 3;
const MITTENTE = "contatti@ufotizio.com";
const AZIONE = "contatti";
const VERIFICA = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Email del visitatore (per rispondergli): un formato volutamente stretto,
// senza spazi, virgolette, < > , ; né a capo.
const FORMATO_EMAIL = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
// Caratteri di controllo e invisibili di formato (fra cui quelli che girano
// il verso del testo), tranne a capo e tabulazione nel messaggio.
const INVISIBILI = /[\p{Cc}\p{Cf}\u2028\u2029]/gu;
const LINK = /(?:https?:\/\/|www\.)/gi;

function risposta(stato, dati, extra = {}) {
  return Response.json(dati, { status: stato, headers: { "cache-control": "no-store", ...extra } });
}

// Una riga: niente a capo né caratteri invisibili, spazi compattati.
export function riga(valore, massimo) {
  if (typeof valore !== "string") return "";
  return valore.normalize("NFC").replace(INVISIBILI, " ").replace(/\s+/g, " ").trim().slice(0, massimo);
}

// Il messaggio: a capo ammessi (al massimo due righe vuote di fila), il resto
// dei caratteri di controllo e invisibili tolto.
export function testoMessaggio(valore) {
  if (typeof valore !== "string") return "";
  return valore.normalize("NFC")
    .replace(/\r\n?/g, "\n")
    .replace(/\t/g, "    ")
    .replace(/[^\S\n]+$/gm, "")
    .replace(/[\p{Cc}\p{Cf}\u2028\u2029]/gu, (c) => (c === "\n" ? c : ""))
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Controlla e pulisce i campi: { campi } oppure { errore }.
export function controlla(dati) {
  if (!dati || typeof dati !== "object" || Array.isArray(dati)) return { errore: "richiesta" };
  const nome = riga(dati.nome, MAX_NOME + 1);
  const email = typeof dati.email === "string" ? dati.email.trim() : "";
  const messaggio = testoMessaggio(dati.messaggio);
  const lingua = dati.lingua === "en" ? "en" : "it";
  if (!nome || nome.length > MAX_NOME) return { errore: "nome" };
  if (email.length > MAX_EMAIL || !FORMATO_EMAIL.test(email) || email.includes("..")) return { errore: "email" };
  if (messaggio.length < MIN_MESSAGGIO || messaggio.length > MAX_MESSAGGIO) return { errore: "messaggio" };
  if ((messaggio.match(LINK) || []).length > MAX_LINK) return { errore: "link" };
  if (typeof dati.token !== "string" || !dati.token || dati.token.length > 2048) return { errore: "verifica" };
  return { campi: { nome, email, messaggio, lingua, token: dati.token } };
}

function base64(testo) {
  const byte = new TextEncoder().encode(testo);
  let binario = "";
  for (let i = 0; i < byte.length; i += 0x8000) binario += String.fromCharCode(...byte.subarray(i, i + 0x8000));
  return btoa(binario);
}

// Intestazione codificata (RFC 2047): il testo del visitatore non può
// contenere a capo né aprire nuove intestazioni.
function intestazione(testo) {
  return `=?UTF-8?B?${base64(testo)}?=`;
}

// L'email completa (MIME), solo testo, con il corpo in base64 a righe di 76.
export function componi({ nome, email, messaggio, lingua }, destinatario, paese, adesso = new Date()) {
  const corpo = [
    "Nuovo messaggio dal modulo Contattami di ufotizio.com.",
    "",
    `Nome: ${nome}`,
    `Email: ${email}`,
    `Lingua del sito: ${lingua}`,
    ...(paese ? [`Paese (da Cloudflare): ${paese}`] : []),
    "",
    "----- Messaggio -----",
    messaggio,
    "---------------------",
    "",
    "Mittente verificato come persona con Cloudflare Turnstile. Il modulo accetta",
    "solo testo: nessun allegato, nessun HTML. Per rispondere usa \"Rispondi\":",
    "va all'email scritta nel modulo, che però non è verificata.",
  ].join("\n");
  const righe = base64(corpo.replace(/\n/g, "\r\n")).match(/.{1,76}/g).join("\r\n");
  return [
    `From: ${intestazione("Ufotizio · Contattami")} <${MITTENTE}>`,
    `To: <${destinatario}>`,
    `Reply-To: <${email}>`,
    `Subject: ${intestazione(`[ufotizio.com] Messaggio da ${nome}`)}`,
    `Date: ${adesso.toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@ufotizio.com>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "Auto-Submitted: auto-generated",
    "",
    righe,
    "",
  ].join("\r\n");
}

async function verificaUmana(token, ip, hostname, segreto) {
  const modulo = new FormData();
  modulo.append("secret", segreto);
  modulo.append("response", token);
  if (ip) modulo.append("remoteip", ip);
  modulo.append("idempotency_key", crypto.randomUUID());
  try {
    const esito = await fetch(VERIFICA, { method: "POST", body: modulo, signal: AbortSignal.timeout(8000) });
    const dati = await esito.json();
    return dati.success === true && dati.action === AZIONE && dati.hostname === hostname;
  } catch (e) {
    return false;
  }
}

export async function contatti(request, env) {
  const url = new URL(request.url);
  if (request.method !== "POST") return risposta(405, { errore: "metodo" }, { allow: "POST" });
  if (request.headers.get("origin") !== url.origin) return risposta(403, { errore: "origine" });
  if (!(request.headers.get("content-type") || "").toLowerCase().startsWith("application/json")) return risposta(415, { errore: "richiesta" });
  if (!env.EMAIL || !env.EMAIL_DESTINATARIO || !env.TURNSTILE_SECRET) return risposta(503, { errore: "non-attivo" });
  const dichiarata = Number(request.headers.get("content-length") || 0);
  if (dichiarata > MAX_CORPO) return risposta(413, { errore: "richiesta" });

  const testo = await request.text();
  if (testo.length > MAX_CORPO) return risposta(413, { errore: "richiesta" });
  let dati;
  try {
    dati = JSON.parse(testo);
  } catch (e) {
    return risposta(400, { errore: "richiesta" });
  }

  // Campo esca: le persone non lo vedono, i bot lo riempiono. Si risponde
  // come se fosse andato tutto bene, così il bot non impara niente.
  if (dati && typeof dati.sito === "string" && dati.sito !== "") return risposta(200, { ok: true });

  const ip = request.headers.get("cf-connecting-ip") || "";
  if (env.LIMITE_CONTATTI) {
    const { success } = await env.LIMITE_CONTATTI.limit({ key: ip || "sconosciuto" });
    if (!success) return risposta(429, { errore: "troppi" }, { "retry-after": "60" });
  }

  const { campi, errore } = controlla(dati);
  if (errore) return risposta(400, { errore });
  if (!(await verificaUmana(campi.token, ip, url.hostname, env.TURNSTILE_SECRET))) return risposta(403, { errore: "verifica" });

  try {
    const { EmailMessage } = await import("cloudflare:email");
    const destinatario = env.EMAIL_DESTINATARIO;
    const email = componi(campi, destinatario, request.cf?.country || "");
    await env.EMAIL.send(new EmailMessage(MITTENTE, destinatario, email));
  } catch (e) {
    console.error("contatti: email non inviata", e);
    return risposta(502, { errore: "invio" });
  }
  return risposta(200, { ok: true });
}
