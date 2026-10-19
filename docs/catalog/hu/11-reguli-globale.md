# Katalógus: Globális szabályok (10)

[English](../en/11-reguli-globale.md) · [Română](../11-reguli-globale.md) · [Français](../fr/11-reguli-globale.md) · [Italiano](../it/11-reguli-globale.md) · [Español](../es/11-reguli-globale.md) · [Português](../pt/11-reguli-globale.md) · [Deutsch](../de/11-reguli-globale.md) · **Magyar**

[← README](../../../README.hu.md) · [Összes kategória](README.md)

[Méret és jelek](01-marime-si-simboluri.md) · [Tartományok és csoportok](02-regiuni-si-grupuri.md) · [Szomszédok](03-vecini.md) · [Paritás, pontok, jelek](04-paritate-puncte-semne.md) · [Összegek](05-sume.md) · [Peremtámpontok](06-indicii-pe-margine.md) · [Vonalak](07-linii.md) · [Összetett rácsok](08-grile-compuse.md) · [Közeli rokonok](09-rude-apropiate.md) · [Topológiák és tündér-lépések](10-topologii-si-mutari-fairy.md) · **Globális szabályok** · [Cellán belüli támpontok](12-indicii-in-celule.md) · [Magasabb dimenziók](13-dimensiuni-superioare.md)

---


_A szabály az egész rácsra vonatkozik, és általában nincsenek saját jelölései; ellenőrizd az „Ellenőrzés” gombbal, vagy kövesd az ütközéseket._

<a id="symcomp"></a>
#### 111. Kiegészítő szimmetria · Complementary symmetry (`symcomp`)

**A középpontra szimmetrikus cellák összege N+1.**

A klasszikus szabályok mellett a rács középpontjára szimmetrikus (180°-os forgatás) bármely két cella összege N+1 (9×9-nél: 10). A középső cella tehát 5. Méretek: 9×9 és 4×4.

<table><tr><td align="center"><img src="../../screens/symcomp_a.webp" width="300" alt="Kiegészítő szimmetria: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/symcomp_b.webp" width="300" alt="Kiegészítő szimmetria: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 1 (5. sor, 4. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `symcomp-9-medium-913346369` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_card.webp" width="200" alt="Kiegészítő szimmetria: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_fiche.webp" width="260" alt="Kiegészítő szimmetria: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_s4.webp" width="200" alt="Kiegészítő szimmetria: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_s9.webp" width="200" alt="Kiegészítő szimmetria: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_easy.webp" width="200" alt="Kiegészítő szimmetria: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_a.webp" width="200" alt="Kiegészítő szimmetria: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_hard.webp" width="200" alt="Kiegészítő szimmetria: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_notes.webp" width="200" alt="Kiegészítő szimmetria: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_check.webp" width="200" alt="Kiegészítő szimmetria: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_solved.webp" width="200" alt="Kiegészítő szimmetria: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_dark.webp" width="200" alt="Kiegészítő szimmetria: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_mobile.webp" width="150" alt="Kiegészítő szimmetria: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_en.webp" width="300" alt="Kiegészítő szimmetria: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_rules.webp" width="300" alt="Kiegészítő szimmetria: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="symparity"></a>
#### 112. Szimmetrikus paritás · Symmetric parity (`symparity`)

**A középpontra szimmetrikus cellák paritása azonos.**

A klasszikus szabályok mellett a rács középpontjára szimmetrikus (180°-os forgatás) bármely két cella vagy mindkettő páros, vagy mindkettő páratlan.

<table><tr><td align="center"><img src="../../screens/symparity_a.webp" width="300" alt="Szimmetrikus paritás: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 24 adott)</sub></td><td align="center"><img src="../../screens/symparity_b.webp" width="300" alt="Szimmetrikus paritás: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 5 (1. sor, 1. oszlop): a változat sajátos szabályaiból (támpontok, összegek, kapcsolatok) és a többi számjegyből következik.
- **Kód ugyanahhoz a rejtvényhez:** `symparity-9-medium-2361855335` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_card.webp" width="200" alt="Szimmetrikus paritás: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/symparity_fiche.webp" width="260" alt="Szimmetrikus paritás: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_s4.webp" width="200" alt="Szimmetrikus paritás: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s6.webp" width="200" alt="Szimmetrikus paritás: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s9.webp" width="200" alt="Szimmetrikus paritás: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_easy.webp" width="200" alt="Szimmetrikus paritás: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/symparity_a.webp" width="200" alt="Szimmetrikus paritás: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/symparity_hard.webp" width="200" alt="Szimmetrikus paritás: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_notes.webp" width="200" alt="Szimmetrikus paritás: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_check.webp" width="200" alt="Szimmetrikus paritás: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_solved.webp" width="200" alt="Szimmetrikus paritás: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_dark.webp" width="200" alt="Szimmetrikus paritás: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/symparity_mobile.webp" width="150" alt="Szimmetrikus paritás: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_en.webp" width="300" alt="Szimmetrikus paritás: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_rules.webp" width="300" alt="Szimmetrikus paritás: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="cgrav"></a>
#### 113. Súlypont · Centre of gravity (`cgrav`)

**Minden sor egyensúlyban van, mint egy mérleghinta.**

A klasszikus szabályok mellett minden sor egyensúlyban van: ha a pozíciókat −4…+4 számokkal látjuk el, és minden számjegy egy súly, akkor a súlyok × pozíciók összege 0 (a súlypont pontosan középen van). Csak 9×9; az előállítás Könnyű szinten néhány másodpercig, Nehéz szinten akár ~20 másodpercig is tarthat.

<table><tr><td align="center"><img src="../../screens/cgrav_a.webp" width="300" alt="Súlypont: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 26 adott)</sub></td><td align="center"><img src="../../screens/cgrav_b.webp" width="300" alt="Súlypont: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 4 (1. sor, 7. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `cgrav-9-medium-1954301562` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_card.webp" width="200" alt="Súlypont: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_fiche.webp" width="260" alt="Súlypont: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_s9.webp" width="200" alt="Súlypont: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_easy.webp" width="200" alt="Súlypont: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_a.webp" width="200" alt="Súlypont: Közepes"><br><sub>Közepes</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_notes.webp" width="200" alt="Súlypont: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_check.webp" width="200" alt="Súlypont: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_solved.webp" width="200" alt="Súlypont: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_dark.webp" width="200" alt="Súlypont: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_mobile.webp" width="150" alt="Súlypont: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_en.webp" width="300" alt="Súlypont: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_rules.webp" width="300" alt="Súlypont: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="lexrows"></a>
#### 114. Lexikografikus sorok · Lexicographic rows (`lexrows`)

**A sorok szavakként nőnek (első oszlop: 1…N).**

A klasszikus szabályok mellett a sorokat fentről lefelé számjegyekből álló „szavakként” olvasva minden sor lexikografikusan szigorúan kisebb a következőnél (az első eltérő számjegyet hasonlítjuk össze). Mivel az első oszlop különböző számjegyeket tartalmaz, a szabály valójában azt jelenti, hogy az első oszlop fentről lefelé olvasva 1, 2, …, N.

<table><tr><td align="center"><img src="../../screens/lexrows_a.webp" width="300" alt="Lexikografikus sorok: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/lexrows_b.webp" width="300" alt="Lexikografikus sorok: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 3 (7. sor, 6. oszlop): ez az egyetlen cella a megjelölt oszlopban, ahová 3 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `lexrows-9-medium-957311172` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 1 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_card.webp" width="200" alt="Lexikografikus sorok: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_fiche.webp" width="260" alt="Lexikografikus sorok: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_s4.webp" width="200" alt="Lexikografikus sorok: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s6.webp" width="200" alt="Lexikografikus sorok: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s9.webp" width="200" alt="Lexikografikus sorok: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_easy.webp" width="200" alt="Lexikografikus sorok: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_a.webp" width="200" alt="Lexikografikus sorok: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_hard.webp" width="200" alt="Lexikografikus sorok: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_notes.webp" width="200" alt="Lexikografikus sorok: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_check.webp" width="200" alt="Lexikografikus sorok: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_solved.webp" width="200" alt="Lexikografikus sorok: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_dark.webp" width="200" alt="Lexikografikus sorok: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_mobile.webp" width="150" alt="Lexikografikus sorok: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_en.webp" width="300" alt="Lexikografikus sorok: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_rules.webp" width="300" alt="Lexikografikus sorok: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="extremes"></a>
#### 115. Szomszédos szélsőértékek · Touching extremes (`extremes`)

**A blokk minimuma és maximuma érintkezik.**

A klasszikus szabályok mellett minden blokkban az 1 és az N számjegy szomszédos cellákban áll, átlósan is (királylépés). Az „átlósan is” megállapodást itt választottam: csak ortogonális szomszédokkal nincsenek 9×9-es rácsok (kimerítően ellenőrizve).

<table><tr><td align="center"><img src="../../screens/extremes_a.webp" width="300" alt="Szomszédos szélsőértékek: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/extremes_b.webp" width="300" alt="Szomszédos szélsőértékek: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 6 (4. sor, 4. oszlop): ez az egyetlen cella a megjelölt oszlopban, ahová 6 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `extremes-9-medium-1348183675` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 2 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_card.webp" width="200" alt="Szomszédos szélsőértékek: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/extremes_fiche.webp" width="260" alt="Szomszédos szélsőértékek: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_s4.webp" width="200" alt="Szomszédos szélsőértékek: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s6.webp" width="200" alt="Szomszédos szélsőértékek: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s9.webp" width="200" alt="Szomszédos szélsőértékek: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_easy.webp" width="200" alt="Szomszédos szélsőértékek: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/extremes_a.webp" width="200" alt="Szomszédos szélsőértékek: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/extremes_hard.webp" width="200" alt="Szomszédos szélsőértékek: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_notes.webp" width="200" alt="Szomszédos szélsőértékek: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_check.webp" width="200" alt="Szomszédos szélsőértékek: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_solved.webp" width="200" alt="Szomszédos szélsőértékek: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_dark.webp" width="200" alt="Szomszédos szélsőértékek: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/extremes_mobile.webp" width="150" alt="Szomszédos szélsőértékek: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_en.webp" width="300" alt="Szomszédos szélsőértékek: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_rules.webp" width="300" alt="Szomszédos szélsőértékek: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="boxbalance"></a>
#### 116. Kiegyensúlyozott blokkok · Balanced boxes (`boxbalance`)

**A blokk első és utolsó oszlopának összege azonos.**

A klasszikus szabályok mellett minden blokkban a bal oldali oszlop számjegyeinek összege egyenlő a jobb oldali oszlop számjegyeinek összegével.

<table><tr><td align="center"><img src="../../screens/boxbalance_a.webp" width="300" alt="Kiegyensúlyozott blokkok: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/boxbalance_b.webp" width="300" alt="Kiegyensúlyozott blokkok: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 6 (6. sor, 4. oszlop): nincs közvetlen következtetés; a számjegy az egyértelmű megoldásból származik (találgatásra lenne szükség).
- **Kód ugyanahhoz a rejtvényhez:** `boxbalance-9-medium-1668427631` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 314 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_card.webp" width="200" alt="Kiegyensúlyozott blokkok: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_fiche.webp" width="260" alt="Kiegyensúlyozott blokkok: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_s4.webp" width="200" alt="Kiegyensúlyozott blokkok: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s6.webp" width="200" alt="Kiegyensúlyozott blokkok: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s9.webp" width="200" alt="Kiegyensúlyozott blokkok: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_easy.webp" width="200" alt="Kiegyensúlyozott blokkok: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_a.webp" width="200" alt="Kiegyensúlyozott blokkok: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_hard.webp" width="200" alt="Kiegyensúlyozott blokkok: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_notes.webp" width="200" alt="Kiegyensúlyozott blokkok: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_check.webp" width="200" alt="Kiegyensúlyozott blokkok: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_solved.webp" width="200" alt="Kiegyensúlyozott blokkok: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_dark.webp" width="200" alt="Kiegyensúlyozott blokkok: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_mobile.webp" width="150" alt="Kiegyensúlyozott blokkok: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_en.webp" width="300" alt="Kiegyensúlyozott blokkok: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_rules.webp" width="300" alt="Kiegyensúlyozott blokkok: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="lonely5"></a>
#### 117. A magányos 5-ös · Lonely 5 (`lonely5`)

**Az 5-ösnek csak páros szomszédai vannak.**

A klasszikus szabályok mellett minden 5-ösnek csak páros ortogonális szomszédai vannak. Méretek: 9×9 és 6×6.

<table><tr><td align="center"><img src="../../screens/lonely5_a.webp" width="300" alt="A magányos 5-ös: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 24 adott)</sub></td><td align="center"><img src="../../screens/lonely5_b.webp" width="300" alt="A magányos 5-ös: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 2 (5. sor, 3. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 2 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `lonely5-9-medium-4284537212` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_card.webp" width="200" alt="A magányos 5-ös: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_fiche.webp" width="260" alt="A magányos 5-ös: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_s6.webp" width="200" alt="A magányos 5-ös: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_s9.webp" width="200" alt="A magányos 5-ös: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_easy.webp" width="200" alt="A magányos 5-ös: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_a.webp" width="200" alt="A magányos 5-ös: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_hard.webp" width="200" alt="A magányos 5-ös: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_notes.webp" width="200" alt="A magányos 5-ös: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_check.webp" width="200" alt="A magányos 5-ös: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_solved.webp" width="200" alt="A magányos 5-ös: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_dark.webp" width="200" alt="A magányos 5-ös: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_mobile.webp" width="150" alt="A magányos 5-ös: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_en.webp" width="300" alt="A magányos 5-ös: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_rules.webp" width="300" alt="A magányos 5-ös: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="nolonely"></a>
#### 118. Nincs magányos cella · No lonely cells (`nolonely`)

**Minden cellának van egymást követő szomszédja.**

A klasszikus szabályok mellett minden cellának van legalább egy olyan ortogonális szomszédja, amelynek számjegye pontosan 1-gyel különbözik.

<table><tr><td align="center"><img src="../../screens/nolonely_a.webp" width="300" alt="Nincs magányos cella: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/nolonely_b.webp" width="300" alt="Nincs magányos cella: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 5 (9. sor, 9. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `nolonely-9-medium-355818888` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_card.webp" width="200" alt="Nincs magányos cella: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_fiche.webp" width="260" alt="Nincs magányos cella: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_s4.webp" width="200" alt="Nincs magányos cella: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s6.webp" width="200" alt="Nincs magányos cella: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s9.webp" width="200" alt="Nincs magányos cella: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_easy.webp" width="200" alt="Nincs magányos cella: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_a.webp" width="200" alt="Nincs magányos cella: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_hard.webp" width="200" alt="Nincs magányos cella: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_notes.webp" width="200" alt="Nincs magányos cella: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_check.webp" width="200" alt="Nincs magányos cella: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_solved.webp" width="200" alt="Nincs magányos cella: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_dark.webp" width="200" alt="Nincs magányos cella: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_mobile.webp" width="150" alt="Nincs magányos cella: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_en.webp" width="300" alt="Nincs magányos cella: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_rules.webp" width="300" alt="Nincs magányos cella: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="noprog"></a>
#### 119. Nincs számtani sorozat · No arithmetic progressions (`noprog`)

**Három szomszédos számjegy nem alkot számtani sorozatot.**

A klasszikus szabályok mellett három, sorban vagy oszlopban egymás mellett álló cella nem alkothat számtani sorozatot (például a 2-4-6 vagy a 7-5-3 tilos).

<table><tr><td align="center"><img src="../../screens/noprog_a.webp" width="300" alt="Nincs számtani sorozat: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 24 adott)</sub></td><td align="center"><img src="../../screens/noprog_b.webp" width="300" alt="Nincs számtani sorozat: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 2 (3. sor, 7. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `noprog-9-medium-3644248957` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 6 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_card.webp" width="200" alt="Nincs számtani sorozat: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/noprog_fiche.webp" width="260" alt="Nincs számtani sorozat: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_s4.webp" width="200" alt="Nincs számtani sorozat: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s6.webp" width="200" alt="Nincs számtani sorozat: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s9.webp" width="200" alt="Nincs számtani sorozat: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_easy.webp" width="200" alt="Nincs számtani sorozat: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/noprog_a.webp" width="200" alt="Nincs számtani sorozat: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/noprog_hard.webp" width="200" alt="Nincs számtani sorozat: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_notes.webp" width="200" alt="Nincs számtani sorozat: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_check.webp" width="200" alt="Nincs számtani sorozat: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_solved.webp" width="200" alt="Nincs számtani sorozat: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_dark.webp" width="200" alt="Nincs számtani sorozat: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/noprog_mobile.webp" width="150" alt="Nincs számtani sorozat: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_en.webp" width="300" alt="Nincs számtani sorozat: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_rules.webp" width="300" alt="Nincs számtani sorozat: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="semimagic"></a>
#### 120. Félig mágikus blokkok · Semi-magic boxes (`semimagic`)

**Minden blokk sorainak összege 15; az oszlopoké is.**

A klasszikus szabályok mellett minden blokk minden sorának és minden oszlopának összege 15. A teljesen mágikus blokkok (átlókkal) lehetetlenek, mert egy sávban a három blokk középpontja mind a rács ugyanazon sorában lenne 5-ös; ezért az átlókra nincs megkötés. Csak 9×9 (4×4-nél a sorok és oszlopok ismétlődő számjegyű blokkokat kívánnának).

<table><tr><td align="center"><img src="../../screens/semimagic_a.webp" width="300" alt="Félig mágikus blokkok: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/semimagic_b.webp" width="300" alt="Félig mágikus blokkok: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 8 (5. sor, 5. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `semimagic-9-medium-3291682902` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_card.webp" width="200" alt="Félig mágikus blokkok: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_fiche.webp" width="260" alt="Félig mágikus blokkok: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_s9.webp" width="200" alt="Félig mágikus blokkok: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_easy.webp" width="200" alt="Félig mágikus blokkok: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_a.webp" width="200" alt="Félig mágikus blokkok: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_hard.webp" width="200" alt="Félig mágikus blokkok: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_notes.webp" width="200" alt="Félig mágikus blokkok: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_check.webp" width="200" alt="Félig mágikus blokkok: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_solved.webp" width="200" alt="Félig mágikus blokkok: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_dark.webp" width="200" alt="Félig mágikus blokkok: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_mobile.webp" width="150" alt="Félig mágikus blokkok: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_en.webp" width="300" alt="Félig mágikus blokkok: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_rules.webp" width="300" alt="Félig mágikus blokkok: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

