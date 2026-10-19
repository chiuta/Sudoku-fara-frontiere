# Contributi

Il progetto è un unico file HTML, senza dipendenze e senza rete. Mantieni questa regola: niente CDN, niente `fetch`, niente librerie esterne.

## Struttura
- `engine.js` — il motore (solver con propagazione, generatore, tutte le varianti). Gira nel browser, in un Worker e in Node.
- `src/` — l'interfaccia: `template.html`, `style.css`, `data.js` (le schede delle varianti e i testi RO/EN), `app.js`.
- `build.py` — assembla `index.html` da `src/` e `engine.js`. **Non modificare `index.html` direttamente.**
- `test.js` — la suite di test.

## Flusso di lavoro
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
La CI verifica anche che `index.html` corrisponda esattamente ai sorgenti.

## Una nuova variante
1. La regola in `engine.js` (struttura, generatore di indizi se presente) e un nuovo `PRESETS`.
2. Una riga in `VINFO` in `src/data.js` (RO + EN), con regole scritte onestamente: quale convenzione è stata scelta e dove le fonti divergono.
3. Un validatore indipendente in `test.js` (`semantic`), scritto a partire dal testo della scheda, non copiato dal motore.
4. Mantieni la compatibilità dei codici di condivisione: le modifiche che cambiano ciò che genera un codice esistente vanno annotate in `CHANGELOG.md`.

Licenza: MIT (vedi `LICENSE`); i contributi sono sotto la stessa licenza.
