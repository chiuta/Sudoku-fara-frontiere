# Catálogo: Pistas en las celdas (11)

[English](../en/12-indicii-in-celule.md) · [Română](../12-indicii-in-celule.md) · [Français](../fr/12-indicii-in-celule.md) · [Italiano](../it/12-indicii-in-celule.md) · **Español** · [Português](../pt/12-indicii-in-celule.md) · [Deutsch](../de/12-indicii-in-celule.md) · [Magyar](../hu/12-indicii-in-celule.md)

[← README](../../../README.es.md) · [Todas las categorías](README.md)

[Tamaño y símbolos](01-marime-si-simboluri.md) · [Regiones y grupos](02-regiuni-si-grupuri.md) · [Vecinos](03-vecini.md) · [Paridad, puntos, signos](04-paritate-puncte-semne.md) · [Sumas](05-sume.md) · [Pistas en el borde](06-indicii-pe-margine.md) · [Líneas](07-linii.md) · [Cuadrículas compuestas](08-grile-compuse.md) · [Parientes cercanos](09-rude-apropiate.md) · [Topologías y saltos fairy](10-topologii-si-mutari-fairy.md) · [Reglas globales](11-reguli-globale.md) · **Pistas en las celdas** · [Dimensiones superiores](13-dimensiuni-superioare.md)

---


_Pistas dibujadas directamente en las celdas o en grupos de celdas; consulta la ficha para el significado de cada signo._

<a id="relief"></a>
#### 121. Relieve · Relief (`relief`)

**Cuántas vecinas son menores.**

Además de las reglas clásicas, un número en una celda marcada indica cuántas de las cuatro vecinas ortogonales contienen un dígito menor que el dígito de esa celda. El dígito de la celda queda por averiguar.

<table><tr><td align="center"><img src="../../screens/relief_a.webp" width="300" alt="Relieve: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/relief_b.webp" width="300" alt="Relieve: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 1, col. 2): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `relief-9-medium-2696294536` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 56 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_card.webp" width="200" alt="Relieve: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/relief_fiche.webp" width="260" alt="Relieve: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_s4.webp" width="200" alt="Relieve: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/relief_s6.webp" width="200" alt="Relieve: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/relief_s9.webp" width="200" alt="Relieve: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_easy.webp" width="200" alt="Relieve: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/relief_a.webp" width="200" alt="Relieve: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/relief_hard.webp" width="200" alt="Relieve: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_notes.webp" width="200" alt="Relieve: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/relief_check.webp" width="200" alt="Relieve: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/relief_solved.webp" width="200" alt="Relieve: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_dark.webp" width="200" alt="Relieve: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/relief_mobile.webp" width="150" alt="Relieve: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/relief_en.webp" width="300" alt="Relieve: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/relief_rules.webp" width="300" alt="Relieve: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="oddsweeper"></a>
#### 122. Minas impares · Odd-sweeper (`oddsweeper`)

**Cuántas de las 8 vecinas son impares.**

Además de las reglas clásicas, un número en una celda marcada indica cuántas de las ocho vecinas (diagonales incluidas) contienen dígitos impares, como en un juego de buscaminas. El dígito de la celda queda por averiguar.

<table><tr><td align="center"><img src="../../screens/oddsweeper_a.webp" width="300" alt="Minas impares: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/oddsweeper_b.webp" width="300" alt="Minas impares: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 4 (fila 8, col. 3): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `oddsweeper-9-medium-964916310` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 1219 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_card.webp" width="200" alt="Minas impares: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_fiche.webp" width="260" alt="Minas impares: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_s4.webp" width="200" alt="Minas impares: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_s6.webp" width="200" alt="Minas impares: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_s9.webp" width="200" alt="Minas impares: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_easy.webp" width="200" alt="Minas impares: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_a.webp" width="200" alt="Minas impares: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_hard.webp" width="200" alt="Minas impares: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_notes.webp" width="200" alt="Minas impares: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_check.webp" width="200" alt="Minas impares: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_solved.webp" width="200" alt="Minas impares: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_dark.webp" width="200" alt="Minas impares: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_mobile.webp" width="150" alt="Minas impares: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/oddsweeper_en.webp" width="300" alt="Minas impares: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/oddsweeper_rules.webp" width="300" alt="Minas impares: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="compass"></a>
#### 123. Brújula · Compass (`compass`)

**La flecha apunta a la vecina mayor.**

Además de las reglas clásicas, una flecha en una celda marcada apunta a la mayor de sus ocho vecinas (estrictamente mayor que todas las demás vecinas). El dígito de la propia celda no se compara; en el borde solo cuentan las vecinas que existen.

<table><tr><td align="center"><img src="../../screens/compass_a.webp" width="300" alt="Brújula: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/compass_b.webp" width="300" alt="Brújula: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 1 (fila 8, col. 5): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `compass-9-medium-1055457902` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 1321 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_card.webp" width="200" alt="Brújula: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/compass_fiche.webp" width="260" alt="Brújula: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_s4.webp" width="200" alt="Brújula: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/compass_s6.webp" width="200" alt="Brújula: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/compass_s9.webp" width="200" alt="Brújula: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_easy.webp" width="200" alt="Brújula: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/compass_a.webp" width="200" alt="Brújula: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/compass_hard.webp" width="200" alt="Brújula: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_notes.webp" width="200" alt="Brújula: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/compass_check.webp" width="200" alt="Brújula: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/compass_solved.webp" width="200" alt="Brújula: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_dark.webp" width="200" alt="Brújula: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/compass_mobile.webp" width="150" alt="Brújula: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/compass_en.webp" width="300" alt="Brújula: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/compass_rules.webp" width="300" alt="Brújula: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="quadsum"></a>
#### 124. Suma en el cuadrado · Quad sum (`quadsum`)

**Suma de un bloque 2×2.**

Además de las reglas clásicas, un número en la intersección de cuatro celdas es la suma de los cuatro dígitos (los dígitos pueden repetirse, porque el bloque puede tocar dos o cuatro cajas).

<table><tr><td align="center"><img src="../../screens/quadsum_a.webp" width="300" alt="Suma en el cuadrado: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/quadsum_b.webp" width="300" alt="Suma en el cuadrado: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 1, col. 2): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `quadsum-9-medium-3898620671` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_card.webp" width="200" alt="Suma en el cuadrado: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_fiche.webp" width="260" alt="Suma en el cuadrado: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_s4.webp" width="200" alt="Suma en el cuadrado: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_s6.webp" width="200" alt="Suma en el cuadrado: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_s9.webp" width="200" alt="Suma en el cuadrado: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_easy.webp" width="200" alt="Suma en el cuadrado: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_a.webp" width="200" alt="Suma en el cuadrado: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_hard.webp" width="200" alt="Suma en el cuadrado: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_notes.webp" width="200" alt="Suma en el cuadrado: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_check.webp" width="200" alt="Suma en el cuadrado: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_solved.webp" width="200" alt="Suma en el cuadrado: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_dark.webp" width="200" alt="Suma en el cuadrado: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_mobile.webp" width="150" alt="Suma en el cuadrado: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/quadsum_en.webp" width="300" alt="Suma en el cuadrado: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/quadsum_rules.webp" width="300" alt="Suma en el cuadrado: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="stone"></a>
#### 125. Piedra 2×2 · Stone 2×2 (`stone`)

**Cuatro dígitos distintos en un bloque.**

Además de las reglas clásicas, en cada bloque 2×2 marcado con un cuadrado los cuatro dígitos son todos distintos. Las marcas aparecen solo en bloques que tocan al menos dos cajas; un bloque sin marcar puede tener o no dígitos distintos.

<table><tr><td align="center"><img src="../../screens/stone_a.webp" width="300" alt="Piedra 2×2: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/stone_b.webp" width="300" alt="Piedra 2×2: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 9, col. 5): es la única celda de la columna marcada donde puede ir el 6.
- **Código del mismo puzle:** `stone-9-medium-1062674283` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 7 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_card.webp" width="200" alt="Piedra 2×2: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/stone_fiche.webp" width="260" alt="Piedra 2×2: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_s4.webp" width="200" alt="Piedra 2×2: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/stone_s6.webp" width="200" alt="Piedra 2×2: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/stone_s9.webp" width="200" alt="Piedra 2×2: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_easy.webp" width="200" alt="Piedra 2×2: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/stone_a.webp" width="200" alt="Piedra 2×2: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/stone_hard.webp" width="200" alt="Piedra 2×2: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_notes.webp" width="200" alt="Piedra 2×2: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/stone_check.webp" width="200" alt="Piedra 2×2: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/stone_solved.webp" width="200" alt="Piedra 2×2: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_dark.webp" width="200" alt="Piedra 2×2: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/stone_mobile.webp" width="150" alt="Piedra 2×2: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/stone_en.webp" width="300" alt="Piedra 2×2: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/stone_rules.webp" width="300" alt="Piedra 2×2: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="domino"></a>
#### 126. Dominó · Domino (`domino`)

**Ficha de dos celdas con dígitos dados.**

Además de las reglas clásicas, una ficha de dominó cubre dos celdas vecinas e indica qué dos dígitos contienen (en cualquier orden). La definición elegida aquí es la más simple; las fuentes difieren.

<table><tr><td align="center"><img src="../../screens/domino_a.webp" width="300" alt="Dominó: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/domino_b.webp" width="300" alt="Dominó: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 1, col. 3): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `domino-9-medium-2561228437` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_card.webp" width="200" alt="Dominó: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/domino_fiche.webp" width="260" alt="Dominó: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_s4.webp" width="200" alt="Dominó: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/domino_s6.webp" width="200" alt="Dominó: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/domino_s9.webp" width="200" alt="Dominó: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_easy.webp" width="200" alt="Dominó: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/domino_a.webp" width="200" alt="Dominó: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/domino_hard.webp" width="200" alt="Dominó: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_notes.webp" width="200" alt="Dominó: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/domino_check.webp" width="200" alt="Dominó: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/domino_solved.webp" width="200" alt="Dominó: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_dark.webp" width="200" alt="Dominó: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/domino_mobile.webp" width="150" alt="Dominó: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/domino_en.webp" width="300" alt="Dominó: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/domino_rules.webp" width="300" alt="Dominó: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="pillsq"></a>
#### 127. Píldora de cuadrado perfecto · Perfect-square pill (`pillsq`)

**Dos dígitos leídos forman un cuadrado perfecto.**

Además de las reglas clásicas, una píldora cubre dos celdas vecinas; el número de dos dígitos leído en el sentido de la flecha es un cuadrado perfecto (16, 25, 36, 49, 64 u 81). Solo 9×9.

<table><tr><td align="center"><img src="../../screens/pillsq_a.webp" width="300" alt="Píldora de cuadrado perfecto: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 19 dados)</sub></td><td align="center"><img src="../../screens/pillsq_b.webp" width="300" alt="Píldora de cuadrado perfecto: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 9 (fila 1, col. 7): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `pillsq-9-medium-2681486728` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_card.webp" width="200" alt="Píldora de cuadrado perfecto: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_fiche.webp" width="260" alt="Píldora de cuadrado perfecto: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_s9.webp" width="200" alt="Píldora de cuadrado perfecto: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_easy.webp" width="200" alt="Píldora de cuadrado perfecto: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_a.webp" width="200" alt="Píldora de cuadrado perfecto: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_hard.webp" width="200" alt="Píldora de cuadrado perfecto: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_notes.webp" width="200" alt="Píldora de cuadrado perfecto: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_check.webp" width="200" alt="Píldora de cuadrado perfecto: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_solved.webp" width="200" alt="Píldora de cuadrado perfecto: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_dark.webp" width="200" alt="Píldora de cuadrado perfecto: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_mobile.webp" width="150" alt="Píldora de cuadrado perfecto: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/pillsq_en.webp" width="300" alt="Píldora de cuadrado perfecto: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/pillsq_rules.webp" width="300" alt="Píldora de cuadrado perfecto: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="primecage"></a>
#### 128. Jaula prima · Prime cage (`primecage`)

**Dígitos distintos con suma número primo.**

Además de las reglas clásicas, los dígitos de cada jaula punteada son distintos y su suma es un número primo (la suma no se muestra; las jaulas están marcadas con P).

<table><tr><td align="center"><img src="../../screens/primecage_a.webp" width="300" alt="Jaula prima: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 24 dados)</sub></td><td align="center"><img src="../../screens/primecage_b.webp" width="300" alt="Jaula prima: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 2, col. 9): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `primecage-9-medium-4252411907` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 3 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_card.webp" width="200" alt="Jaula prima: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/primecage_fiche.webp" width="260" alt="Jaula prima: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_s6.webp" width="200" alt="Jaula prima: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/primecage_s9.webp" width="200" alt="Jaula prima: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_easy.webp" width="200" alt="Jaula prima: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/primecage_a.webp" width="200" alt="Jaula prima: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/primecage_hard.webp" width="200" alt="Jaula prima: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_notes.webp" width="200" alt="Jaula prima: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/primecage_check.webp" width="200" alt="Jaula prima: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/primecage_solved.webp" width="200" alt="Jaula prima: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_dark.webp" width="200" alt="Jaula prima: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/primecage_mobile.webp" width="150" alt="Jaula prima: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/primecage_en.webp" width="300" alt="Jaula prima: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/primecage_rules.webp" width="300" alt="Jaula prima: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="balcage"></a>
#### 129. Jaula equilibrada · Balanced cage (`balcage`)

**La suma es igual al producto.**

Además de las reglas clásicas, en cada jaula marcada con Σ=Π la suma de los dígitos es igual a su producto (los dígitos pueden repetirse; p. ej., 1+2+3 = 1·2·3).

<table><tr><td align="center"><img src="../../screens/balcage_a.webp" width="300" alt="Jaula equilibrada: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/balcage_b.webp" width="300" alt="Jaula equilibrada: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 5, col. 2): es la única celda de la fila marcada donde puede ir el 2.
- **Código del mismo puzle:** `balcage-9-medium-2755606647` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 223 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_card.webp" width="200" alt="Jaula equilibrada: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/balcage_fiche.webp" width="260" alt="Jaula equilibrada: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_s6.webp" width="200" alt="Jaula equilibrada: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/balcage_s9.webp" width="200" alt="Jaula equilibrada: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_easy.webp" width="200" alt="Jaula equilibrada: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/balcage_a.webp" width="200" alt="Jaula equilibrada: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/balcage_hard.webp" width="200" alt="Jaula equilibrada: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_notes.webp" width="200" alt="Jaula equilibrada: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/balcage_check.webp" width="200" alt="Jaula equilibrada: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/balcage_solved.webp" width="200" alt="Jaula equilibrada: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_dark.webp" width="200" alt="Jaula equilibrada: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/balcage_mobile.webp" width="150" alt="Jaula equilibrada: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/balcage_en.webp" width="300" alt="Jaula equilibrada: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/balcage_rules.webp" width="300" alt="Jaula equilibrada: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="doubler"></a>
#### 130. Duplicadores · Doublers (`doubler`)

**Killer en el que algunas celdas cuentan doble.**

Como en Killer (dígitos distintos en la jaula, suma dada), pero una celda de la jaula marcada con ×2 se suma dos veces.

<table><tr><td align="center"><img src="../../screens/doubler_a.webp" width="300" alt="Duplicadores: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 10 dados)</sub></td><td align="center"><img src="../../screens/doubler_b.webp" width="300" alt="Duplicadores: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 5 (fila 1, col. 4): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `doubler-9-medium-2563509363` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_card.webp" width="200" alt="Duplicadores: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/doubler_fiche.webp" width="260" alt="Duplicadores: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_s4.webp" width="200" alt="Duplicadores: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/doubler_s6.webp" width="200" alt="Duplicadores: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/doubler_s9.webp" width="200" alt="Duplicadores: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_easy.webp" width="200" alt="Duplicadores: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/doubler_a.webp" width="200" alt="Duplicadores: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/doubler_hard.webp" width="200" alt="Duplicadores: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_notes.webp" width="200" alt="Duplicadores: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/doubler_check.webp" width="200" alt="Duplicadores: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/doubler_solved.webp" width="200" alt="Duplicadores: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_dark.webp" width="200" alt="Duplicadores: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/doubler_mobile.webp" width="150" alt="Duplicadores: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/doubler_en.webp" width="300" alt="Duplicadores: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/doubler_rules.webp" width="300" alt="Duplicadores: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="clonemir"></a>
#### 131. Clones en espejo · Mirror clone (`clonemir`)

**Dos formas idénticas, la segunda en espejo.**

Además de las reglas clásicas, las zonas coloreadas marcadas con la misma letra tienen la misma forma, estando la segunda invertida izquierda–derecha; las celdas correspondientes contienen el mismo dígito.

<table><tr><td align="center"><img src="../../screens/clonemir_a.webp" width="300" alt="Clones en espejo: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 26 dados)</sub></td><td align="center"><img src="../../screens/clonemir_b.webp" width="300" alt="Clones en espejo: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 9 (fila 2, col. 4): es la única celda de la fila marcada donde puede ir el 9.
- **Código del mismo puzle:** `clonemir-9-medium-3077784619` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_card.webp" width="200" alt="Clones en espejo: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_fiche.webp" width="260" alt="Clones en espejo: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_s6.webp" width="200" alt="Clones en espejo: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_s9.webp" width="200" alt="Clones en espejo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_easy.webp" width="200" alt="Clones en espejo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_a.webp" width="200" alt="Clones en espejo: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_hard.webp" width="200" alt="Clones en espejo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_notes.webp" width="200" alt="Clones en espejo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_check.webp" width="200" alt="Clones en espejo: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_solved.webp" width="200" alt="Clones en espejo: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_dark.webp" width="200" alt="Clones en espejo: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_mobile.webp" width="150" alt="Clones en espejo: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/clonemir_en.webp" width="300" alt="Clones en espejo: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/clonemir_rules.webp" width="300" alt="Clones en espejo: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

