# Contribuții

Proiectul e un singur fișier HTML, fără dependențe și fără rețea. Păstrează această regulă: fără CDN, fără `fetch`, fără biblioteci externe.

## Structura
- `engine.js` — motorul (solver cu propagare, generator, toate variantele). Rulează în browser, în Worker și în Node.
- `src/` — interfața: `template.html`, `style.css`, `data.js` (fișele variantelor și textele RO/EN), `app.js`.
- `build.py` — asamblează `index.html` din `src/` și `engine.js`. **Nu edita `index.html` direct.**
- `test.js` — suita de teste.

## Flux
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
CI verifică și că `index.html` corespunde exact sursei.

## O variantă nouă
1. Regula în `engine.js` (structură, `compile`, generator de indicii dacă are) și un `PRESETS` nou.
2. Rând în `VINFO` din `src/data.js` (RO + EN), cu reguli scrise onest: ce convenție s-a ales și unde sursele diferă.
3. Validator independent în `test.js` (`semantic`), scris din textul fișei, nu copiat din motor.
4. Păstrează compatibilitatea codurilor de partajare: schimbările care modifică ce generează un cod existent se notează în `CHANGELOG.md`.

Licență: MIT (vezi `LICENSE`); contribuțiile sunt sub aceeași licență.
