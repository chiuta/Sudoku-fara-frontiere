# Catálogo: Reglas globales (10)

[English](../en/11-reguli-globale.md) · [Română](../11-reguli-globale.md) · [Français](../fr/11-reguli-globale.md) · [Italiano](../it/11-reguli-globale.md) · **Español** · [Português](../pt/11-reguli-globale.md) · [Deutsch](../de/11-reguli-globale.md) · [Magyar](../hu/11-reguli-globale.md)

[← README](../../../README.es.md) · [Todas las categorías](README.md)

[Tamaño y símbolos](01-marime-si-simboluri.md) · [Regiones y grupos](02-regiuni-si-grupuri.md) · [Vecinos](03-vecini.md) · [Paridad, puntos, signos](04-paritate-puncte-semne.md) · [Sumas](05-sume.md) · [Pistas en el borde](06-indicii-pe-margine.md) · [Líneas](07-linii.md) · [Cuadrículas compuestas](08-grile-compuse.md) · [Parientes cercanos](09-rude-apropiate.md) · [Topologías y saltos fairy](10-topologii-si-mutari-fairy.md) · **Reglas globales** · [Pistas en las celdas](12-indicii-in-celule.md) · [Dimensiones superiores](13-dimensiuni-superioare.md)

---


_La regla afecta a toda la cuadrícula y, por lo general, no tiene marcas propias; compruébala con «Comprobar» o sigue los conflictos._

<a id="symcomp"></a>
#### 111. Simetría complementaria · Complementary symmetry (`symcomp`)

**Las celdas simétricas respecto al centro suman N+1.**

Además de las reglas clásicas, cualesquiera dos celdas simétricas respecto al centro de la cuadrícula (giro de 180°) suman N+1 (en 9×9: 10). La celda central es, por tanto, 5. Tamaños 9×9 y 4×4.

<table><tr><td align="center"><img src="../../screens/symcomp_a.webp" width="300" alt="Simetría complementaria: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/symcomp_b.webp" width="300" alt="Simetría complementaria: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 1 (fila 5, col. 4): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `symcomp-9-medium-913346369` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_card.webp" width="200" alt="Simetría complementaria: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_fiche.webp" width="260" alt="Simetría complementaria: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_s4.webp" width="200" alt="Simetría complementaria: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_s9.webp" width="200" alt="Simetría complementaria: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_easy.webp" width="200" alt="Simetría complementaria: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_a.webp" width="200" alt="Simetría complementaria: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_hard.webp" width="200" alt="Simetría complementaria: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_notes.webp" width="200" alt="Simetría complementaria: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_check.webp" width="200" alt="Simetría complementaria: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_solved.webp" width="200" alt="Simetría complementaria: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_dark.webp" width="200" alt="Simetría complementaria: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_mobile.webp" width="150" alt="Simetría complementaria: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_en.webp" width="300" alt="Simetría complementaria: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_rules.webp" width="300" alt="Simetría complementaria: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="symparity"></a>
#### 112. Paridad simétrica · Symmetric parity (`symparity`)

**Las celdas simétricas respecto al centro tienen la misma paridad.**

Además de las reglas clásicas, cualesquiera dos celdas simétricas respecto al centro de la cuadrícula (giro de 180°) son ambas pares o ambas impares.

<table><tr><td align="center"><img src="../../screens/symparity_a.webp" width="300" alt="Paridad simétrica: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 24 dados)</sub></td><td align="center"><img src="../../screens/symparity_b.webp" width="300" alt="Paridad simétrica: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 5 (fila 1, col. 1): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `symparity-9-medium-2361855335` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_card.webp" width="200" alt="Paridad simétrica: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symparity_fiche.webp" width="260" alt="Paridad simétrica: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_s4.webp" width="200" alt="Paridad simétrica: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s6.webp" width="200" alt="Paridad simétrica: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s9.webp" width="200" alt="Paridad simétrica: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_easy.webp" width="200" alt="Paridad simétrica: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/symparity_a.webp" width="200" alt="Paridad simétrica: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/symparity_hard.webp" width="200" alt="Paridad simétrica: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_notes.webp" width="200" alt="Paridad simétrica: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_check.webp" width="200" alt="Paridad simétrica: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_solved.webp" width="200" alt="Paridad simétrica: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_dark.webp" width="200" alt="Paridad simétrica: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/symparity_mobile.webp" width="150" alt="Paridad simétrica: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_en.webp" width="300" alt="Paridad simétrica: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_rules.webp" width="300" alt="Paridad simétrica: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="cgrav"></a>
#### 113. Centro de gravedad · Centre of gravity (`cgrav`)

**Cada fila está en equilibrio como un balancín.**

Además de las reglas clásicas, cada fila está en equilibrio: si se numeran las posiciones −4…+4 y cada dígito es un peso, la suma de los pesos × posiciones es 0 (el centro de gravedad está exactamente en el medio). Solo 9×9; la generación puede tardar unos segundos en Fácil y hasta ~20 s en Difícil.

<table><tr><td align="center"><img src="../../screens/cgrav_a.webp" width="300" alt="Centro de gravedad: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 26 dados)</sub></td><td align="center"><img src="../../screens/cgrav_b.webp" width="300" alt="Centro de gravedad: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 4 (fila 1, col. 7): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `cgrav-9-medium-1954301562` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_card.webp" width="200" alt="Centro de gravedad: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_fiche.webp" width="260" alt="Centro de gravedad: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_s9.webp" width="200" alt="Centro de gravedad: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_easy.webp" width="200" alt="Centro de gravedad: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_a.webp" width="200" alt="Centro de gravedad: Medio"><br><sub>Medio</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_notes.webp" width="200" alt="Centro de gravedad: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_check.webp" width="200" alt="Centro de gravedad: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_solved.webp" width="200" alt="Centro de gravedad: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_dark.webp" width="200" alt="Centro de gravedad: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_mobile.webp" width="150" alt="Centro de gravedad: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_en.webp" width="300" alt="Centro de gravedad: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_rules.webp" width="300" alt="Centro de gravedad: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="lexrows"></a>
#### 114. Filas lexicográficas · Lexicographic rows (`lexrows`)

**Las filas crecen como palabras (primera columna: 1…N).**

Además de las reglas clásicas, al leer las filas de arriba abajo como «palabras» de dígitos, cada fila es estrictamente menor lexicográficamente que la de debajo (se compara el primer dígito distinto). Como la primera columna contiene dígitos distintos, la regla significa en realidad que la primera columna, leída de arriba abajo, es 1, 2, …, N.

<table><tr><td align="center"><img src="../../screens/lexrows_a.webp" width="300" alt="Filas lexicográficas: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/lexrows_b.webp" width="300" alt="Filas lexicográficas: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 3 (fila 7, col. 6): es la única celda de la columna marcada donde puede ir el 3.
- **Código del mismo puzle:** `lexrows-9-medium-957311172` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 1 ramificación

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_card.webp" width="200" alt="Filas lexicográficas: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_fiche.webp" width="260" alt="Filas lexicográficas: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_s4.webp" width="200" alt="Filas lexicográficas: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s6.webp" width="200" alt="Filas lexicográficas: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s9.webp" width="200" alt="Filas lexicográficas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_easy.webp" width="200" alt="Filas lexicográficas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_a.webp" width="200" alt="Filas lexicográficas: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_hard.webp" width="200" alt="Filas lexicográficas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_notes.webp" width="200" alt="Filas lexicográficas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_check.webp" width="200" alt="Filas lexicográficas: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_solved.webp" width="200" alt="Filas lexicográficas: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_dark.webp" width="200" alt="Filas lexicográficas: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_mobile.webp" width="150" alt="Filas lexicográficas: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_en.webp" width="300" alt="Filas lexicográficas: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_rules.webp" width="300" alt="Filas lexicográficas: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="extremes"></a>
#### 115. Extremos adyacentes · Touching extremes (`extremes`)

**El mínimo y el máximo de la caja se tocan.**

Además de las reglas clásicas, en cada caja los dígitos 1 y N están en celdas vecinas, también en diagonal (movimiento de rey). La convención «también en diagonal» se ha elegido aquí: con vecinas solo ortogonales no existen cuadrículas 9×9 (comprobado exhaustivamente).

<table><tr><td align="center"><img src="../../screens/extremes_a.webp" width="300" alt="Extremos adyacentes: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/extremes_b.webp" width="300" alt="Extremos adyacentes: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 4, col. 4): es la única celda de la columna marcada donde puede ir el 6.
- **Código del mismo puzle:** `extremes-9-medium-1348183675` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 2 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_card.webp" width="200" alt="Extremos adyacentes: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/extremes_fiche.webp" width="260" alt="Extremos adyacentes: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_s4.webp" width="200" alt="Extremos adyacentes: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s6.webp" width="200" alt="Extremos adyacentes: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s9.webp" width="200" alt="Extremos adyacentes: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_easy.webp" width="200" alt="Extremos adyacentes: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/extremes_a.webp" width="200" alt="Extremos adyacentes: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/extremes_hard.webp" width="200" alt="Extremos adyacentes: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_notes.webp" width="200" alt="Extremos adyacentes: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_check.webp" width="200" alt="Extremos adyacentes: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_solved.webp" width="200" alt="Extremos adyacentes: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_dark.webp" width="200" alt="Extremos adyacentes: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/extremes_mobile.webp" width="150" alt="Extremos adyacentes: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_en.webp" width="300" alt="Extremos adyacentes: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_rules.webp" width="300" alt="Extremos adyacentes: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="boxbalance"></a>
#### 116. Cajas equilibradas · Balanced boxes (`boxbalance`)

**La primera y la última columna de la caja tienen la misma suma.**

Además de las reglas clásicas, en cada caja la suma de los dígitos de la columna izquierda es igual a la suma de los de la columna derecha.

<table><tr><td align="center"><img src="../../screens/boxbalance_a.webp" width="300" alt="Cajas equilibradas: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/boxbalance_b.webp" width="300" alt="Cajas equilibradas: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 6 (fila 6, col. 4): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `boxbalance-9-medium-1668427631` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 314 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_card.webp" width="200" alt="Cajas equilibradas: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_fiche.webp" width="260" alt="Cajas equilibradas: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_s4.webp" width="200" alt="Cajas equilibradas: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s6.webp" width="200" alt="Cajas equilibradas: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s9.webp" width="200" alt="Cajas equilibradas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_easy.webp" width="200" alt="Cajas equilibradas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_a.webp" width="200" alt="Cajas equilibradas: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_hard.webp" width="200" alt="Cajas equilibradas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_notes.webp" width="200" alt="Cajas equilibradas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_check.webp" width="200" alt="Cajas equilibradas: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_solved.webp" width="200" alt="Cajas equilibradas: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_dark.webp" width="200" alt="Cajas equilibradas: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_mobile.webp" width="150" alt="Cajas equilibradas: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_en.webp" width="300" alt="Cajas equilibradas: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_rules.webp" width="300" alt="Cajas equilibradas: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="lonely5"></a>
#### 117. El cinco solitario · Lonely 5 (`lonely5`)

**Un 5 solo tiene vecinos pares.**

Además de las reglas clásicas, todo 5 tiene únicamente vecinos ortogonales pares. Tamaños 9×9 y 6×6.

<table><tr><td align="center"><img src="../../screens/lonely5_a.webp" width="300" alt="El cinco solitario: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 24 dados)</sub></td><td align="center"><img src="../../screens/lonely5_b.webp" width="300" alt="El cinco solitario: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 5, col. 3): es la única celda de la fila marcada donde puede ir el 2.
- **Código del mismo puzle:** `lonely5-9-medium-4284537212` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_card.webp" width="200" alt="El cinco solitario: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_fiche.webp" width="260" alt="El cinco solitario: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_s6.webp" width="200" alt="El cinco solitario: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_s9.webp" width="200" alt="El cinco solitario: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_easy.webp" width="200" alt="El cinco solitario: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_a.webp" width="200" alt="El cinco solitario: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_hard.webp" width="200" alt="El cinco solitario: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_notes.webp" width="200" alt="El cinco solitario: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_check.webp" width="200" alt="El cinco solitario: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_solved.webp" width="200" alt="El cinco solitario: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_dark.webp" width="200" alt="El cinco solitario: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_mobile.webp" width="150" alt="El cinco solitario: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_en.webp" width="300" alt="El cinco solitario: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_rules.webp" width="300" alt="El cinco solitario: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="nolonely"></a>
#### 118. Sin celdas solitarias · No lonely cells (`nolonely`)

**Cada celda tiene un vecino consecutivo.**

Además de las reglas clásicas, cada celda tiene al menos un vecino ortogonal cuyo dígito difiere exactamente en 1.

<table><tr><td align="center"><img src="../../screens/nolonely_a.webp" width="300" alt="Sin celdas solitarias: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/nolonely_b.webp" width="300" alt="Sin celdas solitarias: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 5 (fila 9, col. 9): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `nolonely-9-medium-355818888` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_card.webp" width="200" alt="Sin celdas solitarias: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_fiche.webp" width="260" alt="Sin celdas solitarias: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_s4.webp" width="200" alt="Sin celdas solitarias: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s6.webp" width="200" alt="Sin celdas solitarias: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s9.webp" width="200" alt="Sin celdas solitarias: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_easy.webp" width="200" alt="Sin celdas solitarias: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_a.webp" width="200" alt="Sin celdas solitarias: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_hard.webp" width="200" alt="Sin celdas solitarias: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_notes.webp" width="200" alt="Sin celdas solitarias: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_check.webp" width="200" alt="Sin celdas solitarias: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_solved.webp" width="200" alt="Sin celdas solitarias: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_dark.webp" width="200" alt="Sin celdas solitarias: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_mobile.webp" width="150" alt="Sin celdas solitarias: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_en.webp" width="300" alt="Sin celdas solitarias: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_rules.webp" width="300" alt="Sin celdas solitarias: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="noprog"></a>
#### 119. Sin progresiones · No arithmetic progressions (`noprog`)

**Tres dígitos contiguos no forman una progresión aritmética.**

Además de las reglas clásicas, tres celdas contiguas en una fila o en una columna no pueden formar una progresión aritmética (p. ej., 2-4-6 o 7-5-3 están prohibidos).

<table><tr><td align="center"><img src="../../screens/noprog_a.webp" width="300" alt="Sin progresiones: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 24 dados)</sub></td><td align="center"><img src="../../screens/noprog_b.webp" width="300" alt="Sin progresiones: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 3, col. 7): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `noprog-9-medium-3644248957` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 6 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_card.webp" width="200" alt="Sin progresiones: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/noprog_fiche.webp" width="260" alt="Sin progresiones: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_s4.webp" width="200" alt="Sin progresiones: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s6.webp" width="200" alt="Sin progresiones: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s9.webp" width="200" alt="Sin progresiones: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_easy.webp" width="200" alt="Sin progresiones: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/noprog_a.webp" width="200" alt="Sin progresiones: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/noprog_hard.webp" width="200" alt="Sin progresiones: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_notes.webp" width="200" alt="Sin progresiones: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_check.webp" width="200" alt="Sin progresiones: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_solved.webp" width="200" alt="Sin progresiones: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_dark.webp" width="200" alt="Sin progresiones: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/noprog_mobile.webp" width="150" alt="Sin progresiones: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_en.webp" width="300" alt="Sin progresiones: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_rules.webp" width="300" alt="Sin progresiones: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="semimagic"></a>
#### 120. Cajas semimágicas · Semi-magic boxes (`semimagic`)

**Las filas de cada caja suman 15; igual las columnas.**

Además de las reglas clásicas, cada fila y cada columna de cada caja suman 15. Las cajas totalmente mágicas (con diagonales) son imposibles, porque las tres cajas de una banda tendrían todas el centro 5 en la misma fila de la cuadrícula; por eso las diagonales no están restringidas. Solo 9×9 (en 4×4 las filas y columnas exigirían cajas con dígitos repetidos).

<table><tr><td align="center"><img src="../../screens/semimagic_a.webp" width="300" alt="Cajas semimágicas: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/semimagic_b.webp" width="300" alt="Cajas semimágicas: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 5, col. 5): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `semimagic-9-medium-3291682902` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_card.webp" width="200" alt="Cajas semimágicas: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_fiche.webp" width="260" alt="Cajas semimágicas: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_s9.webp" width="200" alt="Cajas semimágicas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_easy.webp" width="200" alt="Cajas semimágicas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_a.webp" width="200" alt="Cajas semimágicas: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_hard.webp" width="200" alt="Cajas semimágicas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_notes.webp" width="200" alt="Cajas semimágicas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_check.webp" width="200" alt="Cajas semimágicas: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_solved.webp" width="200" alt="Cajas semimágicas: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_dark.webp" width="200" alt="Cajas semimágicas: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_mobile.webp" width="150" alt="Cajas semimágicas: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_en.webp" width="300" alt="Cajas semimágicas: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_rules.webp" width="300" alt="Cajas semimágicas: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

