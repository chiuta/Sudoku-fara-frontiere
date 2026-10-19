# Katalog: Hinweise am Rand (19)

[English](../en/06-indicii-pe-margine.md) · [Română](../06-indicii-pe-margine.md) · [Français](../fr/06-indicii-pe-margine.md) · [Italiano](../it/06-indicii-pe-margine.md) · [Español](../es/06-indicii-pe-margine.md) · [Português](../pt/06-indicii-pe-margine.md) · **Deutsch** · [Magyar](../hu/06-indicii-pe-margine.md)

[← README](../../../README.de.md) · [Alle Kategorien](README.md)

[Größe und Symbole](01-marime-si-simboluri.md) · [Gebiete und Gruppen](02-regiuni-si-grupuri.md) · [Nachbarn](03-vecini.md) · [Parität, Punkte, Zeichen](04-paritate-puncte-semne.md) · [Summen](05-sume.md) · **Hinweise am Rand** · [Linien](07-linii.md) · [Zusammengesetzte Gitter](08-grile-compuse.md) · [Nahe Verwandte](09-rude-apropiate.md) · [Topologien und Märchenschach-Züge](10-topologii-si-mutari-fairy.md) · [Globale Regeln](11-reguli-globale.md) · [Hinweise in Feldern](12-indicii-in-celule.md) · [Höhere Dimensionen](13-dimensiuni-superioare.md)

---


_Die Hinweise stehen außerhalb des Gitters, am Ende der Zeile oder Spalte, auf die sie sich beziehen._

<a id="sandwich"></a>
#### 41. Sandwich · Sandwich (`sandwich`)

**Die Summe zwischen der 1 und der größten Ziffer.**

Die Zahl am Rand ist die Summe der Ziffern, die in der betreffenden Zeile oder Spalte zwischen der Ziffer 1 und der Ziffer N (9 bei 9×9) stehen.

<table><tr><td align="center"><img src="../../screens/sandwich_a.webp" width="300" alt="Sandwich: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/sandwich_b.webp" width="300" alt="Sandwich: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 3 (Zeile 1, Sp. 2): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `sandwich-9-medium-4184518699` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_card.webp" width="200" alt="Sandwich: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_fiche.webp" width="260" alt="Sandwich: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_s4.webp" width="200" alt="Sandwich: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s6.webp" width="200" alt="Sandwich: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s9.webp" width="200" alt="Sandwich: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_easy.webp" width="200" alt="Sandwich: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_a.webp" width="200" alt="Sandwich: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_hard.webp" width="200" alt="Sandwich: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_notes.webp" width="200" alt="Sandwich: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_check.webp" width="200" alt="Sandwich: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_solved.webp" width="200" alt="Sandwich: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_dark.webp" width="200" alt="Sandwich: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_mobile.webp" width="150" alt="Sandwich: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_en.webp" width="300" alt="Sandwich: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_rules.webp" width="300" alt="Sandwich: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="xsum"></a>
#### 42. X-Summen · X-Sums (`xsum`)

**Die erste Ziffer = wie viele Zellen addiert werden.**

Ist die erste Ziffer einer Zeile oder Spalte k, dann ist die Summe der ersten k Ziffern (von diesem Ende aus) die Zahl am Rand.

<table><tr><td align="center"><img src="../../screens/xsum_a.webp" width="300" alt="X-Summen: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/xsum_b.webp" width="300" alt="X-Summen: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 3 (Zeile 3, Sp. 1): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `xsum-9-medium-920107551` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 5 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_card.webp" width="200" alt="X-Summen: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/xsum_fiche.webp" width="260" alt="X-Summen: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_s6.webp" width="200" alt="X-Summen: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/xsum_s9.webp" width="200" alt="X-Summen: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_easy.webp" width="200" alt="X-Summen: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/xsum_a.webp" width="200" alt="X-Summen: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/xsum_hard.webp" width="200" alt="X-Summen: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_notes.webp" width="200" alt="X-Summen: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_check.webp" width="200" alt="X-Summen: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_solved.webp" width="200" alt="X-Summen: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_dark.webp" width="200" alt="X-Summen: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/xsum_mobile.webp" width="150" alt="X-Summen: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_en.webp" width="300" alt="X-Summen: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_rules.webp" width="300" alt="X-Summen: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="frame"></a>
#### 43. Frame (die ersten drei) · Frame (first three) (`frame`)

**Die Summe der ersten drei Ziffern.**

Die Zahl am Rand ist die Summe der ersten drei Ziffern der Zeile oder Spalte, von diesem Ende aus gezählt.

<table><tr><td align="center"><img src="../../screens/frame_a.webp" width="300" alt="Frame (die ersten drei): Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/frame_b.webp" width="300" alt="Frame (die ersten drei): nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 7 (Zeile 1, Sp. 4): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `frame-9-medium-3867362192` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_card.webp" width="200" alt="Frame (die ersten drei): Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/frame_fiche.webp" width="260" alt="Frame (die ersten drei): Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_s6.webp" width="200" alt="Frame (die ersten drei): 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/frame_s9.webp" width="200" alt="Frame (die ersten drei): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_easy.webp" width="200" alt="Frame (die ersten drei): Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/frame_a.webp" width="200" alt="Frame (die ersten drei): Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/frame_hard.webp" width="200" alt="Frame (die ersten drei): Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_notes.webp" width="200" alt="Frame (die ersten drei): Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/frame_check.webp" width="200" alt="Frame (die ersten drei): „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/frame_solved.webp" width="200" alt="Frame (die ersten drei): Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_dark.webp" width="200" alt="Frame (die ersten drei): Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/frame_mobile.webp" width="150" alt="Frame (die ersten drei): Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/frame_en.webp" width="300" alt="Frame (die ersten drei): Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_rules.webp" width="300" alt="Frame (die ersten drei): Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="skyscraper"></a>
#### 44. Wolkenkratzer · Skyscrapers (`skyscraper`)

**Wie viele Gebäude man vom Rand aus sieht.**

Die Ziffern sind Gebäudehöhen. Die Zahl am Rand gibt an, wie viele Gebäude man von diesem Ende aus sieht (ein Gebäude verdeckt die niedrigeren dahinter).

<table><tr><td align="center"><img src="../../screens/skyscraper_a.webp" width="300" alt="Wolkenkratzer: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/skyscraper_b.webp" width="300" alt="Wolkenkratzer: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 9 (Zeile 3, Sp. 2): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `skyscraper-9-medium-1967302454` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 143 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_card.webp" width="200" alt="Wolkenkratzer: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_fiche.webp" width="260" alt="Wolkenkratzer: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_s4.webp" width="200" alt="Wolkenkratzer: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s6.webp" width="200" alt="Wolkenkratzer: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s9.webp" width="200" alt="Wolkenkratzer: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_easy.webp" width="200" alt="Wolkenkratzer: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_a.webp" width="200" alt="Wolkenkratzer: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_hard.webp" width="200" alt="Wolkenkratzer: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_notes.webp" width="200" alt="Wolkenkratzer: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_check.webp" width="200" alt="Wolkenkratzer: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_solved.webp" width="200" alt="Wolkenkratzer: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_dark.webp" width="200" alt="Wolkenkratzer: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_mobile.webp" width="150" alt="Wolkenkratzer: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_en.webp" width="300" alt="Wolkenkratzer: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_rules.webp" width="300" alt="Wolkenkratzer: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="rossini"></a>
#### 45. Rossini · Rossini (`rossini`)

**Pfeil am Rand: Die ersten drei Ziffern steigen in einer Richtung.**

Ein Pfeil außerhalb des Gitters zeigt an, dass die ersten drei Ziffern von diesem Ende aus streng monoton sind: Sie steigen in der Richtung, in die der Pfeil zeigt (zum Gitterinneren hin) oder, wenn der Pfeil zum Rand zeigt, steigen sie zum Rand hin, das heißt, sie fallen zum Inneren hin. Konvention: Die Pfeilspitze zeigt auf die größte Ziffer. Ein fehlender Pfeil sagt nichts aus (das ist nicht die klassische Rossini-Variante, bei der Enden ohne Pfeil monotone Folgen ausschließen).

<table><tr><td align="center"><img src="../../screens/rossini_a.webp" width="300" alt="Rossini: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 19 Vorgaben)</sub></td><td align="center"><img src="../../screens/rossini_b.webp" width="300" alt="Rossini: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 8 (Zeile 1, Sp. 7): es ist die einzige Zelle in der markierten Spalte, in der 8 stehen kann.
- **Code für dasselbe Rätsel:** `rossini-9-medium-4071954052` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 2 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_card.webp" width="200" alt="Rossini: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/rossini_fiche.webp" width="260" alt="Rossini: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_s4.webp" width="200" alt="Rossini: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s6.webp" width="200" alt="Rossini: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s9.webp" width="200" alt="Rossini: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_easy.webp" width="200" alt="Rossini: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/rossini_a.webp" width="200" alt="Rossini: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/rossini_hard.webp" width="200" alt="Rossini: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_notes.webp" width="200" alt="Rossini: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_check.webp" width="200" alt="Rossini: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_solved.webp" width="200" alt="Rossini: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_dark.webp" width="200" alt="Rossini: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/rossini_mobile.webp" width="150" alt="Rossini: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_en.webp" width="300" alt="Rossini: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_rules.webp" width="300" alt="Rossini: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="outside"></a>
#### 46. Outside · Outside (`outside`)

**Die Ziffern am Rand kommen unter den ersten drei vor.**

Die außerhalb des Gitters geschriebenen Ziffern müssen unter den ersten drei Zellen der betreffenden Zeile oder Spalte vorkommen, von diesem Ende aus gezählt, in beliebiger Reihenfolge. Sind es drei Ziffern, so sind sie genau die drei Zellen.

<table><tr><td align="center"><img src="../../screens/outside_a.webp" width="300" alt="Outside: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 23 Vorgaben)</sub></td><td align="center"><img src="../../screens/outside_b.webp" width="300" alt="Outside: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 5 (Zeile 2, Sp. 5): alle anderen Ziffern kommen bereits unter den markierten Zellen vor (Zeile, Spalte, Gebiet oder Nachbarschaftsregel).
- **Code für dasselbe Rätsel:** `outside-9-medium-3531544633` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_card.webp" width="200" alt="Outside: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/outside_fiche.webp" width="260" alt="Outside: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_s4.webp" width="200" alt="Outside: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/outside_s6.webp" width="200" alt="Outside: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/outside_s9.webp" width="200" alt="Outside: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_easy.webp" width="200" alt="Outside: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/outside_a.webp" width="200" alt="Outside: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/outside_hard.webp" width="200" alt="Outside: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_notes.webp" width="200" alt="Outside: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/outside_check.webp" width="200" alt="Outside: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/outside_solved.webp" width="200" alt="Outside: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_dark.webp" width="200" alt="Outside: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/outside_mobile.webp" width="150" alt="Outside: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/outside_en.webp" width="300" alt="Outside: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_rules.webp" width="300" alt="Outside: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="radar"></a>
#### 47. Radar · Radar (`radar`)

**Der Hinweis sagt, wo die größte Ziffer steht.**

Zusätzlich zu den klassischen Regeln zeigt eine Zahl außerhalb des Gitters, an welcher Position (von diesem Ende aus gezählt) die größte Ziffer (9 bei 9×9) in der betreffenden Zeile oder Spalte steht.

<table><tr><td align="center"><img src="../../screens/radar_a.webp" width="300" alt="Radar: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 21 Vorgaben)</sub></td><td align="center"><img src="../../screens/radar_b.webp" width="300" alt="Radar: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 4 (Zeile 3, Sp. 6): es ist die einzige Zelle in der markierten Zeile, in der 4 stehen kann.
- **Code für dasselbe Rätsel:** `radar-9-medium-2588350498` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_card.webp" width="200" alt="Radar: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/radar_fiche.webp" width="260" alt="Radar: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_s4.webp" width="200" alt="Radar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/radar_s6.webp" width="200" alt="Radar: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/radar_s9.webp" width="200" alt="Radar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_easy.webp" width="200" alt="Radar: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/radar_a.webp" width="200" alt="Radar: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/radar_hard.webp" width="200" alt="Radar: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_notes.webp" width="200" alt="Radar: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/radar_check.webp" width="200" alt="Radar: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/radar_solved.webp" width="200" alt="Radar: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_dark.webp" width="200" alt="Radar: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/radar_mobile.webp" width="150" alt="Radar: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/radar_en.webp" width="300" alt="Radar: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_rules.webp" width="300" alt="Radar: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="sandnum"></a>
#### 48. Zählsandwich · Counting sandwich (`sandnum`)

**Wie viele Zellen zwischen 1 und N liegen.**

Zusätzlich zu den klassischen Regeln sagt eine Zahl außerhalb des Gitters, wie viele Zellen in der betreffenden Zeile oder Spalte zwischen der Ziffer 1 und der Ziffer N (9 bei 9×9) liegen.

<table><tr><td align="center"><img src="../../screens/sandnum_a.webp" width="300" alt="Zählsandwich: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 19 Vorgaben)</sub></td><td align="center"><img src="../../screens/sandnum_b.webp" width="300" alt="Zählsandwich: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 8 (Zeile 6, Sp. 5): es ist die einzige Zelle in der markierten Spalte, in der 8 stehen kann.
- **Code für dasselbe Rätsel:** `sandnum-9-medium-2830514440` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 1802 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_card.webp" width="200" alt="Zählsandwich: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_fiche.webp" width="260" alt="Zählsandwich: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_s4.webp" width="200" alt="Zählsandwich: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s6.webp" width="200" alt="Zählsandwich: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s9.webp" width="200" alt="Zählsandwich: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_easy.webp" width="200" alt="Zählsandwich: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_a.webp" width="200" alt="Zählsandwich: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_hard.webp" width="200" alt="Zählsandwich: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_notes.webp" width="200" alt="Zählsandwich: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_check.webp" width="200" alt="Zählsandwich: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_solved.webp" width="200" alt="Zählsandwich: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_dark.webp" width="200" alt="Zählsandwich: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_mobile.webp" width="150" alt="Zählsandwich: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_en.webp" width="300" alt="Zählsandwich: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_rules.webp" width="300" alt="Zählsandwich: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="sandpar"></a>
#### 49. Paritätssandwich · Parity sandwich (`sandpar`)

**Wie viele ungerade Ziffern zwischen 1 und N liegen.**

Zusätzlich zu den klassischen Regeln sagt eine Zahl außerhalb des Gitters, wie viele ungerade Ziffern in der betreffenden Zeile oder Spalte zwischen 1 und N liegen.

<table><tr><td align="center"><img src="../../screens/sandpar_a.webp" width="300" alt="Paritätssandwich: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 19 Vorgaben)</sub></td><td align="center"><img src="../../screens/sandpar_b.webp" width="300" alt="Paritätssandwich: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 2 (Zeile 5, Sp. 5): keine direkte Folgerung; die Ziffer stammt aus der eindeutigen Lösung (es wäre eine Annahme nötig).
- **Code für dasselbe Rätsel:** `sandpar-9-medium-3081747068` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 38 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_card.webp" width="200" alt="Paritätssandwich: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_fiche.webp" width="260" alt="Paritätssandwich: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_s6.webp" width="200" alt="Paritätssandwich: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_s9.webp" width="200" alt="Paritätssandwich: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_easy.webp" width="200" alt="Paritätssandwich: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_a.webp" width="200" alt="Paritätssandwich: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_hard.webp" width="200" alt="Paritätssandwich: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_notes.webp" width="200" alt="Paritätssandwich: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_check.webp" width="200" alt="Paritätssandwich: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_solved.webp" width="200" alt="Paritätssandwich: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_dark.webp" width="200" alt="Paritätssandwich: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_mobile.webp" width="150" alt="Paritätssandwich: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_en.webp" width="300" alt="Paritätssandwich: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_rules.webp" width="300" alt="Paritätssandwich: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="sand2"></a>
#### 50. Doppelsandwich · Double sandwich (`sand2`)

**Zwei Summen: zwischen 1 und 9, zwischen 2 und 8.**

Zusätzlich zu den klassischen Regeln bedeutet der Hinweis „a,b“ außerhalb des Gitters: a = Summe der Ziffern zwischen 1 und 9, b = Summe der Ziffern zwischen 2 und 8 in der betreffenden Zeile oder Spalte. Nur 9×9.

<table><tr><td align="center"><img src="../../screens/sand2_a.webp" width="300" alt="Doppelsandwich: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/sand2_b.webp" width="300" alt="Doppelsandwich: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 8 (Zeile 6, Sp. 9): keine direkte Folgerung; die Ziffer stammt aus der eindeutigen Lösung (es wäre eine Annahme nötig).
- **Code für dasselbe Rätsel:** `sand2-9-medium-1633059211` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 3778 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_card.webp" width="200" alt="Doppelsandwich: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sand2_fiche.webp" width="260" alt="Doppelsandwich: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_s9.webp" width="200" alt="Doppelsandwich: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_easy.webp" width="200" alt="Doppelsandwich: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/sand2_a.webp" width="200" alt="Doppelsandwich: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/sand2_hard.webp" width="200" alt="Doppelsandwich: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_notes.webp" width="200" alt="Doppelsandwich: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_check.webp" width="200" alt="Doppelsandwich: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_solved.webp" width="200" alt="Doppelsandwich: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_dark.webp" width="200" alt="Doppelsandwich: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/sand2_mobile.webp" width="150" alt="Doppelsandwich: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_en.webp" width="300" alt="Doppelsandwich: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_rules.webp" width="300" alt="Doppelsandwich: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="subsol"></a>
#### 51. Keller · Basement (`subsol`)

**Wie Wolkenkratzer, aber mit umgekehrten Ziffern.**

Zusätzlich zu den klassischen Regeln zeigt eine Zahl außerhalb des Gitters, wie oft man, von diesem Ende aus gesehen, auf eine Ziffer trifft, die kleiner ist als alle vor ihr (die erste Ziffer zählt mit). Es ist das Gegenstück zu den Wolkenkratzern: Hier zählen wir die aufeinanderfolgenden Minima. Es sind die Wolkenkratzer mit umgekehrten Ziffern (d wird zu N+1−d), also logisch isomorph zu ihnen.

<table><tr><td align="center"><img src="../../screens/subsol_a.webp" width="300" alt="Keller: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/subsol_b.webp" width="300" alt="Keller: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 8 (Zeile 1, Sp. 4): keine direkte Folgerung; die Ziffer stammt aus der eindeutigen Lösung (es wäre eine Annahme nötig).
- **Code für dasselbe Rätsel:** `subsol-9-medium-2589656574` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 487 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_card.webp" width="200" alt="Keller: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/subsol_fiche.webp" width="260" alt="Keller: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_s4.webp" width="200" alt="Keller: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s6.webp" width="200" alt="Keller: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s9.webp" width="200" alt="Keller: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_easy.webp" width="200" alt="Keller: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/subsol_a.webp" width="200" alt="Keller: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/subsol_hard.webp" width="200" alt="Keller: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_notes.webp" width="200" alt="Keller: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_check.webp" width="200" alt="Keller: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_solved.webp" width="200" alt="Keller: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_dark.webp" width="200" alt="Keller: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/subsol_mobile.webp" width="150" alt="Keller: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_en.webp" width="300" alt="Keller: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_rules.webp" width="300" alt="Keller: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="prodmargin"></a>
#### 52. Randprodukt · Edge product (`prodmargin`)

**Das Produkt der ersten zwei Ziffern.**

Zusätzlich zu den klassischen Regeln ist eine Zahl außerhalb des Gitters das Produkt der ersten zwei Ziffern der betreffenden Zeile oder Spalte, von diesem Ende aus gesehen.

<table><tr><td align="center"><img src="../../screens/prodmargin_a.webp" width="300" alt="Randprodukt: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/prodmargin_b.webp" width="300" alt="Randprodukt: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 1 (Zeile 3, Sp. 8): es ist die einzige Zelle in der markierten Zeile, in der 1 stehen kann.
- **Code für dasselbe Rätsel:** `prodmargin-9-medium-3463419111` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 618 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_card.webp" width="200" alt="Randprodukt: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_fiche.webp" width="260" alt="Randprodukt: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_s4.webp" width="200" alt="Randprodukt: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s6.webp" width="200" alt="Randprodukt: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s9.webp" width="200" alt="Randprodukt: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_easy.webp" width="200" alt="Randprodukt: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_a.webp" width="200" alt="Randprodukt: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_hard.webp" width="200" alt="Randprodukt: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_notes.webp" width="200" alt="Randprodukt: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_check.webp" width="200" alt="Randprodukt: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_solved.webp" width="200" alt="Randprodukt: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_dark.webp" width="200" alt="Randprodukt: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_mobile.webp" width="150" alt="Randprodukt: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_en.webp" width="300" alt="Randprodukt: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_rules.webp" width="300" alt="Randprodukt: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="diffmargin"></a>
#### 53. Randdifferenz · Edge difference (`diffmargin`)

**Die Differenz der ersten zwei Ziffern.**

Zusätzlich zu den klassischen Regeln ist eine Zahl außerhalb des Gitters die Differenz (im Absolutbetrag) der ersten zwei Ziffern der betreffenden Zeile oder Spalte, von diesem Ende aus gesehen.

<table><tr><td align="center"><img src="../../screens/diffmargin_a.webp" width="300" alt="Randdifferenz: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/diffmargin_b.webp" width="300" alt="Randdifferenz: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 2 (Zeile 6, Sp. 4): es ist die einzige Zelle in der markierten Zeile, in der 2 stehen kann.
- **Code für dasselbe Rätsel:** `diffmargin-9-medium-4161532716` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 313 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_card.webp" width="200" alt="Randdifferenz: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_fiche.webp" width="260" alt="Randdifferenz: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_s4.webp" width="200" alt="Randdifferenz: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s6.webp" width="200" alt="Randdifferenz: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s9.webp" width="200" alt="Randdifferenz: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_easy.webp" width="200" alt="Randdifferenz: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_a.webp" width="200" alt="Randdifferenz: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_hard.webp" width="200" alt="Randdifferenz: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_notes.webp" width="200" alt="Randdifferenz: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_check.webp" width="200" alt="Randdifferenz: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_solved.webp" width="200" alt="Randdifferenz: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_dark.webp" width="200" alt="Randdifferenz: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_mobile.webp" width="150" alt="Randdifferenz: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_en.webp" width="300" alt="Randdifferenz: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_rules.webp" width="300" alt="Randdifferenz: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="ascents"></a>
#### 54. Anstiege · Ascents (`ascents`)

**Wie viele benachbarte Paare ansteigen.**

Zusätzlich zu den klassischen Regeln sagt eine Zahl außerhalb des Gitters, wie oft man, von diesem Ende aus gesehen, auf eine Ziffer trifft, auf die unmittelbar eine größere folgt.

<table><tr><td align="center"><img src="../../screens/ascents_a.webp" width="300" alt="Anstiege: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/ascents_b.webp" width="300" alt="Anstiege: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 9 (Zeile 2, Sp. 3): es ist die einzige Zelle in der markierten Spalte, in der 9 stehen kann.
- **Code für dasselbe Rätsel:** `ascents-9-medium-1827630994` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 361 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_card.webp" width="200" alt="Anstiege: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/ascents_fiche.webp" width="260" alt="Anstiege: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_s4.webp" width="200" alt="Anstiege: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s6.webp" width="200" alt="Anstiege: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s9.webp" width="200" alt="Anstiege: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_easy.webp" width="200" alt="Anstiege: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/ascents_a.webp" width="200" alt="Anstiege: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/ascents_hard.webp" width="200" alt="Anstiege: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_notes.webp" width="200" alt="Anstiege: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_check.webp" width="200" alt="Anstiege: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_solved.webp" width="200" alt="Anstiege: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_dark.webp" width="200" alt="Anstiege: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/ascents_mobile.webp" width="150" alt="Anstiege: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_en.webp" width="300" alt="Anstiege: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_rules.webp" width="300" alt="Anstiege: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="inversions"></a>
#### 55. Inversionen · Inversions (`inversions`)

**Wie viele Paare in umgekehrter Reihenfolge stehen.**

Zusätzlich zu den klassischen Regeln ist eine Zahl außerhalb des Gitters die Anzahl der Inversionen der Zeile/Spalte, von diesem Ende aus gelesen: wie viele Ziffernpaare (nicht unbedingt benachbart) die vordere größer als die dahinterstehende haben.

<table><tr><td align="center"><img src="../../screens/inversions_a.webp" width="300" alt="Inversionen: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/inversions_b.webp" width="300" alt="Inversionen: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 7 (Zeile 7, Sp. 6): alle anderen Ziffern kommen bereits unter den markierten Zellen vor (Zeile, Spalte, Gebiet oder Nachbarschaftsregel).
- **Code für dasselbe Rätsel:** `inversions-9-medium-2138830078` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 62 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_card.webp" width="200" alt="Inversionen: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/inversions_fiche.webp" width="260" alt="Inversionen: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_s4.webp" width="200" alt="Inversionen: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s6.webp" width="200" alt="Inversionen: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s9.webp" width="200" alt="Inversionen: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_easy.webp" width="200" alt="Inversionen: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/inversions_a.webp" width="200" alt="Inversionen: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/inversions_hard.webp" width="200" alt="Inversionen: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_notes.webp" width="200" alt="Inversionen: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_check.webp" width="200" alt="Inversionen: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_solved.webp" width="200" alt="Inversionen: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_dark.webp" width="200" alt="Inversionen: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/inversions_mobile.webp" width="150" alt="Inversionen: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_en.webp" width="300" alt="Inversionen: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_rules.webp" width="300" alt="Inversionen: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="cycles"></a>
#### 56. Zyklen · Cycles (`cycles`)

**Wie viele Zyklen die Permutation hat.**

Zusätzlich zu den klassischen Regeln ist die von diesem Ende aus gelesene Zeile/Spalte eine Permutation (Position i hat die Ziffer a_i). Der Hinweis außerhalb des Gitters ist die Anzahl der Zyklen der Permutation (Position i verweist auf Position a_i). Größen 9×9 und 6×6.

<table><tr><td align="center"><img src="../../screens/cycles_a.webp" width="300" alt="Zyklen: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/cycles_b.webp" width="300" alt="Zyklen: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 4 (Zeile 2, Sp. 6): es ist die einzige Zelle im markierten Gebiet, in der 4 stehen kann.
- **Code für dasselbe Rätsel:** `cycles-9-medium-708965529` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 562 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_card.webp" width="200" alt="Zyklen: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cycles_fiche.webp" width="260" alt="Zyklen: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_s6.webp" width="200" alt="Zyklen: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/cycles_s9.webp" width="200" alt="Zyklen: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_easy.webp" width="200" alt="Zyklen: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/cycles_a.webp" width="200" alt="Zyklen: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/cycles_hard.webp" width="200" alt="Zyklen: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_notes.webp" width="200" alt="Zyklen: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_check.webp" width="200" alt="Zyklen: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_solved.webp" width="200" alt="Zyklen: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_dark.webp" width="200" alt="Zyklen: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/cycles_mobile.webp" width="150" alt="Zyklen: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_en.webp" width="300" alt="Zyklen: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_rules.webp" width="300" alt="Zyklen: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="fixedpts"></a>
#### 57. Fixpunkte · Fixed points (`fixedpts`)

**Wie viele Ziffern an ihrer eigenen Position stehen.**

Zusätzlich zu den klassischen Regeln sagt eine Zahl außerhalb des Gitters, wie viele Ziffern an der Position stehen, die ihrem Wert entspricht (die zweite Zelle enthält 2 usw.), von diesem Ende aus gezählt. Größen 9×9 und 6×6.

<table><tr><td align="center"><img src="../../screens/fixedpts_a.webp" width="300" alt="Fixpunkte: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/fixedpts_b.webp" width="300" alt="Fixpunkte: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 3 (Zeile 1, Sp. 8): keine direkte Folgerung; die Ziffer stammt aus der eindeutigen Lösung (es wäre eine Annahme nötig).
- **Code für dasselbe Rätsel:** `fixedpts-9-medium-3926317386` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 4802 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_card.webp" width="200" alt="Fixpunkte: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_fiche.webp" width="260" alt="Fixpunkte: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_s6.webp" width="200" alt="Fixpunkte: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_s9.webp" width="200" alt="Fixpunkte: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_easy.webp" width="200" alt="Fixpunkte: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_a.webp" width="200" alt="Fixpunkte: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_hard.webp" width="200" alt="Fixpunkte: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_notes.webp" width="200" alt="Fixpunkte: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_check.webp" width="200" alt="Fixpunkte: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_solved.webp" width="200" alt="Fixpunkte: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_dark.webp" width="200" alt="Fixpunkte: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_mobile.webp" width="150" alt="Fixpunkte: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_en.webp" width="300" alt="Fixpunkte: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_rules.webp" width="300" alt="Fixpunkte: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="altsum"></a>
#### 58. Alternierende Summe · Alternating sum (`altsum`)

**a₁ − a₂ + a₃ − …**

Zusätzlich zu den klassischen Regeln ist eine Zahl außerhalb des Gitters die alternierende Summe der Ziffern, von diesem Ende aus gesehen: erste Ziffer minus zweite plus dritte und so weiter. Sie kann negativ sein. Größen 9×9 und 6×6.

<table><tr><td align="center"><img src="../../screens/altsum_a.webp" width="300" alt="Alternierende Summe: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/altsum_b.webp" width="300" alt="Alternierende Summe: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 3 (Zeile 9, Sp. 4): alle anderen Ziffern kommen bereits unter den markierten Zellen vor (Zeile, Spalte, Gebiet oder Nachbarschaftsregel).
- **Code für dasselbe Rätsel:** `altsum-9-medium-1703080656` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 2188 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_card.webp" width="200" alt="Alternierende Summe: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/altsum_fiche.webp" width="260" alt="Alternierende Summe: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_s6.webp" width="200" alt="Alternierende Summe: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/altsum_s9.webp" width="200" alt="Alternierende Summe: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_easy.webp" width="200" alt="Alternierende Summe: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/altsum_a.webp" width="200" alt="Alternierende Summe: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/altsum_hard.webp" width="200" alt="Alternierende Summe: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_notes.webp" width="200" alt="Alternierende Summe: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_check.webp" width="200" alt="Alternierende Summe: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_solved.webp" width="200" alt="Alternierende Summe: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_dark.webp" width="200" alt="Alternierende Summe: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/altsum_mobile.webp" width="150" alt="Alternierende Summe: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_en.webp" width="300" alt="Alternierende Summe: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_rules.webp" width="300" alt="Alternierende Summe: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="dxsum"></a>
#### 59. Diagonale X-Summen · Diagonal X-sums (`dxsum`)

**Die ersten d Ziffern auf einer Diagonale, d = erste Ziffer.**

Zusätzlich zu den klassischen Regeln nennt ein Hinweis am Ende einer Diagonale (die in der Randzelle beginnt) die Summe der ersten d Zellen dieser Diagonale, wobei d die erste Ziffer darauf ist; hat die Diagonale weniger als d Zellen, wird die ganze Diagonale addiert (wie bei X-Sums, aber auf Diagonalen). Größen 9×9 und 6×6.

<table><tr><td align="center"><img src="../../screens/dxsum_a.webp" width="300" alt="Diagonale X-Summen: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/dxsum_b.webp" width="300" alt="Diagonale X-Summen: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 1 (Zeile 8, Sp. 8): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `dxsum-9-medium-391021028` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 256 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_card.webp" width="200" alt="Diagonale X-Summen: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_fiche.webp" width="260" alt="Diagonale X-Summen: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_s6.webp" width="200" alt="Diagonale X-Summen: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_s9.webp" width="200" alt="Diagonale X-Summen: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_easy.webp" width="200" alt="Diagonale X-Summen: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_a.webp" width="200" alt="Diagonale X-Summen: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_hard.webp" width="200" alt="Diagonale X-Summen: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_notes.webp" width="200" alt="Diagonale X-Summen: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_check.webp" width="200" alt="Diagonale X-Summen: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_solved.webp" width="200" alt="Diagonale X-Summen: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_dark.webp" width="200" alt="Diagonale X-Summen: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_mobile.webp" width="150" alt="Diagonale X-Summen: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_en.webp" width="300" alt="Diagonale X-Summen: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_rules.webp" width="300" alt="Diagonale X-Summen: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

