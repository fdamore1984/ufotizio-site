// Lingua del sito: italiano o inglese. Le pagine principali hanno un
// indirizzo per lingua (assets/pagine.js) e arrivano già scritte nella loro
// lingua dal Worker (src/pagine.js); le altre (accesso, pagina non trovata)
// le scrive questo script. La prima volta la lingua si sceglie dal paese da
// cui ci si collega (italiano per Italia, San Marino e Vaticano, inglese per
// gli altri: il Worker lo scrive in <html data-lingua-paese>, o lo dice
// /api/lingua); se non si sa, dalla lingua del browser. Chi arriva su una
// pagina nell'altra lingua passa a quella giusta, tranne i motori di
// ricerca, che devono vedere tutte e due. Il pulsante IT / EN
// nell'intestazione la cambia e la scelta resta in questo browser. I giochi
// usano la stessa lingua (window.ufotizioCloud.language(), vedi
// account/cloud.js).
//
// I testi stanno in assets/testi.js. Nelle pagine si scrivono con
// data-testo="chiave" (contenuto), data-testo-placeholder, data-testo-alt e
// data-testo-title (attributi), data-lista="chiave" (voci di un elenco),
// data-immagine="/percorso-{lingua}.png" (immagini con i testi),
// data-link="pagina" (link alle pagine del sito) e, su <html>,
// data-titolo="chiave" (titolo della pagina); il testo in italiano scritto
// nell'HTML è solo quello di riserva.
import { TESTI } from "/assets/testi.js";
import { PAGINE } from "/assets/pagine.js";

const SCELTA = "ufotizio-lingua";
const RILEVATA = "ufotizio-lingua-rilevata";
const LINGUE = ["it", "en"];
const html = document.documentElement;
const pagina = PAGINE[html.dataset.pagina];
const BOT = /bot|crawl|spider|slurp|lighthouse|facebookexternalhit|embedly|preview|whatsapp|telegram/i;

function leggi(chiave) {
  try { return localStorage.getItem(chiave); } catch (e) { return null; }
}

function scrivi(chiave, valore) {
  try { localStorage.setItem(chiave, valore); } catch (e) { /* storage bloccato */ }
}

async function rileva() {
  const scelta = leggi(SCELTA) || leggi(RILEVATA);
  if (LINGUE.includes(scelta)) return scelta;
  const paese = html.dataset.linguaPaese;
  if (LINGUE.includes(paese)) {
    scrivi(RILEVATA, paese);
    return paese;
  }
  try {
    const risposta = await fetch("/api/lingua", { signal: AbortSignal.timeout(3000) });
    const { lingua } = await risposta.json();
    if (LINGUE.includes(lingua)) {
      scrivi(RILEVATA, lingua);
      return lingua;
    }
  } catch (e) { /* niente rete o Worker: si usa la lingua del browser */ }
  return (navigator.language || "").toLowerCase().startsWith("it") ? "it" : "en";
}

// Indirizzo di questa pagina in un'altra lingua.
function indirizzo(codice) {
  return pagina.percorso[codice] + location.search + location.hash;
}

async function iniziale() {
  if (!pagina) return rileva();
  const lingua = LINGUE.includes(html.lang) ? html.lang : "it";
  if (BOT.test(navigator.userAgent)) return lingua;
  const preferita = await rileva();
  if (preferita !== lingua) location.replace(indirizzo(preferita));
  return lingua;
}

export let lingua = await iniziale();

export function t(chiave) {
  return TESTI[lingua][chiave] ?? TESTI.it[chiave] ?? chiave;
}

// Scrive i testi della pagina nella lingua attuale.
export function applica() {
  html.lang = lingua;
  if (html.dataset.titolo) document.title = t(html.dataset.titolo);
  for (const nodo of document.querySelectorAll("[data-testo]")) nodo.textContent = t(nodo.dataset.testo);
  for (const nodo of document.querySelectorAll("[data-testo-placeholder]")) nodo.placeholder = t(nodo.dataset.testoPlaceholder);
  for (const nodo of document.querySelectorAll("[data-testo-alt]")) nodo.alt = t(nodo.dataset.testoAlt);
  for (const nodo of document.querySelectorAll("[data-testo-title]")) nodo.title = t(nodo.dataset.testoTitle);
  for (const nodo of document.querySelectorAll("[data-lista]")) {
    nodo.replaceChildren(...[].concat(t(nodo.dataset.lista)).map((voce) => {
      const li = document.createElement("li");
      li.textContent = voce;
      return li;
    }));
  }
  for (const nodo of document.querySelectorAll("[data-immagine]")) nodo.src = nodo.dataset.immagine.replace("{lingua}", lingua);
  for (const nodo of document.querySelectorAll("[data-link]")) {
    const destinazione = PAGINE[nodo.dataset.link];
    if (destinazione) nodo.href = destinazione.percorso[lingua];
  }
  const pulsante = document.getElementById("lingua");
  if (pulsante) {
    const altra = lingua === "it" ? "en" : "it";
    pulsante.textContent = t("lingua.altra");
    pulsante.title = t("lingua.altra_nome");
    pulsante.lang = altra;
    if (pagina) pulsante.href = pagina.percorso[altra];
  }
  html.classList.add("pronto");
  window.dispatchEvent(new Event("ufotizio-lingua"));
}

// Cambia lingua e la ricorda. Con ricarica si apre la pagina nella lingua
// nuova (così il gioco aperto si riavvia in quella lingua); senza, cambiano
// solo i testi del sito e l'indirizzo (quando la lingua l'ha già cambiata il
// gioco).
export function imposta(codice, ricarica) {
  if (!LINGUE.includes(codice)) return;
  scrivi(SCELTA, codice);
  if (ricarica) {
    if (pagina) location.assign(indirizzo(codice));
    else location.reload();
    return;
  }
  lingua = codice;
  if (pagina) history.replaceState(history.state, "", indirizzo(codice));
  applica();
}

// Pulsante IT / EN nell'intestazione: nelle pagine con un indirizzo per
// lingua è un link già scritto dal Worker, nelle altre si aggiunge qui.
function pulsante() {
  let bottone = document.getElementById("lingua");
  if (!bottone) {
    const account = document.getElementById("account");
    if (!account) return;
    bottone = document.createElement("button");
    bottone.id = "lingua";
    bottone.className = "lingua";
    account.before(bottone);
  }
  bottone.addEventListener("click", (event) => {
    event.preventDefault();
    imposta(lingua === "it" ? "en" : "it", true);
  });
}

pulsante();
applica();
