# Sudoku fără frontiere

**English** · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Version:** 2.1.0 · **Last updated:** 2026-10-27

Interface languages: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

An atlas of Sudoku variants, with a generator and solver that run locally — in a single HTML file.

**License:** [MIT](LICENSE) · **Live:** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Illustrated guide (single page):** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.en.html>

![A few variants, after “Step by step”](docs/screenshot.png)

**New in 2.1.0:** printable sheet (the Print button now prints a clean page with the title, size, difficulty, code and rules plus the puzzle with only the given clues; the new "Print with solution" button adds the solution on a second page). The generator with unique solutions and step-by-step technique explanations (2.0.0) and the "Puzzle of the day" mode (deterministic from the date) were already present. See `CHANGELOG.md`.

## What it is

An interactive atlas of 136 entries (≈130 with distinct rules: Basement, Zero Sudoku and Lexicographic rows are logically almost identical to other variants and are declared as such in their sheets) (classic, with special regions, topologies and fairy jumps, global rules, line clues, edge clues, cell clues or grid clues, composite grids, cubes and hypercubes, Greco-Latin and close relatives), plus 7 game modes. Each variant has a sheet with its rules and can be played locally: the puzzles are generated in the browser, with a **unique solution proven** by a propagating solver. You can also combine rules into a “Custom combination”.

## User guide

### Quick start

1. Open `index.html` in a browser (it works offline, with no installation).
2. In **Atlas** you choose a variant (search, categories, “Today's variant”, “Surprise me”); each variant has a sheet with the rules.
3. In **Play** you choose the variant, size, difficulty and mode, then press **New game**. The puzzle is generated in the browser, with a unique solution.

<p align="center"><img src="docs/screens/ui_atlas.en.webp" width="760" alt="The variants atlas"><br><sub>Atlas: search, category filters and cards with the available sizes.</sub></p>

### The game screen

<p align="center"><img src="docs/screens/ui_play.en.webp" width="760" alt="The game screen"><br><sub>The board, the status bar (variant · size · clues · difficulty · branches required by the solver · time), the “New game” panel with share code, the numeric keypad and the actions.</sub></p>

- **Digits:** you select a cell (or several, with Shift/drag) and press the digit, on the keyboard or on the on-screen keypad. Finished digits appear dimmed.
- **Keyboard:** arrows = move the selection, digits/letters = fill in, `Backspace`/`Delete`/`0` = erase, `N` = notes, `Ctrl+Z` / `Ctrl+Y` = undo / redo.
- **Notes:** the “Notes” button (or `N`) switches to small candidates in the cell; “Auto-notes” computes them from the visible rules.
- **Checks:** “Show conflicts”, “Highlight the same digit”, “Highlight related cells” and “Clear notes automatically” can be ticked; “Check” marks the wrong digits.
- **Hint** fills in a cell (by logic on candidates; if there is no direct step, the digit comes from the solution). **Show solution** fills in everything.
- **Code:** the code next to “New game” regenerates the same puzzle in the same version of the app; you paste it at “Open”.

<p align="center"><img src="docs/screens/ui_notes.en.webp" width="760" alt="Notes"><br><sub>Notes: small candidates in a cell.</sub></p>

### Step by step and ▶ Auto

**Step by step** places a digit and shows why: the cells that justify it are colored (yellow), the new cell is green, and an explanation appears below the board. **▶ Auto** runs the steps by itself, at 1.6 s. The possible reasons: the only digit left in the cell; the only cell in a row/column/region where the digit can go; a deduction from the variant's rules; or, when there is no direct deduction, the digit from the solution (stated explicitly). If you have a wrong digit, the first step corrects it. Each step can be undone; it is disabled in Hardcore and Memory.

<p align="center"><img src="docs/screens/ui_step.en.webp" width="760" alt="Step by step"><br><sub>After three steps: the last digit (green) and the cells that justify it (yellow), with the explanation below the board.</sub></p>

### Game modes

They are chosen at “New game → Game mode”; the code gets the suffix `@mode` (exceptions: “Puzzle of the day” and Marathon have no suffix; a Marathon code opens an ordinary puzzle).

- **Orb:** only the cells at most 2 steps from the selection are visible.
- **Memory:** the clues are visible for a few seconds, then hidden; the peek button costs 30 s. No clues, checking, auto-notes, “Step by step” or conflict highlighting.
- **Marathon:** 5 puzzles in a row (easy, easy, medium, medium, hard) with a total time.
- **Duel:** a timer-opponent fills in one cell every few seconds, from the known solution (without logic); if it finishes first, you lose.
- **Hardcore:** 3 lives, each wrong digit costs one; no hint, checking or auto-notes.
- **Puzzle of the day:** the same puzzle for everyone on a given day (UTC date), with a streak of consecutive days kept locally.
- **Sound:** each digit has a note; a complete row, column or box plays an arpeggio.

<p align="center"><img src="docs/screens/ui_mode_orb.en.webp" width="760" alt="Orb mode"><br><sub>Orb mode: only the neighborhood of the selection is visible.</sub></p>

### Cubes and hypercubes

The layers are displayed as a mosaic of slices. For 3D cubes a “3D view” also appears: you drag with the mouse to rotate the cube, and the slider hides the front layers. The 4D/Hypercube 5Ds remain layers only.

<p align="center"><img src="docs/screens/ui_3d.en.webp" width="760" alt="3D view"><br><sub>4×4×4 Latin cube 3D in the rotating 3D view.</sub></p>

### Classic 9×9 solver

You paste a puzzle (81 characters: 1–9, with blanks as 0 or `.`), optionally tick extra rules (diagonals, hyper windows, anti-knight, etc.) and press **Solve**: the app says whether the solution is unique, multiple or nonexistent. “Play this puzzle” takes it to the game board.

<p align="center"><img src="docs/screens/ui_solver.en.webp" width="760" alt="Solver"><br><sub>The solver with the example puzzle: “Unique solution”.</sub></p>

### Phone and dark theme

The interface adapts to narrow screens; light/dark/automatic theme (the 🌓 button), larger text (the A button), RO/EN language (the RO button).

<p align="center"><img src="docs/screens/ui_mobile.en.webp" width="260" alt="Phone, light theme"> &nbsp; <img src="docs/screens/ui_dark.en.webp" width="260" alt="Phone, dark theme"></p>

### Custom combination

In Atlas, “Custom combination” (or the “Custom combination” variant in “New game”) lets you tick any compatible set of grid rules and clues (e.g. Killer + diagonals, thermometers + arrows).

### Interface gallery (all screen types)

**Atlas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.en.webp" width="330" alt="Filtering by a category"><br><sub>Filtering by a category</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.en.webp" width="330" alt="Search by name"><br><sub>Search by name</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.en.webp" width="330" alt="Lexicon"><br><sub>Lexicon</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlas in English"><br><sub>Atlas in English</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.en.webp" width="330" alt="Atlas, dark theme"><br><sub>Atlas, dark theme</sub></td></tr></table>

**Game modes**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.en.webp" width="330" alt="Memory: the clues are visible"><br><sub>Memory: the clues are visible</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.en.webp" width="330" alt="Memory: the clues have been hidden"><br><sub>Memory: the clues have been hidden</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.en.webp" width="330" alt="Marathon"><br><sub>Marathon</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.en.webp" width="330" alt="Duel (the opponent fills in cells)"><br><sub>Duel (the opponent fills in cells)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.en.webp" width="330" alt="Hardcore: a mistake costs a life"><br><sub>Hardcore: a mistake costs a life</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.en.webp" width="330" alt="Puzzle of the day"><br><sub>Puzzle of the day</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.en.webp" width="330" alt="Sound"><br><sub>Sound</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.en.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Game and tools**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.en.webp" width="330" alt="▶ Auto running"><br><sub>▶ Auto running</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.en.webp" width="330" alt="Puzzle solved"><br><sub>Puzzle solved</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.en.webp" width="330" alt="Custom combination (list of rules)"><br><sub>Custom combination (list of rules)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.en.webp" width="330" alt="Rotated 3D view"><br><sub>Rotated 3D view</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Print view"><br><sub>Print view</sub></td></tr></table>

**Solver and About**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.en.webp" width="330" alt="Solver: empty grid (multiple solutions)"><br><sub>Solver: empty grid (multiple solutions)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.en.webp" width="330" alt="Solver: no solution"><br><sub>Solver: no solution</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.en.webp" width="330" alt="The “About” page"><br><sub>The “About” page</sub></td></tr></table>

## Catalog of variants (136)

Each variant has below: the rules from the sheet, a screenshot with a real puzzle generated by the app (the variant's default size (9×9 where it exists, otherwise e.g. 5×5 or 4×4); “medium” level), a second screenshot after 4 “Step by step” steps, the real explanation of the last step and a code with which you regenerate exactly the same puzzle. Under each variant, a “Full gallery” (expandable) has the other types of screenshots: the card in the Atlas and the sheet, all sizes, easy/medium/hard, auto-notes, checking with one wrong digit, the full solution, the dark theme, the phone, the interface in English and the rules panel. The screenshots are in `docs/screens/`. The screenshots are taken automatically from version 1.4.0, in the light theme.

**Full catalog:** [docs/catalog/en/README.md](docs/catalog/en/README.md)

| Category | Variants |
|---|---|
| **Size and symbols** | [Classic](docs/catalog/en/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/en/01-marime-si-simboluri.md#wordoku) · [Latin square](docs/catalog/en/01-marime-si-simboluri.md#latin) · [Zero Sudoku](docs/catalog/en/01-marime-si-simboluri.md#zero) |
| **Regions and groups** | [Sudoku X](docs/catalog/en/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/en/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (irregular)](docs/catalog/en/02-regiuni-si-grupuri.md#jigsaw) · [Disjoint groups](docs/catalog/en/02-regiuni-si-grupuri.md#dg) · [Centre dots](docs/catalog/en/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/en/02-regiuni-si-grupuri.md#girandola) · [Scattered nine](docs/catalog/en/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/en/02-regiuni-si-grupuri.md#asterisk) · [Single diagonal](docs/catalog/en/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/en/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/en/02-regiuni-si-grupuri.md#pandiag) |
| **Neighbors** | [Anti-knight](docs/catalog/en/03-vecini.md#antiknight) · [Anti-king](docs/catalog/en/03-vecini.md#antiking) · [Non-consecutive](docs/catalog/en/03-vecini.md#nonconsec) · [Miracle](docs/catalog/en/03-vecini.md#miracle) |
| **Parity, dots, signs** | [Even–odd](docs/catalog/en/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/en/04-paritate-puncte-semne.md#kropki) · [Consecutive](docs/catalog/en/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/en/04-paritate-puncte-semne.md#xv) · [Greater-than](docs/catalog/en/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/en/04-paritate-puncte-semne.md#batt) · [Quadruples](docs/catalog/en/04-paritate-puncte-semne.md#quad) · [Marked evens only](docs/catalog/en/04-paritate-puncte-semne.md#evenonly) · [Marked odds only](docs/catalog/en/04-paritate-puncte-semne.md#oddonly) · [Fortress](docs/catalog/en/04-paritate-puncte-semne.md#fortress) · [Min / Max](docs/catalog/en/04-paritate-puncte-semne.md#minmax) · [Indexing](docs/catalog/en/04-paritate-puncte-semne.md#indexing) · [Ratio ×3](docs/catalog/en/04-paritate-puncte-semne.md#ratio) · [Difference](docs/catalog/en/04-paritate-puncte-semne.md#diff) · [Kropki marked only](docs/catalog/en/04-paritate-puncte-semne.md#kropkipos) · [XV marked only](docs/catalog/en/04-paritate-puncte-semne.md#xvpos) · [Consecutive marked only](docs/catalog/en/04-paritate-puncte-semne.md#consecpos) · [Clueless](docs/catalog/en/04-paritate-puncte-semne.md#clueless) |
| **Sums** | [Killer](docs/catalog/en/05-sume.md#killer) · [Little Killer](docs/catalog/en/05-sume.md#littlekiller) · [Little Unique Killer](docs/catalog/en/05-sume.md#luk) |
| **Edge clues** | [Sandwich](docs/catalog/en/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/en/06-indicii-pe-margine.md#xsum) · [Frame (first three)](docs/catalog/en/06-indicii-pe-margine.md#frame) · [Skyscrapers](docs/catalog/en/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/en/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/en/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/en/06-indicii-pe-margine.md#radar) · [Counting sandwich](docs/catalog/en/06-indicii-pe-margine.md#sandnum) · [Parity sandwich](docs/catalog/en/06-indicii-pe-margine.md#sandpar) · [Double sandwich](docs/catalog/en/06-indicii-pe-margine.md#sand2) · [Basement](docs/catalog/en/06-indicii-pe-margine.md#subsol) · [Edge product](docs/catalog/en/06-indicii-pe-margine.md#prodmargin) · [Edge difference](docs/catalog/en/06-indicii-pe-margine.md#diffmargin) · [Ascents](docs/catalog/en/06-indicii-pe-margine.md#ascents) · [Inversions](docs/catalog/en/06-indicii-pe-margine.md#inversions) · [Cycles](docs/catalog/en/06-indicii-pe-margine.md#cycles) · [Fixed points](docs/catalog/en/06-indicii-pe-margine.md#fixedpts) · [Alternating sum](docs/catalog/en/06-indicii-pe-margine.md#altsum) · [Diagonal X-sums](docs/catalog/en/06-indicii-pe-margine.md#dxsum) |
| **Lines** | [Thermometers](docs/catalog/en/07-linii.md#thermo) · [Arrows](docs/catalog/en/07-linii.md#arrow) · [Renban](docs/catalog/en/07-linii.md#renban) · [German whispers](docs/catalog/en/07-linii.md#whisper) · [Palindrome](docs/catalog/en/07-linii.md#palindrome) · [Between lines](docs/catalog/en/07-linii.md#between) · [Entropic lines](docs/catalog/en/07-linii.md#entropic) · [Modular lines](docs/catalog/en/07-linii.md#modular) · [Dutch whispers](docs/catalog/en/07-linii.md#dutch) · [Nabner](docs/catalog/en/07-linii.md#nabner) · [Slow thermometer](docs/catalog/en/07-linii.md#slowthermo) · [Parity line](docs/catalog/en/07-linii.md#parityline) · [Same-parity line](docs/catalog/en/07-linii.md#sameparity) · [Lockout](docs/catalog/en/07-linii.md#lockout) · [Double arrow](docs/catalog/en/07-linii.md#doublearrow) · [Zipper](docs/catalog/en/07-linii.md#zipper) · [Region sum lines](docs/catalog/en/07-linii.md#regionsum) · [Average arrow](docs/catalog/en/07-linii.md#avgarrow) · [Product arrow](docs/catalog/en/07-linii.md#prodarrow) · [Pill arrow](docs/catalog/en/07-linii.md#pillarrow) · [Fog of war](docs/catalog/en/07-linii.md#fog) · [Legato](docs/catalog/en/07-linii.md#legato) · [Consonant line](docs/catalog/en/07-linii.md#consonant) · [Fixed-step line](docs/catalog/en/07-linii.md#fixstep) · [Complementary line](docs/catalog/en/07-linii.md#compline) · [Zigzag](docs/catalog/en/07-linii.md#zigzag) · [Fibonacci line](docs/catalog/en/07-linii.md#fibonacci) · [Steps](docs/catalog/en/07-linii.md#steps) · [Arithmetic progression](docs/catalog/en/07-linii.md#progression) · [Echo line](docs/catalog/en/07-linii.md#echo) · [Divisible line](docs/catalog/en/07-linii.md#divisible) · [Prime line](docs/catalog/en/07-linii.md#primeline) |
| **Composite grids** | [Samurai](docs/catalog/en/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/en/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/en/08-grile-compuse.md#gattai3) · [Sohei (ring of four)](docs/catalog/en/08-grile-compuse.md#sohei) · [Kazaguruma (windmill)](docs/catalog/en/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/en/08-grile-compuse.md#tripledoku) · [Cross](docs/catalog/en/08-grile-compuse.md#cross) |
| **Close relatives** | [Futoshiki](docs/catalog/en/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/en/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/en/09-rude-apropiate.md#strimko) |
| **Topologies and fairy moves** | [Anti-alfil](docs/catalog/en/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-camel](docs/catalog/en/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-zebra](docs/catalog/en/10-topologii-si-mutari-fairy.md#antizebra) · [Torus anti-king](docs/catalog/en/10-topologii-si-mutari-fairy.md#torusking) · [Torus anti-knight](docs/catalog/en/10-topologii-si-mutari-fairy.md#torusknight) · [Cylinder anti-king](docs/catalog/en/10-topologii-si-mutari-fairy.md#cylking) · [Möbius anti-king](docs/catalog/en/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein anti-king](docs/catalog/en/10-topologii-si-mutari-fairy.md#kleinking) · [Projective-plane anti-king](docs/catalog/en/10-topologii-si-mutari-fairy.md#projking) |
| **Global rules** | [Complementary symmetry](docs/catalog/en/11-reguli-globale.md#symcomp) · [Symmetric parity](docs/catalog/en/11-reguli-globale.md#symparity) · [Centre of gravity](docs/catalog/en/11-reguli-globale.md#cgrav) · [Lexicographic rows](docs/catalog/en/11-reguli-globale.md#lexrows) · [Touching extremes](docs/catalog/en/11-reguli-globale.md#extremes) · [Balanced boxes](docs/catalog/en/11-reguli-globale.md#boxbalance) · [Lonely 5](docs/catalog/en/11-reguli-globale.md#lonely5) · [No lonely cells](docs/catalog/en/11-reguli-globale.md#nolonely) · [No arithmetic progressions](docs/catalog/en/11-reguli-globale.md#noprog) · [Semi-magic boxes](docs/catalog/en/11-reguli-globale.md#semimagic) |
| **Cell clues** | [Relief](docs/catalog/en/12-indicii-in-celule.md#relief) · [Odd-sweeper](docs/catalog/en/12-indicii-in-celule.md#oddsweeper) · [Compass](docs/catalog/en/12-indicii-in-celule.md#compass) · [Quad sum](docs/catalog/en/12-indicii-in-celule.md#quadsum) · [Stone 2×2](docs/catalog/en/12-indicii-in-celule.md#stone) · [Domino](docs/catalog/en/12-indicii-in-celule.md#domino) · [Perfect-square pill](docs/catalog/en/12-indicii-in-celule.md#pillsq) · [Prime cage](docs/catalog/en/12-indicii-in-celule.md#primecage) · [Balanced cage](docs/catalog/en/12-indicii-in-celule.md#balcage) · [Doublers](docs/catalog/en/12-indicii-in-celule.md#doubler) · [Mirror clone](docs/catalog/en/12-indicii-in-celule.md#clonemir) |
| **Higher dimensions** | [Latin cube 3D](docs/catalog/en/13-dimensiuni-superioare.md#cube3) · [Cube with 2×2 boxes](docs/catalog/en/13-dimensiuni-superioare.md#cubebox) · [Hypercube 4D](docs/catalog/en/13-dimensiuni-superioare.md#hyper4) · [Hypercube 5D](docs/catalog/en/13-dimensiuni-superioare.md#hyper5) · [Greco-Latin (orthogonal squares)](docs/catalog/en/13-dimensiuni-superioare.md#greco) |

Each category has its own page in [`docs/catalog/`](docs/catalog/README.md) (screenshots and full galleries).

## Features

- **Variants from version 1.0 (38):** classic (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), wordoku, Latin square, Sudoku X, Hyper (Windoku), Jigsaw, disjoint groups, center dots, anti-knight, anti-king, non-consecutive, Miracle, even–odd, Kropki, consecutive, XV, comparisons, Battenburg, quadruples, Killer, Little Killer, Sandwich, X-Sums, Frame, skyscraper, thermometers, arrows, Renban, German whispers, palindrome, between lines, entropic lines, modular lines, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Added in version 1.1 (24):** Girandola (corrected in 1.4), Asterisk, single diagonal, Dutch whispers, Nabner, slow thermometer, parity line (alternating), same-parity line, marked evens only, marked odds only, Little Unique Killer, Fortress, Min/Max, Lockout, double arrow, Zipper, Rossini, Outside, Clone, region-sum lines, average arrow, product arrow, pill arrow, Strimko.
- **Added in version 1.2 (level 3, 3):** Indexing (the first digit in the row shows the column of the 1), Ratio ×3 (circles for 3:1 pairs), Fog of war (the clues appear as you solve; the puzzle is built so that simple propagation can continue only with what is visible).
- **Added in version 1.3 (70):**
  - *Topologies and fairy jumps (9):* Anti-bishop, Anti-camel, Anti-zebra, Torus anti-king, Torus anti-knight, Cylinder, Möbius, Klein and projective-plane anti-king.
  - *Global rules (12):* Pandiagonal, Zero Sudoku, Complementary symmetry, Symmetric parity, Centre of gravity, Lexicographic rows, Touching extremes, Balanced boxes, Lonely 5, No lonely cells, No arithmetic progressions, Semi-magic boxes.
  - *Edge clues (13):* Radar, Counting sandwich, Parity sandwich, Double sandwich, Basement, Edge product, Edge difference, Ascents, Inversions, Cycles, Fixed points, Alternating sum, Diagonal X-sums.
  - *Cell clues and cages (11):* Relief, Odd-sweeper, Compass, Quad sum, Stone 2×2, Domino, Perfect-square pill, Prime cage, Balanced cage, Doublers, Mirror clone.
  - *Dots (5):* Difference, Kropki / XV / Consecutive marked only, Clueless (Kropki dots only).
  - *Lines (11):* Legato, Consonant line, Fixed-step line, Complementary line, Zigzag, Fibonacci line, Steps, Arithmetic progression, Echo line, Divisible line, Prime line.
  - *Composite grids (4):* Sohei, Kazaguruma, Cross, Tripledoku (V).
  - *Higher dimensions (5):* Latin cube 3D, Cube with 2×2 boxes, Hypercube 4D, Hypercube 5D, Greco-Latin.
- **Game modes (7):** Orb, Memory, Marathon, Duel, Hardcore, Puzzle of the day, Sound. They are chosen at “New game”; the share code gets the suffix `@mode` (not for Puzzle of the day and Marathon).
- **Custom combination:** any compatible set of grid rules + clues (e.g. Killer + diagonals, thermometers + arrows).
- **Game:** multiple selection, notes, undo/redo, hint (logic on candidates), auto-notes, checking, highlighted conflicts, timer, autosave, printing.
- **Share code:** `variant-size-difficulty-seed` regenerates the same puzzle in the same version.
- **Classic 9×9 solver** with optional extra rules; it says whether the solution is unique, multiple or nonexistent.
- **Atlas:** search, categories, “Today's variant”, “Surprise me”, lexicon, CSV export, BibTeX citation.
- Light/dark/automatic theme, larger text, interface in 8 languages (RO, EN, FR, IT, ES, PT, DE, HU).
- **Puzzle of the day** uses the UTC date; the streak of consecutive days is kept locally (`sudoku-fara-frontiere.daily`).

## How it generates

The engine picks a solved grid that respects the rules, derives the clues from it (cages, thermometers, dots...), then removes the given digits one by one, only as long as the solver proves that the solution remains unique. Generation runs in a Web Worker created from the same file (no network); if the Worker is not available, it runs on the main thread.

## Limits

- “Step by step” fills in a digit and highlights why (the only digit left in the cell; the only possible cell in a row/column/region; a deduction from the variant's rules; or, when there is no direct deduction, the digit from the solution, marked as such). “▶ Auto” runs the steps by itself, at 1.6 s. Disabled in Hardcore and Memory; each step can be undone.
- The easy/medium/hard difficulty is only the number of clues kept. The puzzle also shows a measure of the solver's effort (0 = solved by propagation alone; otherwise the number of branches), which is not an assessment of human techniques. If generation takes more than 12 s, the difficulty drops automatically (but not for “Puzzle of the day” or shared codes).
- Tested in Chromium (including opened as file://). Firefox and Safari/iOS could not be tested in the development environment; if the Worker from a Blob is blocked, the app falls back to generating on the main thread (UI blocked during generation).
- Accessibility: the keyboard (arrows, digits, N, Ctrl+Z) and a spoken announcement of the selected cell; the board is SVG and is not a complete tool for screen readers.
- The saved state has a version number; an unknown format is set aside (`sudoku-fara-frontiere.game_bad`), not deleted.
- “Hard” removes as many digits as it can; in variants with many clues in the grid, very few given digits may remain.
- Composite grids have only the classic rules; very heavily loaded combinations may take longer or fail (the app says so).
- 16×16 and 25×25 use the symbols 1–9 and letters (A–G and A–P respectively).
- **Geometries chosen by me** (sources differ): Sohei, Kazaguruma, Cross, Tripledoku (V); the Domino definition; the edge gluing for Möbius, Klein and the projective plane; “Touching extremes” with neighbors including diagonals (with orthogonal neighbors only, no 9×9 grids exist); Semi-magic boxes on rows and columns (fully magic boxes, with diagonals, are impossible).
- **Hypercubes and cubes:** they are displayed in layers (a mosaic of slices) and, for the 3D ones, in a rotating 3D view; for 3D cubes there is also a rotating “3D view” (you drag with the mouse, the slider hides the front layers); the 4D/Hypercube 5Ds remain layers only. Being very rigid, on “Hard” only a few given digits remain (for 5D only a few of the 243 cells). Greco-Latin: sizes 3, 4, 5, 7 (6 is impossible; 8 and 9 omitted for speed).
- **Anti-wazir** does not exist: forbidding the same digit on orthogonally adjacent cells is already a rule of any Sudoku. “Anti-bishop” means the 2×2 jump, not a sliding bishop. The “Strings complementary/equal” items from the working list are not separate variants: the idea is covered by Complementary line and Echo.
- **Logically close or identical variants (stated in the sheets):** Zero Sudoku (only different symbols compared to Classic), Lexicographic rows (reduces to “the first column is 1…N”), Basement (Skyscraper with the digits reversed).
- **Duel:** the opponent is a timer that fills in cells from the known solution, not a solver with logic.
- The rules follow the usual conventions; the sheets say which variant of a convention was chosen. For a few new variants the sources differ and I fixed an explicit convention: Girandola (since 1.4: corners, center and r2c5, r5c2, r5c8, r8c5, after Regexp::Sudoku; the old layout is now “Scattered nine”), “parity line” (alternating, with the “same parity” variant separate), Rossini (the arrow points toward the largest of the first three digits), Outside (the digits on the edge appear among the first three cells), Zipper (all symmetric pairs sum to the center), Region sum lines (the sum in each traversed box is the same), Fortress (only unmarked neighbors count).

## Privacy and network

- **Local storage:** `localStorage`, keys `sudoku-fara-frontiere.lang`, `sudoku-fara-frontiere.theme`, `sudoku-fara-frontiere.size`, `sudoku-fara-frontiere.game`, `sudoku-fara-frontiere.daily` (language, theme, text size, the current game, the Puzzle of the day streak) and `sudoku-fara-frontiere.game_bad` (saved state in an unknown format, kept).
- **Network:** in the code there is no `fetch`, `XMLHttpRequest`, CDN or external resources. The only URL in the file is the SVG namespace (`http://www.w3.org/2000/svg`), which generates no request.

## Repository structure

```
index.html          aplicația (generat; se deschide direct în browser)
engine.js           motorul: solver, generator, variantele
src/                interfața (template.html, style.css, data.js, app.js)
build.py            asamblează index.html din src/ + engine.js
test.js             suita de teste (node test.js)
docs/               capturi (docs/screens), catalogul pe categorii (docs/catalog), GHID.html + GHID.<lang>.html (ghid ilustrat; se văd pe Pages)
CHANGELOG.md        istoric versiuni
CONTRIBUTING.md     cum contribui
LICENSE             MIT
```

Publishing on GitHub Pages: Settings → Pages → Branch `main`, folder `/ (root)`; `index.html` is at the root and uses only relative paths, so it also works under `https://<user>.github.io/<repository>/`. See [`CHANGELOG.md`](CHANGELOG.md) and [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md).

## Running locally / offline

Download `index.html` and open it in a browser; it needs no internet.

## Tests

They also run automatically on GitHub (Actions, `.github/workflows/ci.yml`): a reproducible build, `node test.js` and a check that `index.html` has no external resources.

`engine.js` is the engine (the same source is included in `index.html`). The `test.js` suite runs with Node:

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

For each variant and size, at easy and hard level, it checks: the solution respects the rules, the puzzle has a unique solution (counting with the same solver as the generator, with a large budget; the 4×4 enumerations and the semantics validator are written separately), the solution survives propagation from random subsets of clues (*soundness*). In addition, at 4×4 the number of solutions without clues is compared with an exhaustive enumeration (e.g. 288 for classic), and a few custom combinations are verified. Since version 1.1, each puzzle is also verified by a rules-semantics validator written separately from the engine, directly from the text of the sheets (it checks, for example, Zipper, Lockout, the average/product/pill arrows, Clone, the Strimko chains). Since version 1.3, the independent validator also covers topologies, fairy jumps, global rules, edge clues, cell clues, cages, lines and dots (formulas rewritten separately from the engine), and for cubes, hypercubes and Greco-Latin the number of solutions without clues is compared with a separate DFS enumeration (e.g. 21888 for the 4×4×4 cube with 2×2 boxes, 72 and 6912 for Greco-Latin 3 and 4). Last run: 3144 checks, all passed; the independent validator now also covers the types from 1.0–1.2, and a mutant test (16,506 digit renamings) shows total agreement between the engine and the validator; 660 4×4 puzzles were confirmed unique by a separate enumeration; additional stress on 12 seeds per variant (5652 puzzles, zero errors); in addition, a stress run with 5 puzzles on each variant, minimum and maximum size, without any error (the slowest generation, on “Hard” on some variants with global rules, took about 21 s). Limit: cross-checking by exhaustive enumeration exists only for the variants that have a 4×4 size (and for small cubes/Greco-Latin, as shown above).

## What is not implemented from level 3

Not included: Chaos Construction, Deconstruction, hybrids with other puzzles (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), the overlapping Flower/Butterfly grids (Sohei and Kazaguruma exist since 1.3, with a geometry chosen by me), modifier cells, Schrödinger, “liar”, Vudoku, Capsule, Deficit. Some change the game mode or require solvers with a different kind of logic; for others the sources found do not fix the rules or the geometry, and inventing them would mean presenting as a known variant something that is not.

## Status

Stable, version 2.1.0 (2026-10-27). 136 variants; generator with a unique solution verified by the solver; technique-by-technique explanations for classic Sudoku; daily puzzle mode; printable sheet with optional solution page. A unified local multiplayer mode across the games is planned, not implemented. Changes: `CHANGELOG.md`.

## Offline

A single file, `index.html` (built from `src/` and `engine.js` with `python3 build.py`): no CDN, no external fonts or scripts, no tracking, no accounts. A strict CSP (`default-src 'none'`, `connect-src 'none'`) blocks network connections; a service worker caches the app for offline start. Printing uses the browser's own print dialog.

## License

**MIT** — see [`LICENSE`](LICENSE). It applies to the whole repository: the code (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), the texts (README, the sheets) and the screenshots in `docs/screens/`. You may use, copy, modify, publish and sell, provided you keep the copyright notice and the text of the license. The program is provided “as is”, without warranties.

Notes:
- The app includes no external libraries or resources, so there are no third-party licenses to comply with.
- The names and rules of Sudoku variants (Killer, Kropki, Sandwich, etc.) designate publicly known puzzle types; the texts of the sheets are written for this app. The names remain those of the authors and communities that created them.

## Author

Alexio — Alexandru-Ionuț Chiuță, contact: <alexio@trom.tf>.

## Summary

An atlas of 136 Sudoku entries (≈130 with distinct rules; Basement, Zero and Lexicographic rows are near-duplicates of other variants and say so in their sheets) (plus 7 game modes: Orb, Memory, Marathon, Duel, Hardcore, Puzzle of the day, Sound) with a local generator and solver, in one HTML file. Puzzles are generated in the browser with a proven unique solution (givens are removed only while a propagating solver confirms uniqueness). Includes a custom rule mixer, notes/undo/hints, share codes, a classic 9×9 solver, CSV export and BibTeX citation. No network requests; state is stored in `localStorage` (`sff_*`). Difficulty (easy/medium/hard) is only the number of givens kept; each puzzle also shows a measured figure: how many branches a propagating solver needs (0 = solves by propagation alone). That is solver effort, not a human technique rating. Run `node test.js` for the engine test suite. Licence: MIT (see `LICENSE`), covering code, texts and screenshots.

This README contains a usage guide with screenshots of the interface and a catalogue with two real screenshots, the rules and a reproducible code for each of the 136 variants (`screens/`).

## Notes v1.4

- **Girandola** was corrected after the description in Regexp::Sudoku (corners, center, r2c5, r5c2, r5c8, r8c5). The old layout (corners, edge midpoints, center) remains as “Scattered nine” (`sparse9`). `girandola-…` codes generated before 1.4 now produce a different puzzle.
- Fixed in 1.4 after screenshots: the label of the “Play” tab (duplicate text key), lists left on old values after “Open” with a code, and the “Wrong cells” message left after undo.
- 1.4 checks: a validator written blind from the text of the sheets (135/135 of the variants existing at the time passed; “Scattered nine” was added afterwards and has a validator in `test.js`), comparison with published sources on 56 variants (the Regionsum, Rossini and Little Unique Killer sheets received clarifications), a single run of 1818 puzzles on all variants and sizes ≤12 without errors (the script is not part of the repository), “Step by step” tested on all 136 variants.
- Still unconfirmed by sources: the layout of Sohei, Kazaguruma, Cross, Tripledoku V; the treatment of repeated digits in Quad and Doublers; diagonal connectivity in Strimko.
