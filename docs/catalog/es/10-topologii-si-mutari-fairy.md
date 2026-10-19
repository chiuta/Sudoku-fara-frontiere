# Catálogo: Topologías y saltos fairy (9)

[English](../en/10-topologii-si-mutari-fairy.md) · [Română](../10-topologii-si-mutari-fairy.md) · [Français](../fr/10-topologii-si-mutari-fairy.md) · [Italiano](../it/10-topologii-si-mutari-fairy.md) · **Español** · [Português](../pt/10-topologii-si-mutari-fairy.md) · [Deutsch](../de/10-topologii-si-mutari-fairy.md) · [Magyar](../hu/10-topologii-si-mutari-fairy.md)

[← README](../../../README.es.md) · [Todas las categorías](README.md)

[Tamaño y símbolos](01-marime-si-simboluri.md) · [Regiones y grupos](02-regiuni-si-grupuri.md) · [Vecinos](03-vecini.md) · [Paridad, puntos, signos](04-paritate-puncte-semne.md) · [Sumas](05-sume.md) · [Pistas en el borde](06-indicii-pe-margine.md) · [Líneas](07-linii.md) · [Cuadrículas compuestas](08-grile-compuse.md) · [Parientes cercanos](09-rude-apropiate.md) · **Topologías y saltos fairy** · [Reglas globales](11-reguli-globale.md) · [Pistas en las celdas](12-indicii-in-celule.md) · [Dimensiones superiores](13-dimensiuni-superioare.md)

---


_Los bordes de la cuadrícula se pegan según la regla de la variante; una celda del borde tiene vecinas también en el lado opuesto._

<a id="antibishop"></a>
#### 102. Anti-alfil · Anti-alfil (`antibishop`)

**Ningún dígito igual a dos pasos en diagonal.**

Además de las reglas clásicas, dos celdas situadas exactamente a dos pasos en diagonal (2 filas y 2 columnas de distancia, el movimiento «alfil» del ajedrez fairy) no pueden contener el mismo dígito. No es el alfil deslizante (ese impondría diagonales enteras); es solo el salto de 2×2. Tamaños 9×9 y 6×6.

<table><tr><td align="center"><img src="../../screens/antibishop_a.webp" width="300" alt="Anti-alfil: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 26 dados)</sub></td><td align="center"><img src="../../screens/antibishop_b.webp" width="300" alt="Anti-alfil: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 9 (fila 7, col. 3): es la única celda de la fila marcada donde puede ir el 9.
- **Código del mismo puzle:** `antibishop-9-medium-4275501725` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 1 ramificación

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_card.webp" width="200" alt="Anti-alfil: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_fiche.webp" width="260" alt="Anti-alfil: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_s6.webp" width="200" alt="Anti-alfil: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_s9.webp" width="200" alt="Anti-alfil: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_easy.webp" width="200" alt="Anti-alfil: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_a.webp" width="200" alt="Anti-alfil: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_hard.webp" width="200" alt="Anti-alfil: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_notes.webp" width="200" alt="Anti-alfil: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_check.webp" width="200" alt="Anti-alfil: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_solved.webp" width="200" alt="Anti-alfil: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_dark.webp" width="200" alt="Anti-alfil: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_mobile.webp" width="150" alt="Anti-alfil: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_en.webp" width="300" alt="Anti-alfil: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_rules.webp" width="300" alt="Anti-alfil: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="anticamel"></a>
#### 103. Anti-camello · Anti-camel (`anticamel`)

**Ningún dígito igual a un salto de camello (1,3).**

Además de las reglas clásicas, dos celdas a un salto de camello (1 fila y 3 columnas, o 3 filas y 1 columna) no pueden contener el mismo dígito. Solo 9×9.

<table><tr><td align="center"><img src="../../screens/anticamel_a.webp" width="300" alt="Anti-camello: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 26 dados)</sub></td><td align="center"><img src="../../screens/anticamel_b.webp" width="300" alt="Anti-camello: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 7 (fila 4, col. 5): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `anticamel-9-medium-634926365` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_card.webp" width="200" alt="Anti-camello: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_fiche.webp" width="260" alt="Anti-camello: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_s9.webp" width="200" alt="Anti-camello: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_easy.webp" width="200" alt="Anti-camello: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_a.webp" width="200" alt="Anti-camello: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_hard.webp" width="200" alt="Anti-camello: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_notes.webp" width="200" alt="Anti-camello: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_check.webp" width="200" alt="Anti-camello: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_solved.webp" width="200" alt="Anti-camello: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_dark.webp" width="200" alt="Anti-camello: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_mobile.webp" width="150" alt="Anti-camello: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_en.webp" width="300" alt="Anti-camello: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_rules.webp" width="300" alt="Anti-camello: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="antizebra"></a>
#### 104. Anti-cebra · Anti-zebra (`antizebra`)

**Ningún dígito igual a un salto de cebra (2,3).**

Además de las reglas clásicas, dos celdas a un salto de cebra (2 filas y 3 columnas, o 3 filas y 2 columnas) no pueden contener el mismo dígito. Solo 9×9.

<table><tr><td align="center"><img src="../../screens/antizebra_a.webp" width="300" alt="Anti-cebra: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 26 dados)</sub></td><td align="center"><img src="../../screens/antizebra_b.webp" width="300" alt="Anti-cebra: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 5 (fila 1, col. 3): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `antizebra-9-medium-439216389` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_card.webp" width="200" alt="Anti-cebra: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_fiche.webp" width="260" alt="Anti-cebra: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_s9.webp" width="200" alt="Anti-cebra: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_easy.webp" width="200" alt="Anti-cebra: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_a.webp" width="200" alt="Anti-cebra: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_hard.webp" width="200" alt="Anti-cebra: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_notes.webp" width="200" alt="Anti-cebra: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_check.webp" width="200" alt="Anti-cebra: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_solved.webp" width="200" alt="Anti-cebra: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_dark.webp" width="200" alt="Anti-cebra: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_mobile.webp" width="150" alt="Anti-cebra: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_en.webp" width="300" alt="Anti-cebra: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_rules.webp" width="300" alt="Anti-cebra: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="torusking"></a>
#### 105. Toro anti-rey · Torus anti-king (`torusking`)

**Anti-rey en una cuadrícula que se cierra como un toro.**

La cuadrícula continúa por los bordes: el borde superior se pega al inferior, el izquierdo al derecho. Dos celdas vecinas en diagonal (movimiento de rey), también a través del borde, no pueden contener el mismo dígito (p. ej., la esquina superior izquierda es vecina en diagonal de la inferior derecha). Solo 9×9.

<table><tr><td align="center"><img src="../../screens/torusking_a.webp" width="300" alt="Toro anti-rey: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/torusking_b.webp" width="300" alt="Toro anti-rey: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 5, col. 5): es la única celda de la fila marcada donde puede ir el 6.
- **Código del mismo puzle:** `torusking-9-medium-1622319202` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 17 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_card.webp" width="200" alt="Toro anti-rey: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/torusking_fiche.webp" width="260" alt="Toro anti-rey: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_s9.webp" width="200" alt="Toro anti-rey: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_easy.webp" width="200" alt="Toro anti-rey: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/torusking_a.webp" width="200" alt="Toro anti-rey: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/torusking_hard.webp" width="200" alt="Toro anti-rey: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_notes.webp" width="200" alt="Toro anti-rey: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_check.webp" width="200" alt="Toro anti-rey: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_solved.webp" width="200" alt="Toro anti-rey: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_dark.webp" width="200" alt="Toro anti-rey: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/torusking_mobile.webp" width="150" alt="Toro anti-rey: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_en.webp" width="300" alt="Toro anti-rey: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_rules.webp" width="300" alt="Toro anti-rey: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="torusknight"></a>
#### 106. Toro anti-caballo · Torus anti-knight (`torusknight`)

**Anti-caballo en una cuadrícula que se cierra como un toro.**

La cuadrícula continúa por los bordes (arriba con abajo, izquierda con derecha). Dos celdas a un salto de caballo, también a través del borde, no pueden contener el mismo dígito. Solo 9×9.

<table><tr><td align="center"><img src="../../screens/torusknight_a.webp" width="300" alt="Toro anti-caballo: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/torusknight_b.webp" width="300" alt="Toro anti-caballo: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 5 (fila 3, col. 6): es la única celda de la fila marcada donde puede ir el 5.
- **Código del mismo puzle:** `torusknight-9-medium-2092083509` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_card.webp" width="200" alt="Toro anti-caballo: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_fiche.webp" width="260" alt="Toro anti-caballo: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_s9.webp" width="200" alt="Toro anti-caballo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_easy.webp" width="200" alt="Toro anti-caballo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_a.webp" width="200" alt="Toro anti-caballo: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_hard.webp" width="200" alt="Toro anti-caballo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_notes.webp" width="200" alt="Toro anti-caballo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_check.webp" width="200" alt="Toro anti-caballo: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_solved.webp" width="200" alt="Toro anti-caballo: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_dark.webp" width="200" alt="Toro anti-caballo: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_mobile.webp" width="150" alt="Toro anti-caballo: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_en.webp" width="300" alt="Toro anti-caballo: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_rules.webp" width="300" alt="Toro anti-caballo: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="cylking"></a>
#### 107. Cilindro anti-rey · Cylinder anti-king (`cylking`)

**La izquierda se pega a la derecha; arriba y abajo siguen siendo bordes.**

El borde izquierdo se pega al derecho, como en un cilindro; arriba y abajo no se pegan. Dos celdas a un movimiento de rey (también a través de la unión izquierda–derecha) no pueden contener el mismo dígito. Solo 9×9.

<table><tr><td align="center"><img src="../../screens/cylking_a.webp" width="300" alt="Cilindro anti-rey: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 24 dados)</sub></td><td align="center"><img src="../../screens/cylking_b.webp" width="300" alt="Cilindro anti-rey: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 7, col. 5): es la única celda de la fila marcada donde puede ir el 8.
- **Código del mismo puzle:** `cylking-9-medium-3432982682` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 2 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_card.webp" width="200" alt="Cilindro anti-rey: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cylking_fiche.webp" width="260" alt="Cilindro anti-rey: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_s9.webp" width="200" alt="Cilindro anti-rey: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_easy.webp" width="200" alt="Cilindro anti-rey: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/cylking_a.webp" width="200" alt="Cilindro anti-rey: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/cylking_hard.webp" width="200" alt="Cilindro anti-rey: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_notes.webp" width="200" alt="Cilindro anti-rey: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_check.webp" width="200" alt="Cilindro anti-rey: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_solved.webp" width="200" alt="Cilindro anti-rey: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_dark.webp" width="200" alt="Cilindro anti-rey: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/cylking_mobile.webp" width="150" alt="Cilindro anti-rey: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_en.webp" width="300" alt="Cilindro anti-rey: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_rules.webp" width="300" alt="Cilindro anti-rey: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="mobiusking"></a>
#### 108. Möbius anti-rey · Möbius anti-king (`mobiusking`)

**La izquierda se pega a la derecha con una torsión.**

El borde izquierdo se pega al derecho con una torsión (la fila r se une a la fila 10−r), como una banda de Möbius. Dos celdas a un movimiento de rey, también a través de la unión, no pueden contener el mismo dígito. Solo 9×9. La convención de pegado es la descrita aquí.

<table><tr><td align="center"><img src="../../screens/mobiusking_a.webp" width="300" alt="Möbius anti-rey: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/mobiusking_b.webp" width="300" alt="Möbius anti-rey: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 5, col. 2): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `mobiusking-9-medium-3019619418` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 4 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_card.webp" width="200" alt="Möbius anti-rey: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_fiche.webp" width="260" alt="Möbius anti-rey: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_s9.webp" width="200" alt="Möbius anti-rey: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_easy.webp" width="200" alt="Möbius anti-rey: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_a.webp" width="200" alt="Möbius anti-rey: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_hard.webp" width="200" alt="Möbius anti-rey: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_notes.webp" width="200" alt="Möbius anti-rey: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_check.webp" width="200" alt="Möbius anti-rey: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_solved.webp" width="200" alt="Möbius anti-rey: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_dark.webp" width="200" alt="Möbius anti-rey: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_mobile.webp" width="150" alt="Möbius anti-rey: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_en.webp" width="300" alt="Möbius anti-rey: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_rules.webp" width="300" alt="Möbius anti-rey: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="kleinking"></a>
#### 109. Klein anti-rey · Klein anti-king (`kleinking`)

**Botella de Klein: izquierda–derecha con torsión, arriba–abajo simple.**

El borde izquierdo se pega al derecho con una torsión (la fila r se une a la fila 10−r), y el superior se pega al inferior sin torsión: una botella de Klein. Dos celdas a un movimiento de rey, también a través de las uniones, no pueden contener el mismo dígito. Solo 9×9. La convención de pegado es la descrita aquí.

<table><tr><td align="center"><img src="../../screens/kleinking_a.webp" width="300" alt="Klein anti-rey: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/kleinking_b.webp" width="300" alt="Klein anti-rey: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 4, col. 8): es la única celda de la fila marcada donde puede ir el 8.
- **Código del mismo puzle:** `kleinking-9-medium-1542891122` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_card.webp" width="200" alt="Klein anti-rey: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_fiche.webp" width="260" alt="Klein anti-rey: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_s9.webp" width="200" alt="Klein anti-rey: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_easy.webp" width="200" alt="Klein anti-rey: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_a.webp" width="200" alt="Klein anti-rey: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_hard.webp" width="200" alt="Klein anti-rey: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_notes.webp" width="200" alt="Klein anti-rey: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_check.webp" width="200" alt="Klein anti-rey: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_solved.webp" width="200" alt="Klein anti-rey: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_dark.webp" width="200" alt="Klein anti-rey: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_mobile.webp" width="150" alt="Klein anti-rey: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_en.webp" width="300" alt="Klein anti-rey: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_rules.webp" width="300" alt="Klein anti-rey: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="projking"></a>
#### 110. Plano proyectivo anti-rey · Projective-plane anti-king (`projking`)

**Ambos pares de bordes se pegan con torsión.**

La izquierda se pega a la derecha con torsión (la fila r con la 10−r) y arriba con abajo con torsión (la columna c con la 10−c): un plano proyectivo real. Dos celdas a un movimiento de rey, también a través de las uniones, no pueden contener el mismo dígito. Solo 9×9. La convención de pegado es la descrita aquí.

<table><tr><td align="center"><img src="../../screens/projking_a.webp" width="300" alt="Plano proyectivo anti-rey: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/projking_b.webp" width="300" alt="Plano proyectivo anti-rey: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 1 (fila 6, col. 6): es la única celda de la fila marcada donde puede ir el 1.
- **Código del mismo puzle:** `projking-9-medium-1483663755` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_card.webp" width="200" alt="Plano proyectivo anti-rey: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/projking_fiche.webp" width="260" alt="Plano proyectivo anti-rey: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_s9.webp" width="200" alt="Plano proyectivo anti-rey: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_easy.webp" width="200" alt="Plano proyectivo anti-rey: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/projking_a.webp" width="200" alt="Plano proyectivo anti-rey: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/projking_hard.webp" width="200" alt="Plano proyectivo anti-rey: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_notes.webp" width="200" alt="Plano proyectivo anti-rey: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/projking_check.webp" width="200" alt="Plano proyectivo anti-rey: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/projking_solved.webp" width="200" alt="Plano proyectivo anti-rey: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_dark.webp" width="200" alt="Plano proyectivo anti-rey: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/projking_mobile.webp" width="150" alt="Plano proyectivo anti-rey: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/projking_en.webp" width="300" alt="Plano proyectivo anti-rey: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_rules.webp" width="300" alt="Plano proyectivo anti-rey: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

