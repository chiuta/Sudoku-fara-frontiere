# Catalogue : Voisins (4)

[English](../en/03-vecini.md) · [Română](../03-vecini.md) · **Français** · [Italiano](../it/03-vecini.md) · [Español](../es/03-vecini.md) · [Português](../pt/03-vecini.md) · [Deutsch](../de/03-vecini.md) · [Magyar](../hu/03-vecini.md)

[← README](../../../README.fr.md) · [Toutes les catégories](README.md)

[Taille et symboles](01-marime-si-simboluri.md) · [Régions et groupes](02-regiuni-si-grupuri.md) · **Voisins** · [Parité, points, signes](04-paritate-puncte-semne.md) · [Sommes](05-sume.md) · [Indices en marge](06-indicii-pe-margine.md) · [Lignes](07-linii.md) · [Grilles composées](08-grile-compuse.md) · [Variantes apparentées](09-rude-apropiate.md) · [Topologies et déplacements fairy](10-topologii-si-mutari-fairy.md) · [Règles globales](11-reguli-globale.md) · [Indices dans les cases](12-indicii-in-celule.md) · [Dimensions supérieures](13-dimensiuni-superioare.md)

---


_La règle dit quelles cases ne peuvent pas avoir le même chiffre ou des chiffres proches ; les conflits apparaissent en rouge si « conflits » est coché._

<a id="antiknight"></a>
#### 16. Anti-cavalier · Anti-knight (`antiknight`)

**Pas de même chiffre à un saut de cavalier.**

En plus des règles classiques, deux cases séparées par un saut de cavalier des échecs ne peuvent pas contenir le même chiffre. Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/antiknight_a.webp" width="300" alt="Anti-cavalier: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 24 indices)</sub></td><td align="center"><img src="../../screens/antiknight_b.webp" width="300" alt="Anti-cavalier: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 6 (ligne 4, col. 5) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `antiknight-9-medium-867238284` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_card.webp" width="200" alt="Anti-cavalier: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_fiche.webp" width="260" alt="Anti-cavalier: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_s9.webp" width="200" alt="Anti-cavalier: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_easy.webp" width="200" alt="Anti-cavalier: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_a.webp" width="200" alt="Anti-cavalier: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_hard.webp" width="200" alt="Anti-cavalier: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_notes.webp" width="200" alt="Anti-cavalier: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_check.webp" width="200" alt="Anti-cavalier: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_solved.webp" width="200" alt="Anti-cavalier: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_dark.webp" width="200" alt="Anti-cavalier: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_mobile.webp" width="150" alt="Anti-cavalier: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_en.webp" width="300" alt="Anti-cavalier: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_rules.webp" width="300" alt="Anti-cavalier: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="antiking"></a>
#### 17. Anti-roi · Anti-king (`antiking`)

**Les voisins en diagonale sont différents.**

En plus des règles classiques, deux cases voisines en diagonale (déplacement du roi) ne peuvent pas contenir le même chiffre. Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/antiking_a.webp" width="300" alt="Anti-roi: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 26 indices)</sub></td><td align="center"><img src="../../screens/antiking_b.webp" width="300" alt="Anti-roi: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 2 (ligne 1, col. 2) : c’est la seule case de la colonne marquée où 2 peut aller.
- **Code du même puzzle :** `antiking-9-medium-1002649182` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_card.webp" width="200" alt="Anti-roi: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antiking_fiche.webp" width="260" alt="Anti-roi: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_s9.webp" width="200" alt="Anti-roi: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_easy.webp" width="200" alt="Anti-roi: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/antiking_a.webp" width="200" alt="Anti-roi: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/antiking_hard.webp" width="200" alt="Anti-roi: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_notes.webp" width="200" alt="Anti-roi: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_check.webp" width="200" alt="Anti-roi: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_solved.webp" width="200" alt="Anti-roi: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_dark.webp" width="200" alt="Anti-roi: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/antiking_mobile.webp" width="150" alt="Anti-roi: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_en.webp" width="300" alt="Anti-roi: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_rules.webp" width="300" alt="Anti-roi: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="nonconsec"></a>
#### 18. Sans consécutifs · Non-consecutive (`nonconsec`)

**Les voisins ne sont pas consécutifs.**

En plus des règles classiques, les cases voisines à l’horizontale ou à la verticale ne peuvent pas contenir des chiffres consécutifs (par ex. 4 à côté de 5). 9×9 et 6×6.

<table><tr><td align="center"><img src="../../screens/nonconsec_a.webp" width="300" alt="Sans consécutifs: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 24 indices)</sub></td><td align="center"><img src="../../screens/nonconsec_b.webp" width="300" alt="Sans consécutifs: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 6 (ligne 3, col. 5) : c’est la seule case de la ligne marquée où 6 peut aller.
- **Code du même puzzle :** `nonconsec-9-medium-749961353` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_card.webp" width="200" alt="Sans consécutifs: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_fiche.webp" width="260" alt="Sans consécutifs: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_s6.webp" width="200" alt="Sans consécutifs: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_s9.webp" width="200" alt="Sans consécutifs: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_easy.webp" width="200" alt="Sans consécutifs: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_a.webp" width="200" alt="Sans consécutifs: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_hard.webp" width="200" alt="Sans consécutifs: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_notes.webp" width="200" alt="Sans consécutifs: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_check.webp" width="200" alt="Sans consécutifs: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_solved.webp" width="200" alt="Sans consécutifs: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_dark.webp" width="200" alt="Sans consécutifs: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_mobile.webp" width="150" alt="Sans consécutifs: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_en.webp" width="300" alt="Sans consécutifs: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_rules.webp" width="300" alt="Sans consécutifs: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="miracle"></a>
#### 19. Miracle · Miracle (`miracle`)

**Anti-cavalier + anti-roi + sans consécutifs.**

Les trois restrictions ci-dessus, simultanément. La variante est extrêmement contraignante : les puzzles ont très peu d’indices donnés.

<table><tr><td align="center"><img src="../../screens/miracle_a.webp" width="300" alt="Miracle: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 3 indices)</sub></td><td align="center"><img src="../../screens/miracle_b.webp" width="300" alt="Miracle: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 1 (ligne 5, col. 4) : aucune déduction directe ; le chiffre est tiré de la solution unique (il faudrait faire une hypothèse).
- **Code du même puzzle :** `miracle-9-medium-1546367855` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 113 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_card.webp" width="200" alt="Miracle: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/miracle_fiche.webp" width="260" alt="Miracle: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_s9.webp" width="200" alt="Miracle: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_easy.webp" width="200" alt="Miracle: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/miracle_a.webp" width="200" alt="Miracle: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/miracle_hard.webp" width="200" alt="Miracle: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_notes.webp" width="200" alt="Miracle: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_check.webp" width="200" alt="Miracle: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_solved.webp" width="200" alt="Miracle: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_dark.webp" width="200" alt="Miracle: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/miracle_mobile.webp" width="150" alt="Miracle: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_en.webp" width="300" alt="Miracle: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_rules.webp" width="300" alt="Miracle: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

