# Katalógus: Peremtámpontok (19)

[English](../en/06-indicii-pe-margine.md) · [Română](../06-indicii-pe-margine.md) · [Français](../fr/06-indicii-pe-margine.md) · [Italiano](../it/06-indicii-pe-margine.md) · [Español](../es/06-indicii-pe-margine.md) · [Português](../pt/06-indicii-pe-margine.md) · [Deutsch](../de/06-indicii-pe-margine.md) · **Magyar**

[← README](../../../README.hu.md) · [Összes kategória](README.md)

[Méret és jelek](01-marime-si-simboluri.md) · [Tartományok és csoportok](02-regiuni-si-grupuri.md) · [Szomszédok](03-vecini.md) · [Paritás, pontok, jelek](04-paritate-puncte-semne.md) · [Összegek](05-sume.md) · **Peremtámpontok** · [Vonalak](07-linii.md) · [Összetett rácsok](08-grile-compuse.md) · [Közeli rokonok](09-rude-apropiate.md) · [Topológiák és tündér-lépések](10-topologii-si-mutari-fairy.md) · [Globális szabályok](11-reguli-globale.md) · [Cellán belüli támpontok](12-indicii-in-celule.md) · [Magasabb dimenziók](13-dimensiuni-superioare.md)

---


_A támpontok a rácson kívül vannak megírva, annak a sornak vagy oszlopnak a végén, amelyre vonatkoznak._

<a id="sandwich"></a>
#### 41. Szendvics · Sandwich (`sandwich`)

**Az összeg az 1 és a legnagyobb számjegy között.**

A szélen álló szám az adott sorban vagy oszlopban az 1-es és az N számjegy (9×9-nél a 9) közötti számjegyek összege.

<table><tr><td align="center"><img src="../../screens/sandwich_a.webp" width="300" alt="Szendvics: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 16 adott)</sub></td><td align="center"><img src="../../screens/sandwich_b.webp" width="300" alt="Szendvics: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 3 (1. sor, 2. oszlop): a változat sajátos szabályaiból (támpontok, összegek, kapcsolatok) és a többi számjegyből következik.
- **Kód ugyanahhoz a rejtvényhez:** `sandwich-9-medium-4184518699` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_card.webp" width="200" alt="Szendvics: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_fiche.webp" width="260" alt="Szendvics: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_s4.webp" width="200" alt="Szendvics: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s6.webp" width="200" alt="Szendvics: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s9.webp" width="200" alt="Szendvics: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_easy.webp" width="200" alt="Szendvics: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_a.webp" width="200" alt="Szendvics: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_hard.webp" width="200" alt="Szendvics: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_notes.webp" width="200" alt="Szendvics: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_check.webp" width="200" alt="Szendvics: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_solved.webp" width="200" alt="Szendvics: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_dark.webp" width="200" alt="Szendvics: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_mobile.webp" width="150" alt="Szendvics: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_en.webp" width="300" alt="Szendvics: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_rules.webp" width="300" alt="Szendvics: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="xsum"></a>
#### 42. X-összegek · X-Sums (`xsum`)

**Az első számjegy = hány cellát kell összeadni.**

Ha egy sor vagy oszlop első számjegye k, akkor az első k számjegy (attól a végtől számítva) összege a szélen álló szám.

<table><tr><td align="center"><img src="../../screens/xsum_a.webp" width="300" alt="X-összegek: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 16 adott)</sub></td><td align="center"><img src="../../screens/xsum_b.webp" width="300" alt="X-összegek: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 3 (3. sor, 1. oszlop): a változat sajátos szabályaiból (támpontok, összegek, kapcsolatok) és a többi számjegyből következik.
- **Kód ugyanahhoz a rejtvényhez:** `xsum-9-medium-920107551` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 5 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_card.webp" width="200" alt="X-összegek: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/xsum_fiche.webp" width="260" alt="X-összegek: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_s6.webp" width="200" alt="X-összegek: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/xsum_s9.webp" width="200" alt="X-összegek: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_easy.webp" width="200" alt="X-összegek: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/xsum_a.webp" width="200" alt="X-összegek: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/xsum_hard.webp" width="200" alt="X-összegek: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_notes.webp" width="200" alt="X-összegek: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_check.webp" width="200" alt="X-összegek: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_solved.webp" width="200" alt="X-összegek: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_dark.webp" width="200" alt="X-összegek: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/xsum_mobile.webp" width="150" alt="X-összegek: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_en.webp" width="300" alt="X-összegek: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_rules.webp" width="300" alt="X-összegek: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="frame"></a>
#### 43. Keret (első három) · Frame (first three) (`frame`)

**Az első három számjegy összege.**

A szélen álló szám a sor vagy oszlop első három számjegyének összege, attól a végtől kezdve.

<table><tr><td align="center"><img src="../../screens/frame_a.webp" width="300" alt="Keret (első három): kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 16 adott)</sub></td><td align="center"><img src="../../screens/frame_b.webp" width="300" alt="Keret (első három): 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 7 (1. sor, 4. oszlop): a változat sajátos szabályaiból (támpontok, összegek, kapcsolatok) és a többi számjegyből következik.
- **Kód ugyanahhoz a rejtvényhez:** `frame-9-medium-3867362192` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_card.webp" width="200" alt="Keret (első három): Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/frame_fiche.webp" width="260" alt="Keret (első három): Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_s6.webp" width="200" alt="Keret (első három): 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/frame_s9.webp" width="200" alt="Keret (első három): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_easy.webp" width="200" alt="Keret (első három): Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/frame_a.webp" width="200" alt="Keret (első három): Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/frame_hard.webp" width="200" alt="Keret (első három): Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_notes.webp" width="200" alt="Keret (első három): Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/frame_check.webp" width="200" alt="Keret (első három): „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/frame_solved.webp" width="200" alt="Keret (első három): A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_dark.webp" width="200" alt="Keret (első három): Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/frame_mobile.webp" width="150" alt="Keret (első három): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/frame_en.webp" width="300" alt="Keret (első három): Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_rules.webp" width="300" alt="Keret (első három): A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="skyscraper"></a>
#### 44. Felhőkarcolók · Skyscrapers (`skyscraper`)

**Hány épület látszik a szélről.**

A számjegyek az épületek magasságai. A szélen álló szám megmutatja, hány épület látszik az adott végről (egy épület eltakarja a mögötte álló alacsonyabbakat).

<table><tr><td align="center"><img src="../../screens/skyscraper_a.webp" width="300" alt="Felhőkarcolók: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 16 adott)</sub></td><td align="center"><img src="../../screens/skyscraper_b.webp" width="300" alt="Felhőkarcolók: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 9 (3. sor, 2. oszlop): a változat sajátos szabályaiból (támpontok, összegek, kapcsolatok) és a többi számjegyből következik.
- **Kód ugyanahhoz a rejtvényhez:** `skyscraper-9-medium-1967302454` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 143 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_card.webp" width="200" alt="Felhőkarcolók: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_fiche.webp" width="260" alt="Felhőkarcolók: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_s4.webp" width="200" alt="Felhőkarcolók: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s6.webp" width="200" alt="Felhőkarcolók: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s9.webp" width="200" alt="Felhőkarcolók: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_easy.webp" width="200" alt="Felhőkarcolók: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_a.webp" width="200" alt="Felhőkarcolók: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_hard.webp" width="200" alt="Felhőkarcolók: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_notes.webp" width="200" alt="Felhőkarcolók: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_check.webp" width="200" alt="Felhőkarcolók: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_solved.webp" width="200" alt="Felhőkarcolók: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_dark.webp" width="200" alt="Felhőkarcolók: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_mobile.webp" width="150" alt="Felhőkarcolók: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_en.webp" width="300" alt="Felhőkarcolók: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_rules.webp" width="300" alt="Felhőkarcolók: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="rossini"></a>
#### 45. Rossini · Rossini (`rossini`)

**Nyíl a szélen: az első három számjegy egy irányban nő.**

A rácson kívüli nyíl azt jelzi, hogy az adott végtől kezdve az első három számjegy szigorúan monoton: abba az irányba nő, amerre a nyíl mutat (a rács belseje felé), vagy ha a nyíl a szél felé mutat, a szél felé nő, vagyis befelé csökken. Megállapodás: a nyílhegy a legnagyobb számjegy felé mutat. A nyíl hiánya nem mond semmit (ez nem a klasszikus Rossini változat, amelyben a nyíl nélküli végek kizárják a monoton sorozatokat).

<table><tr><td align="center"><img src="../../screens/rossini_a.webp" width="300" alt="Rossini: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 19 adott)</sub></td><td align="center"><img src="../../screens/rossini_b.webp" width="300" alt="Rossini: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 8 (1. sor, 7. oszlop): ez az egyetlen cella a megjelölt oszlopban, ahová 8 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `rossini-9-medium-4071954052` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 2 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_card.webp" width="200" alt="Rossini: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/rossini_fiche.webp" width="260" alt="Rossini: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_s4.webp" width="200" alt="Rossini: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s6.webp" width="200" alt="Rossini: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s9.webp" width="200" alt="Rossini: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_easy.webp" width="200" alt="Rossini: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/rossini_a.webp" width="200" alt="Rossini: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/rossini_hard.webp" width="200" alt="Rossini: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_notes.webp" width="200" alt="Rossini: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_check.webp" width="200" alt="Rossini: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_solved.webp" width="200" alt="Rossini: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_dark.webp" width="200" alt="Rossini: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/rossini_mobile.webp" width="150" alt="Rossini: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_en.webp" width="300" alt="Rossini: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_rules.webp" width="300" alt="Rossini: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="outside"></a>
#### 46. Külső · Outside (`outside`)

**A szélen álló számjegyek az első három között szerepelnek.**

A rácson kívülre írt számjegyeknek szerepelniük kell az adott sor vagy oszlop első három cellájában, attól a végtől kezdve, tetszőleges sorrendben. Ha három számjegy van, akkor pontosan az a három cella.

<table><tr><td align="center"><img src="../../screens/outside_a.webp" width="300" alt="Külső: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 23 adott)</sub></td><td align="center"><img src="../../screens/outside_b.webp" width="300" alt="Külső: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 5 (2. sor, 5. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `outside-9-medium-3531544633` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_card.webp" width="200" alt="Külső: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/outside_fiche.webp" width="260" alt="Külső: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_s4.webp" width="200" alt="Külső: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/outside_s6.webp" width="200" alt="Külső: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/outside_s9.webp" width="200" alt="Külső: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_easy.webp" width="200" alt="Külső: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/outside_a.webp" width="200" alt="Külső: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/outside_hard.webp" width="200" alt="Külső: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_notes.webp" width="200" alt="Külső: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/outside_check.webp" width="200" alt="Külső: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/outside_solved.webp" width="200" alt="Külső: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_dark.webp" width="200" alt="Külső: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/outside_mobile.webp" width="150" alt="Külső: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/outside_en.webp" width="300" alt="Külső: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_rules.webp" width="300" alt="Külső: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="radar"></a>
#### 47. Radar · Radar (`radar`)

**A támpont megmondja, hol a legnagyobb.**

A klasszikus szabályok mellett a rácson kívül álló szám megmutatja, hányadik pozícióban (attól a végtől számolva) áll a legnagyobb számjegy (9×9-nél a 9) az adott sorban vagy oszlopban.

<table><tr><td align="center"><img src="../../screens/radar_a.webp" width="300" alt="Radar: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 21 adott)</sub></td><td align="center"><img src="../../screens/radar_b.webp" width="300" alt="Radar: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 4 (3. sor, 6. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 4 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `radar-9-medium-2588350498` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: nincs elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_card.webp" width="200" alt="Radar: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/radar_fiche.webp" width="260" alt="Radar: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_s4.webp" width="200" alt="Radar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/radar_s6.webp" width="200" alt="Radar: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/radar_s9.webp" width="200" alt="Radar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_easy.webp" width="200" alt="Radar: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/radar_a.webp" width="200" alt="Radar: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/radar_hard.webp" width="200" alt="Radar: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_notes.webp" width="200" alt="Radar: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/radar_check.webp" width="200" alt="Radar: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/radar_solved.webp" width="200" alt="Radar: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_dark.webp" width="200" alt="Radar: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/radar_mobile.webp" width="150" alt="Radar: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/radar_en.webp" width="300" alt="Radar: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_rules.webp" width="300" alt="Radar: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="sandnum"></a>
#### 48. Számláló szendvics · Counting sandwich (`sandnum`)

**Hány cella van az 1 és az N között.**

A klasszikus szabályok mellett a rácson kívül álló szám megmondja, hány cella van az 1-es és az N számjegy (9×9-nél a 9) között az adott sorban vagy oszlopban.

<table><tr><td align="center"><img src="../../screens/sandnum_a.webp" width="300" alt="Számláló szendvics: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 19 adott)</sub></td><td align="center"><img src="../../screens/sandnum_b.webp" width="300" alt="Számláló szendvics: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 8 (6. sor, 5. oszlop): ez az egyetlen cella a megjelölt oszlopban, ahová 8 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `sandnum-9-medium-2830514440` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 1802 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_card.webp" width="200" alt="Számláló szendvics: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_fiche.webp" width="260" alt="Számláló szendvics: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_s4.webp" width="200" alt="Számláló szendvics: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s6.webp" width="200" alt="Számláló szendvics: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s9.webp" width="200" alt="Számláló szendvics: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_easy.webp" width="200" alt="Számláló szendvics: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_a.webp" width="200" alt="Számláló szendvics: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_hard.webp" width="200" alt="Számláló szendvics: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_notes.webp" width="200" alt="Számláló szendvics: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_check.webp" width="200" alt="Számláló szendvics: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_solved.webp" width="200" alt="Számláló szendvics: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_dark.webp" width="200" alt="Számláló szendvics: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_mobile.webp" width="150" alt="Számláló szendvics: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_en.webp" width="300" alt="Számláló szendvics: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_rules.webp" width="300" alt="Számláló szendvics: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="sandpar"></a>
#### 49. Paritásszendvics · Parity sandwich (`sandpar`)

**Hány páratlan számjegy van az 1 és az N között.**

A klasszikus szabályok mellett a rácson kívül álló szám megmondja, hány páratlan számjegy van az 1 és az N között az adott sorban vagy oszlopban.

<table><tr><td align="center"><img src="../../screens/sandpar_a.webp" width="300" alt="Paritásszendvics: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 19 adott)</sub></td><td align="center"><img src="../../screens/sandpar_b.webp" width="300" alt="Paritásszendvics: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 2 (5. sor, 5. oszlop): nincs közvetlen következtetés; a számjegy az egyértelmű megoldásból származik (találgatásra lenne szükség).
- **Kód ugyanahhoz a rejtvényhez:** `sandpar-9-medium-3081747068` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 38 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_card.webp" width="200" alt="Paritásszendvics: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_fiche.webp" width="260" alt="Paritásszendvics: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_s6.webp" width="200" alt="Paritásszendvics: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_s9.webp" width="200" alt="Paritásszendvics: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_easy.webp" width="200" alt="Paritásszendvics: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_a.webp" width="200" alt="Paritásszendvics: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_hard.webp" width="200" alt="Paritásszendvics: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_notes.webp" width="200" alt="Paritásszendvics: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_check.webp" width="200" alt="Paritásszendvics: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_solved.webp" width="200" alt="Paritásszendvics: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_dark.webp" width="200" alt="Paritásszendvics: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_mobile.webp" width="150" alt="Paritásszendvics: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_en.webp" width="300" alt="Paritásszendvics: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_rules.webp" width="300" alt="Paritásszendvics: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="sand2"></a>
#### 50. Dupla szendvics · Double sandwich (`sand2`)

**Két összeg: 1 és 9 között, 2 és 8 között.**

A klasszikus szabályok mellett a rácson kívül álló „a,b” támpont azt jelenti: a = az 1 és a 9 közötti számjegyek összege, b = a 2 és a 8 közötti számjegyek összege az adott sorban vagy oszlopban. Csak 9×9.

<table><tr><td align="center"><img src="../../screens/sand2_a.webp" width="300" alt="Dupla szendvics: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 16 adott)</sub></td><td align="center"><img src="../../screens/sand2_b.webp" width="300" alt="Dupla szendvics: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 8 (6. sor, 9. oszlop): nincs közvetlen következtetés; a számjegy az egyértelmű megoldásból származik (találgatásra lenne szükség).
- **Kód ugyanahhoz a rejtvényhez:** `sand2-9-medium-1633059211` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 3778 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_card.webp" width="200" alt="Dupla szendvics: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/sand2_fiche.webp" width="260" alt="Dupla szendvics: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_s9.webp" width="200" alt="Dupla szendvics: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_easy.webp" width="200" alt="Dupla szendvics: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/sand2_a.webp" width="200" alt="Dupla szendvics: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/sand2_hard.webp" width="200" alt="Dupla szendvics: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_notes.webp" width="200" alt="Dupla szendvics: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_check.webp" width="200" alt="Dupla szendvics: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_solved.webp" width="200" alt="Dupla szendvics: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_dark.webp" width="200" alt="Dupla szendvics: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/sand2_mobile.webp" width="150" alt="Dupla szendvics: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_en.webp" width="300" alt="Dupla szendvics: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_rules.webp" width="300" alt="Dupla szendvics: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="subsol"></a>
#### 51. Pince · Basement (`subsol`)

**Mint a Felhőkarcolók, de fordított számjegyekkel.**

A klasszikus szabályok mellett a rácson kívül álló szám megmutatja, hányszor fordul elő az adott végről nézve olyan számjegy, amely kisebb az összes előtte állónál (az első számjegy is számít). Ez a felhőkarcolók ellentéte: itt az egymás utáni minimumokat számoljuk. Ez a Felhőkarcolók fordított számjegyekkel (d helyett N+1−d), tehát logikailag azzal izomorf.

<table><tr><td align="center"><img src="../../screens/subsol_a.webp" width="300" alt="Pince: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 16 adott)</sub></td><td align="center"><img src="../../screens/subsol_b.webp" width="300" alt="Pince: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 8 (1. sor, 4. oszlop): nincs közvetlen következtetés; a számjegy az egyértelmű megoldásból származik (találgatásra lenne szükség).
- **Kód ugyanahhoz a rejtvényhez:** `subsol-9-medium-2589656574` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 487 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_card.webp" width="200" alt="Pince: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/subsol_fiche.webp" width="260" alt="Pince: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_s4.webp" width="200" alt="Pince: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s6.webp" width="200" alt="Pince: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s9.webp" width="200" alt="Pince: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_easy.webp" width="200" alt="Pince: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/subsol_a.webp" width="200" alt="Pince: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/subsol_hard.webp" width="200" alt="Pince: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_notes.webp" width="200" alt="Pince: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_check.webp" width="200" alt="Pince: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_solved.webp" width="200" alt="Pince: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_dark.webp" width="200" alt="Pince: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/subsol_mobile.webp" width="150" alt="Pince: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_en.webp" width="300" alt="Pince: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_rules.webp" width="300" alt="Pince: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="prodmargin"></a>
#### 52. Szélső szorzat · Edge product (`prodmargin`)

**Az első két számjegy szorzata.**

A klasszikus szabályok mellett a rácson kívül álló szám az adott sor vagy oszlop első két számjegyének szorzata, attól a végtől nézve.

<table><tr><td align="center"><img src="../../screens/prodmargin_a.webp" width="300" alt="Szélső szorzat: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/prodmargin_b.webp" width="300" alt="Szélső szorzat: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 1 (3. sor, 8. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 1 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `prodmargin-9-medium-3463419111` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 618 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_card.webp" width="200" alt="Szélső szorzat: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_fiche.webp" width="260" alt="Szélső szorzat: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_s4.webp" width="200" alt="Szélső szorzat: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s6.webp" width="200" alt="Szélső szorzat: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s9.webp" width="200" alt="Szélső szorzat: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_easy.webp" width="200" alt="Szélső szorzat: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_a.webp" width="200" alt="Szélső szorzat: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_hard.webp" width="200" alt="Szélső szorzat: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_notes.webp" width="200" alt="Szélső szorzat: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_check.webp" width="200" alt="Szélső szorzat: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_solved.webp" width="200" alt="Szélső szorzat: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_dark.webp" width="200" alt="Szélső szorzat: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_mobile.webp" width="150" alt="Szélső szorzat: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_en.webp" width="300" alt="Szélső szorzat: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_rules.webp" width="300" alt="Szélső szorzat: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="diffmargin"></a>
#### 53. Szélső különbség · Edge difference (`diffmargin`)

**Az első két számjegy különbsége.**

A klasszikus szabályok mellett a rácson kívül álló szám az adott sor vagy oszlop első két számjegyének különbsége (abszolút értékben), attól a végtől nézve.

<table><tr><td align="center"><img src="../../screens/diffmargin_a.webp" width="300" alt="Szélső különbség: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/diffmargin_b.webp" width="300" alt="Szélső különbség: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 2 (6. sor, 4. oszlop): ez az egyetlen cella a megjelölt sorban, ahová 2 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `diffmargin-9-medium-4161532716` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 313 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_card.webp" width="200" alt="Szélső különbség: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_fiche.webp" width="260" alt="Szélső különbség: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_s4.webp" width="200" alt="Szélső különbség: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s6.webp" width="200" alt="Szélső különbség: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s9.webp" width="200" alt="Szélső különbség: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_easy.webp" width="200" alt="Szélső különbség: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_a.webp" width="200" alt="Szélső különbség: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_hard.webp" width="200" alt="Szélső különbség: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_notes.webp" width="200" alt="Szélső különbség: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_check.webp" width="200" alt="Szélső különbség: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_solved.webp" width="200" alt="Szélső különbség: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_dark.webp" width="200" alt="Szélső különbség: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_mobile.webp" width="150" alt="Szélső különbség: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_en.webp" width="300" alt="Szélső különbség: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_rules.webp" width="300" alt="Szélső különbség: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="ascents"></a>
#### 54. Emelkedések · Ascents (`ascents`)

**Hány szomszédos pár növekszik.**

A klasszikus szabályok mellett a rácson kívül álló szám megmondja, hányszor követi az adott végről nézve egy számjegyet közvetlenül nagyobb.

<table><tr><td align="center"><img src="../../screens/ascents_a.webp" width="300" alt="Emelkedések: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/ascents_b.webp" width="300" alt="Emelkedések: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 9 (2. sor, 3. oszlop): ez az egyetlen cella a megjelölt oszlopban, ahová 9 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `ascents-9-medium-1827630994` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 361 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_card.webp" width="200" alt="Emelkedések: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/ascents_fiche.webp" width="260" alt="Emelkedések: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_s4.webp" width="200" alt="Emelkedések: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s6.webp" width="200" alt="Emelkedések: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s9.webp" width="200" alt="Emelkedések: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_easy.webp" width="200" alt="Emelkedések: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/ascents_a.webp" width="200" alt="Emelkedések: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/ascents_hard.webp" width="200" alt="Emelkedések: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_notes.webp" width="200" alt="Emelkedések: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_check.webp" width="200" alt="Emelkedések: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_solved.webp" width="200" alt="Emelkedések: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_dark.webp" width="200" alt="Emelkedések: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/ascents_mobile.webp" width="150" alt="Emelkedések: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_en.webp" width="300" alt="Emelkedések: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_rules.webp" width="300" alt="Emelkedések: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="inversions"></a>
#### 55. Inverziók · Inversions (`inversions`)

**Hány pár áll fordított sorrendben.**

A klasszikus szabályok mellett a rácson kívül álló szám a sor/oszlop inverzióinak száma az adott végről nézve: hány számjegypárban (nem feltétlenül szomszédosak) nagyobb az elöl álló, mint a mögötte álló.

<table><tr><td align="center"><img src="../../screens/inversions_a.webp" width="300" alt="Inverziók: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/inversions_b.webp" width="300" alt="Inverziók: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 7 (7. sor, 6. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `inversions-9-medium-2138830078` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 62 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_card.webp" width="200" alt="Inverziók: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/inversions_fiche.webp" width="260" alt="Inverziók: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_s4.webp" width="200" alt="Inverziók: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s6.webp" width="200" alt="Inverziók: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s9.webp" width="200" alt="Inverziók: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_easy.webp" width="200" alt="Inverziók: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/inversions_a.webp" width="200" alt="Inverziók: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/inversions_hard.webp" width="200" alt="Inverziók: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_notes.webp" width="200" alt="Inverziók: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_check.webp" width="200" alt="Inverziók: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_solved.webp" width="200" alt="Inverziók: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_dark.webp" width="200" alt="Inverziók: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/inversions_mobile.webp" width="150" alt="Inverziók: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_en.webp" width="300" alt="Inverziók: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_rules.webp" width="300" alt="Inverziók: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="cycles"></a>
#### 56. Ciklusok · Cycles (`cycles`)

**Hány ciklusa van a permutációnak.**

A klasszikus szabályok mellett az adott végről olvasott sor/oszlop egy permutáció (az i. pozícióban az a_i számjegy áll). A rácson kívüli támpont a permutáció ciklusainak száma (az i. pozíció az a_i. pozícióra mutat). Méretek: 9×9 és 6×6.

<table><tr><td align="center"><img src="../../screens/cycles_a.webp" width="300" alt="Ciklusok: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/cycles_b.webp" width="300" alt="Ciklusok: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 4 (2. sor, 6. oszlop): ez az egyetlen cella a megjelölt tartományban, ahová 4 kerülhet.
- **Kód ugyanahhoz a rejtvényhez:** `cycles-9-medium-708965529` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 562 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_card.webp" width="200" alt="Ciklusok: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/cycles_fiche.webp" width="260" alt="Ciklusok: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_s6.webp" width="200" alt="Ciklusok: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/cycles_s9.webp" width="200" alt="Ciklusok: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_easy.webp" width="200" alt="Ciklusok: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/cycles_a.webp" width="200" alt="Ciklusok: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/cycles_hard.webp" width="200" alt="Ciklusok: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_notes.webp" width="200" alt="Ciklusok: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_check.webp" width="200" alt="Ciklusok: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_solved.webp" width="200" alt="Ciklusok: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_dark.webp" width="200" alt="Ciklusok: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/cycles_mobile.webp" width="150" alt="Ciklusok: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_en.webp" width="300" alt="Ciklusok: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_rules.webp" width="300" alt="Ciklusok: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="fixedpts"></a>
#### 57. Fixpontok · Fixed points (`fixedpts`)

**Hány számjegy áll a saját pozícióján.**

A klasszikus szabályok mellett a rácson kívül álló szám megmondja, hány számjegy áll az értékével egyenlő pozíción (a második cellában 2 áll stb.), attól a végtől számolva. Méretek: 9×9 és 6×6.

<table><tr><td align="center"><img src="../../screens/fixedpts_a.webp" width="300" alt="Fixpontok: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/fixedpts_b.webp" width="300" alt="Fixpontok: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 3 (1. sor, 8. oszlop): nincs közvetlen következtetés; a számjegy az egyértelmű megoldásból származik (találgatásra lenne szükség).
- **Kód ugyanahhoz a rejtvényhez:** `fixedpts-9-medium-3926317386` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 4802 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_card.webp" width="200" alt="Fixpontok: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_fiche.webp" width="260" alt="Fixpontok: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_s6.webp" width="200" alt="Fixpontok: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_s9.webp" width="200" alt="Fixpontok: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_easy.webp" width="200" alt="Fixpontok: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_a.webp" width="200" alt="Fixpontok: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_hard.webp" width="200" alt="Fixpontok: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_notes.webp" width="200" alt="Fixpontok: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_check.webp" width="200" alt="Fixpontok: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_solved.webp" width="200" alt="Fixpontok: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_dark.webp" width="200" alt="Fixpontok: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_mobile.webp" width="150" alt="Fixpontok: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_en.webp" width="300" alt="Fixpontok: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_rules.webp" width="300" alt="Fixpontok: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="altsum"></a>
#### 58. Váltakozó összeg · Alternating sum (`altsum`)

**a₁ − a₂ + a₃ − …**

A klasszikus szabályok mellett a rácson kívül álló szám a számjegyek váltakozó összege az adott végről nézve: az első számjegy mínusz a második plusz a harmadik és így tovább. Lehet negatív. Méretek: 9×9 és 6×6.

<table><tr><td align="center"><img src="../../screens/altsum_a.webp" width="300" alt="Váltakozó összeg: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/altsum_b.webp" width="300" alt="Váltakozó összeg: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 3 (9. sor, 4. oszlop): az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály).
- **Kód ugyanahhoz a rejtvényhez:** `altsum-9-medium-1703080656` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 2188 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_card.webp" width="200" alt="Váltakozó összeg: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/altsum_fiche.webp" width="260" alt="Váltakozó összeg: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_s6.webp" width="200" alt="Váltakozó összeg: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/altsum_s9.webp" width="200" alt="Váltakozó összeg: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_easy.webp" width="200" alt="Váltakozó összeg: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/altsum_a.webp" width="200" alt="Váltakozó összeg: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/altsum_hard.webp" width="200" alt="Váltakozó összeg: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_notes.webp" width="200" alt="Váltakozó összeg: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_check.webp" width="200" alt="Váltakozó összeg: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_solved.webp" width="200" alt="Váltakozó összeg: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_dark.webp" width="200" alt="Váltakozó összeg: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/altsum_mobile.webp" width="150" alt="Váltakozó összeg: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_en.webp" width="300" alt="Váltakozó összeg: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_rules.webp" width="300" alt="Váltakozó összeg: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

<a id="dxsum"></a>
#### 59. Átlós X-összegek · Diagonal X-sums (`dxsum`)

**Az első d számjegy egy átlón, d = az első számjegy.**

A klasszikus szabályok mellett az átló végén álló támpont (amely a szélső cellából indul) az átló első d cellájának összegét adja meg, ahol d az átlón álló első számjegy; ha az átlónak d-nél kevesebb cellája van, az egész átlót összeadjuk (mint az X-összegeknél, de átlókon). Méretek: 9×9 és 6×6.

<table><tr><td align="center"><img src="../../screens/dxsum_a.webp" width="300" alt="Átlós X-összegek: kiinduló rejtvény"><br><sub>Kiinduló rejtvény (9×9 · közepes · 18 adott)</sub></td><td align="center"><img src="../../screens/dxsum_b.webp" width="300" alt="Átlós X-összegek: 4 lépés után"><br><sub>„Lépésről lépésre” – 4 lépés után</sub></td></tr></table>

- **Az alkalmazás által megmagyarázott utolsó lépés:** 1 (8. sor, 8. oszlop): a változat sajátos szabályaiból (támpontok, összegek, kapcsolatok) és a többi számjegyből következik.
- **Kód ugyanahhoz a rejtvényhez:** `dxsum-9-medium-391021028` (illeszd be az „Új játék → Kód” alatt) · a megoldó munkája: 256 elágazás

<details><summary><b>Teljes galéria: a képernyőképek összes típusa</b></summary>

<p><b>Atlasz</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_card.webp" width="200" alt="Átlós X-összegek: Az Atlasz kártyája"><br><sub>Az Atlasz kártyája</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_fiche.webp" width="260" alt="Átlós X-összegek: Szabálykártya (a kártyára kattintva nyílik meg)"><br><sub>Szabálykártya (a kártyára kattintva nyílik meg)</sub></td></tr>
</table>

<p><b>Méretek (közepes szint)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_s6.webp" width="200" alt="Átlós X-összegek: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_s9.webp" width="200" alt="Átlós X-összegek: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Nehézség</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_easy.webp" width="200" alt="Átlós X-összegek: Könnyű"><br><sub>Könnyű</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_a.webp" width="200" alt="Átlós X-összegek: Közepes"><br><sub>Közepes</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_hard.webp" width="200" alt="Átlós X-összegek: Nehéz"><br><sub>Nehéz</sub></td></tr>
</table>

<p><b>Játékállapotok</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_notes.webp" width="200" alt="Átlós X-összegek: Automatikus jegyzetek (jelöltek)"><br><sub>Automatikus jegyzetek (jelöltek)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_check.webp" width="200" alt="Átlós X-összegek: „Ellenőrzés” hibás számjeggyel (piros)"><br><sub>„Ellenőrzés” hibás számjeggyel (piros)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_solved.webp" width="200" alt="Átlós X-összegek: A teljes megoldás"><br><sub>A teljes megoldás</sub></td></tr>
</table>

<p><b>Témák és eszközök</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_dark.webp" width="200" alt="Átlós X-összegek: Sötét téma"><br><sub>Sötét téma</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_mobile.webp" width="150" alt="Átlós X-összegek: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_en.webp" width="300" alt="Átlós X-összegek: Angol nyelvű felület"><br><sub>Angol nyelvű felület</sub></td></tr>
</table>

<p><b>A játékon belüli szabálypanel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_rules.webp" width="300" alt="Átlós X-összegek: A tábla mellett megjelenő szabályok"><br><sub>A tábla mellett megjelenő szabályok</sub></td></tr>
</table>

</details>

