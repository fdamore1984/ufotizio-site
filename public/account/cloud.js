// Account del sito (Supabase) e salvataggi dei giochi.
// Ogni pagina lo importa come modulo: crea il client, aggiorna l'intestazione
// (Accedi, oppure l'icona del profilo con email ed Esci) e definisce window.ufotizioCloud, l'oggetto che i
// giochi usano per i salvataggi e la lingua (contratto in docs/web.md nei repo
// dei giochi).
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";
import { lingua, imposta, t } from "/assets/lingua.js";

const SUPABASE_URL = "https://wbxgjxlhxuxrfzpihikq.supabase.co";
// Chiave pubblica (publishable): fatta per stare nel sito, le regole RLS
// della tabella saves fanno leggere e scrivere a ognuno solo i propri file.
const SUPABASE_KEY = "sb_publishable_EwjC8CLHCyKdoIySYTPmEg_qdUJ4c-j";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

let session = null;

export function userName() {
  const user = session?.user;
  if (!user) return "";
  return user.user_metadata?.name || (user.email || "").split("@")[0];
}

// Icona del profilo (un omino stilizzato), disegnata qui per non caricare
// altri file.
const ICONA_PROFILO = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">'
  + '<circle cx="12" cy="8.5" r="4" fill="currentColor"/>'
  + '<path d="M4 20.5c0-4.2 3.6-6.5 8-6.5s8 2.3 8 6.5z" fill="currentColor"/></svg>';

// Chiude il riquadro dell'account aperto dall'icona del profilo.
function chiudiProfilo() {
  const pulsante = document.querySelector("#account .profilo");
  const riquadro = document.getElementById("riquadro-account");
  if (!pulsante || !riquadro || riquadro.hidden) return;
  riquadro.hidden = true;
  pulsante.setAttribute("aria-expanded", "false");
}

// Con l'accesso fatto l'intestazione mostra solo l'icona del profilo:
// toccandola si apre sotto un riquadro con l'email dell'account ed Esci.
function profilo(box) {
  const pulsante = document.createElement("button");
  pulsante.type = "button";
  pulsante.className = "profilo";
  pulsante.innerHTML = ICONA_PROFILO;
  pulsante.title = t("account.profilo");
  pulsante.setAttribute("aria-label", t("account.profilo"));
  pulsante.setAttribute("aria-haspopup", "true");
  pulsante.setAttribute("aria-expanded", "false");
  pulsante.setAttribute("aria-controls", "riquadro-account");

  const riquadro = document.createElement("div");
  riquadro.id = "riquadro-account";
  riquadro.className = "riquadro-account";
  riquadro.hidden = true;
  const etichetta = document.createElement("p");
  etichetta.className = "etichetta";
  etichetta.textContent = t("account.connesso");
  const email = document.createElement("p");
  email.className = "email";
  email.textContent = session.user.email || userName();
  const out = document.createElement("button");
  out.type = "button";
  out.textContent = t("account.esci");
  out.addEventListener("click", async () => {
    await supabase.auth.signOut();
    location.reload();
  });
  riquadro.append(etichetta, email, out);

  pulsante.addEventListener("click", () => {
    const apri = riquadro.hidden;
    riquadro.hidden = !apri;
    pulsante.setAttribute("aria-expanded", String(apri));
  });
  box.append(pulsante, riquadro);
}

document.addEventListener("click", (event) => {
  if (!event.target.closest?.("#account")) chiudiProfilo();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const aperto = !document.getElementById("riquadro-account")?.hidden;
  chiudiProfilo();
  if (aperto) document.querySelector("#account .profilo")?.focus();
});

function updateHeader() {
  const box = document.getElementById("account");
  if (!box) return;
  box.replaceChildren();
  if (session) {
    profilo(box);
  } else {
    const login = document.createElement("a");
    login.href = "/account.html?back=" + encodeURIComponent(location.pathname);
    login.textContent = t("account.accedi");
    box.append(login);
  }
}

window.ufotizioCloud = {
  signedIn: () => session != null,
  userName,
  // Lingua del sito, che il gioco usa al posto della sua; se il giocatore la
  // cambia dalle Opzioni del gioco, la cambia anche il sito.
  language: () => lingua,
  setLanguage: (code) => imposta(code, false),
  async loadFiles(game) {
    const { data, error } = await supabase
      .from("saves")
      .select("name,text,updated_at,deleted")
      .eq("game", game);
    if (error) throw error;
    return JSON.stringify(Object.fromEntries(data.map((row) => [row.name, row])));
  },
  async saveFile(game, name, text, updatedAt) {
    const { error } = await supabase.from("saves").upsert({
      user_id: session.user.id, game, name, text, updated_at: updatedAt, deleted: false,
    });
    if (error) console.warn("ufotizio: salvataggio non caricato", error);
  },
  async removeFile(game, name, updatedAt) {
    const { error } = await supabase.from("saves").upsert({
      user_id: session.user.id, game, name, text: null, updated_at: updatedAt, deleted: true,
    });
    if (error) console.warn("ufotizio: cancellazione non caricata", error);
  },
};

// Pronto quando si sa se il giocatore ha fatto l'accesso: le pagine dei
// giochi aspettano questo prima di aprire il gioco.
export const ready = supabase.auth.getSession().then(({ data }) => {
  session = data.session;
  updateHeader();
});

supabase.auth.onAuthStateChange((_event, newSession) => {
  session = newSession;
  updateHeader();
});

window.addEventListener("ufotizio-lingua", updateHeader);
