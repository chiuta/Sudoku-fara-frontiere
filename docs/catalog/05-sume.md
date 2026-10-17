# Catalog: Sume (3)

[← README](../../README.md) · [Toate categoriile](README.md)

[Mărime și simboluri](01-marime-si-simboluri.md) · [Regiuni și grupuri](02-regiuni-si-grupuri.md) · [Vecini](03-vecini.md) · [Paritate, puncte, semne](04-paritate-puncte-semne.md) · **Sume** · [Indicii pe margine](06-indicii-pe-margine.md) · [Linii](07-linii.md) · [Grile compuse](08-grile-compuse.md) · [Rude apropiate](09-rude-apropiate.md) · [Topologii și mutări fairy](10-topologii-si-mutari-fairy.md) · [Reguli globale](11-reguli-globale.md) · [Indicii în celule](12-indicii-in-celule.md) · [Dimensiuni superioare](13-dimensiuni-superioare.md)

---


_Numerele mici din colțul unei cuști sau de pe margine sunt sume; cifrele dintr-o cușcă nu se repetă decât dacă fișa spune altfel._

<a id="killer"></a>
#### 38. Killer · Killer (`killer`)

**Cuști cu sumă, fără repetări.**

Grila este împărțită în cuști punctate; numărul din colț este suma cifrelor din cușcă. Într-o cușcă o cifră nu se repetă.

<table><tr><td align="center"><img src="../screens/killer_a.webp" width="300" alt="Killer: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 8 indicii)</sub></td><td align="center"><img src="../screens/killer_b.webp" width="300" alt="Killer: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 3 (rând 4, col. 4): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `killer-9-medium-4271579875` (lipește-l în „Joc nou → Cod”) · efort solver: 1 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/killer_card.webp" width="200" alt="Killer: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/killer_fiche.webp" width="260" alt="Killer: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/killer_s4.webp" width="200" alt="Killer: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../screens/killer_s6.webp" width="200" alt="Killer: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/killer_s9.webp" width="200" alt="Killer: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/killer_easy.webp" width="200" alt="Killer: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/killer_a.webp" width="200" alt="Killer: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/killer_hard.webp" width="200" alt="Killer: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/killer_notes.webp" width="200" alt="Killer: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/killer_check.webp" width="200" alt="Killer: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/killer_solved.webp" width="200" alt="Killer: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/killer_dark.webp" width="200" alt="Killer: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/killer_mobile.webp" width="150" alt="Killer: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/killer_en.webp" width="300" alt="Killer: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/killer_rules.webp" width="300" alt="Killer: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="littlekiller"></a>
#### 39. Little Killer · Little Killer (`littlekiller`)

**Suma diagonalei, din margine.**

Un număr cu săgeată în afara grilei este suma cifrelor de pe diagonala spre care arată; cifrele se pot repeta pe diagonală.

<table><tr><td align="center"><img src="../screens/littlekiller_a.webp" width="300" alt="Little Killer: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 21 indicii)</sub></td><td align="center"><img src="../screens/littlekiller_b.webp" width="300" alt="Little Killer: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 9 (rând 3, col. 6): rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.
- **Cod pentru același puzzle:** `littlekiller-9-easy-459682937` (lipește-l în „Joc nou → Cod”) · efort solver: 31 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/littlekiller_card.webp" width="200" alt="Little Killer: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_fiche.webp" width="260" alt="Little Killer: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/littlekiller_s6.webp" width="200" alt="Little Killer: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_s9.webp" width="200" alt="Little Killer: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/littlekiller_easy.webp" width="200" alt="Little Killer: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_a.webp" width="200" alt="Little Killer: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_hard.webp" width="200" alt="Little Killer: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/littlekiller_notes.webp" width="200" alt="Little Killer: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_check.webp" width="200" alt="Little Killer: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_solved.webp" width="200" alt="Little Killer: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/littlekiller_dark.webp" width="200" alt="Little Killer: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_mobile.webp" width="150" alt="Little Killer: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/littlekiller_en.webp" width="300" alt="Little Killer: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/littlekiller_rules.webp" width="300" alt="Little Killer: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

<a id="luk"></a>
#### 40. Little Killer unic · Little Unique Killer (`luk`)

**Little Killer cu cifre distincte pe diagonală.**

Numărul de lângă o săgeată oblică este suma cifrelor de pe diagonala spre care arată, iar pe fiecare asemenea diagonală cifrele sunt toate diferite (aici e deosebirea față de Little Killer clasic). Numele „Little Unique Killer” este folosit de această aplicație; nu l-am găsit ca variantă publicată sub acest nume.

<table><tr><td align="center"><img src="../screens/luk_a.webp" width="300" alt="Little Killer unic: puzzle la start"><br><sub>Puzzle la start (9×9 · mediu · 16 indicii)</sub></td><td align="center"><img src="../screens/luk_b.webp" width="300" alt="Little Killer unic: după 4 pași"><br><sub>După 4 pași „Pas cu pas”</sub></td></tr></table>

- **Ultimul pas explicat de aplicație:** 8 (rând 3, col. 4): nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).
- **Cod pentru același puzzle:** `luk-9-medium-1817969793` (lipește-l în „Joc nou → Cod”) · efort solver: 6 ramificări

<details><summary><b>Galerie completă: toate tipurile de capturi</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/luk_card.webp" width="200" alt="Little Killer unic: Cardul din Atlas"><br><sub>Cardul din Atlas</sub></td><td align="center" valign="top"><img src="../screens/luk_fiche.webp" width="260" alt="Little Killer unic: Fișa (se deschide la clic pe card)"><br><sub>Fișa (se deschide la clic pe card)</sub></td></tr>
</table>

<p><b>Mărimi (nivel mediu)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/luk_s6.webp" width="200" alt="Little Killer unic: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../screens/luk_s9.webp" width="200" alt="Little Killer unic: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultate</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/luk_easy.webp" width="200" alt="Little Killer unic: Ușor"><br><sub>Ușor</sub></td><td align="center" valign="top"><img src="../screens/luk_a.webp" width="200" alt="Little Killer unic: Mediu"><br><sub>Mediu</sub></td><td align="center" valign="top"><img src="../screens/luk_hard.webp" width="200" alt="Little Killer unic: Greu"><br><sub>Greu</sub></td></tr>
</table>

<p><b>Stări de joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/luk_notes.webp" width="200" alt="Little Killer unic: Auto-notițe (candidați)"><br><sub>Auto-notițe (candidați)</sub></td><td align="center" valign="top"><img src="../screens/luk_check.webp" width="200" alt="Little Killer unic: „Verifică” cu o cifră greșită (roșu)"><br><sub>„Verifică” cu o cifră greșită (roșu)</sub></td><td align="center" valign="top"><img src="../screens/luk_solved.webp" width="200" alt="Little Killer unic: Soluția completă"><br><sub>Soluția completă</sub></td></tr>
</table>

<p><b>Teme și dispozitive</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/luk_dark.webp" width="200" alt="Little Killer unic: Temă întunecată"><br><sub>Temă întunecată</sub></td><td align="center" valign="top"><img src="../screens/luk_mobile.webp" width="150" alt="Little Killer unic: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../screens/luk_en.webp" width="300" alt="Little Killer unic: Interfața în engleză"><br><sub>Interfața în engleză</sub></td></tr>
</table>

<p><b>Panoul de reguli din joc</b></p>

<table>
<tr><td align="center" valign="top"><img src="../screens/luk_rules.webp" width="300" alt="Little Killer unic: Regulile afișate lângă tablă"><br><sub>Regulile afișate lângă tablă</sub></td></tr>
</table>

</details>

