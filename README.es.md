# Sudoku fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · **Español** · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versión:** 1.6.0 · **Última actualización:** 2026-10-19

Idiomas de la interfaz: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Un atlas de variantes del Sudoku, con generador y resolutor que se ejecutan en local — en un único archivo HTML.

**Licencia:** [MIT](LICENSE) · **Aplicación en línea:** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Guía ilustrada (una sola página):** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.es.html>

![Algunas variantes, tras «Paso a paso»](docs/screenshot.png)

## Qué es

Un atlas interactivo de 136 entradas (≈130 con reglas distintas: Sótano, Sudoku con cero y Filas lexicográficas son lógicamente casi idénticas a otras variantes y se declaran como tales en sus fichas) (clásicas, con regiones especiales, topologías y saltos fairy, reglas globales, pistas en las líneas, en el borde, en las celdas o en la cuadrícula, cuadrículas compuestas, cubos e hipercubos, grecolatino y parientes cercanos), más 7 modos de juego. Cada variante tiene una ficha con sus reglas y se puede jugar en local: los puzles se generan en el navegador, con una **solución única demostrada** por un resolutor con propagación. También puedes combinar reglas en una «Combinación personalizada».

## Guía de uso

### Inicio rápido

1. Abre `index.html` en un navegador (funciona sin conexión, sin instalación).
2. En **Atlas** eliges una variante (búsqueda, categorías, «Variante de hoy», «Sorpréndeme»); cada variante tiene una ficha con las reglas.
3. En **Jugar** eliges la variante, el tamaño, la dificultad y el modo, y luego pulsas **Partida nueva**. El puzle se genera en el navegador, con solución única.

<p align="center"><img src="docs/screens/ui_atlas.es.webp" width="760" alt="El atlas de variantes"><br><sub>Atlas: búsqueda, filtros por categoría y tarjetas con los tamaños disponibles.</sub></p>

### La pantalla de juego

<p align="center"><img src="docs/screens/ui_play.es.webp" width="760" alt="La pantalla de juego"><br><sub>El tablero, la barra de estado (variante · tamaño · pistas · dificultad · ramificaciones necesarias para el resolutor · tiempo), el panel «Partida nueva» con código para compartir, el teclado numérico y las acciones.</sub></p>

- **Cifras:** seleccionas una celda (o varias, con Mayús/arrastre) y pulsas la cifra, en el teclado o en el teclado en pantalla. Las cifras agotadas aparecen atenuadas.
- **Teclado:** flechas = mover la selección, cifras/letras = rellenar, `Retroceso`/`Supr`/`0` = borrar, `N` = notas, `Ctrl+Z` / `Ctrl+Y` = deshacer / rehacer.
- **Notas:** el botón «Notas» (o `N`) pasa a candidatos pequeños en la celda; «Notas automáticas» los calcula a partir de las reglas visibles.
- **Comprobaciones:** «Mostrar los conflictos», «Resaltar la misma cifra», «Resaltar las celdas relacionadas» y «Borrar las notas automáticamente» se pueden marcar; «Comprobar» señala las cifras erróneas.
- **Pista** rellena una celda (por lógica sobre candidatos; si no hay un paso directo, la cifra viene de la solución). **Mostrar la solución** lo rellena todo.
- **Código:** el código junto a «Partida nueva» regenera el mismo puzle en la misma versión de la aplicación; lo pegas en «Abrir».

<p align="center"><img src="docs/screens/ui_notes.es.webp" width="760" alt="Notas"><br><sub>Notas: los candidatos pequeños en una celda.</sub></p>

### Paso a paso y ▶ Auto

**Paso a paso** coloca una cifra y muestra por qué: las celdas que la justifican se colorean (amarillo), la celda nueva es verde y bajo el tablero aparece la explicación. **▶ Auto** ejecuta los pasos por sí solo, cada 1,6 s. Los motivos posibles: la única cifra que queda en la celda; la única celda de una fila/columna/región donde puede ir la cifra; una deducción a partir de las reglas de la variante; o, cuando no hay deducción directa, la cifra de la solución (dicho explícitamente). Si tienes una cifra errónea, el primer paso la corrige. Cada paso se puede deshacer; está desactivado en Hardcore y Memoria.

<p align="center"><img src="docs/screens/ui_step.es.webp" width="760" alt="Paso a paso"><br><sub>Tras tres pasos: la última cifra (verde) y las celdas que la justifican (amarillo), con la explicación bajo el tablero.</sub></p>

### Modos de juego

Se eligen en «Partida nueva → Modo de juego»; el código recibe el sufijo `@modo` (excepciones: «Puzle del día» y Maratón no tienen sufijo; un código de Maratón abre un puzle corriente).

- **Orb:** solo se ven las celdas a 2 pasos como máximo de la selección.
- **Memoria:** las pistas se ven unos segundos y luego se ocultan; el botón de vistazo cuesta 30 s. Sin pistas, comprobación, notas automáticas, «Paso a paso» ni resaltado de conflictos.
- **Maratón:** 5 puzles seguidos (fácil, fácil, medio, medio, difícil) con un tiempo total.
- **Duelo:** un adversario-cronómetro rellena una celda cada pocos segundos, a partir de la solución conocida (sin lógica); si termina primero, pierdes.
- **Hardcore:** 3 vidas, cada cifra errónea cuesta una; sin pista, comprobación ni notas automáticas.
- **Puzle del día:** el mismo puzle para todos en un día dado (fecha UTC), con una racha de días consecutivos guardada en local.
- **Sonoro:** cada cifra tiene una nota; una fila, una columna o una caja completa suena como un arpegio.

<p align="center"><img src="docs/screens/ui_mode_orb.es.webp" width="760" alt="Modo Orb"><br><sub>Modo Orb: solo es visible el entorno de la selección.</sub></p>

### Cubos e hipercubos

Las capas se muestran como un mosaico de rebanadas. Para los cubos 3D aparece también una «Vista 3D»: arrastras con el ratón para girar el cubo, y el deslizador oculta las capas delanteras. Los hipercubos 4D/5D quedan solo por capas.

<p align="center"><img src="docs/screens/ui_3d.es.webp" width="760" alt="Vista 3D"><br><sub>Cubo latino 3D 4×4×4 en la vista 3D giratoria.</sub></p>

### Resolutor clásico 9×9

Pegas un puzle (81 caracteres: 1–9, con los huecos como 0 o `.`), marcas opcionalmente reglas adicionales (diagonales, ventanas hyper, anti-caballo, etc.) y pulsas **Resolver**: la aplicación indica si la solución es única, múltiple o inexistente. «Jugar este puzle» lo lleva al tablero de juego.

<p align="center"><img src="docs/screens/ui_solver.es.webp" width="760" alt="Resolutor"><br><sub>El resolutor con el puzle de ejemplo: «Solución única».</sub></p>

### Teléfono y tema oscuro

La interfaz se adapta a pantallas estrechas; tema claro/oscuro/automático (el botón 🌓), texto ampliado (el botón A), idioma RO/EN (el botón RO).

<p align="center"><img src="docs/screens/ui_mobile.es.webp" width="260" alt="Teléfono, tema claro"> &nbsp; <img src="docs/screens/ui_dark.es.webp" width="260" alt="Teléfono, tema oscuro"></p>

### Combinación personalizada

En Atlas, «Combinación personalizada» (o la variante «Combinación personalizada» de «Partida nueva») permite marcar cualquier conjunto compatible de reglas de cuadrícula y pistas (p. ej. Killer + diagonales, termómetros + flechas).

### Galería de la interfaz (todos los tipos de pantalla)

**Atlas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.es.webp" width="330" alt="Filtrado por categoría"><br><sub>Filtrado por categoría</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.es.webp" width="330" alt="Búsqueda por nombre"><br><sub>Búsqueda por nombre</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.es.webp" width="330" alt="Léxico"><br><sub>Léxico</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlas en inglés"><br><sub>Atlas en inglés</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.es.webp" width="330" alt="Atlas, tema oscuro"><br><sub>Atlas, tema oscuro</sub></td></tr></table>

**Modos de juego**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.es.webp" width="330" alt="Memoria: las pistas son visibles"><br><sub>Memoria: las pistas son visibles</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.es.webp" width="330" alt="Memoria: las pistas se han ocultado"><br><sub>Memoria: las pistas se han ocultado</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.es.webp" width="330" alt="Maratón"><br><sub>Maratón</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.es.webp" width="330" alt="Duelo (el adversario rellena celdas)"><br><sub>Duelo (el adversario rellena celdas)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.es.webp" width="330" alt="Hardcore: un error cuesta una vida"><br><sub>Hardcore: un error cuesta una vida</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.es.webp" width="330" alt="Puzle del día"><br><sub>Puzle del día</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.es.webp" width="330" alt="Sonoro"><br><sub>Sonoro</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.es.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Juego y herramientas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.es.webp" width="330" alt="▶ Auto en marcha"><br><sub>▶ Auto en marcha</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.es.webp" width="330" alt="Puzle resuelto"><br><sub>Puzle resuelto</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.es.webp" width="330" alt="Combinación personalizada (lista de reglas)"><br><sub>Combinación personalizada (lista de reglas)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.es.webp" width="330" alt="Vista 3D girada"><br><sub>Vista 3D girada</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Vista de impresión"><br><sub>Vista de impresión</sub></td></tr></table>

**Resolutor y Acerca de**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.es.webp" width="330" alt="Resolutor: cuadrícula vacía (soluciones múltiples)"><br><sub>Resolutor: cuadrícula vacía (soluciones múltiples)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.es.webp" width="330" alt="Resolutor: sin solución"><br><sub>Resolutor: sin solución</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.es.webp" width="330" alt="La página «Acerca de»"><br><sub>La página «Acerca de»</sub></td></tr></table>

## Catálogo de variantes (136)

Cada variante tiene a continuación: las reglas de la ficha, una captura con un puzle real generado por la aplicación (el tamaño predeterminado de la variante (9×9 donde existe, si no p. ej. 5×5 o 4×4); nivel «medio»), una segunda captura tras 4 pasos de «Paso a paso», la explicación real del último paso y un código con el que regeneras exactamente el mismo puzle. Bajo cada variante, una «Galería completa» (desplegable) contiene los demás tipos de capturas: la tarjeta en el Atlas y la ficha, todos los tamaños, fácil/medio/difícil, notas automáticas, comprobación con una cifra errónea, la solución completa, el tema oscuro, el teléfono, la interfaz en inglés y el panel de reglas. Las capturas están en `docs/screens/`. Las capturas se hacen automáticamente desde la versión 1.4.0, en tema claro.

**Catálogo completo:** [docs/catalog/es/README.md](docs/catalog/es/README.md)

| Categoría | Variantes |
|---|---|
| **Tamaño y símbolos** | [Clásico](docs/catalog/es/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/es/01-marime-si-simboluri.md#wordoku) · [Cuadrado latino](docs/catalog/es/01-marime-si-simboluri.md#latin) · [Sudoku con cero](docs/catalog/es/01-marime-si-simboluri.md#zero) |
| **Regiones y grupos** | [Sudoku X](docs/catalog/es/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/es/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (irregular)](docs/catalog/es/02-regiuni-si-grupuri.md#jigsaw) · [Grupos disjuntos](docs/catalog/es/02-regiuni-si-grupuri.md#dg) · [Puntos centrales](docs/catalog/es/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/es/02-regiuni-si-grupuri.md#girandola) · [Nueves dispersos](docs/catalog/es/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/es/02-regiuni-si-grupuri.md#asterisk) · [Diagonal simple](docs/catalog/es/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/es/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/es/02-regiuni-si-grupuri.md#pandiag) |
| **Vecinos** | [Anti-caballo](docs/catalog/es/03-vecini.md#antiknight) · [Anti-rey](docs/catalog/es/03-vecini.md#antiking) · [Sin consecutivos](docs/catalog/es/03-vecini.md#nonconsec) · [Milagro](docs/catalog/es/03-vecini.md#miracle) |
| **Paridad, puntos, signos** | [Par–impar](docs/catalog/es/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/es/04-paritate-puncte-semne.md#kropki) · [Consecutivo](docs/catalog/es/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/es/04-paritate-puncte-semne.md#xv) · [Comparaciones](docs/catalog/es/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/es/04-paritate-puncte-semne.md#batt) · [Cuádruples](docs/catalog/es/04-paritate-puncte-semne.md#quad) · [Solo pares marcados](docs/catalog/es/04-paritate-puncte-semne.md#evenonly) · [Solo impares marcados](docs/catalog/es/04-paritate-puncte-semne.md#oddonly) · [Fortaleza](docs/catalog/es/04-paritate-puncte-semne.md#fortress) · [Mínimo / Máximo](docs/catalog/es/04-paritate-puncte-semne.md#minmax) · [Indexación](docs/catalog/es/04-paritate-puncte-semne.md#indexing) · [Razón ×3](docs/catalog/es/04-paritate-puncte-semne.md#ratio) · [Diferencia](docs/catalog/es/04-paritate-puncte-semne.md#diff) · [Kropki solo marcados](docs/catalog/es/04-paritate-puncte-semne.md#kropkipos) · [XV solo marcados](docs/catalog/es/04-paritate-puncte-semne.md#xvpos) · [Consecutivo solo marcados](docs/catalog/es/04-paritate-puncte-semne.md#consecpos) · [Sin pistas](docs/catalog/es/04-paritate-puncte-semne.md#clueless) |
| **Sumas** | [Killer](docs/catalog/es/05-sume.md#killer) · [Little Killer](docs/catalog/es/05-sume.md#littlekiller) · [Little Killer único](docs/catalog/es/05-sume.md#luk) |
| **Pistas en el borde** | [Sandwich](docs/catalog/es/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/es/06-indicii-pe-margine.md#xsum) · [Frame (los tres primeros)](docs/catalog/es/06-indicii-pe-margine.md#frame) · [Rascacielos](docs/catalog/es/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/es/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/es/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/es/06-indicii-pe-margine.md#radar) · [Sándwich numérico](docs/catalog/es/06-indicii-pe-margine.md#sandnum) · [Sándwich de paridad](docs/catalog/es/06-indicii-pe-margine.md#sandpar) · [Sándwich doble](docs/catalog/es/06-indicii-pe-margine.md#sand2) · [Sótano](docs/catalog/es/06-indicii-pe-margine.md#subsol) · [Producto en el borde](docs/catalog/es/06-indicii-pe-margine.md#prodmargin) · [Diferencia en el borde](docs/catalog/es/06-indicii-pe-margine.md#diffmargin) · [Subidas](docs/catalog/es/06-indicii-pe-margine.md#ascents) · [Inversiones](docs/catalog/es/06-indicii-pe-margine.md#inversions) · [Ciclos](docs/catalog/es/06-indicii-pe-margine.md#cycles) · [Puntos fijos](docs/catalog/es/06-indicii-pe-margine.md#fixedpts) · [Suma alternada](docs/catalog/es/06-indicii-pe-margine.md#altsum) · [Sumas en las diagonales](docs/catalog/es/06-indicii-pe-margine.md#dxsum) |
| **Líneas** | [Termómetros](docs/catalog/es/07-linii.md#thermo) · [Flechas](docs/catalog/es/07-linii.md#arrow) · [Renban](docs/catalog/es/07-linii.md#renban) · [Susurros alemanes](docs/catalog/es/07-linii.md#whisper) · [Palíndromo](docs/catalog/es/07-linii.md#palindrome) · [Entre líneas](docs/catalog/es/07-linii.md#between) · [Líneas entrópicas](docs/catalog/es/07-linii.md#entropic) · [Líneas modulares](docs/catalog/es/07-linii.md#modular) · [Susurros neerlandeses](docs/catalog/es/07-linii.md#dutch) · [Nabner](docs/catalog/es/07-linii.md#nabner) · [Termómetro lento](docs/catalog/es/07-linii.md#slowthermo) · [Línea de paridad](docs/catalog/es/07-linii.md#parityline) · [Línea de igual paridad](docs/catalog/es/07-linii.md#sameparity) · [Lockout](docs/catalog/es/07-linii.md#lockout) · [Flecha doble](docs/catalog/es/07-linii.md#doublearrow) · [Zipper](docs/catalog/es/07-linii.md#zipper) · [Líneas con sumas por región](docs/catalog/es/07-linii.md#regionsum) · [Flecha media](docs/catalog/es/07-linii.md#avgarrow) · [Flecha producto](docs/catalog/es/07-linii.md#prodarrow) · [Flecha «píldora»](docs/catalog/es/07-linii.md#pillarrow) · [Niebla](docs/catalog/es/07-linii.md#fog) · [Legato](docs/catalog/es/07-linii.md#legato) · [Consonancia](docs/catalog/es/07-linii.md#consonant) · [Paso fijo](docs/catalog/es/07-linii.md#fixstep) · [Línea complementaria](docs/catalog/es/07-linii.md#compline) · [Zigzag](docs/catalog/es/07-linii.md#zigzag) · [Fibonacci](docs/catalog/es/07-linii.md#fibonacci) · [Peldaños](docs/catalog/es/07-linii.md#steps) · [Progresión aritmética](docs/catalog/es/07-linii.md#progression) · [Eco](docs/catalog/es/07-linii.md#echo) · [Línea divisible](docs/catalog/es/07-linii.md#divisible) · [Línea prima](docs/catalog/es/07-linii.md#primeline) |
| **Cuadrículas compuestas** | [Samurai](docs/catalog/es/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/es/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/es/08-grile-compuse.md#gattai3) · [Sohei (anillo de cuatro)](docs/catalog/es/08-grile-compuse.md#sohei) · [Kazaguruma (molino de viento)](docs/catalog/es/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/es/08-grile-compuse.md#tripledoku) · [Cruz](docs/catalog/es/08-grile-compuse.md#cross) |
| **Parientes cercanos** | [Futoshiki](docs/catalog/es/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/es/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/es/09-rude-apropiate.md#strimko) |
| **Topologías y movimientos fairy** | [Anti-alfil](docs/catalog/es/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-camello](docs/catalog/es/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-cebra](docs/catalog/es/10-topologii-si-mutari-fairy.md#antizebra) · [Toro anti-rey](docs/catalog/es/10-topologii-si-mutari-fairy.md#torusking) · [Toro anti-caballo](docs/catalog/es/10-topologii-si-mutari-fairy.md#torusknight) · [Cilindro anti-rey](docs/catalog/es/10-topologii-si-mutari-fairy.md#cylking) · [Möbius anti-rey](docs/catalog/es/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein anti-rey](docs/catalog/es/10-topologii-si-mutari-fairy.md#kleinking) · [Plano proyectivo anti-rey](docs/catalog/es/10-topologii-si-mutari-fairy.md#projking) |
| **Reglas globales** | [Simetría complementaria](docs/catalog/es/11-reguli-globale.md#symcomp) · [Paridad simétrica](docs/catalog/es/11-reguli-globale.md#symparity) · [Centro de gravedad](docs/catalog/es/11-reguli-globale.md#cgrav) · [Filas lexicográficas](docs/catalog/es/11-reguli-globale.md#lexrows) · [Extremos adyacentes](docs/catalog/es/11-reguli-globale.md#extremes) · [Cajas equilibradas](docs/catalog/es/11-reguli-globale.md#boxbalance) · [El cinco solitario](docs/catalog/es/11-reguli-globale.md#lonely5) · [Sin celdas solitarias](docs/catalog/es/11-reguli-globale.md#nolonely) · [Sin progresiones](docs/catalog/es/11-reguli-globale.md#noprog) · [Cajas semimágicas](docs/catalog/es/11-reguli-globale.md#semimagic) |
| **Pistas en las celdas** | [Relieve](docs/catalog/es/12-indicii-in-celule.md#relief) · [Minas impares](docs/catalog/es/12-indicii-in-celule.md#oddsweeper) · [Brújula](docs/catalog/es/12-indicii-in-celule.md#compass) · [Suma en el cuadrado](docs/catalog/es/12-indicii-in-celule.md#quadsum) · [Piedra 2×2](docs/catalog/es/12-indicii-in-celule.md#stone) · [Dominó](docs/catalog/es/12-indicii-in-celule.md#domino) · [Píldora de cuadrado perfecto](docs/catalog/es/12-indicii-in-celule.md#pillsq) · [Jaula prima](docs/catalog/es/12-indicii-in-celule.md#primecage) · [Jaula equilibrada](docs/catalog/es/12-indicii-in-celule.md#balcage) · [Duplicadores](docs/catalog/es/12-indicii-in-celule.md#doubler) · [Clones en espejo](docs/catalog/es/12-indicii-in-celule.md#clonemir) |
| **Dimensiones superiores** | [Cubo latino 3D](docs/catalog/es/13-dimensiuni-superioare.md#cube3) · [Cubo con cajas 2×2](docs/catalog/es/13-dimensiuni-superioare.md#cubebox) · [Hipercubo 4D](docs/catalog/es/13-dimensiuni-superioare.md#hyper4) · [Hipercubo 5D](docs/catalog/es/13-dimensiuni-superioare.md#hyper5) · [Grecolatino (cuadrados ortogonales)](docs/catalog/es/13-dimensiuni-superioare.md#greco) |

Cada categoría tiene su propia página en [`docs/catalog/`](docs/catalog/README.md) (capturas y galerías completas).

## Funciones

- **Variantes desde la versión 1.0 (38):** clásico (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), wordoku, cuadrado latino, Sudoku X, Hyper (Windoku), Jigsaw, grupos disjuntos, puntos centrales, anti-caballo, anti-rey, sin consecutivos, Milagro, par–impar, Kropki, consecutivo, XV, comparaciones, Battenburg, cuádruples, Killer, Little Killer, Sándwich, X-Sums, Frame, rascacielos, termómetros, flechas, Renban, susurros alemanes, palíndromo, entre líneas, líneas entrópicas, líneas modulares, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Añadidas en la versión 1.1 (24):** Girandola (corregida en 1.4), Asterisk, diagonal simple, susurros neerlandeses, Nabner, termómetro lento, línea de paridad (alternante), línea de igual paridad, solo pares marcados, solo impares marcados, Little Killer único, Fortaleza, Mínimo/Máximo, Lockout, flecha doble, Zipper, Rossini, Outside, Clone, líneas con sumas por región, flecha media, flecha producto, flecha «píldora», Strimko.
- **Añadidas en la versión 1.2 (nivel 3, 3):** Indexación (la primera cifra de la fila indica la columna del 1), Razón ×3 (círculos para pares 3:1), Niebla (las pistas aparecen a medida que resuelves; el puzle está construido de modo que la simple propagación solo pueda continuar con lo que se ve).
- **Añadidas en la versión 1.3 (70):**
  - *Topologías y saltos fairy (9):* Anti-alfil, Anti-camello, Anti-cebra, Toro anti-rey, Toro anti-caballo, Cilindro, Möbius, Klein y plano proyectivo anti-rey.
  - *Reglas globales (12):* Pandiagonal, Sudoku con cero, Simetría complementaria, Paridad simétrica, Centro de gravedad, Filas lexicográficas, Extremos adyacentes, Cajas equilibradas, El cinco solitario, Sin celdas solitarias, Sin progresiones, Cajas semimágicas.
  - *Pistas en el borde (13):* Radar, Sándwich numérico, Sándwich de paridad, Sándwich doble, Sótano, Producto en el borde, Diferencia en el borde, Subidas, Inversiones, Ciclos, Puntos fijos, Suma alternada, Sumas en las diagonales.
  - *Pistas en las celdas y jaulas (11):* Relieve, Minas impares, Brújula, Suma en el cuadrado, Piedra 2×2, Dominó, Píldora de cuadrado perfecto, Jaula prima, Jaula equilibrada, Duplicadores, Clones en espejo.
  - *Puntos (5):* Diferencia, Kropki / XV / Consecutivo solo marcados, Sin pistas (solo puntos Kropki).
  - *Líneas (11):* Legato, Consonancia, Paso fijo, Línea complementaria, Zigzag, Fibonacci, Peldaños, Progresión aritmética, Eco, Línea divisible, Línea prima.
  - *Cuadrículas compuestas (4):* Sohei, Kazaguruma, Cruz, Tripledoku (V).
  - *Dimensiones superiores (5):* Cubo latino 3D, Cubo con cajas 2×2, Hipercubo 4D, Hipercubo 5D, Grecolatino.
- **Modos de juego (7):** Orb, Memoria, Maratón, Duelo, Hardcore, Puzle del día, Sonoro. Se eligen en «Partida nueva»; el código para compartir recibe el sufijo `@modo` (no en el Puzle del día ni en el Maratón).
- **Combinación personalizada:** cualquier conjunto compatible de reglas de cuadrícula + pistas (p. ej. Killer + diagonales, termómetros + flechas).
- **Juego:** selección múltiple, notas, deshacer/rehacer, pista (lógica sobre candidatos), notas automáticas, comprobación, conflictos resaltados, cronómetro, guardado automático, impresión.
- **Código para compartir:** `variante-tamaño-dificultad-semilla` regenera el mismo puzle en la misma versión.
- **Resolutor clásico 9×9** con reglas adicionales opcionales; indica si la solución es única, múltiple o inexistente.
- **Atlas:** búsqueda, categorías, «Variante de hoy», «Sorpréndeme», léxico, exportación CSV, cita BibTeX.
- Tema claro/oscuro/automático, texto ampliado, interfaz en 8 idiomas (RO, EN, FR, IT, ES, PT, DE, HU).
- El **Puzle del día** usa la fecha UTC; la racha de días consecutivos se guarda en local (`sff_daily`).

## Cómo genera

El motor elige una cuadrícula resuelta que respete las reglas, deduce de ella las pistas (jaulas, termómetros, puntos...), y luego quita las cifras dadas una a una, solo mientras el resolutor demuestre que la solución sigue siendo única. La generación se ejecuta en un Web Worker creado a partir del mismo archivo (sin red); si el Worker no está disponible, se ejecuta en el hilo principal.

## Límites

- «Paso a paso» rellena una cifra y resalta por qué (la única cifra que queda en la celda; la única celda posible de una fila/columna/región; una deducción a partir de las reglas de la variante; o, cuando no hay deducción directa, la cifra de la solución, marcada como tal). «▶ Auto» ejecuta los pasos por sí solo, cada 1,6 s. Desactivado en Hardcore y Memoria; cada paso se puede deshacer.
- La dificultad fácil/medio/difícil es solo el número de pistas conservadas. El puzle muestra también una medida del esfuerzo del resolutor (0 = se resuelve solo por propagación; si no, el número de ramificaciones), que no es una evaluación de las técnicas humanas. Si la generación tarda más de 12 s, la dificultad baja automáticamente (pero no en el «Puzle del día» ni en los códigos compartidos).
- Probado en Chromium (incluso abierto como file://). Firefox y Safari/iOS no pudieron probarse en el entorno de desarrollo; si el Worker desde un Blob está bloqueado, la aplicación recurre a la generación en el hilo principal (interfaz bloqueada durante la generación).
- Accesibilidad: el teclado (flechas, cifras, N, Ctrl+Z) y el anuncio por voz de la celda seleccionada; el tablero es SVG y no es una herramienta completa para lectores de pantalla.
- El estado guardado tiene un número de versión; un formato desconocido se aparta (`sff_game_bad`), no se borra.
- «Difícil» quita tantas cifras como puede; en variantes con muchas pistas en la cuadrícula pueden quedar muy pocas cifras dadas.
- Las cuadrículas compuestas solo tienen las reglas clásicas; las combinaciones muy cargadas pueden tardar más o fallar (la aplicación lo indica).
- 16×16 y 25×25 usan los símbolos 1–9 y letras (A–G y A–P respectivamente).
- **Geometrías elegidas por mí** (las fuentes difieren): Sohei, Kazaguruma, Cruz, Tripledoku (V); la definición de Dominó; el pegado de los bordes en Möbius, Klein y el plano proyectivo; «Extremos adyacentes» con vecinos incluidas las diagonales (con vecinos solo ortogonales no existen cuadrículas 9×9); Cajas semimágicas en filas y columnas (las cajas totalmente mágicas, con diagonales, son imposibles).
- **Hipercubos y cubos:** se muestran por capas (mosaico de rebanadas) y, los 3D, en una vista 3D giratoria; en los cubos 3D existe además una «Vista 3D» giratoria (arrastras con el ratón, el deslizador oculta las capas delanteras); los hipercubos 4D/5D quedan solo por capas. Al ser muy rígidos, en «Difícil» quedan solo unas pocas cifras dadas (en 5D solo unas pocas de las 243 celdas). Grecolatino: tamaños 3, 4, 5, 7 (6 es imposible; 8 y 9 omitidos por velocidad).
- **Anti-wazir** no existe: prohibir la misma cifra en celdas vecinas ortogonalmente ya es una regla de cualquier Sudoku. «Anti-alfil» significa el salto 2×2, no un alfil deslizante. Los elementos «Strings complementary/equal» de la lista de trabajo no son variantes separadas: la idea queda cubierta por Línea complementaria y Eco.
- **Variantes lógicamente cercanas o idénticas (indicadas en las fichas):** Sudoku con cero (solo otros símbolos respecto al Clásico), Filas lexicográficas (se reduce a «la primera columna es 1…N»), Sótano (Rascacielos con las cifras invertidas).
- **Duelo:** el adversario es un cronómetro que rellena celdas a partir de la solución conocida, no un resolutor con lógica.
- Las reglas siguen las convenciones habituales; las fichas indican qué variante de convención se eligió. Para algunas variantes nuevas las fuentes difieren y fijé una convención explícita: Girandola (desde 1.4: esquinas, centro y r2c5, r5c2, r5c8, r8c5, según Regexp::Sudoku; la disposición antigua es ahora «Nueves dispersos»), «línea de paridad» (alternante, con la variante «igual paridad» aparte), Rossini (la flecha apunta hacia la mayor de las tres primeras cifras), Outside (las cifras del borde aparecen entre las tres primeras celdas), Zipper (todos los pares simétricos suman el centro), Líneas con sumas por región (la suma en cada caja atravesada es la misma), Fortaleza (solo cuentan los vecinos no marcados).

## Privacidad y red

- **Almacenamiento local:** `localStorage`, claves `sff_lang`, `sff_theme`, `sff_size`, `sff_game`, `sff_daily` (idioma, tema, tamaño del texto, la partida en curso, la racha del Puzle del día) y `sff_game_bad` (estado guardado en un formato desconocido, conservado).
- **Red:** en el código no hay `fetch`, `XMLHttpRequest`, CDN ni recursos externos. La única URL del archivo es el espacio de nombres SVG (`http://www.w3.org/2000/svg`), que no genera ninguna solicitud.

## Estructura del repositorio

```
index.html          aplicația (generat; se deschide direct în browser)
engine.js           motorul: solver, generator, variantele
src/                interfața (template.html, style.css, data.js, app.js)
build.py            asamblează index.html din src/ + engine.js
test.js             suita de teste (node test.js)
docs/               capturi (docs/screens), catalogul pe categorii (docs/catalog), GHID.html + GHID.<lang>.html (ghid ilustrat; se văd pe Pages)
CHANGELOG.md        istoric versiuni
CONTRIBUTING.md     cum contribui
LICENSE             MIT
```

Publicación en GitHub Pages: Settings → Pages → Branch `main`, carpeta `/ (root)`; `index.html` está en la raíz y usa solo rutas relativas, por lo que funciona también bajo `https://<usuario>.github.io/<repositorio>/`. Véanse [`CHANGELOG.md`](CHANGELOG.md) y [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Ejecución local / sin conexión

Descarga `index.html` y ábrelo en un navegador; no requiere internet.

## Pruebas

También se ejecutan automáticamente en GitHub (Actions, `.github/workflows/ci.yml`): compilación reproducible, `node test.js` y comprobación de que `index.html` no tiene recursos externos.

`engine.js` es el motor (la misma fuente está incluida en `index.html`). El conjunto `test.js` se ejecuta con Node:

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

Para cada variante y tamaño, en nivel fácil y difícil, comprueba: la solución respeta las reglas, el puzle tiene solución única (recuento con el mismo resolutor que el generador, con un presupuesto amplio; las enumeraciones 4×4 y el validador de semántica están escritos por separado), la solución sobrevive a la propagación a partir de subconjuntos aleatorios de pistas (*soundness*). Además, en 4×4 el número de soluciones sin pistas se compara con una enumeración exhaustiva (p. ej. 288 para el clásico), y se verifican algunas combinaciones personalizadas. Desde la versión 1.1, cada puzle es verificado también por un validador de la semántica de las reglas escrito aparte del motor, directamente a partir del texto de las fichas (comprueba, por ejemplo, Zipper, Lockout, las flechas media/producto/píldora, Clone, las cadenas de Strimko). Desde la versión 1.3, el validador independiente cubre también las topologías, los saltos fairy, las reglas globales, las pistas en el borde, en las celdas, las jaulas, las líneas y los puntos (fórmulas reescritas aparte del motor), y para cubos, hipercubos y grecolatino el número de soluciones sin pistas se compara con una enumeración DFS aparte (p. ej. 21888 para el cubo 4×4×4 con cajas 2×2, 72 y 6912 para el grecolatino 3 y 4). Última ejecución: 3144 comprobaciones, todas superadas; el validador independiente cubre ahora también los tipos de 1.0–1.2, y una prueba de mutantes (16.506 cambios de nombre de cifras) muestra acuerdo total entre el motor y el validador; 660 puzles 4×4 fueron confirmados únicos por una enumeración aparte; estrés adicional con 12 semillas por variante (5652 puzles, cero errores); además, una prueba de estrés con 5 puzles en cada variante, tamaño mínimo y máximo, sin ningún error (la generación más lenta, en «Difícil» en algunas variantes con reglas globales, tardó unos 21 s). Límite: la verificación cruzada por enumeración exhaustiva existe solo para las variantes que tienen tamaño 4×4 (y para cubos/grecolatino pequeños, como se muestra arriba).

## Lo que no está implementado del nivel 3

No se incluyen: Chaos Construction, Deconstruction, los híbridos con otros puzles (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), las cuadrículas superpuestas Flower/Butterfly (Sohei y Kazaguruma existen desde 1.3, con una geometría elegida por mí), las celdas modificadoras, Schrödinger, «liar», Vudoku, Capsule, Deficit. Algunas cambian el modo de juego o exigen resolutores con otro tipo de lógica; para otras, las fuentes encontradas no fijan ni las reglas ni la geometría, e inventarlas significaría presentar como variante conocida algo que no lo es.

## Licencia

**MIT** — véase [`LICENSE`](LICENSE). Se aplica a todo el repositorio: el código (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), los textos (README, las fichas) y las capturas de `docs/screens/`. Puedes usar, copiar, modificar, publicar y vender, a condición de conservar el aviso de derechos de autor y el texto de la licencia. El programa se ofrece «tal cual», sin garantías.

Notas:
- La aplicación no incluye bibliotecas ni recursos externos, por lo que no hay licencias de terceros que respetar.
- Los nombres y las reglas de las variantes del Sudoku (Killer, Kropki, Sandwich, etc.) designan tipos de puzle conocidos públicamente; los textos de las fichas están escritos para esta aplicación. Los nombres siguen siendo de los autores y comunidades que los crearon.

## Autor

Alexio — Alexandru-Ionuț Chiuță, contacto: <alexio@trom.tf>.

## Resumen

Un atlas de 136 entradas de Sudoku (≈130 con reglas distintas; Sótano, Cero y Filas lexicográficas son casi duplicados de otras variantes y lo dicen en sus fichas) (más 7 modos de juego: Orb, Memoria, Maratón, Duelo, Hardcore, Puzle del día, Sonoro) con generador y resolutor locales, en un solo archivo HTML. Los puzles se generan en el navegador con una solución única demostrada (las cifras dadas solo se quitan mientras un resolutor con propagación confirme la unicidad). Incluye un mezclador de reglas personalizado, notas/deshacer/pistas, códigos para compartir, un resolutor clásico 9×9, exportación CSV y cita BibTeX. Sin solicitudes de red; el estado se guarda en `localStorage` (`sff_*`). La dificultad (fácil/medio/difícil) es solo el número de cifras dadas conservadas; cada puzle muestra además una cifra medida: cuántas ramificaciones necesita un resolutor con propagación (0 = se resuelve solo por propagación). Es esfuerzo del resolutor, no una valoración de técnicas humanas. Ejecuta `node test.js` para el conjunto de pruebas del motor. Licencia: MIT (véase `LICENSE`), que abarca código, textos y capturas.

Este README contiene una guía de uso con capturas de la interfaz y un catálogo con dos capturas reales, las reglas y un código reproducible para cada una de las 136 variantes (`screens/`).

## Notas v1.4

- **Girandola** se corrigió según la descripción de Regexp::Sudoku (esquinas, centro, r2c5, r5c2, r5c8, r8c5). La disposición antigua (esquinas, puntos medios de los lados, centro) queda como «Nueves dispersos» (`sparse9`). Los códigos `girandola-…` generados antes de 1.4 producen ahora otro puzle.
- Corregido en 1.4 a partir de las capturas: la etiqueta de la pestaña «Jugar» (clave de texto duplicada), las listas que quedaban con valores antiguos tras «Abrir» con un código y el mensaje «Celdas erróneas» que permanecía tras deshacer.
- Comprobaciones 1.4: validador escrito a ciegas a partir del texto de las fichas (135/135 de las variantes existentes entonces pasaron; «Nueves dispersos» se añadió después y tiene validador en `test.js`), contraste con fuentes publicadas en 56 variantes (las fichas Regionsum, Rossini y Little Unique Killer recibieron precisiones), una ejecución única de 1818 puzles en todas las variantes y tamaños ≤12 sin errores (el script no forma parte del repositorio), «Paso a paso» probado en las 136 variantes.
- Aún sin confirmar por las fuentes: la disposición de Sohei, Kazaguruma, Cruz, Tripledoku V; el tratamiento de las cifras repetidas en Quad y Duplicadores; la conectividad diagonal en Strimko.
