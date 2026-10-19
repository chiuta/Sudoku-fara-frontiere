# Katalog: Hinweise in Feldern (11)

[English](../en/12-indicii-in-celule.md) · [Română](../12-indicii-in-celule.md) · [Français](../fr/12-indicii-in-celule.md) · [Italiano](../it/12-indicii-in-celule.md) · [Español](../es/12-indicii-in-celule.md) · [Português](../pt/12-indicii-in-celule.md) · **Deutsch** · [Magyar](../hu/12-indicii-in-celule.md)

[← README](../../../README.de.md) · [Alle Kategorien](README.md)

[Größe und Symbole](01-marime-si-simboluri.md) · [Gebiete und Gruppen](02-regiuni-si-grupuri.md) · [Nachbarn](03-vecini.md) · [Parität, Punkte, Zeichen](04-paritate-puncte-semne.md) · [Summen](05-sume.md) · [Hinweise am Rand](06-indicii-pe-margine.md) · [Linien](07-linii.md) · [Zusammengesetzte Gitter](08-grile-compuse.md) · [Nahe Verwandte](09-rude-apropiate.md) · [Topologien und Märchenschach-Züge](10-topologii-si-mutari-fairy.md) · [Globale Regeln](11-reguli-globale.md) · **Hinweise in Feldern** · [Höhere Dimensionen](13-dimensiuni-superioare.md)

---


_Hinweise, die direkt in Zellen oder auf Zellgruppen eingezeichnet sind; siehe Datenblatt für die Bedeutung jedes Zeichens._

<a id="relief"></a>
#### 121. Relief · Relief (`relief`)

**Wie viele Nachbarn kleiner sind.**

Zusätzlich zu den klassischen Regeln zeigt eine Zahl in einer markierten Zelle, wie viele der vier orthogonalen Nachbarn eine kleinere Ziffer als die Ziffer dieser Zelle enthalten. Die Ziffer der Zelle selbst ist noch zu bestimmen.

<table><tr><td align="center"><img src="../../screens/relief_a.webp" width="300" alt="Relief: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/relief_b.webp" width="300" alt="Relief: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 8 (Zeile 1, Sp. 2): keine direkte Folgerung; die Ziffer stammt aus der eindeutigen Lösung (es wäre eine Annahme nötig).
- **Code für dasselbe Rätsel:** `relief-9-medium-2696294536` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 56 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_card.webp" width="200" alt="Relief: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/relief_fiche.webp" width="260" alt="Relief: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_s4.webp" width="200" alt="Relief: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/relief_s6.webp" width="200" alt="Relief: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/relief_s9.webp" width="200" alt="Relief: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_easy.webp" width="200" alt="Relief: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/relief_a.webp" width="200" alt="Relief: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/relief_hard.webp" width="200" alt="Relief: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_notes.webp" width="200" alt="Relief: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/relief_check.webp" width="200" alt="Relief: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/relief_solved.webp" width="200" alt="Relief: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_dark.webp" width="200" alt="Relief: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/relief_mobile.webp" width="150" alt="Relief: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/relief_en.webp" width="300" alt="Relief: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_rules.webp" width="300" alt="Relief: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="oddsweeper"></a>
#### 122. Ungerade Minensucher · Odd-sweeper (`oddsweeper`)

**Wie viele der 8 Nachbarn ungerade sind.**

Zusätzlich zu den klassischen Regeln zeigt eine Zahl in einer markierten Zelle, wie viele der acht Nachbarn (Diagonalen eingeschlossen) ungerade Ziffern enthalten, wie bei Minesweeper. Die Ziffer der Zelle selbst ist noch zu bestimmen.

<table><tr><td align="center"><img src="../../screens/oddsweeper_a.webp" width="300" alt="Ungerade Minensucher: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/oddsweeper_b.webp" width="300" alt="Ungerade Minensucher: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 4 (Zeile 8, Sp. 3): alle anderen Ziffern kommen bereits unter den markierten Zellen vor (Zeile, Spalte, Gebiet oder Nachbarschaftsregel).
- **Code für dasselbe Rätsel:** `oddsweeper-9-medium-964916310` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 1219 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_card.webp" width="200" alt="Ungerade Minensucher: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_fiche.webp" width="260" alt="Ungerade Minensucher: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_s4.webp" width="200" alt="Ungerade Minensucher: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_s6.webp" width="200" alt="Ungerade Minensucher: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_s9.webp" width="200" alt="Ungerade Minensucher: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_easy.webp" width="200" alt="Ungerade Minensucher: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_a.webp" width="200" alt="Ungerade Minensucher: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_hard.webp" width="200" alt="Ungerade Minensucher: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_notes.webp" width="200" alt="Ungerade Minensucher: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_check.webp" width="200" alt="Ungerade Minensucher: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_solved.webp" width="200" alt="Ungerade Minensucher: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_dark.webp" width="200" alt="Ungerade Minensucher: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_mobile.webp" width="150" alt="Ungerade Minensucher: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_en.webp" width="300" alt="Ungerade Minensucher: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_rules.webp" width="300" alt="Ungerade Minensucher: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="compass"></a>
#### 123. Kompass · Compass (`compass`)

**Der Pfeil zeigt auf den größten Nachbarn.**

Zusätzlich zu den klassischen Regeln zeigt ein Pfeil in einer markierten Zelle auf den größten ihrer acht Nachbarn (echt größer als alle anderen Nachbarn). Die Ziffer der Zelle selbst wird nicht verglichen; am Rand zählen nur die vorhandenen Nachbarn.

<table><tr><td align="center"><img src="../../screens/compass_a.webp" width="300" alt="Kompass: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/compass_b.webp" width="300" alt="Kompass: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 1 (Zeile 8, Sp. 5): keine direkte Folgerung; die Ziffer stammt aus der eindeutigen Lösung (es wäre eine Annahme nötig).
- **Code für dasselbe Rätsel:** `compass-9-medium-1055457902` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 1321 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_card.webp" width="200" alt="Kompass: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/compass_fiche.webp" width="260" alt="Kompass: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_s4.webp" width="200" alt="Kompass: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/compass_s6.webp" width="200" alt="Kompass: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/compass_s9.webp" width="200" alt="Kompass: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_easy.webp" width="200" alt="Kompass: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/compass_a.webp" width="200" alt="Kompass: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/compass_hard.webp" width="200" alt="Kompass: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_notes.webp" width="200" alt="Kompass: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/compass_check.webp" width="200" alt="Kompass: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/compass_solved.webp" width="200" alt="Kompass: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_dark.webp" width="200" alt="Kompass: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/compass_mobile.webp" width="150" alt="Kompass: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/compass_en.webp" width="300" alt="Kompass: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_rules.webp" width="300" alt="Kompass: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="quadsum"></a>
#### 124. Quadrupelsumme · Quad sum (`quadsum`)

**Die Summe eines 2×2-Blocks.**

Zusätzlich zu den klassischen Regeln ist eine Zahl am Schnittpunkt von vier Zellen die Summe der vier Ziffern (Ziffern können sich wiederholen, da der Block zwei oder vier Blöcke berühren kann).

<table><tr><td align="center"><img src="../../screens/quadsum_a.webp" width="300" alt="Quadrupelsumme: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/quadsum_b.webp" width="300" alt="Quadrupelsumme: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 2 (Zeile 1, Sp. 2): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `quadsum-9-medium-3898620671` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_card.webp" width="200" alt="Quadrupelsumme: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_fiche.webp" width="260" alt="Quadrupelsumme: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_s4.webp" width="200" alt="Quadrupelsumme: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_s6.webp" width="200" alt="Quadrupelsumme: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_s9.webp" width="200" alt="Quadrupelsumme: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_easy.webp" width="200" alt="Quadrupelsumme: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_a.webp" width="200" alt="Quadrupelsumme: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_hard.webp" width="200" alt="Quadrupelsumme: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_notes.webp" width="200" alt="Quadrupelsumme: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_check.webp" width="200" alt="Quadrupelsumme: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_solved.webp" width="200" alt="Quadrupelsumme: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_dark.webp" width="200" alt="Quadrupelsumme: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_mobile.webp" width="150" alt="Quadrupelsumme: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_en.webp" width="300" alt="Quadrupelsumme: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_rules.webp" width="300" alt="Quadrupelsumme: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="stone"></a>
#### 125. Stein 2×2 · Stone 2×2 (`stone`)

**Vier verschiedene Ziffern in einem Block.**

Zusätzlich zu den klassischen Regeln sind in jedem mit einem Quadrat markierten 2×2-Block die vier Ziffern alle verschieden. Die Markierungen erscheinen nur bei Blöcken, die mindestens zwei Sudoku-Blöcke berühren; ein unmarkierter Block kann verschiedene Ziffern haben oder auch nicht.

<table><tr><td align="center"><img src="../../screens/stone_a.webp" width="300" alt="Stein 2×2: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 23 Vorgaben)</sub></td><td align="center"><img src="../../screens/stone_b.webp" width="300" alt="Stein 2×2: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 6 (Zeile 9, Sp. 5): es ist die einzige Zelle in der markierten Spalte, in der 6 stehen kann.
- **Code für dasselbe Rätsel:** `stone-9-medium-1062674283` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 7 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_card.webp" width="200" alt="Stein 2×2: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/stone_fiche.webp" width="260" alt="Stein 2×2: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_s4.webp" width="200" alt="Stein 2×2: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/stone_s6.webp" width="200" alt="Stein 2×2: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/stone_s9.webp" width="200" alt="Stein 2×2: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_easy.webp" width="200" alt="Stein 2×2: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/stone_a.webp" width="200" alt="Stein 2×2: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/stone_hard.webp" width="200" alt="Stein 2×2: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_notes.webp" width="200" alt="Stein 2×2: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/stone_check.webp" width="200" alt="Stein 2×2: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/stone_solved.webp" width="200" alt="Stein 2×2: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_dark.webp" width="200" alt="Stein 2×2: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/stone_mobile.webp" width="150" alt="Stein 2×2: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/stone_en.webp" width="300" alt="Stein 2×2: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_rules.webp" width="300" alt="Stein 2×2: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="domino"></a>
#### 126. Domino · Domino (`domino`)

**Plättchen aus zwei Zellen mit vorgegebenen Ziffern.**

Zusätzlich zu den klassischen Regeln deckt ein Dominostein zwei benachbarte Zellen ab und zeigt, welche zwei Ziffern sie enthalten (in beliebiger Reihenfolge). Die hier gewählte Definition ist die einfachste; die Quellen unterscheiden sich.

<table><tr><td align="center"><img src="../../screens/domino_a.webp" width="300" alt="Domino: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 16 Vorgaben)</sub></td><td align="center"><img src="../../screens/domino_b.webp" width="300" alt="Domino: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 6 (Zeile 1, Sp. 3): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `domino-9-medium-2561228437` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_card.webp" width="200" alt="Domino: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/domino_fiche.webp" width="260" alt="Domino: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_s4.webp" width="200" alt="Domino: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/domino_s6.webp" width="200" alt="Domino: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/domino_s9.webp" width="200" alt="Domino: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_easy.webp" width="200" alt="Domino: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/domino_a.webp" width="200" alt="Domino: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/domino_hard.webp" width="200" alt="Domino: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_notes.webp" width="200" alt="Domino: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/domino_check.webp" width="200" alt="Domino: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/domino_solved.webp" width="200" alt="Domino: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_dark.webp" width="200" alt="Domino: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/domino_mobile.webp" width="150" alt="Domino: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/domino_en.webp" width="300" alt="Domino: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_rules.webp" width="300" alt="Domino: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="pillsq"></a>
#### 127. Pille mit Quadratzahl · Perfect-square pill (`pillsq`)

**Zwei gelesene Ziffern bilden eine Quadratzahl.**

Zusätzlich zu den klassischen Regeln deckt eine Pille zwei benachbarte Zellen ab; die in Pfeilrichtung gelesene zweistellige Zahl ist eine Quadratzahl (16, 25, 36, 49, 64 oder 81). Nur 9×9.

<table><tr><td align="center"><img src="../../screens/pillsq_a.webp" width="300" alt="Pille mit Quadratzahl: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 19 Vorgaben)</sub></td><td align="center"><img src="../../screens/pillsq_b.webp" width="300" alt="Pille mit Quadratzahl: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 9 (Zeile 1, Sp. 7): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `pillsq-9-medium-2681486728` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_card.webp" width="200" alt="Pille mit Quadratzahl: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_fiche.webp" width="260" alt="Pille mit Quadratzahl: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_s9.webp" width="200" alt="Pille mit Quadratzahl: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_easy.webp" width="200" alt="Pille mit Quadratzahl: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_a.webp" width="200" alt="Pille mit Quadratzahl: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_hard.webp" width="200" alt="Pille mit Quadratzahl: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_notes.webp" width="200" alt="Pille mit Quadratzahl: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_check.webp" width="200" alt="Pille mit Quadratzahl: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_solved.webp" width="200" alt="Pille mit Quadratzahl: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_dark.webp" width="200" alt="Pille mit Quadratzahl: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_mobile.webp" width="150" alt="Pille mit Quadratzahl: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_en.webp" width="300" alt="Pille mit Quadratzahl: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_rules.webp" width="300" alt="Pille mit Quadratzahl: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="primecage"></a>
#### 128. Primzahlkäfig · Prime cage (`primecage`)

**Verschiedene Ziffern mit Primzahl als Summe.**

Zusätzlich zu den klassischen Regeln sind die Ziffern in jedem gepunkteten Käfig verschieden, und ihre Summe ist eine Primzahl (die Summe wird nicht angezeigt; die Käfige sind mit P markiert).

<table><tr><td align="center"><img src="../../screens/primecage_a.webp" width="300" alt="Primzahlkäfig: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 24 Vorgaben)</sub></td><td align="center"><img src="../../screens/primecage_b.webp" width="300" alt="Primzahlkäfig: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 2 (Zeile 2, Sp. 9): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `primecage-9-medium-4252411907` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 3 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_card.webp" width="200" alt="Primzahlkäfig: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/primecage_fiche.webp" width="260" alt="Primzahlkäfig: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_s6.webp" width="200" alt="Primzahlkäfig: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/primecage_s9.webp" width="200" alt="Primzahlkäfig: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_easy.webp" width="200" alt="Primzahlkäfig: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/primecage_a.webp" width="200" alt="Primzahlkäfig: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/primecage_hard.webp" width="200" alt="Primzahlkäfig: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_notes.webp" width="200" alt="Primzahlkäfig: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/primecage_check.webp" width="200" alt="Primzahlkäfig: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/primecage_solved.webp" width="200" alt="Primzahlkäfig: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_dark.webp" width="200" alt="Primzahlkäfig: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/primecage_mobile.webp" width="150" alt="Primzahlkäfig: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/primecage_en.webp" width="300" alt="Primzahlkäfig: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_rules.webp" width="300" alt="Primzahlkäfig: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="balcage"></a>
#### 129. Ausgeglichener Käfig · Balanced cage (`balcage`)

**Die Summe ist gleich dem Produkt.**

Zusätzlich zu den klassischen Regeln ist in jedem mit Σ=Π markierten Käfig die Summe der Ziffern gleich ihrem Produkt (Ziffern können sich wiederholen; z. B. 1+2+3 = 1·2·3).

<table><tr><td align="center"><img src="../../screens/balcage_a.webp" width="300" alt="Ausgeglichener Käfig: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 18 Vorgaben)</sub></td><td align="center"><img src="../../screens/balcage_b.webp" width="300" alt="Ausgeglichener Käfig: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 2 (Zeile 5, Sp. 2): es ist die einzige Zelle in der markierten Zeile, in der 2 stehen kann.
- **Code für dasselbe Rätsel:** `balcage-9-medium-2755606647` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: 223 Verzweigungen

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_card.webp" width="200" alt="Ausgeglichener Käfig: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/balcage_fiche.webp" width="260" alt="Ausgeglichener Käfig: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_s6.webp" width="200" alt="Ausgeglichener Käfig: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/balcage_s9.webp" width="200" alt="Ausgeglichener Käfig: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_easy.webp" width="200" alt="Ausgeglichener Käfig: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/balcage_a.webp" width="200" alt="Ausgeglichener Käfig: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/balcage_hard.webp" width="200" alt="Ausgeglichener Käfig: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_notes.webp" width="200" alt="Ausgeglichener Käfig: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/balcage_check.webp" width="200" alt="Ausgeglichener Käfig: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/balcage_solved.webp" width="200" alt="Ausgeglichener Käfig: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_dark.webp" width="200" alt="Ausgeglichener Käfig: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/balcage_mobile.webp" width="150" alt="Ausgeglichener Käfig: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/balcage_en.webp" width="300" alt="Ausgeglichener Käfig: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_rules.webp" width="300" alt="Ausgeglichener Käfig: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="doubler"></a>
#### 130. Verdoppler · Doublers (`doubler`)

**Killer, bei dem manche Zellen doppelt zählen.**

Wie bei Killer (verschiedene Ziffern im Käfig, Summe vorgegeben), aber eine mit ×2 markierte Zelle im Käfig wird zweimal addiert.

<table><tr><td align="center"><img src="../../screens/doubler_a.webp" width="300" alt="Verdoppler: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 10 Vorgaben)</sub></td><td align="center"><img src="../../screens/doubler_b.webp" width="300" alt="Verdoppler: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 5 (Zeile 1, Sp. 4): ergibt sich aus den speziellen Regeln der Variante (Hinweise, Summen, Beziehungen), kombiniert mit den übrigen Ziffern.
- **Code für dasselbe Rätsel:** `doubler-9-medium-2563509363` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_card.webp" width="200" alt="Verdoppler: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/doubler_fiche.webp" width="260" alt="Verdoppler: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_s4.webp" width="200" alt="Verdoppler: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/doubler_s6.webp" width="200" alt="Verdoppler: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/doubler_s9.webp" width="200" alt="Verdoppler: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_easy.webp" width="200" alt="Verdoppler: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/doubler_a.webp" width="200" alt="Verdoppler: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/doubler_hard.webp" width="200" alt="Verdoppler: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_notes.webp" width="200" alt="Verdoppler: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/doubler_check.webp" width="200" alt="Verdoppler: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/doubler_solved.webp" width="200" alt="Verdoppler: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_dark.webp" width="200" alt="Verdoppler: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/doubler_mobile.webp" width="150" alt="Verdoppler: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/doubler_en.webp" width="300" alt="Verdoppler: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_rules.webp" width="300" alt="Verdoppler: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

<a id="clonemir"></a>
#### 131. Spiegelklon · Mirror clone (`clonemir`)

**Zwei gleiche Formen, die zweite gespiegelt.**

Zusätzlich zu den klassischen Regeln haben die mit demselben Buchstaben markierten farbigen Zonen dieselbe Form, wobei die zweite links–rechts gespiegelt ist; einander entsprechende Zellen enthalten dieselbe Ziffer.

<table><tr><td align="center"><img src="../../screens/clonemir_a.webp" width="300" alt="Spiegelklon: Rätsel am Anfang"><br><sub>Rätsel am Anfang (9×9 · mittel · 26 Vorgaben)</sub></td><td align="center"><img src="../../screens/clonemir_b.webp" width="300" alt="Spiegelklon: nach 4 Schritten"><br><sub>Nach 4 Schritten „Schritt für Schritt“</sub></td></tr></table>

- **Letzter von der App erklärter Schritt:** 9 (Zeile 2, Sp. 4): es ist die einzige Zelle in der markierten Zeile, in der 9 stehen kann.
- **Code für dasselbe Rätsel:** `clonemir-9-medium-3077784619` (füge ihn unter „Neues Spiel → Code“ ein) · Aufwand des Lösers: keine Verzweigung

<details><summary><b>Vollständige Galerie: alle Arten von Screenshots</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_card.webp" width="200" alt="Spiegelklon: Die Karte im Atlas"><br><sub>Die Karte im Atlas</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_fiche.webp" width="260" alt="Spiegelklon: Das Datenblatt (öffnet sich beim Klick auf die Karte)"><br><sub>Das Datenblatt (öffnet sich beim Klick auf die Karte)</sub></td></tr>
</table>

<p><b>Größen (mittlere Stufe)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_s6.webp" width="200" alt="Spiegelklon: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_s9.webp" width="200" alt="Spiegelklon: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Schwierigkeit</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_easy.webp" width="200" alt="Spiegelklon: Leicht"><br><sub>Leicht</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_a.webp" width="200" alt="Spiegelklon: Mittel"><br><sub>Mittel</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_hard.webp" width="200" alt="Spiegelklon: Schwer"><br><sub>Schwer</sub></td></tr>
</table>

<p><b>Spielzustände</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_notes.webp" width="200" alt="Spiegelklon: Auto-Notizen (Kandidaten)"><br><sub>Auto-Notizen (Kandidaten)</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_check.webp" width="200" alt="Spiegelklon: „Prüfen“ mit einer falschen Ziffer (rot)"><br><sub>„Prüfen“ mit einer falschen Ziffer (rot)</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_solved.webp" width="200" alt="Spiegelklon: Die vollständige Lösung"><br><sub>Die vollständige Lösung</sub></td></tr>
</table>

<p><b>Themen und Geräte</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_dark.webp" width="200" alt="Spiegelklon: Dunkles Thema"><br><sub>Dunkles Thema</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_mobile.webp" width="150" alt="Spiegelklon: Telefon (390 px)"><br><sub>Telefon (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_en.webp" width="300" alt="Spiegelklon: Oberfläche auf Englisch"><br><sub>Oberfläche auf Englisch</sub></td></tr>
</table>

<p><b>Das Regelpanel im Spiel</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_rules.webp" width="300" alt="Spiegelklon: Die Regeln neben dem Spielfeld"><br><sub>Die Regeln neben dem Spielfeld</sub></td></tr>
</table>

</details>

