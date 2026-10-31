// Consenso ai cookie di Google Analytics (GDPR). Il tag di Google
// (G-DES9FKYZCR) si carica solo dopo che il visitatore ha accettato: finché
// non sceglie compare il banner in fondo alla pagina, e la scelta resta in
// questo browser. Il link "Cookie" nel piè di pagina (data-cookie) riapre il
// banner per cambiarla. Si usa la "Consent Mode" di Google con tutto negato
// di base. I testi stanno in assets/testi.js (chiavi "cookie.*").
import { t } from "/assets/lingua.js";
import { PAGINE } from "/assets/pagine.js";

const ID = "G-DES9FKYZCR";
const CHIAVE = "ufotizio-cookie";
const NEGATO = { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" };

window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag("consent", "default", NEGATO);

function leggi() {
  try { return localStorage.getItem(CHIAVE); } catch (e) { return null; }
}

function scrivi(valore) {
  try { localStorage.setItem(CHIAVE, valore); } catch (e) { /* storage bloccato */ }
}

let caricato = false;
function attiva() {
  gtag("consent", "update", { analytics_storage: "granted" });
  if (caricato) return;
  caricato = true;
  gtag("js", new Date());
  gtag("config", ID);
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
  document.head.append(script);
}

// Toglie i cookie di Analytics già scritti (_ga, _ga_*).
function cancella() {
  gtag("consent", "update", { analytics_storage: "denied" });
  for (const voce of document.cookie.split(";")) {
    const nome = voce.split("=")[0].trim();
    if (!nome.startsWith("_ga")) continue;
    for (const dominio of ["", "; domain=" + location.hostname, "; domain=." + location.hostname.replace(/^www\./, "")]) {
      document.cookie = nome + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + dominio;
    }
  }
}

let banner = null;
function scrivibanner() {
  if (!banner) return;
  const privacy = PAGINE.privacy.percorso[document.documentElement.lang === "en" ? "en" : "it"];
  banner.querySelector("p").textContent = t("cookie.testo") + " ";
  const link = document.createElement("a");
  link.href = privacy;
  link.textContent = t("cookie.info");
  banner.querySelector("p").append(link);
  banner.querySelector("[data-si]").textContent = t("cookie.accetta");
  banner.querySelector("[data-no]").textContent = t("cookie.rifiuta");
  banner.setAttribute("aria-label", t("nav.cookie"));
}

function mostra() {
  if (banner) return;
  banner = document.createElement("div");
  banner.className = "cookie";
  banner.setAttribute("role", "dialog");
  banner.innerHTML = '<p></p><div><button type="button" data-no></button><button type="button" data-si></button></div>';
  banner.querySelector("[data-si]").addEventListener("click", () => scegli("si"));
  banner.querySelector("[data-no]").addEventListener("click", () => scegli("no"));
  scrivibanner();
  document.body.append(banner);
}

function scegli(valore) {
  scrivi(valore);
  if (valore === "si") attiva(); else cancella();
  banner?.remove();
  banner = null;
}

window.addEventListener("ufotizio-lingua", scrivibanner);
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-cookie]");
  if (!link) return;
  event.preventDefault();
  mostra();
});

const scelta = leggi();
if (scelta === "si") attiva();
else if (scelta !== "no") mostra();
