# Catalog: Rude apropiate (3)

[English](en/09-rude-apropiate.md) · **Română** · [Français](fr/09-rude-apropiate.md) · [Italiano](it/09-rude-apropiate.md) · [Español](es/09-rude-apropiate.md) · [Português](pt/09-rude-apropiate.md) · [Deutsch](de/09-rude-apropiate.md) · [Magyar](hu/09-rude-apropiate.md)

[← README](../../README.ro.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · **Rude apropiate** · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Rudă apropiată a Sudoku: citește fișa pentru ce se schimbă față de jocul clasic._

<a id="futoshiki"></a>
#### 99. Futoshiki · Futoshiki (`futoshiki`)

**Pătrat latin cu semne de inegalitate.**

Fiecare rând și coloană conțin cifrele 1–N o dată; semnele < și > dintre celule trebuie respectate. Rudă apropiată a sudoku-ului, fără casete.

<table><tr><td align="center"><img src="../screens/futoshiki_a.webp" width="300" alt="Futoshiki: puzzle la start"><br><sub>Puzzle la start (5×5 · mediu · 5 indicii)</sub></td><td align="center"><img src="../screens/futoshiki_b.webp" width="300" alt="Futoshiki: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 1, col. 2): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `futoshiki-5-medium-4235973107` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/futoshiki_card.webp" width="200" alt="Futoshiki: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_fiche.webp" width="260" alt="Futoshiki: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/futoshiki_s4.webp" width="200" alt="Futoshiki: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_s5.webp" width="200" alt="Futoshiki: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_s6.webp" width="200" alt="Futoshiki: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../screens/futoshiki_s7.webp" width="200" alt="Futoshiki: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/futoshiki_easy.webp" width="200" alt="Futoshiki: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_a.webp" width="200" alt="Futoshiki: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_hard.webp" width="200" alt="Futoshiki: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/futoshiki_notes.webp" width="200" alt="Futoshiki: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_check.webp" width="200" alt="Futoshiki: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_solved.webp" width="200" alt="Futoshiki: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/futoshiki_dark.webp" width="200" alt="Futoshiki: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_mobile.webp" width="150" alt="Futoshiki: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/futoshiki_en.webp" width="300" alt="Futoshiki: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/futoshiki_rules.webp" width="300" alt="Futoshiki: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="kenken"></a>
#### 100. KenKen (Calcudoku) · KenKen (Calcudoku) (`kenken`)

**Pătrat latin cu cuști aritmetice.**

Fiecare rând și coloană conțin cifrele 1–N o dată; fiecare cușcă are un rezultat și o operație (+, −, ×, ÷). Cifrele se pot repeta într-o cușcă dacă nu sunt pe același rând sau coloană.

<table><tr><td align="center"><img src="../screens/kenken_a.webp" width="300" alt="KenKen (Calcudoku): puzzle la start"><br><sub>Puzzle la start (5×5 · mediu · 1 indicii)</sub></td><td align="center"><img src="../screens/kenken_b.webp" width="300" alt="KenKen (Calcudoku): după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 1, col. 4): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `kenken-5-medium-3034946116` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kenken_card.webp" width="200" alt="KenKen (Calcudoku): Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/kenken_fiche.webp" width="260" alt="KenKen (Calcudoku): Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kenken_s4.webp" width="200" alt="KenKen (Calcudoku): 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/kenken_s5.webp" width="200" alt="KenKen (Calcudoku): 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../screens/kenken_s6.webp" width="200" alt="KenKen (Calcudoku): 6×6"><br><sub>6×6</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kenken_easy.webp" width="200" alt="KenKen (Calcudoku): Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/kenken_a.webp" width="200" alt="KenKen (Calcudoku): Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/kenken_hard.webp" width="200" alt="KenKen (Calcudoku): Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kenken_notes.webp" width="200" alt="KenKen (Calcudoku): Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/kenken_check.webp" width="200" alt="KenKen (Calcudoku): „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/kenken_solved.webp" width="200" alt="KenKen (Calcudoku): Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kenken_dark.webp" width="200" alt="KenKen (Calcudoku): Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/kenken_mobile.webp" width="150" alt="KenKen (Calcudoku): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/kenken_en.webp" width="300" alt="KenKen (Calcudoku): Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kenken_rules.webp" width="300" alt="KenKen (Calcudoku): Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="strimko"></a>
#### 101. Strimko · Strimko (`strimko`)

**Lanțuri în loc de casete.**

Fiecare rând, coloană și lanț (cercuri unite prin linii, conexe și pe diagonală) conține fiecare cifră exact o dată. Nu există casete. Mărimi 4–7.

<table><tr><td align="center"><img src="../screens/strimko_a.webp" width="300" alt="Strimko: puzzle la start"><br><sub>Puzzle la start (5×5 · mediu · 5 indicii)</sub></td><td align="center"><img src="../screens/strimko_b.webp" width="300" alt="Strimko: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 2, col. 1): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `strimko-5-medium-2938744326` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/strimko_card.webp" width="200" alt="Strimko: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/strimko_fiche.webp" width="260" alt="Strimko: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/strimko_s4.webp" width="200" alt="Strimko: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/strimko_s5.webp" width="200" alt="Strimko: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../screens/strimko_s6.webp" width="200" alt="Strimko: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../screens/strimko_s7.webp" width="200" alt="Strimko: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/strimko_easy.webp" width="200" alt="Strimko: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/strimko_a.webp" width="200" alt="Strimko: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/strimko_hard.webp" width="200" alt="Strimko: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/strimko_notes.webp" width="200" alt="Strimko: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/strimko_check.webp" width="200" alt="Strimko: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/strimko_solved.webp" width="200" alt="Strimko: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/strimko_dark.webp" width="200" alt="Strimko: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/strimko_mobile.webp" width="150" alt="Strimko: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/strimko_en.webp" width="300" alt="Strimko: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/strimko_rules.webp" width="300" alt="Strimko: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

