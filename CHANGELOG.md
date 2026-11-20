# Istoric versiuni

## 2.3.4 — 2026-11-20

- fff-kit 1.8.1: când `localStorage`/`sessionStorage` aruncă sau lipsesc (cookie-uri și date de site blocate, WebView fără stocare, `<iframe sandbox>`), kitul pune în loc o stocare în memorie, iar pagina pornește în loc să se oprească; datele nu se păstrează după închiderea paginii
- fff-kit 1.8.1: ghidajul care mărește controalele mici la 44 px măsoară acum și lățimea corpului paginii și a părintelui, deci un rând de butoane nu mai poate ieși din ecran (grupul rămâne neatins când mărirea l-ar depăși)

## 2.3.3 — 2026-11-18

Audit comparativ adversarial (motorul comparat cu un solver independent, tehnici verificate pas cu pas, intrări ostile) și remedieri / Adversarial comparative audit (engine vs an independent solver, technique steps checked one by one, hostile inputs) and fixes:

- **Motor / engine:** `solve()` și `candidates()` citeau o cifră din afara intervalului printr-o deplasare pe 32 de biți (în JavaScript `1 << 33` este `1 << 1`): cifra 33 devenea în tăcere 2, iar cifre negative sau fracționare erau ignorate ca și cum celula ar fi goală. Acum o cifră în afara 1…N sau neîntreagă face puzzle-ul imposibil (0 soluții), iar un vector de lungime greșită este respins cu un mesaj clar. / `solve()` and `candidates()` read an out-of-range digit through a 32-bit shift (`1 << 33` is `1 << 1` in JavaScript): digit 33 silently became 2, and negative or fractional digits were ignored as if the cell were blank. Now a digit outside 1…N or non-integer makes the puzzle impossible (0 solutions), and an array of the wrong length is rejected with a clear message.
- **Specificații / specifications:** `generate()` arunca `TypeError` la modificatori, indicii sau tip de grilă de tipuri greșite (`{mods:'x'}`, `{clues:null}`, `{layoutKind:'x'}`) și accepta câmpuri numerice absurde; acum le validează (`specificație invalidă: …`). / `generate()` threw `TypeError` for modifiers, clues or grid type of the wrong type and accepted absurd numeric fields; it now validates them (`specificație invalidă: …`).
- **Teste / tests:** `test.js` compară numărul de soluții cu un solver independent (clasic 4×4, 6×6, 9×9: 260 de puzzle-uri, cu indicii scoase și perechi conflictuale; 0 diferențe) și rulează 300 de specificații ostile și 19 cifre/lungimi ostile; 3167 de verificări în total (erau 3144). Noile verificări pică pe motorul 2.3.2 (17 eșecuri). / `test.js` compares the solution count with an independent solver (classic 4×4, 6×6, 9×9: 260 puzzles, clues removed and conflicting pairs; 0 differences) and runs 300 hostile specifications and 19 hostile digits/lengths; 3167 checks in total (was 3144). The new checks fail on the 2.3.2 engine (17 failures).
- **Verificat fără defecte / checked, no defects found:** 1145 de comparații de numărare a soluțiilor (0 diferențe), 2792 de pași ai solverului uman (0 pași nesiguri), unicitatea soluției pentru 4/6/8/9/12 și nivelurile t1–t4, determinism, timp în cel mai rău caz ≤ 4 ms pe puzzle-uri patologice. / 1145 solution-count comparisons (0 differences), 2792 human-solver steps (0 unsound), uniqueness for sizes 4/6/8/9/12 and tiers t1–t4, determinism, worst-case time ≤ 4 ms on pathological puzzles.
- **CI:** pasul „fără resurse externe” verifica și kitul comun (adrese de distribuire legitime) și cădea; acum verifică partea aplicației, iar kitul e verificat separat de `fff-check`. `engines` din `package.json`: Node.js ≥ 24. / The “no external resources” step also scanned the shared kit (legitimate share URLs) and failed; it now scans the application part, and the kit is verified separately by `fff-check`. `package.json` `engines`: Node.js ≥ 24.
- **Documentație / documentation:** README în 8 limbi: secțiunile *Stare* și *Offline* lipseau în fr/de/es/it/pt/hu (acum 27/27 titluri în toate limbile); afirmația „singurul URL din fișier este spațiul de nume SVG” era inexactă (kitul comun are butoane de distribuire și linkuri simple, deschise doar la clic) — corectată în README și în cele 8 ghiduri; versiunea din „Stare”, numărul de teste. / README in 8 languages: the *Status* and *Offline* sections were missing in fr/de/es/it/pt/hu (now 27/27 headings in every language); the claim “the only URL in the file is the SVG namespace” was inaccurate (the shared kit has share buttons and plain links, opened only on click) — corrected in the README and the 8 guides; status version, test count.

## 2.3.2 — 2026-11-17

- Compatibilitate cu browsere mai vechi (Chrome/Edge 55+, Firefox 52+, Safari 10.1+/iOS 10.3+): kitul 1.8.0 aduce stratul de compatibilitate (rezerve pentru API-urile care lipsesc în motoarele vechi), iar sintaxa JavaScript mai nouă decât ES2017 a fost înlocuită cu forme echivalente acolo unde exista; expresiile regulate noi și `import()` trec prin rezerve. Fără modificări de funcționalitate intenționate. Verificat cu parser ES2017 și într-un motor vechi simulat, nu pe dispozitive reale.

## 2.3.1 — 2026-11-15

- New: social-sharing buttons (vertical, on the left edge; no external scripts, plain links opened only on click); the magnifier zoom and “fit screen” bar returns to the right edge, vertically centred; fixed overlapping layout at high zoom (panels sized in vh/vw no longer overflow the screen).

## 2.3.0 — 2026-11-15

- New: accessibility on every screen — the “Aa” button (text size, high contrast, no animations, readable text, underlined links, read aloud), a “Back to top” arrow and “Skip to content”; the window always fits the screen; the magnifier zoom and “fit screen” controls now sit on the left edge (fff-kit 1.6.0).

## 2.2.8 — 2026-11-15

- Nou: texturi fractale hiper-detaliate (fff-texturi 1.1.2) — fundalul și suprafețele mari (carduri, panouri, antete, butoane; filele și dialogurile ascunse la încărcare, când se deschid) primesc un material generat local (WebGL2, fără rețea și fără imagini), care se repetă fără cusătură; culorile aplicației rămân ale ei. Se oprește din dialogul „Transparență” sau cu `?notex=1`.

## 2.2.3 — 2026-11-08

- Insignă „Soluție unică (verificată la generare)” în linia de stare: generatorul face acum o verificare finală cu 2 soluții (`P.unique`), iar insigna apare doar când rezultatul e confirmat (nu la Fog, nu la puzzle-uri importate sau salvate anterior); 8 limbi; test `unic`.

## 2.2.0 — 2026-11-02 (reîmprospătare kit)

- Nou (kit): **Sincronizare între dispozitive** (`FFF.sync`) — în dialogul «Transparență» (clic pe versiune → Copie de siguranță): conectezi două dispozitive direct (WebRTC, cod/QR, fără server și fără cont) și își schimbă datele aplicației; cea mai recentă valoare câștigă, secretele (chei API, parole) nu se trimit, ștergerile nu se propagă. Aplicarea trece prin importul kitului (confirmare, chei permise, rollback).
- Nou (kit): **Istoric local — «mașina timpului»** (`FFF.history`) — instantanee automate ale datelor (IndexedDB, fără secrete), diferență față de starea curentă și restaurare reversibilă; «Șterge datele aplicației» șterge și istoricul.
- Module adăugate: `qr`, `p2p`, `sync`, `history` (+~140 KB). Versiunea aplicației nu se schimbă.

## 2.2.0 — 2026-10-27
- **Mod nou „Puzzle zilnic 9×9 (dificultate la alegere)”** (`daily9`): sudoku clasic 9×9, determinist din dată (seed 40000000 + 7·zi + indicele dificultății), cu dificultatea aleasă din listă (ușor/mediu/greu și t1–t4); același cod pentru toți în aceeași zi. Serie și record proprii (cheia `daily9`). Modul existent „Puzzle-ul zilei” (seed 20000000 + zi, variantă rotită) **nu s-a schimbat**, deci codurile zilnice deja generate rămân identice.
- Test nou `tests/daily9.test.mjs` (19 verificări): determinism în aceeași zi, dificultate și cod corecte, soluție validă și indicii consecvente, dificultăți diferite → coduri diferite, modul vechi cu seed-ul vechi, serie, 0 cereri de rețea.
- Texte în 8 limbi (fr/it/es/pt/hu/de: traducere automată, neverificată nativ).
- Neimplementat: tipărirea cubelor 3D/hipercuburilor și a variantelor „ceață” cu soluție (foaia se construiește din vederea 2D); „mod multiplayer local unificat” (planificat).

## 2.1.0 — 2026-10-27
- **Foaie tipăribilă.** „Tipărește” generează acum o foaie curată (titlu, mărime, dificultate, cod, data la puzzle-ul zilei, regulile variantei) cu puzzle-ul doar cu indiciile date — fără cifrele jucătorului, notițe sau selecții —, iar noul buton **„Tipărește cu soluția”** adaugă soluția pe a doua pagină. Funcționează și cu Ctrl+P din fila Joacă (evenimentele `beforeprint` / `afterprint`); starea jocului se restabilește după construirea foii. Paleta de tipărire este mereu deschisă (alb-negru), indiferent de tema aplicației. Textele sunt în cele 8 limbi (fr/it/es/pt/hu/de: traduceri automate, neverificate nativ).
- Test nou: `tests/print.test.mjs` (17 verificări: doar indiciile pe pagina 1, soluția completă pe pagina 2, starea restabilită, PDF A4 cu 1 sau 2 pagini, puzzle-ul zilei identic în aceeași zi).
- Deja prezente (neschimbate): generatorul cu soluție unică și explicațiile de tehnici pas cu pas (2.0.0), modul „Puzzle-ul zilei” cu serie (determinist din dată), verificările de unicitate din `test.js`.
- „Mod multiplayer local unificat” între jocuri: planificat, nu implementat.
- Versiunea în aplicație, `app.json`, `package.json`, `engine.js`, `sw.js` și hash-urile CSP au fost actualizate.

## 2.0.0
- **Tehnici explicate pas cu pas** (Sudoku clasic 4×4–16×16): butonul „Tehnică” numește tehnica folosită și o explică în cuvinte, cu celulele-șablon și eliminările evidențiate: single gol/ascuns, candidați blocați (pointing/claiming), perechi și triplete goale/ascunse, X-Wing, XY-Wing, Swordfish. Notițele se completează cu candidații rămași.
- **Generator după nivel tehnic** (clasic 9×9): t1 (doar singles) … t4 (până la Swordfish). Grila cere exact tehnica maximă a nivelului, are soluție unică și se regenerează identic din cod (`clasic-9-t3-<sămânță>`); dacă nivelul 4 nu se găsește în limita de căutare, se livrează cel mai apropiat nivel, marcat în bara de stare.
- Bara de stare arată „tehnică maximă” pentru grilele clasice 9×9. Rezolvatorul pe tehnici nu face ipoteze: dacă se blochează, grila e „dincolo de tehnicile din listă”.

## 1.6.7
- Ținte tactile de cel puțin 44 px pe dispozitive tactile (`pointer:coarse`); desktopul rămâne neschimbat.

## 1.6.6
- Dialogurile native `confirm()` au fost înlocuite cu `FFF.dialog` (accesibil, tradus; kit 1.2.0); comportamentul rămâne neschimbat.
- Cheile din stocarea locală folosesc acum prefixul `sudoku-fara-frontiere.` (`FFF.store.migrate` la pornire, înainte de orice citire): datele existente se păstrează automat, iar copiile `.fff.json` vechi se pot importa în continuare.

## 1.6.4
- fff-kit 1.1.4: ținte tactile și text minim.

## 1.6.3
- fff-kit 1.1.2: PBKDF2 600 000 iterații, protecție anti-clickjacking.

## 1.6.2
- Un singur H1 (titlul aplicației), etichetă tradusă în 8 limbi pentru selectul de sortare, text minim 12 px; „Rezolvă” și „Șterge” folosesc dialogul din pagină în loc de `confirm()`; export CSV cu prefix `'` pentru celule care încep cu `=`, `+`, `-`, `@`; `sw.js` + `manifest.webmanifest` + pictograme (instalabil, funcționează offline); CSP actualizat în `build.py` (`manifest-src`, `worker-src 'self'`).

## 1.6.1
- Atlasul de variante (136 fișe: nume, descriere scurtă, reguli) și glosarul sunt traduse acum în toate cele 8 limbi (fr, it, es, pt, de, hu pe lângă ro și en); căutarea și sortarea folosesc limba aleasă. Textele sunt în `VTX`/`LEXX` la finalul `src/data.js`.

## 1.6.0
- Interfața în 8 limbi (ro, en, fr, it, es, pt, de, hu): selector de limbă în antet (alegerea se păstrează local; implicit din limba browserului, altfel engleză), mesaje, etichete de reguli/indicii/categorii, ajutor și pagina „Despre” traduse. Atlasul de variante și glosarul rămân în ro/en (celelalte limbi folosesc engleza).

## 1.5.0
- Kitul comun fff 1.1.1 (eticheta „Transparență”, copie de siguranță `.fff.json`), aplicat în `src/template.html`; `app.json` și blocul `fff-info` se generează cu `fff-kit info` după `build.py`, iar CI (`check_fresh.py`) verifică reproductibilitatea ignorând doar acest bloc.

## 1.4.0
- Politică CSP (meta) generată de `build.py`, cu hash-uri pentru scripturile inline; Worker doar din `blob:`, fără rețea.
- **Pas cu pas** și **▶ Auto**: completează soluția cifră cu cifră, evidențiind motivul fiecărui pas (unica cifră din celulă, unica celulă dintr-un rând/coloană/regiune, deducție din regulile variantei, sau cifra din soluție când nu există deducție directă).
- Dificultate măsurată: fiecare puzzle arată câte ramificări cere solverului după propagare.
- Generare lentă: peste 12 s, dificultatea coboară automat (nu la „Puzzle-ul zilei” și nu la coduri partajate).
- Starea salvată are versiune; un format necunoscut este pus deoparte (`sff_game_bad`).
- Accesibilitate: tabla poate primi focus, celula selectată e anunțată vocal, contrast mărit când sistemul îl cere.
- **Girandola** corectată după descrierea din Regexp::Sudoku; dispunerea veche rămâne ca „Nouă dispersate” (`sparse9`). Codurile `girandola-…` generate înainte produc acum alt puzzle.
- Fișe precizate: Linii cu sume pe regiuni, Rossini, Little Unique Killer.
- Reparat: „Deschide” cu un cod sincronizează listele; mesajul „Celule greșite” dispare după anulare; eticheta tabului „Joacă”.
- Audit adversarial: coduri de partajare validate strict (variantă, mărime, dificultate, mod, sămânță); starea salvată din `localStorage` este curățată înainte de afișare (nu mai poate injecta HTML); Maraton: pasul următor nu mai anulează un joc nou și continuă după reîncărcare; mesajul „dificultate coborâtă” nu mai apare la alte jocuri; tasta `0` la Zero și litera `N` la Wordoku; Anulează șterge evidențierea de la „Pas cu pas”; Hardcore/Duel: Șterge tot nu mai poate fi anulat; ceasul se oprește după înfrângere; contrast mărit la notițe și la culorile de evidențiere; cuvântul Wordoku cu ş/ţ este normalizat, iar înlocuirea este anunțată; etichete corecte după schimbarea limbii.
- Licență MIT. README cu ghid de utilizare și capturi pentru toate variantele (`docs/`).
- 136 de intrări; 3144 de verificări în `test.js`.

## 1.3.0
- 70 de variante noi (topologii și salturi fairy, reguli globale, indicii pe margine, în celule și cuști, puncte, linii, grile compuse, cuburi 3D și hipercuburi 4D/5D, Greco-Latin) și 7 moduri de joc (Orb, Memorie, Maraton, Duel, Hardcore, Puzzle-ul zilei, Sonor); vedere 3D rotativă pentru cuburi.
- Analiză adversarială și reparații: Casete semi-magice pe rânduri și coloane, Sume pe diagonale fără suprapuneri, fișe corectate, mai multe protecții în moduri.

## 1.2.0
- Nivelul 3: Indexare, Raport ×3, Ceață.

## 1.1.0
- 24 de variante noi (Girandola, Asterisk, Fortăreață, Zipper, Rossini, Clone, Strimko etc.).

## 1.0.0
- Prima versiune: 38 de variante, generator cu soluție unică, rezolvator clasic 9×9, atlas, lexicon.
