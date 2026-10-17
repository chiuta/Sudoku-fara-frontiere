# Catalog: Topologii și mutări fairy (9)

[← README](../../README.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · **Topologii și mutări fairy** · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Marginile grilei se lipesc după regula variantei; o celulă de pe margine are vecini și de partea opusă._

<a id="antibishop"></a>
#### 102. Anti-alfil · Anti-alfil (`antibishop`)

**Fără aceeași cifră la doi pași pe diagonală.**

Pe lângă regulile clasice, două celule aflate la exact doi pași pe diagonală (câte 2 rânduri și 2 coloane distanță, mutarea „alfil” din șahul fairy) nu pot conține aceeași cifră. Nu e alfilul glisant (acela ar impune diagonale întregi); e doar saltul de 2×2. Mărimi 9×9 și 6×6.

<table><tr><td align="center"><img src="../screens/antibishop_a.webp" width="300" alt="Anti-alfil: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/antibishop_b.webp" width="300" alt="Anti-alfil: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 7, col. 3): este singura celulă din rândul marcat unde poate sta 9.
- **Cod pentru același puzzle:** `antibishop-9-medium-4275501725` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antibishop_card.webp" width="200" alt="Anti-alfil: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/antibishop_fiche.webp" width="260" alt="Anti-alfil: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antibishop_s6.webp" width="200" alt="Anti-alfil: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/antibishop_s9.webp" width="200" alt="Anti-alfil: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antibishop_easy.webp" width="200" alt="Anti-alfil: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/antibishop_a.webp" width="200" alt="Anti-alfil: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/antibishop_hard.webp" width="200" alt="Anti-alfil: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antibishop_notes.webp" width="200" alt="Anti-alfil: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/antibishop_check.webp" width="200" alt="Anti-alfil: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/antibishop_solved.webp" width="200" alt="Anti-alfil: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antibishop_dark.webp" width="200" alt="Anti-alfil: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/antibishop_mobile.webp" width="150" alt="Anti-alfil: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/antibishop_en.webp" width="300" alt="Anti-alfil: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antibishop_rules.webp" width="300" alt="Anti-alfil: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="anticamel"></a>
#### 103. Anti-cămilă · Anti-camel (`anticamel`)

**Fără aceeași cifră la un salt de cămilă (1,3).**

Pe lângă regulile clasice, două celule la un salt de cămilă (1 rând și 3 coloane, sau 3 rânduri și 1 coloană) nu pot conține aceeași cifră. Doar 9×9.

<table><tr><td align="center"><img src="../screens/anticamel_a.webp" width="300" alt="Anti-cămilă: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/anticamel_b.webp" width="300" alt="Anti-cămilă: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 7 (rând 4, col. 5): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `anticamel-9-medium-634926365` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/anticamel_card.webp" width="200" alt="Anti-cămilă: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/anticamel_fiche.webp" width="260" alt="Anti-cămilă: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/anticamel_s9.webp" width="200" alt="Anti-cămilă: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/anticamel_easy.webp" width="200" alt="Anti-cămilă: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/anticamel_a.webp" width="200" alt="Anti-cămilă: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/anticamel_hard.webp" width="200" alt="Anti-cămilă: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/anticamel_notes.webp" width="200" alt="Anti-cămilă: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/anticamel_check.webp" width="200" alt="Anti-cămilă: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/anticamel_solved.webp" width="200" alt="Anti-cămilă: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/anticamel_dark.webp" width="200" alt="Anti-cămilă: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/anticamel_mobile.webp" width="150" alt="Anti-cămilă: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/anticamel_en.webp" width="300" alt="Anti-cămilă: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/anticamel_rules.webp" width="300" alt="Anti-cămilă: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="antizebra"></a>
#### 104. Anti-zebră · Anti-zebra (`antizebra`)

**Fără aceeași cifră la un salt de zebră (2,3).**

Pe lângă regulile clasice, două celule la un salt de zebră (2 rânduri și 3 coloane, sau 3 rânduri și 2 coloane) nu pot conține aceeași cifră. Doar 9×9.

<table><tr><td align="center"><img src="../screens/antizebra_a.webp" width="300" alt="Anti-zebră: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 26 indicii)</sub></td><td align="center"><img src="../screens/antizebra_b.webp" width="300" alt="Anti-zebră: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 1, col. 3): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `antizebra-9-medium-439216389` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antizebra_card.webp" width="200" alt="Anti-zebră: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/antizebra_fiche.webp" width="260" alt="Anti-zebră: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antizebra_s9.webp" width="200" alt="Anti-zebră: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antizebra_easy.webp" width="200" alt="Anti-zebră: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/antizebra_a.webp" width="200" alt="Anti-zebră: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/antizebra_hard.webp" width="200" alt="Anti-zebră: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antizebra_notes.webp" width="200" alt="Anti-zebră: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/antizebra_check.webp" width="200" alt="Anti-zebră: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/antizebra_solved.webp" width="200" alt="Anti-zebră: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antizebra_dark.webp" width="200" alt="Anti-zebră: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/antizebra_mobile.webp" width="150" alt="Anti-zebră: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/antizebra_en.webp" width="300" alt="Anti-zebră: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/antizebra_rules.webp" width="300" alt="Anti-zebră: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="torusking"></a>
#### 105. Tor anti-rege · Torus anti-king (`torusking`)

**Anti-rege pe o grilă care se închide ca un tor.**

Grila se continuă pe margini: marginea de sus se lipește de cea de jos, stânga de dreapta. Două celule vecine pe diagonală (mutare de rege), inclusiv peste margine, nu pot conține aceeași cifră (de ex. colțul din stânga-sus este vecin diagonal cu cel din dreapta-jos). Doar 9×9.

<table><tr><td align="center"><img src="../screens/torusking_a.webp" width="300" alt="Tor anti-rege: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/torusking_b.webp" width="300" alt="Tor anti-rege: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 5, col. 5): este singura celulă din rândul marcat unde poate sta 6.
- **Cod pentru același puzzle:** `torusking-9-medium-1622319202` (lipește-l în „Joc nou → Cod”) · efort solver: 17 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusking_card.webp" width="200" alt="Tor anti-rege: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/torusking_fiche.webp" width="260" alt="Tor anti-rege: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusking_s9.webp" width="200" alt="Tor anti-rege: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusking_easy.webp" width="200" alt="Tor anti-rege: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/torusking_a.webp" width="200" alt="Tor anti-rege: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/torusking_hard.webp" width="200" alt="Tor anti-rege: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusking_notes.webp" width="200" alt="Tor anti-rege: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/torusking_check.webp" width="200" alt="Tor anti-rege: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/torusking_solved.webp" width="200" alt="Tor anti-rege: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusking_dark.webp" width="200" alt="Tor anti-rege: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/torusking_mobile.webp" width="150" alt="Tor anti-rege: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/torusking_en.webp" width="300" alt="Tor anti-rege: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusking_rules.webp" width="300" alt="Tor anti-rege: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="torusknight"></a>
#### 106. Tor anti-cal · Torus anti-knight (`torusknight`)

**Anti-cal pe o grilă care se închide ca un tor.**

Grila se continuă pe margini (sus cu jos, stânga cu dreapta). Două celule la o mutare de cal, inclusiv peste margine, nu pot conține aceeași cifră. Doar 9×9.

<table><tr><td align="center"><img src="../screens/torusknight_a.webp" width="300" alt="Tor anti-cal: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/torusknight_b.webp" width="300" alt="Tor anti-cal: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 3, col. 6): este singura celulă din rândul marcat unde poate sta 5.
- **Cod pentru același puzzle:** `torusknight-9-medium-2092083509` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusknight_card.webp" width="200" alt="Tor anti-cal: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/torusknight_fiche.webp" width="260" alt="Tor anti-cal: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusknight_s9.webp" width="200" alt="Tor anti-cal: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusknight_easy.webp" width="200" alt="Tor anti-cal: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/torusknight_a.webp" width="200" alt="Tor anti-cal: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/torusknight_hard.webp" width="200" alt="Tor anti-cal: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusknight_notes.webp" width="200" alt="Tor anti-cal: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/torusknight_check.webp" width="200" alt="Tor anti-cal: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/torusknight_solved.webp" width="200" alt="Tor anti-cal: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusknight_dark.webp" width="200" alt="Tor anti-cal: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/torusknight_mobile.webp" width="150" alt="Tor anti-cal: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/torusknight_en.webp" width="300" alt="Tor anti-cal: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/torusknight_rules.webp" width="300" alt="Tor anti-cal: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="cylking"></a>
#### 107. Cilindru anti-rege · Cylinder anti-king (`cylking`)

**Stânga se lipește de dreapta; sus și jos rămân margini.**

Marginea din stânga se lipește de cea din dreapta, ca pe un cilindru; sus și jos nu se lipesc. Două celule la o mutare de rege (inclusiv peste lipitura stânga–dreapta) nu pot conține aceeași cifră. Doar 9×9.

<table><tr><td align="center"><img src="../screens/cylking_a.webp" width="300" alt="Cilindru anti-rege: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/cylking_b.webp" width="300" alt="Cilindru anti-rege: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 7, col. 5): este singura celulă din rândul marcat unde poate sta 8.
- **Cod pentru același puzzle:** `cylking-9-medium-3432982682` (lipește-l în „Joc nou → Cod”) · efort solver: 2 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cylking_card.webp" width="200" alt="Cilindru anti-rege: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/cylking_fiche.webp" width="260" alt="Cilindru anti-rege: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cylking_s9.webp" width="200" alt="Cilindru anti-rege: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cylking_easy.webp" width="200" alt="Cilindru anti-rege: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/cylking_a.webp" width="200" alt="Cilindru anti-rege: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/cylking_hard.webp" width="200" alt="Cilindru anti-rege: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cylking_notes.webp" width="200" alt="Cilindru anti-rege: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/cylking_check.webp" width="200" alt="Cilindru anti-rege: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/cylking_solved.webp" width="200" alt="Cilindru anti-rege: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cylking_dark.webp" width="200" alt="Cilindru anti-rege: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/cylking_mobile.webp" width="150" alt="Cilindru anti-rege: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/cylking_en.webp" width="300" alt="Cilindru anti-rege: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cylking_rules.webp" width="300" alt="Cilindru anti-rege: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="mobiusking"></a>
#### 108. Möbius anti-rege · Möbius anti-king (`mobiusking`)

**Stânga se lipește de dreapta cu o răsucire.**

Marginea din stânga se lipește de cea din dreapta cu o răsucire (rândul r se leagă de rândul 10−r), ca o bandă Möbius. Două celule la o mutare de rege, inclusiv peste lipitură, nu pot conține aceeași cifră. Doar 9×9. Convenția de lipire este cea descrisă aici.

<table><tr><td align="center"><img src="../screens/mobiusking_a.webp" width="300" alt="Möbius anti-rege: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/mobiusking_b.webp" width="300" alt="Möbius anti-rege: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 5, col. 2): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `mobiusking-9-medium-3019619418` (lipește-l în „Joc nou → Cod”) · efort solver: 4 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/mobiusking_card.webp" width="200" alt="Möbius anti-rege: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/mobiusking_fiche.webp" width="260" alt="Möbius anti-rege: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/mobiusking_s9.webp" width="200" alt="Möbius anti-rege: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/mobiusking_easy.webp" width="200" alt="Möbius anti-rege: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/mobiusking_a.webp" width="200" alt="Möbius anti-rege: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/mobiusking_hard.webp" width="200" alt="Möbius anti-rege: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/mobiusking_notes.webp" width="200" alt="Möbius anti-rege: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/mobiusking_check.webp" width="200" alt="Möbius anti-rege: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/mobiusking_solved.webp" width="200" alt="Möbius anti-rege: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/mobiusking_dark.webp" width="200" alt="Möbius anti-rege: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/mobiusking_mobile.webp" width="150" alt="Möbius anti-rege: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/mobiusking_en.webp" width="300" alt="Möbius anti-rege: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/mobiusking_rules.webp" width="300" alt="Möbius anti-rege: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="kleinking"></a>
#### 109. Klein anti-rege · Klein anti-king (`kleinking`)

**Sticlă Klein: stânga–dreapta cu răsucire, sus–jos simplu.**

Marginea din stânga se lipește de cea din dreapta cu o răsucire (rândul r se leagă de rândul 10−r), iar sus se lipește de jos fără răsucire — o sticlă Klein. Două celule la o mutare de rege, inclusiv peste lipituri, nu pot conține aceeași cifră. Doar 9×9. Convenția de lipire este cea descrisă aici.

<table><tr><td align="center"><img src="../screens/kleinking_a.webp" width="300" alt="Klein anti-rege: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/kleinking_b.webp" width="300" alt="Klein anti-rege: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 4, col. 8): este singura celulă din rândul marcat unde poate sta 8.
- **Cod pentru același puzzle:** `kleinking-9-medium-1542891122` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kleinking_card.webp" width="200" alt="Klein anti-rege: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/kleinking_fiche.webp" width="260" alt="Klein anti-rege: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kleinking_s9.webp" width="200" alt="Klein anti-rege: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kleinking_easy.webp" width="200" alt="Klein anti-rege: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/kleinking_a.webp" width="200" alt="Klein anti-rege: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/kleinking_hard.webp" width="200" alt="Klein anti-rege: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kleinking_notes.webp" width="200" alt="Klein anti-rege: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/kleinking_check.webp" width="200" alt="Klein anti-rege: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/kleinking_solved.webp" width="200" alt="Klein anti-rege: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kleinking_dark.webp" width="200" alt="Klein anti-rege: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/kleinking_mobile.webp" width="150" alt="Klein anti-rege: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/kleinking_en.webp" width="300" alt="Klein anti-rege: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kleinking_rules.webp" width="300" alt="Klein anti-rege: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="projking"></a>
#### 110. Plan proiectiv anti-rege · Projective-plane anti-king (`projking`)

**Ambele perechi de margini se lipesc cu răsucire.**

Stânga se lipește de dreapta cu răsucire (rândul r cu 10−r) și sus de jos cu răsucire (coloana c cu 10−c): un plan proiectiv real. Două celule la o mutare de rege, inclusiv peste lipituri, nu pot conține aceeași cifră. Doar 9×9. Convenția de lipire este cea descrisă aici.

<table><tr><td align="center"><img src="../screens/projking_a.webp" width="300" alt="Plan proiectiv anti-rege: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/projking_b.webp" width="300" alt="Plan proiectiv anti-rege: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 6, col. 6): este singura celulă din rândul marcat unde poate sta 1.
- **Cod pentru același puzzle:** `projking-9-medium-1483663755` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/projking_card.webp" width="200" alt="Plan proiectiv anti-rege: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/projking_fiche.webp" width="260" alt="Plan proiectiv anti-rege: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/projking_s9.webp" width="200" alt="Plan proiectiv anti-rege: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/projking_easy.webp" width="200" alt="Plan proiectiv anti-rege: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/projking_a.webp" width="200" alt="Plan proiectiv anti-rege: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/projking_hard.webp" width="200" alt="Plan proiectiv anti-rege: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/projking_notes.webp" width="200" alt="Plan proiectiv anti-rege: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/projking_check.webp" width="200" alt="Plan proiectiv anti-rege: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/projking_solved.webp" width="200" alt="Plan proiectiv anti-rege: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/projking_dark.webp" width="200" alt="Plan proiectiv anti-rege: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/projking_mobile.webp" width="150" alt="Plan proiectiv anti-rege: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/projking_en.webp" width="300" alt="Plan proiectiv anti-rege: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/projking_rules.webp" width="300" alt="Plan proiectiv anti-rege: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

