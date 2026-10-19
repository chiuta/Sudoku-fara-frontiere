# Catalog: Indicii în celule (11)

[English](en/12-indicii-in-celule.md) · **Română** · [Français](fr/12-indicii-in-celule.md) · [Italiano](it/12-indicii-in-celule.md) · [Español](es/12-indicii-in-celule.md) · [Português](pt/12-indicii-in-celule.md) · [Deutsch](de/12-indicii-in-celule.md) · [Magyar](hu/12-indicii-in-celule.md)

[← README](../../README.ro.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · **Indicii în celule** · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Indicii desenate direct în celule sau pe grupuri de celule; vezi fișa pentru semnificația fiecărui semn._

<a id="relief"></a>
#### 121. Relief · Relief (`relief`)

**Câți vecini sunt mai mici.**

Pe lângă regulile clasice, un număr într-o celulă marcată arată câți dintre cei patru vecini ortogonali conțin o cifră mai mică decât cifra acelei celule. Cifra celulei rămâne de aflat.

<table><tr><td align="center"><img src="../screens/relief_a.webp" width="300" alt="Relief: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/relief_b.webp" width="300" alt="Relief: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 1, col. 2): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `relief-9-medium-2696294536` (lipește-l în „Joc nou → Cod”) · efort solver: 56 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/relief_card.webp" width="200" alt="Relief: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/relief_fiche.webp" width="260" alt="Relief: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/relief_s4.webp" width="200" alt="Relief: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/relief_s6.webp" width="200" alt="Relief: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/relief_s9.webp" width="200" alt="Relief: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/relief_easy.webp" width="200" alt="Relief: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/relief_a.webp" width="200" alt="Relief: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/relief_hard.webp" width="200" alt="Relief: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/relief_notes.webp" width="200" alt="Relief: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/relief_check.webp" width="200" alt="Relief: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/relief_solved.webp" width="200" alt="Relief: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/relief_dark.webp" width="200" alt="Relief: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/relief_mobile.webp" width="150" alt="Relief: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/relief_en.webp" width="300" alt="Relief: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/relief_rules.webp" width="300" alt="Relief: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="oddsweeper"></a>
#### 122. Mine impare · Odd-sweeper (`oddsweeper`)

**Câți din cei 8 vecini sunt impari.**

Pe lângă regulile clasice, un număr într-o celulă marcată arată câți dintre cei opt vecini (diagonalele incluse) conțin cifre impare, ca într-un joc de deminare. Cifra celulei rămâne de aflat.

<table><tr><td align="center"><img src="../screens/oddsweeper_a.webp" width="300" alt="Mine impare: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/oddsweeper_b.webp" width="300" alt="Mine impare: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 8, col. 3): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `oddsweeper-9-medium-964916310` (lipește-l în „Joc nou → Cod”) · efort solver: 1219 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddsweeper_card.webp" width="200" alt="Mine impare: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_fiche.webp" width="260" alt="Mine impare: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddsweeper_s4.webp" width="200" alt="Mine impare: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_s6.webp" width="200" alt="Mine impare: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_s9.webp" width="200" alt="Mine impare: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddsweeper_easy.webp" width="200" alt="Mine impare: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_a.webp" width="200" alt="Mine impare: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_hard.webp" width="200" alt="Mine impare: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddsweeper_notes.webp" width="200" alt="Mine impare: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_check.webp" width="200" alt="Mine impare: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_solved.webp" width="200" alt="Mine impare: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddsweeper_dark.webp" width="200" alt="Mine impare: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_mobile.webp" width="150" alt="Mine impare: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/oddsweeper_en.webp" width="300" alt="Mine impare: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddsweeper_rules.webp" width="300" alt="Mine impare: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="compass"></a>
#### 123. Busolă · Compass (`compass`)

**Săgeata arată spre cel mai mare vecin.**

Pe lângă regulile clasice, o săgeată într-o celulă marcată arată spre cel mai mare dintre cei opt vecini ai ei (strict mai mare decât toți ceilalți vecini). Cifra celulei însăși nu se compară; la margine contează doar vecinii existenți.

<table><tr><td align="center"><img src="../screens/compass_a.webp" width="300" alt="Busolă: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/compass_b.webp" width="300" alt="Busolă: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 8, col. 5): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `compass-9-medium-1055457902` (lipește-l în „Joc nou → Cod”) · efort solver: 1321 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/compass_card.webp" width="200" alt="Busolă: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/compass_fiche.webp" width="260" alt="Busolă: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/compass_s4.webp" width="200" alt="Busolă: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/compass_s6.webp" width="200" alt="Busolă: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/compass_s9.webp" width="200" alt="Busolă: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/compass_easy.webp" width="200" alt="Busolă: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/compass_a.webp" width="200" alt="Busolă: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/compass_hard.webp" width="200" alt="Busolă: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/compass_notes.webp" width="200" alt="Busolă: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/compass_check.webp" width="200" alt="Busolă: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/compass_solved.webp" width="200" alt="Busolă: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/compass_dark.webp" width="200" alt="Busolă: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/compass_mobile.webp" width="150" alt="Busolă: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/compass_en.webp" width="300" alt="Busolă: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/compass_rules.webp" width="300" alt="Busolă: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="quadsum"></a>
#### 124. Sumă în pătrat · Quad sum (`quadsum`)

**Suma unui bloc 2×2.**

Pe lângă regulile clasice, un număr la intersecția a patru celule este suma celor patru cifre (cifrele pot repeta, deoarece blocul poate atinge două sau patru casete).

<table><tr><td align="center"><img src="../screens/quadsum_a.webp" width="300" alt="Sumă în pătrat: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/quadsum_b.webp" width="300" alt="Sumă în pătrat: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 1, col. 2): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `quadsum-9-medium-3898620671` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quadsum_card.webp" width="200" alt="Sumă în pătrat: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/quadsum_fiche.webp" width="260" alt="Sumă în pătrat: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quadsum_s4.webp" width="200" alt="Sumă în pătrat: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/quadsum_s6.webp" width="200" alt="Sumă în pătrat: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/quadsum_s9.webp" width="200" alt="Sumă în pătrat: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quadsum_easy.webp" width="200" alt="Sumă în pătrat: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/quadsum_a.webp" width="200" alt="Sumă în pătrat: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/quadsum_hard.webp" width="200" alt="Sumă în pătrat: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quadsum_notes.webp" width="200" alt="Sumă în pătrat: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/quadsum_check.webp" width="200" alt="Sumă în pătrat: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/quadsum_solved.webp" width="200" alt="Sumă în pătrat: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quadsum_dark.webp" width="200" alt="Sumă în pătrat: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/quadsum_mobile.webp" width="150" alt="Sumă în pătrat: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/quadsum_en.webp" width="300" alt="Sumă în pătrat: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quadsum_rules.webp" width="300" alt="Sumă în pătrat: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="stone"></a>
#### 125. Piatră 2×2 · Stone 2×2 (`stone`)

**Patru cifre diferite într-un bloc.**

Pe lângă regulile clasice, în fiecare bloc 2×2 marcat cu un pătrat cele patru cifre sunt toate diferite. Marcajele apar doar la blocuri care ating cel puțin două casete; un bloc nemarcat poate avea sau nu cifre diferite.

<table><tr><td align="center"><img src="../screens/stone_a.webp" width="300" alt="Piatră 2×2: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/stone_b.webp" width="300" alt="Piatră 2×2: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 9, col. 5): este singura celulă din coloana marcată unde poate sta 6.
- **Cod pentru același puzzle:** `stone-9-medium-1062674283` (lipește-l în „Joc nou → Cod”) · efort solver: 7 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/stone_card.webp" width="200" alt="Piatră 2×2: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/stone_fiche.webp" width="260" alt="Piatră 2×2: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/stone_s4.webp" width="200" alt="Piatră 2×2: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/stone_s6.webp" width="200" alt="Piatră 2×2: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/stone_s9.webp" width="200" alt="Piatră 2×2: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/stone_easy.webp" width="200" alt="Piatră 2×2: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/stone_a.webp" width="200" alt="Piatră 2×2: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/stone_hard.webp" width="200" alt="Piatră 2×2: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/stone_notes.webp" width="200" alt="Piatră 2×2: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/stone_check.webp" width="200" alt="Piatră 2×2: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/stone_solved.webp" width="200" alt="Piatră 2×2: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/stone_dark.webp" width="200" alt="Piatră 2×2: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/stone_mobile.webp" width="150" alt="Piatră 2×2: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/stone_en.webp" width="300" alt="Piatră 2×2: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/stone_rules.webp" width="300" alt="Piatră 2×2: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="domino"></a>
#### 126. Domino · Domino (`domino`)

**Placă de două celule cu cifre date.**

Pe lângă regulile clasice, o placă de domino acoperă două celule vecine și arată ce două cifre conțin (în orice ordine). Definiția aleasă aici este cea mai simplă; sursele diferă.

<table><tr><td align="center"><img src="../screens/domino_a.webp" width="300" alt="Domino: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/domino_b.webp" width="300" alt="Domino: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 1, col. 3): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `domino-9-medium-2561228437` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/domino_card.webp" width="200" alt="Domino: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/domino_fiche.webp" width="260" alt="Domino: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/domino_s4.webp" width="200" alt="Domino: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/domino_s6.webp" width="200" alt="Domino: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/domino_s9.webp" width="200" alt="Domino: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/domino_easy.webp" width="200" alt="Domino: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/domino_a.webp" width="200" alt="Domino: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/domino_hard.webp" width="200" alt="Domino: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/domino_notes.webp" width="200" alt="Domino: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/domino_check.webp" width="200" alt="Domino: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/domino_solved.webp" width="200" alt="Domino: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/domino_dark.webp" width="200" alt="Domino: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/domino_mobile.webp" width="150" alt="Domino: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/domino_en.webp" width="300" alt="Domino: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/domino_rules.webp" width="300" alt="Domino: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="pillsq"></a>
#### 127. Pastila pătrat perfect · Perfect-square pill (`pillsq`)

**Două cifre citite formează un pătrat perfect.**

Pe lângă regulile clasice, o pastilă acoperă două celule vecine; numărul de două cifre citit în sensul săgeții este un pătrat perfect (16, 25, 36, 49, 64 sau 81). Doar 9×9.

<table><tr><td align="center"><img src="../screens/pillsq_a.webp" width="300" alt="Pastila pătrat perfect: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 19 indicii)</sub></td><td align="center"><img src="../screens/pillsq_b.webp" width="300" alt="Pastila pătrat perfect: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 1, col. 7): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `pillsq-9-medium-2681486728` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pillsq_card.webp" width="200" alt="Pastila pătrat perfect: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/pillsq_fiche.webp" width="260" alt="Pastila pătrat perfect: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pillsq_s9.webp" width="200" alt="Pastila pătrat perfect: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pillsq_easy.webp" width="200" alt="Pastila pătrat perfect: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/pillsq_a.webp" width="200" alt="Pastila pătrat perfect: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/pillsq_hard.webp" width="200" alt="Pastila pătrat perfect: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pillsq_notes.webp" width="200" alt="Pastila pătrat perfect: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/pillsq_check.webp" width="200" alt="Pastila pătrat perfect: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/pillsq_solved.webp" width="200" alt="Pastila pătrat perfect: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pillsq_dark.webp" width="200" alt="Pastila pătrat perfect: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/pillsq_mobile.webp" width="150" alt="Pastila pătrat perfect: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/pillsq_en.webp" width="300" alt="Pastila pătrat perfect: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/pillsq_rules.webp" width="300" alt="Pastila pătrat perfect: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="primecage"></a>
#### 128. Cușcă primă · Prime cage (`primecage`)

**Cifre diferite cu suma număr prim.**

Pe lângă regulile clasice, cifrele din fiecare cușcă punctată sunt diferite, iar suma lor este un număr prim (suma nu este afișată; cuștile sunt marcate cu P).

<table><tr><td align="center"><img src="../screens/primecage_a.webp" width="300" alt="Cușcă primă: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/primecage_b.webp" width="300" alt="Cușcă primă: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 2, col. 9): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `primecage-9-medium-4252411907` (lipește-l în „Joc nou → Cod”) · efort solver: 3 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/primecage_card.webp" width="200" alt="Cușcă primă: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/primecage_fiche.webp" width="260" alt="Cușcă primă: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/primecage_s6.webp" width="200" alt="Cușcă primă: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/primecage_s9.webp" width="200" alt="Cușcă primă: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/primecage_easy.webp" width="200" alt="Cușcă primă: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/primecage_a.webp" width="200" alt="Cușcă primă: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/primecage_hard.webp" width="200" alt="Cușcă primă: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/primecage_notes.webp" width="200" alt="Cușcă primă: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/primecage_check.webp" width="200" alt="Cușcă primă: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/primecage_solved.webp" width="200" alt="Cușcă primă: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/primecage_dark.webp" width="200" alt="Cușcă primă: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/primecage_mobile.webp" width="150" alt="Cușcă primă: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/primecage_en.webp" width="300" alt="Cușcă primă: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/primecage_rules.webp" width="300" alt="Cușcă primă: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="balcage"></a>
#### 129. Cușcă echilibrată · Balanced cage (`balcage`)

**Suma este egală cu produsul.**

Pe lângă regulile clasice, în fiecare cușcă marcată Σ=Π suma cifrelor este egală cu produsul lor (cifrele pot repeta; de ex. 1+2+3 = 1·2·3).

<table><tr><td align="center"><img src="../screens/balcage_a.webp" width="300" alt="Cușcă echilibrată: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/balcage_b.webp" width="300" alt="Cușcă echilibrată: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 5, col. 2): este singura celulă din rândul marcat unde poate sta 2.
- **Cod pentru același puzzle:** `balcage-9-medium-2755606647` (lipește-l în „Joc nou → Cod”) · efort solver: 223 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/balcage_card.webp" width="200" alt="Cușcă echilibrată: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/balcage_fiche.webp" width="260" alt="Cușcă echilibrată: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/balcage_s6.webp" width="200" alt="Cușcă echilibrată: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/balcage_s9.webp" width="200" alt="Cușcă echilibrată: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/balcage_easy.webp" width="200" alt="Cușcă echilibrată: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/balcage_a.webp" width="200" alt="Cușcă echilibrată: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/balcage_hard.webp" width="200" alt="Cușcă echilibrată: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/balcage_notes.webp" width="200" alt="Cușcă echilibrată: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/balcage_check.webp" width="200" alt="Cușcă echilibrată: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/balcage_solved.webp" width="200" alt="Cușcă echilibrată: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/balcage_dark.webp" width="200" alt="Cușcă echilibrată: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/balcage_mobile.webp" width="150" alt="Cușcă echilibrată: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/balcage_en.webp" width="300" alt="Cușcă echilibrată: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/balcage_rules.webp" width="300" alt="Cușcă echilibrată: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="doubler"></a>
#### 130. Dublatori · Doublers (`doubler`)

**Killer în care unele celule contează dublu.**

Ca la Killer (cifre diferite în cușcă, suma dată), dar o celulă marcată ×2 din cușcă se adună de două ori.

<table><tr><td align="center"><img src="../screens/doubler_a.webp" width="300" alt="Dublatori: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 10 indicii)</sub></td><td align="center"><img src="../screens/doubler_b.webp" width="300" alt="Dublatori: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 1, col. 4): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `doubler-9-medium-2563509363` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/doubler_card.webp" width="200" alt="Dublatori: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/doubler_fiche.webp" width="260" alt="Dublatori: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/doubler_s4.webp" width="200" alt="Dublatori: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/doubler_s6.webp" width="200" alt="Dublatori: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/doubler_s9.webp" width="200" alt="Dublatori: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/doubler_easy.webp" width="200" alt="Dublatori: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/doubler_a.webp" width="200" alt="Dublatori: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/doubler_hard.webp" width="200" alt="Dublatori: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/doubler_notes.webp" width="200" alt="Dublatori: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/doubler_check.webp" width="200" alt="Dublatori: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/doubler_solved.webp" width="200" alt="Dublatori: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/doubler_dark.webp" width="200" alt="Dublatori: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/doubler_mobile.webp" width="150" alt="Dublatori: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/doubler_en.webp" width="300" alt="Dublatori: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/doubler_rules.webp" width="300" alt="Dublatori: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="clonemir"></a>
#### 131. Clone în oglindă · Mirror clone (`clonemir`)

**Două forme identice, a doua în oglindă.**

Pe lângă regulile clasice, zonele colorate marcate cu aceeași literă au aceeași formă, a doua fiind răsturnată stânga–dreapta; celulele corespondente conțin aceeași cifră.

<table><tr><td align="center"><img src="../screens/clonemir_a.webp" width="300" alt="Clone în oglindă: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/clonemir_b.webp" width="300" alt="Clone în oglindă: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 2, col. 4): este singura celulă din rândul marcat unde poate sta 9.
- **Cod pentru același puzzle:** `clonemir-9-medium-3077784619` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clonemir_card.webp" width="200" alt="Clone în oglindă: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/clonemir_fiche.webp" width="260" alt="Clone în oglindă: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clonemir_s6.webp" width="200" alt="Clone în oglindă: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/clonemir_s9.webp" width="200" alt="Clone în oglindă: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clonemir_easy.webp" width="200" alt="Clone în oglindă: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/clonemir_a.webp" width="200" alt="Clone în oglindă: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/clonemir_hard.webp" width="200" alt="Clone în oglindă: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clonemir_notes.webp" width="200" alt="Clone în oglindă: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/clonemir_check.webp" width="200" alt="Clone în oglindă: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/clonemir_solved.webp" width="200" alt="Clone în oglindă: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clonemir_dark.webp" width="200" alt="Clone în oglindă: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/clonemir_mobile.webp" width="150" alt="Clone în oglindă: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/clonemir_en.webp" width="300" alt="Clone în oglindă: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clonemir_rules.webp" width="300" alt="Clone în oglindă: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

