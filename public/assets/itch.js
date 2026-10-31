// Sotto il gioco: una descrizione brevissima nella lingua del sito, le
// immagini e il link per scaricarlo da itch.io. Testi e immagini vengono dal
// README della pagina itch.io nel repo del gioco (store/itch/README.md,
// sezione "Sito ufotizio.com"), caricato nel bucket R2 insieme al gioco
// (tools/carica-giochi.sh), così non si copiano qui. Si inseriscono solo
// come testo.
import { lingua, t } from "/assets/lingua.js";

const section = document.querySelector(".itch");
const base = "/games/" + section.dataset.game + "/itch/";
const readme = fetch(base + "README.md").then((response) => {
  if (!response.ok) throw new Error(response.status);
  return response.text();
});

// Primo blocco ``` dopo il titolo indicato (e dopo after, se c'è).
function block(text, heading, after) {
  const from = after ? text.indexOf(after) : 0;
  const start = from < 0 ? -1 : text.indexOf(heading, from);
  if (start < 0) return "";
  const match = text.slice(start).match(/```[^\n]*\n([\s\S]*?)```/);
  return match ? match[1].trim() : "";
}

// Nomi tra backtick nella riga della tabella "| <campo> | ... |".
function field(text, name) {
  const line = text.split("\n").find((l) => l.startsWith("| " + name + " |"));
  return line ? [...line.matchAll(/`([^`]+\.png)`/g)].map((m) => m[1]) : [];
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

// Si rifà a ogni cambio di lingua (anche quando la cambia il gioco); vale
// solo l'ultima chiamata.
let current = 0;
async function render() {
  const id = ++current;
  let text = null;
  try { text = await readme; } catch (e) { /* README non disponibile */ }
  if (id !== current) return;
  for (const node of [...section.children]) if (node.tagName !== "H2") node.remove();
  if (text !== null) {
    const heading = lingua === "it" ? "### Italiano" : "### English";
    const blurb = block(text, heading, "## Sito ufotizio.com") || block(text, "## Short description");
    if (blurb) section.append(element("p", blurb, "tagline"));
    // Le immagini della pagina sono in inglese (en_*); quelle it_* sono le stesse in italiano.
    const shots = element("div", "", "shots");
    for (const name of field(text, "Screenshots")) {
      const img = element("img");
      img.src = base + (lingua === "it" ? name.replace(/^en_/, "it_") : name);
      img.alt = t("itch.screenshot") + t(section.dataset.nome);
      img.loading = "lazy";
      shots.append(img);
    }
    if (shots.childElementCount) section.append(shots);
  } else {
    section.append(element("p", t("itch.non_disponibile")));
  }
  const download = element("p", t("itch.scarica"));
  const link = element("a", t(section.dataset.nome) + " · itch.io");
  link.href = section.dataset.itch;
  download.append(link);
  section.append(download);
}

window.addEventListener("ufotizio-lingua", render);
render();
