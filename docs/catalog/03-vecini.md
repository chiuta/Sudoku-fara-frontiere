# Catalog: Vecini (4)

[English](en/03-vecini.md) · **Română** · [Français](fr/03-vecini.md) · [Italiano](it/03-vecini.md) · [Español](es/03-vecini.md) · [Português](pt/03-vecini.md) · [Deutsch](de/03-vecini.md) · [Magyar](hu/03-vecini.md)

[← README](../../README.ro.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · **Vecini** · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Regula spune care celule nu pot avea aceeași cifră sau cifre apropiate; conflictele se văd în roșu dacă „conflicte” e bifat._

<a id="antiknight"></a>
#### 16. Anti-cal · Anti-knight (`antiknight`)

**Fără aceeași cifră la o mutare de cal.**

Pe lângă regulile clasice, două celule aflate la o mutare de cal de șah nu pot conține aceeași cifră. Doar 9×9.

<table><tr><td align="center"><img src="../screens/antiknight_a.webp" width="300" alt="Anti-cal: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/antiknight_b.webp" width="300" alt="Anti-cal: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 4, col. 5): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `antiknight-9-medium-867238284` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiknight_card.webp" width="200" alt="Anti-cal: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/antiknight_fiche.webp" width="260" alt="Anti-cal: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiknight_s9.webp" width="200" alt="Anti-cal: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiknight_easy.webp" width="200" alt="Anti-cal: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/antiknight_a.webp" width="200" alt="Anti-cal: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/antiknight_hard.webp" width="200" alt="Anti-cal: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiknight_notes.webp" width="200" alt="Anti-cal: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/antiknight_check.webp" width="200" alt="Anti-cal: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/antiknight_solved.webp" width="200" alt="Anti-cal: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiknight_dark.webp" width="200" alt="Anti-cal: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/antiknight_mobile.webp" width="150" alt="Anti-cal: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/antiknight_en.webp" width="300" alt="Anti-cal: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiknight_rules.webp" width="300" alt="Anti-cal: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="antiking"></a>
#### 17. Anti-rege · Anti-king (`antiking`)

**Vecinii diagonali diferă.**

Pe lângă regulile clasice, două celule vecine pe diagonală (mutare de rege) nu pot conține aceeași cifră. Doar 9×9.

<table><tr><td align="center"><img src="../screens/antiking_a.webp" width="300" alt="Anti-rege: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/antiking_b.webp" width="300" alt="Anti-rege: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 1, col. 2): este singura celulă din coloana marcată unde poate sta 2.
- **Cod pentru același puzzle:** `antiking-9-medium-1002649182` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiking_card.webp" width="200" alt="Anti-rege: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/antiking_fiche.webp" width="260" alt="Anti-rege: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiking_s9.webp" width="200" alt="Anti-rege: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiking_easy.webp" width="200" alt="Anti-rege: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/antiking_a.webp" width="200" alt="Anti-rege: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/antiking_hard.webp" width="200" alt="Anti-rege: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiking_notes.webp" width="200" alt="Anti-rege: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/antiking_check.webp" width="200" alt="Anti-rege: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/antiking_solved.webp" width="200" alt="Anti-rege: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiking_dark.webp" width="200" alt="Anti-rege: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/antiking_mobile.webp" width="150" alt="Anti-rege: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/antiking_en.webp" width="300" alt="Anti-rege: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antiking_rules.webp" width="300" alt="Anti-rege: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="nonconsec"></a>
#### 18. Fără consecutive · Non-consecutive (`nonconsec`)

**Vecinii nu sunt consecutivi.**

Pe lângă regulile clasice, celulele vecine pe orizontală sau verticală nu pot conține cifre consecutive (de ex. 4 lângă 5). 9×9 și 6×6.

<table><tr><td align="center"><img src="../screens/nonconsec_a.webp" width="300" alt="Fără consecutive: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/nonconsec_b.webp" width="300" alt="Fără consecutive: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 3, col. 5): este singura celulă din rândul marcat unde poate sta 6.
- **Cod pentru același puzzle:** `nonconsec-9-medium-749961353` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nonconsec_card.webp" width="200" alt="Fără consecutive: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_fiche.webp" width="260" alt="Fără consecutive: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nonconsec_s6.webp" width="200" alt="Fără consecutive: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_s9.webp" width="200" alt="Fără consecutive: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nonconsec_easy.webp" width="200" alt="Fără consecutive: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_a.webp" width="200" alt="Fără consecutive: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_hard.webp" width="200" alt="Fără consecutive: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nonconsec_notes.webp" width="200" alt="Fără consecutive: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_check.webp" width="200" alt="Fără consecutive: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_solved.webp" width="200" alt="Fără consecutive: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nonconsec_dark.webp" width="200" alt="Fără consecutive: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_mobile.webp" width="150" alt="Fără consecutive: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/nonconsec_en.webp" width="300" alt="Fără consecutive: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/nonconsec_rules.webp" width="300" alt="Fără consecutive: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="miracle"></a>
#### 19. Miracol · Miracle (`miracle`)

**Anti-cal + anti-rege + fără consecutive.**

Toate cele trei restricții de mai sus, simultan. Varianta este extrem de restrictivă: puzzle-urile au foarte puține indicii date.

<table><tr><td align="center"><img src="../screens/miracle_a.webp" width="300" alt="Miracol: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 3 indicii)</sub></td><td align="center"><img src="../screens/miracle_b.webp" width="300" alt="Miracol: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 5, col. 4): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `miracle-9-medium-1546367855` (lipește-l în „Joc nou → Cod”) · efort solver: 113 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/miracle_card.webp" width="200" alt="Miracol: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/miracle_fiche.webp" width="260" alt="Miracol: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/miracle_s9.webp" width="200" alt="Miracol: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/miracle_easy.webp" width="200" alt="Miracol: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/miracle_a.webp" width="200" alt="Miracol: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/miracle_hard.webp" width="200" alt="Miracol: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/miracle_notes.webp" width="200" alt="Miracol: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/miracle_check.webp" width="200" alt="Miracol: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/miracle_solved.webp" width="200" alt="Miracol: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/miracle_dark.webp" width="200" alt="Miracol: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/miracle_mobile.webp" width="150" alt="Miracol: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/miracle_en.webp" width="300" alt="Miracol: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/miracle_rules.webp" width="300" alt="Miracol: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

