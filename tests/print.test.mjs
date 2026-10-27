// Teste v2.1.0 — foaie tipăribilă (puzzle + soluție) și puzzle-ul zilei determinist. Rulare: node tests/print.test.mjs
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
console.log('Sudoku — foaie tipăribilă + puzzle-ul zilei');
await page.click('#t-play');
ok(await page.locator('#b-print-sol').count() === 1 && (await page.locator('#b-print-sol').innerText()).length > 3, 'butonul „Tipărește cu soluția” există');
await page.selectOption('#sel-var', 'clasic'); await page.selectOption('#sel-size', '9'); await page.selectOption('#sel-diff', 'easy');
await page.locator('#b-new').click();
await page.waitForFunction(() => __SFF_TEST.api.game && __SFF_TEST.api.game.P && __SFF_TEST.api.game.P.difficulty === 'easy', null, {timeout: 60000});
// utilizatorul a introdus o cifră și o notiță: nu trebuie să apară în foaia tipărită
const st0 = await page.evaluate(() => { const g = __SFF_TEST.api.game; let i = 0; while (g.P.givens[i]) i++; g.vals[i] = g.P.solution[i]; let j = i + 1; while (g.P.givens[j] || g.vals[j]) j++; g.notes[j] = 3; g.sel = new Set([i]); return {i, j, givens: Array.from(g.P.givens).filter(x => x > 0).length, ucode: g.P.ucode}; });
const snap = await page.evaluate(() => { const g = __SFF_TEST.api.game; return {vals: Array.from(g.vals).join(), notes: Array.from(g.notes).join(), sel: Array.from(g.sel).join()}; });
const built = await page.evaluate(() => __SFF_TEST.print.build(true));
ok(built === true, 'foaia se construiește (puzzle + soluție)');
const pages = await page.locator('#print-sheet .ps-page').count();
ok(pages === 2, 'două pagini: puzzle și soluție', pages);
const p1 = await page.evaluate(() => { const s = document.querySelectorAll('#print-sheet .ps-page')[0].querySelector('svg.pboard'); return {dg: s.querySelectorAll('text.dg').length, du: s.querySelectorAll('text.du').length, nt: s.querySelectorAll('text.nt').length, ids: s.querySelectorAll('[id]').length, hit: s.querySelectorAll('[data-i]').length}; });
ok(p1.dg === st0.givens && p1.du === 0 && p1.nt === 0, 'pagina 1: doar indiciile (' + st0.givens + '), fără cifre ale jucătorului și fără notițe', p1);
ok(p1.ids === 0 && p1.hit === 0, 'clona nu are id-uri duplicate și nici zone de click', p1);
const sol = await page.evaluate(() => { const g = __SFF_TEST.api.game, s = document.querySelectorAll('#print-sheet .ps-page')[1].querySelector('svg.pboard'); const txt = Array.from(s.querySelectorAll('text.dg, text.du')).map(e => e.textContent); return {n: txt.length, cnt: g.cnt, sum: txt.reduce((a, b) => a + (+b || 0), 0), exp: Array.from(g.P.solution).reduce((a, b) => a + b, 0)}; });
ok(sol.n === sol.cnt && sol.sum === sol.exp, 'pagina 2: toate cele 81 de celule, suma cifrelor = suma soluției', sol);
const after = await page.evaluate(() => { const g = __SFF_TEST.api.game; return {vals: Array.from(g.vals).join(), notes: Array.from(g.notes).join(), sel: Array.from(g.sel).join(), mx: g.mx && g.mx.id}; });
ok(after.vals === snap.vals && after.notes === snap.notes && after.sel === snap.sel, 'starea jocului (cifre, notițe, selecție) este restabilită după construirea foii', after);
const head = await page.locator('#print-sheet .ps-page').first().locator('.ps-meta').innerText();
ok(head.includes(st0.ucode), 'antetul conține codul puzzle-ului', head);
// evenimentele de tipărire (fără dialog): beforeprint/afterprint
await page.evaluate(() => window.dispatchEvent(new Event('beforeprint')));
ok(await page.evaluate(() => document.body.classList.contains('psheet')) && await page.locator('#print-sheet .ps-page').count() === 1, 'beforeprint: foaie cu o pagină (fără soluție) și clasa psheet');
await page.emulateMedia({media: 'print'});
const vis = await page.evaluate(() => ({sheet: getComputedStyle(document.getElementById('print-sheet')).display, main: getComputedStyle(document.querySelector('main')).display, bg: getComputedStyle(document.querySelector('#print-sheet svg.pboard rect')).fill}));
ok(vis.sheet === 'block' && vis.main === 'none', 'în modul print se vede doar foaia', vis);
const pdf = await page.pdf({format: 'A4'});
const nPages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
ok(pdf.length > 3000 && pdf.slice(0, 4).toString() === '%PDF' && nPages === 1, 'PDF A4 cu o pagină (fără soluție): ' + pdf.length + ' octeți', nPages);
await page.evaluate(() => { window.dispatchEvent(new Event('afterprint')); __SFF_TEST.print.setSol(true); });
const pdf2 = await page.pdf({format: 'A4'});
const nPages2 = (pdf2.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
ok(nPages2 === 2, 'PDF A4 cu soluția: 2 pagini (puzzle, apoi soluția)', nPages2);
await page.emulateMedia({media: 'screen'});
await page.evaluate(() => window.dispatchEvent(new Event('afterprint')));
ok(await page.evaluate(() => !document.body.classList.contains('psheet') && document.getElementById('print-sheet').children.length === 0), 'afterprint: foaia e golită, clasa psheet scoasă');
// fără joc pe fila Atlas: nu se construiește nimic
await page.click('#t-atlas');
ok(await page.evaluate(() => __SFF_TEST.print.build(false)) === false, 'în afara filei Joacă nu se construiește foaia');
// puzzle-ul zilei: determinist în aceeași zi
await page.click('#t-play');
await page.selectOption('#sel-mode', 'daily');
const codes = [];
for (let k = 0; k < 2; k++) {
  await page.locator('#b-new').click();
  await page.waitForFunction(c => { const g = __SFF_TEST.api.game; return g && g.P && g.P.mode === 'daily' && g.P.ucode !== c; }, codes[0] || '', {timeout: 90000}).catch(() => {});
  await page.waitForTimeout(400);
  codes.push(await page.evaluate(() => __SFF_TEST.api.game.P.ucode));
}
ok(codes[0] && codes[0] === codes[1], 'puzzle-ul zilei are același cod de două ori în aceeași zi', codes);
ok(errs.length === 0, 'fără erori JS', errs); ok(net.length === 0, '0 cereri de rețea', net);
await browser.close();
console.log(`${pass} ok, ${fail} fail`); process.exit(fail ? 1 : 0);
