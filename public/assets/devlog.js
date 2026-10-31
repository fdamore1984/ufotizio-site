// Devlog del sito e dei giochi, in italiano e in inglese (sempre allineati),
// dalla voce più recente. Solo dati: il Worker li scrive nella pagina
// /devlog e nelle "Ultime novità" della home (src/pagine.js). A ogni novità
// del sito o di un gioco si aggiunge una voce in cima.
//
// progetto: "ciccio", "gobelino" o "sito" (vedi PROGETTI); id: l'ancora della
// voce nella pagina (/devlog#id), che non cambia più.

export const PROGETTI = {
  ciccio: { nome: "ciccio.nome", pagina: "ciccio" },
  gobelino: { nome: "gobelino.nome", pagina: "gobelino" },
  sito: { nome: "devlog.sito", pagina: "home" },
};

export const DEVLOG = [
  {
    id: "2026-10-31-ciccio-stile-fumetto",
    data: "2026-10-31",
    progetto: "ciccio",
    titolo: { it: "Ciccio Massacro diventa un fumetto (nero e rosso)", en: "Cheech Carnage turns into a comic (black and red)" },
    punti: {
      it: [
        "Interfaccia nello stile del sito: font Fredoka, contorni neri spessi, ombre piene e pulsanti a pillola.",
        "Più cupo di Gobelino: pannelli rosso scurissimo e rosso sangue per la scelta.",
        "Nuovo menù iniziale con il retino da fumetto, schizzi di sangue, Ciccio e un punk arrabbiato.",
        "Rifatti anche barre della vita, barra delle azioni, minimappa e schermate di comandi, opzioni e tutorial.",
      ],
      en: [
        "Interface in the style of the site: Fredoka font, thick black outlines, solid shadows and pill buttons.",
        "Darker than Gobelino: very dark red panels and blood red for the selection.",
        "New main menu with comic halftone dots, blood splats, Cheech and an angry punk.",
        "Health bars, action bar, minimap and the controls, options and tutorial screens are redone too.",
      ],
    },
  },
  {
    id: "2026-10-31-gobelino-stile-fumetto",
    data: "2026-10-31",
    progetto: "gobelino",
    titolo: { it: "Gobelino diventa un fumetto", en: "Gobelino turns into a comic" },
    punti: {
      it: [
        "Interfaccia nello stile del sito: font Fredoka, contorni neri spessi, ombre piene e pulsanti a pillola color crema.",
        "Pannelli coi verdi del sito e giallo per la scelta.",
        "Nuovo menù iniziale con i raggi, il titolo storto, Gobelino e un demone arrabbiato.",
        "Rifatti anche barre della vita, barra delle azioni, minimappa e schermate di comandi, opzioni e tutorial.",
      ],
      en: [
        "Interface in the style of the site: Fredoka font, thick black outlines, solid shadows and cream pill buttons.",
        "Panels in the site's greens and yellow for the selection.",
        "New main menu with rays, a tilted title, Gobelino and an angry demon.",
        "Health bars, action bar, minimap and the controls, options and tutorial screens are redone too.",
      ],
    },
  },
  {
    id: "2026-10-31-sito-motori-di-ricerca",
    data: "2026-10-31",
    progetto: "sito",
    titolo: { it: "Il sito si fa trovare", en: "The site gets found" },
    punti: {
      it: [
        "Ogni pagina ha il suo indirizzo in italiano e in inglese (per esempio /ciccio-massacro e /en/cheech-carnage), così i motori di ricerca trovano tutte e due le lingue.",
        "Le pagine dei giochi raccontano cosa si può fare in ogni gioco.",
        "Nasce questo devlog, con la storia dei giochi e del sito dal primo giorno.",
        "Sitemap, descrizioni per i motori di ricerca e anteprime per quando si condivide un link.",
      ],
      en: [
        "Every page has its own address in Italian and in English (for example /ciccio-massacro and /en/cheech-carnage), so search engines find both languages.",
        "The game pages tell what you can do in each game.",
        "This devlog is born, with the story of the games and the site from day one.",
        "Sitemap, descriptions for search engines and previews for when you share a link.",
      ],
    },
  },
  {
    id: "2026-10-30-sito-nasce-ufotizio",
    data: "2026-10-30",
    progetto: "sito",
    titolo: { it: "Nasce ufotizio.com", en: "ufotizio.com is born" },
    punti: {
      it: [
        "I giochi si giocano direttamente nel browser, con tastiera e mouse, controller o touch.",
        "Account senza password, con un link via email: i salvataggi ti seguono su ogni dispositivo.",
        "Schermo intero sempre in orizzontale, anche sui telefoni.",
        "Sotto ogni gioco le immagini e il link per scaricarlo da itch.io.",
        "Il sito è in italiano e in inglese, e la lingua scelta vale anche dentro i giochi.",
        "Il tema verde e la faccia di Ufotizio vengono dal suo logo.",
      ],
      en: [
        "The games are played right in the browser, with keyboard and mouse, controller or touch.",
        "Passwordless accounts, with a link by email: your saves follow you on every device.",
        "Fullscreen always in landscape, phones included.",
        "Under each game, its pictures and the link to download it from itch.io.",
        "The site is in Italian and in English, and the language you pick applies inside the games too.",
        "The green theme and Ufotizio's face come from its logo.",
      ],
    },
  },
  {
    id: "2026-10-30-ciccio-cheech-carnage",
    data: "2026-10-30",
    progetto: "ciccio",
    titolo: { it: "Cheech Carnage, l'inglese e la versione web", en: "Cheech Carnage, English and the web version" },
    punti: {
      it: [
        "Il gioco parla anche inglese, e in inglese si chiama Cheech Carnage.",
        "Pagina itch.io e tutorial in italiano e in inglese.",
        "Versione web per ufotizio.com con i controlli touch, più veloce sui telefoni.",
        "La telecamera si allontana quando esplori e si avvicina appena inizia un combattimento.",
        "Nemici più resistenti.",
        "I muri non sono più trasparenti: dietro si vedono le sagome, e la mappa si scopre un po' alla volta.",
        "Comandi più leggibili, da cambiare con Modifica; nelle Opzioni c'è la lingua.",
      ],
      en: [
        "The game speaks English too, and in English it's called Cheech Carnage.",
        "itch.io page and tutorial in Italian and in English.",
        "Web version for ufotizio.com with touch controls, faster on phones.",
        "The camera pulls back while you explore and moves in as soon as a fight starts.",
        "Tougher enemies.",
        "Walls are no longer see-through: you see outlines behind them, and the map reveals itself bit by bit.",
        "Clearer controls, changed with Edit; the language is in the Options.",
      ],
    },
  },
  {
    id: "2026-10-30-gobelino-catacombe",
    data: "2026-10-30",
    progetto: "gobelino",
    titolo: { it: "Catacombe, buio pesto e versione web", en: "Catacombs, pitch darkness and the web version" },
    punti: {
      it: [
        "Sotto i mausolei si aprono le catacombe, con ghoul, non morti e l'Abominio della cripta.",
        "Buio pesto: la torcia a due fasci e le ombre di montagne e pareti.",
        "Più nemici, orde di non morti, slam in aria con un tocco e mana dal colpo potente.",
        "La vita dei nemici si conta a punti.",
        "I muri non sono più trasparenti, e la mappa si scopre un po' alla volta.",
        "Versione web per ufotizio.com, in italiano e in inglese, più veloce sui telefoni.",
        "Comandi visibili sullo Steam Deck, comandi da lasciare vuoti ed eliminazione dei salvataggi.",
      ],
      en: [
        "Catacombs open under the mausoleums, with ghouls, undead and the Crypt Abomination.",
        "Pitch darkness: a two-beam torch and the shadows of mountains and walls.",
        "More enemies, undead hordes, a one-tap mid-air slam and mana from power strikes.",
        "Enemy health is counted in points.",
        "Walls are no longer see-through, and the map reveals itself bit by bit.",
        "Web version for ufotizio.com, in Italian and in English, faster on phones.",
        "Controls shown on the Steam Deck, bindings that can be left empty and save deletion.",
      ],
    },
  },
  {
    id: "2026-10-29-ciccio-buio-metro",
    data: "2026-10-29",
    progetto: "ciccio",
    titolo: { it: "Buio pesto, orde e metropolitana", en: "Pitch darkness, hordes and the metro" },
    punti: {
      it: [
        "La città è al buio pesto: si vede solo dove arriva la torcia elettrica, con un alone largo e le ombre dei muri.",
        "Orde da 50 a 200 zombie.",
        "Si scende nella metropolitana: stazioni buie, binari, vagoni abbandonati e mostri nati dalle mutazioni.",
        "La vita dei nemici si conta a punti.",
      ],
      en: [
        "The city is pitch dark: you only see where the flashlight reaches, with a wide halo and the shadows of the walls.",
        "Hordes of 50 to 200 zombies.",
        "You can go down into the metro: dark stations, tracks, abandoned carriages and monsters born of mutations.",
        "Enemy health is counted in points.",
      ],
    },
  },
  {
    id: "2026-10-28-ciccio-tastiera-orde",
    data: "2026-10-28",
    progetto: "ciccio",
    titolo: { it: "Tastiera e mouse, zombie più veloci", en: "Keyboard and mouse, faster zombies" },
    punti: {
      it: [
        "Si gioca anche con tastiera e mouse, e tutti i comandi si possono rimappare.",
        "Più nemici, le prime orde di zombie, e zombie molto più veloci.",
        "Slam in aria con un tocco; il carburante si guadagna col colpo potente e non si ricarica più da solo.",
        "Danni dei nemici fissi e cure più rare.",
        "Comandi visibili sullo Steam Deck ed eliminazione dei salvataggi.",
      ],
      en: [
        "You can play with keyboard and mouse too, and every control can be remapped.",
        "More enemies, the first zombie hordes, and much faster zombies.",
        "One-tap mid-air slam; fuel is earned with power strikes and no longer refills by itself.",
        "Fixed enemy damage and rarer healing.",
        "Controls shown on the Steam Deck and save deletion.",
      ],
    },
  },
  {
    id: "2026-10-28-gobelino-meccaniche-nuove",
    data: "2026-10-28",
    progetto: "gobelino",
    titolo: { it: "Le novità di Ciccio Massacro arrivano in Gobelino", en: "Cheech Carnage's new features come to Gobelino" },
    punti: {
      it: [
        "Le meccaniche nate in Ciccio Massacro passano a Gobelino, nella sua ambientazione fantasy: la Frenesia, gli attacchi istantanei, il tutorial a pagine.",
        "Il goblin si sporca di sangue a ogni nemico ucciso.",
        "Col mouse: clic sinistro per attaccare, tasto centrale per camminare verso il cursore.",
        "Pannello dei comandi più leggibile.",
      ],
      en: [
        "The mechanics born in Cheech Carnage move to Gobelino, in its fantasy setting: the Frenzy, instant attacks, the paged tutorial.",
        "The goblin gets covered in blood with every enemy he kills.",
        "With the mouse: left click to attack, middle button to walk towards the cursor.",
        "A clearer controls panel.",
      ],
    },
  },
  {
    id: "2026-10-27-ciccio-nasce",
    data: "2026-10-27",
    progetto: "ciccio",
    titolo: { it: "Nasce Ciccio Massacro", en: "Cheech Carnage is born" },
    punti: {
      it: [
        "Da Gobelino nasce un gioco nuovo, post-apocalittico: Ciccio, un sopravvissuto rosa, con la motosega e il bazooka.",
        "Una città a griglia senza fine, con interni ed edifici abbandonati, e nemici generati a caso.",
        "La batteria al posto della stamina e la torcia elettrica a cono.",
        "Sangue, ferite, voci in 8 bit, aggancio automatico del bersaglio e fuoco amico fra i nemici.",
        "La bomba H col colpo potente in aria e lo slam ovale.",
        "La Frenesia, con l'attacco speciale L1 + R1, e il tutorial a pagine.",
      ],
      en: [
        "A new post-apocalyptic game is born from Gobelino: Cheech, a pink survivor, with a chainsaw and a bazooka.",
        "An endless grid city, with interiors and abandoned buildings, and randomly generated enemies.",
        "A battery instead of stamina, and a cone-shaped flashlight.",
        "Blood, wounds, 8-bit voices, automatic target lock and friendly fire between enemies.",
        "The H-bomb with a mid-air power strike, and the oval slam.",
        "The Frenzy, with the L1 + R1 special attack, and the paged tutorial.",
      ],
    },
  },
  {
    id: "2026-10-26-gobelino-bilanciamento",
    data: "2026-10-26",
    progetto: "gobelino",
    titolo: { it: "Combattimento più rifinito e bilanciamento", en: "Sharper combat and balancing" },
    punti: {
      it: [
        "Carica orientabile, parata istantanea e aggancio del bersaglio più preciso.",
        "Boss nell'arena con le magie, e nemici che saltano e scendono dai rilievi.",
        "Slam aereo da caricare a mezz'aria, con danni in base all'altezza; arrivano gli arcieri.",
        "Crescita dei nemici unica con il livello di minaccia, curva dell'esperienza continua e vita che cresce ogni 4 livelli.",
        "Mouse e rimappatura dei comandi, 60 FPS stabili.",
      ],
      en: [
        "Steerable charge, instant parry and more precise target lock.",
        "Arena bosses with magic, and enemies that jump onto and down from higher ground.",
        "A mid-air slam you charge up, with damage based on height; archers arrive.",
        "One growth curve for enemies tied to the threat level, a continuous experience curve and health that grows every 4 levels.",
        "Mouse support and control remapping, a steady 60 FPS.",
      ],
    },
  },
  {
    id: "2026-10-24-gobelino-souls",
    data: "2026-10-24",
    progetto: "gobelino",
    titolo: { it: "Combattimento in stile Souls", en: "Souls-like combat" },
    punti: {
      it: [
        "Il combattimento diventa in stile Souls, con la stamina e la mappa completa.",
        "Tre slot di salvataggio.",
        "Nemici solidi e più forti, che saltano.",
        "Corsa, focus per vedere meglio gli oggetti e nuovi potenziamenti.",
        "Build per Windows su itch.io, adatta anche all'MSI Claw 8.",
      ],
      en: [
        "Combat turns Souls-like, with stamina and the full map.",
        "Three save slots.",
        "Solid, stronger enemies that jump.",
        "Running, focus to spot items better, and new upgrades.",
        "A Windows build on itch.io, also fit for the MSI Claw 8.",
      ],
    },
  },
  {
    id: "2026-10-23-gobelino-montagne",
    data: "2026-10-23",
    progetto: "gobelino",
    titolo: { it: "Montagne, caverne e mercanti", en: "Mountains, caves and merchants" },
    punti: {
      it: [
        "Montagne, caverne e sotterranei con i boss.",
        "Burroni da saltare, passaggi nelle pareti e muri che diventano trasparenti.",
        "Il goblin disegnato a china, con le espressioni.",
        "Mercanti ambulanti per vendere il bottino e comprare oggetti rari.",
        "Nemici con la guardia e più attacchi; inventario a griglia.",
        "Salvataggi, e schermo intero sullo Steam Deck.",
      ],
      en: [
        "Mountains, caves and dungeons with bosses.",
        "Ravines to jump over, passages in the walls and walls that turn see-through.",
        "The goblin drawn in ink, with facial expressions.",
        "Wandering merchants to sell your loot and buy rare items.",
        "Enemies with a guard and more attacks; a grid inventory.",
        "Saving, and fullscreen on the Steam Deck.",
      ],
    },
  },
  {
    id: "2026-10-22-gobelino-isometrico",
    data: "2026-10-22",
    progetto: "gobelino",
    titolo: { it: "Un mondo isometrico a più altezze", en: "An isometric world on many levels" },
    punti: {
      it: [
        "Terreno isometrico a blocchi su più altezze, da scalare col salto.",
        "Salto, corsa, scivolata e schivata orientabile.",
        "Magia, colpo caricato, la torcia e la notte.",
        "Minimappa, casse e inventario; le sfide dei totem.",
        "Comandi corretti sullo Steam Deck e build per Linux.",
      ],
      en: [
        "Isometric block terrain on several heights, to climb by jumping.",
        "Jump, run, slide and a steerable dodge.",
        "Magic, a charged strike, the torch and the night.",
        "Minimap, chests and inventory; the totem challenges.",
        "Correct controls on the Steam Deck and a Linux build.",
      ],
    },
  },
  {
    id: "2026-10-21-gobelino-nasce",
    data: "2026-10-21",
    progetto: "gobelino",
    titolo: { it: "Nasce Gobelino", en: "Gobelino is born" },
    punti: {
      it: [
        "Primo giorno: un progetto Godot 4 in 2D e il documento di design, con un goblin come protagonista.",
        "Il primo prototipo giocabile: menù e livello di prova con il combattimento.",
        "Combo, colpo potente, schivate concatenate, pozioni, scudo e i primi tipi di nemici.",
        "Suoni sintetizzati e livelli del personaggio.",
        "A ogni modifica le build vanno da sole su itch.io.",
      ],
      en: [
        "Day one: a 2D Godot 4 project and the design document, with a goblin as the hero.",
        "The first playable prototype: menu and test level with combat.",
        "Combos, power strike, chained dodges, potions, shield and the first enemy types.",
        "Synthesized sounds and character levels.",
        "With every change the builds go to itch.io by themselves.",
      ],
    },
  },
];
