// Lingua del sito: italiano o inglese. La prima volta si sceglie dal paese
// da cui ci si collega (/api/lingua, vedi src/worker.js: italiano per Italia,
// San Marino e Vaticano, inglese per gli altri); se non risponde, dalla
// lingua del browser. Il pulsante IT / EN nell'intestazione la cambia e la
// scelta resta in questo browser. I giochi usano la stessa lingua
// (window.ufotizioCloud.language(), vedi account/cloud.js).
//
// Nelle pagine i testi si scrivono con data-testo="chiave" (contenuto),
// data-testo-placeholder="chiave" (segnaposto dei campi),
// data-immagine="/percorso-{lingua}.png" (immagini con i testi) e, su <html>,
// data-titolo="chiave" (titolo della pagina); il testo in italiano scritto
// nell'HTML è solo quello di riserva.

const SCELTA = "ufotizio-lingua";
const RILEVATA = "ufotizio-lingua-rilevata";
const LINGUE = ["it", "en"];

const TESTI = {
  it: {
    "home.titolo": "Ufotizio",
    "home.ciao": "Ciao, sono Ufotizio e questi sono i miei giochi fatti con Claude Code. Divertiti!",
    "home.info": "Si gioca nel browser con tastiera e mouse, controller o touch. Con un account i salvataggi ti seguono su ogni dispositivo.",
    "ciccio.nome": "Ciccio Massacro",
    "ciccio.descrizione": "Action RPG post-apocalittico: motosega, bazooka e una città in rovina.",
    "gobelino.nome": "Gobelino",
    "gobelino.descrizione": "Action RPG fantasy con un goblin, spada e magia.",
    "ciccio.pagina": "Ciccio Massacro · Ufotizio",
    "gobelino.pagina": "Gobelino · Ufotizio",
    "account.accedi": "Accedi",
    "account.esci": "Esci",
    "account.pagina": "Accedi · Ufotizio",
    "account.titolo": "Accedi",
    "account.spiegazione": "Scrivi la tua email: ti mandiamo un link per entrare, senza password. Se non hai ancora un account, viene creato al primo accesso.",
    "account.email": "nome@esempio.it",
    "account.invia": "Mandami il link",
    "account.invio": "Invio in corso…",
    "account.errore": "Errore: ",
    "account.fatto": "Fatto! Apri l'email e clicca sul link (controlla anche lo spam).",
    "gioco.account": "I salvataggi vanno sul tuo account.",
    "gioco.browser": "Senza accesso i salvataggi restano solo in questo browser.",
    "gioco.schermo": "Schermo intero",
    "gioco.esci": "Esci",
    "itch.titolo": "Il gioco",
    "itch.scarica": "Si scarica anche per Windows e Linux da ",
    "itch.non_disponibile": "La descrizione del gioco non è disponibile in questo momento.",
    "lingua.altra": "EN",
    "lingua.altra_nome": "English",
  },
  en: {
    "home.titolo": "Ufotizio",
    "home.ciao": "Hi, I'm Ufotizio and these are my games made with Claude Code. Have fun!",
    "home.info": "Play in the browser with keyboard and mouse, controller or touch. With an account your saves follow you on every device.",
    "ciccio.nome": "Cheech Carnage",
    "ciccio.descrizione": "Post-apocalyptic action RPG: a chainsaw, a bazooka and a ruined city.",
    "gobelino.nome": "Gobelino",
    "gobelino.descrizione": "Fantasy action RPG with a goblin, a sword and magic.",
    "ciccio.pagina": "Cheech Carnage · Ufotizio",
    "gobelino.pagina": "Gobelino · Ufotizio",
    "account.accedi": "Sign in",
    "account.esci": "Sign out",
    "account.pagina": "Sign in · Ufotizio",
    "account.titolo": "Sign in",
    "account.spiegazione": "Enter your email: we'll send you a link to sign in, no password needed. If you don't have an account yet, it's created the first time you sign in.",
    "account.email": "name@example.com",
    "account.invia": "Send me the link",
    "account.invio": "Sending…",
    "account.errore": "Error: ",
    "account.fatto": "Done! Open the email and click the link (check your spam folder too).",
    "gioco.account": "Your saves go to your account.",
    "gioco.browser": "Without signing in, saves stay in this browser only.",
    "gioco.schermo": "Fullscreen",
    "gioco.esci": "Exit",
    "itch.titolo": "The game",
    "itch.scarica": "You can also download it for Windows and Linux from ",
    "itch.non_disponibile": "The game description isn't available right now.",
    "lingua.altra": "IT",
    "lingua.altra_nome": "Italiano",
  },
};

function leggi(chiave) {
  try { return localStorage.getItem(chiave); } catch (e) { return null; }
}

function scrivi(chiave, valore) {
  try { localStorage.setItem(chiave, valore); } catch (e) { /* storage bloccato */ }
}

async function rileva() {
  const scelta = leggi(SCELTA) || leggi(RILEVATA);
  if (LINGUE.includes(scelta)) return scelta;
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

export let lingua = await rileva();

export function t(chiave) {
  return TESTI[lingua][chiave] ?? TESTI.it[chiave] ?? chiave;
}

// Scrive i testi della pagina nella lingua attuale.
export function applica() {
  const html = document.documentElement;
  html.lang = lingua;
  if (html.dataset.titolo) document.title = t(html.dataset.titolo);
  for (const nodo of document.querySelectorAll("[data-testo]")) nodo.textContent = t(nodo.dataset.testo);
  for (const nodo of document.querySelectorAll("[data-testo-placeholder]")) nodo.placeholder = t(nodo.dataset.testoPlaceholder);
  for (const nodo of document.querySelectorAll("[data-immagine]")) nodo.src = nodo.dataset.immagine.replace("{lingua}", lingua);
  const pulsante = document.getElementById("lingua");
  if (pulsante) {
    pulsante.textContent = t("lingua.altra");
    pulsante.title = t("lingua.altra_nome");
    pulsante.lang = lingua === "it" ? "en" : "it";
  }
  html.classList.add("pronto");
  window.dispatchEvent(new Event("ufotizio-lingua"));
}

// Cambia lingua e la ricorda. Con ricarica la pagina riparte (così il gioco
// aperto si riavvia nella lingua nuova); senza, cambiano solo i testi del
// sito (quando la lingua l'ha già cambiata il gioco).
export function imposta(codice, ricarica) {
  if (!LINGUE.includes(codice)) return;
  scrivi(SCELTA, codice);
  if (ricarica) {
    location.reload();
    return;
  }
  lingua = codice;
  applica();
}

// Pulsante IT / EN nell'intestazione, prima dell'account.
function pulsante() {
  const account = document.getElementById("account");
  if (!account || document.getElementById("lingua")) return;
  const bottone = document.createElement("button");
  bottone.id = "lingua";
  bottone.className = "lingua";
  bottone.addEventListener("click", () => imposta(lingua === "it" ? "en" : "it", true));
  account.before(bottone);
}

pulsante();
applica();
