# Catalog: Paritate, puncte, semne (18)

[← README](../../README.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · **Paritate, puncte, semne** · [Sume](05-sume.md) · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Semnele (puncte, cercuri, săgeți de comparație, dungi) sunt desenate între celule sau în celule; lipsa unui semn poate conta, vezi fișa._

<a id="evenodd"></a>
#### 20. Par–impar · Even–odd (`evenodd`)

**Pătrat = par, cerc = impar.**

Celulele marcate cu pătrat conțin cifre pare, cele marcate cu cerc cifre impare. Restul regulilor sunt clasice.

<table><tr><td align="center"><img src="../screens/evenodd_a.webp" width="300" alt="Par–impar: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/evenodd_b.webp" width="300" alt="Par–impar: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 1, col. 1): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `evenodd-9-medium-3539640574` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenodd_card.webp" width="200" alt="Par–impar: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/evenodd_fiche.webp" width="260" alt="Par–impar: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenodd_s4.webp" width="200" alt="Par–impar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/evenodd_s6.webp" width="200" alt="Par–impar: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/evenodd_s9.webp" width="200" alt="Par–impar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenodd_easy.webp" width="200" alt="Par–impar: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/evenodd_a.webp" width="200" alt="Par–impar: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/evenodd_hard.webp" width="200" alt="Par–impar: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenodd_notes.webp" width="200" alt="Par–impar: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/evenodd_check.webp" width="200" alt="Par–impar: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/evenodd_solved.webp" width="200" alt="Par–impar: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenodd_dark.webp" width="200" alt="Par–impar: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/evenodd_mobile.webp" width="150" alt="Par–impar: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/evenodd_en.webp" width="300" alt="Par–impar: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenodd_rules.webp" width="300" alt="Par–impar: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="kropki"></a>
#### 21. Kropki · Kropki (`kropki`)

**Puncte: consecutive sau dublu.**

Punct alb între două celule: cifrele sunt consecutive. Punct negru: una este dublul celeilalte. Lipsa punctului: nu sunt nici consecutive, nici în raport 1:2 (toate punctele sunt date).

<table><tr><td align="center"><img src="../screens/kropki_a.webp" width="300" alt="Kropki: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 13 indicii)</sub></td><td align="center"><img src="../screens/kropki_b.webp" width="300" alt="Kropki: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 1, col. 8): este singura celulă din rândul marcat unde poate sta 5.
- **Cod pentru același puzzle:** `kropki-9-medium-1974630355` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropki_card.webp" width="200" alt="Kropki: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/kropki_fiche.webp" width="260" alt="Kropki: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropki_s4.webp" width="200" alt="Kropki: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/kropki_s6.webp" width="200" alt="Kropki: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/kropki_s9.webp" width="200" alt="Kropki: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropki_easy.webp" width="200" alt="Kropki: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/kropki_a.webp" width="200" alt="Kropki: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/kropki_hard.webp" width="200" alt="Kropki: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropki_notes.webp" width="200" alt="Kropki: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/kropki_check.webp" width="200" alt="Kropki: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/kropki_solved.webp" width="200" alt="Kropki: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropki_dark.webp" width="200" alt="Kropki: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/kropki_mobile.webp" width="150" alt="Kropki: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/kropki_en.webp" width="300" alt="Kropki: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropki_rules.webp" width="300" alt="Kropki: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="consec"></a>
#### 22. Consecutiv · Consecutive (`consec`)

**Bară = consecutive; fără bară = nu.**

O bară între două celule înseamnă cifre consecutive. Unde nu e bară, cifrele vecine nu sunt consecutive.

<table><tr><td align="center"><img src="../screens/consec_a.webp" width="300" alt="Consecutiv: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 13 indicii)</sub></td><td align="center"><img src="../screens/consec_b.webp" width="300" alt="Consecutiv: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 1, col. 3): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `consec-9-medium-2731961495` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consec_card.webp" width="200" alt="Consecutiv: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/consec_fiche.webp" width="260" alt="Consecutiv: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consec_s4.webp" width="200" alt="Consecutiv: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/consec_s6.webp" width="200" alt="Consecutiv: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/consec_s9.webp" width="200" alt="Consecutiv: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consec_easy.webp" width="200" alt="Consecutiv: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/consec_a.webp" width="200" alt="Consecutiv: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/consec_hard.webp" width="200" alt="Consecutiv: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consec_notes.webp" width="200" alt="Consecutiv: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/consec_check.webp" width="200" alt="Consecutiv: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/consec_solved.webp" width="200" alt="Consecutiv: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consec_dark.webp" width="200" alt="Consecutiv: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/consec_mobile.webp" width="150" alt="Consecutiv: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/consec_en.webp" width="300" alt="Consecutiv: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consec_rules.webp" width="300" alt="Consecutiv: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="xv"></a>
#### 23. XV · XV (`xv`)

**X = suma 10, V = suma 5.**

X între două celule: suma lor este 10; V: suma este 5. Unde nu e semn, suma nu este nici 5, nici 10. Doar 9×9.

<table><tr><td align="center"><img src="../screens/xv_a.webp" width="300" alt="XV: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 15 indicii)</sub></td><td align="center"><img src="../screens/xv_b.webp" width="300" alt="XV: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 1, col. 4): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `xv-9-medium-3501341575` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xv_card.webp" width="200" alt="XV: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/xv_fiche.webp" width="260" alt="XV: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xv_s9.webp" width="200" alt="XV: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xv_easy.webp" width="200" alt="XV: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/xv_a.webp" width="200" alt="XV: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/xv_hard.webp" width="200" alt="XV: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xv_notes.webp" width="200" alt="XV: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/xv_check.webp" width="200" alt="XV: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/xv_solved.webp" width="200" alt="XV: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xv_dark.webp" width="200" alt="XV: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/xv_mobile.webp" width="150" alt="XV: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/xv_en.webp" width="300" alt="XV: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xv_rules.webp" width="300" alt="XV: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="greater"></a>
#### 24. Comparații · Greater-than (`greater`)

**Semne mai mare / mai mic.**

Semnul dintre două celule se deschide spre cifra mai mare.

<table><tr><td align="center"><img src="../screens/greater_a.webp" width="300" alt="Comparații: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/greater_b.webp" width="300" alt="Comparații: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 2, col. 1): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `greater-9-medium-4115358759` (lipește-l în „Joc nou → Cod”) · efort solver: 2 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greater_card.webp" width="200" alt="Comparații: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/greater_fiche.webp" width="260" alt="Comparații: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greater_s4.webp" width="200" alt="Comparații: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/greater_s6.webp" width="200" alt="Comparații: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/greater_s9.webp" width="200" alt="Comparații: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greater_easy.webp" width="200" alt="Comparații: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/greater_a.webp" width="200" alt="Comparații: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/greater_hard.webp" width="200" alt="Comparații: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greater_notes.webp" width="200" alt="Comparații: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/greater_check.webp" width="200" alt="Comparații: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/greater_solved.webp" width="200" alt="Comparații: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greater_dark.webp" width="200" alt="Comparații: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/greater_mobile.webp" width="150" alt="Comparații: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/greater_en.webp" width="300" alt="Comparații: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/greater_rules.webp" width="300" alt="Comparații: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="batt"></a>
#### 25. Battenburg · Battenburg (`batt`)

**Paritate în șah pe un 2×2.**

Un marcaj în patru pătrate la intersecția a patru celule înseamnă că parități alternează ca pe o tablă de șah (două pare și două impare, pe diagonale). La intersecțiile nemarcate paritățile nu formează un asemenea model.

<table><tr><td align="center"><img src="../screens/batt_a.webp" width="300" alt="Battenburg: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 19 indicii)</sub></td><td align="center"><img src="../screens/batt_b.webp" width="300" alt="Battenburg: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 4, col. 5): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `batt-9-medium-2595666856` (lipește-l în „Joc nou → Cod”) · efort solver: 50 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/batt_card.webp" width="200" alt="Battenburg: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/batt_fiche.webp" width="260" alt="Battenburg: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/batt_s4.webp" width="200" alt="Battenburg: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/batt_s6.webp" width="200" alt="Battenburg: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/batt_s9.webp" width="200" alt="Battenburg: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/batt_easy.webp" width="200" alt="Battenburg: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/batt_a.webp" width="200" alt="Battenburg: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/batt_hard.webp" width="200" alt="Battenburg: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/batt_notes.webp" width="200" alt="Battenburg: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/batt_check.webp" width="200" alt="Battenburg: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/batt_solved.webp" width="200" alt="Battenburg: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/batt_dark.webp" width="200" alt="Battenburg: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/batt_mobile.webp" width="150" alt="Battenburg: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/batt_en.webp" width="300" alt="Battenburg: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/batt_rules.webp" width="300" alt="Battenburg: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="quad"></a>
#### 26. Cvadruple · Quadruples (`quad`)

**Cercuri cu cifrele din 2×2.**

Un cerc la intersecția a patru celule enumeră cifre care apar printre cele patru celule (cu repetări, dacă sunt repetate în cerc).

<table><tr><td align="center"><img src="../screens/quad_a.webp" width="300" alt="Cvadruple: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 19 indicii)</sub></td><td align="center"><img src="../screens/quad_b.webp" width="300" alt="Cvadruple: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 3, col. 4): este singura celulă din rândul marcat unde poate sta 4.
- **Cod pentru același puzzle:** `quad-9-medium-2215314964` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quad_card.webp" width="200" alt="Cvadruple: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/quad_fiche.webp" width="260" alt="Cvadruple: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quad_s4.webp" width="200" alt="Cvadruple: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/quad_s6.webp" width="200" alt="Cvadruple: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/quad_s9.webp" width="200" alt="Cvadruple: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quad_easy.webp" width="200" alt="Cvadruple: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/quad_a.webp" width="200" alt="Cvadruple: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/quad_hard.webp" width="200" alt="Cvadruple: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quad_notes.webp" width="200" alt="Cvadruple: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/quad_check.webp" width="200" alt="Cvadruple: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/quad_solved.webp" width="200" alt="Cvadruple: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quad_dark.webp" width="200" alt="Cvadruple: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/quad_mobile.webp" width="150" alt="Cvadruple: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/quad_en.webp" width="300" alt="Cvadruple: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/quad_rules.webp" width="300" alt="Cvadruple: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="evenonly"></a>
#### 27. Doar pare marcate · Marked evens only (`evenonly`)

**Celulele umbrite sunt pare.**

Fiecare celulă marcată cu pătrat gri conține o cifră pară. Celulele nemarcate nu sunt spuse: pot fi orice. Diferă de Par–impar, unde sunt marcate ambele tipuri.

<table><tr><td align="center"><img src="../screens/evenonly_a.webp" width="300" alt="Doar pare marcate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/evenonly_b.webp" width="300" alt="Doar pare marcate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 7 (rând 1, col. 3): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `evenonly-9-medium-114904509` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenonly_card.webp" width="200" alt="Doar pare marcate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/evenonly_fiche.webp" width="260" alt="Doar pare marcate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenonly_s4.webp" width="200" alt="Doar pare marcate: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/evenonly_s6.webp" width="200" alt="Doar pare marcate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/evenonly_s9.webp" width="200" alt="Doar pare marcate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenonly_easy.webp" width="200" alt="Doar pare marcate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/evenonly_a.webp" width="200" alt="Doar pare marcate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/evenonly_hard.webp" width="200" alt="Doar pare marcate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenonly_notes.webp" width="200" alt="Doar pare marcate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/evenonly_check.webp" width="200" alt="Doar pare marcate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/evenonly_solved.webp" width="200" alt="Doar pare marcate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenonly_dark.webp" width="200" alt="Doar pare marcate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/evenonly_mobile.webp" width="150" alt="Doar pare marcate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/evenonly_en.webp" width="300" alt="Doar pare marcate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/evenonly_rules.webp" width="300" alt="Doar pare marcate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="oddonly"></a>
#### 28. Doar impare marcate · Marked odds only (`oddonly`)

**Celulele rotunde sunt impare.**

Fiecare celulă marcată cu cerc gri conține o cifră impară. Celulele nemarcate nu sunt spuse: pot fi orice.

<table><tr><td align="center"><img src="../screens/oddonly_a.webp" width="300" alt="Doar impare marcate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 24 indicii)</sub></td><td align="center"><img src="../screens/oddonly_b.webp" width="300" alt="Doar impare marcate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 7 (rând 2, col. 4): este singura celulă din coloana marcată unde poate sta 7.
- **Cod pentru același puzzle:** `oddonly-9-medium-4248896984` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddonly_card.webp" width="200" alt="Doar impare marcate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/oddonly_fiche.webp" width="260" alt="Doar impare marcate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddonly_s4.webp" width="200" alt="Doar impare marcate: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/oddonly_s6.webp" width="200" alt="Doar impare marcate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/oddonly_s9.webp" width="200" alt="Doar impare marcate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddonly_easy.webp" width="200" alt="Doar impare marcate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/oddonly_a.webp" width="200" alt="Doar impare marcate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/oddonly_hard.webp" width="200" alt="Doar impare marcate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddonly_notes.webp" width="200" alt="Doar impare marcate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/oddonly_check.webp" width="200" alt="Doar impare marcate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/oddonly_solved.webp" width="200" alt="Doar impare marcate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddonly_dark.webp" width="200" alt="Doar impare marcate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/oddonly_mobile.webp" width="150" alt="Doar impare marcate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/oddonly_en.webp" width="300" alt="Doar impare marcate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/oddonly_rules.webp" width="300" alt="Doar impare marcate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="fortress"></a>
#### 29. Fortăreață · Fortress (`fortress`)

**Celulele umbrite sunt mai mari decât vecinii.**

O celulă umbrită este mai mare decât toți vecinii ei ortogonali care nu sunt umbriți. Între două celule umbrite alăturate nu se impune nimic.

<table><tr><td align="center"><img src="../screens/fortress_a.webp" width="300" alt="Fortăreață: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/fortress_b.webp" width="300" alt="Fortăreață: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 2, col. 1): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `fortress-9-medium-1637740984` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fortress_card.webp" width="200" alt="Fortăreață: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/fortress_fiche.webp" width="260" alt="Fortăreață: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fortress_s4.webp" width="200" alt="Fortăreață: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/fortress_s6.webp" width="200" alt="Fortăreață: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/fortress_s9.webp" width="200" alt="Fortăreață: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fortress_easy.webp" width="200" alt="Fortăreață: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/fortress_a.webp" width="200" alt="Fortăreață: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/fortress_hard.webp" width="200" alt="Fortăreață: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fortress_notes.webp" width="200" alt="Fortăreață: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/fortress_check.webp" width="200" alt="Fortăreață: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/fortress_solved.webp" width="200" alt="Fortăreață: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fortress_dark.webp" width="200" alt="Fortăreață: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/fortress_mobile.webp" width="150" alt="Fortăreață: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/fortress_en.webp" width="300" alt="Fortăreață: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fortress_rules.webp" width="300" alt="Fortăreață: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="minmax"></a>
#### 30. Minim / Maxim · Min / Max (`minmax`)

**Celule mai mici sau mai mari decât toți vecinii.**

O celulă marcată cu triunghi în jos („min”) este strict mai mică decât toți vecinii ei ortogonali; una marcată cu triunghi în sus („max”) este strict mai mare decât toți.

<table><tr><td align="center"><img src="../screens/minmax_a.webp" width="300" alt="Minim / Maxim: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/minmax_b.webp" width="300" alt="Minim / Maxim: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 2, col. 4): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `minmax-9-medium-3067254727` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/minmax_card.webp" width="200" alt="Minim / Maxim: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/minmax_fiche.webp" width="260" alt="Minim / Maxim: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/minmax_s4.webp" width="200" alt="Minim / Maxim: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/minmax_s6.webp" width="200" alt="Minim / Maxim: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/minmax_s9.webp" width="200" alt="Minim / Maxim: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/minmax_easy.webp" width="200" alt="Minim / Maxim: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/minmax_a.webp" width="200" alt="Minim / Maxim: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/minmax_hard.webp" width="200" alt="Minim / Maxim: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/minmax_notes.webp" width="200" alt="Minim / Maxim: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/minmax_check.webp" width="200" alt="Minim / Maxim: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/minmax_solved.webp" width="200" alt="Minim / Maxim: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/minmax_dark.webp" width="200" alt="Minim / Maxim: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/minmax_mobile.webp" width="150" alt="Minim / Maxim: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/minmax_en.webp" width="300" alt="Minim / Maxim: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/minmax_rules.webp" width="300" alt="Minim / Maxim: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="indexing"></a>
#### 31. Indexare · Indexing (`indexing`)

**Prima cifră din rând arată unde e 1.**

În fiecare rând, cifra din prima celulă (cea din stânga) indică numărul coloanei în care se află cifra 1 din acel rând. Dacă prima celulă conține 1, atunci 1 este chiar acolo. Convenție: sursele descriu mai multe forme de „indexare”; aici am ales aceasta, doar pe rânduri.

<table><tr><td align="center"><img src="../screens/indexing_a.webp" width="300" alt="Indexare: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 19 indicii)</sub></td><td align="center"><img src="../screens/indexing_b.webp" width="300" alt="Indexare: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 5, col. 1): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `indexing-9-medium-3283531442` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/indexing_card.webp" width="200" alt="Indexare: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/indexing_fiche.webp" width="260" alt="Indexare: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/indexing_s4.webp" width="200" alt="Indexare: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/indexing_s6.webp" width="200" alt="Indexare: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/indexing_s9.webp" width="200" alt="Indexare: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/indexing_easy.webp" width="200" alt="Indexare: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/indexing_a.webp" width="200" alt="Indexare: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/indexing_hard.webp" width="200" alt="Indexare: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/indexing_notes.webp" width="200" alt="Indexare: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/indexing_check.webp" width="200" alt="Indexare: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/indexing_solved.webp" width="200" alt="Indexare: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/indexing_dark.webp" width="200" alt="Indexare: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/indexing_mobile.webp" width="150" alt="Indexare: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/indexing_en.webp" width="300" alt="Indexare: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/indexing_rules.webp" width="300" alt="Indexare: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="ratio"></a>
#### 32. Raport ×3 · Ratio ×3 (`ratio`)

**Puncte pentru perechi în raport 3:1.**

Pe muchia dintre două celule alăturate, un cerc cu 3 înseamnă că una dintre cifre este triplul celeilalte (1–3, 2–6 sau 3–9). Conform convenției Kropki, dacă nu există cerc, cifrele alăturate NU sunt în raport 3:1. Convenție aleasă de aplicație: sursele descriu variantele „ratio” vag, iar aici „raport” înseamnă strict factorul 3.

<table><tr><td align="center"><img src="../screens/ratio_a.webp" width="300" alt="Raport ×3: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 15 indicii)</sub></td><td align="center"><img src="../screens/ratio_b.webp" width="300" alt="Raport ×3: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 1, col. 5): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `ratio-9-medium-2219775124` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ratio_card.webp" width="200" alt="Raport ×3: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/ratio_fiche.webp" width="260" alt="Raport ×3: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ratio_s4.webp" width="200" alt="Raport ×3: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/ratio_s6.webp" width="200" alt="Raport ×3: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/ratio_s9.webp" width="200" alt="Raport ×3: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ratio_easy.webp" width="200" alt="Raport ×3: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/ratio_a.webp" width="200" alt="Raport ×3: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/ratio_hard.webp" width="200" alt="Raport ×3: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ratio_notes.webp" width="200" alt="Raport ×3: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/ratio_check.webp" width="200" alt="Raport ×3: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/ratio_solved.webp" width="200" alt="Raport ×3: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ratio_dark.webp" width="200" alt="Raport ×3: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/ratio_mobile.webp" width="150" alt="Raport ×3: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/ratio_en.webp" width="300" alt="Raport ×3: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ratio_rules.webp" width="300" alt="Raport ×3: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="diff"></a>
#### 33. Diferență · Difference (`diff`)

**Numărul dintre celule = diferența lor.**

Pe lângă regulile clasice, un număr între două celule vecine este diferența (în valoare absolută) dintre cifrele lor. Lipsa numărului nu spune nimic.

<table><tr><td align="center"><img src="../screens/diff_a.webp" width="300" alt="Diferență: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/diff_b.webp" width="300" alt="Diferență: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 1, col. 5): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `diff-9-medium-3892901881` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diff_card.webp" width="200" alt="Diferență: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/diff_fiche.webp" width="260" alt="Diferență: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diff_s4.webp" width="200" alt="Diferență: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/diff_s6.webp" width="200" alt="Diferență: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/diff_s9.webp" width="200" alt="Diferență: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diff_easy.webp" width="200" alt="Diferență: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/diff_a.webp" width="200" alt="Diferență: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/diff_hard.webp" width="200" alt="Diferență: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diff_notes.webp" width="200" alt="Diferență: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/diff_check.webp" width="200" alt="Diferență: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/diff_solved.webp" width="200" alt="Diferență: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diff_dark.webp" width="200" alt="Diferență: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/diff_mobile.webp" width="150" alt="Diferență: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/diff_en.webp" width="300" alt="Diferență: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diff_rules.webp" width="300" alt="Diferență: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="kropkipos"></a>
#### 34. Kropki doar marcate · Kropki marked only (`kropkipos`)

**Punctele date; lipsa punctului nu spune nimic.**

Ca la Kropki (alb = consecutive, negru = dublu), dar absența unui punct nu înseamnă nimic: poate exista o relație nemarcată.

<table><tr><td align="center"><img src="../screens/kropkipos_a.webp" width="300" alt="Kropki doar marcate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 15 indicii)</sub></td><td align="center"><img src="../screens/kropkipos_b.webp" width="300" alt="Kropki doar marcate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 2, col. 2): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `kropkipos-9-medium-1158818748` (lipește-l în „Joc nou → Cod”) · efort solver: 2 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropkipos_card.webp" width="200" alt="Kropki doar marcate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_fiche.webp" width="260" alt="Kropki doar marcate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropkipos_s4.webp" width="200" alt="Kropki doar marcate: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_s6.webp" width="200" alt="Kropki doar marcate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_s9.webp" width="200" alt="Kropki doar marcate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropkipos_easy.webp" width="200" alt="Kropki doar marcate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_a.webp" width="200" alt="Kropki doar marcate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_hard.webp" width="200" alt="Kropki doar marcate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropkipos_notes.webp" width="200" alt="Kropki doar marcate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_check.webp" width="200" alt="Kropki doar marcate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_solved.webp" width="200" alt="Kropki doar marcate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropkipos_dark.webp" width="200" alt="Kropki doar marcate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_mobile.webp" width="150" alt="Kropki doar marcate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/kropkipos_en.webp" width="300" alt="Kropki doar marcate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/kropkipos_rules.webp" width="300" alt="Kropki doar marcate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="xvpos"></a>
#### 35. XV doar marcate · XV marked only (`xvpos`)

**Semnele date; lipsa semnului nu spune nimic.**

Ca la XV (X = suma 10, V = suma 5), dar absența semnului nu înseamnă nimic. Doar 9×9.

<table><tr><td align="center"><img src="../screens/xvpos_a.webp" width="300" alt="XV doar marcate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/xvpos_b.webp" width="300" alt="XV doar marcate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 6 (rând 7, col. 5): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `xvpos-9-medium-3148096374` (lipește-l în „Joc nou → Cod”) · efort solver: 2 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xvpos_card.webp" width="200" alt="XV doar marcate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/xvpos_fiche.webp" width="260" alt="XV doar marcate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xvpos_s9.webp" width="200" alt="XV doar marcate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xvpos_easy.webp" width="200" alt="XV doar marcate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/xvpos_a.webp" width="200" alt="XV doar marcate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/xvpos_hard.webp" width="200" alt="XV doar marcate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xvpos_notes.webp" width="200" alt="XV doar marcate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/xvpos_check.webp" width="200" alt="XV doar marcate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/xvpos_solved.webp" width="200" alt="XV doar marcate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xvpos_dark.webp" width="200" alt="XV doar marcate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/xvpos_mobile.webp" width="150" alt="XV doar marcate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/xvpos_en.webp" width="300" alt="XV doar marcate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xvpos_rules.webp" width="300" alt="XV doar marcate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="consecpos"></a>
#### 36. Consecutiv doar marcate · Consecutive marked only (`consecpos`)

**Barele date; lipsa barei nu spune nimic.**

Ca la Consecutiv (bară = cifre consecutive), dar absența barei nu înseamnă nimic.

<table><tr><td align="center"><img src="../screens/consecpos_a.webp" width="300" alt="Consecutiv doar marcate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/consecpos_b.webp" width="300" alt="Consecutiv doar marcate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 1, col. 6): este singura celulă din rândul marcat unde poate sta 1.
- **Cod pentru același puzzle:** `consecpos-9-medium-157366339` (lipește-l în „Joc nou → Cod”) · efort solver: 2 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consecpos_card.webp" width="200" alt="Consecutiv doar marcate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/consecpos_fiche.webp" width="260" alt="Consecutiv doar marcate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consecpos_s4.webp" width="200" alt="Consecutiv doar marcate: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/consecpos_s6.webp" width="200" alt="Consecutiv doar marcate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/consecpos_s9.webp" width="200" alt="Consecutiv doar marcate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consecpos_easy.webp" width="200" alt="Consecutiv doar marcate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/consecpos_a.webp" width="200" alt="Consecutiv doar marcate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/consecpos_hard.webp" width="200" alt="Consecutiv doar marcate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consecpos_notes.webp" width="200" alt="Consecutiv doar marcate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/consecpos_check.webp" width="200" alt="Consecutiv doar marcate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/consecpos_solved.webp" width="200" alt="Consecutiv doar marcate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consecpos_dark.webp" width="200" alt="Consecutiv doar marcate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/consecpos_mobile.webp" width="150" alt="Consecutiv doar marcate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/consecpos_en.webp" width="300" alt="Consecutiv doar marcate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/consecpos_rules.webp" width="300" alt="Consecutiv doar marcate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="clueless"></a>
#### 37. Fără indicii · Clueless (`clueless`)

**Doar punctele Kropki; de regulă fără cifre date.**

Grila are de regulă zero cifre date (rar una singură, când punctele nu determină singure soluția); toate celelalte informații vin din punctele Kropki (alb = consecutive, negru = dublu, lipsa punctului = nici una). Nivelul de dificultate nu are efect.

<table><tr><td align="center"><img src="../screens/clueless_a.webp" width="300" alt="Fără indicii: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 0 indicii)</sub></td><td align="center"><img src="../screens/clueless_b.webp" width="300" alt="Fără indicii: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 4, col. 2): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `clueless-9-medium-542807658` (lipește-l în „Joc nou → Cod”) · efort solver: 6 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clueless_card.webp" width="200" alt="Fără indicii: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/clueless_fiche.webp" width="260" alt="Fără indicii: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clueless_s4.webp" width="200" alt="Fără indicii: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/clueless_s6.webp" width="200" alt="Fără indicii: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/clueless_s9.webp" width="200" alt="Fără indicii: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clueless_easy.webp" width="200" alt="Fără indicii: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/clueless_a.webp" width="200" alt="Fără indicii: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/clueless_hard.webp" width="200" alt="Fără indicii: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clueless_notes.webp" width="200" alt="Fără indicii: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/clueless_check.webp" width="200" alt="Fără indicii: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/clueless_solved.webp" width="200" alt="Fără indicii: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clueless_dark.webp" width="200" alt="Fără indicii: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/clueless_mobile.webp" width="150" alt="Fără indicii: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/clueless_en.webp" width="300" alt="Fără indicii: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/clueless_rules.webp" width="300" alt="Fără indicii: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

