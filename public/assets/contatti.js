// Modulo "Contattami" (public/contatti.html): controlla i campi, chiede a
// Cloudflare Turnstile di verificare che a scrivere sia una persona e manda
// tutto a POST /api/contatti, dove il Worker rifà ogni controllo e gira il
// messaggio per email (src/contatti.js). L'indirizzo di destinazione non sta
// mai nella pagina.
//
// Turnstile si carica da challenges.cloudflare.com senza versione fissa:
// Cloudflare non ne pubblica di versionate e chiede di non copiarlo altrove.
import { lingua, t } from "/assets/lingua.js";

// Chiave del widget Turnstile (pubblica, fatta per stare nella pagina; il
// segreto sta solo nel Worker). Vuota: modulo non ancora attivo.
const CHIAVE_TURNSTILE = "";
const TURNSTILE = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=ufotizioTurnstile";

const form = document.getElementById("contatti");
const stato = document.getElementById("stato");
const invia = form.querySelector('button[type="submit"]');
let widget = null;

function mostra(chiave, tipo = "") {
  const testo = t(chiave);
  stato.textContent = testo === chiave ? t("contatti.errore.invio") : testo;
  stato.dataset.tipo = tipo;
}

function errore(campo) {
  const nodo = form.elements[campo];
  nodo?.focus();
  mostra("contatti.errore." + campo, "errore");
}

// Gli stessi limiti del Worker, per avvisare subito.
function controlla(dati) {
  if (!dati.nome || dati.nome.length > 80) return "nome";
  if (!form.elements.email.checkValidity() || !dati.email) return "email";
  if (dati.messaggio.length < 10 || dati.messaggio.length > 5000) return "messaggio";
  if ((dati.messaggio.match(/(?:https?:\/\/|www\.)/gi) || []).length > 3) return "link";
  return "";
}

if (!CHIAVE_TURNSTILE) {
  for (const nodo of form.querySelectorAll("input, textarea, button")) nodo.disabled = true;
  mostra("contatti.non-attivo", "errore");
} else {
  window.ufotizioTurnstile = () => {
    widget = window.turnstile.render("#verifica", {
      sitekey: CHIAVE_TURNSTILE,
      action: "contatti",
      language: lingua,
      theme: "light",
      "refresh-expired": "auto",
    });
  };
  const script = document.createElement("script");
  script.src = TURNSTILE;
  script.async = true;
  script.onerror = () => mostra("contatti.errore.verifica-carica", "errore");
  document.head.append(script);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const dati = {
    nome: form.elements.nome.value.trim(),
    email: form.elements.email.value.trim(),
    messaggio: form.elements.messaggio.value.trim(),
    sito: form.elements.sito.value,
    lingua,
  };
  const campo = controlla(dati);
  if (campo) return errore(campo);
  const token = widget !== null ? window.turnstile.getResponse(widget) : "";
  if (!token) return mostra("contatti.errore.verifica", "errore");

  invia.disabled = true;
  mostra("contatti.invio");
  try {
    const risposta = await fetch("/api/contatti", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...dati, token }),
    });
    const esito = await risposta.json().catch(() => ({}));
    if (risposta.ok && esito.ok) {
      form.reset();
      mostra("contatti.fatto", "ok");
    } else if (["nome", "email", "messaggio"].includes(esito.errore)) {
      errore(esito.errore);
    } else {
      mostra("contatti.errore." + (esito.errore || "invio"), "errore");
    }
  } catch (e) {
    mostra("contatti.errore.rete", "errore");
  } finally {
    invia.disabled = false;
    // Ogni token vale una volta sola: se ne prepara un altro.
    if (widget !== null) window.turnstile.reset(widget);
  }
});
