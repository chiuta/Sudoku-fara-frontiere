# Catalogue : Topologies et déplacements fairy (9)

[English](../en/10-topologii-si-mutari-fairy.md) · [Română](../10-topologii-si-mutari-fairy.md) · **Français** · [Italiano](../it/10-topologii-si-mutari-fairy.md) · [Español](../es/10-topologii-si-mutari-fairy.md) · [Português](../pt/10-topologii-si-mutari-fairy.md) · [Deutsch](../de/10-topologii-si-mutari-fairy.md) · [Magyar](../hu/10-topologii-si-mutari-fairy.md)

[← README](../../../README.fr.md) · [Toutes les catégories](README.md)

[Taille et symboles](01-marime-si-simboluri.md) · [Régions et groupes](02-regiuni-si-grupuri.md) · [Voisins](03-vecini.md) · [Parité, points, signes](04-paritate-puncte-semne.md) · [Sommes](05-sume.md) · [Indices en marge](06-indicii-pe-margine.md) · [Lignes](07-linii.md) · [Grilles composées](08-grile-compuse.md) · [Variantes apparentées](09-rude-apropiate.md) · **Topologies et déplacements fairy** · [Règles globales](11-reguli-globale.md) · [Indices dans les cases](12-indicii-in-celule.md) · [Dimensions supérieures](13-dimensiuni-superioare.md)

---


_Les bords de la grille se raccordent selon la règle de la variante ; une case du bord a aussi des voisines du côté opposé._

<a id="antibishop"></a>
#### 102. Anti-fou · Anti-alfil (`antibishop`)

**Pas de même chiffre à deux pas en diagonale.**

En plus des règles classiques, deux cases situées à exactement deux pas en diagonale (2 lignes et 2 colonnes d’écart, le déplacement de l’« alfil » des échecs féeriques) ne peuvent pas contenir le même chiffre. Ce n’est pas le fou glissant (celui-ci imposerait des diagonales entières) ; c’est seulement le saut de 2×2. Tailles 9×9 et 6×6.

<table><tr><td align="center"><img src="../../screens/antibishop_a.webp" width="300" alt="Anti-fou: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 26 indices)</sub></td><td align="center"><img src="../../screens/antibishop_b.webp" width="300" alt="Anti-fou: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 9 (ligne 7, col. 3) : c’est la seule case de la ligne marquée où 9 peut aller.
- **Code du même puzzle :** `antibishop-9-medium-4275501725` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 1 embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_card.webp" width="200" alt="Anti-fou: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_fiche.webp" width="260" alt="Anti-fou: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_s6.webp" width="200" alt="Anti-fou: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_s9.webp" width="200" alt="Anti-fou: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_easy.webp" width="200" alt="Anti-fou: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_a.webp" width="200" alt="Anti-fou: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_hard.webp" width="200" alt="Anti-fou: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_notes.webp" width="200" alt="Anti-fou: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_check.webp" width="200" alt="Anti-fou: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_solved.webp" width="200" alt="Anti-fou: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_dark.webp" width="200" alt="Anti-fou: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_mobile.webp" width="150" alt="Anti-fou: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_en.webp" width="300" alt="Anti-fou: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_rules.webp" width="300" alt="Anti-fou: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="anticamel"></a>
#### 103. Anti-chameau · Anti-camel (`anticamel`)

**Pas de même chiffre à un saut de chameau (1,3).**

En plus des règles classiques, deux cases séparées par un saut de chameau (1 ligne et 3 colonnes, ou 3 lignes et 1 colonne) ne peuvent pas contenir le même chiffre. Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/anticamel_a.webp" width="300" alt="Anti-chameau: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 26 indices)</sub></td><td align="center"><img src="../../screens/anticamel_b.webp" width="300" alt="Anti-chameau: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 7 (ligne 4, col. 5) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `anticamel-9-medium-634926365` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_card.webp" width="200" alt="Anti-chameau: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_fiche.webp" width="260" alt="Anti-chameau: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_s9.webp" width="200" alt="Anti-chameau: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_easy.webp" width="200" alt="Anti-chameau: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_a.webp" width="200" alt="Anti-chameau: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_hard.webp" width="200" alt="Anti-chameau: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_notes.webp" width="200" alt="Anti-chameau: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_check.webp" width="200" alt="Anti-chameau: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_solved.webp" width="200" alt="Anti-chameau: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_dark.webp" width="200" alt="Anti-chameau: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_mobile.webp" width="150" alt="Anti-chameau: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_en.webp" width="300" alt="Anti-chameau: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_rules.webp" width="300" alt="Anti-chameau: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="antizebra"></a>
#### 104. Anti-zèbre · Anti-zebra (`antizebra`)

**Pas de même chiffre à un saut de zèbre (2,3).**

En plus des règles classiques, deux cases séparées par un saut de zèbre (2 lignes et 3 colonnes, ou 3 lignes et 2 colonnes) ne peuvent pas contenir le même chiffre. Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/antizebra_a.webp" width="300" alt="Anti-zèbre: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 26 indices)</sub></td><td align="center"><img src="../../screens/antizebra_b.webp" width="300" alt="Anti-zèbre: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 5 (ligne 1, col. 3) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `antizebra-9-medium-439216389` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_card.webp" width="200" alt="Anti-zèbre: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_fiche.webp" width="260" alt="Anti-zèbre: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_s9.webp" width="200" alt="Anti-zèbre: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_easy.webp" width="200" alt="Anti-zèbre: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_a.webp" width="200" alt="Anti-zèbre: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_hard.webp" width="200" alt="Anti-zèbre: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_notes.webp" width="200" alt="Anti-zèbre: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_check.webp" width="200" alt="Anti-zèbre: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_solved.webp" width="200" alt="Anti-zèbre: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_dark.webp" width="200" alt="Anti-zèbre: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_mobile.webp" width="150" alt="Anti-zèbre: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_en.webp" width="300" alt="Anti-zèbre: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_rules.webp" width="300" alt="Anti-zèbre: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="torusking"></a>
#### 105. Tore anti-roi · Torus anti-king (`torusking`)

**Anti-roi sur une grille qui se referme comme un tore.**

La grille se prolonge sur les bords : le bord du haut se raccorde à celui du bas, la gauche à la droite. Deux cases voisines en diagonale (déplacement du roi), y compris par-dessus le bord, ne peuvent pas contenir le même chiffre (par ex. le coin en haut à gauche est voisin en diagonale de celui en bas à droite). Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/torusking_a.webp" width="300" alt="Tore anti-roi: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/torusking_b.webp" width="300" alt="Tore anti-roi: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 6 (ligne 5, col. 5) : c’est la seule case de la ligne marquée où 6 peut aller.
- **Code du même puzzle :** `torusking-9-medium-1622319202` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 17 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_card.webp" width="200" alt="Tore anti-roi: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/torusking_fiche.webp" width="260" alt="Tore anti-roi: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_s9.webp" width="200" alt="Tore anti-roi: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_easy.webp" width="200" alt="Tore anti-roi: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/torusking_a.webp" width="200" alt="Tore anti-roi: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/torusking_hard.webp" width="200" alt="Tore anti-roi: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_notes.webp" width="200" alt="Tore anti-roi: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_check.webp" width="200" alt="Tore anti-roi: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_solved.webp" width="200" alt="Tore anti-roi: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_dark.webp" width="200" alt="Tore anti-roi: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/torusking_mobile.webp" width="150" alt="Tore anti-roi: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_en.webp" width="300" alt="Tore anti-roi: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_rules.webp" width="300" alt="Tore anti-roi: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="torusknight"></a>
#### 106. Tore anti-cavalier · Torus anti-knight (`torusknight`)

**Anti-cavalier sur une grille qui se referme comme un tore.**

La grille se prolonge sur les bords (haut avec bas, gauche avec droite). Deux cases séparées par un saut de cavalier, y compris par-dessus le bord, ne peuvent pas contenir le même chiffre. Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/torusknight_a.webp" width="300" alt="Tore anti-cavalier: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/torusknight_b.webp" width="300" alt="Tore anti-cavalier: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 5 (ligne 3, col. 6) : c’est la seule case de la ligne marquée où 5 peut aller.
- **Code du même puzzle :** `torusknight-9-medium-2092083509` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_card.webp" width="200" alt="Tore anti-cavalier: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_fiche.webp" width="260" alt="Tore anti-cavalier: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_s9.webp" width="200" alt="Tore anti-cavalier: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_easy.webp" width="200" alt="Tore anti-cavalier: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_a.webp" width="200" alt="Tore anti-cavalier: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_hard.webp" width="200" alt="Tore anti-cavalier: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_notes.webp" width="200" alt="Tore anti-cavalier: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_check.webp" width="200" alt="Tore anti-cavalier: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_solved.webp" width="200" alt="Tore anti-cavalier: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_dark.webp" width="200" alt="Tore anti-cavalier: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_mobile.webp" width="150" alt="Tore anti-cavalier: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_en.webp" width="300" alt="Tore anti-cavalier: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_rules.webp" width="300" alt="Tore anti-cavalier: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="cylking"></a>
#### 107. Cylindre anti-roi · Cylinder anti-king (`cylking`)

**La gauche se raccorde à la droite ; le haut et le bas restent des bords.**

Le bord de gauche se raccorde à celui de droite, comme sur un cylindre ; le haut et le bas ne se raccordent pas. Deux cases séparées par un déplacement de roi (y compris par-dessus la jonction gauche–droite) ne peuvent pas contenir le même chiffre. Seulement en 9×9.

<table><tr><td align="center"><img src="../../screens/cylking_a.webp" width="300" alt="Cylindre anti-roi: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 24 indices)</sub></td><td align="center"><img src="../../screens/cylking_b.webp" width="300" alt="Cylindre anti-roi: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 8 (ligne 7, col. 5) : c’est la seule case de la ligne marquée où 8 peut aller.
- **Code du même puzzle :** `cylking-9-medium-3432982682` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 2 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_card.webp" width="200" alt="Cylindre anti-roi: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cylking_fiche.webp" width="260" alt="Cylindre anti-roi: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_s9.webp" width="200" alt="Cylindre anti-roi: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_easy.webp" width="200" alt="Cylindre anti-roi: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/cylking_a.webp" width="200" alt="Cylindre anti-roi: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/cylking_hard.webp" width="200" alt="Cylindre anti-roi: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_notes.webp" width="200" alt="Cylindre anti-roi: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_check.webp" width="200" alt="Cylindre anti-roi: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_solved.webp" width="200" alt="Cylindre anti-roi: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_dark.webp" width="200" alt="Cylindre anti-roi: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/cylking_mobile.webp" width="150" alt="Cylindre anti-roi: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_en.webp" width="300" alt="Cylindre anti-roi: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_rules.webp" width="300" alt="Cylindre anti-roi: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="mobiusking"></a>
#### 108. Möbius anti-roi · Möbius anti-king (`mobiusking`)

**La gauche se raccorde à la droite avec une torsion.**

Le bord de gauche se raccorde à celui de droite avec une torsion (la ligne r se relie à la ligne 10−r), comme un ruban de Möbius. Deux cases séparées par un déplacement de roi, y compris par-dessus la jonction, ne peuvent pas contenir le même chiffre. Seulement en 9×9. La convention de raccordement est celle décrite ici.

<table><tr><td align="center"><img src="../../screens/mobiusking_a.webp" width="300" alt="Möbius anti-roi: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/mobiusking_b.webp" width="300" alt="Möbius anti-roi: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 6 (ligne 5, col. 2) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `mobiusking-9-medium-3019619418` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 4 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_card.webp" width="200" alt="Möbius anti-roi: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_fiche.webp" width="260" alt="Möbius anti-roi: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_s9.webp" width="200" alt="Möbius anti-roi: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_easy.webp" width="200" alt="Möbius anti-roi: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_a.webp" width="200" alt="Möbius anti-roi: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_hard.webp" width="200" alt="Möbius anti-roi: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_notes.webp" width="200" alt="Möbius anti-roi: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_check.webp" width="200" alt="Möbius anti-roi: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_solved.webp" width="200" alt="Möbius anti-roi: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_dark.webp" width="200" alt="Möbius anti-roi: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_mobile.webp" width="150" alt="Möbius anti-roi: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_en.webp" width="300" alt="Möbius anti-roi: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_rules.webp" width="300" alt="Möbius anti-roi: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="kleinking"></a>
#### 109. Klein anti-roi · Klein anti-king (`kleinking`)

**Bouteille de Klein : gauche–droite avec torsion, haut–bas simple.**

Le bord de gauche se raccorde à celui de droite avec une torsion (la ligne r se relie à la ligne 10−r), et le haut se raccorde au bas sans torsion — une bouteille de Klein. Deux cases séparées par un déplacement de roi, y compris par-dessus les jonctions, ne peuvent pas contenir le même chiffre. Seulement en 9×9. La convention de raccordement est celle décrite ici.

<table><tr><td align="center"><img src="../../screens/kleinking_a.webp" width="300" alt="Klein anti-roi: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/kleinking_b.webp" width="300" alt="Klein anti-roi: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 8 (ligne 4, col. 8) : c’est la seule case de la ligne marquée où 8 peut aller.
- **Code du même puzzle :** `kleinking-9-medium-1542891122` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_card.webp" width="200" alt="Klein anti-roi: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_fiche.webp" width="260" alt="Klein anti-roi: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_s9.webp" width="200" alt="Klein anti-roi: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_easy.webp" width="200" alt="Klein anti-roi: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_a.webp" width="200" alt="Klein anti-roi: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_hard.webp" width="200" alt="Klein anti-roi: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_notes.webp" width="200" alt="Klein anti-roi: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_check.webp" width="200" alt="Klein anti-roi: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_solved.webp" width="200" alt="Klein anti-roi: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_dark.webp" width="200" alt="Klein anti-roi: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_mobile.webp" width="150" alt="Klein anti-roi: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_en.webp" width="300" alt="Klein anti-roi: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_rules.webp" width="300" alt="Klein anti-roi: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="projking"></a>
#### 110. Plan projectif anti-roi · Projective-plane anti-king (`projking`)

**Les deux paires de bords se raccordent avec torsion.**

La gauche se raccorde à la droite avec torsion (la ligne r avec 10−r) et le haut au bas avec torsion (la colonne c avec 10−c) : un plan projectif réel. Deux cases séparées par un déplacement de roi, y compris par-dessus les jonctions, ne peuvent pas contenir le même chiffre. Seulement en 9×9. La convention de raccordement est celle décrite ici.

<table><tr><td align="center"><img src="../../screens/projking_a.webp" width="300" alt="Plan projectif anti-roi: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/projking_b.webp" width="300" alt="Plan projectif anti-roi: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 1 (ligne 6, col. 6) : c’est la seule case de la ligne marquée où 1 peut aller.
- **Code du même puzzle :** `projking-9-medium-1483663755` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_card.webp" width="200" alt="Plan projectif anti-roi: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/projking_fiche.webp" width="260" alt="Plan projectif anti-roi: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_s9.webp" width="200" alt="Plan projectif anti-roi: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_easy.webp" width="200" alt="Plan projectif anti-roi: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/projking_a.webp" width="200" alt="Plan projectif anti-roi: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/projking_hard.webp" width="200" alt="Plan projectif anti-roi: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_notes.webp" width="200" alt="Plan projectif anti-roi: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/projking_check.webp" width="200" alt="Plan projectif anti-roi: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/projking_solved.webp" width="200" alt="Plan projectif anti-roi: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_dark.webp" width="200" alt="Plan projectif anti-roi: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/projking_mobile.webp" width="150" alt="Plan projectif anti-roi: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/projking_en.webp" width="300" alt="Plan projectif anti-roi: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_rules.webp" width="300" alt="Plan projectif anti-roi: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

