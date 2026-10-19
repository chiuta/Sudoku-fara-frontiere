# Catalog: Reguli globale (10)

[English](en/11-reguli-globale.md) · **Română** · [Français](fr/11-reguli-globale.md) · [Italiano](it/11-reguli-globale.md) · [Español](es/11-reguli-globale.md) · [Português](pt/11-reguli-globale.md) · [Deutsch](de/11-reguli-globale.md) · [Magyar](hu/11-reguli-globale.md)

[← README](../../README.ro.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · **Reguli globale** · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Regula privește întreaga grilă și, de regulă, nu are marcaje proprii; verifică-o cu „Verifică” sau urmărește conflictele._

<a id="symcomp"></a>
#### 111. Simetrie complementară · Complementary symmetry (`symcomp`)

**Celulele simetrice față de centru însumează N+1.**

Pe lângă regulile clasice, oricare două celule simetrice față de centrul grilei (rotire 180°) însumează N+1 (la 9×9: 10). Celula centrală este deci 5. Mărimi 9×9 și 4×4.

<table><tr><td align="center"><img src="../screens/symcomp_a.webp" width="300" alt="Simetrie complementară: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/symcomp_b.webp" width="300" alt="Simetrie complementară: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 5, col. 4): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `symcomp-9-medium-913346369` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symcomp_card.webp" width="200" alt="Simetrie complementară: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/symcomp_fiche.webp" width="260" alt="Simetrie complementară: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symcomp_s4.webp" width="200" alt="Simetrie complementară: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/symcomp_s9.webp" width="200" alt="Simetrie complementară: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symcomp_easy.webp" width="200" alt="Simetrie complementară: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/symcomp_a.webp" width="200" alt="Simetrie complementară: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/symcomp_hard.webp" width="200" alt="Simetrie complementară: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symcomp_notes.webp" width="200" alt="Simetrie complementară: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/symcomp_check.webp" width="200" alt="Simetrie complementară: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/symcomp_solved.webp" width="200" alt="Simetrie complementară: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symcomp_dark.webp" width="200" alt="Simetrie complementară: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/symcomp_mobile.webp" width="150" alt="Simetrie complementară: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/symcomp_en.webp" width="300" alt="Simetrie complementară: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symcomp_rules.webp" width="300" alt="Simetrie complementară: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="symparity"></a>
#### 112. Paritate simetrică · Symmetric parity (`symparity`)

**Celulele simetrice față de centru au aceeași paritate.**

Pe lângă regulile clasice, oricare două celule simetrice față de centrul grilei (rotire 180°) sunt ambele pare sau ambele impare.

<table><tr><td align="center"><img src="../screens/symparity_a.webp" width="300" alt="Paritate simetrică: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/symparity_b.webp" width="300" alt="Paritate simetrică: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 1, col. 1): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `symparity-9-medium-2361855335` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symparity_card.webp" width="200" alt="Paritate simetrică: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/symparity_fiche.webp" width="260" alt="Paritate simetrică: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symparity_s4.webp" width="200" alt="Paritate simetrică: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/symparity_s6.webp" width="200" alt="Paritate simetrică: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/symparity_s9.webp" width="200" alt="Paritate simetrică: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symparity_easy.webp" width="200" alt="Paritate simetrică: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/symparity_a.webp" width="200" alt="Paritate simetrică: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/symparity_hard.webp" width="200" alt="Paritate simetrică: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symparity_notes.webp" width="200" alt="Paritate simetrică: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/symparity_check.webp" width="200" alt="Paritate simetrică: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/symparity_solved.webp" width="200" alt="Paritate simetrică: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symparity_dark.webp" width="200" alt="Paritate simetrică: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/symparity_mobile.webp" width="150" alt="Paritate simetrică: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/symparity_en.webp" width="300" alt="Paritate simetrică: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/symparity_rules.webp" width="300" alt="Paritate simetrică: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="cgrav"></a>
#### 113. Centru de greutate · Centre of gravity (`cgrav`)

**Fiecare rând stă în echilibru ca un balansoar.**

Pe lângă regulile clasice, fiecare rând este în echilibru: dacă pozițiile se numerotează −4…+4 și fiecare cifră e o greutate, suma greutăților × pozițiilor este 0 (centrul de greutate este exact la mijloc). Doar 9×9; generarea poate dura câteva secunde la Ușor și până la ~20 s la Greu.

<table><tr><td align="center"><img src="../screens/cgrav_a.webp" width="300" alt="Centru de greutate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/cgrav_b.webp" width="300" alt="Centru de greutate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 1, col. 7): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `cgrav-9-medium-1954301562` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cgrav_card.webp" width="200" alt="Centru de greutate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/cgrav_fiche.webp" width="260" alt="Centru de greutate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cgrav_s9.webp" width="200" alt="Centru de greutate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cgrav_easy.webp" width="200" alt="Centru de greutate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/cgrav_a.webp" width="200" alt="Centru de greutate: Mediu"><br><sub>Mediu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cgrav_notes.webp" width="200" alt="Centru de greutate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/cgrav_check.webp" width="200" alt="Centru de greutate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/cgrav_solved.webp" width="200" alt="Centru de greutate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cgrav_dark.webp" width="200" alt="Centru de greutate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/cgrav_mobile.webp" width="150" alt="Centru de greutate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/cgrav_en.webp" width="300" alt="Centru de greutate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cgrav_rules.webp" width="300" alt="Centru de greutate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="lexrows"></a>
#### 114. Rânduri lexicografice · Lexicographic rows (`lexrows`)

**Rândurile cresc ca niște cuvinte (prima coloană: 1…N).**

Pe lângă regulile clasice, citind rândurile de sus în jos ca „cuvinte” de cifre, fiecare rând este strict mai mic lexicografic decât cel de dedesubt (se compară prima cifră diferită). Deoarece prima coloană conține cifre diferite, regula înseamnă de fapt că prima coloană, citită de sus în jos, este 1, 2, …, N.

<table><tr><td align="center"><img src="../screens/lexrows_a.webp" width="300" alt="Rânduri lexicografice: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/lexrows_b.webp" width="300" alt="Rânduri lexicografice: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 7, col. 6): este singura celulă din coloana marcată unde poate sta 3.
- **Cod pentru același puzzle:** `lexrows-9-medium-957311172` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lexrows_card.webp" width="200" alt="Rânduri lexicografice: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/lexrows_fiche.webp" width="260" alt="Rânduri lexicografice: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lexrows_s4.webp" width="200" alt="Rânduri lexicografice: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/lexrows_s6.webp" width="200" alt="Rânduri lexicografice: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/lexrows_s9.webp" width="200" alt="Rânduri lexicografice: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lexrows_easy.webp" width="200" alt="Rânduri lexicografice: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/lexrows_a.webp" width="200" alt="Rânduri lexicografice: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/lexrows_hard.webp" width="200" alt="Rânduri lexicografice: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lexrows_notes.webp" width="200" alt="Rânduri lexicografice: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/lexrows_check.webp" width="200" alt="Rânduri lexicografice: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/lexrows_solved.webp" width="200" alt="Rânduri lexicografice: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lexrows_dark.webp" width="200" alt="Rânduri lexicografice: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/lexrows_mobile.webp" width="150" alt="Rânduri lexicografice: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/lexrows_en.webp" width="300" alt="Rânduri lexicografice: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lexrows_rules.webp" width="300" alt="Rânduri lexicografice: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="extremes"></a>
#### 115. Extreme alăturate · Touching extremes (`extremes`)

**Minimul și maximul din casetă se ating.**

Pe lângă regulile clasice, în fiecare casetă cifrele 1 și N stau în celule vecine, inclusiv pe diagonală (mutare de rege). Convenția „inclusiv diagonală” este aleasă aici: cu vecini doar ortogonali nu există grile 9×9 (verificat exhaustiv).

<table><tr><td align="center"><img src="../screens/extremes_a.webp" width="300" alt="Extreme alăturate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/extremes_b.webp" width="300" alt="Extreme alăturate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 4, col. 4): este singura celulă din coloana marcată unde poate sta 6.
- **Cod pentru același puzzle:** `extremes-9-medium-1348183675` (lipește-l în „Joc nou → Cod”) · efort solver: 2 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/extremes_card.webp" width="200" alt="Extreme alăturate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/extremes_fiche.webp" width="260" alt="Extreme alăturate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/extremes_s4.webp" width="200" alt="Extreme alăturate: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/extremes_s6.webp" width="200" alt="Extreme alăturate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/extremes_s9.webp" width="200" alt="Extreme alăturate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/extremes_easy.webp" width="200" alt="Extreme alăturate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/extremes_a.webp" width="200" alt="Extreme alăturate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/extremes_hard.webp" width="200" alt="Extreme alăturate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/extremes_notes.webp" width="200" alt="Extreme alăturate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/extremes_check.webp" width="200" alt="Extreme alăturate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/extremes_solved.webp" width="200" alt="Extreme alăturate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/extremes_dark.webp" width="200" alt="Extreme alăturate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/extremes_mobile.webp" width="150" alt="Extreme alăturate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/extremes_en.webp" width="300" alt="Extreme alăturate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/extremes_rules.webp" width="300" alt="Extreme alăturate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="boxbalance"></a>
#### 116. Casete echilibrate · Balanced boxes (`boxbalance`)

**Prima și ultima coloană a casetei au aceeași sumă.**

Pe lângă regulile clasice, în fiecare casetă suma celor din coloana din stânga este egală cu suma celor din coloana din dreapta.

<table><tr><td align="center"><img src="../screens/boxbalance_a.webp" width="300" alt="Casete echilibrate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/boxbalance_b.webp" width="300" alt="Casete echilibrate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 6, col. 4): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `boxbalance-9-medium-1668427631` (lipește-l în „Joc nou → Cod”) · efort solver: 314 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/boxbalance_card.webp" width="200" alt="Casete echilibrate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_fiche.webp" width="260" alt="Casete echilibrate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/boxbalance_s4.webp" width="200" alt="Casete echilibrate: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_s6.webp" width="200" alt="Casete echilibrate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_s9.webp" width="200" alt="Casete echilibrate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/boxbalance_easy.webp" width="200" alt="Casete echilibrate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_a.webp" width="200" alt="Casete echilibrate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_hard.webp" width="200" alt="Casete echilibrate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/boxbalance_notes.webp" width="200" alt="Casete echilibrate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_check.webp" width="200" alt="Casete echilibrate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_solved.webp" width="200" alt="Casete echilibrate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/boxbalance_dark.webp" width="200" alt="Casete echilibrate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_mobile.webp" width="150" alt="Casete echilibrate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/boxbalance_en.webp" width="300" alt="Casete echilibrate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/boxbalance_rules.webp" width="300" alt="Casete echilibrate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="lonely5"></a>
#### 117. Cincele singuratic · Lonely 5 (`lonely5`)

**Un 5 are doar vecini pari.**

Pe lângă regulile clasice, orice 5 are numai vecini ortogonali pari. Mărimi 9×9 și 6×6.

<table><tr><td align="center"><img src="../screens/lonely5_a.webp" width="300" alt="Cincele singuratic: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/lonely5_b.webp" width="300" alt="Cincele singuratic: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 5, col. 3): este singura celulă din rândul marcat unde poate sta 2.
- **Cod pentru același puzzle:** `lonely5-9-medium-4284537212` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lonely5_card.webp" width="200" alt="Cincele singuratic: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/lonely5_fiche.webp" width="260" alt="Cincele singuratic: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lonely5_s6.webp" width="200" alt="Cincele singuratic: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/lonely5_s9.webp" width="200" alt="Cincele singuratic: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lonely5_easy.webp" width="200" alt="Cincele singuratic: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/lonely5_a.webp" width="200" alt="Cincele singuratic: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/lonely5_hard.webp" width="200" alt="Cincele singuratic: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lonely5_notes.webp" width="200" alt="Cincele singuratic: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/lonely5_check.webp" width="200" alt="Cincele singuratic: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/lonely5_solved.webp" width="200" alt="Cincele singuratic: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lonely5_dark.webp" width="200" alt="Cincele singuratic: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/lonely5_mobile.webp" width="150" alt="Cincele singuratic: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/lonely5_en.webp" width="300" alt="Cincele singuratic: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/lonely5_rules.webp" width="300" alt="Cincele singuratic: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="nolonely"></a>
#### 118. Fără celule singure · No lonely cells (`nolonely`)

**Fiecare celulă are un vecin consecutiv.**

Pe lângă regulile clasice, fiecare celulă are cel puțin un vecin ortogonal a cărui cifră diferă cu exact 1.

<table><tr><td align="center"><img src="../screens/nolonely_a.webp" width="300" alt="Fără celule singure: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/nolonely_b.webp" width="300" alt="Fără celule singure: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 9, col. 9): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `nolonely-9-medium-355818888` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nolonely_card.webp" width="200" alt="Fără celule singure: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/nolonely_fiche.webp" width="260" alt="Fără celule singure: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nolonely_s4.webp" width="200" alt="Fără celule singure: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/nolonely_s6.webp" width="200" alt="Fără celule singure: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/nolonely_s9.webp" width="200" alt="Fără celule singure: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nolonely_easy.webp" width="200" alt="Fără celule singure: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/nolonely_a.webp" width="200" alt="Fără celule singure: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/nolonely_hard.webp" width="200" alt="Fără celule singure: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nolonely_notes.webp" width="200" alt="Fără celule singure: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/nolonely_check.webp" width="200" alt="Fără celule singure: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/nolonely_solved.webp" width="200" alt="Fără celule singure: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nolonely_dark.webp" width="200" alt="Fără celule singure: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/nolonely_mobile.webp" width="150" alt="Fără celule singure: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/nolonely_en.webp" width="300" alt="Fără celule singure: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nolonely_rules.webp" width="300" alt="Fără celule singure: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="noprog"></a>
#### 119. Fără progresii · No arithmetic progressions (`noprog`)

**Trei cifre alăturate nu formează progresie aritmetică.**

Pe lângă regulile clasice, trei celule alăturate pe un rând sau pe o coloană nu pot forma o progresie aritmetică (de ex. 2-4-6 sau 7-5-3 sunt interzise).

<table><tr><td align="center"><img src="../screens/noprog_a.webp" width="300" alt="Fără progresii: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/noprog_b.webp" width="300" alt="Fără progresii: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 3, col. 7): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `noprog-9-medium-3644248957` (lipește-l în „Joc nou → Cod”) · efort solver: 6 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/noprog_card.webp" width="200" alt="Fără progresii: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/noprog_fiche.webp" width="260" alt="Fără progresii: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/noprog_s4.webp" width="200" alt="Fără progresii: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/noprog_s6.webp" width="200" alt="Fără progresii: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/noprog_s9.webp" width="200" alt="Fără progresii: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/noprog_easy.webp" width="200" alt="Fără progresii: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/noprog_a.webp" width="200" alt="Fără progresii: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/noprog_hard.webp" width="200" alt="Fără progresii: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/noprog_notes.webp" width="200" alt="Fără progresii: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/noprog_check.webp" width="200" alt="Fără progresii: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/noprog_solved.webp" width="200" alt="Fără progresii: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/noprog_dark.webp" width="200" alt="Fără progresii: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/noprog_mobile.webp" width="150" alt="Fără progresii: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/noprog_en.webp" width="300" alt="Fără progresii: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/noprog_rules.webp" width="300" alt="Fără progresii: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="semimagic"></a>
#### 120. Casete semi-magice · Semi-magic boxes (`semimagic`)

**Rândurile fiecărei casete însumează 15; la fel coloanele.**

Pe lângă regulile clasice, fiecare rând și fiecare coloană a fiecărei casete însumează 15. Casetele complet magice (cu diagonale) sunt imposibile, deoarece cele trei casete dintr-o bandă ar avea toate centrul 5 în același rând al grilei; de aceea diagonalele nu sunt constrânse. Doar 9×9 (la 4×4 rândurile și coloanele ar cere casete cu cifre repetate).

<table><tr><td align="center"><img src="../screens/semimagic_a.webp" width="300" alt="Casete semi-magice: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/semimagic_b.webp" width="300" alt="Casete semi-magice: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 5, col. 5): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `semimagic-9-medium-3291682902` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/semimagic_card.webp" width="200" alt="Casete semi-magice: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/semimagic_fiche.webp" width="260" alt="Casete semi-magice: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/semimagic_s9.webp" width="200" alt="Casete semi-magice: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/semimagic_easy.webp" width="200" alt="Casete semi-magice: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/semimagic_a.webp" width="200" alt="Casete semi-magice: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/semimagic_hard.webp" width="200" alt="Casete semi-magice: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/semimagic_notes.webp" width="200" alt="Casete semi-magice: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/semimagic_check.webp" width="200" alt="Casete semi-magice: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/semimagic_solved.webp" width="200" alt="Casete semi-magice: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/semimagic_dark.webp" width="200" alt="Casete semi-magice: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/semimagic_mobile.webp" width="150" alt="Casete semi-magice: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/semimagic_en.webp" width="300" alt="Casete semi-magice: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/semimagic_rules.webp" width="300" alt="Casete semi-magice: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

