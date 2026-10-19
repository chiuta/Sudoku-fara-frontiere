# Mitwirken

Das Projekt ist eine einzelne HTML-Datei, ohne Abhängigkeiten und ohne Netzwerk. Behalte diese Regel bei: kein CDN, kein `fetch`, keine externen Bibliotheken.

## Struktur
- `engine.js` — die Engine (Solver mit Propagation, Generator, alle Varianten). Läuft im Browser, in einem Worker und in Node.
- `src/` — die Oberfläche: `template.html`, `style.css`, `data.js` (die Steckbriefe der Varianten und die RO/EN-Texte), `app.js`.
- `build.py` — erzeugt `index.html` aus `src/` und `engine.js`. **Bearbeite `index.html` nicht direkt.**
- `test.js` — die Testsuite.

## Ablauf
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
Die CI prüft außerdem, dass `index.html` genau den Quellen entspricht.

## Eine neue Variante
1. Die Regel in `engine.js` (Struktur, ggf. Hinweisgenerator) und ein neuer `PRESETS`-Eintrag.
2. Eine Zeile in `VINFO` in `src/data.js` (RO + EN), mit ehrlich formulierten Regeln: welche Konvention gewählt wurde und wo die Quellen voneinander abweichen.
3. Ein unabhängiger Validator in `test.js` (`semantic`), geschrieben nach dem Text des Steckbriefs, nicht aus der Engine kopiert.
4. Wahre die Kompatibilität der Teilen-Codes: Änderungen, die verändern, was ein bestehender Code erzeugt, werden in `CHANGELOG.md` vermerkt.

Lizenz: MIT (siehe `LICENSE`); Beiträge stehen unter derselben Lizenz.
