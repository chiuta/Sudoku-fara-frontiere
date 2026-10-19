# Katalógus: Topológiák és tündér-lépések (9)

[English](../en/10-topologii-si-mutari-fairy.md) · [Română](../10-topologii-si-mutari-fairy.md) · [Français](../fr/10-topologii-si-mutari-fairy.md) · [Italiano](../it/10-topologii-si-mutari-fairy.md) · [Español](../es/10-topologii-si-mutari-fairy.md) · [Português](../pt/10-topologii-si-mutari-fairy.md) · [Deutsch](../de/10-topologii-si-mutari-fairy.md) · **Magyar**

[← README](../../../README.hu.md) · [Összes kategória](README.md)

[Méret és jelek](01-marime-si-simboluri.md) · [Tartományok és csoportok](02-regiuni-si-grupuri.md) · [Szomszédok](03-vecini.md) · [Paritás, pontok, jelek](04-paritate-puncte-semne.md) · [Összegek](05-sume.md) · [Peremtámpontok](06-indicii-pe-margine.md) · [Vonalak](07-linii.md) · [Összetett rácsok](08-grile-compuse.md) · [Közeli rokonok](09-rude-apropiate.md) · **Topológiák és tündér-lépések** · [Globális szabályok](11-reguli-globale.md) · [Cellán belüli támpontok](12-indicii-in-celule.md) · [Magasabb dimenziók](13-dimensiuni-superioare.md)

---


_A rács szélei a változat szabálya szerint összeragadnak; a szélső cellának a szemközti oldalon is vannak szomszédai._

<a id="antibishop"></a>
#### 102. Anti-alfil · Anti-alfil (`antibishop`)

**Nincs azonos számjegy két átlós lépésnyire.**

A klasszikus szabályok mellett két, pontosan két átlós lépésnyire lévő cella (2 sor és 2 oszlop távolság, a tündérsakk „alfil” lépése) nem tartalmazhatja ugyanazt a számjegyet. Ez nem a csúszó futó (az egész átlókat írná elő); csak a 2×2-es ugrás. Méretek: 9×9 és 6×6.

<table><tr><td align="center"><img src="../../screens/antibishop_a.webp" width="300" alt="Anti-alfil: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 26 adott)</sub></td><td align="center"><img src="../../screens/antibishop_b.webp" width="300" alt="Anti-alfil: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 9 (7. sor, 3. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 9 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `antibishop-9-medium-4275501725` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 1 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_card.webp" width="200" alt="Anti-alfil: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_fiche.webp" width="260" alt="Anti-alfil: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_s6.webp" width="200" alt="Anti-alfil: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_s9.webp" width="200" alt="Anti-alfil: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_easy.webp" width="200" alt="Anti-alfil: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_a.webp" width="200" alt="Anti-alfil: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_hard.webp" width="200" alt="Anti-alfil: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_notes.webp" width="200" alt="Anti-alfil: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_check.webp" width="200" alt="Anti-alfil: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_solved.webp" width="200" alt="Anti-alfil: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_dark.webp" width="200" alt="Anti-alfil: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_mobile.webp" width="150" alt="Anti-alfil: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_en.webp" width="300" alt="Anti-alfil: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_rules.webp" width="300" alt="Anti-alfil: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="anticamel"></a>
#### 103. Anti-teve · Anti-camel (`anticamel`)

**Nincs azonos számjegy egy teveugrásnyira (1,3).**

A klasszikus szabályok mellett két, teveugrásnyira lévő cella (1 sor és 3 oszlop, vagy 3 sor és 1 oszlop) nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9.

<table><tr><td align="center"><img src="../../screens/anticamel_a.webp" width="300" alt="Anti-teve: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 26 adott)</sub></td><td align="center"><img src="../../screens/anticamel_b.webp" width="300" alt="Anti-teve: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 7 (4. sor, 5. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `anticamel-9-medium-634926365` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_card.webp" width="200" alt="Anti-teve: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_fiche.webp" width="260" alt="Anti-teve: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_s9.webp" width="200" alt="Anti-teve: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_easy.webp" width="200" alt="Anti-teve: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_a.webp" width="200" alt="Anti-teve: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_hard.webp" width="200" alt="Anti-teve: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_notes.webp" width="200" alt="Anti-teve: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_check.webp" width="200" alt="Anti-teve: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_solved.webp" width="200" alt="Anti-teve: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_dark.webp" width="200" alt="Anti-teve: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_mobile.webp" width="150" alt="Anti-teve: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_en.webp" width="300" alt="Anti-teve: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_rules.webp" width="300" alt="Anti-teve: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="antizebra"></a>
#### 104. Anti-zebra · Anti-zebra (`antizebra`)

**Nincs azonos számjegy egy zebraugrásnyira (2,3).**

A klasszikus szabályok mellett két, zebraugrásnyira lévő cella (2 sor és 3 oszlop, vagy 3 sor és 2 oszlop) nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9.

<table><tr><td align="center"><img src="../../screens/antizebra_a.webp" width="300" alt="Anti-zebra: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 26 adott)</sub></td><td align="center"><img src="../../screens/antizebra_b.webp" width="300" alt="Anti-zebra: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 5 (1. sor, 3. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `antizebra-9-medium-439216389` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_card.webp" width="200" alt="Anti-zebra: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_fiche.webp" width="260" alt="Anti-zebra: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_s9.webp" width="200" alt="Anti-zebra: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_easy.webp" width="200" alt="Anti-zebra: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_a.webp" width="200" alt="Anti-zebra: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_hard.webp" width="200" alt="Anti-zebra: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_notes.webp" width="200" alt="Anti-zebra: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_check.webp" width="200" alt="Anti-zebra: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_solved.webp" width="200" alt="Anti-zebra: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_dark.webp" width="200" alt="Anti-zebra: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_mobile.webp" width="150" alt="Anti-zebra: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_en.webp" width="300" alt="Anti-zebra: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_rules.webp" width="300" alt="Anti-zebra: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="torusking"></a>
#### 105. Tórusz anti-király · Torus anti-king (`torusking`)

**Anti-király egy tóruszként záródó rácson.**

A rács a széleken túl folytatódik: a felső él az alsóhoz, a bal a jobbhoz kapcsolódik. Két átlósan szomszédos cella (királylépés), a szélen átnyúlóan is, nem tartalmazhatja ugyanazt a számjegyet (például a bal felső sarok átlósan szomszédos a jobb alsóval). Csak 9×9.

<table><tr><td align="center"><img src="../../screens/torusking_a.webp" width="300" alt="Tórusz anti-király: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/torusking_b.webp" width="300" alt="Tórusz anti-király: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 6 (5. sor, 5. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 6 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `torusking-9-medium-1622319202` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 17 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_card.webp" width="200" alt="Tórusz anti-király: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/torusking_fiche.webp" width="260" alt="Tórusz anti-király: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_s9.webp" width="200" alt="Tórusz anti-király: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_easy.webp" width="200" alt="Tórusz anti-király: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/torusking_a.webp" width="200" alt="Tórusz anti-király: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/torusking_hard.webp" width="200" alt="Tórusz anti-király: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_notes.webp" width="200" alt="Tórusz anti-király: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_check.webp" width="200" alt="Tórusz anti-király: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_solved.webp" width="200" alt="Tórusz anti-király: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_dark.webp" width="200" alt="Tórusz anti-király: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/torusking_mobile.webp" width="150" alt="Tórusz anti-király: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_en.webp" width="300" alt="Tórusz anti-király: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_rules.webp" width="300" alt="Tórusz anti-király: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="torusknight"></a>
#### 106. Tórusz anti-huszár · Torus anti-knight (`torusknight`)

**Anti-huszár egy tóruszként záródó rácson.**

A rács a széleken túl folytatódik (felül az alulival, balra a jobbal). Két, huszárlépésnyire lévő cella, a szélen átnyúlóan is, nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9.

<table><tr><td align="center"><img src="../../screens/torusknight_a.webp" width="300" alt="Tórusz anti-huszár: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/torusknight_b.webp" width="300" alt="Tórusz anti-huszár: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 5 (3. sor, 6. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 5 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `torusknight-9-medium-2092083509` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_card.webp" width="200" alt="Tórusz anti-huszár: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_fiche.webp" width="260" alt="Tórusz anti-huszár: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_s9.webp" width="200" alt="Tórusz anti-huszár: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_easy.webp" width="200" alt="Tórusz anti-huszár: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_a.webp" width="200" alt="Tórusz anti-huszár: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_hard.webp" width="200" alt="Tórusz anti-huszár: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_notes.webp" width="200" alt="Tórusz anti-huszár: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_check.webp" width="200" alt="Tórusz anti-huszár: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_solved.webp" width="200" alt="Tórusz anti-huszár: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_dark.webp" width="200" alt="Tórusz anti-huszár: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_mobile.webp" width="150" alt="Tórusz anti-huszár: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_en.webp" width="300" alt="Tórusz anti-huszár: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_rules.webp" width="300" alt="Tórusz anti-huszár: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="cylking"></a>
#### 107. Henger anti-király · Cylinder anti-king (`cylking`)

**A bal a jobbhoz tapad; fent és lent marad a szél.**

A bal szél a jobb széllel összetapad, mint egy hengeren; fent és lent nem tapad össze. Két, királylépésnyire lévő cella (a bal–jobb illesztésen átnyúlóan is) nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9.

<table><tr><td align="center"><img src="../../screens/cylking_a.webp" width="300" alt="Henger anti-király: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 24 adott)</sub></td><td align="center"><img src="../../screens/cylking_b.webp" width="300" alt="Henger anti-király: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 8 (7. sor, 5. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 8 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `cylking-9-medium-3432982682` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 2 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_card.webp" width="200" alt="Henger anti-király: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/cylking_fiche.webp" width="260" alt="Henger anti-király: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_s9.webp" width="200" alt="Henger anti-király: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_easy.webp" width="200" alt="Henger anti-király: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/cylking_a.webp" width="200" alt="Henger anti-király: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/cylking_hard.webp" width="200" alt="Henger anti-király: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_notes.webp" width="200" alt="Henger anti-király: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_check.webp" width="200" alt="Henger anti-király: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_solved.webp" width="200" alt="Henger anti-király: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_dark.webp" width="200" alt="Henger anti-király: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/cylking_mobile.webp" width="150" alt="Henger anti-király: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_en.webp" width="300" alt="Henger anti-király: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_rules.webp" width="300" alt="Henger anti-király: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="mobiusking"></a>
#### 108. Möbius anti-király · Möbius anti-king (`mobiusking`)

**A bal a jobbhoz tapad egy csavarással.**

A bal szél a jobb széllel csavarással tapad össze (az r. sor a 10−r. sorhoz kapcsolódik), mint egy Möbius-szalag. Két, királylépésnyire lévő cella, az illesztésen átnyúlóan is, nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9. Az illesztési megállapodás az itt leírt.

<table><tr><td align="center"><img src="../../screens/mobiusking_a.webp" width="300" alt="Möbius anti-király: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/mobiusking_b.webp" width="300" alt="Möbius anti-király: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 6 (5. sor, 2. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `mobiusking-9-medium-3019619418` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 4 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_card.webp" width="200" alt="Möbius anti-király: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_fiche.webp" width="260" alt="Möbius anti-király: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_s9.webp" width="200" alt="Möbius anti-király: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_easy.webp" width="200" alt="Möbius anti-király: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_a.webp" width="200" alt="Möbius anti-király: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_hard.webp" width="200" alt="Möbius anti-király: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_notes.webp" width="200" alt="Möbius anti-király: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_check.webp" width="200" alt="Möbius anti-király: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_solved.webp" width="200" alt="Möbius anti-király: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_dark.webp" width="200" alt="Möbius anti-király: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_mobile.webp" width="150" alt="Möbius anti-király: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_en.webp" width="300" alt="Möbius anti-király: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_rules.webp" width="300" alt="Möbius anti-király: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="kleinking"></a>
#### 109. Klein anti-király · Klein anti-king (`kleinking`)

**Klein-palack: bal–jobb csavarással, fent–lent egyszerűen.**

A bal szél a jobb széllel csavarással tapad össze (az r. sor a 10−r. sorhoz kapcsolódik), a felső pedig csavarás nélkül az alsóhoz — ez egy Klein-palack. Két, királylépésnyire lévő cella, az illesztéseken átnyúlóan is, nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9. Az illesztési megállapodás az itt leírt.

<table><tr><td align="center"><img src="../../screens/kleinking_a.webp" width="300" alt="Klein anti-király: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/kleinking_b.webp" width="300" alt="Klein anti-király: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 8 (4. sor, 8. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 8 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `kleinking-9-medium-1542891122` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_card.webp" width="200" alt="Klein anti-király: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_fiche.webp" width="260" alt="Klein anti-király: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_s9.webp" width="200" alt="Klein anti-király: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_easy.webp" width="200" alt="Klein anti-király: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_a.webp" width="200" alt="Klein anti-király: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_hard.webp" width="200" alt="Klein anti-király: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_notes.webp" width="200" alt="Klein anti-király: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_check.webp" width="200" alt="Klein anti-király: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_solved.webp" width="200" alt="Klein anti-király: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_dark.webp" width="200" alt="Klein anti-király: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_mobile.webp" width="150" alt="Klein anti-király: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_en.webp" width="300" alt="Klein anti-király: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_rules.webp" width="300" alt="Klein anti-király: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="projking"></a>
#### 110. Projektív sík anti-király · Projective-plane anti-king (`projking`)

**Mindkét szélpár csavarással tapad össze.**

A bal a jobbhoz csavarással tapad (az r. sor a 10−r. sorhoz), és a felső az alsóhoz csavarással (a c. oszlop a 10−c. oszlophoz): egy valós projektív sík. Két, királylépésnyire lévő cella, az illesztéseken átnyúlóan is, nem tartalmazhatja ugyanazt a számjegyet. Csak 9×9. Az illesztési megállapodás az itt leírt.

<table><tr><td align="center"><img src="../../screens/projking_a.webp" width="300" alt="Projektív sík anti-király: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/projking_b.webp" width="300" alt="Projektív sík anti-király: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 1 (6. sor, 6. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 1 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `projking-9-medium-1483663755` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_card.webp" width="200" alt="Projektív sík anti-király: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/projking_fiche.webp" width="260" alt="Projektív sík anti-király: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_s9.webp" width="200" alt="Projektív sík anti-király: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_easy.webp" width="200" alt="Projektív sík anti-király: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/projking_a.webp" width="200" alt="Projektív sík anti-király: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/projking_hard.webp" width="200" alt="Projektív sík anti-király: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_notes.webp" width="200" alt="Projektív sík anti-király: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/projking_check.webp" width="200" alt="Projektív sík anti-király: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/projking_solved.webp" width="200" alt="Projektív sík anti-király: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_dark.webp" width="200" alt="Projektív sík anti-király: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/projking_mobile.webp" width="150" alt="Projektív sík anti-király: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/projking_en.webp" width="300" alt="Projektív sík anti-király: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_rules.webp" width="300" alt="Projektív sík anti-király: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

