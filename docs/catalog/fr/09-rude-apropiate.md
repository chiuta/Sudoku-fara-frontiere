# Catalogue : Variantes apparentées (3)

[English](../en/09-rude-apropiate.md) · [Română](../09-rude-apropiate.md) · **Français** · [Italiano](../it/09-rude-apropiate.md) · [Español](../es/09-rude-apropiate.md) · [Português](../pt/09-rude-apropiate.md) · [Deutsch](../de/09-rude-apropiate.md) · [Magyar](../hu/09-rude-apropiate.md)

[← README](../../../README.fr.md) · [Toutes les catégories](README.md)

[Taille et symboles](01-marime-si-simboluri.md) · [Régions et groupes](02-regiuni-si-grupuri.md) · [Voisins](03-vecini.md) · [Parité, points, signes](04-paritate-puncte-semne.md) · [Sommes](05-sume.md) · [Indices en marge](06-indicii-pe-margine.md) · [Lignes](07-linii.md) · [Grilles composées](08-grile-compuse.md) · **Variantes apparentées** · [Topologies et déplacements fairy](10-topologii-si-mutari-fairy.md) · [Règles globales](11-reguli-globale.md) · [Indices dans les cases](12-indicii-in-celule.md) · [Dimensions supérieures](13-dimensiuni-superioare.md)

---


_Proche parent du Sudoku : lisez la fiche pour voir ce qui change par rapport au jeu classique._

<a id="futoshiki"></a>
#### 99. Futoshiki · Futoshiki (`futoshiki`)

**Carré latin avec signes d’inégalité.**

Chaque ligne et colonne contiennent les chiffres 1–N une fois ; les signes < et > entre les cases doivent être respectés. Proche parent du sudoku, sans blocs.

<table><tr><td align="center"><img src="../../screens/futoshiki_a.webp" width="300" alt="Futoshiki: puzzle de départ"><br><sub>Puzzle de départ (5×5 · moyen · 5 indices)</sub></td><td align="center"><img src="../../screens/futoshiki_b.webp" width="300" alt="Futoshiki: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 2 (ligne 1, col. 2) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `futoshiki-5-medium-4235973107` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_card.webp" width="200" alt="Futoshiki: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_fiche.webp" width="260" alt="Futoshiki: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_s4.webp" width="200" alt="Futoshiki: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_s5.webp" width="200" alt="Futoshiki: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_s6.webp" width="200" alt="Futoshiki: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_s7.webp" width="200" alt="Futoshiki: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_easy.webp" width="200" alt="Futoshiki: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_a.webp" width="200" alt="Futoshiki: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_hard.webp" width="200" alt="Futoshiki: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_notes.webp" width="200" alt="Futoshiki: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_check.webp" width="200" alt="Futoshiki: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_solved.webp" width="200" alt="Futoshiki: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_dark.webp" width="200" alt="Futoshiki: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_mobile.webp" width="150" alt="Futoshiki: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_en.webp" width="300" alt="Futoshiki: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_rules.webp" width="300" alt="Futoshiki: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="kenken"></a>
#### 100. KenKen (Calcudoku) · KenKen (Calcudoku) (`kenken`)

**Carré latin avec cages arithmétiques.**

Chaque ligne et colonne contiennent les chiffres 1–N une fois ; chaque cage a un résultat et une opération (+, −, ×, ÷). Les chiffres peuvent se répéter dans une cage s’ils ne sont pas sur la même ligne ou colonne.

<table><tr><td align="center"><img src="../../screens/kenken_a.webp" width="300" alt="KenKen (Calcudoku): puzzle de départ"><br><sub>Puzzle de départ (5×5 · moyen · 1 indices)</sub></td><td align="center"><img src="../../screens/kenken_b.webp" width="300" alt="KenKen (Calcudoku): après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 4 (ligne 1, col. 4) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `kenken-5-medium-3034946116` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_card.webp" width="200" alt="KenKen (Calcudoku): La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/kenken_fiche.webp" width="260" alt="KenKen (Calcudoku): La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_s4.webp" width="200" alt="KenKen (Calcudoku): 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/kenken_s5.webp" width="200" alt="KenKen (Calcudoku): 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/kenken_s6.webp" width="200" alt="KenKen (Calcudoku): 6×6"><br><sub>6×6</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_easy.webp" width="200" alt="KenKen (Calcudoku): Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/kenken_a.webp" width="200" alt="KenKen (Calcudoku): Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/kenken_hard.webp" width="200" alt="KenKen (Calcudoku): Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_notes.webp" width="200" alt="KenKen (Calcudoku): Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_check.webp" width="200" alt="KenKen (Calcudoku): « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_solved.webp" width="200" alt="KenKen (Calcudoku): La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_dark.webp" width="200" alt="KenKen (Calcudoku): Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/kenken_mobile.webp" width="150" alt="KenKen (Calcudoku): Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_en.webp" width="300" alt="KenKen (Calcudoku): Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_rules.webp" width="300" alt="KenKen (Calcudoku): Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="strimko"></a>
#### 101. Strimko · Strimko (`strimko`)

**Des chaînes au lieu de blocs.**

Chaque ligne, colonne et chaîne (cercles reliés par des lignes, connexes aussi en diagonale) contient chaque chiffre exactement une fois. Il n’y a pas de blocs. Tailles 4–7.

<table><tr><td align="center"><img src="../../screens/strimko_a.webp" width="300" alt="Strimko: puzzle de départ"><br><sub>Puzzle de départ (5×5 · moyen · 5 indices)</sub></td><td align="center"><img src="../../screens/strimko_b.webp" width="300" alt="Strimko: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 2 (ligne 2, col. 1) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `strimko-5-medium-2938744326` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_card.webp" width="200" alt="Strimko: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/strimko_fiche.webp" width="260" alt="Strimko: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_s4.webp" width="200" alt="Strimko: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/strimko_s5.webp" width="200" alt="Strimko: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/strimko_s6.webp" width="200" alt="Strimko: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../../screens/strimko_s7.webp" width="200" alt="Strimko: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_easy.webp" width="200" alt="Strimko: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/strimko_a.webp" width="200" alt="Strimko: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/strimko_hard.webp" width="200" alt="Strimko: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_notes.webp" width="200" alt="Strimko: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_check.webp" width="200" alt="Strimko: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_solved.webp" width="200" alt="Strimko: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_dark.webp" width="200" alt="Strimko: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/strimko_mobile.webp" width="150" alt="Strimko: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_en.webp" width="300" alt="Strimko: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_rules.webp" width="300" alt="Strimko: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

