# Catalog: Regiuni și grupuri (11)

[← README](../../README.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · **Regiuni și grupuri** · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Regiunile sau grupurile suplimentare sunt colorate ori conturate pe tablă; fiecare trebuie să conțină cifrele o singură dată._

<a id="diag"></a>
#### 5. Sudoku X · Sudoku X (`diag`)

**Plus cele două diagonale.**

Pe lângă regulile clasice, fiecare dintre cele două diagonale principale conține fiecare cifră o dată.

<table><tr><td align="center"><img src="../screens/diag_a.webp" width="300" alt="Sudoku X: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 28 indicii)</sub></td><td align="center"><img src="../screens/diag_b.webp" width="300" alt="Sudoku X: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 3, col. 5): este singura celulă din rândul marcat unde poate sta 3.
- **Cod pentru același puzzle:** `diag-9-medium-2735589624` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag_card.webp" width="200" alt="Sudoku X: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/diag_fiche.webp" width="260" alt="Sudoku X: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag_s4.webp" width="200" alt="Sudoku X: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/diag_s6.webp" width="200" alt="Sudoku X: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/diag_s9.webp" width="200" alt="Sudoku X: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag_easy.webp" width="200" alt="Sudoku X: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/diag_a.webp" width="200" alt="Sudoku X: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/diag_hard.webp" width="200" alt="Sudoku X: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag_notes.webp" width="200" alt="Sudoku X: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/diag_check.webp" width="200" alt="Sudoku X: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/diag_solved.webp" width="200" alt="Sudoku X: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag_dark.webp" width="200" alt="Sudoku X: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/diag_mobile.webp" width="150" alt="Sudoku X: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/diag_en.webp" width="300" alt="Sudoku X: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag_rules.webp" width="300" alt="Sudoku X: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="hyper"></a>
#### 6. Hyper (Windoku) · Hyper (Windoku) (`hyper`)

**Patru ferestre 3×3 suplimentare.**

Pe lângă regulile clasice, patru ferestre 3×3 suplimentare (colorate) conțin fiecare cifră o dată. Doar 9×9.

<table><tr><td align="center"><img src="../screens/hyper_a.webp" width="300" alt="Hyper (Windoku): puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/hyper_b.webp" width="300" alt="Hyper (Windoku): după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 4, col. 3): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `hyper-9-medium-2663842152` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper_card.webp" width="200" alt="Hyper (Windoku): Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/hyper_fiche.webp" width="260" alt="Hyper (Windoku): Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper_s9.webp" width="200" alt="Hyper (Windoku): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper_easy.webp" width="200" alt="Hyper (Windoku): Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/hyper_a.webp" width="200" alt="Hyper (Windoku): Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/hyper_hard.webp" width="200" alt="Hyper (Windoku): Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper_notes.webp" width="200" alt="Hyper (Windoku): Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/hyper_check.webp" width="200" alt="Hyper (Windoku): „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/hyper_solved.webp" width="200" alt="Hyper (Windoku): Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper_dark.webp" width="200" alt="Hyper (Windoku): Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/hyper_mobile.webp" width="150" alt="Hyper (Windoku): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/hyper_en.webp" width="300" alt="Hyper (Windoku): Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper_rules.webp" width="300" alt="Hyper (Windoku): Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="jigsaw"></a>
#### 7. Jigsaw (neregulat) · Jigsaw (irregular) (`jigsaw`)

**Casete neregulate în loc de pătrate.**

Casetele sunt regiuni neregulate de câte N celule (conturate gros). Fiecare rând, coloană și regiune conține fiecare cifră o dată. Fiecare puzzle are alte regiuni.

<table><tr><td align="center"><img src="../screens/jigsaw_a.webp" width="300" alt="Jigsaw (neregulat): puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 31 indicii)</sub></td><td align="center"><img src="../screens/jigsaw_b.webp" width="300" alt="Jigsaw (neregulat): după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 7 (rând 3, col. 2): este singura celulă din rândul marcat unde poate sta 7.
- **Cod pentru același puzzle:** `jigsaw-9-medium-2756065667` (lipește-l în „Joc nou → Cod”) · efort solver: 3 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/jigsaw_card.webp" width="200" alt="Jigsaw (neregulat): Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_fiche.webp" width="260" alt="Jigsaw (neregulat): Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/jigsaw_s4.webp" width="200" alt="Jigsaw (neregulat): 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_s5.webp" width="200" alt="Jigsaw (neregulat): 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_s6.webp" width="200" alt="Jigsaw (neregulat): 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../screens/jigsaw_s7.webp" width="200" alt="Jigsaw (neregulat): 7×7"><br><sub>7×7</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_s8.webp" width="200" alt="Jigsaw (neregulat): 8×8"><br><sub>8×8</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_s9.webp" width="200" alt="Jigsaw (neregulat): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/jigsaw_easy.webp" width="200" alt="Jigsaw (neregulat): Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_a.webp" width="200" alt="Jigsaw (neregulat): Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_hard.webp" width="200" alt="Jigsaw (neregulat): Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/jigsaw_notes.webp" width="200" alt="Jigsaw (neregulat): Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_check.webp" width="200" alt="Jigsaw (neregulat): „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_solved.webp" width="200" alt="Jigsaw (neregulat): Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/jigsaw_dark.webp" width="200" alt="Jigsaw (neregulat): Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_mobile.webp" width="150" alt="Jigsaw (neregulat): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/jigsaw_en.webp" width="300" alt="Jigsaw (neregulat): Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/jigsaw_rules.webp" width="300" alt="Jigsaw (neregulat): Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="dg"></a>
#### 8. Grupuri disjuncte · Disjoint groups (`dg`)

**Aceeași poziție în casetă = grup.**

Pe lângă regulile clasice: toate celulele aflate pe aceeași poziție în casetele lor (de ex. toate colțurile din stânga-sus) conțin fiecare cifră o dată.

<table><tr><td align="center"><img src="../screens/dg_a.webp" width="300" alt="Grupuri disjuncte: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 28 indicii)</sub></td><td align="center"><img src="../screens/dg_b.webp" width="300" alt="Grupuri disjuncte: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 4, col. 8): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `dg-9-medium-3260982679` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dg_card.webp" width="200" alt="Grupuri disjuncte: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/dg_fiche.webp" width="260" alt="Grupuri disjuncte: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dg_s4.webp" width="200" alt="Grupuri disjuncte: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/dg_s6.webp" width="200" alt="Grupuri disjuncte: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/dg_s9.webp" width="200" alt="Grupuri disjuncte: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dg_easy.webp" width="200" alt="Grupuri disjuncte: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/dg_a.webp" width="200" alt="Grupuri disjuncte: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/dg_hard.webp" width="200" alt="Grupuri disjuncte: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dg_notes.webp" width="200" alt="Grupuri disjuncte: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/dg_check.webp" width="200" alt="Grupuri disjuncte: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/dg_solved.webp" width="200" alt="Grupuri disjuncte: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dg_dark.webp" width="200" alt="Grupuri disjuncte: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/dg_mobile.webp" width="150" alt="Grupuri disjuncte: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/dg_en.webp" width="300" alt="Grupuri disjuncte: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dg_rules.webp" width="300" alt="Grupuri disjuncte: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="center"></a>
#### 9. Puncte centrale · Centre dots (`center`)

**Cele nouă centre de casetă sunt distincte.**

Pe lângă regulile clasice, cele nouă celule centrale ale casetelor (marcate) conțin fiecare cifră o dată. Doar 9×9.

<table><tr><td align="center"><img src="../screens/center_a.webp" width="300" alt="Puncte centrale: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 28 indicii)</sub></td><td align="center"><img src="../screens/center_b.webp" width="300" alt="Puncte centrale: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 7, col. 7): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `center-9-medium-1216976528` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/center_card.webp" width="200" alt="Puncte centrale: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/center_fiche.webp" width="260" alt="Puncte centrale: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/center_s9.webp" width="200" alt="Puncte centrale: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/center_easy.webp" width="200" alt="Puncte centrale: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/center_a.webp" width="200" alt="Puncte centrale: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/center_hard.webp" width="200" alt="Puncte centrale: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/center_notes.webp" width="200" alt="Puncte centrale: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/center_check.webp" width="200" alt="Puncte centrale: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/center_solved.webp" width="200" alt="Puncte centrale: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/center_dark.webp" width="200" alt="Puncte centrale: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/center_mobile.webp" width="150" alt="Puncte centrale: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/center_en.webp" width="300" alt="Puncte centrale: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/center_rules.webp" width="300" alt="Puncte centrale: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="girandola"></a>
#### 10. Girandola · Girandola (`girandola`)

**Încă un grup de 9 celule în formă de morișcă.**

Pe lângă regulile clasice, cele nouă celule marcate (cele patru colțuri, centrul și cele patru celule aflate cu un pas înăuntru față de mijlocul fiecărei laturi: r2c5, r5c2, r5c8, r8c5) trebuie să conțină cifrele 1–9, fiecare o dată. Așa e descris Girandola în Regexp::Sudoku (forma de morișcă); alte surse nu dau coordonatele exacte. Doar 9×9.

<table><tr><td align="center"><img src="../screens/girandola_a.webp" width="300" alt="Girandola: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 28 indicii)</sub></td><td align="center"><img src="../screens/girandola_b.webp" width="300" alt="Girandola: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 1, col. 7): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `girandola-9-medium-2030539660` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/girandola_card.webp" width="200" alt="Girandola: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/girandola_fiche.webp" width="260" alt="Girandola: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/girandola_s9.webp" width="200" alt="Girandola: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/girandola_easy.webp" width="200" alt="Girandola: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/girandola_a.webp" width="200" alt="Girandola: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/girandola_hard.webp" width="200" alt="Girandola: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/girandola_notes.webp" width="200" alt="Girandola: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/girandola_check.webp" width="200" alt="Girandola: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/girandola_solved.webp" width="200" alt="Girandola: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/girandola_dark.webp" width="200" alt="Girandola: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/girandola_mobile.webp" width="150" alt="Girandola: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/girandola_en.webp" width="300" alt="Girandola: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/girandola_rules.webp" width="300" alt="Girandola: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="sparse9"></a>
#### 11. Nouă dispersate · Scattered nine (`sparse9`)

**Încă un grup de 9 celule: colțuri, mijloace de laturi, centru.**

Pe lângă regulile clasice, cele nouă celule marcate (cele patru colțuri, mijloacele celor patru laturi și celula centrală) trebuie să conțină cifrele 1–9, fiecare o dată. Aceasta era dispunerea numită anterior „Girandola” în această aplicație; nu am găsit-o publicată sub un nume. Doar 9×9.

<table><tr><td align="center"><img src="../screens/sparse9_a.webp" width="300" alt="Nouă dispersate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 28 indicii)</sub></td><td align="center"><img src="../screens/sparse9_b.webp" width="300" alt="Nouă dispersate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 5, col. 9): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `sparse9-9-medium-2353202148` (lipește-l în „Joc nou → Cod”) · efort solver: 3 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sparse9_card.webp" width="200" alt="Nouă dispersate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/sparse9_fiche.webp" width="260" alt="Nouă dispersate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sparse9_s9.webp" width="200" alt="Nouă dispersate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sparse9_easy.webp" width="200" alt="Nouă dispersate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/sparse9_a.webp" width="200" alt="Nouă dispersate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/sparse9_hard.webp" width="200" alt="Nouă dispersate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sparse9_notes.webp" width="200" alt="Nouă dispersate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/sparse9_check.webp" width="200" alt="Nouă dispersate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/sparse9_solved.webp" width="200" alt="Nouă dispersate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sparse9_dark.webp" width="200" alt="Nouă dispersate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/sparse9_mobile.webp" width="150" alt="Nouă dispersate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/sparse9_en.webp" width="300" alt="Nouă dispersate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sparse9_rules.webp" width="300" alt="Nouă dispersate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="asterisk"></a>
#### 12. Asterisk · Asterisk (`asterisk`)

**Un grup în formă de asterisc.**

Cele nouă celule marcate, dispuse ca un asterisc în jurul centrului (centrul, patru la distanță 3 pe orizontală și verticală, patru pe diagonale la distanță 2), trebuie să conțină cifrele 1–9, fiecare o dată, pe lângă regulile clasice. Doar 9×9.

<table><tr><td align="center"><img src="../screens/asterisk_a.webp" width="300" alt="Asterisk: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 28 indicii)</sub></td><td align="center"><img src="../screens/asterisk_b.webp" width="300" alt="Asterisk: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 8, col. 4): este singura celulă din coloana marcată unde poate sta 3.
- **Cod pentru același puzzle:** `asterisk-9-medium-1054724673` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/asterisk_card.webp" width="200" alt="Asterisk: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/asterisk_fiche.webp" width="260" alt="Asterisk: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/asterisk_s9.webp" width="200" alt="Asterisk: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/asterisk_easy.webp" width="200" alt="Asterisk: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/asterisk_a.webp" width="200" alt="Asterisk: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/asterisk_hard.webp" width="200" alt="Asterisk: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/asterisk_notes.webp" width="200" alt="Asterisk: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/asterisk_check.webp" width="200" alt="Asterisk: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/asterisk_solved.webp" width="200" alt="Asterisk: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/asterisk_dark.webp" width="200" alt="Asterisk: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/asterisk_mobile.webp" width="150" alt="Asterisk: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/asterisk_en.webp" width="300" alt="Asterisk: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/asterisk_rules.webp" width="300" alt="Asterisk: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="diag1"></a>
#### 13. Diagonală simplă · Single diagonal (`diag1`)

**Doar diagonala principală e specială.**

Diagonala principală (din stânga-sus în dreapta-jos) conține fiecare cifră exact o dată, pe lângă regulile clasice. Cealaltă diagonală nu are restricții.

<table><tr><td align="center"><img src="../screens/diag1_a.webp" width="300" alt="Diagonală simplă: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 29 indicii)</sub></td><td align="center"><img src="../screens/diag1_b.webp" width="300" alt="Diagonală simplă: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 7 (rând 2, col. 6): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `diag1-9-medium-1552751539` (lipește-l în „Joc nou → Cod”) · efort solver: 3 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag1_card.webp" width="200" alt="Diagonală simplă: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/diag1_fiche.webp" width="260" alt="Diagonală simplă: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag1_s4.webp" width="200" alt="Diagonală simplă: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/diag1_s6.webp" width="200" alt="Diagonală simplă: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/diag1_s9.webp" width="200" alt="Diagonală simplă: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag1_easy.webp" width="200" alt="Diagonală simplă: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/diag1_a.webp" width="200" alt="Diagonală simplă: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/diag1_hard.webp" width="200" alt="Diagonală simplă: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag1_notes.webp" width="200" alt="Diagonală simplă: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/diag1_check.webp" width="200" alt="Diagonală simplă: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/diag1_solved.webp" width="200" alt="Diagonală simplă: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag1_dark.webp" width="200" alt="Diagonală simplă: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/diag1_mobile.webp" width="150" alt="Diagonală simplă: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/diag1_en.webp" width="300" alt="Diagonală simplă: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diag1_rules.webp" width="300" alt="Diagonală simplă: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="clone"></a>
#### 14. Clone · Clone (`clone`)

**Zone identice conțin aceleași cifre.**

Două sau mai multe zone colorate la fel au aceeași formă și cifre identice în celulele corespunzătoare (după aceeași translație). Zonele nu se suprapun, iar celulele corespondente nu împart un rând, o coloană sau o casetă.

<table><tr><td align="center"><img src="../screens/clone_a.webp" width="300" alt="Clone: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/clone_b.webp" width="300" alt="Clone: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 5, col. 7): este singura celulă din rândul marcat unde poate sta 2.
- **Cod pentru același puzzle:** `clone-9-medium-3085084441` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clone_card.webp" width="200" alt="Clone: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/clone_fiche.webp" width="260" alt="Clone: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clone_s6.webp" width="200" alt="Clone: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/clone_s9.webp" width="200" alt="Clone: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clone_easy.webp" width="200" alt="Clone: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/clone_a.webp" width="200" alt="Clone: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/clone_hard.webp" width="200" alt="Clone: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clone_notes.webp" width="200" alt="Clone: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/clone_check.webp" width="200" alt="Clone: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/clone_solved.webp" width="200" alt="Clone: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clone_dark.webp" width="200" alt="Clone: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/clone_mobile.webp" width="150" alt="Clone: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/clone_en.webp" width="300" alt="Clone: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clone_rules.webp" width="300" alt="Clone: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="pandiag"></a>
#### 15. Pandiagonal · Pandiagonal (`pandiag`)

**Pătrat latin cu toate diagonalele rupte.**

Pătrat latin (fără casete) în care, în plus, toate diagonalele „rupte” (care se continuă pe margine, ca pe un tor) în ambele direcții conțin fiecare cifră o dată. Mărimile 5 și 7 (pentru 4, 6, 8, 9 nu există astfel de pătrate).

<table><tr><td align="center"><img src="../screens/pandiag_a.webp" width="300" alt="Pandiagonal: puzzle la start"><br><sub>Puzzle la start (5×5 · mediu · 6 indicii)</sub></td><td align="center"><img src="../screens/pandiag_b.webp" width="300" alt="Pandiagonal: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 1, col. 4): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `pandiag-5-medium-905286361` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pandiag_card.webp" width="200" alt="Pandiagonal: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/pandiag_fiche.webp" width="260" alt="Pandiagonal: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pandiag_s5.webp" width="200" alt="Pandiagonal: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../screens/pandiag_s7.webp" width="200" alt="Pandiagonal: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pandiag_easy.webp" width="200" alt="Pandiagonal: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/pandiag_a.webp" width="200" alt="Pandiagonal: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/pandiag_hard.webp" width="200" alt="Pandiagonal: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pandiag_notes.webp" width="200" alt="Pandiagonal: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/pandiag_check.webp" width="200" alt="Pandiagonal: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/pandiag_solved.webp" width="200" alt="Pandiagonal: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pandiag_dark.webp" width="200" alt="Pandiagonal: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/pandiag_mobile.webp" width="150" alt="Pandiagonal: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/pandiag_en.webp" width="300" alt="Pandiagonal: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pandiag_rules.webp" width="300" alt="Pandiagonal: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

