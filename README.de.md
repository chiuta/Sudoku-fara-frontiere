# Sudoku fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · **Deutsch** · [Magyar](README.hu.md)

**Version:** 1.6.0 · **Zuletzt aktualisiert:** 2026-10-19

Oberflächensprachen: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Ein Atlas von Sudoku-Varianten, mit Generator und Löser, die lokal laufen — in einer einzigen HTML-Datei.

**Lizenz:** [MIT](LICENSE) · **Online-App:** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Bebilderter Leitfaden (eine einzige Seite):** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.html>

![Einige Varianten, nach „Schritt für Schritt“](docs/screenshot.png)

## Was es ist

Ein interaktiver Atlas mit 136 Einträgen (≈130 mit eigenen Regeln: Untergeschoss, Sudoku mit Null und Lexikografische Zeilen sind logisch fast identisch mit anderen Varianten und werden in den Datenblättern als solche ausgewiesen) (klassische, mit besonderen Regionen, Topologien und Märchenschach-Sprüngen, globale Regeln, Hinweise an den Linien, am Rand, in den Zellen oder im Gitter, zusammengesetzte Gitter, Würfel und Hyperwürfel, Graeco-Lateinisch und nahe Verwandte), dazu 7 Spielmodi. Jede Variante hat ein Datenblatt mit den Regeln und lässt sich lokal spielen: Die Rätsel werden im Browser erzeugt, mit einer von einem Propagations-Löser **bewiesenen eindeutigen Lösung**. Du kannst auch Regeln in einer „Eigenen Kombination“ verbinden.

## Anleitung

### Schnellstart

1. Öffne `index.html` in einem Browser (sie funktioniert offline, ohne Installation).
2. Im **Atlas** wählst du eine Variante (Suche, Kategorien, „Variante des Tages“, „Überrasch mich“); jede Variante hat ein Datenblatt mit den Regeln.
3. Unter **Spielen** wählst du Variante, Größe, Schwierigkeit und Modus und drückst dann **Neues Spiel**. Das Rätsel wird im Browser erzeugt, mit eindeutiger Lösung.

<p align="center"><img src="docs/screens/ui_atlas.de.webp" width="760" alt="Der Variantenatlas"><br><sub>Atlas: Suche, Kategoriefilter und Karten mit den verfügbaren Größen.</sub></p>

### Der Spielbildschirm

<p align="center"><img src="docs/screens/ui_play.de.webp" width="760" alt="Der Spielbildschirm"><br><sub>Das Brett, die Statusleiste (Variante · Größe · Hinweise · Schwierigkeit · vom Löser benötigte Verzweigungen · Zeit), das Panel „Neues Spiel“ mit Teilen-Code, das Zahlenfeld und die Aktionen.</sub></p>

- **Ziffern:** Du wählst eine Zelle (oder mehrere, mit Umschalt/Ziehen) und drückst die Ziffer, auf der Tastatur oder auf dem Bildschirm-Zahlenfeld. Vollständig verwendete Ziffern erscheinen abgeblendet.
- **Tastatur:** Pfeile = Auswahl verschieben, Ziffern/Buchstaben = eintragen, `Rücktaste`/`Entf`/`0` = löschen, `N` = Notizen, `Strg+Z` / `Strg+Y` = rückgängig / wiederholen.
- **Notizen:** Die Schaltfläche „Notizen“ (oder `N`) wechselt zu kleinen Kandidaten in der Zelle; „Auto-Notizen“ berechnet sie aus den sichtbaren Regeln.
- **Prüfungen:** „Konflikte anzeigen“, „Gleiche Ziffer hervorheben“, „Verbundene Zellen hervorheben“ und „Notizen automatisch löschen“ lassen sich ankreuzen; „Prüfen“ markiert die falschen Ziffern.
- **Hinweis** füllt eine Zelle aus (per Logik über Kandidaten; gibt es keinen direkten Schritt, stammt die Ziffer aus der Lösung). **Lösung anzeigen** füllt alles aus.
- **Code:** Der Code neben „Neues Spiel“ erzeugt dasselbe Rätsel in derselben Version der App neu; du fügst ihn bei „Öffnen“ ein.

<p align="center"><img src="docs/screens/ui_notes.de.webp" width="760" alt="Notizen"><br><sub>Notizen: kleine Kandidaten in einer Zelle.</sub></p>

### Schritt für Schritt und ▶ Auto

**Schritt für Schritt** setzt eine Ziffer und zeigt, warum: Die Zellen, die sie begründen, sind eingefärbt (gelb), die neue Zelle ist grün, und unter dem Brett erscheint die Erklärung. **▶ Auto** führt die Schritte selbstständig aus, im Abstand von 1,6 s. Mögliche Gründe: die einzige in der Zelle verbliebene Ziffer; die einzige Zelle einer Zeile/Spalte/Region, in der die Ziffer stehen kann; eine Ableitung aus den Regeln der Variante; oder, wenn es keine direkte Ableitung gibt, die Ziffer aus der Lösung (ausdrücklich gesagt). Hast du eine falsche Ziffer, korrigiert sie der erste Schritt. Jeder Schritt lässt sich rückgängig machen; bei Hardcore und Gedächtnis ist er deaktiviert.

<p align="center"><img src="docs/screens/ui_step.de.webp" width="760" alt="Schritt für Schritt"><br><sub>Nach drei Schritten: die letzte Ziffer (grün) und die Zellen, die sie begründen (gelb), mit der Erklärung unter dem Brett.</sub></p>

### Spielmodi

Sie werden unter „Neues Spiel → Spielmodus“ gewählt; der Code erhält das Suffix `@Modus` (Ausnahmen: „Rätsel des Tages“ und Marathon haben kein Suffix; ein Marathon-Code öffnet ein gewöhnliches Rätsel).

- **Orb:** Sichtbar sind nur die Zellen, die höchstens 2 Schritte von der Auswahl entfernt sind.
- **Gedächtnis:** Die Hinweise sind einige Sekunden sichtbar und werden dann verborgen; die Spähen-Schaltfläche kostet 30 s. Ohne Hinweise, Prüfung, Auto-Notizen, „Schritt für Schritt“ und Konflikthervorhebung.
- **Marathon:** 5 Rätsel hintereinander (leicht, leicht, mittel, mittel, schwer) mit einer Gesamtzeit.
- **Duell:** Ein Zeitgeber-Gegner füllt alle paar Sekunden eine Zelle aus, aus der bekannten Lösung (ohne Logik); wenn er zuerst fertig ist, verlierst du.
- **Hardcore:** 3 Leben, jede falsche Ziffer kostet eines; ohne Hinweis, Prüfung oder Auto-Notizen.
- **Rätsel des Tages:** dasselbe Rätsel für alle an einem Tag (UTC-Datum), mit einer lokal gespeicherten Serie aufeinanderfolgender Tage.
- **Klang:** Jede Ziffer hat einen Ton; eine vollständige Zeile, Spalte oder Box spielt ein Arpeggio.

<p align="center"><img src="docs/screens/ui_mode_orb.de.webp" width="760" alt="Orb-Modus"><br><sub>Orb-Modus: Nur die Umgebung der Auswahl ist sichtbar.</sub></p>

### Würfel und Hyperwürfel

Die Schichten werden als Mosaik aus Scheiben angezeigt. Bei 3D-Würfeln erscheint zusätzlich eine „3D-Ansicht“: Du ziehst mit der Maus, um den Würfel zu drehen, und der Schieberegler blendet die vorderen Schichten aus. Die 4D-/5D-Hyperwürfel bleiben nur in Schichten.

<p align="center"><img src="docs/screens/ui_3d.de.webp" width="760" alt="3D-Ansicht"><br><sub>Lateinischer 3D-Würfel 4×4×4 in der drehbaren 3D-Ansicht.</sub></p>

### Klassischer 9×9-Löser

Du fügst ein Rätsel ein (81 Zeichen: 1–9, Lücken als 0 oder `.`), kreuzt gegebenenfalls zusätzliche Regeln an (Diagonalen, Hyper-Fenster, Anti-Springer usw.) und drückst **Lösen**: Die App sagt, ob die Lösung eindeutig, mehrfach oder nicht vorhanden ist. „Dieses Rätsel spielen“ bringt es auf das Spielbrett.

<p align="center"><img src="docs/screens/ui_solver.de.webp" width="760" alt="Löser"><br><sub>Der Löser mit dem Beispielrätsel: „Eindeutige Lösung“.</sub></p>

### Telefon und dunkles Thema

Die Oberfläche passt sich schmalen Bildschirmen an; helles/dunkles/automatisches Thema (die Schaltfläche 🌓), vergrößerter Text (die Schaltfläche A), Sprache RO/EN (die Schaltfläche RO).

<p align="center"><img src="docs/screens/ui_mobile.de.webp" width="260" alt="Telefon, helles Thema"> &nbsp; <img src="docs/screens/ui_dark.de.webp" width="260" alt="Telefon, dunkles Thema"></p>

### Eigene Kombination

Im Atlas lässt „Eigene Kombination“ (oder die Variante „Eigene Kombination“ unter „Neues Spiel“) beliebige kompatible Mengen von Gitterregeln und Hinweisen ankreuzen (z. B. Killer + Diagonalen, Thermometer + Pfeile).

### Galerie der Oberfläche (alle Bildschirmtypen)

**Atlas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.de.webp" width="330" alt="Filtern nach einer Kategorie"><br><sub>Filtern nach einer Kategorie</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.de.webp" width="330" alt="Suche nach Name"><br><sub>Suche nach Name</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.de.webp" width="330" alt="Lexikon"><br><sub>Lexikon</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlas auf Englisch"><br><sub>Atlas auf Englisch</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.de.webp" width="330" alt="Atlas, dunkles Thema"><br><sub>Atlas, dunkles Thema</sub></td></tr></table>

**Spielmodi**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.de.webp" width="330" alt="Gedächtnis: Die Hinweise sind sichtbar"><br><sub>Gedächtnis: Die Hinweise sind sichtbar</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.de.webp" width="330" alt="Gedächtnis: Die Hinweise sind verborgen"><br><sub>Gedächtnis: Die Hinweise sind verborgen</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.de.webp" width="330" alt="Marathon"><br><sub>Marathon</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.de.webp" width="330" alt="Duell (der Gegner füllt Zellen aus)"><br><sub>Duell (der Gegner füllt Zellen aus)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.de.webp" width="330" alt="Hardcore: Ein Fehler kostet ein Leben"><br><sub>Hardcore: Ein Fehler kostet ein Leben</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.de.webp" width="330" alt="Rätsel des Tages"><br><sub>Rätsel des Tages</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.de.webp" width="330" alt="Klang"><br><sub>Klang</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.de.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Spiel und Werkzeuge**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.de.webp" width="330" alt="▶ Auto läuft"><br><sub>▶ Auto läuft</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.de.webp" width="330" alt="Rätsel gelöst"><br><sub>Rätsel gelöst</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.de.webp" width="330" alt="Eigene Kombination (Liste der Regeln)"><br><sub>Eigene Kombination (Liste der Regeln)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.de.webp" width="330" alt="Gedrehte 3D-Ansicht"><br><sub>Gedrehte 3D-Ansicht</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Druckansicht"><br><sub>Druckansicht</sub></td></tr></table>

**Löser und Über**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.de.webp" width="330" alt="Löser: leeres Gitter (mehrere Lösungen)"><br><sub>Löser: leeres Gitter (mehrere Lösungen)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.de.webp" width="330" alt="Löser: keine Lösung"><br><sub>Löser: keine Lösung</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.de.webp" width="330" alt="Die Seite „Über“"><br><sub>Die Seite „Über“</sub></td></tr></table>

## Katalog der Varianten (136)

Jede Variante hat unten: die Regeln aus dem Datenblatt, einen Screenshot mit einem echten, von der App erzeugten Rätsel (die Standardgröße der Variante (9×9, wo vorhanden, sonst z. B. 5×5 oder 4×4); Stufe „mittel“), einen zweiten Screenshot nach 4 Schritten „Schritt für Schritt“, die echte Erklärung des letzten Schrittes und einen Code, mit dem du genau dasselbe Rätsel neu erzeugst. Unter jeder Variante enthält eine „Vollständige Galerie“ (ausklappbar) die übrigen Screenshot-Arten: die Karte im Atlas und das Datenblatt, alle Größen, leicht/mittel/schwer, Auto-Notizen, Prüfung mit einer falschen Ziffer, die vollständige Lösung, das dunkle Thema, das Telefon, die Oberfläche auf Englisch und das Regelpanel. Die Screenshots liegen in `docs/screens/`. Die Screenshots werden seit Version 1.4.0 automatisch erstellt, im hellen Thema.

| Kategorie | Varianten |
|---|---|
| **Größe und Symbole** | [Klassisch](docs/catalog/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/01-marime-si-simboluri.md#wordoku) · [Lateinisches Quadrat](docs/catalog/01-marime-si-simboluri.md#latin) · [Sudoku mit Null](docs/catalog/01-marime-si-simboluri.md#zero) |
| **Regionen und Gruppen** | [Sudoku X](docs/catalog/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (unregelmäßig)](docs/catalog/02-regiuni-si-grupuri.md#jigsaw) · [Disjunkte Gruppen](docs/catalog/02-regiuni-si-grupuri.md#dg) · [Mittelpunkte](docs/catalog/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/02-regiuni-si-grupuri.md#girandola) · [Verstreute Neunen](docs/catalog/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/02-regiuni-si-grupuri.md#asterisk) · [Einfache Diagonale](docs/catalog/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/02-regiuni-si-grupuri.md#pandiag) |
| **Nachbarn** | [Anti-Springer](docs/catalog/03-vecini.md#antiknight) · [Anti-König](docs/catalog/03-vecini.md#antiking) · [Ohne Konsekutive](docs/catalog/03-vecini.md#nonconsec) · [Wunder](docs/catalog/03-vecini.md#miracle) |
| **Parität, Punkte, Zeichen** | [Gerade–ungerade](docs/catalog/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/04-paritate-puncte-semne.md#kropki) · [Konsekutiv](docs/catalog/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/04-paritate-puncte-semne.md#xv) · [Vergleiche](docs/catalog/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/04-paritate-puncte-semne.md#batt) · [Quadrupel](docs/catalog/04-paritate-puncte-semne.md#quad) · [Nur markierte gerade](docs/catalog/04-paritate-puncte-semne.md#evenonly) · [Nur markierte ungerade](docs/catalog/04-paritate-puncte-semne.md#oddonly) · [Festung](docs/catalog/04-paritate-puncte-semne.md#fortress) · [Minimum / Maximum](docs/catalog/04-paritate-puncte-semne.md#minmax) · [Indexierung](docs/catalog/04-paritate-puncte-semne.md#indexing) · [Verhältnis ×3](docs/catalog/04-paritate-puncte-semne.md#ratio) · [Differenz](docs/catalog/04-paritate-puncte-semne.md#diff) · [Kropki nur markierte](docs/catalog/04-paritate-puncte-semne.md#kropkipos) · [XV nur markierte](docs/catalog/04-paritate-puncte-semne.md#xvpos) · [Konsekutiv nur markierte](docs/catalog/04-paritate-puncte-semne.md#consecpos) · [Ohne Hinweise](docs/catalog/04-paritate-puncte-semne.md#clueless) |
| **Summen** | [Killer](docs/catalog/05-sume.md#killer) · [Little Killer](docs/catalog/05-sume.md#littlekiller) · [Eindeutiger Little Killer](docs/catalog/05-sume.md#luk) |
| **Randhinweise** | [Sandwich](docs/catalog/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/06-indicii-pe-margine.md#xsum) · [Frame (die ersten drei)](docs/catalog/06-indicii-pe-margine.md#frame) · [Wolkenkratzer](docs/catalog/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/06-indicii-pe-margine.md#radar) · [Zahlen-Sandwich](docs/catalog/06-indicii-pe-margine.md#sandnum) · [Paritäts-Sandwich](docs/catalog/06-indicii-pe-margine.md#sandpar) · [Doppel-Sandwich](docs/catalog/06-indicii-pe-margine.md#sand2) · [Untergeschoss](docs/catalog/06-indicii-pe-margine.md#subsol) · [Randprodukt](docs/catalog/06-indicii-pe-margine.md#prodmargin) · [Randdifferenz](docs/catalog/06-indicii-pe-margine.md#diffmargin) · [Anstiege](docs/catalog/06-indicii-pe-margine.md#ascents) · [Inversionen](docs/catalog/06-indicii-pe-margine.md#inversions) · [Zyklen](docs/catalog/06-indicii-pe-margine.md#cycles) · [Fixpunkte](docs/catalog/06-indicii-pe-margine.md#fixedpts) · [Alternierende Summe](docs/catalog/06-indicii-pe-margine.md#altsum) · [Diagonalsummen](docs/catalog/06-indicii-pe-margine.md#dxsum) |
| **Linien** | [Thermometer](docs/catalog/07-linii.md#thermo) · [Pfeile](docs/catalog/07-linii.md#arrow) · [Renban](docs/catalog/07-linii.md#renban) · [Deutsche Flüsterlinien](docs/catalog/07-linii.md#whisper) · [Palindrom](docs/catalog/07-linii.md#palindrome) · [Zwischen Linien](docs/catalog/07-linii.md#between) · [Entropische Linien](docs/catalog/07-linii.md#entropic) · [Modulare Linien](docs/catalog/07-linii.md#modular) · [Niederländische Flüsterlinien](docs/catalog/07-linii.md#dutch) · [Nabner](docs/catalog/07-linii.md#nabner) · [Langsames Thermometer](docs/catalog/07-linii.md#slowthermo) · [Paritätslinie](docs/catalog/07-linii.md#parityline) · [Linie gleicher Parität](docs/catalog/07-linii.md#sameparity) · [Lockout](docs/catalog/07-linii.md#lockout) · [Doppelpfeil](docs/catalog/07-linii.md#doublearrow) · [Zipper](docs/catalog/07-linii.md#zipper) · [Linien mit Regionssummen](docs/catalog/07-linii.md#regionsum) · [Mittelwert-Pfeil](docs/catalog/07-linii.md#avgarrow) · [Produkt-Pfeil](docs/catalog/07-linii.md#prodarrow) · [„Pillen“-Pfeil](docs/catalog/07-linii.md#pillarrow) · [Nebel](docs/catalog/07-linii.md#fog) · [Legato](docs/catalog/07-linii.md#legato) · [Konsonanz](docs/catalog/07-linii.md#consonant) · [Fester Schritt](docs/catalog/07-linii.md#fixstep) · [Komplementäre Linie](docs/catalog/07-linii.md#compline) · [Zigzag](docs/catalog/07-linii.md#zigzag) · [Fibonacci](docs/catalog/07-linii.md#fibonacci) · [Stufen](docs/catalog/07-linii.md#steps) · [Arithmetische Folge](docs/catalog/07-linii.md#progression) · [Echo](docs/catalog/07-linii.md#echo) · [Teilbare Linie](docs/catalog/07-linii.md#divisible) · [Primlinie](docs/catalog/07-linii.md#primeline) |
| **Zusammengesetzte Gitter** | [Samurai](docs/catalog/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/08-grile-compuse.md#gattai3) · [Sohei (Vierer-Ring)](docs/catalog/08-grile-compuse.md#sohei) · [Kazaguruma (Windmühle)](docs/catalog/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/08-grile-compuse.md#tripledoku) · [Kreuz](docs/catalog/08-grile-compuse.md#cross) |
| **Nahe Verwandte** | [Futoshiki](docs/catalog/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/09-rude-apropiate.md#strimko) |
| **Topologien und Märchenschach-Züge** | [Anti-Läufer](docs/catalog/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-Kamel](docs/catalog/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-Zebra](docs/catalog/10-topologii-si-mutari-fairy.md#antizebra) · [Torus Anti-König](docs/catalog/10-topologii-si-mutari-fairy.md#torusking) · [Torus Anti-Springer](docs/catalog/10-topologii-si-mutari-fairy.md#torusknight) · [Zylinder Anti-König](docs/catalog/10-topologii-si-mutari-fairy.md#cylking) · [Möbius Anti-König](docs/catalog/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein Anti-König](docs/catalog/10-topologii-si-mutari-fairy.md#kleinking) · [Projektive Ebene Anti-König](docs/catalog/10-topologii-si-mutari-fairy.md#projking) |
| **Globale Regeln** | [Komplementäre Symmetrie](docs/catalog/11-reguli-globale.md#symcomp) · [Symmetrische Parität](docs/catalog/11-reguli-globale.md#symparity) · [Schwerpunkt](docs/catalog/11-reguli-globale.md#cgrav) · [Lexikografische Zeilen](docs/catalog/11-reguli-globale.md#lexrows) · [Benachbarte Extreme](docs/catalog/11-reguli-globale.md#extremes) · [Ausgewogene Boxen](docs/catalog/11-reguli-globale.md#boxbalance) · [Die einsame Fünf](docs/catalog/11-reguli-globale.md#lonely5) · [Ohne einsame Zellen](docs/catalog/11-reguli-globale.md#nolonely) · [Ohne Folgen](docs/catalog/11-reguli-globale.md#noprog) · [Halbmagische Boxen](docs/catalog/11-reguli-globale.md#semimagic) |
| **Hinweise in den Zellen** | [Relief](docs/catalog/12-indicii-in-celule.md#relief) · [Ungerade Minen](docs/catalog/12-indicii-in-celule.md#oddsweeper) · [Kompass](docs/catalog/12-indicii-in-celule.md#compass) · [Quadratsumme](docs/catalog/12-indicii-in-celule.md#quadsum) · [Stein 2×2](docs/catalog/12-indicii-in-celule.md#stone) · [Domino](docs/catalog/12-indicii-in-celule.md#domino) · [Pille Quadratzahl](docs/catalog/12-indicii-in-celule.md#pillsq) · [Primkäfig](docs/catalog/12-indicii-in-celule.md#primecage) · [Ausgewogener Käfig](docs/catalog/12-indicii-in-celule.md#balcage) · [Verdoppler](docs/catalog/12-indicii-in-celule.md#doubler) · [Spiegelklone](docs/catalog/12-indicii-in-celule.md#clonemir) |
| **Höhere Dimensionen** | [Lateinischer Würfel 3D](docs/catalog/13-dimensiuni-superioare.md#cube3) · [Würfel mit 2×2-Boxen](docs/catalog/13-dimensiuni-superioare.md#cubebox) · [Hyperwürfel 4D](docs/catalog/13-dimensiuni-superioare.md#hyper4) · [Hyperwürfel 5D](docs/catalog/13-dimensiuni-superioare.md#hyper5) · [Graeco-Lateinisch (orthogonale Quadrate)](docs/catalog/13-dimensiuni-superioare.md#greco) |

Jede Kategorie hat eine eigene Seite in [`docs/catalog/`](docs/catalog/README.md) (Screenshots und vollständige Galerien).

## Funktionen

- **Varianten seit Version 1.0 (38):** klassisch (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), Wordoku, Lateinisches Quadrat, Sudoku X, Hyper (Windoku), Jigsaw, disjunkte Gruppen, Mittelpunkte, Anti-Springer, Anti-König, ohne Konsekutive, Wunder, gerade–ungerade, Kropki, konsekutiv, XV, Vergleiche, Battenburg, Quadrupel, Killer, Little Killer, Sandwich, X-Sums, Frame, Wolkenkratzer, Thermometer, Pfeile, Renban, deutsche Flüsterlinien, Palindrom, zwischen Linien, entropische Linien, modulare Linien, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Hinzugefügt in Version 1.1 (24):** Girandola (in 1.4 korrigiert), Asterisk, einfache Diagonale, niederländische Flüsterlinien, Nabner, langsames Thermometer, Paritätslinie (alternierend), Linie gleicher Parität, nur markierte gerade, nur markierte ungerade, eindeutiger Little Killer, Festung, Minimum/Maximum, Lockout, Doppelpfeil, Zipper, Rossini, Outside, Clone, Linien mit Regionssummen, Mittelwert-Pfeil, Produkt-Pfeil, „Pillen“-Pfeil, Strimko.
- **Hinzugefügt in Version 1.2 (Stufe 3, 3):** Indexierung (die erste Ziffer der Zeile zeigt die Spalte der 1), Verhältnis ×3 (Kreise für 3:1-Paare), Nebel (die Hinweise erscheinen beim Lösen; das Rätsel ist so gebaut, dass einfache Propagation nur mit dem Sichtbaren weitermachen kann).
- **Hinzugefügt in Version 1.3 (70):**
  - *Topologien und Märchenschach-Sprünge (9):* Anti-Läufer, Anti-Kamel, Anti-Zebra, Torus Anti-König, Torus Anti-Springer, Zylinder, Möbius, Klein und projektive Ebene Anti-König.
  - *Globale Regeln (12):* Pandiagonal, Sudoku mit Null, Komplementäre Symmetrie, Symmetrische Parität, Schwerpunkt, Lexikografische Zeilen, Benachbarte Extreme, Ausgewogene Boxen, Die einsame Fünf, Ohne einsame Zellen, Ohne Folgen, Halbmagische Boxen.
  - *Randhinweise (13):* Radar, Zahlen-Sandwich, Paritäts-Sandwich, Doppel-Sandwich, Untergeschoss, Randprodukt, Randdifferenz, Anstiege, Inversionen, Zyklen, Fixpunkte, Alternierende Summe, Diagonalsummen.
  - *Hinweise in Zellen und Käfige (11):* Relief, Ungerade Minen, Kompass, Quadratsumme, Stein 2×2, Domino, Pille Quadratzahl, Primkäfig, Ausgewogener Käfig, Verdoppler, Spiegelklone.
  - *Punkte (5):* Differenz, Kropki / XV / Konsekutiv nur markierte, Ohne Hinweise (nur Kropki-Punkte).
  - *Linien (11):* Legato, Konsonanz, Fester Schritt, Komplementäre Linie, Zickzack, Fibonacci, Stufen, Arithmetische Folge, Echo, Teilbare Linie, Primlinie.
  - *Zusammengesetzte Gitter (4):* Sohei, Kazaguruma, Kreuz, Tripledoku (V).
  - *Höhere Dimensionen (5):* Lateinischer Würfel 3D, Würfel mit 2×2-Boxen, Hyperwürfel 4D, Hyperwürfel 5D, Graeco-Lateinisch.
- **Spielmodi (7):** Orb, Gedächtnis, Marathon, Duell, Hardcore, Rätsel des Tages, Klang. Sie werden unter „Neues Spiel“ gewählt; der Teilen-Code erhält das Suffix `@Modus` (nicht beim Rätsel des Tages und beim Marathon).
- **Eigene Kombination:** jede kompatible Menge von Gitterregeln + Hinweisen (z. B. Killer + Diagonalen, Thermometer + Pfeile).
- **Spiel:** Mehrfachauswahl, Notizen, Rückgängig/Wiederholen, Hinweis (Logik über Kandidaten), Auto-Notizen, Prüfung, hervorgehobene Konflikte, Stoppuhr, automatisches Speichern, Drucken.
- **Teilen-Code:** `Variante-Größe-Schwierigkeit-Seed` erzeugt dasselbe Rätsel in derselben Version neu.
- **Klassischer 9×9-Löser** mit optionalen Zusatzregeln; er sagt, ob die Lösung eindeutig, mehrfach oder nicht vorhanden ist.
- **Atlas:** Suche, Kategorien, „Variante des Tages“, „Überrasch mich“, Lexikon, CSV-Export, BibTeX-Zitat.
- Helles/dunkles/automatisches Thema, vergrößerter Text, Oberfläche in 8 Sprachen (RO, EN, FR, IT, ES, PT, DE, HU).
- Das **Rätsel des Tages** verwendet das UTC-Datum; die Serie aufeinanderfolgender Tage wird lokal gespeichert (`sff_daily`).

## Wie es erzeugt

Die Engine wählt ein gelöstes Gitter, das die Regeln einhält, leitet daraus die Hinweise ab (Käfige, Thermometer, Punkte ...) und entfernt dann die gegebenen Ziffern nacheinander, nur solange der Löser beweist, dass die Lösung eindeutig bleibt. Die Erzeugung läuft in einem Web Worker, der aus derselben Datei erstellt wird (ohne Netzwerk); ist der Worker nicht verfügbar, läuft sie im Hauptthread.

## Grenzen

- „Schritt für Schritt“ trägt eine Ziffer ein und hebt hervor, warum (die einzige in der Zelle verbliebene Ziffer; die einzige mögliche Zelle einer Zeile/Spalte/Region; eine Ableitung aus den Regeln der Variante; oder, wenn es keine direkte Ableitung gibt, die Ziffer aus der Lösung, als solche gekennzeichnet). „▶ Auto“ führt die Schritte selbstständig aus, im Abstand von 1,6 s. Bei Hardcore und Gedächtnis deaktiviert; jeder Schritt lässt sich rückgängig machen.
- Die Schwierigkeit leicht/mittel/schwer ist nur die Anzahl der beibehaltenen Hinweise. Das Rätsel zeigt auch ein Maß für den Aufwand des Lösers (0 = allein durch Propagation lösbar; sonst die Anzahl der Verzweigungen), das keine Bewertung menschlicher Techniken ist. Dauert die Erzeugung länger als 12 s, sinkt die Schwierigkeit automatisch (nicht jedoch beim „Rätsel des Tages“ oder bei geteilten Codes).
- In Chromium getestet (auch als file:// geöffnet). Firefox und Safari/iOS konnten in der Entwicklungsumgebung nicht getestet werden; ist der Worker aus einem Blob blockiert, fällt die App auf die Erzeugung im Hauptthread zurück (Oberfläche während der Erzeugung blockiert).
- Barrierefreiheit: die Tastatur (Pfeile, Ziffern, N, Strg+Z) und die Sprachansage der gewählten Zelle; das Brett ist SVG und kein vollständiges Werkzeug für Screenreader.
- Der gespeicherte Zustand hat eine Versionsnummer; ein unbekanntes Format wird beiseitegelegt (`sff_game_bad`), nicht gelöscht.
- „Schwer“ entfernt so viele Ziffern wie möglich; bei Varianten mit vielen Hinweisen im Gitter können sehr wenige gegebene Ziffern übrig bleiben.
- Zusammengesetzte Gitter haben nur die klassischen Regeln; sehr überladene Kombinationen können länger dauern oder scheitern (die App sagt das).
- 16×16 und 25×25 verwenden die Symbole 1–9 und Buchstaben (A–G bzw. A–P).
- **Von mir gewählte Geometrien** (die Quellen weichen ab): Sohei, Kazaguruma, Kreuz, Tripledoku (V); die Definition von Domino; das Verkleben der Ränder bei Möbius, Klein und der projektiven Ebene; „Benachbarte Extreme“ mit Nachbarn einschließlich der Diagonalen (mit nur orthogonalen Nachbarn gibt es keine 9×9-Gitter); Halbmagische Boxen auf Zeilen und Spalten (vollständig magische Boxen, mit Diagonalen, sind unmöglich).
- **Hyperwürfel und Würfel:** Sie werden in Schichten (Mosaik aus Scheiben) und, die 3D-Würfel, in einer drehbaren 3D-Ansicht dargestellt; bei 3D-Würfeln gibt es außerdem eine drehbare „3D-Ansicht“ (du ziehst mit der Maus, der Schieberegler blendet die vorderen Schichten aus); die 4D-/5D-Hyperwürfel bleiben nur in Schichten. Da sie sehr starr sind, bleiben bei „Schwer“ nur wenige gegebene Ziffern übrig (bei 5D nur wenige der 243 Zellen). Graeco-Lateinisch: Größen 3, 4, 5, 7 (6 ist unmöglich; 8 und 9 aus Geschwindigkeitsgründen ausgelassen).
- **Anti-Wesir** gibt es nicht: Dieselbe Ziffer auf orthogonal benachbarten Zellen zu verbieten, ist bereits eine Regel jedes Sudokus. „Anti-Läufer“ bedeutet den 2×2-Sprung, nicht einen gleitenden Läufer. Die Einträge „Strings complementary/equal“ der Arbeitsliste sind keine eigenen Varianten: Die Idee wird durch Komplementäre Linie und Echo abgedeckt.
- **Logisch nahe oder identische Varianten (in den Datenblättern angegeben):** Sudoku mit Null (nur andere Symbole gegenüber Klassisch), Lexikografische Zeilen (lässt sich auf „die erste Spalte ist 1…N“ zurückführen), Untergeschoss (Wolkenkratzer mit umgekehrten Ziffern).
- **Duell:** Der Gegner ist ein Zeitgeber, der Zellen aus der bekannten Lösung ausfüllt, kein Löser mit Logik.
- Die Regeln folgen den üblichen Konventionen; die Datenblätter sagen, welche Variante einer Konvention gewählt wurde. Bei einigen neuen Varianten weichen die Quellen ab, und ich habe eine ausdrückliche Konvention festgelegt: Girandola (seit 1.4: Ecken, Mitte und r2c5, r5c2, r5c8, r8c5, nach Regexp::Sudoku; die alte Anordnung heißt jetzt „Verstreute Neunen“), „Paritätslinie“ (alternierend, mit der Variante „gleiche Parität“ getrennt), Rossini (der Pfeil zeigt zur größten der ersten drei Ziffern), Outside (die Ziffern am Rand stehen unter den ersten drei Zellen), Zipper (alle symmetrischen Paare summieren sich zur Mitte), Linien mit Regionssummen (die Summe in jeder durchquerten Box ist gleich), Festung (nur nicht markierte Nachbarn zählen).

## Datenschutz und Netzwerk

- **Lokaler Speicher:** `localStorage`, Schlüssel `sff_lang`, `sff_theme`, `sff_size`, `sff_game`, `sff_daily` (Sprache, Thema, Textgröße, aktuelles Spiel, Serie des Rätsels des Tages) und `sff_game_bad` (in einem unbekannten Format gespeicherter Zustand, aufbewahrt).
- **Netzwerk:** Im Code gibt es weder `fetch` noch `XMLHttpRequest`, noch CDN oder externe Ressourcen. Die einzige URL in der Datei ist der SVG-Namensraum (`http://www.w3.org/2000/svg`), der keine Anfrage auslöst.

## Struktur des Repositorys

```
index.html          aplicația (generat; se deschide direct în browser)
engine.js           motorul: solver, generator, variantele
src/                interfața (template.html, style.css, data.js, app.js)
build.py            asamblează index.html din src/ + engine.js
test.js             suita de teste (node test.js)
docs/               capturi (docs/screens), catalogul pe categorii (docs/catalog), GHID.html (se vede pe Pages, nu în GitHub: fișierul are ~6 MB)
CHANGELOG.md        istoric versiuni
CONTRIBUTING.md     cum contribui
LICENSE             MIT
```

Veröffentlichung auf GitHub Pages: Settings → Pages → Branch `main`, Ordner `/ (root)`; `index.html` liegt im Stammverzeichnis und verwendet nur relative Pfade, funktioniert also auch unter `https://<Benutzer>.github.io/<Repository>/`. Siehe [`CHANGELOG.md`](CHANGELOG.md) und [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Lokal / offline ausführen

Lade `index.html` herunter und öffne sie in einem Browser; sie benötigt kein Internet.

## Tests

Sie laufen auch automatisch auf GitHub (Actions, `.github/workflows/ci.yml`): reproduzierbarer Build, `node test.js` und die Prüfung, dass `index.html` keine externen Ressourcen hat.

`engine.js` ist die Engine (dieselbe Quelle ist in `index.html` enthalten). Die Suite `test.js` läuft mit Node:

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

Für jede Variante und Größe prüft sie auf den Stufen leicht und schwer: Die Lösung hält die Regeln ein, das Rätsel hat eine eindeutige Lösung (Zählung mit demselben Löser wie der Generator, mit großem Budget; die 4×4-Aufzählungen und der Semantik-Validator sind separat geschrieben), die Lösung übersteht die Propagation aus zufälligen Teilmengen von Hinweisen (*Soundness*). Zusätzlich wird bei 4×4 die Anzahl der Lösungen ohne Hinweise mit einer vollständigen Aufzählung verglichen (z. B. 288 für klassisch), und einige eigene Kombinationen werden geprüft. Seit Version 1.1 wird jedes Rätsel außerdem von einem getrennt von der Engine geschriebenen Validator für die Regelsemantik geprüft, direkt nach dem Text der Datenblätter (er prüft zum Beispiel Zipper, Lockout, die Mittelwert-/Produkt-/Pillen-Pfeile, Clone, die Strimko-Ketten). Seit Version 1.3 deckt der unabhängige Validator auch Topologien, Märchenschach-Sprünge, globale Regeln, Randhinweise, Hinweise in Zellen, Käfige, Linien und Punkte ab (getrennt von der Engine neu geschriebene Formeln), und bei Würfeln, Hyperwürfeln und Graeco-Lateinisch wird die Anzahl der Lösungen ohne Hinweise mit einer separaten DFS-Aufzählung verglichen (z. B. 21888 beim 4×4×4-Würfel mit 2×2-Boxen, 72 und 6912 bei Graeco-Lateinisch 3 und 4). Letzter Lauf: 3144 Prüfungen, alle bestanden; der unabhängige Validator deckt jetzt auch die Typen aus 1.0–1.2 ab, und ein Mutantentest (16.506 Ziffernumbenennungen) zeigt vollständige Übereinstimmung zwischen Engine und Validator; 660 4×4-Rätsel wurden durch eine separate Aufzählung als eindeutig bestätigt; zusätzlicher Stresstest mit 12 Seeds pro Variante (5652 Rätsel, null Fehler); außerdem ein Stresslauf mit 5 Rätseln pro Variante, kleinste und größte Größe, ohne jeden Fehler (die langsamste Erzeugung, bei „Schwer“ in einigen Varianten mit globalen Regeln, dauerte etwa 21 s). Grenze: Die Gegenprüfung durch vollständige Aufzählung gibt es nur für Varianten mit der Größe 4×4 (und für kleine Würfel/Graeco-Lateinisch, wie oben gezeigt).

## Was aus Stufe 3 nicht umgesetzt ist

Nicht enthalten sind: Chaos Construction, Deconstruction, Hybride mit anderen Rätseln (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), die überlappenden Gitter Flower/Butterfly (Sohei und Kazaguruma gibt es seit 1.3, mit einer von mir gewählten Geometrie), Modifikatorzellen, Schrödinger, „liar“, Vudoku, Capsule, Deficit. Manche ändern den Spielmodus oder erfordern Löser mit anderer Logik; bei anderen legen die gefundenen Quellen weder Regeln noch Geometrie fest, und sie zu erfinden hieße, als bekannte Variante auszugeben, was keine ist.

## Lizenz

**MIT** — siehe [`LICENSE`](LICENSE). Sie gilt für das gesamte Repository: den Code (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), die Texte (README, die Datenblätter) und die Screenshots in `docs/screens/`. Du darfst nutzen, kopieren, ändern, veröffentlichen und verkaufen, sofern du den Urheberrechtsvermerk und den Lizenztext beibehältst. Das Programm wird „wie besehen“ ohne Gewährleistung bereitgestellt.

Hinweise:
- Die App enthält keine externen Bibliotheken oder Ressourcen, daher sind keine Drittlizenzen zu beachten.
- Die Namen und Regeln der Sudoku-Varianten (Killer, Kropki, Sandwich usw.) bezeichnen öffentlich bekannte Rätseltypen; die Texte der Datenblätter sind für diese App geschrieben. Die Namen bleiben die der Autoren und Gemeinschaften, die sie geschaffen haben.

## Autor

Alexio — Alexandru-Ionuț Chiuță, Kontakt: <alexio@trom.tf>.

## Zusammenfassung

Ein Atlas mit 136 Sudoku-Einträgen (≈130 mit eigenen Regeln; Untergeschoss, Null und Lexikografische Zeilen sind nahezu Duplikate anderer Varianten und sagen das in ihren Datenblättern) (dazu 7 Spielmodi: Orb, Gedächtnis, Marathon, Duell, Hardcore, Rätsel des Tages, Klang) mit lokalem Generator und Löser, in einer HTML-Datei. Die Rätsel werden im Browser mit bewiesen eindeutiger Lösung erzeugt (gegebene Ziffern werden nur entfernt, solange ein Propagations-Löser die Eindeutigkeit bestätigt). Enthält einen Mixer für eigene Regeln, Notizen/Rückgängig/Hinweise, Teilen-Codes, einen klassischen 9×9-Löser, CSV-Export und BibTeX-Zitat. Keine Netzwerkanfragen; der Zustand wird in `localStorage` (`sff_*`) gespeichert. Die Schwierigkeit (leicht/mittel/schwer) ist nur die Anzahl der beibehaltenen gegebenen Ziffern; jedes Rätsel zeigt außerdem einen gemessenen Wert: wie viele Verzweigungen ein Propagations-Löser braucht (0 = allein durch Propagation lösbar). Das ist Löseraufwand, keine Bewertung menschlicher Techniken. Führe `node test.js` für die Testsuite der Engine aus. Lizenz: MIT (siehe `LICENSE`), für Code, Texte und Screenshots.

Diese README enthält einen Leitfaden mit Screenshots der Oberfläche und einen Katalog mit zwei echten Screenshots, den Regeln und einem reproduzierbaren Code für jede der 136 Varianten (`screens/`).

## Hinweise v1.4

- **Girandola** wurde nach der Beschreibung in Regexp::Sudoku korrigiert (Ecken, Mitte, r2c5, r5c2, r5c8, r8c5). Die alte Anordnung (Ecken, Seitenmitten, Mitte) bleibt als „Verstreute Neunen“ (`sparse9`) erhalten. Vor 1.4 erzeugte `girandola-…`-Codes ergeben jetzt ein anderes Rätsel.
- In 1.4 anhand von Screenshots behoben: das Label des Tabs „Spielen“ (doppelter Textschlüssel), nach „Öffnen“ mit einem Code auf alten Werten verbliebene Listen und die nach dem Rückgängigmachen verbliebene Meldung „Falsche Zellen“.
- Prüfungen 1.4: blind aus dem Text der Datenblätter geschriebener Validator (135/135 der damals vorhandenen Varianten bestanden; „Verstreute Neunen“ wurde danach hinzugefügt und hat einen Validator in `test.js`), Abgleich mit veröffentlichten Quellen bei 56 Varianten (die Datenblätter Regionsum, Rossini und Little Unique Killer erhielten Präzisierungen), ein einmaliger Lauf mit 1818 Rätseln über alle Varianten und Größen ≤12 ohne Fehler (das Skript gehört nicht zum Repository), „Schritt für Schritt“ an allen 136 Varianten getestet.
- Von den Quellen noch nicht bestätigt: die Anordnung von Sohei, Kazaguruma, Kreuz, Tripledoku V; die Behandlung wiederholter Ziffern bei Quad und Verdoppler; die diagonale Konnektivität bei Strimko.
