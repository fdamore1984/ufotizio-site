// Account del sito (Supabase) e salvataggi dei giochi.
// Ogni pagina lo importa come modulo: crea il client, aggiorna l'intestazione
// (Accedi / nome · Esci) e definisce window.ufotizioCloud, l'oggetto che i
// giochi usano per i salvataggi (contratto in docs/web.md nei repo dei giochi).
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

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

function updateHeader() {
  const box = document.getElementById("account");
  if (!box) return;
  box.replaceChildren();
  if (session) {
    const name = document.createElement("span");
    name.textContent = userName();
    const out = document.createElement("button");
    out.textContent = "Esci";
    out.addEventListener("click", async () => {
      await supabase.auth.signOut();
      location.reload();
    });
    box.append(name, out);
  } else {
    const login = document.createElement("a");
    login.href = "/account.html?back=" + encodeURIComponent(location.pathname);
    login.textContent = "Accedi";
    box.append(login);
  }
}

window.ufotizioCloud = {
  signedIn: () => session != null,
  userName,
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
