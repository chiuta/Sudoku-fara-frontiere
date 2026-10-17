# Catalog: Dimensiuni superioare (5)

[← README](../../README.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · **Dimensiuni superioare**

---


_Straturile sunt afișate ca felii de grilă; la cuburile 3D există și o „Vedere 3D” rotativă (tragi cu mausul)._

<a id="cube3"></a>
#### 132. Cub latin 3D · Latin cube 3D (`cube3`)

**Fiecare linie a cubului conține fiecare cifră o dată.**

Cubul N×N×N este desfășurat în N straturi așezate unul lângă altul (separate prin spațiu gol). Fiecare linie în oricare dintre cele trei direcții — rând în strat, coloană în strat, și „în adâncime” (aceeași poziție în toate straturile) — conține fiecare cifră o dată. Mărimi 4, 5, 6. Cubul e foarte rigid: la „Greu” rămân puține cifre date. Vizualizarea este pe straturi; poți comuta pe „Vedere 3D” (trage ca să rotești cubul, glisorul ascunde straturile din față; selectezi celule cu clic).

<table><tr><td align="center"><img src="../screens/cube3_a.webp" width="300" alt="Cub latin 3D: puzzle la start"><br><sub>Puzzle la start (4×4 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/cube3_b.webp" width="300" alt="Cub latin 3D: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 3, col. 3): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `cube3-4-medium-3792369668` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cube3_card.webp" width="200" alt="Cub latin 3D: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/cube3_fiche.webp" width="260" alt="Cub latin 3D: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cube3_s4.webp" width="200" alt="Cub latin 3D: mărimea 4"><br><sub>mărimea 4</sub></td><td align="center" valign="top"><img src="../screens/cube3_s5.webp" width="200" alt="Cub latin 3D: mărimea 5"><br><sub>mărimea 5</sub></td><td align="center" valign="top"><img src="../screens/cube3_s6.webp" width="200" alt="Cub latin 3D: mărimea 6"><br><sub>mărimea 6</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cube3_easy.webp" width="200" alt="Cub latin 3D: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/cube3_a.webp" width="200" alt="Cub latin 3D: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/cube3_hard.webp" width="200" alt="Cub latin 3D: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cube3_notes.webp" width="200" alt="Cub latin 3D: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/cube3_check.webp" width="200" alt="Cub latin 3D: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/cube3_solved.webp" width="200" alt="Cub latin 3D: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cube3_dark.webp" width="200" alt="Cub latin 3D: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/cube3_mobile.webp" width="150" alt="Cub latin 3D: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/cube3_en.webp" width="300" alt="Cub latin 3D: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cube3_rules.webp" width="300" alt="Cub latin 3D: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="cubebox"></a>
#### 133. Cub cu casete 2×2 · Cube with 2×2 boxes (`cubebox`)

**Cub latin 4×4×4 cu casete 2×2 în fiecare strat.**

Ca la Cubul latin 3D (4×4×4), dar în plus fiecare strat are patru casete 2×2 (conturate gros) care conțin fiecare cifră o dată: fiecare strat este deci un sudoku 4×4, iar liniile „în adâncime” conțin și ele fiecare cifră o dată. Doar 4×4×4.

<table><tr><td align="center"><img src="../screens/cubebox_a.webp" width="300" alt="Cub cu casete 2×2: puzzle la start"><br><sub>Puzzle la start (4×4 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/cubebox_b.webp" width="300" alt="Cub cu casete 2×2: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 1, col. 1): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `cubebox-4-medium-831564534` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cubebox_card.webp" width="200" alt="Cub cu casete 2×2: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/cubebox_fiche.webp" width="260" alt="Cub cu casete 2×2: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cubebox_s4.webp" width="200" alt="Cub cu casete 2×2: mărimea 4"><br><sub>mărimea 4</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cubebox_easy.webp" width="200" alt="Cub cu casete 2×2: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/cubebox_a.webp" width="200" alt="Cub cu casete 2×2: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/cubebox_hard.webp" width="200" alt="Cub cu casete 2×2: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cubebox_notes.webp" width="200" alt="Cub cu casete 2×2: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/cubebox_check.webp" width="200" alt="Cub cu casete 2×2: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/cubebox_solved.webp" width="200" alt="Cub cu casete 2×2: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cubebox_dark.webp" width="200" alt="Cub cu casete 2×2: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/cubebox_mobile.webp" width="150" alt="Cub cu casete 2×2: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/cubebox_en.webp" width="300" alt="Cub cu casete 2×2: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cubebox_rules.webp" width="300" alt="Cub cu casete 2×2: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="hyper4"></a>
#### 134. Hipercub 4D · Hypercube 4D (`hyper4`)

**Sudoku în patru dimensiuni.**

Hipercubul N×N×N×N este desfășurat ca o mozaică N×N de straturi N×N (primele două coordonate aleg stratul: rând și coloană de straturi). Fiecare linie pe oricare dintre cele patru axe conține fiecare cifră o dată. Mărimi 3 (81 celule) și 4 (256 celule). Foarte rigid: puține cifre date.

<table><tr><td align="center"><img src="../screens/hyper4_a.webp" width="300" alt="Hipercub 4D: puzzle la start"><br><sub>Puzzle la start (3×3 · mediu · 29 indicii)</sub></td><td align="center"><img src="../screens/hyper4_b.webp" width="300" alt="Hipercub 4D: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 2, col. 2): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `hyper4-3-medium-3877808544` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper4_card.webp" width="200" alt="Hipercub 4D: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/hyper4_fiche.webp" width="260" alt="Hipercub 4D: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper4_s3.webp" width="200" alt="Hipercub 4D: mărimea 3"><br><sub>mărimea 3</sub></td><td align="center" valign="top"><img src="../screens/hyper4_s4.webp" width="200" alt="Hipercub 4D: mărimea 4"><br><sub>mărimea 4</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper4_easy.webp" width="200" alt="Hipercub 4D: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/hyper4_a.webp" width="200" alt="Hipercub 4D: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/hyper4_hard.webp" width="200" alt="Hipercub 4D: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper4_notes.webp" width="200" alt="Hipercub 4D: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/hyper4_check.webp" width="200" alt="Hipercub 4D: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/hyper4_solved.webp" width="200" alt="Hipercub 4D: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper4_dark.webp" width="200" alt="Hipercub 4D: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/hyper4_mobile.webp" width="150" alt="Hipercub 4D: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/hyper4_en.webp" width="300" alt="Hipercub 4D: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper4_rules.webp" width="300" alt="Hipercub 4D: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="hyper5"></a>
#### 135. Hipercub 5D · Hypercube 5D (`hyper5`)

**Sudoku în cinci dimensiuni (3⁵ = 243 celule).**

Hipercubul 3×3×3×3×3 este desfășurat în trei mozaici 3×3 de straturi 3×3, așezate una lângă alta. Fiecare linie pe oricare dintre cele cinci axe conține fiecare cifră o dată. Foarte rigid: doar câteva cifre date; tabla este lată, așa că celulele sunt mici pe ecrane înguste.

<table><tr><td align="center"><img src="../screens/hyper5_a.webp" width="300" alt="Hipercub 5D: puzzle la start"><br><sub>Puzzle la start (3×3 · mediu · 87 indicii)</sub></td><td align="center"><img src="../screens/hyper5_b.webp" width="300" alt="Hipercub 5D: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 1, col. 5): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `hyper5-3-medium-2668497273` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper5_card.webp" width="200" alt="Hipercub 5D: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/hyper5_fiche.webp" width="260" alt="Hipercub 5D: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper5_s3.webp" width="200" alt="Hipercub 5D: mărimea 3"><br><sub>mărimea 3</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper5_easy.webp" width="200" alt="Hipercub 5D: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/hyper5_a.webp" width="200" alt="Hipercub 5D: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/hyper5_hard.webp" width="200" alt="Hipercub 5D: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper5_notes.webp" width="200" alt="Hipercub 5D: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/hyper5_check.webp" width="200" alt="Hipercub 5D: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/hyper5_solved.webp" width="200" alt="Hipercub 5D: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper5_dark.webp" width="200" alt="Hipercub 5D: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/hyper5_mobile.webp" width="150" alt="Hipercub 5D: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/hyper5_en.webp" width="300" alt="Hipercub 5D: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/hyper5_rules.webp" width="300" alt="Hipercub 5D: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="greco"></a>
#### 136. Greco-Latin (pătrate ortogonale) · Greco-Latin (orthogonal squares) (`greco`)

**Două pătrate latine suprapuse: fiecare pereche cifră–literă apare o dată.**

Două pătrate N×N alăturate: cel din stânga cu cifre, cel din dreapta cu litere (A, B, C…; la completare tasta „1/A” înseamnă cifra 1 în stânga sau litera A în dreapta). Fiecare rând și coloană din fiecare pătrat conține fiecare simbol o dată. În plus, cele două pătrate sunt ortogonale: dacă te uiți la aceeași poziție în ambele pătrate, perechea (cifră, literă) este diferită în toate cele N² poziții — fiecare pereche posibilă apare exact o dată. Mărimi 3, 4, 5, 7 (pentru 6 nu există astfel de perechi; 8 și 9 sunt omise pentru viteză). Cu 7×7 la „Greu” generarea poate dura cam 10–15 s.

<table><tr><td align="center"><img src="../screens/greco_a.webp" width="300" alt="Greco-Latin (pătrate ortogonale): puzzle la start"><br><sub>Puzzle la start (4×4 · mediu · 12 indicii)</sub></td><td align="center"><img src="../screens/greco_b.webp" width="300" alt="Greco-Latin (pătrate ortogonale): după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** D (rând 2, col. 9): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `greco-4-medium-3789110344` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greco_card.webp" width="200" alt="Greco-Latin (pătrate ortogonale): Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/greco_fiche.webp" width="260" alt="Greco-Latin (pătrate ortogonale): Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greco_s3.webp" width="200" alt="Greco-Latin (pătrate ortogonale): mărimea 3"><br><sub>mărimea 3</sub></td><td align="center" valign="top"><img src="../screens/greco_s4.webp" width="200" alt="Greco-Latin (pătrate ortogonale): mărimea 4"><br><sub>mărimea 4</sub></td><td align="center" valign="top"><img src="../screens/greco_s5.webp" width="200" alt="Greco-Latin (pătrate ortogonale): mărimea 5"><br><sub>mărimea 5</sub></td></tr>
<tr><td align="center" valign="top"><img src="../screens/greco_s7.webp" width="200" alt="Greco-Latin (pătrate ortogonale): mărimea 7"><br><sub>mărimea 7</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greco_easy.webp" width="200" alt="Greco-Latin (pătrate ortogonale): Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/greco_a.webp" width="200" alt="Greco-Latin (pătrate ortogonale): Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/greco_hard.webp" width="200" alt="Greco-Latin (pătrate ortogonale): Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greco_notes.webp" width="200" alt="Greco-Latin (pătrate ortogonale): Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/greco_check.webp" width="200" alt="Greco-Latin (pătrate ortogonale): „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/greco_solved.webp" width="200" alt="Greco-Latin (pătrate ortogonale): Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greco_dark.webp" width="200" alt="Greco-Latin (pătrate ortogonale): Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/greco_mobile.webp" width="150" alt="Greco-Latin (pătrate ortogonale): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/greco_en.webp" width="300" alt="Greco-Latin (pătrate ortogonale): Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greco_rules.webp" width="300" alt="Greco-Latin (pătrate ortogonale): Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>
