# Katalógus: Magasabb dimenziók (5)

[English](../en/13-dimensiuni-superioare.md) · [Română](../13-dimensiuni-superioare.md) · [Français](../fr/13-dimensiuni-superioare.md) · [Italiano](../it/13-dimensiuni-superioare.md) · [Español](../es/13-dimensiuni-superioare.md) · [Português](../pt/13-dimensiuni-superioare.md) · [Deutsch](../de/13-dimensiuni-superioare.md) · **Magyar**

[← README](../../../README.hu.md) · [Összes kategória](README.md)

[Méret és jelek](01-marime-si-simboluri.md) · [Tartományok és csoportok](02-regiuni-si-grupuri.md) · [Szomszédok](03-vecini.md) · [Paritás, pontok, jelek](04-paritate-puncte-semne.md) · [Összegek](05-sume.md) · [Peremtámpontok](06-indicii-pe-margine.md) · [Vonalak](07-linii.md) · [Összetett rácsok](08-grile-compuse.md) · [Közeli rokonok](09-rude-apropiate.md) · [Topológiák és tündér-lépések](10-topologii-si-mutari-fairy.md) · [Globális szabályok](11-reguli-globale.md) · [Cellán belüli támpontok](12-indicii-in-celule.md) · **Magasabb dimenziók**

---


_A rétegek rácsszeletekként jelennek meg; a 3D kockáknál van egy forgatható „3D nézet” is (az egérrel húzva)._

<a id="cube3"></a>
#### 132. 3D latin kocka · Latin cube 3D (`cube3`)

**A kocka minden vonala egyszer tartalmazza az összes számjegyet.**

Az N×N×N-es kocka N, egymás mellé helyezett rétegre van kibontva (üres hellyel elválasztva). Mindhárom irányban minden vonal — sor a rétegben, oszlop a rétegben és „mélységben” (azonos pozíció az összes rétegben) — egyszer tartalmazza az összes számjegyet. Méretek: 4, 5, 6. A kocka nagyon merev: „Nehéz” szinten kevés adott számjegy marad. A megjelenítés rétegenként történik; átválthatsz a „3D nézetre” (húzással forgathatod a kockát, a csúszka elrejti az elülső rétegeket; cellákat kattintással jelölsz ki).

<table><tr><td align="center"><img src="../../screens/cube3_a.webp" width="300" alt="3D latin kocka: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (4×4 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/cube3_b.webp" width="300" alt="3D latin kocka: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 4 (3. sor, 3. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `cube3-4-medium-3792369668` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cube3_card.webp" width="200" alt="3D latin kocka: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/cube3_fiche.webp" width="260" alt="3D latin kocka: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cube3_s4.webp" width="200" alt="3D latin kocka: 4-es méret"><br><sub>4-es méret</sub></td><td align="center" valign="top"><img src="../../screens/cube3_s5.webp" width="200" alt="3D latin kocka: 5-ös méret"><br><sub>5-ös méret</sub></td><td align="center" valign="top"><img src="../../screens/cube3_s6.webp" width="200" alt="3D latin kocka: 6-os méret"><br><sub>6-os méret</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cube3_easy.webp" width="200" alt="3D latin kocka: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/cube3_a.webp" width="200" alt="3D latin kocka: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/cube3_hard.webp" width="200" alt="3D latin kocka: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cube3_notes.webp" width="200" alt="3D latin kocka: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/cube3_check.webp" width="200" alt="3D latin kocka: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/cube3_solved.webp" width="200" alt="3D latin kocka: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cube3_dark.webp" width="200" alt="3D latin kocka: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/cube3_mobile.webp" width="150" alt="3D latin kocka: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cube3_en.webp" width="300" alt="3D latin kocka: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cube3_rules.webp" width="300" alt="3D latin kocka: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="cubebox"></a>
#### 133. Kocka 2×2-es blokkokkal · Cube with 2×2 boxes (`cubebox`)

**4×4×4-es latin kocka 2×2-es blokkokkal minden rétegben.**

Mint a 3D latin kockánál (4×4×4), de ráadásul minden rétegben négy 2×2-es blokk (vastagon körvonalazva) van, amelyek mindegyike egyszer tartalmazza az összes számjegyet: minden réteg tehát egy 4×4-es Sudoku, és a „mélységbeli” vonalak is egyszer tartalmazzák az összes számjegyet. Csak 4×4×4.

<table><tr><td align="center"><img src="../../screens/cubebox_a.webp" width="300" alt="Kocka 2×2-es blokkokkal: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (4×4 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/cubebox_b.webp" width="300" alt="Kocka 2×2-es blokkokkal: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 2 (1. sor, 1. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `cubebox-4-medium-831564534` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cubebox_card.webp" width="200" alt="Kocka 2×2-es blokkokkal: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/cubebox_fiche.webp" width="260" alt="Kocka 2×2-es blokkokkal: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cubebox_s4.webp" width="200" alt="Kocka 2×2-es blokkokkal: 4-es méret"><br><sub>4-es méret</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cubebox_easy.webp" width="200" alt="Kocka 2×2-es blokkokkal: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/cubebox_a.webp" width="200" alt="Kocka 2×2-es blokkokkal: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/cubebox_hard.webp" width="200" alt="Kocka 2×2-es blokkokkal: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cubebox_notes.webp" width="200" alt="Kocka 2×2-es blokkokkal: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/cubebox_check.webp" width="200" alt="Kocka 2×2-es blokkokkal: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/cubebox_solved.webp" width="200" alt="Kocka 2×2-es blokkokkal: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cubebox_dark.webp" width="200" alt="Kocka 2×2-es blokkokkal: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/cubebox_mobile.webp" width="150" alt="Kocka 2×2-es blokkokkal: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cubebox_en.webp" width="300" alt="Kocka 2×2-es blokkokkal: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cubebox_rules.webp" width="300" alt="Kocka 2×2-es blokkokkal: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="hyper4"></a>
#### 134. 4D hiperkocka · Hypercube 4D (`hyper4`)

**Sudoku négy dimenzióban.**

Az N×N×N×N-es hiperkocka N×N-es rétegek N×N-es mozaikjaként van kibontva (az első két koordináta választja ki a réteget: rétegsor és rétegoszlop). Minden vonal a négy tengely bármelyikén egyszer tartalmazza az összes számjegyet. Méretek: 3 (81 cella) és 4 (256 cella). Nagyon merev: kevés adott számjegy.

<table><tr><td align="center"><img src="../../screens/hyper4_a.webp" width="300" alt="4D hiperkocka: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (3×3 · közepes · 29 adott)</sub></td><td align="center"><img src="../../screens/hyper4_b.webp" width="300" alt="4D hiperkocka: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 3 (2. sor, 2. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `hyper4-3-medium-3877808544` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper4_card.webp" width="200" alt="4D hiperkocka: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_fiche.webp" width="260" alt="4D hiperkocka: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper4_s3.webp" width="200" alt="4D hiperkocka: 3-as méret"><br><sub>3-as méret</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_s4.webp" width="200" alt="4D hiperkocka: 4-es méret"><br><sub>4-es méret</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper4_easy.webp" width="200" alt="4D hiperkocka: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_a.webp" width="200" alt="4D hiperkocka: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_hard.webp" width="200" alt="4D hiperkocka: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper4_notes.webp" width="200" alt="4D hiperkocka: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_check.webp" width="200" alt="4D hiperkocka: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_solved.webp" width="200" alt="4D hiperkocka: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper4_dark.webp" width="200" alt="4D hiperkocka: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_mobile.webp" width="150" alt="4D hiperkocka: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/hyper4_en.webp" width="300" alt="4D hiperkocka: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper4_rules.webp" width="300" alt="4D hiperkocka: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="hyper5"></a>
#### 135. 5D hiperkocka · Hypercube 5D (`hyper5`)

**Sudoku öt dimenzióban (3⁵ = 243 cella).**

A 3×3×3×3×3-as hiperkocka három, egymás mellé helyezett, 3×3-as rétegekből álló 3×3-as mozaikba van kibontva. Minden vonal az öt tengely bármelyikén egyszer tartalmazza az összes számjegyet. Nagyon merev: csak néhány adott számjegy; a tábla széles, ezért a cellák keskeny képernyőkön kicsik.

<table><tr><td align="center"><img src="../../screens/hyper5_a.webp" width="300" alt="5D hiperkocka: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (3×3 · közepes · 87 adott)</sub></td><td align="center"><img src="../../screens/hyper5_b.webp" width="300" alt="5D hiperkocka: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 2 (1. sor, 5. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `hyper5-3-medium-2668497273` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper5_card.webp" width="200" alt="5D hiperkocka: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/hyper5_fiche.webp" width="260" alt="5D hiperkocka: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper5_s3.webp" width="200" alt="5D hiperkocka: 3-as méret"><br><sub>3-as méret</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper5_easy.webp" width="200" alt="5D hiperkocka: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/hyper5_a.webp" width="200" alt="5D hiperkocka: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/hyper5_hard.webp" width="200" alt="5D hiperkocka: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper5_notes.webp" width="200" alt="5D hiperkocka: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/hyper5_check.webp" width="200" alt="5D hiperkocka: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/hyper5_solved.webp" width="200" alt="5D hiperkocka: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper5_dark.webp" width="200" alt="5D hiperkocka: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/hyper5_mobile.webp" width="150" alt="5D hiperkocka: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/hyper5_en.webp" width="300" alt="5D hiperkocka: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/hyper5_rules.webp" width="300" alt="5D hiperkocka: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="greco"></a>
#### 136. Görög–latin (ortogonális négyzetek) · Greco-Latin (orthogonal squares) (`greco`)

**Két egymásra helyezett latin négyzet: minden szám–betű pár egyszer fordul elő.**

Két egymás mellett álló N×N-es négyzet: a bal oldali számjegyekkel, a jobb oldali betűkkel (A, B, C…; kitöltéskor az „1/A” billentyű a bal oldalon az 1-es számjegyet, a jobb oldalon az A betűt jelenti). Mindkét négyzetben minden sor és oszlop egyszer tartalmazza az összes jelet. Ráadásul a két négyzet ortogonális: ha mindkét négyzetben ugyanazt a pozíciót nézed, a (számjegy, betű) pár mind az N² pozícióban különböző — minden lehetséges pár pontosan egyszer fordul elő. Méretek: 3, 4, 5, 7 (6-ra nincs ilyen pár; a 8 és a 9 a gyorsaság kedvéért kimaradt). 7×7-es „Nehéz” szinten az előállítás nagyjából 10–15 másodpercig tarthat.

<table><tr><td align="center"><img src="../../screens/greco_a.webp" width="300" alt="Görög–latin (ortogonális négyzetek): kiinduló rejtvény"><br><sub>Kiinduló rejtvény (4×4 · közepes · 12 adott)</sub></td><td align="center"><img src="../../screens/greco_b.webp" width="300" alt="Görög–latin (ortogonális négyzetek): 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** D (2. sor, 9. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `greco-4-medium-3789110344` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/greco_card.webp" width="200" alt="Görög–latin (ortogonális négyzetek): Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/greco_fiche.webp" width="260" alt="Görög–latin (ortogonális négyzetek): Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/greco_s3.webp" width="200" alt="Görög–latin (ortogonális négyzetek): 3-as méret"><br><sub>3-as méret</sub></td><td align="center" valign="top"><img src="../../screens/greco_s4.webp" width="200" alt="Görög–latin (ortogonális négyzetek): 4-es méret"><br><sub>4-es méret</sub></td><td align="center" valign="top"><img src="../../screens/greco_s5.webp" width="200" alt="Görög–latin (ortogonális négyzetek): 5-ös méret"><br><sub>5-ös méret</sub></td></tr>
<tr><td align="center" valign="top"><img src="../../screens/greco_s7.webp" width="200" alt="Görög–latin (ortogonális négyzetek): 7-es méret"><br><sub>7-es méret</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/greco_easy.webp" width="200" alt="Görög–latin (ortogonális négyzetek): Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/greco_a.webp" width="200" alt="Görög–latin (ortogonális négyzetek): Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/greco_hard.webp" width="200" alt="Görög–latin (ortogonális négyzetek): Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/greco_notes.webp" width="200" alt="Görög–latin (ortogonális négyzetek): Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/greco_check.webp" width="200" alt="Görög–latin (ortogonális négyzetek): „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/greco_solved.webp" width="200" alt="Görög–latin (ortogonális négyzetek): A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/greco_dark.webp" width="200" alt="Görög–latin (ortogonális négyzetek): Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/greco_mobile.webp" width="150" alt="Görög–latin (ortogonális négyzetek): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/greco_en.webp" width="300" alt="Görög–latin (ortogonális négyzetek): Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/greco_rules.webp" width="300" alt="Görög–latin (ortogonális négyzetek): A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>
