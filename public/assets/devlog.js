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
    id: "2026-11-07-ciccio-scorte-sfere",
    data: "2026-11-07",
    progetto: "ciccio",
    titolo: { it: "Scorte al volo, sfere d'esperienza e danni enormi", en: "Grab-and-go supplies, experience orbs and huge damage" },
    punti: {
      it: [
        "Niente più cintura delle scorte: predoni e casse lasciano spesso kit medici, taniche e batterie di ricambio, che si usano appena raccolti. Se nessuno li prende spariscono dopo 15 secondi: per curarsi bisogna uccidere in fretta.",
        "L'esperienza non arriva più uccidendo: nemici e casse lasciano sfere gialle da raccogliere, e i nemici più duri (i più grossi, le élite e i boss) ne lasciano molte di più.",
        "Passandoci vicino, sfere e oggetti a terra volano verso Ciccio come attirati da una calamita.",
        "I numeri dei danni mostrano il danno vero dei colpi: un centinaio all'inizio, poi centinaia e migliaia.",
        "Gli zombie delle orde non restano più bloccati dietro palazzi, muri e rottami: ricalcolano la strada e girano attorno all'ostacolo.",
      ],
      en: [
        "No more supply belt: raiders and crates often drop medkits, fuel cans and spare batteries, used the moment you grab them. If nobody picks them up they vanish after 15 seconds: to heal, you have to kill fast.",
        "Killing no longer gives experience directly: enemies and crates drop yellow orbs to collect, and tougher enemies (the big ones, elites and bosses) drop many more.",
        "Walk close and orbs and items on the ground fly to Cheech as if pulled by a magnet.",
        "Damage numbers show the real damage of your hits: about a hundred at first, then hundreds and thousands.",
        "Horde zombies no longer get stuck behind buildings, walls and wrecks: they recalculate their route and go around the obstacle.",
      ],
    },
  },
  {
    id: "2026-11-07-gobelino-pozioni-sfere",
    data: "2026-11-07",
    progetto: "gobelino",
    titolo: { it: "Pozioni al volo, sfere d'esperienza e danni enormi", en: "Grab-and-go potions, experience orbs and huge damage" },
    punti: {
      it: [
        "Niente più cintura delle pozioni: nemici e forzieri lasciano spesso pozioni di vita, di mana e di vigore, che si bevono appena raccolte. Se nessuno le prende spariscono dopo 15 secondi: per curarsi bisogna uccidere in fretta.",
        "L'esperienza non arriva più uccidendo: nemici e forzieri lasciano sfere gialle da raccogliere, e i nemici più duri (i più grossi, le élite e i boss) ne lasciano molte di più.",
        "Passandoci vicino, sfere e oggetti a terra volano verso il goblin come attirati da una calamita.",
        "I numeri dei danni mostrano il danno vero dei colpi: un centinaio all'inizio, poi centinaia e migliaia.",
        "I non morti delle orde non restano più bloccati dietro pareti, alberi e massi: ricalcolano la strada e girano attorno all'ostacolo.",
      ],
      en: [
        "No more potion belt: enemies and chests often drop health, mana and stamina potions, drunk the moment you grab them. If nobody picks them up they vanish after 15 seconds: to heal, you have to kill fast.",
        "Killing no longer gives experience directly: enemies and chests drop yellow orbs to collect, and tougher enemies (the big ones, elites and bosses) drop many more.",
        "Walk close and orbs and items on the ground fly to the goblin as if pulled by a magnet.",
        "Damage numbers show the real damage of your hits: about a hundred at first, then hundreds and thousands.",
        "Horde undead no longer get stuck behind walls, trees and boulders: they recalculate their route and go around the obstacle.",
      ],
    },
  },
  {
    id: "2026-11-07-ciccio-livelli-scorte",
    data: "2026-11-07",
    progetto: "ciccio",
    titolo: { it: "Livelli più rapidi e scorte ribilanciate", en: "Faster levels and rebalanced supplies" },
    punti: {
      it: [
        "Si sale di livello più in fretta: serve circa un terzo di esperienza in meno per ogni livello. I salvataggi tengono la stessa parte del livello già fatta.",
        "La vita torna a essere una barra continua, come batteria e carburante.",
        "Il bazooka, lo slam e i colpi potenti consumano circa il 40% di carburante in meno. Predoni e casse lasciano più taniche e batterie di ricambio e meno kit medici.",
        "Nel browser, quando la batteria si scarica, Ciccio usa da solo una batteria di ricambio, se ne ha una.",
        "Salendo di livello con una bomba H, la scelta dei potenziamenti aspetta che l'esplosione sia finita.",
      ],
      en: [
        "You level up faster: each level needs about a third less experience. Saves keep the same share of the level you'd already done.",
        "Health is a continuous bar again, like battery and fuel.",
        "The bazooka, slams and power strikes use about 40% less fuel. Raiders and crates drop more fuel cans and spare batteries and fewer medkits.",
        "In the browser, when the battery runs flat, Cheech uses a spare battery by himself, if he has one.",
        "When an H-bomb levels you up, the upgrade choice waits for the explosion to finish.",
      ],
    },
  },
  {
    id: "2026-11-07-gobelino-livelli-pozioni",
    data: "2026-11-07",
    progetto: "gobelino",
    titolo: { it: "Livelli più rapidi, pozioni ribilanciate e un nuovo volto", en: "Faster levels, rebalanced potions and a new face" },
    punti: {
      it: [
        "Si sale di livello più in fretta: serve circa un terzo di esperienza in meno per ogni livello. I salvataggi tengono la stessa parte del livello già fatta.",
        "La vita torna a essere una barra continua, come vigore e mana.",
        "La palla di fuoco, lo slam e i colpi potenti consumano circa il 40% di mana in meno. Nemici e forzieri lasciano più pozioni di mana e di vigore e meno pozioni di vita.",
        "Il goblin e tutti i nemici, non morti e ghoul compresi, hanno un volto nuovo: solo due occhi piccoli e neri, senza bocca.",
        "Nel browser, quando il vigore finisce, il goblin beve da solo una pozione verde, se ne ha una. Salendo di livello con una runa del cataclisma, la scelta dei potenziamenti aspetta che l'esplosione sia finita.",
      ],
      en: [
        "You level up faster: each level needs about a third less experience. Saves keep the same share of the level you'd already done.",
        "Health is a continuous bar again, like stamina and mana.",
        "The fireball, slams and power strikes use about 40% less mana. Enemies and chests drop more mana and stamina potions and fewer health potions.",
        "The goblin and every enemy, undead and ghouls included, have a new face: just two small black eyes, no mouth.",
        "In the browser, when stamina runs out, the goblin drinks a green potion by himself, if he has one. When a Cataclysm rune levels you up, the upgrade choice waits for the explosion to finish.",
      ],
    },
  },
  {
    id: "2026-11-07-ciccio-colpi-missioni",
    data: "2026-11-07",
    progetto: "ciccio",
    titolo: { it: "Colpi che si sentono, contrattacco, élite e missioni", en: "Hits you can feel, counters, elites and missions" },
    punti: {
      it: [
        "Colpi più soddisfacenti: i predoni vengono respinti (molto di più col colpo finale e con quelli potenti), barcollano, lampeggiano e fanno una smorfia di dolore; il sangue schizza nella direzione del colpo, nel punto d'impatto c'è un lampo e la telecamera trema. Il controller vibra.",
        "Dopo una parata perfetta hai un secondo per il contrattacco: uno scatto e un colpo critico dorato che fa il triplo dei danni. Gli attacchi che non si parano hanno un triangolo rosso col «!», i nemici grossi una barra di resistenza da rompere, e sopra i nemici compaiono i numeri dei danni.",
        "Nemici élite più grossi, con l'aura e un anello dorati; orde di zombie a ondate con una ricompensa; missioni dei commercianti (liberare una piazza dai predoni o recuperare una cassa); di notte più nemici ma anche più bottino. La mappa segna i posti ripuliti e le casse ancora chiuse.",
        "Se cadi riparti vicino all'ultimo posto sicuro e un quarto dei rottami resta in una sacca da andare a riprendere. Nuove opzioni: difficoltà (Facile, Normale, Difficile), vibrazione, numeri dei danni, tremolio della telecamera, sangue e dimensione dell'interfaccia.",
        "Corretti un raro errore di disegno durante i combattimenti e l'avviso sulle risorse audio alla chiusura del gioco.",
      ],
      en: [
        "More satisfying hits: raiders get knocked back (much further by the finisher and power strikes), stagger, flash and grimace in pain; blood sprays in the direction of the hit, there's a flash at the point of impact and the camera shakes. The controller vibrates.",
        "After a perfect parry you have one second to counter: a lunge and a golden critical blow with triple damage. Attacks you can't parry show a red triangle with \"!\", big enemies have a poise bar to break, and damage numbers pop up over enemies.",
        "Bigger elite enemies with a golden aura and ring; zombie hordes in waves with a reward; missions from the traders (clear a square of raiders or recover a crate); more enemies at night, but more loot too. The map marks cleared places and unopened crates.",
        "If you fall you start again near the last safe spot and a quarter of your scrap stays in a bag you can go back for. New options: difficulty (Easy, Normal, Hard), vibration, damage numbers, camera shake, blood and interface size.",
        "Fixed a rare drawing error during fights and the audio resources warning when closing the game.",
      ],
    },
  },
  {
    id: "2026-11-07-gobelino-colpi-missioni",
    data: "2026-11-07",
    progetto: "gobelino",
    titolo: { it: "Colpi che si sentono, contrattacco, élite e missioni", en: "Hits you can feel, counters, elites and missions" },
    punti: {
      it: [
        "Colpi più soddisfacenti: i nemici vengono respinti (molto di più col colpo finale e con quelli potenti), barcollano, lampeggiano e strizzano gli occhi dal dolore; il sangue schizza nella direzione del colpo, nel punto d'impatto c'è un lampo e la telecamera trema. Il controller vibra.",
        "Dopo una parata perfetta hai un secondo per il contrattacco: uno scatto e un colpo critico dorato che fa il triplo dei danni. Gli attacchi che non si parano hanno un triangolo rosso col «!», i nemici grossi una barra di resistenza da rompere, e sopra i nemici compaiono i numeri dei danni.",
        "Le orde di non morti non restano più bloccate dal terreno: compaiono solo dove c'è un percorso fino al goblin, scivolano lungo le pareti e arrivano a ondate, con una ricompensa per chi le sbaraglia.",
        "Nemici élite più grossi, con l'aura e un anello dorati; missioni dei mercanti (liberare una radura o recuperare un forziere); di notte più nemici ma anche più bottino. La mappa segna i posti ripuliti e i forzieri ancora chiusi.",
        "Se cadi riparti vicino all'ultimo posto sicuro e un quarto dell'oro resta in una sacca da andare a riprendere. Nuove opzioni: difficoltà (Facile, Normale, Difficile), vibrazione, numeri dei danni, tremolio della telecamera, sangue e dimensione dell'interfaccia. Corretti un raro errore di disegno e l'avviso sulle risorse audio alla chiusura.",
      ],
      en: [
        "More satisfying hits: enemies get knocked back (much further by the finisher and power strikes), stagger, flash and squint in pain; blood sprays in the direction of the hit, there's a flash at the point of impact and the camera shakes. The controller vibrates.",
        "After a perfect parry you have one second to counter: a lunge and a golden critical blow with triple damage. Attacks you can't parry show a red triangle with \"!\", big enemies have a poise bar to break, and damage numbers pop up over enemies.",
        "Undead hordes no longer get stuck on the terrain: they only show up where there's a path to the goblin, slide along walls and come in waves, with a reward if you rout them.",
        "Bigger elite enemies with a golden aura and ring; missions from the merchants (clear a glade or recover a chest); more enemies at night, but more loot too. The map marks cleared places and unopened chests.",
        "If you fall you start again near the last safe spot and a quarter of your gold stays in a bag you can go back for. New options: difficulty (Easy, Normal, Hard), vibration, damage numbers, camera shake, blood and interface size. Fixed a rare drawing error and the audio resources warning when closing.",
      ],
    },
  },
  {
    id: "2026-11-07-ciccio-citta-orde",
    data: "2026-11-07",
    progetto: "ciccio",
    titolo: { it: "Città nuova, orde più eque, torcia rifatta", en: "New city, fairer hordes, reworked flashlight" },
    punti: {
      it: [
        "La città non è più una griglia: viali irregolari con incroci sfalsati, strade che finiscono a T o nei vicoli ciechi, piazze con giardini dalle forme irregolari ed edifici a L. Palazzi, alberi, lampioni e macerie sono più grandi, in proporzione con Ciccio.",
        "Gli interni degli edifici hanno muri crollati e angoli franati; nella metropolitana le gallerie curvano, hanno la passerella e i passaggi trasversali, e sui vagoni abbandonati (anche deragliati) si sale con un salto per combattere dall'alto.",
        "Orde più piccole (al più 35 zombie vivi insieme) e nessun nemico è più veloce di Ciccio che cammina: correndo si scappa sempre. Colpiti durante un'orda si resta invulnerabili più a lungo e gli zombie vicini vengono respinti.",
        "La torcia è un solo cono più largo che parte da dietro le spalle, senza alone; il buio è un po' meno fitto e la telecamera è più vicina all'azione.",
        "La Bomba H (L2 + R2) non fa più partire il colpo potente né la modalità focus. I nemici hanno un aspetto pulito, uguale per tipo, con il contorno spesso come le linee della faccia, e nel menù c'è Ciccio com'è nel gioco. Il gioco è anche più leggero.",
      ],
      en: [
        "The city is no longer a grid: irregular avenues with staggered crossings, streets ending in T-junctions or dead ends, squares with irregular gardens and L-shaped buildings. Buildings, trees, lamps and rubble are bigger, in proportion to Cheech.",
        "Building interiors have collapsed walls and caved-in corners; in the metro the tunnels bend and have a catwalk and cross passages, and you can jump onto the abandoned carriages (some derailed) to fight from above.",
        "Smaller hordes (at most 35 zombies alive at once) and no enemy is faster than Cheech walking: running, you always get away. When hit during a horde you stay invulnerable longer and nearby zombies are pushed back.",
        "The flashlight is a single wider cone starting behind his shoulders, with no halo; the dark is a bit less thick and the camera is closer to the action.",
        "The H-bomb (L2 + R2) no longer triggers the power strike or focus mode. Enemies have a clean look, the same for each type, with an outline as thick as the lines of their face, and the menu shows Cheech as he is in the game. The game also runs lighter.",
      ],
    },
  },
  {
    id: "2026-11-07-gobelino-mondo-orde",
    data: "2026-11-07",
    progetto: "gobelino",
    titolo: { it: "Mondo più vivo, orde più eque, torcia rifatta", en: "Livelier world, fairer hordes, reworked torch" },
    punti: {
      it: [
        "Colline, sentieri e boschi hanno forme irregolari e asimmetriche; alberi, sassi, cespugli e mausolei sono più grandi e le montagne più alte, in proporzione con il goblin.",
        "Le caverne sono fatte di più lobi, con gallerie che serpeggiano e nicchie; nelle catacombe le gallerie curvano, hanno un camminamento e i cunicoli trasversali, e sulle grandi tombe di pietra si sale con un salto per combattere dall'alto.",
        "Orde più piccole (al più 35 non morti vivi insieme) e nessun nemico è più veloce del goblin che cammina: correndo si scappa sempre. Colpiti durante un'orda si resta invulnerabili più a lungo e i non morti vicini vengono respinti.",
        "La torcia è un solo cono più largo che parte da dietro le spalle, senza alone; il buio è un po' meno fitto e la telecamera è più vicina all'azione.",
        "La runa del cataclisma (L2 + R2) non fa più partire il colpo potente né la modalità focus. I goblin nemici hanno un aspetto pulito, uguale per tipo, e la faccia più leggibile. Il gioco è anche più leggero.",
      ],
      en: [
        "Hills, paths and woods have irregular, asymmetric shapes; trees, rocks, bushes and mausoleums are bigger and the mountains taller, in proportion to the goblin.",
        "Caves are made of several lobes, with winding tunnels and alcoves; in the catacombs the tunnels bend and have a walkway and cross tunnels, and you can jump onto the great stone tombs to fight from above.",
        "Smaller hordes (at most 35 undead alive at once) and no enemy is faster than the goblin walking: running, you always get away. When hit during a horde you stay invulnerable longer and nearby undead are pushed back.",
        "The torch is a single wider cone starting behind your shoulders, with no halo; the dark is a bit less thick and the camera is closer to the action.",
        "The cataclysm rune (L2 + R2) no longer triggers the power strike or focus mode. Enemy goblins have a clean look, the same for each type, and a more readable face. The game also runs lighter.",
      ],
    },
  },
  {
    id: "2026-11-03-ciccio-licenze",
    data: "2026-11-03",
    progetto: "ciccio",
    titolo: { it: "Licenze in Opzioni", en: "Licenses in Options" },
    punti: {
      it: [
        "In Opzioni c'è Licenze: le note di copyright e le licenze di Godot, il motore con cui è fatto il gioco, dei suoi componenti e dei font.",
      ],
      en: [
        "Options now has Licenses: the copyright notices and licenses of Godot, the engine the game is made with, of its components and of the fonts.",
      ],
    },
  },
  {
    id: "2026-11-03-gobelino-licenze",
    data: "2026-11-03",
    progetto: "gobelino",
    titolo: { it: "Licenze in Opzioni", en: "Licenses in Options" },
    punti: {
      it: [
        "In Opzioni c'è Licenze: le note di copyright e le licenze di Godot, il motore con cui è fatto il gioco, dei suoi componenti e dei font.",
      ],
      en: [
        "Options now has Licenses: the copyright notices and licenses of Godot, the engine the game is made with, of its components and of the fonts.",
      ],
    },
  },
  {
    id: "2026-11-03-sito-sicurezza",
    data: "2026-11-03",
    progetto: "sito",
    titolo: { it: "Sito più sicuro", en: "A safer site" },
    punti: {
      it: [
        "Dopo l'accesso il sito riporta solo a pagine di ufotizio.com, e le sue pagine non si possono più mettere dentro altri siti.",
      ],
      en: [
        "After signing in, the site only takes you back to ufotizio.com pages, and its pages can no longer be embedded in other sites.",
      ],
    },
  },
  {
    id: "2026-11-02-ciccio-tutorial-nemici",
    data: "2026-11-02",
    progetto: "ciccio",
    titolo: { it: "Tutorial con nemici veri", en: "Tutorial with real enemies" },
    punti: {
      it: [
        "Nel tutorial giocabile arrivano predoni veri invece degli zombie, che correvano addosso a Ciccio e si spappolavano subito: ora c'è il tempo di provare parate, schivate, missili e Frenesia.",
      ],
      en: [
        "The playable tutorial now sends real raiders instead of zombies, which ran into Cheech and burst right away: now there's time to try parries, dodges, missiles and Frenzy.",
      ],
    },
  },
  {
    id: "2026-11-02-gobelino-tutorial-nemici",
    data: "2026-11-02",
    progetto: "gobelino",
    titolo: { it: "Tutorial con nemici veri", en: "Tutorial with real enemies" },
    punti: {
      it: [
        "Nel tutorial giocabile i combattimenti si fanno contro guerrieri, gli altri passi contro esploratori: mai i non morti delle orde, che si spappolano subito.",
      ],
      en: [
        "In the playable tutorial the fights are against warriors and the other steps against scouts: never the undead from the hordes, which burst right away.",
      ],
    },
  },
  {
    id: "2026-11-02-ciccio-tutorial-giocabile",
    data: "2026-11-02",
    progetto: "ciccio",
    titolo: { it: "Tutorial giocabile e bomba H con L2 + R2", en: "Playable tutorial and H-bomb on L2 + R2" },
    punti: {
      it: [
        "Nel tutorial del menù iniziale c'è Inizia il tutorial giocabile: una partita a parte, che non si salva, in cui Ciccio non muore e impari le mosse una alla volta, con controller, tastiera e mouse o col touch.",
        "La bomba H ora si fa a mezz'aria premendo insieme colpo potente e focus (L2 + R2); il colpo potente da solo in aria è sempre lo slam, e parte subito.",
        "Col touch: kit medici, taniche e batterie in basso al centro da toccare per usarli, un nuovo tasto blu Slam e, su telefoni e tablet, la telecamera più vicina.",
        "Nel browser il gioco non si blocca più un attimo la prima volta che si spara col bazooka.",
      ],
      en: [
        "The tutorial in the main menu now has Start the playable tutorial: a separate game, never saved, where Cheech can't die and you learn the moves one at a time, with a controller, keyboard and mouse or touch.",
        "The H-bomb now comes from pressing power strike and focus together in mid-air (L2 + R2); the power strike alone in mid-air is always the slam, and it starts right away.",
        "With touch: medkits, fuel cans and batteries at the bottom center that you tap to use, a new blue Slam button and, on phones and tablets, a closer camera.",
        "In the browser the game no longer freezes for a moment the first time you fire the bazooka.",
      ],
    },
  },
  {
    id: "2026-11-02-gobelino-tutorial-giocabile",
    data: "2026-11-02",
    progetto: "gobelino",
    titolo: { it: "Tutorial giocabile e runa con L2 + R2", en: "Playable tutorial and rune on L2 + R2" },
    punti: {
      it: [
        "Nel tutorial del menù iniziale c'è Inizia il tutorial giocabile: una partita a parte, che non si salva, in cui il goblin non muore e impari le mosse una alla volta, con controller, tastiera e mouse o col touch.",
        "La runa del Cataclisma ora si spacca a mezz'aria premendo insieme colpo potente e focus (L2 + R2); il colpo potente da solo in aria è sempre lo slam, e parte subito.",
        "Col touch: pozioni di vita, mana e vigore in basso al centro da toccare per berle, un nuovo tasto blu Slam e, su telefoni e tablet, la telecamera più vicina.",
        "Nel browser il gioco non si blocca più un attimo la prima volta che si lancia la palla di fuoco.",
      ],
      en: [
        "The tutorial in the main menu now has Start the playable tutorial: a separate game, never saved, where the goblin can't die and you learn the moves one at a time, with a controller, keyboard and mouse or touch.",
        "The Cataclysm rune is now smashed by pressing power strike and focus together in mid-air (L2 + R2); the power strike alone in mid-air is always the slam, and it starts right away.",
        "With touch: health, mana and stamina potions at the bottom center that you tap to drink, a new blue Slam button and, on phones and tablets, a closer camera.",
        "In the browser the game no longer freezes for a moment the first time you cast a fireball.",
      ],
    },
  },
  {
    id: "2026-11-02-sito-contattami-profilo",
    data: "2026-11-02",
    progetto: "sito",
    titolo: { it: "Pagina Contattami e icona del profilo", en: "Contact page and profile icon" },
    punti: {
      it: [
        "Nuova pagina Contattami: scrivi nome, email e messaggio e mi arriva direttamente per email. Un controllo di Cloudflare Turnstile ferma i bot, e il modulo accetta solo testo, niente allegati.",
        "Con l'accesso fatto, nell'intestazione c'è solo l'icona del profilo: toccandola si apre un riquadro con la tua email e il pulsante Esci.",
      ],
      en: [
        "New Contact me page: write your name, email and message and it comes straight to my inbox. A Cloudflare Turnstile check stops bots, and the form only accepts text, no attachments.",
        "When you're signed in, the header just shows a profile icon: tap it to open a box with your email and the Sign out button.",
      ],
    },
  },
  {
    id: "2026-11-01-sito-chi-ha-creato-ufotizio",
    data: "2026-11-01",
    progetto: "sito",
    titolo: { it: "Chi ha creato Ufotizio", en: "Who made Ufotizio" },
    punti: {
      it: [
        "In home, sotto il saluto di Ufotizio, mi presento con foto, nome e cognome: cos'è il progetto, un portale di giochi fatti con Claude Code e altri agenti AI per divertimento e per studio, e cosa so fare.",
        "La presentazione si può nascondere e riaprire quando vuoi dalla pillola \"Chi ha creato Ufotizio?\"; il sito si ricorda la scelta.",
      ],
      en: [
        "On the home page, under Ufotizio's greeting, I introduce myself with a photo and my full name: what the project is, a games portal made with Claude Code and other AI agents for fun and for study, and what I do.",
        "You can hide the introduction and open it again whenever you like from the \"Who made Ufotizio?\" pill; the site remembers your choice.",
      ],
    },
  },
  {
    id: "2026-11-01-ciccio-interagisci-touch",
    data: "2026-11-01",
    progetto: "ciccio",
    titolo: { it: "Interagire col touch", en: "Interacting with touch" },
    punti: {
      it: [
        "Col touch, vicino a casse, mercanti e ingressi compare un tasto verde Interagisci, e il suggerimento sopra l'oggetto dice solo \"Interagisci\", senza il tasto della tastiera.",
        "Il pulsante Chiudi di inventario, mappa e negozio ora sta in alto a destra, così non finisce mai fuori dallo schermo.",
      ],
      en: [
        "With touch controls a green Interact button shows up near chests, merchants and entrances, and the prompt above the object just says \"Interact\", without the keyboard key.",
        "The Close button of the inventory, the map and the shop is now in the top right, so it never ends up off screen.",
      ],
    },
  },
  {
    id: "2026-11-01-gobelino-interagisci-touch",
    data: "2026-11-01",
    progetto: "gobelino",
    titolo: { it: "Interagire col touch", en: "Interacting with touch" },
    punti: {
      it: [
        "Col touch, vicino a casse, mercanti e ingressi compare un tasto verde Interagisci, e il suggerimento sopra l'oggetto dice solo \"Interagisci\", senza il tasto della tastiera.",
        "Il pulsante Chiudi di inventario, mappa e negozio ora sta in alto a destra, così non finisce mai fuori dallo schermo.",
      ],
      en: [
        "With touch controls a green Interact button shows up near chests, merchants and entrances, and the prompt above the object just says \"Interact\", without the keyboard key.",
        "The Close button of the inventory, the map and the shop is now in the top right, so it never ends up off screen.",
      ],
    },
  },
  {
    id: "2026-11-01-ciccio-nemici-somiglianti",
    data: "2026-11-01",
    progetto: "ciccio",
    titolo: { it: "I nemici somigliano a Ciccio", en: "The enemies look like Cheech" },
    punti: {
      it: [
        "I nemici ora hanno gli stessi occhioni e la stessa boccaccia di Ciccio, ognuno con qualcosa di suo: occhi più grandi o più piccoli, di colore diverso, denti serrati o un urlo, cicatrici, capelli, cappelli e occhiali come prima.",
        "Urlano mentre attaccano, e gli zombie hanno gli occhi verdastri.",
        "Braccia e gambe di Ciccio e dei nemici sono lunghe la metà.",
        "Gli occhi dei nemici stanno sempre sopra le armi, e il triangolo che indicava la direzione non c'è più: dove vanno lo dicono gli occhi.",
        "Continua ora mostra gli slot, con già selezionata la partita più recente, invece di caricarla da sola.",
        "Nuovo tasto Carica partita, nel menù iniziale e in quello di pausa: dalla pausa chiede conferma, perché i progressi non salvati si perdono.",
        "Col touch inventario e mappa hanno un tasto Chiudi: prima non c'era modo di uscirne.",
        "Nel browser niente più scatti esplorando: il terreno nuovo si prepara poco per volta mentre giochi, la schermata di caricamento ai bordi del mondo non compare quasi più e gli effetti si preparano all'avvio.",
      ],
      en: [
        "Enemies now have Cheech's huge eyes and big mouth, each with something of their own: bigger or smaller eyes in different colors, clenched teeth or a scream, scars, plus hair, hats and glasses as before.",
        "They scream while attacking, and zombies have greenish eyes.",
        "Cheech's and the enemies' arms and legs are half as long.",
        "The enemies' eyes always stay on top of their weapons, and the triangle that showed their direction is gone: their eyes show where they're going.",
        "Continue now shows the save slots, with the latest game already selected, instead of loading it right away.",
        "New Load game button, in the main menu and in the pause menu: from the pause menu it asks for confirmation, since unsaved progress is lost.",
        "With touch controls the inventory and the map have a Close button: before there was no way out.",
        "No more stutters while exploring in the browser: new terrain is prepared bit by bit while you play, the loading screen at the edges of the world almost never shows up and effects are prepared at startup.",
      ],
    },
  },
  {
    id: "2026-11-01-gobelino-goblin",
    data: "2026-11-01",
    progetto: "gobelino",
    titolo: { it: "Un mondo di goblin", en: "A world of goblins" },
    punti: {
      it: [
        "Niente più forme geometriche: i nemici sono goblin come Gobelino, con le orecchie a punta e gli occhioni, e ognuno è diverso: orecchie lunghe, pendenti o strappate, occhi grandi o piccoli, ghigni, zanne, cicatrici, bende e porri.",
        "Gobelino ha le orecchie e un sorriso, e il triangolo che indicava la direzione non c'è più: dove va lo dicono gli occhi, che la spada non copre mai.",
        "Le gambe sono lunghe la metà, per Gobelino e per i nemici.",
        "Continua ora mostra gli slot, con già selezionata la partita più recente, invece di caricarla da sola.",
        "Nuovo tasto Carica partita, nel menù iniziale e in quello di pausa: dalla pausa chiede conferma, perché i progressi non salvati si perdono.",
        "Col touch inventario e mappa hanno un tasto Chiudi: prima non c'era modo di uscirne.",
        "Nel browser niente più scatti esplorando: il terreno nuovo si prepara poco per volta mentre giochi, la schermata di caricamento ai bordi del mondo non compare quasi più e gli effetti si preparano all'avvio.",
      ],
      en: [
        "No more geometric shapes: enemies are goblins like Gobelino, with pointy ears and big eyes, and each one is different: long, droopy or torn ears, big or small eyes, grins, fangs, scars, eye patches and warts.",
        "Gobelino has ears and a smile, and the triangle that showed his direction is gone: his eyes show where he's going, and the sword never covers them.",
        "Legs are half as long, for Gobelino and for the enemies.",
        "Continue now shows the save slots, with the latest game already selected, instead of loading it right away.",
        "New Load game button, in the main menu and in the pause menu: from the pause menu it asks for confirmation, since unsaved progress is lost.",
        "With touch controls the inventory and the map have a Close button: before there was no way out.",
        "No more stutters while exploring in the browser: new terrain is prepared bit by bit while you play, the loading screen at the edges of the world almost never shows up and effects are prepared at startup.",
      ],
    },
  },
  {
    id: "2026-11-01-ciccio-modalita-touch",
    data: "2026-11-01",
    progetto: "ciccio",
    titolo: { it: "Ciccio si gioca col pollice", en: "Cheech, now with just your thumb" },
    punti: {
      it: [
        "Dal telefono o dal tablet, senza controller né tastiera e mouse, il gioco parte da solo in Modalità Touch.",
        "Pochi tasti: Menù, Zaino e Mappa in alto a sinistra, la levetta in basso a sinistra, Attacco e Schivata in basso a destra.",
        "Tieni premuto Attacco e Ciccio fa tutto da solo: combo di motosega, colpo potente, salto e slam, finché regge la batteria; da lontano spara il bazooka.",
        "Salto, parata, piastre di kevlar, torcia, kit medici, taniche e batterie di scorta sono automatici.",
        "I tasti gialli e rossi di Bomba H e Frenesia compaiono solo quando puoi usarli, e c'è un tutorial apposta per il touch.",
        "Sul PC non cambia niente: controller, oppure tastiera e mouse.",
      ],
      en: [
        "On a phone or tablet, with no controller or keyboard and mouse, the game starts in Touch Mode by itself.",
        "Just a few buttons: Menu, Bag and Map in the top left, the stick in the bottom left, Attack and Dodge in the bottom right.",
        "Hold Attack and Cheech does it all: chainsaw combo, power strike, jump and slam, as long as the battery lasts; from afar he fires the bazooka.",
        "Jumping, parrying, Kevlar plates, flashlight, medkits, fuel cans and spare batteries are automatic.",
        "The yellow and red H-bomb and Frenzy buttons show up only when you can use them, and there's a tutorial made for touch.",
        "Nothing changes on PC: controller, or keyboard and mouse.",
      ],
    },
  },
  {
    id: "2026-11-01-gobelino-modalita-touch",
    data: "2026-11-01",
    progetto: "gobelino",
    titolo: { it: "Gobelino si gioca col pollice", en: "Gobelino, now with just your thumb" },
    punti: {
      it: [
        "Dal telefono o dal tablet, senza controller né tastiera e mouse, il gioco parte da solo in Modalità Touch.",
        "Pochi tasti: Menù, Zaino e Mappa in alto a sinistra, la levetta in basso a sinistra, Attacco e Schivata in basso a destra.",
        "Tieni premuto Attacco e il goblin fa tutto da solo: combo di spada, colpo potente, salto e slam, finché regge il vigore; da lontano lancia palle di fuoco.",
        "Salto, parata, bolla magica, torcia e pozioni sono automatici.",
        "I tasti arancione e rosso di Runa e Frenesia compaiono solo quando puoi usarli, e c'è un tutorial apposta per il touch.",
        "Sul PC non cambia niente: controller, oppure tastiera e mouse.",
      ],
      en: [
        "On a phone or tablet, with no controller or keyboard and mouse, the game starts in Touch Mode by itself.",
        "Just a few buttons: Menu, Bag and Map in the top left, the stick in the bottom left, Attack and Dodge in the bottom right.",
        "Hold Attack and the goblin does it all: sword combo, power strike, jump and slam, as long as stamina lasts; from afar he throws fireballs.",
        "Jumping, parrying, the magic bubble, torch and potions are automatic.",
        "The orange and red Rune and Frenzy buttons show up only when you can use them, and there's a tutorial made for touch.",
        "Nothing changes on PC: controller, or keyboard and mouse.",
      ],
    },
  },
  {
    id: "2026-11-01-ciccio-furioso",
    data: "2026-11-01",
    progetto: "ciccio",
    titolo: { it: "Ciccio è sempre più furioso", en: "Cheech is angrier than ever" },
    punti: {
      it: [
        "Ciccio non si calma mai: occhioni enormi, fusi in un'unica forma, con lo sguardo cattivo e le pupille che puntano dove va.",
        "La bocca è diventata enorme: occupa tutta la parte bassa della palla, con i denti serrati o spalancata in un urlo.",
        "Contorni neri molto più spessi, così Ciccio si vede bene anche nel caos della battaglia.",
        "Braccia e gambe sono solo linee nere: niente più guanti né piedi.",
        "Anche il ritratto in alto a sinistra, la copertina e le immagini del tutorial mostrano il nuovo Ciccio.",
      ],
      en: [
        "Cheech never calms down: huge eyes merged into a single shape, with a mean glare and pupils that point where he's going.",
        "His mouth is now enormous: it fills the whole bottom of the ball, with clenched teeth or wide open in a scream.",
        "Much thicker black outlines, so Cheech stands out even in the chaos of battle.",
        "Arms and legs are just black lines: no more gloves or feet.",
        "The portrait in the top left, the cover and the tutorial images show the new Cheech too.",
      ],
    },
  },
  {
    id: "2026-10-31-ciccio-nuovo-look",
    data: "2026-10-31",
    progetto: "ciccio",
    titolo: { it: "Ciccio ha una faccia nuova", en: "Cheech gets a new face" },
    punti: {
      it: [
        "Il nuovo Ciccio nasce da un disegno di Valentina: una palla color pesca con gli occhioni cattivi e un ghigno pieno di denti, braccia e gambe lunghe come linee e i guanti bianchi.",
        "La motosega è rossa, con la maniglia nera e i denti a punta che girano.",
        "Il ghigno si spalanca negli attacchi e nello slam, e ogni tanto Ciccio sbatte le palpebre.",
        "Niente più naso: dove guarda lo dice la faccia, che resta sempre ben visibile anche mentre mena colpi.",
        "Nello slam la motosega sale dietro la testa e cala di lato con tutto il peso del corpo.",
        "Anche il ritratto in alto a sinistra ha la faccia nuova.",
      ],
      en: [
        "The new Cheech comes from a drawing by Valentina: a peach-colored ball with big mean eyes and a toothy grin, long line arms and legs and white gloves.",
        "The chainsaw is red, with a black handle and spiky teeth that spin.",
        "The grin opens wide when he attacks and slams, and every now and then Cheech blinks.",
        "No more nose: his face shows where he's looking, and it always stays clearly visible, even mid-swing.",
        "In the slam the chainsaw goes up behind his head and comes down from the side with all his weight.",
        "The portrait in the top left has the new face too.",
      ],
    },
  },
  {
    id: "2026-10-31-sito-analytics",
    data: "2026-10-31",
    progetto: "sito",
    titolo: { it: "Statistiche delle visite e pagina della privacy", en: "Visit statistics and privacy page" },
    punti: {
      it: ["Il sito usa Google Analytics per contare le visite, ma solo se accetti nel nuovo banner dei cookie.", "Nuova pagina Privacy e cookie, con il link nel piè di pagina per cambiare la scelta."],
      en: ["The site uses Google Analytics to count visits, but only if you accept in the new cookie banner.", "New Privacy and cookies page, with a footer link to change your choice."],
    },
  },
  {
    id: "2026-10-31-ciccio-muri-trasparenti",
    data: "2026-10-31",
    progetto: "ciccio",
    titolo: { it: "Muri trasparenti e torcia con l'alone", en: "See-through walls and a flashlight glow" },
    punti: {
      it: [
        "Quando Ciccio passa dietro a un palazzo, il muro davanti a lui diventa trasparente attorno a lui.",
        "La sagoma dietro ai muri non ha più le gambe ferme: solo corpo e naso.",
        "La torcia elettrica illumina anche un piccolo cerchio attorno a Ciccio.",
        "Steam Deck: i collegamenti a Steam creati col vecchio nome del file (CiccioMassacro.x86_64) funzionano di nuovo anche in modalità gioco.",
      ],
      en: [
        "When Cheech walks behind a building, the wall in front of him turns see-through around him.",
        "The outline behind walls no longer has frozen legs: just body and nose.",
        "The flashlight also lights a small circle around Cheech.",
        "Steam Deck: Steam shortcuts made with the old file name (CiccioMassacro.x86_64) work again, in Game Mode too.",
      ],
    },
  },
  {
    id: "2026-10-31-gobelino-luce-colline",
    data: "2026-10-31",
    progetto: "gobelino",
    titolo: { it: "La torcia sale sulle colline", en: "The torch climbs the hills" },
    punti: {
      it: [
        "In cima a colline e altopiani la luce della torcia parte dai piedi di Gobelino, non più dal terreno più in basso.",
        "La torcia illumina anche un piccolo cerchio attorno a Gobelino.",
        "Dietro a montagne e pareti il muro davanti a Gobelino diventa trasparente attorno a lui.",
        "La sagoma dietro ai muri non ha più le gambe ferme: solo corpo e naso.",
      ],
      en: [
        "On top of hills and plateaus the torchlight starts at Gobelino's feet, no longer from the lowest ground.",
        "The torch also lights a small circle around Gobelino.",
        "Behind mountains and walls, the wall in front of Gobelino turns see-through around him.",
        "The outline behind walls no longer has frozen legs: just body and nose.",
      ],
    },
  },
  {
    id: "2026-10-31-ciccio-mondo-fumetto",
    data: "2026-10-31",
    progetto: "ciccio",
    titolo: { it: "Anche la città di Ciccio è a fumetto", en: "Cheech's city turns into a comic too" },
    punti: {
      it: [
        "Contorni a inchiostro su Ciccio, predoni, motoseghe, mazze, pistole, lampioni, macerie e palazzi.",
        "Occhi grandi da fumetto: i predoni li hanno arrabbiati, sotto occhiali da sole e bende.",
        "Ombre a terra piene, come nei fumetti.",
      ],
      en: [
        "Ink outlines on Cheech, raiders, chainsaws, clubs, guns, street lamps, rubble and buildings.",
        "Big cartoon eyes: the raiders' are angry, under sunglasses and eyepatches.",
        "Solid shadows on the ground, like in comics.",
      ],
    },
  },
  {
    id: "2026-10-31-gobelino-mondo-fumetto",
    data: "2026-10-31",
    progetto: "gobelino",
    titolo: { it: "Anche il mondo di Gobelino è a fumetto", en: "Gobelino's world turns into a comic too" },
    punti: {
      it: [
        "Contorni a inchiostro su Gobelino, nemici, spade, alberi, rocce, casse, mercanti e pareti del terreno.",
        "Occhi grandi da fumetto: quelli di Gobelino guardano dove va, quelli dei nemici sono arrabbiati.",
        "Ombre a terra piene, come nei fumetti.",
      ],
      en: [
        "Ink outlines on Gobelino, enemies, swords, trees, rocks, chests, merchants and terrain walls.",
        "Big cartoon eyes: Gobelino's look where he goes, the enemies' are angry.",
        "Solid shadows on the ground, like in comics.",
      ],
    },
  },
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
