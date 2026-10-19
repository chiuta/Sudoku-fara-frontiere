# Contributions

Le projet est un seul fichier HTML, sans dépendances et sans réseau. Respectez cette règle : pas de CDN, pas de `fetch`, pas de bibliothèques externes.

## Structure
- `engine.js` — le moteur (solveur avec propagation, générateur, toutes les variantes). Fonctionne dans le navigateur, dans un Worker et dans Node.
- `src/` — l'interface : `template.html`, `style.css`, `data.js` (les fiches des variantes et les textes RO/EN), `app.js`.
- `build.py` — assemble `index.html` à partir de `src/` et de `engine.js`. **Ne modifiez pas `index.html` directement.**
- `test.js` — la suite de tests.

## Flux de travail
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
La CI vérifie aussi que `index.html` correspond exactement aux sources.

## Une nouvelle variante
1. La règle dans `engine.js` (structure, générateur d'indices s'il y en a un) et une nouvelle entrée `PRESETS`.
2. Une ligne dans `VINFO` de `src/data.js` (RO + EN), avec des règles rédigées honnêtement : quelle convention a été retenue et où les sources divergent.
3. Un validateur indépendant dans `test.js` (`semantic`), écrit à partir du texte de la fiche, et non copié du moteur.
4. Conservez la compatibilité des codes de partage : les changements qui modifient ce qu'un code existant génère sont notés dans `CHANGELOG.md`.

Licence : MIT (voir `LICENSE`) ; les contributions sont sous la même licence.
