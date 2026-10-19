# Katalógus: Szomszédok (4)

[English](../en/03-vecini.md) · [Română](../03-vecini.md) · [Français](../fr/03-vecini.md) · [Italiano](../it/03-vecini.md) · [Español](../es/03-vecini.md) · [Português](../pt/03-vecini.md) · [Deutsch](../de/03-vecini.md) · **Magyar**

[← README](../../../README.hu.md) · [Összes kategória](README.md)

[Méret és jelek](01-marime-si-simboluri.md) · [Tartományok és csoportok](02-regiuni-si-grupuri.md) · **Szomszédok** · [Paritás, pontok, jelek](04-paritate-puncte-semne.md) · [Összegek](05-sume.md) · [Peremtámpontok](06-indicii-pe-margine.md) · [Vonalak](07-linii.md) · [Összetett rácsok](08-grile-compuse.md) · [Közeli rokonok](09-rude-apropiate.md) · [Topológiák és tündér-lépések](10-topologii-si-mutari-fairy.md) · [Globális szabályok](11-reguli-globale.md) · [Cellán belüli támpontok](12-indicii-in-celule.md) · [Magasabb dimenziók](13-dimensiuni-superioare.md)

---


_A szabály megmondja, mely cellák nem tartalmazhatják ugyanazt vagy közeli számjegyet; az ütközések pirossal látszanak, ha az „ütközések” be van jelölve._

<a id="antiknight"></a>
#### 16. Anti-huszár · Anti-knight (`antiknight`)

**Nincs azonos számjegy egy huszárlépésnyire.**

A klasszikus szabályok mellett két, egymástól sakkhuszár-lépésnyire lévő cella nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9.

<table><tr><td align="center"><img src="../../screens/antiknight_a.webp" width="300" alt="Anti-huszár: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 24 adott)</sub></td><td align="center"><img src="../../screens/antiknight_b.webp" width="300" alt="Anti-huszár: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 6 (4. sor, 5. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `antiknight-9-medium-867238284` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_card.webp" width="200" alt="Anti-huszár: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_fiche.webp" width="260" alt="Anti-huszár: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_s9.webp" width="200" alt="Anti-huszár: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_easy.webp" width="200" alt="Anti-huszár: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_a.webp" width="200" alt="Anti-huszár: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_hard.webp" width="200" alt="Anti-huszár: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_notes.webp" width="200" alt="Anti-huszár: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_check.webp" width="200" alt="Anti-huszár: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_solved.webp" width="200" alt="Anti-huszár: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_dark.webp" width="200" alt="Anti-huszár: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_mobile.webp" width="150" alt="Anti-huszár: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_en.webp" width="300" alt="Anti-huszár: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_rules.webp" width="300" alt="Anti-huszár: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="antiking"></a>
#### 17. Anti-király · Anti-king (`antiking`)

**Az átlós szomszédok különböznek.**

A klasszikus szabályok mellett két átlósan szomszédos cella (királylépés) nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9.

<table><tr><td align="center"><img src="../../screens/antiking_a.webp" width="300" alt="Anti-király: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 26 adott)</sub></td><td align="center"><img src="../../screens/antiking_b.webp" width="300" alt="Anti-király: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 2 (1. sor, 2. oszlop): ez az egyetlen cella a megjelölt oszlopban, ahová 2 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `antiking-9-medium-1002649182` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_card.webp" width="200" alt="Anti-király: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/antiking_fiche.webp" width="260" alt="Anti-király: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_s9.webp" width="200" alt="Anti-király: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_easy.webp" width="200" alt="Anti-király: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/antiking_a.webp" width="200" alt="Anti-király: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/antiking_hard.webp" width="200" alt="Anti-király: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_notes.webp" width="200" alt="Anti-király: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_check.webp" width="200" alt="Anti-király: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_solved.webp" width="200" alt="Anti-király: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_dark.webp" width="200" alt="Anti-király: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/antiking_mobile.webp" width="150" alt="Anti-király: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_en.webp" width="300" alt="Anti-király: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_rules.webp" width="300" alt="Anti-király: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="nonconsec"></a>
#### 18. Nincs egymást követő · Non-consecutive (`nonconsec`)

**A szomszédok nem egymást követők.**

A klasszikus szabályok mellett a vízszintesen vagy függőlegesen szomszédos cellák nem tartalmazhatnak egymást követő számjegyeket (például 4 az 5 mellett). 9×9 és 6×6.

<table><tr><td align="center"><img src="../../screens/nonconsec_a.webp" width="300" alt="Nincs egymást követő: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 24 adott)</sub></td><td align="center"><img src="../../screens/nonconsec_b.webp" width="300" alt="Nincs egymást követő: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 6 (3. sor, 5. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 6 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `nonconsec-9-medium-749961353` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_card.webp" width="200" alt="Nincs egymást követő: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_fiche.webp" width="260" alt="Nincs egymást követő: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_s6.webp" width="200" alt="Nincs egymást követő: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_s9.webp" width="200" alt="Nincs egymást követő: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_easy.webp" width="200" alt="Nincs egymást követő: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_a.webp" width="200" alt="Nincs egymást követő: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_hard.webp" width="200" alt="Nincs egymást követő: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_notes.webp" width="200" alt="Nincs egymást követő: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_check.webp" width="200" alt="Nincs egymást követő: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_solved.webp" width="200" alt="Nincs egymást követő: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_dark.webp" width="200" alt="Nincs egymást követő: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_mobile.webp" width="150" alt="Nincs egymást követő: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_en.webp" width="300" alt="Nincs egymást követő: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_rules.webp" width="300" alt="Nincs egymást követő: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="miracle"></a>
#### 19. Csoda · Miracle (`miracle`)

**Anti-huszár + anti-király + nincs egymást követő.**

A fenti három megkötés egyszerre. A változat rendkívül szigorú: a rejtvényekben nagyon kevés az adott számjegy.

<table><tr><td align="center"><img src="../../screens/miracle_a.webp" width="300" alt="Csoda: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 3 adott)</sub></td><td align="center"><img src="../../screens/miracle_b.webp" width="300" alt="Csoda: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 1 (5. sor, 4. oszlop): nincs közvetlen következtetés; a számjegy az egyértelmű megoldásból származik (találgatásra lenne szükség).
- **Kód ugyanahhoz a rejtvényhez:** `miracle-9-medium-1546367855` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 113 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_card.webp" width="200" alt="Csoda: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/miracle_fiche.webp" width="260" alt="Csoda: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_s9.webp" width="200" alt="Csoda: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_easy.webp" width="200" alt="Csoda: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/miracle_a.webp" width="200" alt="Csoda: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/miracle_hard.webp" width="200" alt="Csoda: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_notes.webp" width="200" alt="Csoda: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_check.webp" width="200" alt="Csoda: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_solved.webp" width="200" alt="Csoda: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_dark.webp" width="200" alt="Csoda: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/miracle_mobile.webp" width="150" alt="Csoda: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_en.webp" width="300" alt="Csoda: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_rules.webp" width="300" alt="Csoda: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

