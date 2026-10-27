// Teste v2.2.0 — „Puzzle zilnic 9×9 cu dificultate la alegere" (mod separat). Rulare: PW_ROOT=/opt/npm-tools/x.js node tests/daily9.test.mjs
import {createRequire} from 'module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url);
const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url));
const URL_APP = 'file://' + path.join(HERE, '..', 'index.html');
let pass = 0, fail = 0;
const ok = (c, n, i) => { if (c) { pass++; console.log('  ok   ' + n); } else { fail++; console.log('  FAIL ' + n + (i === undefined ? '' : ' ' + JSON.stringify(i).slice(0, 500))); } };
const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox']});
const net = [], errs = [];
const ctx = await browser.newContext({viewport: {width: 1200, height: 1000}, locale: 'en-US'});
await ctx.route(/^https?:/, r => { net.push(r.request().url()); r.abort(); });
await ctx.addInitScript(() => { window.__SFF_TEST = {}; });
const page = await ctx.newPage();
page.on('pageerror', e => errs.push(e.message));
page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto(URL_APP);
console.log('Sudoku — puzzle zilnic 9×9 cu dificultate la alegere');
await page.click('#t-play');
ok(await page.evaluate(() => Array.from(document.querySelectorAll('#sel-mode option')).some(o => o.value === 'daily9')), 'modul „daily9” apare în lista de moduri');
async function gen(mode, diff) {
  await page.selectOption('#sel-mode', mode); if (diff) await page.selectOption('#sel-diff', diff);
  await page.evaluate(() => { window.__SFF_TEST.api.game && (window.__SFF_TEST.api.game.P.__old = true); });
  await page.locator('#b-new').click();
  await page.waitForFunction(m => { const g = __SFF_TEST.api.game; return g && g.P && g.P.mode === m && !g.P.__old; }, mode, {timeout: 120000});
  await page.waitForTimeout(200);
  return page.evaluate(() => { const g = __SFF_TEST.api.game, P = g.P; return {code: P.ucode, diff: P.difficulty, n: P.n, mode: P.mode, givens: P.givens.filter(Boolean).length, sol: Array.from(P.solution), g: Array.from(P.givens), mx: g.mx && g.mx.id, bar: (document.getElementById('modebar') || {}).innerText}; });
}
const validSol = s => { for (let i = 0; i < 9; i++) { const r = new Set(), c = new Set(), b = new Set(); for (let j = 0; j < 9; j++) { r.add(s[i * 9 + j]); c.add(s[j * 9 + i]); b.add(s[(Math.floor(i / 3) * 3 + Math.floor(j / 3)) * 9 + (i % 3) * 3 + (j % 3)]); } if (r.size !== 9 || c.size !== 9 || b.size !== 9) return false; } return true; };
const res = {};
for (const d of ['easy', 'medium', 'hard', 't2']) {
  const a = await gen('daily9', d), b = await gen('daily9', d);
  res[d] = a;
  ok(a.code === b.code, 'daily9/' + d + ': același cod de două ori în aceeași zi', [a.code, b.code]);
  ok(a.n === 9 && a.mx === 'daily9' && !/@/.test(a.code) && a.code.startsWith('clasic-9-' + d + '-'), 'daily9/' + d + ': clasic 9×9, dificultatea cerută, cod fără sufix @', a.code);
  ok(validSol(a.sol) && a.g.every((v, i) => !v || v === a.sol[i]), 'daily9/' + d + ': soluție validă, indiciile coincid cu ea');
}
ok(new Set(Object.values(res).map(r => r.code)).size === 4, 'dificultăți diferite → coduri diferite', Object.values(res).map(r => r.code));
ok(res.easy.givens > res.hard.givens, 'ușor are mai multe indicii decât greu', [res.easy.givens, res.hard.givens]);
// modul „Puzzle-ul zilei" clasic rămâne cu seed-ul vechi (20000000 + zi)
const dd = await gen('daily', null);
const dayN = await page.evaluate(() => Math.floor(Date.now() / 86400000));
ok(dd.code.endsWith('-' + (20000000 + dayN)), 'modul „daily" păstrează seed-ul 20000000 + zi (coduri neschimbate)', [dd.code, dayN]);
// seria
await page.evaluate(() => { try { localStorage.removeItem('sudoku-fara-frontiere.daily9'); } catch (e) {} });
const d9 = await gen('daily9', 'easy');
const bar = await page.evaluate(() => document.body.innerText);
ok(/streak|record|best/i.test(bar) && /\d{4}-\d{2}-\d{2}/.test(bar), 'bara de mod afișează data și seria');
ok(errs.length === 0, 'fără erori JS', errs); ok(net.length === 0, '0 cereri de rețea', net);
await browser.close();
console.log(`${pass} ok, ${fail} fail`); process.exit(fail ? 1 : 0);
