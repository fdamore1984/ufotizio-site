// Pagina di un gioco: apre il gioco nell'iframe solo quando si sa se il
// giocatore ha fatto l'accesso, così il gioco trova subito i salvataggi
// dell'account e la lingua del sito (window.ufotizioCloud, vedi
// account/cloud.js).
import { ready } from "/account/cloud.js";
import { t } from "/assets/lingua.js";

const game = document.querySelector("script[data-game]").dataset.game;
const frame = document.getElementById("game");

await ready;
const hint = document.getElementById("hint");
const showHint = () => {
  hint.textContent = t(window.ufotizioCloud.signedIn() ? "gioco.account" : "gioco.browser");
};
showHint();
window.addEventListener("ufotizio-lingua", showHint);
frame.src = "/games/" + game + "/index.html";
frame.addEventListener("load", () => frame.focus());

// Schermo intero, sempre in orizzontale: i giochi sono fatti per lo schermo
// largo. Dove si può (Chrome ed Edge su Android) lo schermo intero è quello
// del browser e l'orientamento si blocca in orizzontale; altrove (iPhone,
// che non fa lo schermo intero degli elementi, o se il blocco non riesce)
// il gioco riempie la pagina e, col telefono in verticale, si ruota da
// solo (CSS, body.full). Con la Keyboard Lock (Chrome, Edge) Esc arriva al
// gioco (per uscire si tiene premuto Esc).
const body = document.body;

async function enterFullscreen() {
  body.classList.add("full");
  try {
    await document.documentElement.requestFullscreen({ navigationUI: "hide" });
  } catch (e) { /* non supportato: resta lo schermo intero della pagina */ }
  try { await screen.orientation.lock("landscape"); } catch (e) { /* non supportato: ruota il CSS */ }
  try { await navigator.keyboard?.lock(["Escape"]); } catch (e) { /* non supportato */ }
  frame.focus();
}

async function exitFullscreen() {
  body.classList.remove("full");
  try { screen.orientation.unlock(); } catch (e) { /* non supportato */ }
  if (document.fullscreenElement) await document.exitFullscreen().catch(() => {});
  frame.focus();
}

document.getElementById("fullscreen").addEventListener("click", enterFullscreen);
document.getElementById("exit-fullscreen").addEventListener("click", exitFullscreen);
// Uscita dallo schermo intero del browser (Esc tenuto, gesto Indietro).
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && body.classList.contains("full")) exitFullscreen();
});
