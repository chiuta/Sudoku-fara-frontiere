# Sudoku fără frontiere

[English](README.md) · **Română** · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versiune:** 1.6.3 · **Ultima actualizare:** 2026-10-22

Limbile interfeței: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Atlas de variante Sudoku, cu generator și rezolvator care rulează local — într-un singur fișier HTML.

**Licență:** [MIT](LICENSE) · **Live:** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Ghid ilustrat (o singură pagină):** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.html>

![Câteva variante, după „Pas cu pas”](docs/screenshot.png)

## Ce este

Un atlas interactiv de 136 de intrări (≈130 cu reguli distincte: Subsol, Sudoku cu zero și Rânduri lexicografice sunt logic aproape identice cu alte variante și sunt declarate ca atare în fișe) (clasice, cu regiuni speciale, topologii și salturi fairy, reguli globale, indicii pe linii, pe margine, în celule sau în grilă, grile compuse, cuburi și hipercuburi, Greco-Latin și rude apropiate), plus 7 moduri de joc. Fiecare variantă are o fișă cu reguli și se poate juca local: puzzle-urile sunt generate în browser, cu **soluție unică demonstrată** de un solver cu propagare. Poți combina și reguli într-o „Combinație proprie”.

## Ghid de utilizare

### Pornire rapidă

1. Deschide `index.html` în browser (funcționează offline, fără instalare).
2. La **Atlas** alegi o variantă (căutare, categorii, „Varianta de astăzi”, „Surprinde-mă”); fiecare variantă are o fișă cu regulile.
3. La **Joacă** alegi varianta, mărimea, dificultatea și modul, apoi apeși **Joc nou**. Puzzle-ul se generează în browser, cu soluție unică.

<p align="center"><img src="docs/screens/ui_atlas.ro.webp" width="760" alt="Atlasul variantelor"><br><sub>Atlas: căutare, filtre pe categorii și carduri cu mărimile disponibile.</sub></p>

### Ecranul de joc

<p align="center"><img src="docs/screens/ui_play.ro.webp" width="760" alt="Ecranul de joc"><br><sub>Tabla, bara de stare (variantă · mărime · indicii · dificultate · ramificări necesare solverului · timp), panoul „Joc nou” cu cod de partajare, tastatura numerică și acțiunile.</sub></p>

- **Cifre:** selectezi o celulă (sau mai multe, cu Shift/tragere) și apeși cifra, pe tastatură sau pe tastatura de pe ecran. Cifrele terminate apar estompate.
- **Tastatură:** săgeți = mută selecția, cifre/litere = completează, `Backspace`/`Delete`/`0` = șterge, `N` = notițe, `Ctrl+Z` / `Ctrl+Y` = anulează / refă.
- **Notițe:** butonul „Notițe” (sau `N`) trece la candidați mici în celulă; „Auto-notițe” îi calculează din regulile vizibile.
- **Verificări:** „Arată conflictele”, „Evidențiază aceeași cifră” și „Evidențiază celulele legate” și „Curăță notițele automat” se pot bifa; „Verifică” marchează cifrele greșite.
- **Indiciu** completează o celulă (prin logică pe candidați; dacă nu există pas direct, cifra vine din soluție). **Arată soluția** completează tot.
- **Cod:** codul de lângă „Joc nou” regenerează același puzzle în aceeași versiune a aplicației; îl lipești la „Deschide”.

<p align="center"><img src="docs/screens/ui_notes.ro.webp" width="760" alt="Notițe"><br><sub>Notițe: candidații mici într-o celulă.</sub></p>

### Pas cu pas și ▶ Auto

**Pas cu pas** pune o cifră și arată de ce: celulele care o justifică sunt colorate (galben), celula nouă e verde, iar sub tablă apare explicația. **▶ Auto** rulează pașii singur, la 1,6 s. Motivele posibile: unica cifră rămasă în celulă; unica celulă dintr-un rând/coloană/regiune unde poate sta cifra; deducție din regulile variantei; sau, când nu există deducție directă, cifra din soluție (spus explicit). Dacă ai o cifră greșită, primul pas o corectează. Fiecare pas se poate anula; la Hardcore și Memorie e dezactivat.

<p align="center"><img src="docs/screens/ui_step.ro.webp" width="760" alt="Pas cu pas"><br><sub>După trei pași: ultima cifră (verde) și celulele care o justifică (galben), cu explicația sub tablă.</sub></p>

### Moduri de joc

Se aleg la „Joc nou → Mod de joc”; codul primește sufixul `@mod` (excepții: „Puzzle-ul zilei” și Maraton nu au sufix; un cod de Maraton deschide un puzzle obișnuit).

- **Orb:** se văd doar celulele la cel mult 2 pași de selecție.
- **Memorie:** indiciile se văd câteva secunde, apoi se ascund; butonul de privire costă 30 s. Fără indicii, verificare, auto-notițe, „Pas cu pas” și evidențierea conflictelor.
- **Maraton:** 5 puzzle-uri la rând (ușor, ușor, mediu, mediu, greu) cu timp total.
- **Duel:** un adversar-cronometru completează câte o celulă la câteva secunde, din soluția cunoscută (fără logică); dacă termină primul, pierzi.
- **Hardcore:** 3 vieți, fiecare cifră greșită costă una; fără indiciu, verificare sau auto-notițe.
- **Puzzle-ul zilei:** același puzzle pentru toți într-o zi (data UTC), cu serie de zile consecutive păstrată local.
- **Sonor:** fiecare cifră are o notă; un rând, o coloană sau o casetă completă cântă un arpegiu.

<p align="center"><img src="docs/screens/ui_mode_orb.ro.webp" width="760" alt="Modul Orb"><br><sub>Modul Orb: doar vecinătatea selecției e vizibilă.</sub></p>

### Cuburi și hipercuburi

Straturile sunt afișate ca mozaic de felii. La cuburile 3D apare și „Vedere 3D”: tragi cu mausul ca să rotești cubul, iar glisorul ascunde straturile din față. Hipercuburile 4D/5D rămân doar pe straturi.

<p align="center"><img src="docs/screens/ui_3d.ro.webp" width="760" alt="Vedere 3D"><br><sub>Cub latin 3D 4×4×4 în vederea 3D rotativă.</sub></p>

### Rezolvator clasic 9×9

Lipești un puzzle (81 de caractere: 1–9, iar golurile ca 0 sau `.`), bifezi eventual reguli suplimentare (diagonale, ferestre hyper, anti-cal etc.) și apeși **Rezolvă**: aplicația spune dacă soluția e unică, multiplă sau inexistentă. „Joacă acest puzzle” îl duce în tabla de joc.

<p align="center"><img src="docs/screens/ui_solver.ro.webp" width="760" alt="Rezolvator"><br><sub>Rezolvatorul cu puzzle-ul de exemplu: „Soluție unică”.</sub></p>

### Telefon și temă întunecată

Interfața se adaptează la ecrane înguste; temă luminoasă/întunecată/automată (butonul 🌓), text mărit (butonul A), limbă RO/EN (butonul RO).

<p align="center"><img src="docs/screens/ui_mobile.ro.webp" width="260" alt="Telefon, temă luminoasă"> &nbsp; <img src="docs/screens/ui_dark.ro.webp" width="260" alt="Telefon, temă întunecată"></p>

### Combinație proprie

În Atlas, „Combinație proprie” (sau varianta „Combinație proprie” din „Joc nou”) lasă să bifezi orice set compatibil de reguli de grilă și indicii (de ex. Killer + diagonale, termometre + săgeți).

### Galeria interfeței (toate tipurile de ecran)

**Atlas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.ro.webp" width="330" alt="Filtrare pe o categorie"><br><sub>Filtrare pe o categorie</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.ro.webp" width="330" alt="Căutare după nume"><br><sub>Căutare după nume</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.ro.webp" width="330" alt="Lexicon"><br><sub>Lexicon</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlas în engleză"><br><sub>Atlas în engleză</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.ro.webp" width="330" alt="Atlas, temă întunecată"><br><sub>Atlas, temă întunecată</sub></td></tr></table>

**Moduri de joc**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.ro.webp" width="330" alt="Memorie: indiciile se văd"><br><sub>Memorie: indiciile se văd</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.ro.webp" width="330" alt="Memorie: indiciile s-au ascuns"><br><sub>Memorie: indiciile s-au ascuns</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.ro.webp" width="330" alt="Maraton"><br><sub>Maraton</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.ro.webp" width="330" alt="Duel (adversarul completează celule)"><br><sub>Duel (adversarul completează celule)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.ro.webp" width="330" alt="Hardcore: o greșeală costă o viață"><br><sub>Hardcore: o greșeală costă o viață</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.ro.webp" width="330" alt="Puzzle-ul zilei"><br><sub>Puzzle-ul zilei</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.ro.webp" width="330" alt="Sonor"><br><sub>Sonor</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.ro.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Joc și instrumente**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.ro.webp" width="330" alt="▶ Auto în desfășurare"><br><sub>▶ Auto în desfășurare</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.ro.webp" width="330" alt="Puzzle rezolvat"><br><sub>Puzzle rezolvat</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.ro.webp" width="330" alt="Combinație proprie (lista de reguli)"><br><sub>Combinație proprie (lista de reguli)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.ro.webp" width="330" alt="Vedere 3D rotită"><br><sub>Vedere 3D rotită</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Vedere la tipărire"><br><sub>Vedere la tipărire</sub></td></tr></table>

**Rezolvator și Despre**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.ro.webp" width="330" alt="Rezolvator: grilă goală (soluții multiple)"><br><sub>Rezolvator: grilă goală (soluții multiple)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.ro.webp" width="330" alt="Rezolvator: fără soluție"><br><sub>Rezolvator: fără soluție</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.ro.webp" width="330" alt="Pagina „Despre”"><br><sub>Pagina „Despre”</sub></td></tr></table>

## Catalogul variantelor (136)

Fiecare variantă are mai jos: regulile din fișă, o captură cu un puzzle real generat de aplicație (mărimea implicită a variantei (9×9 unde există, altfel de ex. 5×5 sau 4×4); nivel „mediu”), o a doua captură după 4 pași „Pas cu pas”, explicația reală a ultimului pas și un cod cu care regenerezi exact același puzzle. Sub fiecare variantă, o „Galerie completă” (desfășurabilă) are celelalte tipuri de capturi: cardul din Atlas și fișa, toate mărimile, ușor/mediu/greu, auto-notițe, verificare cu o cifră greșită, soluția completă, tema întunecată, telefonul, interfața în engleză și panoul de reguli. Capturile sunt în `docs/screens/`. Capturile sunt făcute automat din versiunea 1.4.0, în temă luminoasă.

**Catalogul complet:** [docs/catalog/README.md](docs/catalog/README.md)

| Categorie | Variante |
|---|---|
| **Mărime și simboluri** | [Clasic](docs/catalog/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/01-marime-si-simboluri.md#wordoku) · [Pătrat latin](docs/catalog/01-marime-si-simboluri.md#latin) · [Sudoku cu zero](docs/catalog/01-marime-si-simboluri.md#zero) |
| **Regiuni și grupuri** | [Sudoku X](docs/catalog/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (neregulat)](docs/catalog/02-regiuni-si-grupuri.md#jigsaw) · [Grupuri disjuncte](docs/catalog/02-regiuni-si-grupuri.md#dg) · [Puncte centrale](docs/catalog/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/02-regiuni-si-grupuri.md#girandola) · [Nouă dispersate](docs/catalog/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/02-regiuni-si-grupuri.md#asterisk) · [Diagonală simplă](docs/catalog/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/02-regiuni-si-grupuri.md#pandiag) |
| **Vecini** | [Anti-cal](docs/catalog/03-vecini.md#antiknight) · [Anti-rege](docs/catalog/03-vecini.md#antiking) · [Fără consecutive](docs/catalog/03-vecini.md#nonconsec) · [Miracol](docs/catalog/03-vecini.md#miracle) |
| **Paritate, puncte, semne** | [Par–impar](docs/catalog/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/04-paritate-puncte-semne.md#kropki) · [Consecutiv](docs/catalog/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/04-paritate-puncte-semne.md#xv) · [Comparații](docs/catalog/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/04-paritate-puncte-semne.md#batt) · [Cvadruple](docs/catalog/04-paritate-puncte-semne.md#quad) · [Doar pare marcate](docs/catalog/04-paritate-puncte-semne.md#evenonly) · [Doar impare marcate](docs/catalog/04-paritate-puncte-semne.md#oddonly) · [Fortăreață](docs/catalog/04-paritate-puncte-semne.md#fortress) · [Minim / Maxim](docs/catalog/04-paritate-puncte-semne.md#minmax) · [Indexare](docs/catalog/04-paritate-puncte-semne.md#indexing) · [Raport ×3](docs/catalog/04-paritate-puncte-semne.md#ratio) · [Diferență](docs/catalog/04-paritate-puncte-semne.md#diff) · [Kropki doar marcate](docs/catalog/04-paritate-puncte-semne.md#kropkipos) · [XV doar marcate](docs/catalog/04-paritate-puncte-semne.md#xvpos) · [Consecutiv doar marcate](docs/catalog/04-paritate-puncte-semne.md#consecpos) · [Fără indicii](docs/catalog/04-paritate-puncte-semne.md#clueless) |
| **Sume** | [Killer](docs/catalog/05-sume.md#killer) · [Little Killer](docs/catalog/05-sume.md#littlekiller) · [Little Killer unic](docs/catalog/05-sume.md#luk) |
| **Indicii pe margine** | [Sandwich](docs/catalog/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/06-indicii-pe-margine.md#xsum) · [Frame (primele trei)](docs/catalog/06-indicii-pe-margine.md#frame) · [Zgârie-nori](docs/catalog/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/06-indicii-pe-margine.md#radar) · [Sandwich numeric](docs/catalog/06-indicii-pe-margine.md#sandnum) · [Sandwich de paritate](docs/catalog/06-indicii-pe-margine.md#sandpar) · [Sandwich dublu](docs/catalog/06-indicii-pe-margine.md#sand2) · [Subsol](docs/catalog/06-indicii-pe-margine.md#subsol) · [Produs la margine](docs/catalog/06-indicii-pe-margine.md#prodmargin) · [Diferență la margine](docs/catalog/06-indicii-pe-margine.md#diffmargin) · [Urcări](docs/catalog/06-indicii-pe-margine.md#ascents) · [Inversiuni](docs/catalog/06-indicii-pe-margine.md#inversions) · [Cicluri](docs/catalog/06-indicii-pe-margine.md#cycles) · [Puncte fixe](docs/catalog/06-indicii-pe-margine.md#fixedpts) · [Sumă alternantă](docs/catalog/06-indicii-pe-margine.md#altsum) · [Sume pe diagonale](docs/catalog/06-indicii-pe-margine.md#dxsum) |
| **Linii** | [Termometre](docs/catalog/07-linii.md#thermo) · [Săgeți](docs/catalog/07-linii.md#arrow) · [Renban](docs/catalog/07-linii.md#renban) · [Șoapte germane](docs/catalog/07-linii.md#whisper) · [Palindrom](docs/catalog/07-linii.md#palindrome) · [Între linii](docs/catalog/07-linii.md#between) · [Linii entropice](docs/catalog/07-linii.md#entropic) · [Linii modulare](docs/catalog/07-linii.md#modular) · [Șoapte olandeze](docs/catalog/07-linii.md#dutch) · [Nabner](docs/catalog/07-linii.md#nabner) · [Termometru lent](docs/catalog/07-linii.md#slowthermo) · [Linie de paritate](docs/catalog/07-linii.md#parityline) · [Linie de aceeași paritate](docs/catalog/07-linii.md#sameparity) · [Lockout](docs/catalog/07-linii.md#lockout) · [Săgeată dublă](docs/catalog/07-linii.md#doublearrow) · [Zipper](docs/catalog/07-linii.md#zipper) · [Linii cu sume pe regiuni](docs/catalog/07-linii.md#regionsum) · [Săgeată medie](docs/catalog/07-linii.md#avgarrow) · [Săgeată produs](docs/catalog/07-linii.md#prodarrow) · [Săgeată „pilulă”](docs/catalog/07-linii.md#pillarrow) · [Ceață](docs/catalog/07-linii.md#fog) · [Legato](docs/catalog/07-linii.md#legato) · [Consonanță](docs/catalog/07-linii.md#consonant) · [Pas fix](docs/catalog/07-linii.md#fixstep) · [Linie complementară](docs/catalog/07-linii.md#compline) · [Zigzag](docs/catalog/07-linii.md#zigzag) · [Fibonacci](docs/catalog/07-linii.md#fibonacci) · [Trepte](docs/catalog/07-linii.md#steps) · [Progresie aritmetică](docs/catalog/07-linii.md#progression) · [Ecou](docs/catalog/07-linii.md#echo) · [Linie divizibilă](docs/catalog/07-linii.md#divisible) · [Linie primă](docs/catalog/07-linii.md#primeline) |
| **Grile compuse** | [Samurai](docs/catalog/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/08-grile-compuse.md#gattai3) · [Sohei (inel de patru)](docs/catalog/08-grile-compuse.md#sohei) · [Kazaguruma (moară de vânt)](docs/catalog/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/08-grile-compuse.md#tripledoku) · [Cruce](docs/catalog/08-grile-compuse.md#cross) |
| **Rude apropiate** | [Futoshiki](docs/catalog/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/09-rude-apropiate.md#strimko) |
| **Topologii și mutări fairy** | [Anti-alfil](docs/catalog/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-cămilă](docs/catalog/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-zebră](docs/catalog/10-topologii-si-mutari-fairy.md#antizebra) · [Tor anti-rege](docs/catalog/10-topologii-si-mutari-fairy.md#torusking) · [Tor anti-cal](docs/catalog/10-topologii-si-mutari-fairy.md#torusknight) · [Cilindru anti-rege](docs/catalog/10-topologii-si-mutari-fairy.md#cylking) · [Möbius anti-rege](docs/catalog/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein anti-rege](docs/catalog/10-topologii-si-mutari-fairy.md#kleinking) · [Plan proiectiv anti-rege](docs/catalog/10-topologii-si-mutari-fairy.md#projking) |
| **Reguli globale** | [Simetrie complementară](docs/catalog/11-reguli-globale.md#symcomp) · [Paritate simetrică](docs/catalog/11-reguli-globale.md#symparity) · [Centru de greutate](docs/catalog/11-reguli-globale.md#cgrav) · [Rânduri lexicografice](docs/catalog/11-reguli-globale.md#lexrows) · [Extreme alăturate](docs/catalog/11-reguli-globale.md#extremes) · [Casete echilibrate](docs/catalog/11-reguli-globale.md#boxbalance) · [Cincele singuratic](docs/catalog/11-reguli-globale.md#lonely5) · [Fără celule singure](docs/catalog/11-reguli-globale.md#nolonely) · [Fără progresii](docs/catalog/11-reguli-globale.md#noprog) · [Casete semi-magice](docs/catalog/11-reguli-globale.md#semimagic) |
| **Indicii în celule** | [Relief](docs/catalog/12-indicii-in-celule.md#relief) · [Mine impare](docs/catalog/12-indicii-in-celule.md#oddsweeper) · [Busolă](docs/catalog/12-indicii-in-celule.md#compass) · [Sumă în pătrat](docs/catalog/12-indicii-in-celule.md#quadsum) · [Piatră 2×2](docs/catalog/12-indicii-in-celule.md#stone) · [Domino](docs/catalog/12-indicii-in-celule.md#domino) · [Pastila pătrat perfect](docs/catalog/12-indicii-in-celule.md#pillsq) · [Cușcă primă](docs/catalog/12-indicii-in-celule.md#primecage) · [Cușcă echilibrată](docs/catalog/12-indicii-in-celule.md#balcage) · [Dublatori](docs/catalog/12-indicii-in-celule.md#doubler) · [Clone în oglindă](docs/catalog/12-indicii-in-celule.md#clonemir) |
| **Dimensiuni superioare** | [Cub latin 3D](docs/catalog/13-dimensiuni-superioare.md#cube3) · [Cub cu casete 2×2](docs/catalog/13-dimensiuni-superioare.md#cubebox) · [Hipercub 4D](docs/catalog/13-dimensiuni-superioare.md#hyper4) · [Hipercub 5D](docs/catalog/13-dimensiuni-superioare.md#hyper5) · [Greco-Latin (pătrate ortogonale)](docs/catalog/13-dimensiuni-superioare.md#greco) |

Fiecare categorie are propria pagină în [`docs/catalog/`](docs/catalog/README.md) (capturi și galerii complete).

## Funcții

- **Variante din versiunea 1.0 (38):** clasic (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), wordoku, pătrat latin, Sudoku X, Hyper (Windoku), Jigsaw, grupuri disjuncte, puncte centrale, anti-cal, anti-rege, fără consecutive, Miracol, par–impar, Kropki, consecutiv, XV, comparații, Battenburg, cvadruple, Killer, Little Killer, Sandwich, X-Sums, Frame, zgârie-nori, termometre, săgeți, Renban, șoapte germane, palindrom, între linii, linii entropice, linii modulare, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Adăugate în versiunea 1.1 (24):** Girandola (corectată în 1.4), Asterisk, diagonală simplă, șoapte olandeze, Nabner, termometru lent, linie de paritate (alternantă), linie de aceeași paritate, doar pare marcate, doar impare marcate, Little Killer unic, Fortăreață, Minim/Maxim, Lockout, săgeată dublă, Zipper, Rossini, Outside, Clone, linii cu sume pe regiuni, săgeată medie, săgeată produs, săgeată „pilulă”, Strimko.
- **Adăugate în versiunea 1.2 (nivelul 3, 3):** Indexare (prima cifră din rând arată coloana lui 1), Raport ×3 (cercuri pentru perechi 3:1), Ceață (indiciile apar pe măsură ce rezolvi; puzzle-ul e construit astfel încât propagarea simplă să poată continua doar cu ce se vede).
- **Adăugate în versiunea 1.3 (70):**
  - *Topologii și salturi fairy (9):* Anti-alfil, Anti-cămilă, Anti-zebră, Tor anti-rege, Tor anti-cal, Cilindru, Möbius, Klein și plan proiectiv anti-rege.
  - *Reguli globale (12):* Pandiagonal, Sudoku cu zero, Simetrie complementară, Paritate simetrică, Centru de greutate, Rânduri lexicografice, Extreme alăturate, Casete echilibrate, Cincele singuratic, Fără celule singure, Fără progresii, Casete semi-magice.
  - *Indicii pe margine (13):* Radar, Sandwich numeric, Sandwich de paritate, Sandwich dublu, Subsol, Produs la margine, Diferență la margine, Urcări, Inversiuni, Cicluri, Puncte fixe, Sumă alternantă, Sume pe diagonale.
  - *Indicii în celule și cuști (11):* Relief, Mine impare, Busolă, Sumă în pătrat, Piatră 2×2, Domino, Pastila pătrat perfect, Cușcă primă, Cușcă echilibrată, Dublatori, Clone în oglindă.
  - *Puncte (5):* Diferență, Kropki / XV / Consecutiv doar marcate, Fără indicii (doar puncte Kropki).
  - *Linii (11):* Legato, Consonanță, Pas fix, Linie complementară, Zigzag, Fibonacci, Trepte, Progresie aritmetică, Ecou, Linie divizibilă, Linie primă.
  - *Grile compuse (4):* Sohei, Kazaguruma, Cruce, Tripledoku (V).
  - *Dimensiuni superioare (5):* Cub latin 3D, Cub cu casete 2×2, Hipercub 4D, Hipercub 5D, Greco-Latin.
- **Moduri de joc (7):** Orb, Memorie, Maraton, Duel, Hardcore, Puzzle-ul zilei, Sonor. Se aleg la „Joc nou”; codul de partajare primește sufixul `@mod` (nu și la Puzzle-ul zilei și la Maraton).
- **Combinație proprie:** orice set compatibil de reguli de grilă + indicii (de ex. Killer + diagonale, termometre + săgeți).
- **Joc:** selecție multiplă, notițe, anulează/refă, indiciu (logică pe candidați), auto-notițe, verificare, conflicte evidențiate, cronometru, salvare automată, tipărire.
- **Cod de partajare:** `variantă-mărime-dificultate-sămânță` regenerează același puzzle în aceeași versiune.
- **Rezolvator clasic 9×9** cu reguli suplimentare opționale; spune dacă soluția e unică, multiplă sau inexistentă.
- **Atlas:** căutare, categorii, „Varianta de astăzi”, „Surprinde-mă”, lexicon, export CSV, citare BibTeX.
- Temă luminoasă/întunecată/automată, text mărit, interfață în 8 limbi (RO, EN, FR, IT, ES, PT, DE, HU).
- **Puzzle-ul zilei** folosește data UTC; seria de zile consecutive se păstrează local (`sff_daily`).

## Cum generează

Motorul alege o grilă rezolvată care respectă regulile, deduce din ea indiciile (cuști, termometre, puncte...), apoi scoate cifrele date una câte una, doar cât timp solverul demonstrează că soluția rămâne unică. Generarea rulează într-un Web Worker creat din același fișier (fără rețea); dacă Workerul nu e disponibil, rulează pe firul principal.

## Limite

- „Pas cu pas” completează o cifră și evidențiază de ce (unica cifră rămasă în celulă; unica celulă posibilă dintr-un rând/coloană/regiune; deducție din regulile variantei; sau, când nu există deducție directă, cifra din soluție, marcată ca atare). „▶ Auto” rulează pașii singur, la 1,6 s. Dezactivat la Hardcore și Memory; fiecare pas se poate anula.
- Dificultatea ușor/mediu/greu e doar numărul de indicii păstrate. Puzzle-ul arată și o măsură a efortului solverului (0 = se rezolvă doar prin propagare; altfel numărul de ramificări), care nu e o evaluare a tehnicilor umane. Dacă generarea durează peste 12 s, dificultatea coboară automat (nu și la „Puzzle-ul zilei” sau la coduri partajate).
- Testat în Chromium (inclusiv deschis ca file://). Firefox și Safari/iOS nu au putut fi testate în mediul de dezvoltare; dacă Worker-ul din Blob e blocat, aplicația cade pe generarea în firul principal (UI blocat în timpul generării).
- Accesibilitate: tastatura (săgeți, cifre, N, Ctrl+Z) și anunț vocal al celulei selectate; tabla e SVG și nu e un instrument complet pentru cititoare de ecran.
- Starea salvată are număr de versiune; un format necunoscut este pus deoparte (`sff_game_bad`), nu șters.
- „Greu” scoate cât de multe cifre poate; la variantele cu multe indicii în grilă pot rămâne foarte puține cifre date.
- Grilele compuse au doar regulile clasice; combinațiile foarte încărcate pot dura mai mult sau pot eșua (aplicația spune asta).
- 16×16 și 25×25 folosesc simbolurile 1–9 și litere (A–G, respectiv A–P).
- **Geometrii alese de mine** (sursele diferă): Sohei, Kazaguruma, Cruce, Tripledoku (V); definiția Domino; lipirea muchiilor la Möbius, Klein și planul proiectiv; „Extreme alăturate” cu vecini inclusiv diagonali (cu vecini doar ortogonali nu există grile 9×9); Casete semi-magice pe rânduri și coloane (casetele complet magice, cu diagonale, sunt imposibile).
- **Hipercuburi și cuburi:** sunt afișate pe straturi (mozaic de felii) și, pentru cele 3D, într-o vedere 3D rotativă; la cuburile 3D există și o „Vedere 3D” rotativă (tragi cu mausul, glisorul ascunde straturile din față); hipercuburile 4D/5D rămân doar pe straturi. Fiind foarte rigide, la „Greu” rămân doar câteva cifre date (la 5D doar câteva din 243 celule). Greco-Latin: mărimile 3, 4, 5, 7 (6 e imposibil; 8 și 9 omise pentru viteză).
- **Anti-wazir** nu există: a interzice aceeași cifră pe celule vecine ortogonal e deja o regulă a oricărui Sudoku. „Anti-alfil” înseamnă saltul 2×2, nu un nebun glisant. Elementele „Strings complementary/equal” din lista de lucru nu sunt variante separate: ideea e acoperită de Linie complementară și Ecou.
- **Variante logic apropiate sau identice (spuse în fișe):** Sudoku cu zero (doar alte simboluri față de Clasic), Rânduri lexicografice (revine la „prima coloană este 1…N”), Subsol (Zgârie-nori cu cifrele inversate).
- **Duel:** adversarul e un cronometru care completează celule din soluția cunoscută, nu un solver cu logică.
- Regulile urmează convențiile uzuale; fișele spun ce variantă de convenție s-a ales. Pentru câteva variante noi sursele diferă și am fixat o convenție explicită: Girandola (de la 1.4: colțuri, centru și r2c5, r5c2, r5c8, r8c5, după Regexp::Sudoku; dispunerea veche e acum „Nouă dispersate”), „linie de paritate” (alternantă, cu varianta „aceeași paritate” separat), Rossini (săgeata arată spre cea mai mare dintre primele trei cifre), Outside (cifrele de pe margine apar printre primele trei celule), Zipper (toate perechile simetrice însumează centrul), Linii cu sume pe regiuni (suma pe fiecare casetă traversată e aceeași), Fortăreață (doar vecinii nemarcați contează).

## Confidențialitate și rețea

- **Stocare locală:** `localStorage`, chei `sff_lang`, `sff_theme`, `sff_size`, `sff_game`, `sff_daily` (limbă, temă, mărime text, jocul curent, seria Puzzle-ului zilei) și `sff_game_bad` (starea salvată într-un format necunoscut, păstrată).
- **Rețea:** în cod nu există `fetch`, `XMLHttpRequest`, CDN sau resurse externe. Singurul URL din fișier este spațiul de nume SVG (`http://www.w3.org/2000/svg`), care nu generează nicio cerere.

## Structura depozitului

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

Publicare pe GitHub Pages: Settings → Pages → Branch `main`, folder `/ (root)`; `index.html` e la rădăcină și folosește doar căi relative, deci funcționează și sub `https://<utilizator>.github.io/<depozit>/`. Vezi [`CHANGELOG.md`](CHANGELOG.md) și [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Rulare locală / offline

Descarcă `index.html` și deschide-l în browser; nu necesită internet.

## Teste

Rulează și automat pe GitHub (Actions, `.github/workflows/ci.yml`): build reproductibil, `node test.js` și verificarea că `index.html` nu are resurse externe.

`engine.js` este motorul (aceeași sursă e inclusă în `index.html`). Suita `test.js` rulează cu Node:

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

Pentru fiecare variantă și mărime, la nivel ușor și greu, verifică: soluția respectă regulile, puzzle-ul are soluție unică (numărare cu același solver ca generatorul, cu buget mare; enumerările 4×4 și validatorul semanticii sunt scrise separat), soluția supraviețuiește propagării din subseturi aleatoare de indicii (*soundness*). În plus, la 4×4 numărul de soluții fără indicii e comparat cu o enumerare exhaustivă (de ex. 288 pentru clasic), iar câteva combinații proprii sunt verificate. Din versiunea 1.1, fiecare puzzle este verificat și de un validator al semanticii regulilor scris separat de motor, direct din textul fișelor (verifică, de pildă, Zipper, Lockout, săgețile medie/produs/pilulă, Clone, lanțurile Strimko). Din versiunea 1.3, validatorul independent acoperă și topologiile, salturile fairy, regulile globale, indicii pe margine, în celule, cuști, linii și puncte (formule rescrise separat de motor), iar pentru cuburi, hipercuburi și Greco-Latin numărul de soluții fără indicii e comparat cu o enumerare DFS separată (de ex. 21888 la cubul 4×4×4 cu casete 2×2, 72 și 6912 la Greco-Latin 3 și 4). Ultima rulare: 3144 de verificări, toate trecute; validatorul independent acoperă acum și tipurile din 1.0–1.2, iar un test de mutanți (16.506 redenumiri de cifre) arată acord total între motor și validator; 660 de puzzle-uri 4×4 au fost confirmate unice de o enumerare separată; stres suplimentar pe 12 seed-uri per variantă (5652 de puzzle-uri, zero erori); în plus, o probă de stres cu 5 puzzle-uri pe fiecare variantă, mărime minimă și maximă, fără nicio eroare (cea mai lentă generare, la „Greu” pe unele variante cu reguli globale, a durat circa 21 s). Limită: verificarea încrucișată prin enumerare exhaustivă există doar pentru variantele care au mărimea 4×4 (și pentru cuburi/Greco-Latin mici, cum se arată mai sus).

## Ce nu e implementat din nivelul 3

Nu sunt incluse: Chaos Construction, Deconstruction, hibrizii cu alte puzzle-uri (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), grilele suprapuse Flower/Butterfly (Sohei și Kazaguruma există din 1.3, cu geometrie aleasă de mine), celulele modificatoare, Schrödinger, „liar”, Vudoku, Capsule, Deficit. Unele schimbă modul de joc sau cer solvere cu alt fel de logică; pentru altele sursele găsite nu fixează regulile sau geometria, iar inventarea lor ar însemna să afișez ca variantă cunoscută ceva ce nu este.

## Licență

**MIT** — vezi [`LICENSE`](LICENSE). Se aplică întregului depozit: codul (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), textele (README, fișele) și capturile din `docs/screens/`. Poți folosi, copia, modifica, publica și vinde, cu condiția să păstrezi nota de drepturi de autor și textul licenței. Programul e oferit „ca atare”, fără garanții.

Note:
- Aplicația nu include biblioteci sau resurse externe, deci nu există licențe de terți de respectat.
- Numele și regulile variantelor Sudoku (Killer, Kropki, Sandwich etc.) desemnează tipuri de puzzle cunoscute public; textele fișelor sunt scrise pentru această aplicație. Numele rămân ale autorilor și comunităților care le-au creat.

## Autor

Alexio — Alexandru-Ionuț Chiuță, contact: <alexio@trom.tf>.

## Rezumat

Un atlas de 136 de intrări Sudoku (≈130 cu reguli distincte; Subsol, Zero și Lexrows sunt aproape dubluri ale altor variante și o spun în fișa lor) (plus 7 moduri de joc: Orb, Memory, Marathon, Duel, Hardcore, Puzzle-ul zilei, Sound) cu generator și solver local, într-un singur fișier HTML. Puzzle-urile se generează în browser cu soluție unică demonstrată (indiciile se elimină doar cât timp un solver cu propagare confirmă unicitatea). Include un mixer de reguli personalizate, notițe/undo/indicii, coduri de partajare, un solver clasic 9×9, export CSV și citare BibTeX. Fără cereri de rețea; starea se stochează în `localStorage` (`sff_*`). Dificultatea (ușor/mediu/greu) este doar numărul de indicii păstrate; fiecare puzzle afișează și o valoare măsurată: câte ramificări are nevoie un solver cu propagare (0 = se rezolvă doar prin propagare). Aceasta este munca solverului, nu o evaluare a tehnicilor umane. Rulează `node test.js` pentru suita de teste a motorului. Licență: MIT (vezi `LICENSE`), acoperind codul, textele și capturile de ecran.

README-ul (în română) conține un ghid de utilizare cu capturi de ecran ale interfeței și un catalog cu două capturi de ecran reale, regulile și un cod reproductibil pentru fiecare dintre cele 136 de variante (`screens/`).

## Note v1.4

- **Girandola** a fost corectată după descrierea din Regexp::Sudoku (colțuri, centru, r2c5, r5c2, r5c8, r8c5). Dispunerea veche (colțuri, mijloace de laturi, centru) rămâne ca „Nouă dispersate” (`sparse9`). Codurile `girandola-…` generate înainte de 1.4 produc acum alt puzzle.
- Reparat în 1.4 după capturi: eticheta tabului „Joacă” (cheie de text duplicată), listele rămase pe valori vechi după „Deschide” cu un cod și mesajul „Celule greșite” rămas după anulare.
- Verificări 1.4: validator scris orb din textul fișelor (135/135 variantele existente atunci au trecut; „Nouă dispersate” a fost adăugată după și are validator în `test.js`), confruntare cu surse publicate pe 56 de variante (fișele Regionsum, Rossini și Little Unique Killer au primit precizări), o rulare unică de 1818 puzzle-uri pe toate variantele și dimensiunile ≤12 fără erori (scriptul nu face parte din depozit), „Pas cu pas” testat pe toate cele 136 de variante.
- Încă neconfirmate de surse: dispunerea Sohei, Kazaguruma, Cross, Tripledoku V; tratamentul cifrelor repetate la Quad și Doublers; conectivitatea diagonală la Strimko.
