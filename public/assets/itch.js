// Pagina itch.io del gioco, sotto il gioco: testi e immagini vengono dal
// README della pagina itch.io nel repo del gioco (store/itch/README.md),
// caricato nel bucket R2 insieme al gioco (tools/carica-giochi.sh), così il
// sito mostra sempre la stessa pagina di itch.io senza copiarla qui.
// Il testo è in inglese come su itch.io; si inserisce solo come testo.
const section = document.querySelector(".itch");
const base = "/games/" + section.dataset.game + "/itch/";

// Primo blocco ``` dopo il titolo indicato.
function block(text, heading) {
  const start = text.indexOf(heading);
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

// Descrizione: righe in maiuscolo = titoli, righe "- " = elenchi, il resto paragrafi.
function description(text) {
  const box = element("div", "", "description");
  box.lang = "en";
  let list = null;
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (line === "") { list = null; continue; }
    if (line.startsWith("- ")) {
      if (!list) box.append((list = element("ul")));
      list.append(element("li", line.slice(2)));
      continue;
    }
    list = null;
    const upper = line.replace(/\(.*\)/, "");
    box.append(element(upper === upper.toUpperCase() && /[A-Z]/.test(upper) ? "h3" : "p", line));
  }
  return box;
}

try {
  const response = await fetch(base + "README.md");
  if (!response.ok) throw new Error(response.status);
  const text = await response.text();
  const tagline = block(text, "## Short description");
  if (tagline) section.append(Object.assign(element("p", tagline, "tagline"), { lang: "en" }));
  const shots = element("div", "", "shots");
  for (const name of field(text, "Screenshots")) {
    const img = element("img");
    img.src = base + name;
    img.alt = "";
    img.loading = "lazy";
    shots.append(img);
  }
  if (shots.childElementCount) section.append(shots);
  const body = block(text, "## Description");
  if (body) section.append(description(body));
  const tags = block(text, "### Tags").split(",").map((t) => t.trim()).filter(Boolean);
  if (tags.length) {
    const list = element("ul", "", "tags");
    for (const tag of tags) list.append(element("li", tag));
    section.append(list);
  }
} catch (e) {
  section.append(element("p", "La pagina itch.io non è disponibile in questo momento."));
}
