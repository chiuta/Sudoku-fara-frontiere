// Sudoku: P.unique = true doar când generatorul a verificat efectiv unicitatea (căutare de 2 soluții). Rulare: node tests/unic.test.mjs
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require = createRequire(import.meta.url);
const SFF = require(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'engine.js'));
let ok = 0, bad = 0;
const check = (n, c, x) => { if (c) { ok++; console.log('  ok   ' + n); } else { bad++; console.log('  FAIL ' + n + (x !== undefined ? ' → ' + JSON.stringify(x) : '')); } };
for (const [diff, seed] of [['easy', 3], ['medium', 7], ['hard', 11], ['t2', 5]]) {
  const P = SFF.generate({preset: 'clasic', n: 9, difficulty: diff, seed});
  const u = SFF.makeSolver(P).solve(Int32Array.from(P.givens), {limit: 2, budget: 200000});
  check(`clasic ${diff}: unique=true și există exact o soluție`, P.unique === true && u.count === 1 && !u.aborted, {unique: P.unique, count: u.count});
}
const P4 = SFF.generate({preset: 'clasic', n: 4, difficulty: 'easy', seed: 1});
check('4×4: câmpul unique este boolean', typeof P4.unique === 'boolean', P4.unique);
console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
