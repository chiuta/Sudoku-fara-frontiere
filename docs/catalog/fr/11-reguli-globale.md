# Catalogue : Règles globales (10)

[English](../en/11-reguli-globale.md) · [Română](../11-reguli-globale.md) · **Français** · [Italiano](../it/11-reguli-globale.md) · [Español](../es/11-reguli-globale.md) · [Português](../pt/11-reguli-globale.md) · [Deutsch](../de/11-reguli-globale.md) · [Magyar](../hu/11-reguli-globale.md)

[← README](../../../README.fr.md) · [Toutes les catégories](README.md)

[Taille et symboles](01-marime-si-simboluri.md) · [Régions et groupes](02-regiuni-si-grupuri.md) · [Voisins](03-vecini.md) · [Parité, points, signes](04-paritate-puncte-semne.md) · [Sommes](05-sume.md) · [Indices en marge](06-indicii-pe-margine.md) · [Lignes](07-linii.md) · [Grilles composées](08-grile-compuse.md) · [Variantes apparentées](09-rude-apropiate.md) · [Topologies et déplacements fairy](10-topologii-si-mutari-fairy.md) · **Règles globales** · [Indices dans les cases](12-indicii-in-celule.md) · [Dimensions supérieures](13-dimensiuni-superioare.md)

---


_La règle concerne toute la grille et, en général, n’a pas de marquages propres ; vérifiez-la avec « Vérifier » ou surveillez les conflits._

<a id="symcomp"></a>
#### 111. Symétrie complémentaire · Complementary symmetry (`symcomp`)

**Les cases symétriques par rapport au centre totalisent N+1.**

En plus des règles classiques, deux cases quelconques symétriques par rapport au centre de la grille (rotation de 180°) totalisent N+1 (en 9×9 : 10). La case centrale vaut donc 5. Tailles 9×9 et 4×4.

<table><tr><td align="center"><img src="../../screens/symcomp_a.webp" width="300" alt="Symétrie complémentaire: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/symcomp_b.webp" width="300" alt="Symétrie complémentaire: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 1 (ligne 5, col. 4) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `symcomp-9-medium-913346369` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_card.webp" width="200" alt="Symétrie complémentaire: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_fiche.webp" width="260" alt="Symétrie complémentaire: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_s4.webp" width="200" alt="Symétrie complémentaire: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_s9.webp" width="200" alt="Symétrie complémentaire: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_easy.webp" width="200" alt="Symétrie complémentaire: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_a.webp" width="200" alt="Symétrie complémentaire: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_hard.webp" width="200" alt="Symétrie complémentaire: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_notes.webp" width="200" alt="Symétrie complémentaire: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_check.webp" width="200" alt="Symétrie complémentaire: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_solved.webp" width="200" alt="Symétrie complémentaire: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_dark.webp" width="200" alt="Symétrie complémentaire: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_mobile.webp" width="150" alt="Symétrie complémentaire: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_en.webp" width="300" alt="Symétrie complémentaire: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_rules.webp" width="300" alt="Symétrie complémentaire: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="symparity"></a>
#### 112. Parité symétrique · Symmetric parity (`symparity`)

**Les cases symétriques par rapport au centre ont la même parité.**

En plus des règles classiques, deux cases quelconques symétriques par rapport au centre de la grille (rotation de 180°) sont toutes deux paires ou toutes deux impaires.

<table><tr><td align="center"><img src="../../screens/symparity_a.webp" width="300" alt="Parité symétrique: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 24 indices)</sub></td><td align="center"><img src="../../screens/symparity_b.webp" width="300" alt="Parité symétrique: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 5 (ligne 1, col. 1) : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.
- **Code du même puzzle :** `symparity-9-medium-2361855335` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_card.webp" width="200" alt="Parité symétrique: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symparity_fiche.webp" width="260" alt="Parité symétrique: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_s4.webp" width="200" alt="Parité symétrique: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s6.webp" width="200" alt="Parité symétrique: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s9.webp" width="200" alt="Parité symétrique: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_easy.webp" width="200" alt="Parité symétrique: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/symparity_a.webp" width="200" alt="Parité symétrique: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/symparity_hard.webp" width="200" alt="Parité symétrique: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_notes.webp" width="200" alt="Parité symétrique: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_check.webp" width="200" alt="Parité symétrique: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_solved.webp" width="200" alt="Parité symétrique: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_dark.webp" width="200" alt="Parité symétrique: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/symparity_mobile.webp" width="150" alt="Parité symétrique: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_en.webp" width="300" alt="Parité symétrique: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_rules.webp" width="300" alt="Parité symétrique: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="cgrav"></a>
#### 113. Centre de gravité · Centre of gravity (`cgrav`)

**Chaque ligne est en équilibre comme une balançoire.**

En plus des règles classiques, chaque ligne est en équilibre : si l’on numérote les positions −4…+4 et que chaque chiffre est un poids, la somme des poids × positions vaut 0 (le centre de gravité est exactement au milieu). Seulement en 9×9 ; la génération peut prendre quelques secondes en Facile et jusqu’à ~20 s en Difficile.

<table><tr><td align="center"><img src="../../screens/cgrav_a.webp" width="300" alt="Centre de gravité: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 26 indices)</sub></td><td align="center"><img src="../../screens/cgrav_b.webp" width="300" alt="Centre de gravité: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 4 (ligne 1, col. 7) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `cgrav-9-medium-1954301562` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_card.webp" width="200" alt="Centre de gravité: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_fiche.webp" width="260" alt="Centre de gravité: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_s9.webp" width="200" alt="Centre de gravité: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_easy.webp" width="200" alt="Centre de gravité: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_a.webp" width="200" alt="Centre de gravité: Moyen"><br><sub>Moyen</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_notes.webp" width="200" alt="Centre de gravité: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_check.webp" width="200" alt="Centre de gravité: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_solved.webp" width="200" alt="Centre de gravité: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_dark.webp" width="200" alt="Centre de gravité: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_mobile.webp" width="150" alt="Centre de gravité: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_en.webp" width="300" alt="Centre de gravité: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_rules.webp" width="300" alt="Centre de gravité: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="lexrows"></a>
#### 114. Lignes lexicographiques · Lexicographic rows (`lexrows`)

**Les lignes croissent comme des mots (première colonne : 1…N).**

En plus des règles classiques, en lisant les lignes de haut en bas comme des « mots » de chiffres, chaque ligne est strictement plus petite, dans l’ordre lexicographique, que celle du dessous (on compare le premier chiffre différent). Comme la première colonne contient des chiffres différents, la règle signifie en fait que la première colonne, lue de haut en bas, est 1, 2, …, N.

<table><tr><td align="center"><img src="../../screens/lexrows_a.webp" width="300" alt="Lignes lexicographiques: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/lexrows_b.webp" width="300" alt="Lignes lexicographiques: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 3 (ligne 7, col. 6) : c’est la seule case de la colonne marquée où 3 peut aller.
- **Code du même puzzle :** `lexrows-9-medium-957311172` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 1 embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_card.webp" width="200" alt="Lignes lexicographiques: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_fiche.webp" width="260" alt="Lignes lexicographiques: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_s4.webp" width="200" alt="Lignes lexicographiques: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s6.webp" width="200" alt="Lignes lexicographiques: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s9.webp" width="200" alt="Lignes lexicographiques: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_easy.webp" width="200" alt="Lignes lexicographiques: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_a.webp" width="200" alt="Lignes lexicographiques: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_hard.webp" width="200" alt="Lignes lexicographiques: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_notes.webp" width="200" alt="Lignes lexicographiques: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_check.webp" width="200" alt="Lignes lexicographiques: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_solved.webp" width="200" alt="Lignes lexicographiques: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_dark.webp" width="200" alt="Lignes lexicographiques: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_mobile.webp" width="150" alt="Lignes lexicographiques: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_en.webp" width="300" alt="Lignes lexicographiques: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_rules.webp" width="300" alt="Lignes lexicographiques: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="extremes"></a>
#### 115. Extrêmes adjacents · Touching extremes (`extremes`)

**Le minimum et le maximum du bloc se touchent.**

En plus des règles classiques, dans chaque bloc, les chiffres 1 et N sont dans des cases voisines, y compris en diagonale (déplacement du roi). La convention « y compris en diagonale » est choisie ici : avec des voisins seulement orthogonaux, il n’existe aucune grille 9×9 (vérifié de façon exhaustive).

<table><tr><td align="center"><img src="../../screens/extremes_a.webp" width="300" alt="Extrêmes adjacents: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/extremes_b.webp" width="300" alt="Extrêmes adjacents: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 6 (ligne 4, col. 4) : c’est la seule case de la colonne marquée où 6 peut aller.
- **Code du même puzzle :** `extremes-9-medium-1348183675` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 2 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_card.webp" width="200" alt="Extrêmes adjacents: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/extremes_fiche.webp" width="260" alt="Extrêmes adjacents: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_s4.webp" width="200" alt="Extrêmes adjacents: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s6.webp" width="200" alt="Extrêmes adjacents: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s9.webp" width="200" alt="Extrêmes adjacents: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_easy.webp" width="200" alt="Extrêmes adjacents: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/extremes_a.webp" width="200" alt="Extrêmes adjacents: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/extremes_hard.webp" width="200" alt="Extrêmes adjacents: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_notes.webp" width="200" alt="Extrêmes adjacents: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_check.webp" width="200" alt="Extrêmes adjacents: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_solved.webp" width="200" alt="Extrêmes adjacents: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_dark.webp" width="200" alt="Extrêmes adjacents: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/extremes_mobile.webp" width="150" alt="Extrêmes adjacents: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_en.webp" width="300" alt="Extrêmes adjacents: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_rules.webp" width="300" alt="Extrêmes adjacents: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="boxbalance"></a>
#### 116. Blocs équilibrés · Balanced boxes (`boxbalance`)

**La première et la dernière colonne du bloc ont la même somme.**

En plus des règles classiques, dans chaque bloc, la somme des chiffres de la colonne de gauche est égale à la somme de ceux de la colonne de droite.

<table><tr><td align="center"><img src="../../screens/boxbalance_a.webp" width="300" alt="Blocs équilibrés: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/boxbalance_b.webp" width="300" alt="Blocs équilibrés: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 6 (ligne 6, col. 4) : aucune déduction directe ; le chiffre est tiré de la solution unique (il faudrait faire une hypothèse).
- **Code du même puzzle :** `boxbalance-9-medium-1668427631` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 314 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_card.webp" width="200" alt="Blocs équilibrés: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_fiche.webp" width="260" alt="Blocs équilibrés: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_s4.webp" width="200" alt="Blocs équilibrés: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s6.webp" width="200" alt="Blocs équilibrés: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s9.webp" width="200" alt="Blocs équilibrés: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_easy.webp" width="200" alt="Blocs équilibrés: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_a.webp" width="200" alt="Blocs équilibrés: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_hard.webp" width="200" alt="Blocs équilibrés: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_notes.webp" width="200" alt="Blocs équilibrés: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_check.webp" width="200" alt="Blocs équilibrés: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_solved.webp" width="200" alt="Blocs équilibrés: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_dark.webp" width="200" alt="Blocs équilibrés: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_mobile.webp" width="150" alt="Blocs équilibrés: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_en.webp" width="300" alt="Blocs équilibrés: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_rules.webp" width="300" alt="Blocs équilibrés: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="lonely5"></a>
#### 117. Le 5 solitaire · Lonely 5 (`lonely5`)

**Un 5 n’a que des voisins pairs.**

En plus des règles classiques, tout 5 n’a que des voisins orthogonaux pairs. Tailles 9×9 et 6×6.

<table><tr><td align="center"><img src="../../screens/lonely5_a.webp" width="300" alt="Le 5 solitaire: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 24 indices)</sub></td><td align="center"><img src="../../screens/lonely5_b.webp" width="300" alt="Le 5 solitaire: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 2 (ligne 5, col. 3) : c’est la seule case de la ligne marquée où 2 peut aller.
- **Code du même puzzle :** `lonely5-9-medium-4284537212` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_card.webp" width="200" alt="Le 5 solitaire: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_fiche.webp" width="260" alt="Le 5 solitaire: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_s6.webp" width="200" alt="Le 5 solitaire: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_s9.webp" width="200" alt="Le 5 solitaire: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_easy.webp" width="200" alt="Le 5 solitaire: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_a.webp" width="200" alt="Le 5 solitaire: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_hard.webp" width="200" alt="Le 5 solitaire: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_notes.webp" width="200" alt="Le 5 solitaire: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_check.webp" width="200" alt="Le 5 solitaire: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_solved.webp" width="200" alt="Le 5 solitaire: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_dark.webp" width="200" alt="Le 5 solitaire: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_mobile.webp" width="150" alt="Le 5 solitaire: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_en.webp" width="300" alt="Le 5 solitaire: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_rules.webp" width="300" alt="Le 5 solitaire: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="nolonely"></a>
#### 118. Pas de cases isolées · No lonely cells (`nolonely`)

**Chaque case a un voisin consécutif.**

En plus des règles classiques, chaque case a au moins un voisin orthogonal dont le chiffre diffère d’exactement 1.

<table><tr><td align="center"><img src="../../screens/nolonely_a.webp" width="300" alt="Pas de cases isolées: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/nolonely_b.webp" width="300" alt="Pas de cases isolées: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 5 (ligne 9, col. 9) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `nolonely-9-medium-355818888` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_card.webp" width="200" alt="Pas de cases isolées: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_fiche.webp" width="260" alt="Pas de cases isolées: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_s4.webp" width="200" alt="Pas de cases isolées: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s6.webp" width="200" alt="Pas de cases isolées: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s9.webp" width="200" alt="Pas de cases isolées: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_easy.webp" width="200" alt="Pas de cases isolées: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_a.webp" width="200" alt="Pas de cases isolées: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_hard.webp" width="200" alt="Pas de cases isolées: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_notes.webp" width="200" alt="Pas de cases isolées: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_check.webp" width="200" alt="Pas de cases isolées: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_solved.webp" width="200" alt="Pas de cases isolées: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_dark.webp" width="200" alt="Pas de cases isolées: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_mobile.webp" width="150" alt="Pas de cases isolées: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_en.webp" width="300" alt="Pas de cases isolées: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_rules.webp" width="300" alt="Pas de cases isolées: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="noprog"></a>
#### 119. Pas de progressions · No arithmetic progressions (`noprog`)

**Trois chiffres adjacents ne forment pas une progression arithmétique.**

En plus des règles classiques, trois cases adjacentes sur une ligne ou une colonne ne peuvent pas former une progression arithmétique (par ex. 2-4-6 ou 7-5-3 sont interdits).

<table><tr><td align="center"><img src="../../screens/noprog_a.webp" width="300" alt="Pas de progressions: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 24 indices)</sub></td><td align="center"><img src="../../screens/noprog_b.webp" width="300" alt="Pas de progressions: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 2 (ligne 3, col. 7) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `noprog-9-medium-3644248957` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : 6 embranchements

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_card.webp" width="200" alt="Pas de progressions: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/noprog_fiche.webp" width="260" alt="Pas de progressions: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_s4.webp" width="200" alt="Pas de progressions: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s6.webp" width="200" alt="Pas de progressions: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s9.webp" width="200" alt="Pas de progressions: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_easy.webp" width="200" alt="Pas de progressions: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/noprog_a.webp" width="200" alt="Pas de progressions: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/noprog_hard.webp" width="200" alt="Pas de progressions: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_notes.webp" width="200" alt="Pas de progressions: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_check.webp" width="200" alt="Pas de progressions: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_solved.webp" width="200" alt="Pas de progressions: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_dark.webp" width="200" alt="Pas de progressions: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/noprog_mobile.webp" width="150" alt="Pas de progressions: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_en.webp" width="300" alt="Pas de progressions: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_rules.webp" width="300" alt="Pas de progressions: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

<a id="semimagic"></a>
#### 120. Blocs semi-magiques · Semi-magic boxes (`semimagic`)

**Les lignes de chaque bloc totalisent 15 ; les colonnes aussi.**

En plus des règles classiques, chaque ligne et chaque colonne de chaque bloc totalisent 15. Les blocs entièrement magiques (avec diagonales) sont impossibles, car les trois blocs d’une bande auraient tous leur centre 5 dans la même ligne de la grille ; c’est pourquoi les diagonales ne sont pas contraintes. Seulement en 9×9 (en 4×4, les lignes et les colonnes exigeraient des blocs avec des chiffres répétés).

<table><tr><td align="center"><img src="../../screens/semimagic_a.webp" width="300" alt="Blocs semi-magiques: puzzle de départ"><br><sub>Puzzle de départ (9×9 · moyen · 23 indices)</sub></td><td align="center"><img src="../../screens/semimagic_b.webp" width="300" alt="Blocs semi-magiques: après 4 étapes"><br><sub>Après 4 étapes de « Pas à pas »</sub></td></tr></table>

- **Dernière étape expliquée par l’application :** 8 (ligne 5, col. 5) : tous les autres chiffres apparaissent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).
- **Code du même puzzle :** `semimagic-9-medium-3291682902` (collez-le dans « Nouvelle partie → Code ») · effort du résolveur : sans embranchement

<details><summary><b>Galerie complète : tous les types de captures</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_card.webp" width="200" alt="Blocs semi-magiques: La carte dans l’Atlas"><br><sub>La carte dans l’Atlas</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_fiche.webp" width="260" alt="Blocs semi-magiques: La fiche (s’ouvre d’un clic sur la carte)"><br><sub>La fiche (s’ouvre d’un clic sur la carte)</sub></td></tr>
</table>

<p><b>Tailles (niveau moyen)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_s9.webp" width="200" alt="Blocs semi-magiques: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficulté</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_easy.webp" width="200" alt="Blocs semi-magiques: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_a.webp" width="200" alt="Blocs semi-magiques: Moyen"><br><sub>Moyen</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_hard.webp" width="200" alt="Blocs semi-magiques: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>États de jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_notes.webp" width="200" alt="Blocs semi-magiques: Notes auto (candidats)"><br><sub>Notes auto (candidats)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_check.webp" width="200" alt="Blocs semi-magiques: « Vérifier » avec un chiffre erroné (en rouge)"><br><sub>« Vérifier » avec un chiffre erroné (en rouge)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_solved.webp" width="200" alt="Blocs semi-magiques: La solution complète"><br><sub>La solution complète</sub></td></tr>
</table>

<p><b>Thèmes et appareils</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_dark.webp" width="200" alt="Blocs semi-magiques: Thème sombre"><br><sub>Thème sombre</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_mobile.webp" width="150" alt="Blocs semi-magiques: Téléphone (390 px)"><br><sub>Téléphone (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_en.webp" width="300" alt="Blocs semi-magiques: Interface en anglais"><br><sub>Interface en anglais</sub></td></tr>
</table>

<p><b>Panneau des règles dans le jeu</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_rules.webp" width="300" alt="Blocs semi-magiques: Les règles affichées à côté de la grille"><br><sub>Les règles affichées à côté de la grille</sub></td></tr>
</table>

</details>

