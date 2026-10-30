// Pagina di un gioco: apre il gioco nell'iframe solo quando si sa se il
// giocatore ha fatto l'accesso, così il gioco trova subito i salvataggi
// dell'account (window.ufotizioCloud, vedi account/cloud.js).
import { ready } from "/account/cloud.js";

const game = document.querySelector("script[data-game]").dataset.game;
const frame = document.getElementById("game");

await ready;
document.getElementById("hint").textContent = window.ufotizioCloud.signedIn()
  ? "I salvataggi vanno sul tuo account."
  : "Senza accesso i salvataggi restano solo in questo browser.";
frame.src = "/games/" + game + "/index.html";
frame.addEventListener("load", () => frame.focus());

// Schermo intero: con la Keyboard Lock (Chrome, Edge) Esc arriva al gioco
// (per uscire si tiene premuto Esc).
document.getElementById("fullscreen").addEventListener("click", async () => {
  await frame.requestFullscreen();
  try { await navigator.keyboard?.lock(["Escape"]); } catch (e) { /* non supportato */ }
  frame.focus();
});
