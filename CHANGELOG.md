# Istoric versiuni

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
