# Catalogue : Indices en marge (19)

[English](../en/06-indicii-pe-margine.md) · [Română](../06-indicii-pe-margine.md) · **Français** · [Italiano](../it/06-indicii-pe-margine.md) · [Español](../es/06-indicii-pe-margine.md) · [Português](../pt/06-indicii-pe-margine.md) · [Deutsch](../de/06-indicii-pe-margine.md) · [Magyar](../hu/06-indicii-pe-margine.md)

[← README](../../../README.fr.md) · [Toutes les catégories](README.md)

[Taille et symboles](01-marime-si-simboluri.md) · [Régions et groupes](02-regiuni-si-grupuri.md) · [Voisins](03-vecini.md) · [Parité, points, signes](04-paritate-puncte-semne.md) · [Sommes](05-sume.md) · **Indices en marge** · [Lignes](07-linii.md) · [Grilles composées](08-grile-compuse.md) · [Variantes apparentées](09-rude-apropiate.md) · [Topologies et déplacements fairy](10-topologii-si-mutari-fairy.md) · [Règles globales](11-reguli-globale.md) · [Indices dans les cases](12-indicii-in-celule.md) · [Dimensions supérieures](13-dimensiuni-superioare.md)

---


_Les indices sont écrits en dehors de la grille, à l’extrémité de la ligne ou de la colonne qu’ils concernent._

<a id="sandwich"></a>
#### 41. Sandwich · Sandwich (`sandwich`)

**La somme entre 1 et le plus grand chiffre.**

Le nombre en marge est la somme des chiffres situés entre le chiffre 1 et le chiffre N (9 en 9×9) dans la ligne ou la colonne concernée.

<table><tr><td align="center"><img src="../../screens/sandwich_a.webp" width="300" alt="Sandwich: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 16 indices)</sub></td><td align="center"><img src="../../screens/sandwich_b.webp" width="300" alt="Sandwich: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 3 (ligne 1, col. 2) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `sandwich-9-medium-4184518699` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_card.webp" width="200" alt="Sandwich: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_fiche.webp" width="260" alt="Sandwich: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_s4.webp" width="200" alt="Sandwich: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s6.webp" width="200" alt="Sandwich: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s9.webp" width="200" alt="Sandwich: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_easy.webp" width="200" alt="Sandwich: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_a.webp" width="200" alt="Sandwich: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_hard.webp" width="200" alt="Sandwich: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_notes.webp" width="200" alt="Sandwich: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_check.webp" width="200" alt="Sandwich: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_solved.webp" width="200" alt="Sandwich: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_dark.webp" width="200" alt="Sandwich: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_mobile.webp" width="150" alt="Sandwich: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_en.webp" width="300" alt="Sandwich: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_rules.webp" width="300" alt="Sandwich: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="xsum"></a>
#### 42. X-Sums · X-Sums (`xsum`)

**Premier chiffre = combien de cases on additionne.**

Si le premier chiffre d’une ligne ou d’une colonne est k, la somme des k premiers chiffres (à partir de cette extrémité) est le nombre en marge.

<table><tr><td align="center"><img src="../../screens/xsum_a.webp" width="300" alt="X-Sums: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 16 indices)</sub></td><td align="center"><img src="../../screens/xsum_b.webp" width="300" alt="X-Sums: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 3 (ligne 3, col. 1) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `xsum-9-medium-920107551` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 5 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_card.webp" width="200" alt="X-Sums: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/xsum_fiche.webp" width="260" alt="X-Sums: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_s6.webp" width="200" alt="X-Sums: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/xsum_s9.webp" width="200" alt="X-Sums: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_easy.webp" width="200" alt="X-Sums: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/xsum_a.webp" width="200" alt="X-Sums: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/xsum_hard.webp" width="200" alt="X-Sums: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_notes.webp" width="200" alt="X-Sums: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_check.webp" width="200" alt="X-Sums: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_solved.webp" width="200" alt="X-Sums: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_dark.webp" width="200" alt="X-Sums: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/xsum_mobile.webp" width="150" alt="X-Sums: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_en.webp" width="300" alt="X-Sums: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_rules.webp" width="300" alt="X-Sums: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="frame"></a>
#### 43. Frame (les trois premiers) · Frame (first three) (`frame`)

**La somme des trois premiers chiffres.**

Le nombre en marge est la somme des trois premiers chiffres de la ligne ou de la colonne, à partir de cette extrémité.

<table><tr><td align="center"><img src="../../screens/frame_a.webp" width="300" alt="Frame (les trois premiers): puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 16 indices)</sub></td><td align="center"><img src="../../screens/frame_b.webp" width="300" alt="Frame (les trois premiers): après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 7 (ligne 1, col. 4) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `frame-9-medium-3867362192` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_card.webp" width="200" alt="Frame (les trois premiers): La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/frame_fiche.webp" width="260" alt="Frame (les trois premiers): La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_s6.webp" width="200" alt="Frame (les trois premiers): 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/frame_s9.webp" width="200" alt="Frame (les trois premiers): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_easy.webp" width="200" alt="Frame (les trois premiers): Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/frame_a.webp" width="200" alt="Frame (les trois premiers): Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/frame_hard.webp" width="200" alt="Frame (les trois premiers): Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_notes.webp" width="200" alt="Frame (les trois premiers): Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/frame_check.webp" width="200" alt="Frame (les trois premiers): « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/frame_solved.webp" width="200" alt="Frame (les trois premiers): La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_dark.webp" width="200" alt="Frame (les trois premiers): Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/frame_mobile.webp" width="150" alt="Frame (les trois premiers): Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/frame_en.webp" width="300" alt="Frame (les trois premiers): Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_rules.webp" width="300" alt="Frame (les trois premiers): Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="skyscraper"></a>
#### 44. Gratte-ciel · Skyscrapers (`skyscraper`)

**Combien d’immeubles on voit depuis la marge.**

Les chiffres sont des hauteurs d’immeubles. Le nombre en marge indique combien d’immeubles sont visibles depuis cette extrémité (un immeuble cache les plus bas derrière lui).

<table><tr><td align="center"><img src="../../screens/skyscraper_a.webp" width="300" alt="Gratte-ciel: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 16 indices)</sub></td><td align="center"><img src="../../screens/skyscraper_b.webp" width="300" alt="Gratte-ciel: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 9 (ligne 3, col. 2) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `skyscraper-9-medium-1967302454` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 143 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_card.webp" width="200" alt="Gratte-ciel: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_fiche.webp" width="260" alt="Gratte-ciel: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_s4.webp" width="200" alt="Gratte-ciel: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s6.webp" width="200" alt="Gratte-ciel: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s9.webp" width="200" alt="Gratte-ciel: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_easy.webp" width="200" alt="Gratte-ciel: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_a.webp" width="200" alt="Gratte-ciel: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_hard.webp" width="200" alt="Gratte-ciel: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_notes.webp" width="200" alt="Gratte-ciel: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_check.webp" width="200" alt="Gratte-ciel: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_solved.webp" width="200" alt="Gratte-ciel: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_dark.webp" width="200" alt="Gratte-ciel: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_mobile.webp" width="150" alt="Gratte-ciel: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_en.webp" width="300" alt="Gratte-ciel: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_rules.webp" width="300" alt="Gratte-ciel: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="rossini"></a>
#### 45. Rossini · Rossini (`rossini`)

**Flèche en marge : les trois premiers chiffres croissent dans un sens.**

Une flèche en dehors de la grille indique que les trois premiers chiffres à partir de cette extrémité sont strictement monotones : ils croissent dans le sens où pointe la flèche (vers l’intérieur de la grille) ou, si la flèche pointe vers la marge, ils croissent vers la marge, c’est-à-dire décroissent vers l’intérieur. Convention : la pointe de la flèche désigne le plus grand chiffre. L’absence de flèche n’indique rien (ce n’est pas la variante Rossini classique, où les extrémités sans flèche excluent les suites monotones).

<table><tr><td align="center"><img src="../../screens/rossini_a.webp" width="300" alt="Rossini: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 19 indices)</sub></td><td align="center"><img src="../../screens/rossini_b.webp" width="300" alt="Rossini: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 8 (ligne 1, col. 7) : c’est la seule case de la colonne marquée où 8 peut aller.
- **Code du même puzzle :** `rossini-9-medium-4071954052` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 2 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_card.webp" width="200" alt="Rossini: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/rossini_fiche.webp" width="260" alt="Rossini: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_s4.webp" width="200" alt="Rossini: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s6.webp" width="200" alt="Rossini: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s9.webp" width="200" alt="Rossini: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_easy.webp" width="200" alt="Rossini: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/rossini_a.webp" width="200" alt="Rossini: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/rossini_hard.webp" width="200" alt="Rossini: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_notes.webp" width="200" alt="Rossini: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_check.webp" width="200" alt="Rossini: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_solved.webp" width="200" alt="Rossini: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_dark.webp" width="200" alt="Rossini: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/rossini_mobile.webp" width="150" alt="Rossini: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_en.webp" width="300" alt="Rossini: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_rules.webp" width="300" alt="Rossini: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="outside"></a>
#### 46. Outside · Outside (`outside`)

**Les chiffres en marge figurent parmi les trois premiers.**

Les chiffres écrits en dehors de la grille doivent apparaître parmi les trois premières cases de la ligne ou de la colonne concernée, à partir de cette extrémité, dans n’importe quel ordre. S’il y a trois chiffres, ce sont exactement les trois cases.

<table><tr><td align="center"><img src="../../screens/outside_a.webp" width="300" alt="Outside: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/outside_b.webp" width="300" alt="Outside: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 5 (ligne 2, col. 5) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `outside-9-medium-3531544633` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_card.webp" width="200" alt="Outside: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/outside_fiche.webp" width="260" alt="Outside: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_s4.webp" width="200" alt="Outside: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/outside_s6.webp" width="200" alt="Outside: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/outside_s9.webp" width="200" alt="Outside: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_easy.webp" width="200" alt="Outside: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/outside_a.webp" width="200" alt="Outside: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/outside_hard.webp" width="200" alt="Outside: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_notes.webp" width="200" alt="Outside: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/outside_check.webp" width="200" alt="Outside: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/outside_solved.webp" width="200" alt="Outside: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_dark.webp" width="200" alt="Outside: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/outside_mobile.webp" width="150" alt="Outside: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/outside_en.webp" width="300" alt="Outside: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_rules.webp" width="300" alt="Outside: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="radar"></a>
#### 47. Radar · Radar (`radar`)

**L’indice dit où se trouve le plus grand.**

En plus des règles classiques, un nombre en dehors de la grille indique à quelle position (en comptant depuis cette extrémité) se trouve le plus grand chiffre (9 en 9×9) dans la ligne ou la colonne concernée.

<table><tr><td align="center"><img src="../../screens/radar_a.webp" width="300" alt="Radar: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 21 indices)</sub></td><td align="center"><img src="../../screens/radar_b.webp" width="300" alt="Radar: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 4 (ligne 3, col. 6) : c’est la seule case de la ligne marquée où 4 peut aller.
- **Code du même puzzle :** `radar-9-medium-2588350498` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_card.webp" width="200" alt="Radar: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/radar_fiche.webp" width="260" alt="Radar: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_s4.webp" width="200" alt="Radar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/radar_s6.webp" width="200" alt="Radar: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/radar_s9.webp" width="200" alt="Radar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_easy.webp" width="200" alt="Radar: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/radar_a.webp" width="200" alt="Radar: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/radar_hard.webp" width="200" alt="Radar: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_notes.webp" width="200" alt="Radar: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/radar_check.webp" width="200" alt="Radar: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/radar_solved.webp" width="200" alt="Radar: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_dark.webp" width="200" alt="Radar: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/radar_mobile.webp" width="150" alt="Radar: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/radar_en.webp" width="300" alt="Radar: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_rules.webp" width="300" alt="Radar: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="sandnum"></a>
#### 48. Sandwich numérique · Counting sandwich (`sandnum`)

**Combien de cases entre 1 et N.**

En plus des règles classiques, un nombre en dehors de la grille indique combien de cases se trouvent entre le chiffre 1 et le chiffre N (9 en 9×9) dans la ligne ou la colonne concernée.

<table><tr><td align="center"><img src="../../screens/sandnum_a.webp" width="300" alt="Sandwich numérique: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 19 indices)</sub></td><td align="center"><img src="../../screens/sandnum_b.webp" width="300" alt="Sandwich numérique: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 8 (ligne 6, col. 5) : c’est la seule case de la colonne marquée où 8 peut aller.
- **Code du même puzzle :** `sandnum-9-medium-2830514440` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 1802 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_card.webp" width="200" alt="Sandwich numérique: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_fiche.webp" width="260" alt="Sandwich numérique: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_s4.webp" width="200" alt="Sandwich numérique: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s6.webp" width="200" alt="Sandwich numérique: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s9.webp" width="200" alt="Sandwich numérique: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_easy.webp" width="200" alt="Sandwich numérique: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_a.webp" width="200" alt="Sandwich numérique: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_hard.webp" width="200" alt="Sandwich numérique: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_notes.webp" width="200" alt="Sandwich numérique: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_check.webp" width="200" alt="Sandwich numérique: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_solved.webp" width="200" alt="Sandwich numérique: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_dark.webp" width="200" alt="Sandwich numérique: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_mobile.webp" width="150" alt="Sandwich numérique: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_en.webp" width="300" alt="Sandwich numérique: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_rules.webp" width="300" alt="Sandwich numérique: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="sandpar"></a>
#### 49. Sandwich de parité · Parity sandwich (`sandpar`)

**Combien de chiffres impairs entre 1 et N.**

En plus des règles classiques, un nombre en dehors de la grille indique combien de chiffres impairs se trouvent entre 1 et N dans la ligne ou la colonne concernée.

<table><tr><td align="center"><img src="../../screens/sandpar_a.webp" width="300" alt="Sandwich de parité: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 19 indices)</sub></td><td align="center"><img src="../../screens/sandpar_b.webp" width="300" alt="Sandwich de parité: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 2 (ligne 5, col. 5) : aucune déduction directe ; le chiffre est tiré de la solution unique (il faudrait faire une hypothèse).
- **Code du même puzzle :** `sandpar-9-medium-3081747068` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 38 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_card.webp" width="200" alt="Sandwich de parité: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_fiche.webp" width="260" alt="Sandwich de parité: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_s6.webp" width="200" alt="Sandwich de parité: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_s9.webp" width="200" alt="Sandwich de parité: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_easy.webp" width="200" alt="Sandwich de parité: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_a.webp" width="200" alt="Sandwich de parité: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_hard.webp" width="200" alt="Sandwich de parité: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_notes.webp" width="200" alt="Sandwich de parité: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_check.webp" width="200" alt="Sandwich de parité: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_solved.webp" width="200" alt="Sandwich de parité: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_dark.webp" width="200" alt="Sandwich de parité: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_mobile.webp" width="150" alt="Sandwich de parité: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_en.webp" width="300" alt="Sandwich de parité: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_rules.webp" width="300" alt="Sandwich de parité: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="sand2"></a>
#### 50. Sandwich double · Double sandwich (`sand2`)

**Deux sommes : entre 1 et 9, entre 2 et 8.**

En plus des règles classiques, l’indice « a,b » en dehors de la grille signifie : a = somme des chiffres entre 1 et 9, b = somme des chiffres entre 2 et 8 dans la ligne ou la colonne concernée. Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/sand2_a.webp" width="300" alt="Sandwich double: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 16 indices)</sub></td><td align="center"><img src="../../screens/sand2_b.webp" width="300" alt="Sandwich double: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 8 (ligne 6, col. 9) : aucune déduction directe ; le chiffre est tiré de la solution unique (il faudrait faire une hypothèse).
- **Code du même puzzle :** `sand2-9-medium-1633059211` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 3778 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_card.webp" width="200" alt="Sandwich double: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sand2_fiche.webp" width="260" alt="Sandwich double: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_s9.webp" width="200" alt="Sandwich double: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_easy.webp" width="200" alt="Sandwich double: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/sand2_a.webp" width="200" alt="Sandwich double: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/sand2_hard.webp" width="200" alt="Sandwich double: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_notes.webp" width="200" alt="Sandwich double: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_check.webp" width="200" alt="Sandwich double: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_solved.webp" width="200" alt="Sandwich double: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_dark.webp" width="200" alt="Sandwich double: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/sand2_mobile.webp" width="150" alt="Sandwich double: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_en.webp" width="300" alt="Sandwich double: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_rules.webp" width="300" alt="Sandwich double: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="subsol"></a>
#### 51. Sous-sol · Basement (`subsol`)

**Comme les Gratte-ciel, mais avec les chiffres inversés.**

En plus des règles classiques, un nombre en dehors de la grille indique combien de fois, en regardant depuis cette extrémité, apparaît un chiffre plus petit que tous ceux qui le précèdent (le premier chiffre compte). C’est l’opposé des gratte-ciel : ici, on compte les minimums successifs. C’est les Gratte-ciel avec les chiffres inversés (d devient N+1−d), donc logiquement isomorphe à ceux-ci.

<table><tr><td align="center"><img src="../../screens/subsol_a.webp" width="300" alt="Sous-sol: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 16 indices)</sub></td><td align="center"><img src="../../screens/subsol_b.webp" width="300" alt="Sous-sol: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 8 (ligne 1, col. 4) : aucune déduction directe ; le chiffre est tiré de la solution unique (il faudrait faire une hypothèse).
- **Code du même puzzle :** `subsol-9-medium-2589656574` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 487 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_card.webp" width="200" alt="Sous-sol: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/subsol_fiche.webp" width="260" alt="Sous-sol: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_s4.webp" width="200" alt="Sous-sol: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s6.webp" width="200" alt="Sous-sol: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s9.webp" width="200" alt="Sous-sol: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_easy.webp" width="200" alt="Sous-sol: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/subsol_a.webp" width="200" alt="Sous-sol: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/subsol_hard.webp" width="200" alt="Sous-sol: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_notes.webp" width="200" alt="Sous-sol: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_check.webp" width="200" alt="Sous-sol: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_solved.webp" width="200" alt="Sous-sol: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_dark.webp" width="200" alt="Sous-sol: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/subsol_mobile.webp" width="150" alt="Sous-sol: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_en.webp" width="300" alt="Sous-sol: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_rules.webp" width="300" alt="Sous-sol: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="prodmargin"></a>
#### 52. Produit en marge · Edge product (`prodmargin`)

**Le produit des deux premiers chiffres.**

En plus des règles classiques, un nombre en dehors de la grille est le produit des deux premiers chiffres de la ligne ou de la colonne concernée, en regardant depuis cette extrémité.

<table><tr><td align="center"><img src="../../screens/prodmargin_a.webp" width="300" alt="Produit en marge: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/prodmargin_b.webp" width="300" alt="Produit en marge: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 1 (ligne 3, col. 8) : c’est la seule case de la ligne marquée où 1 peut aller.
- **Code du même puzzle :** `prodmargin-9-medium-3463419111` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 618 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_card.webp" width="200" alt="Produit en marge: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_fiche.webp" width="260" alt="Produit en marge: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_s4.webp" width="200" alt="Produit en marge: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s6.webp" width="200" alt="Produit en marge: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s9.webp" width="200" alt="Produit en marge: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_easy.webp" width="200" alt="Produit en marge: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_a.webp" width="200" alt="Produit en marge: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_hard.webp" width="200" alt="Produit en marge: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_notes.webp" width="200" alt="Produit en marge: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_check.webp" width="200" alt="Produit en marge: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_solved.webp" width="200" alt="Produit en marge: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_dark.webp" width="200" alt="Produit en marge: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_mobile.webp" width="150" alt="Produit en marge: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_en.webp" width="300" alt="Produit en marge: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_rules.webp" width="300" alt="Produit en marge: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="diffmargin"></a>
#### 53. Différence en marge · Edge difference (`diffmargin`)

**La différence des deux premiers chiffres.**

En plus des règles classiques, un nombre en dehors de la grille est la différence (en valeur absolue) entre les deux premiers chiffres de la ligne ou de la colonne concernée, en regardant depuis cette extrémité.

<table><tr><td align="center"><img src="../../screens/diffmargin_a.webp" width="300" alt="Différence en marge: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/diffmargin_b.webp" width="300" alt="Différence en marge: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 2 (ligne 6, col. 4) : c’est la seule case de la ligne marquée où 2 peut aller.
- **Code du même puzzle :** `diffmargin-9-medium-4161532716` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 313 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_card.webp" width="200" alt="Différence en marge: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_fiche.webp" width="260" alt="Différence en marge: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_s4.webp" width="200" alt="Différence en marge: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s6.webp" width="200" alt="Différence en marge: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s9.webp" width="200" alt="Différence en marge: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_easy.webp" width="200" alt="Différence en marge: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_a.webp" width="200" alt="Différence en marge: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_hard.webp" width="200" alt="Différence en marge: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_notes.webp" width="200" alt="Différence en marge: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_check.webp" width="200" alt="Différence en marge: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_solved.webp" width="200" alt="Différence en marge: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_dark.webp" width="200" alt="Différence en marge: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_mobile.webp" width="150" alt="Différence en marge: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_en.webp" width="300" alt="Différence en marge: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_rules.webp" width="300" alt="Différence en marge: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="ascents"></a>
#### 54. Montées · Ascents (`ascents`)

**Combien de paires voisines croissent.**

En plus des règles classiques, un nombre en dehors de la grille indique combien de fois, en regardant depuis cette extrémité, un chiffre est immédiatement suivi d’un chiffre plus grand.

<table><tr><td align="center"><img src="../../screens/ascents_a.webp" width="300" alt="Montées: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/ascents_b.webp" width="300" alt="Montées: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 9 (ligne 2, col. 3) : c’est la seule case de la colonne marquée où 9 peut aller.
- **Code du même puzzle :** `ascents-9-medium-1827630994` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 361 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_card.webp" width="200" alt="Montées: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/ascents_fiche.webp" width="260" alt="Montées: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_s4.webp" width="200" alt="Montées: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s6.webp" width="200" alt="Montées: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s9.webp" width="200" alt="Montées: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_easy.webp" width="200" alt="Montées: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/ascents_a.webp" width="200" alt="Montées: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/ascents_hard.webp" width="200" alt="Montées: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_notes.webp" width="200" alt="Montées: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_check.webp" width="200" alt="Montées: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_solved.webp" width="200" alt="Montées: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_dark.webp" width="200" alt="Montées: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/ascents_mobile.webp" width="150" alt="Montées: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_en.webp" width="300" alt="Montées: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_rules.webp" width="300" alt="Montées: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="inversions"></a>
#### 55. Inversions · Inversions (`inversions`)

**Combien de paires sont dans l’ordre inversé.**

En plus des règles classiques, un nombre en dehors de la grille est le nombre d’inversions de la ligne/colonne vue depuis cette extrémité : combien de paires de chiffres (pas forcément voisins) ont le premier plus grand que celui qui le suit.

<table><tr><td align="center"><img src="../../screens/inversions_a.webp" width="300" alt="Inversions: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/inversions_b.webp" width="300" alt="Inversions: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 7 (ligne 7, col. 6) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `inversions-9-medium-2138830078` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 62 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_card.webp" width="200" alt="Inversions: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/inversions_fiche.webp" width="260" alt="Inversions: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_s4.webp" width="200" alt="Inversions: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s6.webp" width="200" alt="Inversions: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s9.webp" width="200" alt="Inversions: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_easy.webp" width="200" alt="Inversions: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/inversions_a.webp" width="200" alt="Inversions: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/inversions_hard.webp" width="200" alt="Inversions: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_notes.webp" width="200" alt="Inversions: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_check.webp" width="200" alt="Inversions: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_solved.webp" width="200" alt="Inversions: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_dark.webp" width="200" alt="Inversions: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/inversions_mobile.webp" width="150" alt="Inversions: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_en.webp" width="300" alt="Inversions: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_rules.webp" width="300" alt="Inversions: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="cycles"></a>
#### 56. Cycles · Cycles (`cycles`)

**Combien de cycles a la permutation.**

En plus des règles classiques, la ligne/colonne lue depuis l’extrémité est une permutation (la position i porte le chiffre a_i). L’indice en dehors de la grille est le nombre de cycles de la permutation (la position i renvoie à la position a_i). Tailles 9×9 et 6×6.

<table><tr><td align="center"><img src="../../screens/cycles_a.webp" width="300" alt="Cycles: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/cycles_b.webp" width="300" alt="Cycles: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 4 (ligne 2, col. 6) : c’est la seule case de la région marquée où 4 peut aller.
- **Code du même puzzle :** `cycles-9-medium-708965529` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 562 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_card.webp" width="200" alt="Cycles: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cycles_fiche.webp" width="260" alt="Cycles: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_s6.webp" width="200" alt="Cycles: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/cycles_s9.webp" width="200" alt="Cycles: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_easy.webp" width="200" alt="Cycles: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/cycles_a.webp" width="200" alt="Cycles: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/cycles_hard.webp" width="200" alt="Cycles: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_notes.webp" width="200" alt="Cycles: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_check.webp" width="200" alt="Cycles: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_solved.webp" width="200" alt="Cycles: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_dark.webp" width="200" alt="Cycles: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/cycles_mobile.webp" width="150" alt="Cycles: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_en.webp" width="300" alt="Cycles: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_rules.webp" width="300" alt="Cycles: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="fixedpts"></a>
#### 57. Points fixes · Fixed points (`fixedpts`)

**Combien de chiffres sont à leur propre position.**

En plus des règles classiques, un nombre en dehors de la grille indique combien de chiffres se trouvent à la position égale à leur valeur (la deuxième case contient 2, etc.), en comptant depuis cette extrémité. Tailles 9×9 et 6×6.

<table><tr><td align="center"><img src="../../screens/fixedpts_a.webp" width="300" alt="Points fixes: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/fixedpts_b.webp" width="300" alt="Points fixes: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 3 (ligne 1, col. 8) : aucune déduction directe ; le chiffre est tiré de la solution unique (il faudrait faire une hypothèse).
- **Code du même puzzle :** `fixedpts-9-medium-3926317386` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 4802 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_card.webp" width="200" alt="Points fixes: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_fiche.webp" width="260" alt="Points fixes: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_s6.webp" width="200" alt="Points fixes: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_s9.webp" width="200" alt="Points fixes: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_easy.webp" width="200" alt="Points fixes: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_a.webp" width="200" alt="Points fixes: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_hard.webp" width="200" alt="Points fixes: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_notes.webp" width="200" alt="Points fixes: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_check.webp" width="200" alt="Points fixes: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_solved.webp" width="200" alt="Points fixes: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_dark.webp" width="200" alt="Points fixes: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_mobile.webp" width="150" alt="Points fixes: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_en.webp" width="300" alt="Points fixes: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_rules.webp" width="300" alt="Points fixes: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="altsum"></a>
#### 58. Somme alternée · Alternating sum (`altsum`)

**a₁ − a₂ + a₃ − …**

En plus des règles classiques, un nombre en dehors de la grille est la somme alternée des chiffres, en regardant depuis cette extrémité : le premier chiffre moins le deuxième plus le troisième, et ainsi de suite. Il peut être négatif. Tailles 9×9 et 6×6.

<table><tr><td align="center"><img src="../../screens/altsum_a.webp" width="300" alt="Somme alternée: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/altsum_b.webp" width="300" alt="Somme alternée: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 3 (ligne 9, col. 4) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `altsum-9-medium-1703080656` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 2188 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_card.webp" width="200" alt="Somme alternée: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/altsum_fiche.webp" width="260" alt="Somme alternée: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_s6.webp" width="200" alt="Somme alternée: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/altsum_s9.webp" width="200" alt="Somme alternée: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_easy.webp" width="200" alt="Somme alternée: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/altsum_a.webp" width="200" alt="Somme alternée: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/altsum_hard.webp" width="200" alt="Somme alternée: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_notes.webp" width="200" alt="Somme alternée: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_check.webp" width="200" alt="Somme alternée: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_solved.webp" width="200" alt="Somme alternée: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_dark.webp" width="200" alt="Somme alternée: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/altsum_mobile.webp" width="150" alt="Somme alternée: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_en.webp" width="300" alt="Somme alternée: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_rules.webp" width="300" alt="Somme alternée: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="dxsum"></a>
#### 59. Sommes en diagonale · Diagonal X-sums (`dxsum`)

**Les d premiers chiffres sur une diagonale, d = le premier chiffre.**

En plus des règles classiques, un indice à l’extrémité d’une diagonale (qui part de la case de bord) donne la somme des d premières cases de cette diagonale, où d est le premier chiffre qui s’y trouve ; si la diagonale a moins de d cases, on additionne toute la diagonale (comme pour les X-Sums, mais en diagonale). Tailles 9×9 et 6×6.

<table><tr><td align="center"><img src="../../screens/dxsum_a.webp" width="300" alt="Sommes en diagonale: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 18 indices)</sub></td><td align="center"><img src="../../screens/dxsum_b.webp" width="300" alt="Sommes en diagonale: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 1 (ligne 8, col. 8) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `dxsum-9-medium-391021028` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 256 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_card.webp" width="200" alt="Sommes en diagonale: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_fiche.webp" width="260" alt="Sommes en diagonale: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_s6.webp" width="200" alt="Sommes en diagonale: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_s9.webp" width="200" alt="Sommes en diagonale: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_easy.webp" width="200" alt="Sommes en diagonale: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_a.webp" width="200" alt="Sommes en diagonale: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_hard.webp" width="200" alt="Sommes en diagonale: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_notes.webp" width="200" alt="Sommes en diagonale: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_check.webp" width="200" alt="Sommes en diagonale: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_solved.webp" width="200" alt="Sommes en diagonale: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_dark.webp" width="200" alt="Sommes en diagonale: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_mobile.webp" width="150" alt="Sommes en diagonale: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_en.webp" width="300" alt="Sommes en diagonale: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_rules.webp" width="300" alt="Sommes en diagonale: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

