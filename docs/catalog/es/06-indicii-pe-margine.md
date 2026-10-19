# Catálogo: Pistas en el borde (19)

[English](../en/06-indicii-pe-margine.md) · [Română](../06-indicii-pe-margine.md) · [Français](../fr/06-indicii-pe-margine.md) · [Italiano](../it/06-indicii-pe-margine.md) · **Español** · [Português](../pt/06-indicii-pe-margine.md) · [Deutsch](../de/06-indicii-pe-margine.md) · [Magyar](../hu/06-indicii-pe-margine.md)

[← README](../../../README.es.md) · [Todas las categorías](README.md)

[Tamaño y símbolos](01-marime-si-simboluri.md) · [Regiones y grupos](02-regiuni-si-grupuri.md) · [Vecinos](03-vecini.md) · [Paridad, puntos, signos](04-paritate-puncte-semne.md) · [Sumas](05-sume.md) · **Pistas en el borde** · [Líneas](07-linii.md) · [Cuadrículas compuestas](08-grile-compuse.md) · [Parientes cercanos](09-rude-apropiate.md) · [Topologías y saltos fairy](10-topologii-si-mutari-fairy.md) · [Reglas globales](11-reguli-globale.md) · [Pistas en las celdas](12-indicii-in-celule.md) · [Dimensiones superiores](13-dimensiuni-superioare.md)

---


_Las pistas se escriben fuera de la cuadrícula, al final de la fila o de la columna a la que se refieren._

<a id="sandwich"></a>
#### 41. Sandwich · Sandwich (`sandwich`)

**La suma entre el 1 y el dígito mayor.**

El número del borde es la suma de los dígitos situados entre el dígito 1 y el dígito N (9 en 9×9) de la fila o columna correspondiente.

<table><tr><td align="center"><img src="../../screens/sandwich_a.webp" width="300" alt="Sandwich: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/sandwich_b.webp" width="300" alt="Sandwich: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 3 (fila 1, col. 2): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `sandwich-9-medium-4184518699` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_card.webp" width="200" alt="Sandwich: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_fiche.webp" width="260" alt="Sandwich: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_s4.webp" width="200" alt="Sandwich: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s6.webp" width="200" alt="Sandwich: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s9.webp" width="200" alt="Sandwich: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_easy.webp" width="200" alt="Sandwich: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_a.webp" width="200" alt="Sandwich: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_hard.webp" width="200" alt="Sandwich: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_notes.webp" width="200" alt="Sandwich: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_check.webp" width="200" alt="Sandwich: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_solved.webp" width="200" alt="Sandwich: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_dark.webp" width="200" alt="Sandwich: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_mobile.webp" width="150" alt="Sandwich: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_en.webp" width="300" alt="Sandwich: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_rules.webp" width="300" alt="Sandwich: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="xsum"></a>
#### 42. X-Sums · X-Sums (`xsum`)

**Primer dígito = cuántas celdas se suman.**

Si el primer dígito de una fila o columna es k, la suma de los primeros k dígitos (desde ese extremo) es el número del borde.

<table><tr><td align="center"><img src="../../screens/xsum_a.webp" width="300" alt="X-Sums: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/xsum_b.webp" width="300" alt="X-Sums: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 3 (fila 3, col. 1): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `xsum-9-medium-920107551` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 5 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_card.webp" width="200" alt="X-Sums: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/xsum_fiche.webp" width="260" alt="X-Sums: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_s6.webp" width="200" alt="X-Sums: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/xsum_s9.webp" width="200" alt="X-Sums: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_easy.webp" width="200" alt="X-Sums: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/xsum_a.webp" width="200" alt="X-Sums: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/xsum_hard.webp" width="200" alt="X-Sums: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_notes.webp" width="200" alt="X-Sums: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_check.webp" width="200" alt="X-Sums: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_solved.webp" width="200" alt="X-Sums: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_dark.webp" width="200" alt="X-Sums: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/xsum_mobile.webp" width="150" alt="X-Sums: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_en.webp" width="300" alt="X-Sums: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_rules.webp" width="300" alt="X-Sums: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="frame"></a>
#### 43. Frame (los tres primeros) · Frame (first three) (`frame`)

**Suma de los tres primeros dígitos.**

El número del borde es la suma de los tres primeros dígitos de la fila o columna, empezando por ese extremo.

<table><tr><td align="center"><img src="../../screens/frame_a.webp" width="300" alt="Frame (los tres primeros): puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/frame_b.webp" width="300" alt="Frame (los tres primeros): tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 7 (fila 1, col. 4): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `frame-9-medium-3867362192` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_card.webp" width="200" alt="Frame (los tres primeros): Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/frame_fiche.webp" width="260" alt="Frame (los tres primeros): Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_s6.webp" width="200" alt="Frame (los tres primeros): 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/frame_s9.webp" width="200" alt="Frame (los tres primeros): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_easy.webp" width="200" alt="Frame (los tres primeros): Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/frame_a.webp" width="200" alt="Frame (los tres primeros): Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/frame_hard.webp" width="200" alt="Frame (los tres primeros): Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_notes.webp" width="200" alt="Frame (los tres primeros): Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/frame_check.webp" width="200" alt="Frame (los tres primeros): «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/frame_solved.webp" width="200" alt="Frame (los tres primeros): Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_dark.webp" width="200" alt="Frame (los tres primeros): Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/frame_mobile.webp" width="150" alt="Frame (los tres primeros): Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/frame_en.webp" width="300" alt="Frame (los tres primeros): Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_rules.webp" width="300" alt="Frame (los tres primeros): Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="skyscraper"></a>
#### 44. Rascacielos · Skyscrapers (`skyscraper`)

**Cuántos edificios se ven desde el borde.**

Los dígitos son alturas de edificios. El número del borde indica cuántos edificios se ven desde ese extremo (un edificio oculta los más bajos situados detrás).

<table><tr><td align="center"><img src="../../screens/skyscraper_a.webp" width="300" alt="Rascacielos: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/skyscraper_b.webp" width="300" alt="Rascacielos: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 9 (fila 3, col. 2): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `skyscraper-9-medium-1967302454` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 143 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_card.webp" width="200" alt="Rascacielos: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_fiche.webp" width="260" alt="Rascacielos: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_s4.webp" width="200" alt="Rascacielos: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s6.webp" width="200" alt="Rascacielos: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s9.webp" width="200" alt="Rascacielos: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_easy.webp" width="200" alt="Rascacielos: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_a.webp" width="200" alt="Rascacielos: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_hard.webp" width="200" alt="Rascacielos: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_notes.webp" width="200" alt="Rascacielos: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_check.webp" width="200" alt="Rascacielos: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_solved.webp" width="200" alt="Rascacielos: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_dark.webp" width="200" alt="Rascacielos: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_mobile.webp" width="150" alt="Rascacielos: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_en.webp" width="300" alt="Rascacielos: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_rules.webp" width="300" alt="Rascacielos: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="rossini"></a>
#### 45. Rossini · Rossini (`rossini`)

**Flecha en el borde: los tres primeros dígitos crecen en un sentido.**

Una flecha fuera de la cuadrícula indica que los tres primeros dígitos a partir de ese extremo son estrictamente monótonos: crecen en el sentido en que apunta la flecha (hacia el interior de la cuadrícula) o, si la flecha apunta hacia el borde, crecen hacia el borde, es decir, decrecen hacia el interior. Convención: la punta de la flecha apunta hacia el dígito mayor. La ausencia de flecha no dice nada (no es la variante Rossini clásica, en la que los extremos sin flecha excluyen las secuencias monótonas).

<table><tr><td align="center"><img src="../../screens/rossini_a.webp" width="300" alt="Rossini: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 19 dados)</sub></td><td align="center"><img src="../../screens/rossini_b.webp" width="300" alt="Rossini: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 1, col. 7): es la única celda de la columna marcada donde puede ir el 8.
- **Código del mismo puzle:** `rossini-9-medium-4071954052` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 2 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_card.webp" width="200" alt="Rossini: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/rossini_fiche.webp" width="260" alt="Rossini: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_s4.webp" width="200" alt="Rossini: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s6.webp" width="200" alt="Rossini: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s9.webp" width="200" alt="Rossini: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_easy.webp" width="200" alt="Rossini: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/rossini_a.webp" width="200" alt="Rossini: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/rossini_hard.webp" width="200" alt="Rossini: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_notes.webp" width="200" alt="Rossini: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_check.webp" width="200" alt="Rossini: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_solved.webp" width="200" alt="Rossini: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_dark.webp" width="200" alt="Rossini: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/rossini_mobile.webp" width="150" alt="Rossini: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_en.webp" width="300" alt="Rossini: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_rules.webp" width="300" alt="Rossini: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="outside"></a>
#### 46. Outside · Outside (`outside`)

**Los dígitos del borde aparecen entre los tres primeros.**

Los dígitos escritos fuera de la cuadrícula deben aparecer entre las tres primeras celdas de la fila o columna correspondiente, empezando por ese extremo, en cualquier orden. Si son tres dígitos, son exactamente las tres celdas.

<table><tr><td align="center"><img src="../../screens/outside_a.webp" width="300" alt="Outside: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 23 dados)</sub></td><td align="center"><img src="../../screens/outside_b.webp" width="300" alt="Outside: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 5 (fila 2, col. 5): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `outside-9-medium-3531544633` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_card.webp" width="200" alt="Outside: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/outside_fiche.webp" width="260" alt="Outside: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_s4.webp" width="200" alt="Outside: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/outside_s6.webp" width="200" alt="Outside: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/outside_s9.webp" width="200" alt="Outside: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_easy.webp" width="200" alt="Outside: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/outside_a.webp" width="200" alt="Outside: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/outside_hard.webp" width="200" alt="Outside: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_notes.webp" width="200" alt="Outside: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/outside_check.webp" width="200" alt="Outside: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/outside_solved.webp" width="200" alt="Outside: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_dark.webp" width="200" alt="Outside: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/outside_mobile.webp" width="150" alt="Outside: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/outside_en.webp" width="300" alt="Outside: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_rules.webp" width="300" alt="Outside: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="radar"></a>
#### 47. Radar · Radar (`radar`)

**La pista indica dónde está el mayor.**

Además de las reglas clásicas, un número fuera de la cuadrícula indica en qué posición (contando desde ese extremo) está el dígito mayor (9 en 9×9) de la fila o columna correspondiente.

<table><tr><td align="center"><img src="../../screens/radar_a.webp" width="300" alt="Radar: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 21 dados)</sub></td><td align="center"><img src="../../screens/radar_b.webp" width="300" alt="Radar: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 4 (fila 3, col. 6): es la única celda de la fila marcada donde puede ir el 4.
- **Código del mismo puzle:** `radar-9-medium-2588350498` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: sin ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_card.webp" width="200" alt="Radar: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/radar_fiche.webp" width="260" alt="Radar: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_s4.webp" width="200" alt="Radar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/radar_s6.webp" width="200" alt="Radar: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/radar_s9.webp" width="200" alt="Radar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_easy.webp" width="200" alt="Radar: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/radar_a.webp" width="200" alt="Radar: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/radar_hard.webp" width="200" alt="Radar: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_notes.webp" width="200" alt="Radar: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/radar_check.webp" width="200" alt="Radar: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/radar_solved.webp" width="200" alt="Radar: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_dark.webp" width="200" alt="Radar: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/radar_mobile.webp" width="150" alt="Radar: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/radar_en.webp" width="300" alt="Radar: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_rules.webp" width="300" alt="Radar: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="sandnum"></a>
#### 48. Sándwich numérico · Counting sandwich (`sandnum`)

**Cuántas celdas hay entre el 1 y el N.**

Además de las reglas clásicas, un número fuera de la cuadrícula indica cuántas celdas hay entre el dígito 1 y el dígito N (9 en 9×9) de la fila o columna correspondiente.

<table><tr><td align="center"><img src="../../screens/sandnum_a.webp" width="300" alt="Sándwich numérico: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 19 dados)</sub></td><td align="center"><img src="../../screens/sandnum_b.webp" width="300" alt="Sándwich numérico: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 6, col. 5): es la única celda de la columna marcada donde puede ir el 8.
- **Código del mismo puzle:** `sandnum-9-medium-2830514440` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 1802 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_card.webp" width="200" alt="Sándwich numérico: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_fiche.webp" width="260" alt="Sándwich numérico: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_s4.webp" width="200" alt="Sándwich numérico: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s6.webp" width="200" alt="Sándwich numérico: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s9.webp" width="200" alt="Sándwich numérico: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_easy.webp" width="200" alt="Sándwich numérico: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_a.webp" width="200" alt="Sándwich numérico: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_hard.webp" width="200" alt="Sándwich numérico: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_notes.webp" width="200" alt="Sándwich numérico: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_check.webp" width="200" alt="Sándwich numérico: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_solved.webp" width="200" alt="Sándwich numérico: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_dark.webp" width="200" alt="Sándwich numérico: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_mobile.webp" width="150" alt="Sándwich numérico: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_en.webp" width="300" alt="Sándwich numérico: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_rules.webp" width="300" alt="Sándwich numérico: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="sandpar"></a>
#### 49. Sándwich de paridad · Parity sandwich (`sandpar`)

**Cuántos dígitos impares hay entre el 1 y el N.**

Además de las reglas clásicas, un número fuera de la cuadrícula indica cuántos dígitos impares hay entre el 1 y el N en la fila o columna correspondiente.

<table><tr><td align="center"><img src="../../screens/sandpar_a.webp" width="300" alt="Sándwich de paridad: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 19 dados)</sub></td><td align="center"><img src="../../screens/sandpar_b.webp" width="300" alt="Sándwich de paridad: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 5, col. 5): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `sandpar-9-medium-3081747068` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 38 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_card.webp" width="200" alt="Sándwich de paridad: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_fiche.webp" width="260" alt="Sándwich de paridad: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_s6.webp" width="200" alt="Sándwich de paridad: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_s9.webp" width="200" alt="Sándwich de paridad: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_easy.webp" width="200" alt="Sándwich de paridad: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_a.webp" width="200" alt="Sándwich de paridad: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_hard.webp" width="200" alt="Sándwich de paridad: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_notes.webp" width="200" alt="Sándwich de paridad: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_check.webp" width="200" alt="Sándwich de paridad: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_solved.webp" width="200" alt="Sándwich de paridad: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_dark.webp" width="200" alt="Sándwich de paridad: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_mobile.webp" width="150" alt="Sándwich de paridad: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_en.webp" width="300" alt="Sándwich de paridad: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_rules.webp" width="300" alt="Sándwich de paridad: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="sand2"></a>
#### 50. Sándwich doble · Double sandwich (`sand2`)

**Dos sumas: entre 1 y 9, entre 2 y 8.**

Además de las reglas clásicas, la pista «a,b» fuera de la cuadrícula indica: a = suma de los dígitos entre el 1 y el 9, b = suma de los dígitos entre el 2 y el 8 en la fila o columna correspondiente. Solo 9×9.

<table><tr><td align="center"><img src="../../screens/sand2_a.webp" width="300" alt="Sándwich doble: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/sand2_b.webp" width="300" alt="Sándwich doble: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 6, col. 9): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `sand2-9-medium-1633059211` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 3778 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_card.webp" width="200" alt="Sándwich doble: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sand2_fiche.webp" width="260" alt="Sándwich doble: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_s9.webp" width="200" alt="Sándwich doble: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_easy.webp" width="200" alt="Sándwich doble: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sand2_a.webp" width="200" alt="Sándwich doble: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/sand2_hard.webp" width="200" alt="Sándwich doble: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_notes.webp" width="200" alt="Sándwich doble: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_check.webp" width="200" alt="Sándwich doble: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_solved.webp" width="200" alt="Sándwich doble: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_dark.webp" width="200" alt="Sándwich doble: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/sand2_mobile.webp" width="150" alt="Sándwich doble: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_en.webp" width="300" alt="Sándwich doble: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_rules.webp" width="300" alt="Sándwich doble: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="subsol"></a>
#### 51. Sótano · Basement (`subsol`)

**Como Rascacielos, pero con los dígitos invertidos.**

Además de las reglas clásicas, un número fuera de la cuadrícula indica cuántas veces, mirando desde ese extremo, aparece un dígito menor que todos los que lo preceden (cuenta el primer dígito). Es lo opuesto a los rascacielos: aquí contamos los mínimos sucesivos. Es Rascacielos con los dígitos invertidos (d pasa a ser N+1−d), por lo que es lógicamente isomorfa a esta.

<table><tr><td align="center"><img src="../../screens/subsol_a.webp" width="300" alt="Sótano: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 16 dados)</sub></td><td align="center"><img src="../../screens/subsol_b.webp" width="300" alt="Sótano: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 8 (fila 1, col. 4): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `subsol-9-medium-2589656574` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 487 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_card.webp" width="200" alt="Sótano: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/subsol_fiche.webp" width="260" alt="Sótano: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_s4.webp" width="200" alt="Sótano: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s6.webp" width="200" alt="Sótano: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s9.webp" width="200" alt="Sótano: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_easy.webp" width="200" alt="Sótano: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/subsol_a.webp" width="200" alt="Sótano: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/subsol_hard.webp" width="200" alt="Sótano: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_notes.webp" width="200" alt="Sótano: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_check.webp" width="200" alt="Sótano: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_solved.webp" width="200" alt="Sótano: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_dark.webp" width="200" alt="Sótano: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/subsol_mobile.webp" width="150" alt="Sótano: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_en.webp" width="300" alt="Sótano: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_rules.webp" width="300" alt="Sótano: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="prodmargin"></a>
#### 52. Producto en el borde · Edge product (`prodmargin`)

**Producto de los dos primeros dígitos.**

Además de las reglas clásicas, un número fuera de la cuadrícula es el producto de los dos primeros dígitos de la fila o columna correspondiente, mirando desde ese extremo.

<table><tr><td align="center"><img src="../../screens/prodmargin_a.webp" width="300" alt="Producto en el borde: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/prodmargin_b.webp" width="300" alt="Producto en el borde: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 1 (fila 3, col. 8): es la única celda de la fila marcada donde puede ir el 1.
- **Código del mismo puzle:** `prodmargin-9-medium-3463419111` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 618 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_card.webp" width="200" alt="Producto en el borde: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_fiche.webp" width="260" alt="Producto en el borde: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_s4.webp" width="200" alt="Producto en el borde: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s6.webp" width="200" alt="Producto en el borde: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s9.webp" width="200" alt="Producto en el borde: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_easy.webp" width="200" alt="Producto en el borde: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_a.webp" width="200" alt="Producto en el borde: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_hard.webp" width="200" alt="Producto en el borde: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_notes.webp" width="200" alt="Producto en el borde: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_check.webp" width="200" alt="Producto en el borde: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_solved.webp" width="200" alt="Producto en el borde: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_dark.webp" width="200" alt="Producto en el borde: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_mobile.webp" width="150" alt="Producto en el borde: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_en.webp" width="300" alt="Producto en el borde: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_rules.webp" width="300" alt="Producto en el borde: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="diffmargin"></a>
#### 53. Diferencia en el borde · Edge difference (`diffmargin`)

**Diferencia de los dos primeros dígitos.**

Además de las reglas clásicas, un número fuera de la cuadrícula es la diferencia (en valor absoluto) entre los dos primeros dígitos de la fila o columna correspondiente, mirando desde ese extremo.

<table><tr><td align="center"><img src="../../screens/diffmargin_a.webp" width="300" alt="Diferencia en el borde: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/diffmargin_b.webp" width="300" alt="Diferencia en el borde: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 2 (fila 6, col. 4): es la única celda de la fila marcada donde puede ir el 2.
- **Código del mismo puzle:** `diffmargin-9-medium-4161532716` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 313 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_card.webp" width="200" alt="Diferencia en el borde: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_fiche.webp" width="260" alt="Diferencia en el borde: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_s4.webp" width="200" alt="Diferencia en el borde: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s6.webp" width="200" alt="Diferencia en el borde: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s9.webp" width="200" alt="Diferencia en el borde: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_easy.webp" width="200" alt="Diferencia en el borde: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_a.webp" width="200" alt="Diferencia en el borde: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_hard.webp" width="200" alt="Diferencia en el borde: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_notes.webp" width="200" alt="Diferencia en el borde: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_check.webp" width="200" alt="Diferencia en el borde: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_solved.webp" width="200" alt="Diferencia en el borde: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_dark.webp" width="200" alt="Diferencia en el borde: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_mobile.webp" width="150" alt="Diferencia en el borde: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_en.webp" width="300" alt="Diferencia en el borde: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_rules.webp" width="300" alt="Diferencia en el borde: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="ascents"></a>
#### 54. Subidas · Ascents (`ascents`)

**Cuántas parejas vecinas crecen.**

Además de las reglas clásicas, un número fuera de la cuadrícula indica cuántas veces, mirando desde ese extremo, un dígito va seguido inmediatamente de uno mayor.

<table><tr><td align="center"><img src="../../screens/ascents_a.webp" width="300" alt="Subidas: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/ascents_b.webp" width="300" alt="Subidas: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 9 (fila 2, col. 3): es la única celda de la columna marcada donde puede ir el 9.
- **Código del mismo puzle:** `ascents-9-medium-1827630994` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 361 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_card.webp" width="200" alt="Subidas: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/ascents_fiche.webp" width="260" alt="Subidas: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_s4.webp" width="200" alt="Subidas: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s6.webp" width="200" alt="Subidas: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s9.webp" width="200" alt="Subidas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_easy.webp" width="200" alt="Subidas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/ascents_a.webp" width="200" alt="Subidas: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/ascents_hard.webp" width="200" alt="Subidas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_notes.webp" width="200" alt="Subidas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_check.webp" width="200" alt="Subidas: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_solved.webp" width="200" alt="Subidas: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_dark.webp" width="200" alt="Subidas: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/ascents_mobile.webp" width="150" alt="Subidas: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_en.webp" width="300" alt="Subidas: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_rules.webp" width="300" alt="Subidas: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="inversions"></a>
#### 55. Inversiones · Inversions (`inversions`)

**Cuántas parejas están en orden inverso.**

Además de las reglas clásicas, un número fuera de la cuadrícula es el número de inversiones de la fila/columna vista desde ese extremo: cuántas parejas de dígitos (no necesariamente vecinos) tienen el de delante mayor que el de detrás.

<table><tr><td align="center"><img src="../../screens/inversions_a.webp" width="300" alt="Inversiones: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/inversions_b.webp" width="300" alt="Inversiones: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 7 (fila 7, col. 6): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `inversions-9-medium-2138830078` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 62 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_card.webp" width="200" alt="Inversiones: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/inversions_fiche.webp" width="260" alt="Inversiones: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_s4.webp" width="200" alt="Inversiones: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s6.webp" width="200" alt="Inversiones: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s9.webp" width="200" alt="Inversiones: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_easy.webp" width="200" alt="Inversiones: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/inversions_a.webp" width="200" alt="Inversiones: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/inversions_hard.webp" width="200" alt="Inversiones: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_notes.webp" width="200" alt="Inversiones: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_check.webp" width="200" alt="Inversiones: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_solved.webp" width="200" alt="Inversiones: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_dark.webp" width="200" alt="Inversiones: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/inversions_mobile.webp" width="150" alt="Inversiones: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_en.webp" width="300" alt="Inversiones: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_rules.webp" width="300" alt="Inversiones: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="cycles"></a>
#### 56. Ciclos · Cycles (`cycles`)

**Cuántos ciclos tiene la permutación.**

Además de las reglas clásicas, la fila/columna leída desde el extremo es una permutación (la posición i tiene el dígito a_i). La pista fuera de la cuadrícula es el número de ciclos de la permutación (la posición i remite a la posición a_i). Tamaños 9×9 y 6×6.

<table><tr><td align="center"><img src="../../screens/cycles_a.webp" width="300" alt="Ciclos: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/cycles_b.webp" width="300" alt="Ciclos: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 4 (fila 2, col. 6): es la única celda de la región marcada donde puede ir el 4.
- **Código del mismo puzle:** `cycles-9-medium-708965529` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 562 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_card.webp" width="200" alt="Ciclos: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cycles_fiche.webp" width="260" alt="Ciclos: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_s6.webp" width="200" alt="Ciclos: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/cycles_s9.webp" width="200" alt="Ciclos: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_easy.webp" width="200" alt="Ciclos: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/cycles_a.webp" width="200" alt="Ciclos: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/cycles_hard.webp" width="200" alt="Ciclos: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_notes.webp" width="200" alt="Ciclos: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_check.webp" width="200" alt="Ciclos: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_solved.webp" width="200" alt="Ciclos: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_dark.webp" width="200" alt="Ciclos: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/cycles_mobile.webp" width="150" alt="Ciclos: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_en.webp" width="300" alt="Ciclos: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_rules.webp" width="300" alt="Ciclos: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="fixedpts"></a>
#### 57. Puntos fijos · Fixed points (`fixedpts`)

**Cuántos dígitos están en su posición.**

Además de las reglas clásicas, un número fuera de la cuadrícula indica cuántos dígitos están en la posición igual a su valor (la segunda celda contiene un 2, etc.), contando desde ese extremo. Tamaños 9×9 y 6×6.

<table><tr><td align="center"><img src="../../screens/fixedpts_a.webp" width="300" alt="Puntos fijos: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/fixedpts_b.webp" width="300" alt="Puntos fijos: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 3 (fila 1, col. 8): ninguna deducción directa; el dígito se toma de la solución única (haría falta una hipótesis).
- **Código del mismo puzle:** `fixedpts-9-medium-3926317386` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 4802 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_card.webp" width="200" alt="Puntos fijos: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_fiche.webp" width="260" alt="Puntos fijos: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_s6.webp" width="200" alt="Puntos fijos: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_s9.webp" width="200" alt="Puntos fijos: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_easy.webp" width="200" alt="Puntos fijos: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_a.webp" width="200" alt="Puntos fijos: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_hard.webp" width="200" alt="Puntos fijos: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_notes.webp" width="200" alt="Puntos fijos: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_check.webp" width="200" alt="Puntos fijos: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_solved.webp" width="200" alt="Puntos fijos: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_dark.webp" width="200" alt="Puntos fijos: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_mobile.webp" width="150" alt="Puntos fijos: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_en.webp" width="300" alt="Puntos fijos: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_rules.webp" width="300" alt="Puntos fijos: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="altsum"></a>
#### 58. Suma alternada · Alternating sum (`altsum`)

**a₁ − a₂ + a₃ − …**

Además de las reglas clásicas, un número fuera de la cuadrícula es la suma alternada de los dígitos, mirando desde ese extremo: el primer dígito menos el segundo más el tercero, y así sucesivamente. Puede ser negativo. Tamaños 9×9 y 6×6.

<table><tr><td align="center"><img src="../../screens/altsum_a.webp" width="300" alt="Suma alternada: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/altsum_b.webp" width="300" alt="Suma alternada: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 3 (fila 9, col. 4): todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de vecindad).
- **Código del mismo puzle:** `altsum-9-medium-1703080656` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 2188 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_card.webp" width="200" alt="Suma alternada: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/altsum_fiche.webp" width="260" alt="Suma alternada: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_s6.webp" width="200" alt="Suma alternada: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/altsum_s9.webp" width="200" alt="Suma alternada: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_easy.webp" width="200" alt="Suma alternada: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/altsum_a.webp" width="200" alt="Suma alternada: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/altsum_hard.webp" width="200" alt="Suma alternada: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_notes.webp" width="200" alt="Suma alternada: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_check.webp" width="200" alt="Suma alternada: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_solved.webp" width="200" alt="Suma alternada: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_dark.webp" width="200" alt="Suma alternada: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/altsum_mobile.webp" width="150" alt="Suma alternada: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_en.webp" width="300" alt="Suma alternada: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_rules.webp" width="300" alt="Suma alternada: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

<a id="dxsum"></a>
#### 59. Sumas en las diagonales · Diagonal X-sums (`dxsum`)

**Los primeros d dígitos de una diagonal, d = primer dígito.**

Además de las reglas clásicas, una pista al final de una diagonal (que parte de la celda del borde) indica la suma de las primeras d celdas de esa diagonal, donde d es el primer dígito de ella; si la diagonal tiene menos de d celdas, se suma toda la diagonal (como en X-Sums, pero en diagonales). Tamaños 9×9 y 6×6.

<table><tr><td align="center"><img src="../../screens/dxsum_a.webp" width="300" alt="Sumas en las diagonales: puzle al inicio"><br><sub>Puzle al inicio (9×9 · medio · 18 dados)</sub></td><td align="center"><img src="../../screens/dxsum_b.webp" width="300" alt="Sumas en las diagonales: tras 4 pasos"><br><sub>Tras 4 pasos de «Paso a paso»</sub></td></tr></table>

- **Último paso explicado por la aplicación:** 1 (fila 8, col. 8): se deduce de las reglas específicas de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.
- **Código del mismo puzle:** `dxsum-9-medium-391021028` (pégalo en «Partida nueva → Código») · esfuerzo del resolutor: 256 ramificaciones

<details><summary><b>Galería completa: todos los tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_card.webp" width="200" alt="Sumas en las diagonales: Tarjeta del Atlas"><br><sub>Tarjeta del Atlas</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_fiche.webp" width="260" alt="Sumas en las diagonales: Ficha (se abre al hacer clic en la tarjeta)"><br><sub>Ficha (se abre al hacer clic en la tarjeta)</sub></td></tr>
</table>

<p><b>Tamaños (nivel medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_s6.webp" width="200" alt="Sumas en las diagonales: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_s9.webp" width="200" alt="Sumas en las diagonales: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificultad</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_easy.webp" width="200" alt="Sumas en las diagonales: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_a.webp" width="200" alt="Sumas en las diagonales: Medio"><br><sub>Medio</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_hard.webp" width="200" alt="Sumas en las diagonales: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_notes.webp" width="200" alt="Sumas en las diagonales: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_check.webp" width="200" alt="Sumas en las diagonales: «Comprobar» con un dígito erróneo (rojo)"><br><sub>«Comprobar» con un dígito erróneo (rojo)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_solved.webp" width="200" alt="Sumas en las diagonales: Solución completa"><br><sub>Solución completa</sub></td></tr>
</table>

<p><b>Temas y dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_dark.webp" width="200" alt="Sumas en las diagonales: Tema oscuro"><br><sub>Tema oscuro</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_mobile.webp" width="150" alt="Sumas en las diagonales: Teléfono (390 px)"><br><sub>Teléfono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_en.webp" width="300" alt="Sumas en las diagonales: Interfaz en inglés"><br><sub>Interfaz en inglés</sub></td></tr>
</table>

<p><b>Panel de reglas en el juego</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_rules.webp" width="300" alt="Sumas en las diagonales: Reglas mostradas junto al tablero"><br><sub>Reglas mostradas junto al tablero</sub></td></tr>
</table>

</details>

