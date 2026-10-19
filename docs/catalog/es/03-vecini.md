# Catálogo: Vecinos (4)

[English](../en/03-vecini.md) · [Română](../03-vecini.md) · [Français](../fr/03-vecini.md) · [Italiano](../it/03-vecini.md) · **Español** · [Português](../pt/03-vecini.md) · [Deutsch](../de/03-vecini.md) · [Magyar](../hu/03-vecini.md)

[← README](../../../README.es.md) · [Todas las categorías](README.md)

[Tamaño y símbolos](01-marime-si-simboluri.md) · [Regiones y grupos](02-regiuni-si-grupuri.md) · **Vecinos** · [Paridad, puntos, signos](04-paritate-puncte-semne.md) · [Sumas](05-sume.md) · [Pistas en el borde](06-indicii-pe-margine.md) · [Líneas](07-linii.md) · [Cuadrículas compuestas](08-grile-compuse.md) · [Parientes cercanos](09-rude-apropiate.md) · [Topologías y saltos fairy](10-topologii-si-mutari-fairy.md) · [Reglas globales](11-reguli-globale.md) · [Pistas en las celdas](12-indicii-in-celule.md) · [Dimensiones superiores](13-dimensiuni-superioare.md)

---


_La regla indica qué celdas no pueden tener el mismo dígito o dígitos próximos; los conflictos se ven en rojo si «conflictos» está marcado._

<a id="antiknight"></a>
#### 16. Anti-caballo · Anti-knight (`antiknight`)

**Ningún dígito igual a un salto de caballo.**

Además de las reglas clásicas, dos celdas separadas por un salto de caballo de ajedrez no pueden contener el mismo dígito. Solo 9×9.

<table><tr><td align="center"><img src="../../screens/antiknight_a.webp" width="300" alt="Anti-caballo: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 24 dados)</sub></td><td align="center"><img src="../../screens/antiknight_b.webp" width="300" alt="Anti-caballo: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 4, col. 5): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `antiknight-9-medium-867238284` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_card.webp" width="200" alt="Anti-caballo: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_fiche.webp" width="260" alt="Anti-caballo: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_s9.webp" width="200" alt="Anti-caballo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_easy.webp" width="200" alt="Anti-caballo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_a.webp" width="200" alt="Anti-caballo: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_hard.webp" width="200" alt="Anti-caballo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_notes.webp" width="200" alt="Anti-caballo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_check.webp" width="200" alt="Anti-caballo: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_solved.webp" width="200" alt="Anti-caballo: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_dark.webp" width="200" alt="Anti-caballo: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_mobile.webp" width="150" alt="Anti-caballo: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_en.webp" width="300" alt="Anti-caballo: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_rules.webp" width="300" alt="Anti-caballo: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="antiking"></a>
#### 17. Anti-rey · Anti-king (`antiking`)

**Los vecinos diagonales difieren.**

Además de las reglas clásicas, dos celdas vecinas en diagonal (movimiento de rey) no pueden contener el mismo dígito. Solo 9×9.

<table><tr><td align="center"><img src="../../screens/antiking_a.webp" width="300" alt="Anti-rey: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 26 dados)</sub></td><td align="center"><img src="../../screens/antiking_b.webp" width="300" alt="Anti-rey: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 1, col. 2): es la única celda de la columna marcada donde puede ir el 2.
- **Código del mismo puzle:** `antiking-9-medium-1002649182` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_card.webp" width="200" alt="Anti-rey: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antiking_fiche.webp" width="260" alt="Anti-rey: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_s9.webp" width="200" alt="Anti-rey: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_easy.webp" width="200" alt="Anti-rey: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antiking_a.webp" width="200" alt="Anti-rey: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/antiking_hard.webp" width="200" alt="Anti-rey: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_notes.webp" width="200" alt="Anti-rey: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_check.webp" width="200" alt="Anti-rey: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_solved.webp" width="200" alt="Anti-rey: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_dark.webp" width="200" alt="Anti-rey: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/antiking_mobile.webp" width="150" alt="Anti-rey: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_en.webp" width="300" alt="Anti-rey: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_rules.webp" width="300" alt="Anti-rey: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="nonconsec"></a>
#### 18. Sin consecutivos · Non-consecutive (`nonconsec`)

**Los vecinos no son consecutivos.**

Además de las reglas clásicas, las celdas vecinas en horizontal o vertical no pueden contener dígitos consecutivos (p. ej., 4 junto a 5). 9×9 y 6×6.

<table><tr><td align="center"><img src="../../screens/nonconsec_a.webp" width="300" alt="Sin consecutivos: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 24 dados)</sub></td><td align="center"><img src="../../screens/nonconsec_b.webp" width="300" alt="Sin consecutivos: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 3, col. 5): es la única celda de la fila marcada donde puede ir el 6.
- **Código del mismo puzle:** `nonconsec-9-medium-749961353` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_card.webp" width="200" alt="Sin consecutivos: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_fiche.webp" width="260" alt="Sin consecutivos: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_s6.webp" width="200" alt="Sin consecutivos: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_s9.webp" width="200" alt="Sin consecutivos: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_easy.webp" width="200" alt="Sin consecutivos: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_a.webp" width="200" alt="Sin consecutivos: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_hard.webp" width="200" alt="Sin consecutivos: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_notes.webp" width="200" alt="Sin consecutivos: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_check.webp" width="200" alt="Sin consecutivos: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_solved.webp" width="200" alt="Sin consecutivos: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_dark.webp" width="200" alt="Sin consecutivos: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_mobile.webp" width="150" alt="Sin consecutivos: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_en.webp" width="300" alt="Sin consecutivos: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_rules.webp" width="300" alt="Sin consecutivos: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="miracle"></a>
#### 19. Milagro · Miracle (`miracle`)

**Anti-caballo + anti-rey + sin consecutivos.**

Las tres restricciones anteriores, a la vez. La variante es extremadamente restrictiva: los puzles tienen muy pocas pistas dadas.

<table><tr><td align="center"><img src="../../screens/miracle_a.webp" width="300" alt="Milagro: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 3 dados)</sub></td><td align="center"><img src="../../screens/miracle_b.webp" width="300" alt="Milagro: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 1 (fila 5, col. 4): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `miracle-9-medium-1546367855` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 113 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_card.webp" width="200" alt="Milagro: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/miracle_fiche.webp" width="260" alt="Milagro: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_s9.webp" width="200" alt="Milagro: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_easy.webp" width="200" alt="Milagro: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/miracle_a.webp" width="200" alt="Milagro: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/miracle_hard.webp" width="200" alt="Milagro: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_notes.webp" width="200" alt="Milagro: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_check.webp" width="200" alt="Milagro: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_solved.webp" width="200" alt="Milagro: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_dark.webp" width="200" alt="Milagro: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/miracle_mobile.webp" width="150" alt="Milagro: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_en.webp" width="300" alt="Milagro: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_rules.webp" width="300" alt="Milagro: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

