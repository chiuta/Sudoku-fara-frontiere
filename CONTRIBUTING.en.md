# Contributing

The project is a single HTML file, with no dependencies and no network. Keep this rule: no CDN, no `fetch`, no external libraries.

## Structure
- `engine.js` — the engine (solver with propagation, generator, all the variants). Runs in the browser, in a Worker and in Node.
- `src/` — the interface: `template.html`, `style.css`, `data.js` (the variant sheets and the RO/EN texts), `app.js`.
- `build.py` — assembles `index.html` from `src/` and `engine.js`. **Do not edit `index.html` directly.**
- `test.js` — the test suite.

## Workflow
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
CI also checks that `index.html` exactly matches the sources.

## A new variant
1. The rule in `engine.js` (structure, a clue generator if it has one) and a new `PRESETS` entry.
2. A row in `VINFO` in `src/data.js` (RO + EN), with honestly written rules: which convention was chosen and where sources differ.
3. An independent validator in `test.js` (`semantic`), written from the text of the sheet, not copied from the engine.
4. Keep share-code compatibility: changes that alter what an existing code generates are noted in `CHANGELOG.md`.

License: MIT (see `LICENSE`); contributions are under the same license.
