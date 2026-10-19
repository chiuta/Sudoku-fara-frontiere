# Sudoku fără frontiere

[English](README.md) · [Română](README.ro.md) · **Français** · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Version :** 1.6.0 · **Dernière mise à jour :** 2026-10-19

Langues de l'interface : **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Un atlas de variantes de Sudoku, avec un générateur et un solveur qui s'exécutent en local — dans un seul fichier HTML.

**Licence :** [MIT](LICENSE) · **Application en ligne :** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Guide illustré (une seule page) :** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.html>

![Quelques variantes, après « Pas à pas »](docs/screenshot.png)

## Ce que c'est

Un atlas interactif de 136 entrées (≈130 aux règles distinctes : Sous-sol, Sudoku avec zéro et Lignes lexicographiques sont logiquement presque identiques à d'autres variantes et sont déclarés comme tels dans leurs fiches) (classiques, à régions spéciales, topologies et sauts féeriques, règles globales, indices sur les lignes, en marge, dans les cellules ou dans la grille, grilles composées, cubes et hypercubes, gréco-latin et proches parents), plus 7 modes de jeu. Chaque variante a une fiche avec ses règles et peut se jouer en local : les puzzles sont générés dans le navigateur, avec une **solution unique démontrée** par un solveur à propagation. Vous pouvez aussi combiner des règles dans une « Combinaison personnalisée ».

## Guide d'utilisation

### Démarrage rapide

1. Ouvrez `index.html` dans un navigateur (il fonctionne hors ligne, sans installation).
2. Dans **Atlas**, vous choisissez une variante (recherche, catégories, « Variante du jour », « Surprenez-moi ») ; chaque variante a une fiche avec les règles.
3. Dans **Jouer**, vous choisissez la variante, la taille, la difficulté et le mode, puis vous appuyez sur **Nouvelle partie**. Le puzzle est généré dans le navigateur, avec une solution unique.

<p align="center"><img src="docs/screens/ui_atlas.fr.webp" width="760" alt="L'atlas des variantes"><br><sub>Atlas : recherche, filtres par catégorie et cartes avec les tailles disponibles.</sub></p>

### L'écran de jeu

<p align="center"><img src="docs/screens/ui_play.fr.webp" width="760" alt="L'écran de jeu"><br><sub>Le plateau, la barre d'état (variante · taille · indices · difficulté · ramifications nécessaires au solveur · temps), le panneau « Nouvelle partie » avec code de partage, le pavé numérique et les actions.</sub></p>

- **Chiffres :** vous sélectionnez une cellule (ou plusieurs, avec Maj/glissement) et vous appuyez sur le chiffre, au clavier ou sur le pavé à l'écran. Les chiffres épuisés apparaissent estompés.
- **Clavier :** flèches = déplacer la sélection, chiffres/lettres = remplir, `Retour arrière`/`Suppr`/`0` = effacer, `N` = notes, `Ctrl+Z` / `Ctrl+Y` = annuler / rétablir.
- **Notes :** le bouton « Notes » (ou `N`) passe aux petits candidats dans la cellule ; « Notes auto » les calcule à partir des règles visibles.
- **Vérifications :** « Afficher les conflits », « Surligner le même chiffre », « Surligner les cellules liées » et « Effacer automatiquement les notes » peuvent être cochés ; « Vérifier » marque les chiffres erronés.
- **Indice** remplit une cellule (par logique sur les candidats ; s'il n'existe pas d'étape directe, le chiffre vient de la solution). **Afficher la solution** remplit tout.
- **Code :** le code à côté de « Nouvelle partie » régénère le même puzzle dans la même version de l'application ; vous le collez dans « Ouvrir ».

<p align="center"><img src="docs/screens/ui_notes.fr.webp" width="760" alt="Notes"><br><sub>Notes : les petits candidats dans une cellule.</sub></p>

### Pas à pas et ▶ Auto

**Pas à pas** place un chiffre et montre pourquoi : les cellules qui le justifient sont colorées (jaune), la nouvelle cellule est verte, et l'explication apparaît sous le plateau. **▶ Auto** exécute les étapes tout seul, toutes les 1,6 s. Les motifs possibles : l'unique chiffre restant dans la cellule ; l'unique cellule d'une ligne/colonne/région où le chiffre peut aller ; une déduction à partir des règles de la variante ; ou, lorsqu'il n'existe pas de déduction directe, le chiffre de la solution (dit explicitement). Si vous avez un chiffre erroné, la première étape le corrige. Chaque étape peut être annulée ; il est désactivé en Hardcore et en Mémoire.

<p align="center"><img src="docs/screens/ui_step.fr.webp" width="760" alt="Pas à pas"><br><sub>Après trois étapes : le dernier chiffre (vert) et les cellules qui le justifient (jaune), avec l'explication sous le plateau.</sub></p>

### Modes de jeu

Ils se choisissent dans « Nouvelle partie → Mode de jeu » ; le code reçoit le suffixe `@mode` (exceptions : « Puzzle du jour » et Marathon n'ont pas de suffixe ; un code de Marathon ouvre un puzzle ordinaire).

- **Orb :** seules les cellules situées à 2 pas au plus de la sélection sont visibles.
- **Mémoire :** les indices sont visibles quelques secondes, puis se cachent ; le bouton de coup d'œil coûte 30 s. Sans indices, vérification, notes auto, « Pas à pas » ni surlignage des conflits.
- **Marathon :** 5 puzzles à la suite (facile, facile, moyen, moyen, difficile) avec un temps total.
- **Duel :** un adversaire-chronomètre remplit une cellule toutes les quelques secondes, d'après la solution connue (sans logique) ; s'il termine le premier, vous perdez.
- **Hardcore :** 3 vies, chaque chiffre erroné en coûte une ; sans indice, vérification ni notes auto.
- **Puzzle du jour :** le même puzzle pour tous un jour donné (date UTC), avec une série de jours consécutifs conservée en local.
- **Sonore :** chaque chiffre a une note ; une ligne, une colonne ou une boîte complète joue un arpège.

<p align="center"><img src="docs/screens/ui_mode_orb.fr.webp" width="760" alt="Mode Orb"><br><sub>Mode Orb : seul le voisinage de la sélection est visible.</sub></p>

### Cubes et hypercubes

Les couches sont affichées sous forme de mosaïque de tranches. Pour les cubes 3D apparaît aussi une « Vue 3D » : vous faites glisser la souris pour faire tourner le cube, et le curseur masque les couches de devant. Les hypercubes 4D/5D restent uniquement en couches.

<p align="center"><img src="docs/screens/ui_3d.fr.webp" width="760" alt="Vue 3D"><br><sub>Cube latin 3D 4×4×4 dans la vue 3D rotative.</sub></p>

### Solveur classique 9×9

Vous collez un puzzle (81 caractères : 1–9, les cases vides en 0 ou `.`), cochez éventuellement des règles supplémentaires (diagonales, fenêtres hyper, anti-cavalier, etc.) et appuyez sur **Résoudre** : l'application indique si la solution est unique, multiple ou inexistante. « Jouer ce puzzle » l'emmène sur le plateau de jeu.

<p align="center"><img src="docs/screens/ui_solver.fr.webp" width="760" alt="Solveur"><br><sub>Le solveur avec le puzzle d'exemple : « Solution unique ».</sub></p>

### Téléphone et thème sombre

L'interface s'adapte aux écrans étroits ; thème clair/sombre/automatique (le bouton 🌓), texte agrandi (le bouton A), langue RO/EN (le bouton RO).

<p align="center"><img src="docs/screens/ui_mobile.fr.webp" width="260" alt="Téléphone, thème clair"> &nbsp; <img src="docs/screens/ui_dark.fr.webp" width="260" alt="Téléphone, thème sombre"></p>

### Combinaison personnalisée

Dans Atlas, « Combinaison personnalisée » (ou la variante « Combinaison personnalisée » de « Nouvelle partie ») permet de cocher n'importe quel ensemble compatible de règles de grille et d'indices (p. ex. Killer + diagonales, thermomètres + flèches).

### Galerie de l'interface (tous les types d'écran)

**Atlas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.fr.webp" width="330" alt="Filtrage par catégorie"><br><sub>Filtrage par catégorie</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.fr.webp" width="330" alt="Recherche par nom"><br><sub>Recherche par nom</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.fr.webp" width="330" alt="Lexique"><br><sub>Lexique</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlas en anglais"><br><sub>Atlas en anglais</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.fr.webp" width="330" alt="Atlas, thème sombre"><br><sub>Atlas, thème sombre</sub></td></tr></table>

**Modes de jeu**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.fr.webp" width="330" alt="Mémoire : les indices sont visibles"><br><sub>Mémoire : les indices sont visibles</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.fr.webp" width="330" alt="Mémoire : les indices se sont cachés"><br><sub>Mémoire : les indices se sont cachés</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.fr.webp" width="330" alt="Marathon"><br><sub>Marathon</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.fr.webp" width="330" alt="Duel (l'adversaire remplit des cellules)"><br><sub>Duel (l'adversaire remplit des cellules)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.fr.webp" width="330" alt="Hardcore : une erreur coûte une vie"><br><sub>Hardcore : une erreur coûte une vie</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.fr.webp" width="330" alt="Puzzle du jour"><br><sub>Puzzle du jour</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.fr.webp" width="330" alt="Sonore"><br><sub>Sonore</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.fr.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Jeu et outils**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.fr.webp" width="330" alt="▶ Auto en cours"><br><sub>▶ Auto en cours</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.fr.webp" width="330" alt="Puzzle résolu"><br><sub>Puzzle résolu</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.fr.webp" width="330" alt="Combinaison personnalisée (liste des règles)"><br><sub>Combinaison personnalisée (liste des règles)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.fr.webp" width="330" alt="Vue 3D tournée"><br><sub>Vue 3D tournée</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Vue d'impression"><br><sub>Vue d'impression</sub></td></tr></table>

**Solveur et À propos**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.fr.webp" width="330" alt="Solveur : grille vide (solutions multiples)"><br><sub>Solveur : grille vide (solutions multiples)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.fr.webp" width="330" alt="Solveur : aucune solution"><br><sub>Solveur : aucune solution</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.fr.webp" width="330" alt="La page « À propos »"><br><sub>La page « À propos »</sub></td></tr></table>

## Catalogue des variantes (136)

Chaque variante comporte ci-dessous : les règles de la fiche, une capture avec un puzzle réel généré par l'application (la taille par défaut de la variante (9×9 là où elle existe, sinon p. ex. 5×5 ou 4×4) ; niveau « moyen »), une deuxième capture après 4 étapes de « Pas à pas », l'explication réelle de la dernière étape et un code avec lequel vous régénérez exactement le même puzzle. Sous chaque variante, une « Galerie complète » (dépliable) contient les autres types de captures : la carte dans l'Atlas et la fiche, toutes les tailles, facile/moyen/difficile, notes auto, vérification avec un chiffre erroné, la solution complète, le thème sombre, le téléphone, l'interface en anglais et le panneau des règles. Les captures se trouvent dans `docs/screens/`. Les captures sont faites automatiquement depuis la version 1.4.0, en thème clair.

**Catalogue complet:** [docs/catalog/fr/README.md](docs/catalog/fr/README.md)

| Catégorie | Variantes |
|---|---|
| **Taille et symboles** | [Classique](docs/catalog/fr/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/fr/01-marime-si-simboluri.md#wordoku) · [Carré latin](docs/catalog/fr/01-marime-si-simboluri.md#latin) · [Sudoku avec zéro](docs/catalog/fr/01-marime-si-simboluri.md#zero) |
| **Régions et groupes** | [Sudoku X](docs/catalog/fr/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/fr/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (irrégulier)](docs/catalog/fr/02-regiuni-si-grupuri.md#jigsaw) · [Groupes disjoints](docs/catalog/fr/02-regiuni-si-grupuri.md#dg) · [Points centraux](docs/catalog/fr/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/fr/02-regiuni-si-grupuri.md#girandola) · [Neuf dispersés](docs/catalog/fr/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/fr/02-regiuni-si-grupuri.md#asterisk) · [Diagonale simple](docs/catalog/fr/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/fr/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/fr/02-regiuni-si-grupuri.md#pandiag) |
| **Voisins** | [Anti-cavalier](docs/catalog/fr/03-vecini.md#antiknight) · [Anti-roi](docs/catalog/fr/03-vecini.md#antiking) · [Sans consécutifs](docs/catalog/fr/03-vecini.md#nonconsec) · [Miracle](docs/catalog/fr/03-vecini.md#miracle) |
| **Parité, points, signes** | [Pair–impair](docs/catalog/fr/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/fr/04-paritate-puncte-semne.md#kropki) · [Consécutif](docs/catalog/fr/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/fr/04-paritate-puncte-semne.md#xv) · [Comparaisons](docs/catalog/fr/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/fr/04-paritate-puncte-semne.md#batt) · [Quadruplets](docs/catalog/fr/04-paritate-puncte-semne.md#quad) · [Seulement pairs marqués](docs/catalog/fr/04-paritate-puncte-semne.md#evenonly) · [Seulement impairs marqués](docs/catalog/fr/04-paritate-puncte-semne.md#oddonly) · [Forteresse](docs/catalog/fr/04-paritate-puncte-semne.md#fortress) · [Minimum / Maximum](docs/catalog/fr/04-paritate-puncte-semne.md#minmax) · [Indexation](docs/catalog/fr/04-paritate-puncte-semne.md#indexing) · [Rapport ×3](docs/catalog/fr/04-paritate-puncte-semne.md#ratio) · [Différence](docs/catalog/fr/04-paritate-puncte-semne.md#diff) · [Kropki seulement marqués](docs/catalog/fr/04-paritate-puncte-semne.md#kropkipos) · [XV seulement marqués](docs/catalog/fr/04-paritate-puncte-semne.md#xvpos) · [Consécutif seulement marqués](docs/catalog/fr/04-paritate-puncte-semne.md#consecpos) · [Sans indices](docs/catalog/fr/04-paritate-puncte-semne.md#clueless) |
| **Sommes** | [Killer](docs/catalog/fr/05-sume.md#killer) · [Little Killer](docs/catalog/fr/05-sume.md#littlekiller) · [Little Killer unique](docs/catalog/fr/05-sume.md#luk) |
| **Indices en marge** | [Sandwich](docs/catalog/fr/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/fr/06-indicii-pe-margine.md#xsum) · [Frame (les trois premiers)](docs/catalog/fr/06-indicii-pe-margine.md#frame) · [Gratte-ciel](docs/catalog/fr/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/fr/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/fr/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/fr/06-indicii-pe-margine.md#radar) · [Sandwich numérique](docs/catalog/fr/06-indicii-pe-margine.md#sandnum) · [Sandwich de parité](docs/catalog/fr/06-indicii-pe-margine.md#sandpar) · [Sandwich double](docs/catalog/fr/06-indicii-pe-margine.md#sand2) · [Sous-sol](docs/catalog/fr/06-indicii-pe-margine.md#subsol) · [Produit en marge](docs/catalog/fr/06-indicii-pe-margine.md#prodmargin) · [Différence en marge](docs/catalog/fr/06-indicii-pe-margine.md#diffmargin) · [Montées](docs/catalog/fr/06-indicii-pe-margine.md#ascents) · [Inversions](docs/catalog/fr/06-indicii-pe-margine.md#inversions) · [Cycles](docs/catalog/fr/06-indicii-pe-margine.md#cycles) · [Points fixes](docs/catalog/fr/06-indicii-pe-margine.md#fixedpts) · [Somme alternée](docs/catalog/fr/06-indicii-pe-margine.md#altsum) · [Sommes sur les diagonales](docs/catalog/fr/06-indicii-pe-margine.md#dxsum) |
| **Lignes** | [Thermomètres](docs/catalog/fr/07-linii.md#thermo) · [Flèches](docs/catalog/fr/07-linii.md#arrow) · [Renban](docs/catalog/fr/07-linii.md#renban) · [Murmures allemands](docs/catalog/fr/07-linii.md#whisper) · [Palindrome](docs/catalog/fr/07-linii.md#palindrome) · [Entre les lignes](docs/catalog/fr/07-linii.md#between) · [Lignes entropiques](docs/catalog/fr/07-linii.md#entropic) · [Lignes modulaires](docs/catalog/fr/07-linii.md#modular) · [Murmures néerlandais](docs/catalog/fr/07-linii.md#dutch) · [Nabner](docs/catalog/fr/07-linii.md#nabner) · [Thermomètre lent](docs/catalog/fr/07-linii.md#slowthermo) · [Ligne de parité](docs/catalog/fr/07-linii.md#parityline) · [Ligne de même parité](docs/catalog/fr/07-linii.md#sameparity) · [Lockout](docs/catalog/fr/07-linii.md#lockout) · [Flèche double](docs/catalog/fr/07-linii.md#doublearrow) · [Zipper](docs/catalog/fr/07-linii.md#zipper) · [Lignes à sommes par région](docs/catalog/fr/07-linii.md#regionsum) · [Flèche moyenne](docs/catalog/fr/07-linii.md#avgarrow) · [Flèche produit](docs/catalog/fr/07-linii.md#prodarrow) · [Flèche « pilule »](docs/catalog/fr/07-linii.md#pillarrow) · [Brouillard](docs/catalog/fr/07-linii.md#fog) · [Legato](docs/catalog/fr/07-linii.md#legato) · [Consonance](docs/catalog/fr/07-linii.md#consonant) · [Pas fixe](docs/catalog/fr/07-linii.md#fixstep) · [Ligne complémentaire](docs/catalog/fr/07-linii.md#compline) · [Zigzag](docs/catalog/fr/07-linii.md#zigzag) · [Fibonacci](docs/catalog/fr/07-linii.md#fibonacci) · [Marches](docs/catalog/fr/07-linii.md#steps) · [Progression arithmétique](docs/catalog/fr/07-linii.md#progression) · [Écho](docs/catalog/fr/07-linii.md#echo) · [Ligne divisible](docs/catalog/fr/07-linii.md#divisible) · [Ligne première](docs/catalog/fr/07-linii.md#primeline) |
| **Grilles composées** | [Samurai](docs/catalog/fr/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/fr/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/fr/08-grile-compuse.md#gattai3) · [Sohei (anneau de quatre)](docs/catalog/fr/08-grile-compuse.md#sohei) · [Kazaguruma (moulin à vent)](docs/catalog/fr/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/fr/08-grile-compuse.md#tripledoku) · [Croix](docs/catalog/fr/08-grile-compuse.md#cross) |
| **Proches parents** | [Futoshiki](docs/catalog/fr/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/fr/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/fr/09-rude-apropiate.md#strimko) |
| **Topologies et mouvements féeriques** | [Anti-fou](docs/catalog/fr/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-chameau](docs/catalog/fr/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-zèbre](docs/catalog/fr/10-topologii-si-mutari-fairy.md#antizebra) · [Tore anti-roi](docs/catalog/fr/10-topologii-si-mutari-fairy.md#torusking) · [Tore anti-cavalier](docs/catalog/fr/10-topologii-si-mutari-fairy.md#torusknight) · [Cylindre anti-roi](docs/catalog/fr/10-topologii-si-mutari-fairy.md#cylking) · [Möbius anti-roi](docs/catalog/fr/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein anti-roi](docs/catalog/fr/10-topologii-si-mutari-fairy.md#kleinking) · [Plan projectif anti-roi](docs/catalog/fr/10-topologii-si-mutari-fairy.md#projking) |
| **Règles globales** | [Symétrie complémentaire](docs/catalog/fr/11-reguli-globale.md#symcomp) · [Parité symétrique](docs/catalog/fr/11-reguli-globale.md#symparity) · [Centre de gravité](docs/catalog/fr/11-reguli-globale.md#cgrav) · [Lignes lexicographiques](docs/catalog/fr/11-reguli-globale.md#lexrows) · [Extrêmes adjacents](docs/catalog/fr/11-reguli-globale.md#extremes) · [Boîtes équilibrées](docs/catalog/fr/11-reguli-globale.md#boxbalance) · [Le cinq solitaire](docs/catalog/fr/11-reguli-globale.md#lonely5) · [Sans cellules isolées](docs/catalog/fr/11-reguli-globale.md#nolonely) · [Sans progressions](docs/catalog/fr/11-reguli-globale.md#noprog) · [Boîtes semi-magiques](docs/catalog/fr/11-reguli-globale.md#semimagic) |
| **Indices dans les cellules** | [Relief](docs/catalog/fr/12-indicii-in-celule.md#relief) · [Mines impaires](docs/catalog/fr/12-indicii-in-celule.md#oddsweeper) · [Boussole](docs/catalog/fr/12-indicii-in-celule.md#compass) · [Somme dans le carré](docs/catalog/fr/12-indicii-in-celule.md#quadsum) · [Pierre 2×2](docs/catalog/fr/12-indicii-in-celule.md#stone) · [Domino](docs/catalog/fr/12-indicii-in-celule.md#domino) · [Pilule carré parfait](docs/catalog/fr/12-indicii-in-celule.md#pillsq) · [Cage première](docs/catalog/fr/12-indicii-in-celule.md#primecage) · [Cage équilibrée](docs/catalog/fr/12-indicii-in-celule.md#balcage) · [Doubleurs](docs/catalog/fr/12-indicii-in-celule.md#doubler) · [Clones en miroir](docs/catalog/fr/12-indicii-in-celule.md#clonemir) |
| **Dimensions supérieures** | [Cube latin 3D](docs/catalog/fr/13-dimensiuni-superioare.md#cube3) · [Cube à boîtes 2×2](docs/catalog/fr/13-dimensiuni-superioare.md#cubebox) · [Hypercube 4D](docs/catalog/fr/13-dimensiuni-superioare.md#hyper4) · [Hypercube 5D](docs/catalog/fr/13-dimensiuni-superioare.md#hyper5) · [Gréco-latin (carrés orthogonaux)](docs/catalog/fr/13-dimensiuni-superioare.md#greco) |

Chaque catégorie a sa propre page dans [`docs/catalog/`](docs/catalog/README.md) (captures et galeries complètes).

## Fonctions

- **Variantes depuis la version 1.0 (38) :** classique (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), wordoku, carré latin, Sudoku X, Hyper (Windoku), Jigsaw, groupes disjoints, points centraux, anti-cavalier, anti-roi, sans consécutifs, Miracle, pair–impair, Kropki, consécutif, XV, comparaisons, Battenburg, quadruplets, Killer, Little Killer, Sandwich, X-Sums, Frame, gratte-ciel, thermomètres, flèches, Renban, murmures allemands, palindrome, entre les lignes, lignes entropiques, lignes modulaires, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Ajoutées dans la version 1.1 (24) :** Girandola (corrigée en 1.4), Asterisk, diagonale simple, murmures néerlandais, Nabner, thermomètre lent, ligne de parité (alternée), ligne de même parité, seulement pairs marqués, seulement impairs marqués, Little Killer unique, Forteresse, Minimum/Maximum, Lockout, flèche double, Zipper, Rossini, Outside, Clone, lignes à sommes par région, flèche moyenne, flèche produit, flèche « pilule », Strimko.
- **Ajoutées dans la version 1.2 (niveau 3, 3) :** Indexation (le premier chiffre de la ligne indique la colonne du 1), Rapport ×3 (cercles pour les paires 3:1), Brouillard (les indices apparaissent au fil de la résolution ; le puzzle est construit de sorte que la simple propagation ne puisse continuer qu'avec ce qui est visible).
- **Ajoutées dans la version 1.3 (70) :**
  - *Topologies et sauts féeriques (9) :* Anti-fou, Anti-chameau, Anti-zèbre, Tore anti-roi, Tore anti-cavalier, Cylindre, Möbius, Klein et plan projectif anti-roi.
  - *Règles globales (12) :* Pandiagonal, Sudoku avec zéro, Symétrie complémentaire, Parité symétrique, Centre de gravité, Lignes lexicographiques, Extrêmes adjacents, Boîtes équilibrées, Le cinq solitaire, Sans cellules isolées, Sans progressions, Boîtes semi-magiques.
  - *Indices en marge (13) :* Radar, Sandwich numérique, Sandwich de parité, Sandwich double, Sous-sol, Produit en marge, Différence en marge, Montées, Inversions, Cycles, Points fixes, Somme alternée, Sommes sur les diagonales.
  - *Indices dans les cellules et cages (11) :* Relief, Mines impaires, Boussole, Somme dans le carré, Pierre 2×2, Domino, Pilule carré parfait, Cage première, Cage équilibrée, Doubleurs, Clones en miroir.
  - *Points (5) :* Différence, Kropki / XV / Consécutif seulement marqués, Sans indices (seulement des points Kropki).
  - *Lignes (11) :* Legato, Consonance, Pas fixe, Ligne complémentaire, Zigzag, Fibonacci, Marches, Progression arithmétique, Écho, Ligne divisible, Ligne première.
  - *Grilles composées (4) :* Sohei, Kazaguruma, Croix, Tripledoku (V).
  - *Dimensions supérieures (5) :* Cube latin 3D, Cube à boîtes 2×2, Hypercube 4D, Hypercube 5D, Gréco-latin.
- **Modes de jeu (7) :** Orb, Mémoire, Marathon, Duel, Hardcore, Puzzle du jour, Sonore. Ils se choisissent dans « Nouvelle partie » ; le code de partage reçoit le suffixe `@mode` (pas pour le Puzzle du jour ni le Marathon).
- **Combinaison personnalisée :** tout ensemble compatible de règles de grille + indices (p. ex. Killer + diagonales, thermomètres + flèches).
- **Jeu :** sélection multiple, notes, annuler/rétablir, indice (logique sur les candidats), notes auto, vérification, conflits surlignés, chronomètre, sauvegarde automatique, impression.
- **Code de partage :** `variante-taille-difficulté-graine` régénère le même puzzle dans la même version.
- **Solveur classique 9×9** avec règles supplémentaires facultatives ; il indique si la solution est unique, multiple ou inexistante.
- **Atlas :** recherche, catégories, « Variante du jour », « Surprenez-moi », lexique, export CSV, citation BibTeX.
- Thème clair/sombre/automatique, texte agrandi, interface en 8 langues (RO, EN, FR, IT, ES, PT, DE, HU).
- Le **Puzzle du jour** utilise la date UTC ; la série de jours consécutifs est conservée en local (`sff_daily`).

## Comment il génère

Le moteur choisit une grille résolue qui respecte les règles, en déduit les indices (cages, thermomètres, points...), puis retire les chiffres donnés un par un, uniquement tant que le solveur démontre que la solution reste unique. La génération s'exécute dans un Web Worker créé à partir du même fichier (sans réseau) ; si le Worker n'est pas disponible, elle s'exécute sur le fil principal.

## Limites

- « Pas à pas » remplit un chiffre et met en évidence pourquoi (l'unique chiffre restant dans la cellule ; l'unique cellule possible d'une ligne/colonne/région ; une déduction à partir des règles de la variante ; ou, lorsqu'il n'existe pas de déduction directe, le chiffre de la solution, signalé comme tel). « ▶ Auto » exécute les étapes tout seul, toutes les 1,6 s. Désactivé en Hardcore et en Mémoire ; chaque étape peut être annulée.
- La difficulté facile/moyen/difficile n'est que le nombre d'indices conservés. Le puzzle affiche aussi une mesure de l'effort du solveur (0 = résolu par la seule propagation ; sinon le nombre de ramifications), qui n'est pas une évaluation des techniques humaines. Si la génération dure plus de 12 s, la difficulté baisse automatiquement (mais pas pour le « Puzzle du jour » ni pour les codes partagés).
- Testé dans Chromium (y compris ouvert en file://). Firefox et Safari/iOS n'ont pas pu être testés dans l'environnement de développement ; si le Worker issu d'un Blob est bloqué, l'application se rabat sur la génération sur le fil principal (interface bloquée pendant la génération).
- Accessibilité : le clavier (flèches, chiffres, N, Ctrl+Z) et l'annonce vocale de la cellule sélectionnée ; le plateau est en SVG et n'est pas un outil complet pour les lecteurs d'écran.
- L'état enregistré a un numéro de version ; un format inconnu est mis de côté (`sff_game_bad`), non supprimé.
- « Difficile » retire autant de chiffres qu'il peut ; dans les variantes à nombreux indices dans la grille, il peut ne rester que très peu de chiffres donnés.
- Les grilles composées n'ont que les règles classiques ; les combinaisons très chargées peuvent prendre plus de temps ou échouer (l'application le signale).
- 16×16 et 25×25 utilisent les symboles 1–9 et des lettres (A–G, respectivement A–P).
- **Géométries choisies par moi** (les sources diffèrent) : Sohei, Kazaguruma, Croix, Tripledoku (V) ; la définition de Domino ; le recollement des bords pour Möbius, Klein et le plan projectif ; « Extrêmes adjacents » avec des voisins incluant les diagonales (avec des voisins seulement orthogonaux, il n'existe pas de grilles 9×9) ; Boîtes semi-magiques sur les lignes et les colonnes (les boîtes totalement magiques, avec diagonales, sont impossibles).
- **Hypercubes et cubes :** ils sont affichés en couches (mosaïque de tranches) et, pour les 3D, dans une vue 3D rotative ; pour les cubes 3D il existe aussi une « Vue 3D » rotative (vous faites glisser la souris, le curseur masque les couches de devant) ; les hypercubes 4D/5D restent uniquement en couches. Étant très rigides, en « Difficile » il ne reste que quelques chiffres donnés (en 5D seulement quelques-uns sur 243 cellules). Gréco-latin : tailles 3, 4, 5, 7 (6 est impossible ; 8 et 9 omises pour la rapidité).
- **Anti-wazir** n'existe pas : interdire le même chiffre sur des cellules voisines orthogonalement est déjà une règle de tout Sudoku. « Anti-fou » désigne le saut 2×2, non un fou glissant. Les éléments « Strings complementary/equal » de la liste de travail ne sont pas des variantes distinctes : l'idée est couverte par Ligne complémentaire et Écho.
- **Variantes logiquement proches ou identiques (indiquées dans les fiches) :** Sudoku avec zéro (seulement d'autres symboles par rapport au Classique), Lignes lexicographiques (se ramène à « la première colonne est 1…N »), Sous-sol (Gratte-ciel avec les chiffres inversés).
- **Duel :** l'adversaire est un chronomètre qui remplit des cellules à partir de la solution connue, et non un solveur doté de logique.
- Les règles suivent les conventions usuelles ; les fiches disent quelle variante de convention a été choisie. Pour quelques nouvelles variantes, les sources diffèrent et j'ai fixé une convention explicite : Girandola (depuis 1.4 : coins, centre et r2c5, r5c2, r5c8, r8c5, d'après Regexp::Sudoku ; l'ancienne disposition est maintenant « Neuf dispersés »), « ligne de parité » (alternée, avec la variante « même parité » séparée), Rossini (la flèche indique la plus grande des trois premiers chiffres), Outside (les chiffres de la marge figurent parmi les trois premières cellules), Zipper (toutes les paires symétriques ont pour somme le centre), Lignes à sommes par région (la somme sur chaque boîte traversée est la même), Forteresse (seuls les voisins non marqués comptent).

## Confidentialité et réseau

- **Stockage local :** `localStorage`, clés `sff_lang`, `sff_theme`, `sff_size`, `sff_game`, `sff_daily` (langue, thème, taille du texte, partie en cours, série du Puzzle du jour) et `sff_game_bad` (état enregistré dans un format inconnu, conservé).
- **Réseau :** dans le code, il n'y a ni `fetch`, ni `XMLHttpRequest`, ni CDN, ni ressources externes. Le seul URL du fichier est l'espace de noms SVG (`http://www.w3.org/2000/svg`), qui ne génère aucune requête.

## Structure du dépôt

```
index.html          aplicația (generat; se deschide direct în browser)
engine.js           motorul: solver, generator, variantele
src/                interfața (template.html, style.css, data.js, app.js)
build.py            asamblează index.html din src/ + engine.js
test.js             suita de teste (node test.js)
docs/               capturi (docs/screens), catalogul pe categorii (docs/catalog), GHID.html (se vede pe Pages, nu în GitHub: fișierul are ~6 MB)
CHANGELOG.md        istoric versiuni
CONTRIBUTING.md     cum contribui
LICENSE             MIT
```

Publication sur GitHub Pages : Settings → Pages → Branch `main`, dossier `/ (root)` ; `index.html` est à la racine et n'utilise que des chemins relatifs, il fonctionne donc aussi sous `https://<utilisateur>.github.io/<dépôt>/`. Voir [`CHANGELOG.md`](CHANGELOG.md) et [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Exécution locale / hors ligne

Téléchargez `index.html` et ouvrez-le dans un navigateur ; il ne nécessite pas Internet.

## Tests

Ils s'exécutent aussi automatiquement sur GitHub (Actions, `.github/workflows/ci.yml`) : build reproductible, `node test.js` et vérification que `index.html` n'a pas de ressources externes.

`engine.js` est le moteur (la même source est incluse dans `index.html`). La suite `test.js` s'exécute avec Node :

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

Pour chaque variante et chaque taille, aux niveaux facile et difficile, elle vérifie : la solution respecte les règles, le puzzle a une solution unique (comptage avec le même solveur que le générateur, avec un budget élevé ; les énumérations 4×4 et le validateur de sémantique sont écrits séparément), la solution survit à la propagation à partir de sous-ensembles aléatoires d'indices (*soundness*). De plus, en 4×4 le nombre de solutions sans indices est comparé à une énumération exhaustive (p. ex. 288 pour le classique), et quelques combinaisons personnalisées sont vérifiées. Depuis la version 1.1, chaque puzzle est aussi vérifié par un validateur de la sémantique des règles écrit séparément du moteur, directement à partir du texte des fiches (il vérifie, par exemple, Zipper, Lockout, les flèches moyenne/produit/pilule, Clone, les chaînes Strimko). Depuis la version 1.3, le validateur indépendant couvre aussi les topologies, les sauts féeriques, les règles globales, les indices en marge, dans les cellules, les cages, les lignes et les points (formules réécrites séparément du moteur), et pour les cubes, hypercubes et gréco-latin le nombre de solutions sans indices est comparé à une énumération DFS séparée (p. ex. 21888 pour le cube 4×4×4 à boîtes 2×2, 72 et 6912 pour le gréco-latin 3 et 4). Dernière exécution : 3144 vérifications, toutes réussies ; le validateur indépendant couvre désormais aussi les types de 1.0–1.2, et un test de mutants (16 506 renommages de chiffres) montre un accord total entre le moteur et le validateur ; 660 puzzles 4×4 ont été confirmés uniques par une énumération séparée ; contrainte supplémentaire sur 12 graines par variante (5652 puzzles, zéro erreur) ; de plus, un test de charge avec 5 puzzles sur chaque variante, taille minimale et maximale, sans aucune erreur (la génération la plus lente, en « Difficile » sur certaines variantes à règles globales, a duré environ 21 s). Limite : la vérification croisée par énumération exhaustive n'existe que pour les variantes ayant une taille 4×4 (et pour les petits cubes/gréco-latin, comme indiqué plus haut).

## Ce qui n'est pas implémenté du niveau 3

Ne sont pas inclus : Chaos Construction, Deconstruction, les hybrides avec d'autres puzzles (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), les grilles superposées Flower/Butterfly (Sohei et Kazaguruma existent depuis 1.3, avec une géométrie choisie par moi), les cellules modificatrices, Schrödinger, « liar », Vudoku, Capsule, Deficit. Certaines changent le mode de jeu ou exigent des solveurs d'une autre logique ; pour d'autres, les sources trouvées ne fixent ni les règles ni la géométrie, et les inventer reviendrait à présenter comme variante connue quelque chose qui ne l'est pas.

## Licence

**MIT** — voir [`LICENSE`](LICENSE). Elle s'applique à tout le dépôt : le code (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), les textes (README, les fiches) et les captures de `docs/screens/`. Vous pouvez utiliser, copier, modifier, publier et vendre, à condition de conserver la mention de droit d'auteur et le texte de la licence. Le programme est fourni « en l'état », sans garanties.

Notes :
- L'application n'inclut ni bibliothèques ni ressources externes, il n'y a donc pas de licences tierces à respecter.
- Les noms et les règles des variantes de Sudoku (Killer, Kropki, Sandwich, etc.) désignent des types de puzzles publiquement connus ; les textes des fiches sont écrits pour cette application. Les noms restent ceux des auteurs et des communautés qui les ont créés.

## Auteur

Alexio — Alexandru-Ionuț Chiuță, contact : <alexio@trom.tf>.

## Résumé

Un atlas de 136 entrées de Sudoku (≈130 aux règles distinctes ; Sous-sol, Zéro et Lignes lexicographiques sont des quasi-doublons d'autres variantes et le disent dans leurs fiches) (plus 7 modes de jeu : Orb, Mémoire, Marathon, Duel, Hardcore, Puzzle du jour, Sonore) avec un générateur et un solveur locaux, dans un seul fichier HTML. Les puzzles sont générés dans le navigateur avec une solution unique démontrée (les chiffres donnés ne sont retirés que tant qu'un solveur à propagation confirme l'unicité). Comprend un mélangeur de règles personnalisé, notes/annulation/indices, codes de partage, un solveur classique 9×9, l'export CSV et la citation BibTeX. Aucune requête réseau ; l'état est stocké dans `localStorage` (`sff_*`). La difficulté (facile/moyen/difficile) n'est que le nombre de chiffres donnés conservés ; chaque puzzle affiche aussi une valeur mesurée : le nombre de ramifications dont a besoin un solveur à propagation (0 = résolu par la seule propagation). C'est l'effort du solveur, et non une évaluation des techniques humaines. Exécutez `node test.js` pour la suite de tests du moteur. Licence : MIT (voir `LICENSE`), couvrant le code, les textes et les captures.

Ce README contient un guide d'utilisation avec des captures de l'interface et un catalogue avec deux captures réelles, les règles et un code reproductible pour chacune des 136 variantes (`screens/`).

## Notes v1.4

- **Girandola** a été corrigée d'après la description de Regexp::Sudoku (coins, centre, r2c5, r5c2, r5c8, r8c5). L'ancienne disposition (coins, milieux des côtés, centre) subsiste sous le nom « Neuf dispersés » (`sparse9`). Les codes `girandola-…` générés avant 1.4 produisent désormais un autre puzzle.
- Corrigé en 1.4 d'après les captures : l'étiquette de l'onglet « Jouer » (clé de texte dupliquée), les listes restées sur d'anciennes valeurs après « Ouvrir » avec un code, et le message « Cellules erronées » resté après l'annulation.
- Vérifications 1.4 : validateur écrit en aveugle à partir du texte des fiches (135/135 des variantes existant alors ont réussi ; « Neuf dispersés » a été ajoutée ensuite et a un validateur dans `test.js`), confrontation avec des sources publiées sur 56 variantes (les fiches Regionsum, Rossini et Little Unique Killer ont reçu des précisions), une exécution unique de 1818 puzzles sur toutes les variantes et les tailles ≤12 sans erreurs (le script ne fait pas partie du dépôt), « Pas à pas » testé sur les 136 variantes.
- Encore non confirmés par des sources : la disposition de Sohei, Kazaguruma, Croix, Tripledoku V ; le traitement des chiffres répétés dans Quad et Doubleurs ; la connectivité diagonale dans Strimko.
