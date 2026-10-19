# Közreműködés

A projekt egyetlen HTML-fájl, függőségek és hálózat nélkül. Tartsd be ezt a szabályt: nincs CDN, nincs `fetch`, nincsenek külső könyvtárak.

## Felépítés
- `engine.js` — a motor (propagációs megoldó, generátor, az összes változat). Fut a böngészőben, Workerben és Node-ban is.
- `src/` — a felület: `template.html`, `style.css`, `data.js` (a változatok adatlapjai és az RO/EN szövegek), `app.js`.
- `build.py` — az `index.html`-t állítja össze a `src/` és az `engine.js` fájlokból. **Ne szerkeszd közvetlenül az `index.html`-t.**
- `test.js` — a tesztcsomag.

## Munkamenet
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
A CI azt is ellenőrzi, hogy az `index.html` pontosan megfelel a forrásoknak.

## Új változat
1. A szabály az `engine.js`-ben (szerkezet, ha van, nyomgenerátor) és egy új `PRESETS`-bejegyzés.
2. Egy sor a `src/data.js` `VINFO` részében (RO + EN), őszintén megírt szabályokkal: melyik konvenciót választottuk, és hol térnek el a források.
3. Független validátor a `test.js`-ben (`semantic`), az adatlap szövegéből írva, nem a motorból másolva.
4. Őrizd meg a megosztási kódok kompatibilitását: azokat a változtatásokat, amelyek módosítják, mit generál egy meglévő kód, a `CHANGELOG.md`-ben kell jelezni.

Licenc: MIT (lásd a `LICENSE` fájlt); a közreműködések ugyanezen licenc alatt állnak.
