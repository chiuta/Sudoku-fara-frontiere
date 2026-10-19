# Contribuciones

El proyecto es un único archivo HTML, sin dependencias y sin red. Mantén esta regla: sin CDN, sin `fetch`, sin bibliotecas externas.

## Estructura
- `engine.js` — el motor (solucionador con propagación, generador, todas las variantes). Se ejecuta en el navegador, en un Worker y en Node.
- `src/` — la interfaz: `template.html`, `style.css`, `data.js` (las fichas de las variantes y los textos RO/EN), `app.js`.
- `build.py` — ensambla `index.html` a partir de `src/` y `engine.js`. **No edites `index.html` directamente.**
- `test.js` — el conjunto de pruebas.

## Flujo de trabajo
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
La CI también comprueba que `index.html` coincida exactamente con las fuentes.

## Una variante nueva
1. La regla en `engine.js` (estructura, generador de pistas si lo tiene) y un nuevo `PRESETS`.
2. Una fila en `VINFO` de `src/data.js` (RO + EN), con reglas redactadas con honestidad: qué convención se eligió y dónde difieren las fuentes.
3. Un validador independiente en `test.js` (`semantic`), escrito a partir del texto de la ficha, no copiado del motor.
4. Mantén la compatibilidad de los códigos para compartir: los cambios que alteren lo que genera un código existente se anotan en `CHANGELOG.md`.

Licencia: MIT (véase `LICENSE`); las contribuciones se publican bajo la misma licencia.
