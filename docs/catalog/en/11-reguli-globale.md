# Catalog: Global rules (10)

**English** · [Română](../11-reguli-globale.md) · [Français](../fr/11-reguli-globale.md) · [Italiano](../it/11-reguli-globale.md) · [Español](../es/11-reguli-globale.md) · [Português](../pt/11-reguli-globale.md) · [Deutsch](../de/11-reguli-globale.md) · [Magyar](../hu/11-reguli-globale.md)

[← README](../../../README.md) · [All categories](README.md)

[Size and symbols](01-marime-si-simboluri.md) · [Regions and groups](02-regiuni-si-grupuri.md) · [Neighbours](03-vecini.md) · [Parity, dots, signs](04-paritate-puncte-semne.md) · [Sums](05-sume.md) · [Outside clues](06-indicii-pe-margine.md) · [Lines](07-linii.md) · [Composite grids](08-grile-compuse.md) · [Close relatives](09-rude-apropiate.md) · [Topologies and fairy leaps](10-topologii-si-mutari-fairy.md) · **Global rules** · [Cell clues](12-indicii-in-celule.md) · [Higher dimensions](13-dimensiuni-superioare.md)

---


_The rule concerns the whole grid and usually has no markings of its own; test it with “Check” or watch the conflicts._

<a id="symcomp"></a>
#### 111. Complementary symmetry (`symcomp`)

**Cells opposite through the centre sum to N+1.**

In addition to the classic rules, any two cells symmetric about the centre of the grid (180° rotation) sum to N+1 (at 9×9: 10); at 9×9 the centre cell is therefore 5. Sizes 9×9 and 4×4.

<table><tr><td align="center"><img src="../../screens/symcomp_a.webp" width="300" alt="Complementary symmetry: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 23 givens)</sub></td><td align="center"><img src="../../screens/symcomp_b.webp" width="300" alt="Complementary symmetry: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 1 (row 5, col. 4): all the other digits already appear among the marked cells (row, column, region or neighbour rule).
- **Code for the same puzzle:** `symcomp-9-medium-913346369` (paste it into “New game → Code”) · solver effort: no branching

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_card.webp" width="200" alt="Complementary symmetry: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_fiche.webp" width="260" alt="Complementary symmetry: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_s4.webp" width="200" alt="Complementary symmetry: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_s9.webp" width="200" alt="Complementary symmetry: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_easy.webp" width="200" alt="Complementary symmetry: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_a.webp" width="200" alt="Complementary symmetry: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_hard.webp" width="200" alt="Complementary symmetry: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_notes.webp" width="200" alt="Complementary symmetry: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_check.webp" width="200" alt="Complementary symmetry: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_solved.webp" width="200" alt="Complementary symmetry: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_dark.webp" width="200" alt="Complementary symmetry: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_mobile.webp" width="150" alt="Complementary symmetry: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_en.webp" width="300" alt="Complementary symmetry: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_rules.webp" width="300" alt="Complementary symmetry: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="symparity"></a>
#### 112. Symmetric parity (`symparity`)

**Cells opposite through the centre share parity.**

In addition to the classic rules, any two cells symmetric about the centre of the grid (180° rotation) are both even or both odd.

<table><tr><td align="center"><img src="../../screens/symparity_a.webp" width="300" alt="Symmetric parity: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 24 givens)</sub></td><td align="center"><img src="../../screens/symparity_b.webp" width="300" alt="Symmetric parity: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 5 (row 1, col. 1): follows from the variant-specific rules (clues, sums, relations) combined with the other digits.
- **Code for the same puzzle:** `symparity-9-medium-2361855335` (paste it into “New game → Code”) · solver effort: no branching

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_card.webp" width="200" alt="Symmetric parity: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symparity_fiche.webp" width="260" alt="Symmetric parity: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_s4.webp" width="200" alt="Symmetric parity: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s6.webp" width="200" alt="Symmetric parity: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s9.webp" width="200" alt="Symmetric parity: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_easy.webp" width="200" alt="Symmetric parity: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/symparity_a.webp" width="200" alt="Symmetric parity: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/symparity_hard.webp" width="200" alt="Symmetric parity: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_notes.webp" width="200" alt="Symmetric parity: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_check.webp" width="200" alt="Symmetric parity: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_solved.webp" width="200" alt="Symmetric parity: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_dark.webp" width="200" alt="Symmetric parity: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/symparity_mobile.webp" width="150" alt="Symmetric parity: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_en.webp" width="300" alt="Symmetric parity: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_rules.webp" width="300" alt="Symmetric parity: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="cgrav"></a>
#### 113. Centre of gravity (`cgrav`)

**Every row balances like a seesaw.**

In addition to the classic rules, every row is balanced: number the positions −4…+4 and treat each digit as a weight; the sum of weight × position is 0 (the centre of gravity is exactly in the middle). 9×9 only; generation can take a few seconds at Easy and up to ~20 s at Hard.

<table><tr><td align="center"><img src="../../screens/cgrav_a.webp" width="300" alt="Centre of gravity: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 26 givens)</sub></td><td align="center"><img src="../../screens/cgrav_b.webp" width="300" alt="Centre of gravity: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 4 (row 1, col. 7): all the other digits already appear among the marked cells (row, column, region or neighbour rule).
- **Code for the same puzzle:** `cgrav-9-medium-1954301562` (paste it into “New game → Code”) · solver effort: no branching

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_card.webp" width="200" alt="Centre of gravity: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_fiche.webp" width="260" alt="Centre of gravity: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_s9.webp" width="200" alt="Centre of gravity: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_easy.webp" width="200" alt="Centre of gravity: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_a.webp" width="200" alt="Centre of gravity: Medium"><br><sub>Medium</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_notes.webp" width="200" alt="Centre of gravity: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_check.webp" width="200" alt="Centre of gravity: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_solved.webp" width="200" alt="Centre of gravity: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_dark.webp" width="200" alt="Centre of gravity: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_mobile.webp" width="150" alt="Centre of gravity: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_en.webp" width="300" alt="Centre of gravity: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_rules.webp" width="300" alt="Centre of gravity: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="lexrows"></a>
#### 114. Lexicographic rows (`lexrows`)

**Rows increase like dictionary words (first column: 1…N).**

In addition to the classic rules, reading the rows top to bottom as digit “words”, each row is strictly smaller lexicographically than the one below it (compare at the first differing digit). Since the first column holds different digits, the rule in effect means that the first column, read top to bottom, is 1, 2, …, N.

<table><tr><td align="center"><img src="../../screens/lexrows_a.webp" width="300" alt="Lexicographic rows: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 23 givens)</sub></td><td align="center"><img src="../../screens/lexrows_b.webp" width="300" alt="Lexicographic rows: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 3 (row 7, col. 6): it is the only cell in the marked column where 3 can go.
- **Code for the same puzzle:** `lexrows-9-medium-957311172` (paste it into “New game → Code”) · solver effort: 1 branches

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_card.webp" width="200" alt="Lexicographic rows: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_fiche.webp" width="260" alt="Lexicographic rows: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_s4.webp" width="200" alt="Lexicographic rows: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s6.webp" width="200" alt="Lexicographic rows: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s9.webp" width="200" alt="Lexicographic rows: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_easy.webp" width="200" alt="Lexicographic rows: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_a.webp" width="200" alt="Lexicographic rows: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_hard.webp" width="200" alt="Lexicographic rows: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_notes.webp" width="200" alt="Lexicographic rows: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_check.webp" width="200" alt="Lexicographic rows: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_solved.webp" width="200" alt="Lexicographic rows: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_dark.webp" width="200" alt="Lexicographic rows: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_mobile.webp" width="150" alt="Lexicographic rows: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_en.webp" width="300" alt="Lexicographic rows: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_rules.webp" width="300" alt="Lexicographic rows: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="extremes"></a>
#### 115. Touching extremes (`extremes`)

**The smallest and largest digit of each box touch.**

In addition to the classic rules, in each box the digits 1 and N lie in neighbouring cells, diagonals included (king’s move). Including diagonals is the convention chosen here: with orthogonal neighbours only, no 9×9 grid exists (checked exhaustively).

<table><tr><td align="center"><img src="../../screens/extremes_a.webp" width="300" alt="Touching extremes: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 23 givens)</sub></td><td align="center"><img src="../../screens/extremes_b.webp" width="300" alt="Touching extremes: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 6 (row 4, col. 4): it is the only cell in the marked column where 6 can go.
- **Code for the same puzzle:** `extremes-9-medium-1348183675` (paste it into “New game → Code”) · solver effort: 2 branches

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_card.webp" width="200" alt="Touching extremes: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/extremes_fiche.webp" width="260" alt="Touching extremes: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_s4.webp" width="200" alt="Touching extremes: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s6.webp" width="200" alt="Touching extremes: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s9.webp" width="200" alt="Touching extremes: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_easy.webp" width="200" alt="Touching extremes: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/extremes_a.webp" width="200" alt="Touching extremes: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/extremes_hard.webp" width="200" alt="Touching extremes: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_notes.webp" width="200" alt="Touching extremes: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_check.webp" width="200" alt="Touching extremes: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_solved.webp" width="200" alt="Touching extremes: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_dark.webp" width="200" alt="Touching extremes: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/extremes_mobile.webp" width="150" alt="Touching extremes: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_en.webp" width="300" alt="Touching extremes: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_rules.webp" width="300" alt="Touching extremes: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="boxbalance"></a>
#### 116. Balanced boxes (`boxbalance`)

**First and last box column have equal sums.**

In addition to the classic rules, in every box the sum of the left column equals the sum of the right column.

<table><tr><td align="center"><img src="../../screens/boxbalance_a.webp" width="300" alt="Balanced boxes: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 23 givens)</sub></td><td align="center"><img src="../../screens/boxbalance_b.webp" width="300" alt="Balanced boxes: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 6 (row 6, col. 4): no direct deduction; the digit is taken from the unique solution (a guess would be needed).
- **Code for the same puzzle:** `boxbalance-9-medium-1668427631` (paste it into “New game → Code”) · solver effort: 314 branches

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_card.webp" width="200" alt="Balanced boxes: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_fiche.webp" width="260" alt="Balanced boxes: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_s4.webp" width="200" alt="Balanced boxes: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s6.webp" width="200" alt="Balanced boxes: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s9.webp" width="200" alt="Balanced boxes: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_easy.webp" width="200" alt="Balanced boxes: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_a.webp" width="200" alt="Balanced boxes: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_hard.webp" width="200" alt="Balanced boxes: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_notes.webp" width="200" alt="Balanced boxes: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_check.webp" width="200" alt="Balanced boxes: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_solved.webp" width="200" alt="Balanced boxes: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_dark.webp" width="200" alt="Balanced boxes: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_mobile.webp" width="150" alt="Balanced boxes: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_en.webp" width="300" alt="Balanced boxes: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_rules.webp" width="300" alt="Balanced boxes: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="lonely5"></a>
#### 117. Lonely 5 (`lonely5`)

**A 5 has only even neighbours.**

In addition to the classic rules, every 5 has only even orthogonal neighbours. Sizes 9×9 and 6×6.

<table><tr><td align="center"><img src="../../screens/lonely5_a.webp" width="300" alt="Lonely 5: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 24 givens)</sub></td><td align="center"><img src="../../screens/lonely5_b.webp" width="300" alt="Lonely 5: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 2 (row 5, col. 3): it is the only cell in the marked row where 2 can go.
- **Code for the same puzzle:** `lonely5-9-medium-4284537212` (paste it into “New game → Code”) · solver effort: no branching

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_card.webp" width="200" alt="Lonely 5: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_fiche.webp" width="260" alt="Lonely 5: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_s6.webp" width="200" alt="Lonely 5: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_s9.webp" width="200" alt="Lonely 5: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_easy.webp" width="200" alt="Lonely 5: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_a.webp" width="200" alt="Lonely 5: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_hard.webp" width="200" alt="Lonely 5: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_notes.webp" width="200" alt="Lonely 5: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_check.webp" width="200" alt="Lonely 5: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_solved.webp" width="200" alt="Lonely 5: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_dark.webp" width="200" alt="Lonely 5: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_mobile.webp" width="150" alt="Lonely 5: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_en.webp" width="300" alt="Lonely 5: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_rules.webp" width="300" alt="Lonely 5: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="nolonely"></a>
#### 118. No lonely cells (`nolonely`)

**Every cell has a consecutive neighbour.**

In addition to the classic rules, every cell has at least one orthogonal neighbour whose digit differs from its own by exactly 1.

<table><tr><td align="center"><img src="../../screens/nolonely_a.webp" width="300" alt="No lonely cells: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 23 givens)</sub></td><td align="center"><img src="../../screens/nolonely_b.webp" width="300" alt="No lonely cells: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 5 (row 9, col. 9): all the other digits already appear among the marked cells (row, column, region or neighbour rule).
- **Code for the same puzzle:** `nolonely-9-medium-355818888` (paste it into “New game → Code”) · solver effort: no branching

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_card.webp" width="200" alt="No lonely cells: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_fiche.webp" width="260" alt="No lonely cells: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_s4.webp" width="200" alt="No lonely cells: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s6.webp" width="200" alt="No lonely cells: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s9.webp" width="200" alt="No lonely cells: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_easy.webp" width="200" alt="No lonely cells: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_a.webp" width="200" alt="No lonely cells: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_hard.webp" width="200" alt="No lonely cells: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_notes.webp" width="200" alt="No lonely cells: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_check.webp" width="200" alt="No lonely cells: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_solved.webp" width="200" alt="No lonely cells: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_dark.webp" width="200" alt="No lonely cells: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_mobile.webp" width="150" alt="No lonely cells: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_en.webp" width="300" alt="No lonely cells: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_rules.webp" width="300" alt="No lonely cells: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="noprog"></a>
#### 119. No arithmetic progressions (`noprog`)

**No three neighbours form an arithmetic progression.**

In addition to the classic rules, three adjacent cells in a row or column cannot form an arithmetic progression (for example 2-4-6 or 7-5-3 are forbidden).

<table><tr><td align="center"><img src="../../screens/noprog_a.webp" width="300" alt="No arithmetic progressions: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 24 givens)</sub></td><td align="center"><img src="../../screens/noprog_b.webp" width="300" alt="No arithmetic progressions: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 2 (row 3, col. 7): all the other digits already appear among the marked cells (row, column, region or neighbour rule).
- **Code for the same puzzle:** `noprog-9-medium-3644248957` (paste it into “New game → Code”) · solver effort: 6 branches

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_card.webp" width="200" alt="No arithmetic progressions: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/noprog_fiche.webp" width="260" alt="No arithmetic progressions: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_s4.webp" width="200" alt="No arithmetic progressions: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s6.webp" width="200" alt="No arithmetic progressions: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s9.webp" width="200" alt="No arithmetic progressions: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_easy.webp" width="200" alt="No arithmetic progressions: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/noprog_a.webp" width="200" alt="No arithmetic progressions: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/noprog_hard.webp" width="200" alt="No arithmetic progressions: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_notes.webp" width="200" alt="No arithmetic progressions: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_check.webp" width="200" alt="No arithmetic progressions: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_solved.webp" width="200" alt="No arithmetic progressions: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_dark.webp" width="200" alt="No arithmetic progressions: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/noprog_mobile.webp" width="150" alt="No arithmetic progressions: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_en.webp" width="300" alt="No arithmetic progressions: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_rules.webp" width="300" alt="No arithmetic progressions: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

<a id="semimagic"></a>
#### 120. Semi-magic boxes (`semimagic`)

**Rows and columns of every box sum to 15.**

In addition to the classic rules, every row and every column of every box sums to 15. Fully magic boxes (with diagonals) are impossible, since the three boxes of one band would all need centre 5 in the same grid row; so the diagonals are not constrained. 9×9 only (at 4×4 rows and columns would need boxes with repeated digits).

<table><tr><td align="center"><img src="../../screens/semimagic_a.webp" width="300" alt="Semi-magic boxes: starting puzzle"><br><sub>Starting puzzle (9×9 · medium · 23 givens)</sub></td><td align="center"><img src="../../screens/semimagic_b.webp" width="300" alt="Semi-magic boxes: after 4 steps"><br><sub>After 4 “Step by step” steps</sub></td></tr></table>

- **Last step explained by the app:** 8 (row 5, col. 5): all the other digits already appear among the marked cells (row, column, region or neighbour rule).
- **Code for the same puzzle:** `semimagic-9-medium-3291682902` (paste it into “New game → Code”) · solver effort: no branching

<details><summary><b>Full gallery: all screenshot types</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_card.webp" width="200" alt="Semi-magic boxes: The card in the Atlas"><br><sub>The card in the Atlas</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_fiche.webp" width="260" alt="Semi-magic boxes: The rules sheet (opens when you click the card)"><br><sub>The rules sheet (opens when you click the card)</sub></td></tr>
</table>

<p><b>Sizes (medium level)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_s9.webp" width="200" alt="Semi-magic boxes: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulty</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_easy.webp" width="200" alt="Semi-magic boxes: Easy"><br><sub>Easy</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_a.webp" width="200" alt="Semi-magic boxes: Medium"><br><sub>Medium</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_hard.webp" width="200" alt="Semi-magic boxes: Hard"><br><sub>Hard</sub></td></tr>
</table>

<p><b>Game states</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_notes.webp" width="200" alt="Semi-magic boxes: Auto-notes (candidates)"><br><sub>Auto-notes (candidates)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_check.webp" width="200" alt="Semi-magic boxes: “Check” with a wrong digit (red)"><br><sub>“Check” with a wrong digit (red)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_solved.webp" width="200" alt="Semi-magic boxes: The full solution"><br><sub>The full solution</sub></td></tr>
</table>

<p><b>Themes and devices</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_dark.webp" width="200" alt="Semi-magic boxes: Dark theme"><br><sub>Dark theme</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_mobile.webp" width="150" alt="Semi-magic boxes: Phone (390 px)"><br><sub>Phone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_en.webp" width="300" alt="Semi-magic boxes: English interface"><br><sub>English interface</sub></td></tr>
</table>

<p><b>The in-game rules panel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_rules.webp" width="300" alt="Semi-magic boxes: The rules shown next to the board"><br><sub>The rules shown next to the board</sub></td></tr>
</table>

</details>

