# Istoric versiuni

## 1.4.0
- **Pas cu pas** și **▶ Auto**: completează soluția cifră cu cifră, evidențiind motivul fiecărui pas (unica cifră din celulă, unica celulă dintr-un rând/coloană/regiune, deducție din regulile variantei, sau cifra din soluție când nu există deducție directă).
- Dificultate măsurată: fiecare puzzle arată câte ramificări cere solverului după propagare.
- Generare lentă: peste 12 s, dificultatea coboară automat (nu la „Puzzle-ul zilei” și nu la coduri partajate).
- Starea salvată are versiune; un format necunoscut este pus deoparte (`sff_game_bad`).
- Accesibilitate: tabla poate primi focus, celula selectată e anunțată vocal, contrast mărit când sistemul îl cere.
- **Girandola** corectată după descrierea din Regexp::Sudoku; dispunerea veche rămâne ca „Nouă dispersate” (`sparse9`). Codurile `girandola-…` generate înainte produc acum alt puzzle.
- Fișe precizate: Linii cu sume pe regiuni, Rossini, Little Unique Killer.
- Reparat: „Deschide” cu un cod sincronizează listele; mesajul „Celule greșite” dispare după anulare; eticheta tabului „Joacă”.
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
