# Sudoku fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · **Magyar**

**Verzió:** 1.6.0 · **Utolsó frissítés:** 2026-10-19

A felület nyelvei: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Sudoku-változatok atlasza helyben futó generátorral és megoldóval — egyetlen HTML-fájlban.

**Licenc:** [MIT](LICENSE) · **Online alkalmazás:** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Illusztrált útmutató (egyetlen oldal):** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.hu.html>

![Néhány változat a „Lépésről lépésre” után](docs/screenshot.png)

## Mi ez

136 bejegyzésből álló interaktív atlasz (≈130 külön szabályrendszerrel: a Pince, a Nullás Sudoku és a Lexikografikus sorok logikailag majdnem azonosak más változatokkal, és a lapjaikon ezt ki is mondják) (klasszikusak, speciális régiókkal, topológiákkal és tündérugrásokkal, globális szabályokkal, vonalakra, szegélyre, cellákba vagy a rácsba írt jelzésekkel, összetett rácsok, kockák és hiperkockák, görög-latin és közeli rokonok), plusz 7 játékmód. Minden változatnak van egy lapja a szabályokkal, és helyben játszható: a rejtvényeket a böngésző generálja, egy propagációs megoldó által **bizonyítottan egyértelmű megoldással**. A szabályokat „Saját kombinációvá” is összeválogathatod.

## Használati útmutató

### Gyors indulás

1. Nyisd meg az `index.html` fájlt egy böngészőben (offline is működik, telepítés nélkül).
2. Az **Atlaszban** kiválasztasz egy változatot (keresés, kategóriák, „A nap változata”, „Lepj meg”); minden változatnak van egy lapja a szabályokkal.
3. A **Játék** fülön kiválasztod a változatot, a méretet, a nehézséget és a módot, majd megnyomod az **Új játék** gombot. A rejtvényt a böngésző generálja, egyértelmű megoldással.

<p align="center"><img src="docs/screens/ui_atlas.hu.webp" width="760" alt="A változatok atlasza"><br><sub>Atlasz: keresés, kategóriaszűrők és kártyák az elérhető méretekkel.</sub></p>

### A játékképernyő

<p align="center"><img src="docs/screens/ui_play.hu.webp" width="760" alt="A játékképernyő"><br><sub>A tábla, az állapotsor (változat · méret · jelzések · nehézség · a megoldónak szükséges elágazások · idő), az „Új játék” panel megosztási kóddal, a számbillentyűzet és a műveletek.</sub></p>

- **Számjegyek:** kijelölsz egy cellát (vagy többet, Shift-tel/húzással), és megnyomod a számjegyet a billentyűzeten vagy a képernyő számbillentyűzetén. A már elfogyott számjegyek halványan jelennek meg.
- **Billentyűzet:** nyilak = a kijelölés mozgatása, számjegyek/betűk = kitöltés, `Backspace`/`Delete`/`0` = törlés, `N` = jegyzetek, `Ctrl+Z` / `Ctrl+Y` = visszavonás / ismétlés.
- **Jegyzetek:** a „Jegyzetek” gomb (vagy `N`) a cellában kis jelöltekre vált; az „Automatikus jegyzetek” a látható szabályokból számítja ki őket.
- **Ellenőrzések:** a „Ütközések mutatása”, a „Azonos számjegy kiemelése”, a „Kapcsolódó cellák kiemelése” és a „Jegyzetek automatikus törlése” bejelölhető; az „Ellenőrzés” megjelöli a hibás számjegyeket.
- **Tipp** kitölt egy cellát (a jelöltekre épülő logikával; ha nincs közvetlen lépés, a számjegy a megoldásból jön). A **Megoldás mutatása** mindent kitölt.
- **Kód:** az „Új játék” melletti kód ugyanazt a rejtvényt generálja újra az alkalmazás ugyanazon verziójában; a „Megnyitás” mezőbe illeszted be.

<p align="center"><img src="docs/screens/ui_notes.hu.webp" width="760" alt="Jegyzetek"><br><sub>Jegyzetek: kis jelöltek egy cellában.</sub></p>

### Lépésről lépésre és ▶ Auto

A **Lépésről lépésre** lerak egy számjegyet, és megmutatja, miért: az indoklásul szolgáló cellák színesek (sárga), az új cella zöld, és a tábla alatt megjelenik a magyarázat. Az **▶ Auto** magától futtatja a lépéseket, 1,6 másodpercenként. A lehetséges indokok: a cellában megmaradt egyetlen számjegy; egy sor/oszlop/régió egyetlen cellája, ahová a számjegy kerülhet; a változat szabályaiból levont következtetés; vagy, ha nincs közvetlen következtetés, a megoldásból vett számjegy (ezt kifejezetten kimondja). Ha hibás számjegyed van, az első lépés kijavítja. Minden lépés visszavonható; Hardcore és Memória módban le van tiltva.

<p align="center"><img src="docs/screens/ui_step.hu.webp" width="760" alt="Lépésről lépésre"><br><sub>Három lépés után: az utolsó számjegy (zöld) és az indoklásul szolgáló cellák (sárga), a magyarázat a tábla alatt.</sub></p>

### Játékmódok

Az „Új játék → Játékmód” alatt választhatók; a kód `@mód` utótagot kap (kivételek: „A nap rejtvénye” és a Maraton nem kap utótagot; a Maraton-kód egy szokásos rejtvényt nyit meg).

- **Orb:** csak a kijelöléstől legfeljebb 2 lépésre lévő cellák látszanak.
- **Memória:** a jelzések néhány másodpercig látszanak, aztán elrejtőznek; a belesés gomb 30 másodpercbe kerül. Jelzések, ellenőrzés, automatikus jegyzetek, „Lépésről lépésre” és az ütközések kiemelése nélkül.
- **Maraton:** 5 rejtvény egymás után (könnyű, könnyű, közepes, közepes, nehéz) összesített idővel.
- **Párbaj:** egy időzítő-ellenfél néhány másodpercenként kitölt egy cellát az ismert megoldásból (logika nélkül); ha ő végez először, vesztettél.
- **Hardcore:** 3 élet, minden hibás számjegy egyet vesz el; tipp, ellenőrzés és automatikus jegyzetek nélkül.
- **A nap rejtvénye:** ugyanaz a rejtvény mindenkinek egy adott napon (UTC-dátum), helyben megőrzött egymást követő napok sorozatával.
- **Hangos:** minden számjegynek van egy hangja; egy kész sor, oszlop vagy doboz arpeggiót játszik.

<p align="center"><img src="docs/screens/ui_mode_orb.hu.webp" width="760" alt="Orb mód"><br><sub>Orb mód: csak a kijelölés környezete látható.</sub></p>

### Kockák és hiperkockák

A rétegek szeletekből álló mozaikként jelennek meg. A 3D kockáknál „3D nézet” is megjelenik: az egérrel húzva forgatod a kockát, a csúszka pedig elrejti az elülső rétegeket. A 4D/5D hiperkockák csak rétegekben látszanak.

<p align="center"><img src="docs/screens/ui_3d.hu.webp" width="760" alt="3D nézet"><br><sub>4×4×4-es 3D latin kocka a forgatható 3D nézetben.</sub></p>

### Klasszikus 9×9-es megoldó

Beilleszted a rejtvényt (81 karakter: 1–9, az üres helyek 0 vagy `.`), szükség esetén bejelölsz további szabályokat (átlók, hyper ablakok, anti-huszár stb.), és megnyomod a **Megoldás** gombot: az alkalmazás megmondja, hogy a megoldás egyértelmű, többszörös vagy nem létezik. A „Játék ezzel a rejtvénnyel” átviszi a játéktáblára.

<p align="center"><img src="docs/screens/ui_solver.hu.webp" width="760" alt="Megoldó"><br><sub>A megoldó a példarejtvénnyel: „Egyértelmű megoldás”.</sub></p>

### Telefon és sötét téma

A felület alkalmazkodik a keskeny képernyőkhöz; világos/sötét/automatikus téma (a 🌓 gomb), nagyított szöveg (az A gomb), RO/EN nyelv (az RO gomb).

<p align="center"><img src="docs/screens/ui_mobile.hu.webp" width="260" alt="Telefon, világos téma"> &nbsp; <img src="docs/screens/ui_dark.hu.webp" width="260" alt="Telefon, sötét téma"></p>

### Saját kombináció

Az Atlaszban a „Saját kombináció” (vagy az „Új játék” alatti „Saját kombináció” változat) lehetővé teszi a rácsszabályok és jelzések bármely összeférhető készletének bejelölését (pl. Killer + átlók, hőmérők + nyilak).

### A felület galériája (minden képernyőtípus)

**Atlasz**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.hu.webp" width="330" alt="Szűrés egy kategóriára"><br><sub>Szűrés egy kategóriára</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.hu.webp" width="330" alt="Keresés név szerint"><br><sub>Keresés név szerint</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.hu.webp" width="330" alt="Lexikon"><br><sub>Lexikon</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlasz angolul"><br><sub>Atlasz angolul</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.hu.webp" width="330" alt="Atlasz, sötét téma"><br><sub>Atlasz, sötét téma</sub></td></tr></table>

**Játékmódok**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.hu.webp" width="330" alt="Memória: a jelzések látszanak"><br><sub>Memória: a jelzések látszanak</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.hu.webp" width="330" alt="Memória: a jelzések elrejtőztek"><br><sub>Memória: a jelzések elrejtőztek</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.hu.webp" width="330" alt="Maraton"><br><sub>Maraton</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.hu.webp" width="330" alt="Párbaj (az ellenfél cellákat tölt ki)"><br><sub>Párbaj (az ellenfél cellákat tölt ki)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.hu.webp" width="330" alt="Hardcore: egy hiba egy életbe kerül"><br><sub>Hardcore: egy hiba egy életbe kerül</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.hu.webp" width="330" alt="A nap rejtvénye"><br><sub>A nap rejtvénye</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.hu.webp" width="330" alt="Hangos"><br><sub>Hangos</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.hu.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Játék és eszközök**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.hu.webp" width="330" alt="▶ Auto fut"><br><sub>▶ Auto fut</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.hu.webp" width="330" alt="Megoldott rejtvény"><br><sub>Megoldott rejtvény</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.hu.webp" width="330" alt="Saját kombináció (szabálylista)"><br><sub>Saját kombináció (szabálylista)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.hu.webp" width="330" alt="Elforgatott 3D nézet"><br><sub>Elforgatott 3D nézet</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Nyomtatási nézet"><br><sub>Nyomtatási nézet</sub></td></tr></table>

**Megoldó és Névjegy**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.hu.webp" width="330" alt="Megoldó: üres rács (több megoldás)"><br><sub>Megoldó: üres rács (több megoldás)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.hu.webp" width="330" alt="Megoldó: nincs megoldás"><br><sub>Megoldó: nincs megoldás</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.hu.webp" width="330" alt="A „Névjegy” oldal"><br><sub>A „Névjegy” oldal</sub></td></tr></table>

## A változatok katalógusa (136)

Minden változatnál az alábbiak találhatók: a lap szabályai, egy képernyőkép az alkalmazás által generált valódi rejtvénnyel (a változat alapértelmezett mérete (9×9, ahol van, különben pl. 5×5 vagy 4×4); „közepes” szint), egy második képernyőkép 4 „Lépésről lépésre” lépés után, az utolsó lépés valódi magyarázata és egy kód, amellyel pontosan ugyanazt a rejtvényt generálod újra. Minden változat alatt egy „Teljes galéria” (lenyitható) tartalmazza a többi képernyőkép-típust: a kártyát az Atlaszban és a lapot, az összes méretet, könnyű/közepes/nehéz, automatikus jegyzetek, ellenőrzés egy hibás számjeggyel, a teljes megoldást, a sötét témát, a telefont, az angol felületet és a szabálypanelt. A képernyőképek a `docs/screens/` könyvtárban vannak. A képernyőképeket az 1.4.0 verzió óta automatikusan készítjük, világos témában.

**Teljes katalógus:** [docs/catalog/hu/README.md](docs/catalog/hu/README.md)

| Kategória | Változatok |
|---|---|
| **Méret és szimbólumok** | [Klasszikus](docs/catalog/hu/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/hu/01-marime-si-simboluri.md#wordoku) · [Latin négyzet](docs/catalog/hu/01-marime-si-simboluri.md#latin) · [Nullás Sudoku](docs/catalog/hu/01-marime-si-simboluri.md#zero) |
| **Régiók és csoportok** | [Sudoku X](docs/catalog/hu/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/hu/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (szabálytalan)](docs/catalog/hu/02-regiuni-si-grupuri.md#jigsaw) · [Diszjunkt csoportok](docs/catalog/hu/02-regiuni-si-grupuri.md#dg) · [Középpontok](docs/catalog/hu/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/hu/02-regiuni-si-grupuri.md#girandola) · [Szórt kilencesek](docs/catalog/hu/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/hu/02-regiuni-si-grupuri.md#asterisk) · [Egyszerű átló](docs/catalog/hu/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/hu/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/hu/02-regiuni-si-grupuri.md#pandiag) |
| **Szomszédok** | [Anti-huszár](docs/catalog/hu/03-vecini.md#antiknight) · [Anti-király](docs/catalog/hu/03-vecini.md#antiking) · [Nincs szomszédos számpár](docs/catalog/hu/03-vecini.md#nonconsec) · [Csoda](docs/catalog/hu/03-vecini.md#miracle) |
| **Paritás, pontok, jelek** | [Páros–páratlan](docs/catalog/hu/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/hu/04-paritate-puncte-semne.md#kropki) · [Egymást követő](docs/catalog/hu/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/hu/04-paritate-puncte-semne.md#xv) · [Összehasonlítások](docs/catalog/hu/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/hu/04-paritate-puncte-semne.md#batt) · [Négyesek](docs/catalog/hu/04-paritate-puncte-semne.md#quad) · [Csak jelölt párosak](docs/catalog/hu/04-paritate-puncte-semne.md#evenonly) · [Csak jelölt páratlanok](docs/catalog/hu/04-paritate-puncte-semne.md#oddonly) · [Erődítmény](docs/catalog/hu/04-paritate-puncte-semne.md#fortress) · [Minimum / Maximum](docs/catalog/hu/04-paritate-puncte-semne.md#minmax) · [Indexelés](docs/catalog/hu/04-paritate-puncte-semne.md#indexing) · [Arány ×3](docs/catalog/hu/04-paritate-puncte-semne.md#ratio) · [Különbség](docs/catalog/hu/04-paritate-puncte-semne.md#diff) · [Kropki csak jelölt](docs/catalog/hu/04-paritate-puncte-semne.md#kropkipos) · [XV csak jelölt](docs/catalog/hu/04-paritate-puncte-semne.md#xvpos) · [Egymást követő csak jelölt](docs/catalog/hu/04-paritate-puncte-semne.md#consecpos) · [Jelzések nélkül](docs/catalog/hu/04-paritate-puncte-semne.md#clueless) |
| **Összegek** | [Killer](docs/catalog/hu/05-sume.md#killer) · [Little Killer](docs/catalog/hu/05-sume.md#littlekiller) · [Egyedi Little Killer](docs/catalog/hu/05-sume.md#luk) |
| **Szegélyjelzések** | [Sandwich](docs/catalog/hu/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/hu/06-indicii-pe-margine.md#xsum) · [Frame (az első három)](docs/catalog/hu/06-indicii-pe-margine.md#frame) · [Felhőkarcolók](docs/catalog/hu/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/hu/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/hu/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/hu/06-indicii-pe-margine.md#radar) · [Számoló szendvics](docs/catalog/hu/06-indicii-pe-margine.md#sandnum) · [Paritás-szendvics](docs/catalog/hu/06-indicii-pe-margine.md#sandpar) · [Dupla szendvics](docs/catalog/hu/06-indicii-pe-margine.md#sand2) · [Pince](docs/catalog/hu/06-indicii-pe-margine.md#subsol) · [Szegélyszorzat](docs/catalog/hu/06-indicii-pe-margine.md#prodmargin) · [Szegélykülönbség](docs/catalog/hu/06-indicii-pe-margine.md#diffmargin) · [Emelkedések](docs/catalog/hu/06-indicii-pe-margine.md#ascents) · [Inverziók](docs/catalog/hu/06-indicii-pe-margine.md#inversions) · [Ciklusok](docs/catalog/hu/06-indicii-pe-margine.md#cycles) · [Fixpontok](docs/catalog/hu/06-indicii-pe-margine.md#fixedpts) · [Váltakozó összeg](docs/catalog/hu/06-indicii-pe-margine.md#altsum) · [Átlóösszegek](docs/catalog/hu/06-indicii-pe-margine.md#dxsum) |
| **Vonalak** | [Hőmérők](docs/catalog/hu/07-linii.md#thermo) · [Nyilak](docs/catalog/hu/07-linii.md#arrow) · [Renban](docs/catalog/hu/07-linii.md#renban) · [Német suttogások](docs/catalog/hu/07-linii.md#whisper) · [Palindrom](docs/catalog/hu/07-linii.md#palindrome) · [Vonalak között](docs/catalog/hu/07-linii.md#between) · [Entropikus vonalak](docs/catalog/hu/07-linii.md#entropic) · [Moduláris vonalak](docs/catalog/hu/07-linii.md#modular) · [Holland suttogások](docs/catalog/hu/07-linii.md#dutch) · [Nabner](docs/catalog/hu/07-linii.md#nabner) · [Lassú hőmérő](docs/catalog/hu/07-linii.md#slowthermo) · [Paritásvonal](docs/catalog/hu/07-linii.md#parityline) · [Azonos paritású vonal](docs/catalog/hu/07-linii.md#sameparity) · [Lockout](docs/catalog/hu/07-linii.md#lockout) · [Dupla nyíl](docs/catalog/hu/07-linii.md#doublearrow) · [Zipper](docs/catalog/hu/07-linii.md#zipper) · [Régióösszeg-vonalak](docs/catalog/hu/07-linii.md#regionsum) · [Átlagnyíl](docs/catalog/hu/07-linii.md#avgarrow) · [Szorzatnyíl](docs/catalog/hu/07-linii.md#prodarrow) · [„Pirula” nyíl](docs/catalog/hu/07-linii.md#pillarrow) · [Köd](docs/catalog/hu/07-linii.md#fog) · [Legato](docs/catalog/hu/07-linii.md#legato) · [Konszonancia](docs/catalog/hu/07-linii.md#consonant) · [Fix lépés](docs/catalog/hu/07-linii.md#fixstep) · [Komplementer vonal](docs/catalog/hu/07-linii.md#compline) · [Zigzag](docs/catalog/hu/07-linii.md#zigzag) · [Fibonacci](docs/catalog/hu/07-linii.md#fibonacci) · [Lépcsők](docs/catalog/hu/07-linii.md#steps) · [Számtani sorozat](docs/catalog/hu/07-linii.md#progression) · [Visszhang](docs/catalog/hu/07-linii.md#echo) · [Osztható vonal](docs/catalog/hu/07-linii.md#divisible) · [Prímvonal](docs/catalog/hu/07-linii.md#primeline) |
| **Összetett rácsok** | [Samurai](docs/catalog/hu/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/hu/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/hu/08-grile-compuse.md#gattai3) · [Sohei (négyes gyűrű)](docs/catalog/hu/08-grile-compuse.md#sohei) · [Kazaguruma (szélmalom)](docs/catalog/hu/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/hu/08-grile-compuse.md#tripledoku) · [Kereszt](docs/catalog/hu/08-grile-compuse.md#cross) |
| **Közeli rokonok** | [Futoshiki](docs/catalog/hu/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/hu/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/hu/09-rude-apropiate.md#strimko) |
| **Topológiák és tündérmozgások** | [Anti-futó](docs/catalog/hu/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-teve](docs/catalog/hu/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-zebra](docs/catalog/hu/10-topologii-si-mutari-fairy.md#antizebra) · [Tórusz anti-király](docs/catalog/hu/10-topologii-si-mutari-fairy.md#torusking) · [Tórusz anti-huszár](docs/catalog/hu/10-topologii-si-mutari-fairy.md#torusknight) · [Henger anti-király](docs/catalog/hu/10-topologii-si-mutari-fairy.md#cylking) · [Möbius anti-király](docs/catalog/hu/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein anti-király](docs/catalog/hu/10-topologii-si-mutari-fairy.md#kleinking) · [Projektív sík anti-király](docs/catalog/hu/10-topologii-si-mutari-fairy.md#projking) |
| **Globális szabályok** | [Komplementer szimmetria](docs/catalog/hu/11-reguli-globale.md#symcomp) · [Szimmetrikus paritás](docs/catalog/hu/11-reguli-globale.md#symparity) · [Súlypont](docs/catalog/hu/11-reguli-globale.md#cgrav) · [Lexikografikus sorok](docs/catalog/hu/11-reguli-globale.md#lexrows) · [Szomszédos szélsőértékek](docs/catalog/hu/11-reguli-globale.md#extremes) · [Kiegyensúlyozott dobozok](docs/catalog/hu/11-reguli-globale.md#boxbalance) · [A magányos ötös](docs/catalog/hu/11-reguli-globale.md#lonely5) · [Magányos cellák nélkül](docs/catalog/hu/11-reguli-globale.md#nolonely) · [Sorozatok nélkül](docs/catalog/hu/11-reguli-globale.md#noprog) · [Félvarázs dobozok](docs/catalog/hu/11-reguli-globale.md#semimagic) |
| **Cellajelzések** | [Dombormű](docs/catalog/hu/12-indicii-in-celule.md#relief) · [Páratlan aknák](docs/catalog/hu/12-indicii-in-celule.md#oddsweeper) · [Iránytű](docs/catalog/hu/12-indicii-in-celule.md#compass) · [Négyzetösszeg](docs/catalog/hu/12-indicii-in-celule.md#quadsum) · [Kő 2×2](docs/catalog/hu/12-indicii-in-celule.md#stone) · [Dominó](docs/catalog/hu/12-indicii-in-celule.md#domino) · [Négyzetszám-pirula](docs/catalog/hu/12-indicii-in-celule.md#pillsq) · [Prímketrec](docs/catalog/hu/12-indicii-in-celule.md#primecage) · [Kiegyensúlyozott ketrec](docs/catalog/hu/12-indicii-in-celule.md#balcage) · [Duplázók](docs/catalog/hu/12-indicii-in-celule.md#doubler) · [Tükörklónok](docs/catalog/hu/12-indicii-in-celule.md#clonemir) |
| **Magasabb dimenziók** | [3D latin kocka](docs/catalog/hu/13-dimensiuni-superioare.md#cube3) · [Kocka 2×2 dobozokkal](docs/catalog/hu/13-dimensiuni-superioare.md#cubebox) · [4D hiperkocka](docs/catalog/hu/13-dimensiuni-superioare.md#hyper4) · [5D hiperkocka](docs/catalog/hu/13-dimensiuni-superioare.md#hyper5) · [Görög-latin (ortogonális négyzetek)](docs/catalog/hu/13-dimensiuni-superioare.md#greco) |

Minden kategóriának saját oldala van a [`docs/catalog/`](docs/catalog/README.md) könyvtárban (képernyőképek és teljes galériák).

## Funkciók

- **Az 1.0-s verzió változatai (38):** klasszikus (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), wordoku, latin négyzet, Sudoku X, Hyper (Windoku), Jigsaw, diszjunkt csoportok, középpontok, anti-huszár, anti-király, nincs szomszédos számpár, Csoda, páros–páratlan, Kropki, egymást követő, XV, összehasonlítások, Battenburg, négyesek, Killer, Little Killer, Sandwich, X-Sums, Frame, felhőkarcolók, hőmérők, nyilak, Renban, német suttogások, palindrom, vonalak között, entropikus vonalak, moduláris vonalak, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Az 1.1-es verzióban hozzáadva (24):** Girandola (az 1.4-ben javítva), Asterisk, egyszerű átló, holland suttogások, Nabner, lassú hőmérő, paritásvonal (váltakozó), azonos paritású vonal, csak jelölt párosak, csak jelölt páratlanok, egyedi Little Killer, Erődítmény, Minimum/Maximum, Lockout, dupla nyíl, Zipper, Rossini, Outside, Clone, régióösszeg-vonalak, átlagnyíl, szorzatnyíl, „pirula” nyíl, Strimko.
- **Az 1.2-es verzióban hozzáadva (3. szint, 3):** Indexelés (a sor első számjegye az 1-es oszlopát mutatja), Arány ×3 (körök a 3:1 arányú párokhoz), Köd (a jelzések a megoldás során jelennek meg; a rejtvény úgy épül fel, hogy az egyszerű propagáció csak a látható információval folytatódhasson).
- **Az 1.3-as verzióban hozzáadva (70):**
  - *Topológiák és tündérugrások (9):* Anti-futó, Anti-teve, Anti-zebra, Tórusz anti-király, Tórusz anti-huszár, Henger, Möbius, Klein és projektív sík anti-király.
  - *Globális szabályok (12):* Pandiagonális, Nullás Sudoku, Komplementer szimmetria, Szimmetrikus paritás, Súlypont, Lexikografikus sorok, Szomszédos szélsőértékek, Kiegyensúlyozott dobozok, A magányos ötös, Magányos cellák nélkül, Sorozatok nélkül, Félvarázs dobozok.
  - *Szegélyjelzések (13):* Radar, Számoló szendvics, Paritás-szendvics, Dupla szendvics, Pince, Szegélyszorzat, Szegélykülönbség, Emelkedések, Inverziók, Ciklusok, Fixpontok, Váltakozó összeg, Átlóösszegek.
  - *Cellajelzések és ketrecek (11):* Dombormű, Páratlan aknák, Iránytű, Négyzetösszeg, Kő 2×2, Dominó, Négyzetszám-pirula, Prímketrec, Kiegyensúlyozott ketrec, Duplázók, Tükörklónok.
  - *Pontok (5):* Különbség, Kropki / XV / Egymást követő csak jelölt, Jelzések nélkül (csak Kropki-pontok).
  - *Vonalak (11):* Legato, Konszonancia, Fix lépés, Komplementer vonal, Cikcakk, Fibonacci, Lépcsők, Számtani sorozat, Visszhang, Osztható vonal, Prímvonal.
  - *Összetett rácsok (4):* Sohei, Kazaguruma, Kereszt, Tripledoku (V).
  - *Magasabb dimenziók (5):* 3D latin kocka, Kocka 2×2 dobozokkal, 4D hiperkocka, 5D hiperkocka, Görög-latin.
- **Játékmódok (7):** Orb, Memória, Maraton, Párbaj, Hardcore, A nap rejtvénye, Hangos. Az „Új játék” alatt választhatók; a megosztási kód `@mód` utótagot kap (A nap rejtvényénél és a Maratonnál nem).
- **Saját kombináció:** a rácsszabályok + jelzések bármely összeférhető készlete (pl. Killer + átlók, hőmérők + nyilak).
- **Játék:** többszörös kijelölés, jegyzetek, visszavonás/ismétlés, tipp (logika a jelölteken), automatikus jegyzetek, ellenőrzés, kiemelt ütközések, stopper, automatikus mentés, nyomtatás.
- **Megosztási kód:** a `változat-méret-nehézség-mag` ugyanazt a rejtvényt generálja újra ugyanabban a verzióban.
- **Klasszikus 9×9-es megoldó** opcionális kiegészítő szabályokkal; megmondja, hogy a megoldás egyértelmű, többszörös vagy nem létezik.
- **Atlasz:** keresés, kategóriák, „A nap változata”, „Lepj meg”, lexikon, CSV-export, BibTeX-hivatkozás.
- Világos/sötét/automatikus téma, nagyított szöveg, 8 nyelvű felület (RO, EN, FR, IT, ES, PT, DE, HU).
- **A nap rejtvénye** az UTC-dátumot használja; az egymást követő napok sorozata helyben marad meg (`sff_daily`).

## Hogyan generál

A motor kiválaszt egy megoldott rácsot, amely megfelel a szabályoknak, ebből levezeti a jelzéseket (ketrecek, hőmérők, pontok...), majd egyenként eltávolítja a megadott számjegyeket, de csak addig, amíg a megoldó bizonyítja, hogy a megoldás egyértelmű marad. A generálás ugyanabból a fájlból létrehozott Web Workerben fut (hálózat nélkül); ha a Worker nem érhető el, a főszálon fut.

## Korlátok

- A „Lépésről lépésre” kitölt egy számjegyet, és kiemeli, miért (a cellában megmaradt egyetlen számjegy; egy sor/oszlop/régió egyetlen lehetséges cellája; a változat szabályaiból levont következtetés; vagy, ha nincs közvetlen következtetés, a megoldásból vett számjegy, ennek jelölésével). Az „▶ Auto” magától futtatja a lépéseket, 1,6 másodpercenként. Hardcore és Memória módban le van tiltva; minden lépés visszavonható.
- A könnyű/közepes/nehéz nehézség csupán a megtartott jelzések száma. A rejtvény a megoldó erőfeszítésének mérőszámát is mutatja (0 = csak propagációval megoldható; különben az elágazások száma), amely nem az emberi technikák értékelése. Ha a generálás 12 másodpercnél tovább tart, a nehézség automatikusan csökken (de nem „A nap rejtvényénél” és a megosztott kódoknál).
- Chromiumban tesztelve (file:// címről megnyitva is). A Firefoxot és a Safari/iOS-t a fejlesztői környezetben nem lehetett tesztelni; ha a Blobból létrehozott Workert letiltják, az alkalmazás a főszálon való generálásra tér át (a felület a generálás alatt blokkolt).
- Akadálymentesség: a billentyűzet (nyilak, számjegyek, N, Ctrl+Z) és a kijelölt cella felolvasása; a tábla SVG, és nem teljes értékű eszköz képernyőolvasókhoz.
- A mentett állapot verziószámot tartalmaz; az ismeretlen formátumot félreteszi (`sff_game_bad`), nem törli.
- A „Nehéz” annyi számjegyet távolít el, amennyit csak tud; a rácsban sok jelzést tartalmazó változatoknál nagyon kevés megadott számjegy maradhat.
- Az összetett rácsok csak a klasszikus szabályokat tartalmazzák; a nagyon túlterhelt kombinációk tovább tarthatnak vagy sikertelenek lehetnek (az alkalmazás ezt közli).
- A 16×16 és a 25×25 az 1–9 szimbólumokat és betűket használ (A–G, illetve A–P).
- **Általam választott geometriák** (a források eltérnek): Sohei, Kazaguruma, Kereszt, Tripledoku (V); a Domino definíciója; az élek összeragasztása a Möbius, a Klein és a projektív sík esetében; a „Szomszédos szélsőértékek” az átlós szomszédokat is magukban foglaló szomszédokkal (csak ortogonális szomszédokkal nem léteznek 9×9-es rácsok); Félvarázs dobozok sorokon és oszlopokon (a teljesen varázsdobozok, átlókkal, lehetetlenek).
- **Hiperkockák és kockák:** rétegekben (szeletmozaik) jelennek meg, a 3D-sek pedig forgatható 3D nézetben is; a 3D kockáknál forgatható „3D nézet” is van (egérrel húzod, a csúszka elrejti az elülső rétegeket); a 4D/5D hiperkockák csak rétegekben maradnak. Mivel nagyon merevek, „Nehéz” szinten csak néhány megadott számjegy marad (5D-ben a 243 cellából csak néhány). Görög-latin: 3, 4, 5, 7 méretek (a 6 lehetetlen; a 8 és a 9 sebesség miatt kimaradt).
- **Anti-vezír** nem létezik: ugyanazon számjegy tiltása ortogonálisan szomszédos cellákon már minden Sudoku szabálya. Az „Anti-futó” a 2×2-es ugrást jelenti, nem csúszó futót. A munkalista „Strings complementary/equal” elemei nem önálló változatok: az ötletet a Komplementer vonal és a Visszhang lefedi.
- **Logikailag közeli vagy azonos változatok (a lapokon jelezve):** Nullás Sudoku (a Klasszikushoz képest csak más szimbólumok), Lexikografikus sorok (visszavezethető arra, hogy „az első oszlop 1…N”), Pince (Felhőkarcolók megfordított számjegyekkel).
- **Párbaj:** az ellenfél egy időzítő, amely az ismert megoldásból tölt ki cellákat, nem logikával dolgozó megoldó.
- A szabályok a szokásos konvenciókat követik; a lapok megmondják, a konvenció melyik változatát választottuk. Néhány új változatnál a források eltérnek, és kifejezett konvenciót rögzítettem: Girandola (az 1.4 óta: sarkok, közép és r2c5, r5c2, r5c8, r8c5, a Regexp::Sudoku szerint; a régi elrendezés most „Szórt kilencesek”), „paritásvonal” (váltakozó, az „azonos paritás” változat külön), Rossini (a nyíl az első három számjegy legnagyobbikára mutat), Outside (a szegélyen lévő számjegyek az első három cella között szerepelnek), Zipper (minden szimmetrikus pár összege a középső), Régióösszeg-vonalak (az összeg minden átszelt dobozban azonos), Erődítmény (csak a jelöletlen szomszédok számítanak).

## Adatvédelem és hálózat

- **Helyi tárolás:** `localStorage`, `sff_lang`, `sff_theme`, `sff_size`, `sff_game`, `sff_daily` kulcsok (nyelv, téma, szövegméret, az aktuális játék, A nap rejtvényének sorozata) és `sff_game_bad` (ismeretlen formátumban mentett állapot, megőrizve).
- **Hálózat:** a kódban nincs `fetch`, `XMLHttpRequest`, CDN vagy külső erőforrás. A fájlban az egyetlen URL az SVG névtér (`http://www.w3.org/2000/svg`), amely nem generál kérést.

## A tároló szerkezete

```
index.html          aplicația (generat; se deschide direct în browser)
engine.js           motorul: solver, generator, variantele
src/                interfața (template.html, style.css, data.js, app.js)
build.py            asamblează index.html din src/ + engine.js
test.js             suita de teste (node test.js)
docs/               capturi (docs/screens), catalogul pe categorii (docs/catalog), GHID.html + GHID.<lang>.html (ghid ilustrat; se văd pe Pages)
CHANGELOG.md        istoric versiuni
CONTRIBUTING.md     cum contribui
LICENSE             MIT
```

Közzététel a GitHub Pages-en: Settings → Pages → Branch `main`, mappa `/ (root)`; az `index.html` a gyökérben van, és csak relatív útvonalakat használ, ezért a `https://<felhasználó>.github.io/<tároló>/` cím alatt is működik. Lásd a [`CHANGELOG.md`](CHANGELOG.md) és a [`CONTRIBUTING.md`](CONTRIBUTING.md) fájlt.

## Helyi / offline futtatás

Töltsd le az `index.html` fájlt, és nyisd meg egy böngészőben; nincs szüksége internetre.

## Tesztek

Automatikusan a GitHubon is futnak (Actions, `.github/workflows/ci.yml`): reprodukálható build, `node test.js`, és annak ellenőrzése, hogy az `index.html`-nek nincsenek külső erőforrásai.

Az `engine.js` a motor (ugyanez a forrás szerepel az `index.html`-ben). A `test.js` csomag Node-dal fut:

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

Minden változatra és méretre, könnyű és nehéz szinten ellenőrzi: a megoldás megfelel a szabályoknak, a rejtvénynek egyértelmű a megoldása (számlálás ugyanazzal a megoldóval, mint a generátoré, nagy kerettel; a 4×4-es felsorolások és a szemantikavalidátor külön íródtak), a megoldás túléli a propagációt a jelzések véletlen részhalmazaiból kiindulva (*soundness*). Ezenkívül 4×4-ben a jelzések nélküli megoldások számát összevetik egy kimerítő felsorolással (pl. 288 a klasszikusnál), és néhány saját kombinációt is ellenőriznek. Az 1.1-es verzió óta minden rejtvényt a motortól külön megírt szabályszemantika-validátor is ellenőriz, közvetlenül a lapok szövegéből (ellenőrzi például a Zippert, a Lockoutot, az átlag-/szorzat-/pirulanyilakat, a Clone-t, a Strimko-láncokat). Az 1.3-as verzió óta a független validátor a topológiákat, a tündérugrásokat, a globális szabályokat, a szegély- és cellajelzéseket, a ketreceket, a vonalakat és a pontokat is lefedi (a motortól külön újraírt képletek), a kockáknál, hiperkockáknál és a görög-latinnál pedig a jelzések nélküli megoldások számát külön DFS-felsorolással vetik össze (pl. 21888 a 4×4×4-es, 2×2-es dobozokkal ellátott kockánál, 72 és 6912 a görög-latin 3 és 4 esetén). Utolsó futtatás: 3144 ellenőrzés, mind sikeres; a független validátor most már az 1.0–1.2 típusait is lefedi, és egy mutánsteszt (16 506 számjegyátnevezés) teljes egyezést mutat a motor és a validátor között; 660 darab 4×4-es rejtvényt külön felsorolás igazolt egyedinek; kiegészítő terhelés változatonként 12 maggal (5652 rejtvény, nulla hiba); ezenkívül egy terhelési próba minden változatra 5 rejtvénnyel, minimális és maximális méretben, hiba nélkül (a leglassabb generálás, „Nehéz” szinten néhány globális szabályú változatnál, körülbelül 21 másodpercig tartott). Korlát: a kimerítő felsorolással történő keresztellenőrzés csak a 4×4-es mérettel rendelkező változatokra létezik (és a kis kockákra/görög-latinra, ahogy fent látható).

## Ami a 3. szintből nincs megvalósítva

Nem szerepelnek: Chaos Construction, Deconstruction, más rejtvényekkel alkotott hibridek (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), az egymásra rakódó Flower/Butterfly rácsok (a Sohei és a Kazaguruma az 1.3 óta léteznek, általam választott geometriával), módosító cellák, Schrödinger, „liar”, Vudoku, Capsule, Deficit. Némelyik megváltoztatja a játékmódot, vagy más fajta logikájú megoldókat igényel; másoknál a talált források nem rögzítik a szabályokat vagy a geometriát, és kitalálásuk azt jelentené, hogy ismert változatként tüntetnék fel valamit, ami nem az.

## Licenc

**MIT** — lásd a [`LICENSE`](LICENSE) fájlt. Az egész tárolóra vonatkozik: a kódra (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), a szövegekre (README, a lapok) és a `docs/screens/` képernyőképeire. Használhatod, másolhatod, módosíthatod, közzéteheted és eladhatod, feltéve, hogy megtartod a szerzői jogi közleményt és a licenc szövegét. A program „ahogy van” kerül rendelkezésre, garancia nélkül.

Megjegyzések:
- Az alkalmazás nem tartalmaz külső könyvtárakat vagy erőforrásokat, ezért nincsenek betartandó harmadik fél licencek.
- A Sudoku-változatok nevei és szabályai (Killer, Kropki, Sandwich stb.) nyilvánosan ismert rejtvénytípusokat jelölnek; a lapok szövegei ehhez az alkalmazáshoz íródtak. A nevek a létrehozó szerzőké és közösségeké maradnak.

## Szerző

Alexio — Alexandru-Ionuț Chiuță, elérhetőség: <alexio@trom.tf>.

## Összefoglaló

136 Sudoku-bejegyzésből álló atlasz (≈130 külön szabályrendszerrel; a Pince, a Nullás és a Lexikografikus sorok más változatok közeli másolatai, és a lapjaikon ezt kimondják) (plusz 7 játékmód: Orb, Memória, Maraton, Párbaj, Hardcore, A nap rejtvénye, Hangos) helyi generátorral és megoldóval, egyetlen HTML-fájlban. A rejtvényeket a böngésző generálja bizonyítottan egyértelmű megoldással (a megadott számjegyeket csak addig távolítja el, amíg egy propagációs megoldó megerősíti az egyértelműséget). Tartalmaz saját szabálykeverőt, jegyzeteket/visszavonást/tippeket, megosztási kódokat, klasszikus 9×9-es megoldót, CSV-exportot és BibTeX-hivatkozást. Nincsenek hálózati kérések; az állapot a `localStorage`-ban van tárolva (`sff_*`). A nehézség (könnyű/közepes/nehéz) csupán a megtartott megadott számjegyek száma; minden rejtvény mért értéket is mutat: hány elágazásra van szüksége egy propagációs megoldónak (0 = csak propagációval megoldható). Ez a megoldó erőfeszítése, nem az emberi technikák értékelése. A motor tesztcsomagjához futtasd a `node test.js` parancsot. Licenc: MIT (lásd a `LICENSE` fájlt), amely a kódra, a szövegekre és a képernyőképekre vonatkozik.

Ez a README tartalmaz egy használati útmutatót a felület képernyőképeivel, valamint egy katalógust, amely a 136 változat mindegyikéhez két valódi képernyőképet, a szabályokat és egy reprodukálható kódot tartalmaz (`screens/`).

## Megjegyzések az 1.4-hez

- A **Girandola** a Regexp::Sudoku leírása szerint lett javítva (sarkok, közép, r2c5, r5c2, r5c8, r8c5). A régi elrendezés (sarkok, oldalfelezők, közép) „Szórt kilencesek” (`sparse9`) néven marad meg. Az 1.4 előtt generált `girandola-…` kódok most más rejtvényt adnak.
- Az 1.4-ben a képernyőképek alapján javítva: a „Játék” fül felirata (duplikált szövegkulcs), a kóddal végzett „Megnyitás” után a régi értékeken maradt listák, és a visszavonás után megmaradt „Hibás cellák” üzenet.
- 1.4-es ellenőrzések: a lapok szövegéből vakon megírt validátor (az akkor létező változatok 135/135-e megfelelt; a „Szórt kilencesek” később került hozzá, és van validátora a `test.js`-ben), összevetés közzétett forrásokkal 56 változatnál (a Regionsum, a Rossini és a Little Unique Killer lapjai pontosításokat kaptak), egyszeri futtatás 1818 rejtvénnyel az összes változaton és a ≤12 méreteken hiba nélkül (a szkript nem része a tárolónak), a „Lépésről lépésre” mind a 136 változaton tesztelve.
- A források még nem erősítették meg: a Sohei, a Kazaguruma, a Kereszt, a Tripledoku V elrendezését; az ismétlődő számjegyek kezelését a Quadnál és a Duplázóknál; az átlós összefüggőséget a Strimkónál.
