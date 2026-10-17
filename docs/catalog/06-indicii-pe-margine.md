# Catalog: Indicii pe margine (19)

[← README](../../README.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · [Sume](05-sume.md) · **Indicii pe margine** · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Indiciile sunt scrise în afara grilei, la capătul rândului sau al coloanei la care se referă._

<a id="sandwich"></a>
#### 41. Sandwich · Sandwich (`sandwich`)

**Suma dintre 1 și cea mai mare cifră.**

Numărul din margine este suma cifrelor aflate între cifra 1 și cifra N (9 la 9×9) din rândul sau coloana respectivă.

<table><tr><td align="center"><img src="../screens/sandwich_a.webp" width="300" alt="Sandwich: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/sandwich_b.webp" width="300" alt="Sandwich: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 1, col. 2): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `sandwich-9-medium-4184518699` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandwich_card.webp" width="200" alt="Sandwich: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/sandwich_fiche.webp" width="260" alt="Sandwich: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandwich_s4.webp" width="200" alt="Sandwich: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/sandwich_s6.webp" width="200" alt="Sandwich: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/sandwich_s9.webp" width="200" alt="Sandwich: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandwich_easy.webp" width="200" alt="Sandwich: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/sandwich_a.webp" width="200" alt="Sandwich: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/sandwich_hard.webp" width="200" alt="Sandwich: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandwich_notes.webp" width="200" alt="Sandwich: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/sandwich_check.webp" width="200" alt="Sandwich: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/sandwich_solved.webp" width="200" alt="Sandwich: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandwich_dark.webp" width="200" alt="Sandwich: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/sandwich_mobile.webp" width="150" alt="Sandwich: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/sandwich_en.webp" width="300" alt="Sandwich: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandwich_rules.webp" width="300" alt="Sandwich: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="xsum"></a>
#### 42. X-Sums · X-Sums (`xsum`)

**Prima cifră = câte celule se adună.**

Dacă prima cifră a unui rând sau coloane este k, suma primelor k cifre (de la acel capăt) este numărul din margine.

<table><tr><td align="center"><img src="../screens/xsum_a.webp" width="300" alt="X-Sums: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/xsum_b.webp" width="300" alt="X-Sums: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 3, col. 1): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `xsum-9-medium-920107551` (lipește-l în „Joc nou → Cod”) · efort solver: 5 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xsum_card.webp" width="200" alt="X-Sums: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/xsum_fiche.webp" width="260" alt="X-Sums: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xsum_s6.webp" width="200" alt="X-Sums: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/xsum_s9.webp" width="200" alt="X-Sums: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xsum_easy.webp" width="200" alt="X-Sums: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/xsum_a.webp" width="200" alt="X-Sums: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/xsum_hard.webp" width="200" alt="X-Sums: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xsum_notes.webp" width="200" alt="X-Sums: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/xsum_check.webp" width="200" alt="X-Sums: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/xsum_solved.webp" width="200" alt="X-Sums: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xsum_dark.webp" width="200" alt="X-Sums: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/xsum_mobile.webp" width="150" alt="X-Sums: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/xsum_en.webp" width="300" alt="X-Sums: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/xsum_rules.webp" width="300" alt="X-Sums: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="frame"></a>
#### 43. Frame (primele trei) · Frame (first three) (`frame`)

**Suma primelor trei cifre.**

Numărul din margine este suma primelor trei cifre ale rândului sau coloanei, începând de la acel capăt.

<table><tr><td align="center"><img src="../screens/frame_a.webp" width="300" alt="Frame (primele trei): puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/frame_b.webp" width="300" alt="Frame (primele trei): după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 7 (rând 1, col. 4): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `frame-9-medium-3867362192` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/frame_card.webp" width="200" alt="Frame (primele trei): Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/frame_fiche.webp" width="260" alt="Frame (primele trei): Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/frame_s6.webp" width="200" alt="Frame (primele trei): 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/frame_s9.webp" width="200" alt="Frame (primele trei): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/frame_easy.webp" width="200" alt="Frame (primele trei): Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/frame_a.webp" width="200" alt="Frame (primele trei): Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/frame_hard.webp" width="200" alt="Frame (primele trei): Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/frame_notes.webp" width="200" alt="Frame (primele trei): Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/frame_check.webp" width="200" alt="Frame (primele trei): „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/frame_solved.webp" width="200" alt="Frame (primele trei): Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/frame_dark.webp" width="200" alt="Frame (primele trei): Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/frame_mobile.webp" width="150" alt="Frame (primele trei): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/frame_en.webp" width="300" alt="Frame (primele trei): Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/frame_rules.webp" width="300" alt="Frame (primele trei): Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="skyscraper"></a>
#### 44. Zgârie-nori · Skyscrapers (`skyscraper`)

**Câte clădiri se văd din margine.**

Cifrele sunt înălțimi de clădiri. Numărul din margine arată câte clădiri se văd din acel capăt (o clădire ascunde pe cele mai joase din spatele ei).

<table><tr><td align="center"><img src="../screens/skyscraper_a.webp" width="300" alt="Zgârie-nori: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/skyscraper_b.webp" width="300" alt="Zgârie-nori: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 3, col. 2): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `skyscraper-9-medium-1967302454` (lipește-l în „Joc nou → Cod”) · efort solver: 143 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/skyscraper_card.webp" width="200" alt="Zgârie-nori: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_fiche.webp" width="260" alt="Zgârie-nori: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/skyscraper_s4.webp" width="200" alt="Zgârie-nori: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_s6.webp" width="200" alt="Zgârie-nori: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_s9.webp" width="200" alt="Zgârie-nori: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/skyscraper_easy.webp" width="200" alt="Zgârie-nori: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_a.webp" width="200" alt="Zgârie-nori: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_hard.webp" width="200" alt="Zgârie-nori: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/skyscraper_notes.webp" width="200" alt="Zgârie-nori: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_check.webp" width="200" alt="Zgârie-nori: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_solved.webp" width="200" alt="Zgârie-nori: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/skyscraper_dark.webp" width="200" alt="Zgârie-nori: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_mobile.webp" width="150" alt="Zgârie-nori: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/skyscraper_en.webp" width="300" alt="Zgârie-nori: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/skyscraper_rules.webp" width="300" alt="Zgârie-nori: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="rossini"></a>
#### 45. Rossini · Rossini (`rossini`)

**Săgeată pe margine: primele trei cifre cresc într-un sens.**

O săgeată în afara grilei arată că primele trei cifre pornind din acel capăt sunt strict monotone: cresc în sensul în care arată săgeata (spre interiorul grilei) sau, dacă săgeata arată spre margine, cresc spre margine, adică scad spre interior. Convenție: vârful săgeții arată spre cifra cea mai mare. Lipsa unei săgeți nu spune nimic (nu e varianta Rossini clasică, în care capetele fără săgeată exclud șirurile monotone).

<table><tr><td align="center"><img src="../screens/rossini_a.webp" width="300" alt="Rossini: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 19 indicii)</sub></td><td align="center"><img src="../screens/rossini_b.webp" width="300" alt="Rossini: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 1, col. 7): este singura celulă din coloana marcată unde poate sta 8.
- **Cod pentru același puzzle:** `rossini-9-medium-4071954052` (lipește-l în „Joc nou → Cod”) · efort solver: 2 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/rossini_card.webp" width="200" alt="Rossini: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/rossini_fiche.webp" width="260" alt="Rossini: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/rossini_s4.webp" width="200" alt="Rossini: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/rossini_s6.webp" width="200" alt="Rossini: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/rossini_s9.webp" width="200" alt="Rossini: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/rossini_easy.webp" width="200" alt="Rossini: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/rossini_a.webp" width="200" alt="Rossini: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/rossini_hard.webp" width="200" alt="Rossini: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/rossini_notes.webp" width="200" alt="Rossini: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/rossini_check.webp" width="200" alt="Rossini: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/rossini_solved.webp" width="200" alt="Rossini: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/rossini_dark.webp" width="200" alt="Rossini: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/rossini_mobile.webp" width="150" alt="Rossini: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/rossini_en.webp" width="300" alt="Rossini: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/rossini_rules.webp" width="300" alt="Rossini: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="outside"></a>
#### 46. Outside · Outside (`outside`)

**Cifrele de pe margine apar printre primele trei.**

Cifrele scrise în afara grilei trebuie să apară printre primele trei celule ale rândului sau coloanei respective, începând de la acel capăt, în orice ordine. Dacă sunt trei cifre, ele sunt exact cele trei celule.

<table><tr><td align="center"><img src="../screens/outside_a.webp" width="300" alt="Outside: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 23 indicii)</sub></td><td align="center"><img src="../screens/outside_b.webp" width="300" alt="Outside: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 5 (rând 2, col. 5): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `outside-9-medium-3531544633` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/outside_card.webp" width="200" alt="Outside: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/outside_fiche.webp" width="260" alt="Outside: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/outside_s4.webp" width="200" alt="Outside: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/outside_s6.webp" width="200" alt="Outside: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/outside_s9.webp" width="200" alt="Outside: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/outside_easy.webp" width="200" alt="Outside: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/outside_a.webp" width="200" alt="Outside: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/outside_hard.webp" width="200" alt="Outside: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/outside_notes.webp" width="200" alt="Outside: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/outside_check.webp" width="200" alt="Outside: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/outside_solved.webp" width="200" alt="Outside: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/outside_dark.webp" width="200" alt="Outside: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/outside_mobile.webp" width="150" alt="Outside: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/outside_en.webp" width="300" alt="Outside: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/outside_rules.webp" width="300" alt="Outside: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="radar"></a>
#### 47. Radar · Radar (`radar`)

**Indiciul spune unde e cel mai mare.**

Pe lângă regulile clasice, un număr în afara grilei arată pe ce poziție (numărând de la acel capăt) se află cifra cea mai mare (9 la 9×9) în rândul sau coloana respectivă.

<table><tr><td align="center"><img src="../screens/radar_a.webp" width="300" alt="Radar: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 21 indicii)</sub></td><td align="center"><img src="../screens/radar_b.webp" width="300" alt="Radar: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 3, col. 6): este singura celulă din rândul marcat unde poate sta 4.
- **Cod pentru același puzzle:** `radar-9-medium-2588350498` (lipește-l în „Joc nou → Cod”) · efort solver: fără ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/radar_card.webp" width="200" alt="Radar: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/radar_fiche.webp" width="260" alt="Radar: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/radar_s4.webp" width="200" alt="Radar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/radar_s6.webp" width="200" alt="Radar: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/radar_s9.webp" width="200" alt="Radar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/radar_easy.webp" width="200" alt="Radar: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/radar_a.webp" width="200" alt="Radar: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/radar_hard.webp" width="200" alt="Radar: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/radar_notes.webp" width="200" alt="Radar: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/radar_check.webp" width="200" alt="Radar: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/radar_solved.webp" width="200" alt="Radar: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/radar_dark.webp" width="200" alt="Radar: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/radar_mobile.webp" width="150" alt="Radar: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/radar_en.webp" width="300" alt="Radar: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/radar_rules.webp" width="300" alt="Radar: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="sandnum"></a>
#### 48. Sandwich numeric · Counting sandwich (`sandnum`)

**Câte celule sunt între 1 și N.**

Pe lângă regulile clasice, un număr în afara grilei spune câte celule se află între cifra 1 și cifra N (9 la 9×9) în rândul sau coloana respectivă.

<table><tr><td align="center"><img src="../screens/sandnum_a.webp" width="300" alt="Sandwich numeric: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 19 indicii)</sub></td><td align="center"><img src="../screens/sandnum_b.webp" width="300" alt="Sandwich numeric: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 6, col. 5): este singura celulă din coloana marcată unde poate sta 8.
- **Cod pentru același puzzle:** `sandnum-9-medium-2830514440` (lipește-l în „Joc nou → Cod”) · efort solver: 1802 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandnum_card.webp" width="200" alt="Sandwich numeric: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/sandnum_fiche.webp" width="260" alt="Sandwich numeric: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandnum_s4.webp" width="200" alt="Sandwich numeric: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/sandnum_s6.webp" width="200" alt="Sandwich numeric: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/sandnum_s9.webp" width="200" alt="Sandwich numeric: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandnum_easy.webp" width="200" alt="Sandwich numeric: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/sandnum_a.webp" width="200" alt="Sandwich numeric: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/sandnum_hard.webp" width="200" alt="Sandwich numeric: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandnum_notes.webp" width="200" alt="Sandwich numeric: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/sandnum_check.webp" width="200" alt="Sandwich numeric: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/sandnum_solved.webp" width="200" alt="Sandwich numeric: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandnum_dark.webp" width="200" alt="Sandwich numeric: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/sandnum_mobile.webp" width="150" alt="Sandwich numeric: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/sandnum_en.webp" width="300" alt="Sandwich numeric: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandnum_rules.webp" width="300" alt="Sandwich numeric: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="sandpar"></a>
#### 49. Sandwich de paritate · Parity sandwich (`sandpar`)

**Câte cifre impare sunt între 1 și N.**

Pe lângă regulile clasice, un număr în afara grilei spune câte cifre impare se află între 1 și N în rândul sau coloana respectivă.

<table><tr><td align="center"><img src="../screens/sandpar_a.webp" width="300" alt="Sandwich de paritate: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 19 indicii)</sub></td><td align="center"><img src="../screens/sandpar_b.webp" width="300" alt="Sandwich de paritate: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 5, col. 5): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `sandpar-9-medium-3081747068` (lipește-l în „Joc nou → Cod”) · efort solver: 38 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandpar_card.webp" width="200" alt="Sandwich de paritate: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/sandpar_fiche.webp" width="260" alt="Sandwich de paritate: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandpar_s6.webp" width="200" alt="Sandwich de paritate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/sandpar_s9.webp" width="200" alt="Sandwich de paritate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandpar_easy.webp" width="200" alt="Sandwich de paritate: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/sandpar_a.webp" width="200" alt="Sandwich de paritate: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/sandpar_hard.webp" width="200" alt="Sandwich de paritate: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandpar_notes.webp" width="200" alt="Sandwich de paritate: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/sandpar_check.webp" width="200" alt="Sandwich de paritate: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/sandpar_solved.webp" width="200" alt="Sandwich de paritate: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandpar_dark.webp" width="200" alt="Sandwich de paritate: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/sandpar_mobile.webp" width="150" alt="Sandwich de paritate: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/sandpar_en.webp" width="300" alt="Sandwich de paritate: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sandpar_rules.webp" width="300" alt="Sandwich de paritate: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="sand2"></a>
#### 50. Sandwich dublu · Double sandwich (`sand2`)

**Două sume: între 1 și 9, între 2 și 8.**

Pe lângă regulile clasice, indiciul „a,b” din afara grilei arată: a = suma cifrelor dintre 1 și 9, b = suma cifrelor dintre 2 și 8 în rândul sau coloana respectivă. Doar 9×9.

<table><tr><td align="center"><img src="../screens/sand2_a.webp" width="300" alt="Sandwich dublu: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/sand2_b.webp" width="300" alt="Sandwich dublu: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 6, col. 9): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `sand2-9-medium-1633059211` (lipește-l în „Joc nou → Cod”) · efort solver: 3778 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sand2_card.webp" width="200" alt="Sandwich dublu: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/sand2_fiche.webp" width="260" alt="Sandwich dublu: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sand2_s9.webp" width="200" alt="Sandwich dublu: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sand2_easy.webp" width="200" alt="Sandwich dublu: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/sand2_a.webp" width="200" alt="Sandwich dublu: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/sand2_hard.webp" width="200" alt="Sandwich dublu: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sand2_notes.webp" width="200" alt="Sandwich dublu: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/sand2_check.webp" width="200" alt="Sandwich dublu: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/sand2_solved.webp" width="200" alt="Sandwich dublu: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sand2_dark.webp" width="200" alt="Sandwich dublu: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/sand2_mobile.webp" width="150" alt="Sandwich dublu: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/sand2_en.webp" width="300" alt="Sandwich dublu: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/sand2_rules.webp" width="300" alt="Sandwich dublu: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="subsol"></a>
#### 51. Subsol · Basement (`subsol`)

**Ca Zgârie-norii, dar cu cifrele inversate.**

Pe lângă regulile clasice, un număr în afara grilei arată de câte ori, privind dinspre acel capăt, apare o cifră mai mică decât toate cele de dinaintea ei (prima cifră contează). Este opusul zgârie-norilor: aici numărăm minimele succesive. Este Zgârie-norii cu cifrele inversate (d devine N+1−d), deci logic izomorfă cu aceasta.

<table><tr><td align="center"><img src="../screens/subsol_a.webp" width="300" alt="Subsol: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/subsol_b.webp" width="300" alt="Subsol: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 1, col. 4): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `subsol-9-medium-2589656574` (lipește-l în „Joc nou → Cod”) · efort solver: 487 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/subsol_card.webp" width="200" alt="Subsol: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/subsol_fiche.webp" width="260" alt="Subsol: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/subsol_s4.webp" width="200" alt="Subsol: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/subsol_s6.webp" width="200" alt="Subsol: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/subsol_s9.webp" width="200" alt="Subsol: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/subsol_easy.webp" width="200" alt="Subsol: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/subsol_a.webp" width="200" alt="Subsol: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/subsol_hard.webp" width="200" alt="Subsol: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/subsol_notes.webp" width="200" alt="Subsol: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/subsol_check.webp" width="200" alt="Subsol: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/subsol_solved.webp" width="200" alt="Subsol: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/subsol_dark.webp" width="200" alt="Subsol: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/subsol_mobile.webp" width="150" alt="Subsol: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/subsol_en.webp" width="300" alt="Subsol: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/subsol_rules.webp" width="300" alt="Subsol: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="prodmargin"></a>
#### 52. Produs la margine · Edge product (`prodmargin`)

**Produsul primelor două cifre.**

Pe lângă regulile clasice, un număr în afara grilei este produsul primelor două cifre din rândul sau coloana respectivă, privind dinspre acel capăt.

<table><tr><td align="center"><img src="../screens/prodmargin_a.webp" width="300" alt="Produs la margine: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/prodmargin_b.webp" width="300" alt="Produs la margine: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 3, col. 8): este singura celulă din rândul marcat unde poate sta 1.
- **Cod pentru același puzzle:** `prodmargin-9-medium-3463419111` (lipește-l în „Joc nou → Cod”) · efort solver: 618 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/prodmargin_card.webp" width="200" alt="Produs la margine: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_fiche.webp" width="260" alt="Produs la margine: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/prodmargin_s4.webp" width="200" alt="Produs la margine: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_s6.webp" width="200" alt="Produs la margine: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_s9.webp" width="200" alt="Produs la margine: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/prodmargin_easy.webp" width="200" alt="Produs la margine: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_a.webp" width="200" alt="Produs la margine: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_hard.webp" width="200" alt="Produs la margine: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/prodmargin_notes.webp" width="200" alt="Produs la margine: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_check.webp" width="200" alt="Produs la margine: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_solved.webp" width="200" alt="Produs la margine: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/prodmargin_dark.webp" width="200" alt="Produs la margine: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_mobile.webp" width="150" alt="Produs la margine: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/prodmargin_en.webp" width="300" alt="Produs la margine: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/prodmargin_rules.webp" width="300" alt="Produs la margine: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="diffmargin"></a>
#### 53. Diferență la margine · Edge difference (`diffmargin`)

**Diferența primelor două cifre.**

Pe lângă regulile clasice, un număr în afara grilei este diferența (în valoare absolută) dintre primele două cifre din rândul sau coloana respectivă, privind dinspre acel capăt.

<table><tr><td align="center"><img src="../screens/diffmargin_a.webp" width="300" alt="Diferență la margine: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/diffmargin_b.webp" width="300" alt="Diferență la margine: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 2 (rând 6, col. 4): este singura celulă din rândul marcat unde poate sta 2.
- **Cod pentru același puzzle:** `diffmargin-9-medium-4161532716` (lipește-l în „Joc nou → Cod”) · efort solver: 313 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diffmargin_card.webp" width="200" alt="Diferență la margine: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_fiche.webp" width="260" alt="Diferență la margine: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diffmargin_s4.webp" width="200" alt="Diferență la margine: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_s6.webp" width="200" alt="Diferență la margine: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_s9.webp" width="200" alt="Diferență la margine: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diffmargin_easy.webp" width="200" alt="Diferență la margine: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_a.webp" width="200" alt="Diferență la margine: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_hard.webp" width="200" alt="Diferență la margine: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diffmargin_notes.webp" width="200" alt="Diferență la margine: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_check.webp" width="200" alt="Diferență la margine: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_solved.webp" width="200" alt="Diferență la margine: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diffmargin_dark.webp" width="200" alt="Diferență la margine: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_mobile.webp" width="150" alt="Diferență la margine: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/diffmargin_en.webp" width="300" alt="Diferență la margine: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/diffmargin_rules.webp" width="300" alt="Diferență la margine: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="ascents"></a>
#### 54. Urcări · Ascents (`ascents`)

**Câte perechi vecine cresc.**

Pe lângă regulile clasice, un număr în afara grilei spune de câte ori, privind dinspre acel capăt, o cifră este urmată imediat de una mai mare.

<table><tr><td align="center"><img src="../screens/ascents_a.webp" width="300" alt="Urcări: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/ascents_b.webp" width="300" alt="Urcări: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 2, col. 3): este singura celulă din coloana marcată unde poate sta 9.
- **Cod pentru același puzzle:** `ascents-9-medium-1827630994` (lipește-l în „Joc nou → Cod”) · efort solver: 361 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ascents_card.webp" width="200" alt="Urcări: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/ascents_fiche.webp" width="260" alt="Urcări: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ascents_s4.webp" width="200" alt="Urcări: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/ascents_s6.webp" width="200" alt="Urcări: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/ascents_s9.webp" width="200" alt="Urcări: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ascents_easy.webp" width="200" alt="Urcări: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/ascents_a.webp" width="200" alt="Urcări: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/ascents_hard.webp" width="200" alt="Urcări: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ascents_notes.webp" width="200" alt="Urcări: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/ascents_check.webp" width="200" alt="Urcări: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/ascents_solved.webp" width="200" alt="Urcări: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ascents_dark.webp" width="200" alt="Urcări: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/ascents_mobile.webp" width="150" alt="Urcări: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/ascents_en.webp" width="300" alt="Urcări: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/ascents_rules.webp" width="300" alt="Urcări: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="inversions"></a>
#### 55. Inversiuni · Inversions (`inversions`)

**Câte perechi sunt în ordine inversă.**

Pe lângă regulile clasice, un număr în afara grilei este numărul de inversiuni ale rândului/coloanei privit dinspre acel capăt: câte perechi de cifre (nu neapărat vecine) au cea mai din față mai mare decât cea de după ea.

<table><tr><td align="center"><img src="../screens/inversions_a.webp" width="300" alt="Inversiuni: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/inversions_b.webp" width="300" alt="Inversiuni: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 7 (rând 7, col. 6): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `inversions-9-medium-2138830078` (lipește-l în „Joc nou → Cod”) · efort solver: 62 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/inversions_card.webp" width="200" alt="Inversiuni: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/inversions_fiche.webp" width="260" alt="Inversiuni: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/inversions_s4.webp" width="200" alt="Inversiuni: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/inversions_s6.webp" width="200" alt="Inversiuni: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/inversions_s9.webp" width="200" alt="Inversiuni: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/inversions_easy.webp" width="200" alt="Inversiuni: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/inversions_a.webp" width="200" alt="Inversiuni: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/inversions_hard.webp" width="200" alt="Inversiuni: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/inversions_notes.webp" width="200" alt="Inversiuni: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/inversions_check.webp" width="200" alt="Inversiuni: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/inversions_solved.webp" width="200" alt="Inversiuni: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/inversions_dark.webp" width="200" alt="Inversiuni: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/inversions_mobile.webp" width="150" alt="Inversiuni: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/inversions_en.webp" width="300" alt="Inversiuni: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/inversions_rules.webp" width="300" alt="Inversiuni: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="cycles"></a>
#### 56. Cicluri · Cycles (`cycles`)

**Câte cicluri are permutarea.**

Pe lângă regulile clasice, rândul/coloana citit dinspre capăt este o permutare (poziția i are cifra a_i). Indiciul din afara grilei este numărul de cicluri ale permutării (poziția i trimite la poziția a_i). Mărimi 9×9 și 6×6.

<table><tr><td align="center"><img src="../screens/cycles_a.webp" width="300" alt="Cicluri: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/cycles_b.webp" width="300" alt="Cicluri: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 4 (rând 2, col. 6): este singura celulă din regiunea marcată unde poate sta 4.
- **Cod pentru același puzzle:** `cycles-9-medium-708965529` (lipește-l în „Joc nou → Cod”) · efort solver: 562 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cycles_card.webp" width="200" alt="Cicluri: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/cycles_fiche.webp" width="260" alt="Cicluri: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cycles_s6.webp" width="200" alt="Cicluri: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/cycles_s9.webp" width="200" alt="Cicluri: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cycles_easy.webp" width="200" alt="Cicluri: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/cycles_a.webp" width="200" alt="Cicluri: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/cycles_hard.webp" width="200" alt="Cicluri: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cycles_notes.webp" width="200" alt="Cicluri: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/cycles_check.webp" width="200" alt="Cicluri: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/cycles_solved.webp" width="200" alt="Cicluri: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cycles_dark.webp" width="200" alt="Cicluri: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/cycles_mobile.webp" width="150" alt="Cicluri: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/cycles_en.webp" width="300" alt="Cicluri: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/cycles_rules.webp" width="300" alt="Cicluri: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="fixedpts"></a>
#### 57. Puncte fixe · Fixed points (`fixedpts`)

**Câte cifre stau pe poziția lor.**

Pe lângă regulile clasice, un număr în afara grilei spune câte cifre se află pe poziția egală cu valoarea lor (a doua celulă conține 2 etc.), numărând de la acel capăt. Mărimi 9×9 și 6×6.

<table><tr><td align="center"><img src="../screens/fixedpts_a.webp" width="300" alt="Puncte fixe: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/fixedpts_b.webp" width="300" alt="Puncte fixe: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 1, col. 8): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `fixedpts-9-medium-3926317386` (lipește-l în „Joc nou → Cod”) · efort solver: 4802 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fixedpts_card.webp" width="200" alt="Puncte fixe: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_fiche.webp" width="260" alt="Puncte fixe: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fixedpts_s6.webp" width="200" alt="Puncte fixe: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_s9.webp" width="200" alt="Puncte fixe: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fixedpts_easy.webp" width="200" alt="Puncte fixe: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_a.webp" width="200" alt="Puncte fixe: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_hard.webp" width="200" alt="Puncte fixe: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fixedpts_notes.webp" width="200" alt="Puncte fixe: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_check.webp" width="200" alt="Puncte fixe: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_solved.webp" width="200" alt="Puncte fixe: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fixedpts_dark.webp" width="200" alt="Puncte fixe: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_mobile.webp" width="150" alt="Puncte fixe: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/fixedpts_en.webp" width="300" alt="Puncte fixe: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/fixedpts_rules.webp" width="300" alt="Puncte fixe: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="altsum"></a>
#### 58. Sumă alternantă · Alternating sum (`altsum`)

**a₁ − a₂ + a₃ − …**

Pe lângă regulile clasice, un număr în afara grilei este suma alternantă a cifrelor, privind dinspre acel capăt: prima cifră minus a doua plus a treia și așa mai departe. Poate fi negativ. Mărimi 9×9 și 6×6.

<table><tr><td align="center"><img src="../screens/altsum_a.webp" width="300" alt="Sumă alternantă: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/altsum_b.webp" width="300" alt="Sumă alternantă: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 9, col. 4): toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).
- **Cod pentru același puzzle:** `altsum-9-medium-1703080656` (lipește-l în „Joc nou → Cod”) · efort solver: 2188 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/altsum_card.webp" width="200" alt="Sumă alternantă: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/altsum_fiche.webp" width="260" alt="Sumă alternantă: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/altsum_s6.webp" width="200" alt="Sumă alternantă: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/altsum_s9.webp" width="200" alt="Sumă alternantă: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/altsum_easy.webp" width="200" alt="Sumă alternantă: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/altsum_a.webp" width="200" alt="Sumă alternantă: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/altsum_hard.webp" width="200" alt="Sumă alternantă: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/altsum_notes.webp" width="200" alt="Sumă alternantă: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/altsum_check.webp" width="200" alt="Sumă alternantă: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/altsum_solved.webp" width="200" alt="Sumă alternantă: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/altsum_dark.webp" width="200" alt="Sumă alternantă: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/altsum_mobile.webp" width="150" alt="Sumă alternantă: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/altsum_en.webp" width="300" alt="Sumă alternantă: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/altsum_rules.webp" width="300" alt="Sumă alternantă: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="dxsum"></a>
#### 59. Sume pe diagonale · Diagonal X-sums (`dxsum`)

**Primele d cifre pe o diagonală, d = prima cifră.**

Pe lângă regulile clasice, un indiciu la capătul unei diagonale (care pornește din celula de margine) spune suma primelor d celule de pe acea diagonală, unde d este prima cifră de pe ea; dacă diagonala are mai puțin de d celule, se adună toată diagonala (ca la X-Sums, dar pe diagonale). Mărimi 9×9 și 6×6.

<table><tr><td align="center"><img src="../screens/dxsum_a.webp" width="300" alt="Sume pe diagonale: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 18 indicii)</sub></td><td align="center"><img src="../screens/dxsum_b.webp" width="300" alt="Sume pe diagonale: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 1 (rând 8, col. 8): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `dxsum-9-medium-391021028` (lipește-l în „Joc nou → Cod”) · efort solver: 256 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dxsum_card.webp" width="200" alt="Sume pe diagonale: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/dxsum_fiche.webp" width="260" alt="Sume pe diagonale: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dxsum_s6.webp" width="200" alt="Sume pe diagonale: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/dxsum_s9.webp" width="200" alt="Sume pe diagonale: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dxsum_easy.webp" width="200" alt="Sume pe diagonale: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/dxsum_a.webp" width="200" alt="Sume pe diagonale: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/dxsum_hard.webp" width="200" alt="Sume pe diagonale: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dxsum_notes.webp" width="200" alt="Sume pe diagonale: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/dxsum_check.webp" width="200" alt="Sume pe diagonale: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/dxsum_solved.webp" width="200" alt="Sume pe diagonale: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dxsum_dark.webp" width="200" alt="Sume pe diagonale: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/dxsum_mobile.webp" width="150" alt="Sume pe diagonale: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/dxsum_en.webp" width="300" alt="Sume pe diagonale: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/dxsum_rules.webp" width="300" alt="Sume pe diagonale: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

