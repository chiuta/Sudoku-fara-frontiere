// Teste v2.0.0 — tehnici explicate pas cu pas + generator pe niveluri tehnice. Rulare: node tests/tech.test.mjs
import {createRequire as __fffCR} from 'node:module';
const __fffAxe = () => process.env.FFF_AXE || process.env.AXE_PATH || (() => { try { return __fffCR(import.meta.url).resolve('axe-core/axe.min.js'); } catch { return undefined; } })();
import {createRequire} from 'module';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url);
const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url));
const URL_APP = 'file://' + path.join(HERE, '..', 'index.html');
const AXE = __fffAxe();
let pass = 0, fail = 0;
const ok = (c, n, i) => { if (c) { pass++; console.log('  ok   ' + n); } else { fail++; console.log('  FAIL ' + n + (i === undefined ? '' : ' ' + JSON.stringify(i).slice(0, 500))); } };
const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox']});
const net = [], errs = [];
const ctx = await browser.newContext({viewport: {width: 1200, height: 1000}, locale: 'ro-RO'});
await ctx.route(/^https?:/, r => { net.push(r.request().url()); r.abort(); });
await ctx.addInitScript(() => { window.__SFF_TEST = {}; });
const page = await ctx.newPage();
page.on('pageerror', e => errs.push(e.message));
page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto(URL_APP);
console.log('Sudoku — tehnici explicate + niveluri tehnice');
// ---------- 1. motor: configurații construite ----------
const U = await page.evaluate(() => {
  const T = SFF.TECH, n = 9, FULL = 511, o = {};
  const mk = f => { const c = new Int32Array(81).fill(FULL); f(c); return T.create(new Int32Array(81), 9, c); };
  const rc = (r, c) => r * 9 + c, bit = d => 1 << (d - 1);
  // X-Wing pe cifra 1: rândurile 0 și 4 au cifra 1 doar în coloanele 0 și 4
  let S = mk(c => { for (const r of [0, 4]) for (let k = 0; k < 9; k++) if (k !== 0 && k !== 4) c[rc(r, k)] &= ~bit(1); });
  let s = S.try('xwing');
  o.xw = s && {tech: s.tech, elims: s.elims.length, allOne: s.elims.every(e => e[1] === 1 && (e[0] % 9 === 0 || e[0] % 9 === 4) && ![0, 4].includes(Math.floor(e[0] / 9))), houses: s.houses.map(h => h.k + h.i).join()};
  // Swordfish pe cifra 2: rândurile 0, 3, 6 au cifra 2 doar în coloanele 1, 4, 7 (fără X-Wing)
  S = mk(c => { for (const r of [0, 3, 6]) for (let k = 0; k < 9; k++) if (![1, 4, 7].includes(k)) c[rc(r, k)] &= ~bit(2); c[rc(0, 4)] &= ~bit(2); c[rc(3, 7)] &= ~bit(2); c[rc(6, 1)] &= ~bit(2); });
  s = S.try('swordfish'); o.sf = s && {tech: s.tech, elims: s.elims.length, cols: s.elims.every(e => [1, 4, 7].includes(e[0] % 9) && ![0, 3, 6].includes(Math.floor(e[0] / 9)))};
  // XY-Wing: pivot (0,0) {1,2}, aripi (0,4) {1,3} și (4,0) {2,3} → 3 dispare din (4,4)
  S = mk(c => { c[rc(0, 0)] = bit(1) | bit(2); c[rc(0, 4)] = bit(1) | bit(3); c[rc(4, 0)] = bit(2) | bit(3); });
  s = S.try('xywing'); o.xy = s && {z: s.digits[2], elims: s.elims.map(e => e.join(':')).join()};
  // candidați blocați (pointing): în regiunea 0, cifra 5 doar în rândul 0
  S = mk(c => { for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) if (r !== 0) c[rc(r, k)] &= ~bit(5); });
  s = S.try('pointing'); o.pt = s && {n: s.elims.length, row0: s.elims.every(e => e[0] < 9 && e[0] % 9 >= 3 && e[1] === 5)};
  // pereche goală în rândul 0
  S = mk(c => { c[rc(0, 0)] = bit(1) | bit(2); c[rc(0, 1)] = bit(1) | bit(2); });
  s = S.try('nakedPair'); o.np = s && {n: s.elims.length, cells: s.cells.join()};
  // pereche ascunsă în rândul 0: 1 și 2 doar în celulele 0 și 1
  S = mk(c => { for (let k = 2; k < 9; k++) c[rc(0, k)] &= ~(bit(1) | bit(2)); });
  s = S.try('hiddenPair'); o.hp = s && {n: s.elims.length, cells: s.cells.slice().sort().join()};
  // fără fals pozitiv: pe o grilă cu toți candidații nu există niciun șablon de eliminare
  S = T.create(new Int32Array(81), 9); o.none = ['xwing', 'swordfish', 'xywing', 'pointing', 'claiming', 'nakedPair', 'hiddenPair', 'nakedTriple', 'hiddenTriple', 'nakedSingle', 'hiddenSingle'].filter(k => S.try(k)).join();
  return o;
});
ok(U.none === '', 'pe o grilă goală (toți candidații) nu se detectează nicio tehnică', U.none);
ok(U.xw && U.xw.tech === 'xwing' && U.xw.elims === 14 && U.xw.allOne, 'X-Wing: 14 eliminări exact în coloanele 0 și 4', U.xw);
ok(U.sf && U.sf.tech === 'swordfish' && U.sf.cols && U.sf.elims === 18, 'Swordfish: eliminări doar în coloanele 1, 4, 7', U.sf);
ok(U.xy && U.xy.z === 3 && U.xy.elims === '40:3', 'XY-Wing: cifra 3 dispare din (4,4)', U.xy);
ok(U.pt && U.pt.row0 && U.pt.n === 6, 'pointing: cifra 5 eliminată din restul rândului', U.pt);
ok(U.np && U.np.n === 14, 'pereche goală: 14 eliminări', U.np);
ok(U.hp && U.hp.n === 14 && U.hp.cells === '0,1', 'pereche ascunsă: 14 eliminări în două celule', U.hp);
// ---------- 2. corectitudine: fiecare pas e sound, fiecare plasare e cifra din soluție ----------
const C = await page.evaluate(() => {
  const T = SFF.TECH, out = {puz: 0, sound: true, solved: 0, techs: {}, bad: null, unique: true};
  for (const diff of ['easy', 'medium', 'hard']) for (let seed = 1; seed <= 14; seed++) {
    const P = SFF.generate({preset: 'clasic', n: 9, difficulty: diff, seed: seed * 313});
    const a = T.analyze(P.givens, 9);
    out.puz++;
    for (const st of a.steps) {
      out.techs[st.tech] = (out.techs[st.tech] || 0) + 1;
      if (st.place && P.solution[st.place.cell] !== st.place.digit) { out.sound = false; out.bad = [diff, seed, st.tech, 'place']; }
      for (const e of st.elims) if (P.solution[e[0]] === e[1]) { out.sound = false; out.bad = [diff, seed, st.tech, 'elim']; }
    }
    if (a.solved) { out.solved++; if (a.vals.some((v, i) => v !== P.solution[i])) { out.sound = false; out.bad = [diff, seed, 'final']; } }
  }
  return out;
});
ok(C.sound, 'toate pașii sunt corecți față de soluție (plasări și eliminări)', C.bad);
ok(C.solved >= 30, 'majoritatea grilelor generate se rezolvă doar cu tehnici', C);
ok(Object.keys(C.techs).length >= 4, 'se întâlnesc cel puțin 4 tehnici diferite în probe', C.techs);
// ---------- 3. generator pe niveluri ----------
const G = await page.evaluate(() => {
  const T = SFF.TECH, out = [];
  for (const tier of [1, 2, 3]) for (const seed of [11, 222]) {
    const P = SFF.generate({preset: 'clasic', n: 9, difficulty: 't' + tier, seed});
    const a = T.analyze(P.givens, 9, {noSteps: true}), lo = tier > 1 ? T.analyze(P.givens, 9, {noSteps: true, maxLevel: tier - 1}) : {solved: false};
    const P2 = SFF.generate({preset: 'clasic', n: 9, difficulty: 't' + tier, seed});
    const S = SFF.makeSolver({layout: {kind: 'std', n: 9}, mods: [], cons: []});
    const r = S.solve(Int32Array.from(P.givens), {limit: 2, budget: 200000});
    out.push({tier, seed, got: P.techTier, solved: a.solved, atTier: a.tier, belowSolves: lo.solved, same: JSON.stringify(P.givens) === JSON.stringify(P2.givens), code: P.code, unique: r.count === 1, clues: P.clueCount});
  }
  return out;
});
for (const g of G) {
  ok(g.got === g.tier && g.solved && g.atTier === g.tier, `t${g.tier} (sămânță ${g.seed}): grila cere exact nivelul ${g.tier}`, g);
  ok(g.tier === 1 || !g.belowSolves, `t${g.tier} (sămânță ${g.seed}): nu se rezolvă cu tehnici de nivel inferior`, g);
  ok(g.same && g.unique && g.code === `clasic-9-t${g.tier}-${g.seed}`, `t${g.tier} (sămânță ${g.seed}): determinist, soluție unică, cod corect`, g);
}
const bad = await page.evaluate(() => { const r = []; for (const sp of [{preset: 'diag', n: 9, difficulty: 't2', seed: 1}, {preset: 'clasic', n: 6, difficulty: 't1', seed: 1}, {preset: 'clasic', n: 9, difficulty: 't9', seed: 1}]) { try { SFF.generate(sp); r.push('no-error'); } catch (e) { r.push('err'); } } return r; });
ok(bad.every(x => x === 'err'), 'nivelurile tehnice sunt respinse pentru alte variante/mărimi sau niveluri inexistente', bad);
// ---------- 4. interfață ----------
await page.locator('#t-play').click();
await page.selectOption('#sel-var', 'clasic'); await page.selectOption('#sel-size', '9');
const opts = await page.locator('#sel-diff option').evaluateAll(o => o.map(x => x.value));
ok(['t1', 't2', 't3', 't4'].every(x => opts.includes(x)), 'la clasic 9×9 apar nivelurile tehnice', opts);
await page.selectOption('#sel-diff', 't2');
await page.locator('#b-new').click();
await page.waitForFunction(() => __SFF_TEST.api.game && __SFF_TEST.api.game.P && __SFF_TEST.api.game.P.difficulty === 't2', null, {timeout: 60000});
const info = await page.locator('#st-info').innerText();
ok(/Tehnic 2/.test(info) && /tehnică maximă/.test(info), 'bara de stare arată nivelul și tehnica maximă', info);
const code = await page.inputValue('#code');
ok(/^clasic-9-t2-\d+$/.test(code), 'codul de partajare conține nivelul', code);
// pași cu tehnică până la final
let steps = 0, techMsgs = [], stuck = false;
for (let i = 0; i < 400; i++) {
  if (await page.evaluate(() => __SFF_TEST.api.game.solved)) break;
  await page.locator('#a-tech').click();
  const m = await page.locator('#msg').innerText();
  if (/Nicio tehnică/.test(m)) { stuck = true; break; }
  techMsgs.push(m); steps++;
}
ok(await page.evaluate(() => __SFF_TEST.api.game.solved), 'butonul „Tehnică” duce grila t2 până la soluție', {steps, stuck});
ok(techMsgs.length > 5 && techMsgs.slice(0, -1).every(m => /^(Single|Candidați|Pereche|Triplet|X-Wing|XY-Wing|Swordfish|Corecție)/.test(m)), 'fiecare pas începe cu numele tehnicii', techMsgs.slice(0, 3));
ok(techMsgs.some(m => /eliminări/.test(m)) || techMsgs.some(m => /Single/.test(m)), 'pașii sunt explicați în cuvinte');
ok(await page.evaluate(() => { const g = __SFF_TEST.api.game; for (let i = 0; i < g.cnt; i++) if (g.vals[i] && g.vals[i] !== g.P.solution[i]) return false; return true; }), 'nicio cifră greșită introdusă de pași');
// aceeași partidă din cod
await page.fill('#code', code); await page.locator('#b-open').click();
await page.waitForFunction(c => __SFF_TEST.api.game && __SFF_TEST.api.game.P.ucode === c && !__SFF_TEST.api.game.solved, code, {timeout: 60000});
ok(true, 'codul se redeschide (aceeași grilă)');
// cifră greșită → corecție
const wrongRes = await page.evaluate(() => { const g = __SFF_TEST.api.game; let i = 0; while (g.P.givens[i]) i++; g.vals[i] = (g.P.solution[i] % 9) + 1; return i; });
await page.locator('#a-tech').click();
ok(/Corecție/.test(await page.locator('#msg').innerText()), 'cifra greșită declanșează corecția, nu o tehnică');
// nivel 3: pași de eliminare (notițele se actualizează, nu se pune cifră)
await page.selectOption('#sel-var', 'clasic'); await page.selectOption('#sel-size', '9'); await page.selectOption('#sel-diff', 't3'); await page.locator('#b-new').click();
await page.waitForFunction(() => __SFF_TEST.api.game && __SFF_TEST.api.game.P.difficulty === 't3', null, {timeout: 90000});
let elimMsgs = [], placed0 = await page.evaluate(() => Array.from(__SFF_TEST.api.game.vals).filter(Boolean).length);
for (let i = 0; i < 500 && !(await page.evaluate(() => __SFF_TEST.api.game.solved)); i++) {
  const before = await page.evaluate(() => Array.from(__SFF_TEST.api.game.vals).filter(Boolean).length);
  await page.locator('#a-tech').click();
  const after = await page.evaluate(() => Array.from(__SFF_TEST.api.game.vals).filter(Boolean).length);
  if (after === before) elimMsgs.push(await page.locator('#msg').innerText());
}
ok(await page.evaluate(() => __SFF_TEST.api.game.solved), 'grila t3 se rezolvă pas cu pas cu tehnici');
ok(elimMsgs.length >= 1 && elimMsgs.every(m => /eliminări/.test(m) && /Notițele/.test(m)), 'pașii de eliminare descriu eliminările și notițele', elimMsgs.slice(0, 2));
ok(elimMsgs.some(m => /^(X-Wing|XY-Wing|Triplet|Pereche|Candidați)/.test(m)), 'apar tehnici dincolo de singles', elimMsgs.slice(0, 3));
// variantă ne-clasică: indisponibil
await page.selectOption('#sel-var', 'diag'); await page.locator('#b-new').click();
await page.waitForFunction(() => __SFF_TEST.api.game && __SFF_TEST.api.game.P.vid === 'diag', null, {timeout: 60000});
const opts2 = await page.locator('#sel-diff option').evaluateAll(o => o.map(x => x.value));
ok(!opts2.some(x => x.startsWith('t')), 'la alte variante nivelurile tehnice dispar', opts2);
await page.locator('#a-tech').click();
ok(/doar pentru Sudoku clasic/.test(await page.locator('#msg').innerText()), 'butonul Tehnică e refuzat la variante ne-clasice');
// limbi
await page.selectOption('#sel-var', 'clasic'); await page.selectOption('#sel-size', '9'); await page.selectOption('#sel-diff', 't1'); await page.locator('#b-new').click();
await page.waitForFunction(() => __SFF_TEST.api.game && __SFF_TEST.api.game.P.difficulty === 't1', null, {timeout: 60000});
for (const l of ['ro', 'en', 'fr', 'it', 'es', 'pt', 'de', 'hu']) {
  await page.selectOption('#b-lang', l);
  await page.evaluate(() => { __SFF_TEST.api.game.solved = false; });
  await page.locator('#a-tech').click();
  const m = await page.locator('#msg').innerText(), lab = await page.locator('#a-tech').innerText(), inf = await page.locator('#st-info').innerText();
  ok(m.length > 20 && !/\b(tx_|tn_|hw_|tech_)/.test(m + lab + inf) && !/\{[a-z]\}/.test(m), 'limba ' + l + ': mesajul tehnicii e tradus', m);
}
if (AXE) {
  await page.evaluate(fs.readFileSync(AXE, 'utf8') + '\n;0');
  const v = await page.evaluate(async () => (await axe.run(document, {resultTypes: ['violations']})).violations.map(x => x.id + ':' + x.nodes.map(n => n.target.join(' ')).slice(0, 2).join('|')));
  const nou = v.filter(x => !/^(aria-required-children:#board|heading-order:#h-new)/.test(x)); // cele două sunt anterioare funcției noi
  ok(nou.length === 0, 'axe: nicio violare nouă cu butonul „Tehnică”', nou);
}
ok(errs.length === 0, 'fără erori JS/CSP', errs); ok(net.length === 0, '0 cereri de rețea', net);
await browser.close();
console.log(`${pass} ok, ${fail} fail`); process.exit(fail ? 1 : 0);
