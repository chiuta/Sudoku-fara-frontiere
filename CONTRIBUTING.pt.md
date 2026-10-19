# Contribuições

O projeto é um único ficheiro HTML, sem dependências e sem rede. Mantenha esta regra: sem CDN, sem `fetch`, sem bibliotecas externas.

## Estrutura
- `engine.js` — o motor (solucionador com propagação, gerador, todas as variantes). Corre no navegador, num Worker e no Node.
- `src/` — a interface: `template.html`, `style.css`, `data.js` (as fichas das variantes e os textos RO/EN), `app.js`.
- `build.py` — monta o `index.html` a partir de `src/` e `engine.js`. **Não edite o `index.html` diretamente.**
- `test.js` — o conjunto de testes.

## Fluxo de trabalho
```
python3 build.py     # regenerează index.html
node test.js         # ~1,5 minute; toate verificările trebuie să treacă
```
A CI verifica também que o `index.html` corresponde exatamente às fontes.

## Uma variante nova
1. A regra em `engine.js` (estrutura, gerador de pistas se existir) e um novo `PRESETS`.
2. Uma linha em `VINFO` em `src/data.js` (RO + EN), com regras escritas com honestidade: que convenção foi escolhida e onde as fontes divergem.
3. Um validador independente em `test.js` (`semantic`), escrito a partir do texto da ficha, não copiado do motor.
4. Mantenha a compatibilidade dos códigos de partilha: as alterações que mudam o que um código existente gera são registadas em `CHANGELOG.md`.

Licença: MIT (ver `LICENSE`); as contribuições ficam sob a mesma licença.
