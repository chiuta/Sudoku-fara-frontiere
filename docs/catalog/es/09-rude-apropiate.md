# Catálogo: Parientes cercanos (3)

[English](../en/09-rude-apropiate.md) · [Română](../09-rude-apropiate.md) · [Français](../fr/09-rude-apropiate.md) · [Italiano](../it/09-rude-apropiate.md) · **Español** · [Português](../pt/09-rude-apropiate.md) · [Deutsch](../de/09-rude-apropiate.md) · [Magyar](../hu/09-rude-apropiate.md)

[← README](../../../README.es.md) · [Todas las categorías](README.md)

[Tamaño y símbolos](01-marime-si-simboluri.md) · [Regiones y grupos](02-regiuni-si-grupuri.md) · [Vecinos](03-vecini.md) · [Paridad, puntos, signos](04-paritate-puncte-semne.md) · [Sumas](05-sume.md) · [Pistas en el borde](06-indicii-pe-margine.md) · [Líneas](07-linii.md) · [Cuadrículas compuestas](08-grile-compuse.md) · **Parientes cercanos** · [Topologías y saltos fairy](10-topologii-si-mutari-fairy.md) · [Reglas globales](11-reguli-globale.md) · [Pistas en las celdas](12-indicii-in-celule.md) · [Dimensiones superiores](13-dimensiuni-superioare.md)

---


_Pariente cercano del Sudoku: lee la ficha para ver qué cambia respecto al juego clásico._

<a id="futoshiki"></a>
#### 99. Futoshiki · Futoshiki (`futoshiki`)

**Cuadrado latino con signos de desigualdad.**

Cada fila y columna contienen los dígitos 1–N una vez; los signos < y > entre celdas deben respetarse. Pariente cercano del sudoku, sin cajas.

<table><tr><td align="center"><img src="../../screens/futoshiki_a.webp" width="300" alt="Futoshiki: puzle al inicio"><br><sub>Puzle al inicio (5×5 · medio · 5 dados)</sub></td><td align="center"><img src="../../screens/futoshiki_b.webp" width="300" alt="Futoshiki: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 1, col. 2): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `futoshiki-5-medium-4235973107` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_card.webp" width="200" alt="Futoshiki: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_fiche.webp" width="260" alt="Futoshiki: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_s4.webp" width="200" alt="Futoshiki: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_s5.webp" width="200" alt="Futoshiki: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_s6.webp" width="200" alt="Futoshiki: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_s7.webp" width="200" alt="Futoshiki: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_easy.webp" width="200" alt="Futoshiki: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_a.webp" width="200" alt="Futoshiki: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_hard.webp" width="200" alt="Futoshiki: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_notes.webp" width="200" alt="Futoshiki: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_check.webp" width="200" alt="Futoshiki: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_solved.webp" width="200" alt="Futoshiki: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_dark.webp" width="200" alt="Futoshiki: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_mobile.webp" width="150" alt="Futoshiki: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_en.webp" width="300" alt="Futoshiki: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_rules.webp" width="300" alt="Futoshiki: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="kenken"></a>
#### 100. KenKen (Calcudoku) · KenKen (Calcudoku) (`kenken`)

**Cuadrado latino con jaulas aritméticas.**

Cada fila y columna contienen los dígitos 1–N una vez; cada jaula tiene un resultado y una operación (+, −, ×, ÷). Los dígitos pueden repetirse dentro de una jaula si no están en la misma fila o columna.

<table><tr><td align="center"><img src="../../screens/kenken_a.webp" width="300" alt="KenKen (Calcudoku): puzle al inicio"><br><sub>Puzle al inicio (5×5 · medio · 1 dados)</sub></td><td align="center"><img src="../../screens/kenken_b.webp" width="300" alt="KenKen (Calcudoku): tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 4 (fila 1, col. 4): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `kenken-5-medium-3034946116` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_card.webp" width="200" alt="KenKen (Calcudoku): Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/kenken_fiche.webp" width="260" alt="KenKen (Calcudoku): Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_s4.webp" width="200" alt="KenKen (Calcudoku): 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/kenken_s5.webp" width="200" alt="KenKen (Calcudoku): 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/kenken_s6.webp" width="200" alt="KenKen (Calcudoku): 6×6"><br><sub>6×6</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_easy.webp" width="200" alt="KenKen (Calcudoku): Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/kenken_a.webp" width="200" alt="KenKen (Calcudoku): Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/kenken_hard.webp" width="200" alt="KenKen (Calcudoku): Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_notes.webp" width="200" alt="KenKen (Calcudoku): Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_check.webp" width="200" alt="KenKen (Calcudoku): «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_solved.webp" width="200" alt="KenKen (Calcudoku): Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_dark.webp" width="200" alt="KenKen (Calcudoku): Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/kenken_mobile.webp" width="150" alt="KenKen (Calcudoku): Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_en.webp" width="300" alt="KenKen (Calcudoku): Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_rules.webp" width="300" alt="KenKen (Calcudoku): Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="strimko"></a>
#### 101. Strimko · Strimko (`strimko`)

**Cadenas en lugar de cajas.**

Cada fila, columna y cadena (círculos unidos por líneas, conexas también en diagonal) contiene cada dígito exactamente una vez. No hay cajas. Tamaños 4–7.

<table><tr><td align="center"><img src="../../screens/strimko_a.webp" width="300" alt="Strimko: puzle al inicio"><br><sub>Puzle al inicio (5×5 · medio · 5 dados)</sub></td><td align="center"><img src="../../screens/strimko_b.webp" width="300" alt="Strimko: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 2, col. 1): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `strimko-5-medium-2938744326` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_card.webp" width="200" alt="Strimko: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/strimko_fiche.webp" width="260" alt="Strimko: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_s4.webp" width="200" alt="Strimko: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/strimko_s5.webp" width="200" alt="Strimko: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/strimko_s6.webp" width="200" alt="Strimko: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../../screens/strimko_s7.webp" width="200" alt="Strimko: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_easy.webp" width="200" alt="Strimko: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/strimko_a.webp" width="200" alt="Strimko: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/strimko_hard.webp" width="200" alt="Strimko: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_notes.webp" width="200" alt="Strimko: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_check.webp" width="200" alt="Strimko: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_solved.webp" width="200" alt="Strimko: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_dark.webp" width="200" alt="Strimko: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/strimko_mobile.webp" width="150" alt="Strimko: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_en.webp" width="300" alt="Strimko: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_rules.webp" width="300" alt="Strimko: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

