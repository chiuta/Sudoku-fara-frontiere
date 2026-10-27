/* SPDX-License-Identifier: MIT · Copyright (c) 2026 Alexandru-Ionuț Chiuță (Alexio) */
/* Sudoku fără frontiere — interfață. Fără rețea; stocare locală cu prefixul sudoku-fara-frontiere. (migrare din vechiul sff_). */
(function () {
'use strict';
var SFF = window.SFF;
var $ = function (id) { return document.getElementById(id); };
var LSP = 'sudoku-fara-frontiere.';
/* migrare chei vechi sff_* → sudoku-fara-frontiere.* înainte de orice citire; idempotentă, nu suprascrie.
   Copiile .fff.json vechi (chei sff_*) se migrează după import. */
function migrateLS() { try { FFF.store.migrate({ 'sff_*': '*' }); } catch (e) {} }
migrateLS();
if (window.FFF && FFF.bus) FFF.bus.on('bundle:imported', migrateLS);
var LS = {
  get: function (k, d) { try { var v = localStorage.getItem(LSP + k); return v === null ? d : v; } catch (e) { return d; } },
  set: function (k, v) { try { localStorage.setItem(LSP + k, v); } catch (e) {} }
};
var LANGS = ['ro', 'en', 'fr', 'it', 'es', 'pt', 'de', 'hu'];
function pickLang() {
  var s = LS.get('lang', ''); if (LANGS.indexOf(s) >= 0) return s;
  var nl = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
  for (var i = 0; i < nl.length; i++) { var c = String(nl[i] || '').slice(0, 2).toLowerCase(); if (LANGS.indexOf(c) >= 0) return c; }
  return 'en';
}
var lang = pickLang();
function t(k) { return (U[lang] && U[lang][k]) || U.en[k] || U.ro[k] || k; }
/* ro/en sunt perechi pozitionale; celelalte limbi: al treilea argument [fr,it,es,pt,de,hu], cu revenire la en */
function L2(ro, en, x) { if (lang === 'ro') return ro; if (lang === 'en' || !x) return en; var v = x[LANGS.indexOf(lang) - 2]; return v == null ? en : v; }
function lblOf(tab, id, fb) { var p = tab[id]; if (!p) return fb; var v = p.split('|')[LANGS.indexOf(lang) - 2]; return v || fb; }
function mlabel(m) { return lang === 'ro' ? m[1] : lang === 'en' ? m[2] : lblOf(LBL, m[0], m[2]); }
function clabel(c) { return lang === 'ro' ? c[1] : lang === 'en' ? c[2] : lblOf(LBLC, c[0], c[2]); }
var PRE = SFF.PRESETS;
var VBY = Object.create(null); VINFO.forEach(function (v) { VBY[v[0]] = v; });
function vx(v, k) { // k: 0 nume, 1 scurt, 2 reguli; ro/en din VINFO, celelalte limbi din VTX (fr|it|es|pt|de|hu)
  if (lang === 'ro') return v[2 + k];
  if (lang === 'en') return v[5 + k];
  var t = VTX[v[0]], r = t && t[LANGS.indexOf(lang) - 2];
  return (r && r[k] != null) ? r[k] : v[5 + k];
}
function vname(v) { return vx(v, 0); }
function vshort(v) { return vx(v, 1); }
function vrules(v) { return vx(v, 2); }
function lexx(i, k) { var x = LEX[i]; if (lang === 'ro') return x[k]; if (lang === 'en') return x[2 + k]; var r = LEXX[i][LANGS.indexOf(lang) - 2]; return r ? r[k] : x[2 + k]; }
function catName(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i][0] === id) return clabel(CATS[i]); return id; }
function sizeLabel(n, id) { if (PRE[id] && PRE[id].layout === 'cube') { var dd = PRE[id].dim; return dd === 3 ? n + '×' + n + '×' + n : n + ['', '', '²', '³', '⁴', '⁵'][dd]; } if (PRE[id] && PRE[id].layout === 'greco') return n + '×' + n + ' ×2'; if (PRE[id] && PRE[id].layout) return '9×9 ×' + ({ samurai: 5, twodoku: 2, gattai3: 3, sohei: 4, kazaguruma: 5, tripledoku: 3, cross: 5 })[id]; return n + '×' + n; }
function sizesOf(id) { return PRE[id].sizes.slice().sort(function (a, b) { return a - b; }); }
var BASE_SYMS = '123456789ABCDEFGHIJKLMNOP';

/* ---------- tema, mărime text, limbă ---------- */
if (window.matchMedia) { try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (typeof game !== 'undefined' && game) renderDyn(); }); } catch (e) {} }
function applyTheme() {
  var th = LS.get('theme', 'auto');
  if (th === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', th);
  document.documentElement.setAttribute('data-size', LS.get('size', 'normal'));
  if (typeof game !== 'undefined' && game && typeof renderDyn === 'function') renderDyn();
}
$('b-theme').onclick = function () { var th = LS.get('theme', 'auto'); LS.set('theme', th === 'auto' ? 'dark' : th === 'dark' ? 'light' : 'auto'); applyTheme(); };
$('b-size').onclick = function () { LS.set('size', LS.get('size', 'normal') === 'normal' ? 'big' : 'normal'); applyTheme(); };
(function () { var sl = $('b-lang'); sl.innerHTML = LANGS.map(function (c) { return '<option value="' + c + '">' + c.toUpperCase() + '</option>'; }).join(''); sl.value = lang; })();
$('b-lang').onchange = function () { lang = LANGS.indexOf(this.value) >= 0 ? this.value : 'en'; LS.set('lang', lang); document.documentElement.lang = lang; i18n(); };

/* ---------- tab-uri ---------- */
var curTab = 'atlas';
function showTab(name) {
  curTab = name;
  ['atlas', 'play', 'solver', 'about'].forEach(function (n) {
    $('s-' + n).hidden = n !== name;
    $('t-' + n).setAttribute('aria-selected', n === name ? 'true' : 'false');
  });
  window.scrollTo(0, 0);
}
$('tabs').onclick = function (e) { var b = e.target.closest('button'); if (b) showTab(b.dataset.tab); };

/* ---------- Atlas ---------- */
var atlasCat = 'all';
function renderCats() {
  var h = '<button class="chip" data-c="all" aria-pressed="' + (atlasCat === 'all') + '">' + t('all') + '</button>';
  CATS.forEach(function (c) { h += '<button class="chip" data-c="' + c[0] + '" aria-pressed="' + (atlasCat === c[0]) + '">' + clabel(c) + '</button>'; });
  $('cats').innerHTML = h;
}
$('cats').onclick = function (e) { var b = e.target.closest('.chip'); if (!b) return; atlasCat = b.dataset.c; renderCats(); renderCards(); };
function renderCards() {
  var q = $('q').value.trim().toLowerCase(), sort = $('sortby').value;
  var list = VINFO.filter(function (v) {
    if (atlasCat !== 'all' && v[1] !== atlasCat) return false;
    if (!q) return true;
    return (v[2] + ' ' + v[3] + ' ' + v[5] + ' ' + v[6] + ' ' + vname(v) + ' ' + vshort(v)).toLowerCase().indexOf(q) >= 0;
  });
  if (sort === 'az') list.sort(function (a, b) { return vname(a).localeCompare(vname(b), lang); });
  if (sort === 'za') list.sort(function (a, b) { return vname(b).localeCompare(vname(a), lang); });
  $('cards').innerHTML = list.map(function (v) {
    var sz = sizesOf(v[0]).map(function (n) { return sizeLabel(n, v[0]); }).join(' · ');
    return '<button class="card" data-id="' + v[0] + '"><h3>' + vname(v) + '</h3><p>' + vshort(v) + '</p><div class="tags"><span class="tag cat">' + catName(v[1]) + '</span><span class="tag">' + sz + '</span></div></button>';
  }).join('');
}
$('cards').onclick = function (e) { var c = e.target.closest('.card'); if (c) openFiche(c.dataset.id); };
$('q').oninput = renderCards; $('sortby').onchange = renderCards;
$('b-rand').onclick = function () { openFiche(VINFO[Math.floor(Math.random() * VINFO.length)][0]); };
$('b-today').onclick = function () { var d = Math.floor(Date.now() / 86400000); openFiche(VINFO[d % VINFO.length][0]); };
$('f-play').onclick = function () { $('sel-var').value = 'custom'; onVariantChange(); showTab('play'); };
function renderLex() {
  $('lex').innerHTML = LEX.map(function (x, i) { return '<div><b>' + lexx(i, 0) + '</b>' + lexx(i, 1) + '</div>'; }).join('');
}
function openFiche(id) {
  var v = VBY[id], dlg = $('dlg');
  var sizes = sizesOf(id);
  dlg.innerHTML = '<h2>' + vname(v) + '</h2><p>' + vrules(v) + '</p><dl class="kv"><dt>' + t('category') + '</dt><dd>' + catName(v[1]) + '</dd><dt>' + t('sizes') + '</dt><dd>' + sizes.map(function (n) { return sizeLabel(n, id); }).join(' · ') + '</dd></dl>' +
    '<div class="row"><label class="field"><span>' + t('size') + '</span><select id="f-size">' + sizes.map(function (n, i) { return '<option value="' + n + '"' + (n === PRE[id].sizes[0] ? ' selected' : '') + '>' + sizeLabel(n, id) + '</option>'; }).join('') + '</select></label>' +
    '<label class="field"><span>' + t('diff') + '</span><select id="f-diff"><option value="easy">' + t('easy') + '</option><option value="medium" selected>' + t('medium') + '</option><option value="hard">' + t('hard') + '</option></select></label></div>' +
    '<div class="row" style="margin-top:.8rem"><button class="btn" id="f-go">' + t('play_btn') + '</button><button class="btn alt" id="f-close">' + t('close') + '</button></div>';
  $('f-close').onclick = function () { dlg.close(); };
  $('f-go').onclick = function () {
    dlg.close();
    $('sel-var').value = id; onVariantChange();
    $('sel-size').value = $('f-size').value; $('sel-diff').value = $('f-diff').value;
    showTab('play'); newFromUI();
  };
  if (!dlg.open) dlg.showModal();
}
function download(name, text, type) {
  var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: type || 'text/plain' })); a.download = name; document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
$('b-csv').onclick = function () {
  var rows = [['id', 'nume_ro', 'nume_en', 'categorie', 'marimi']].concat(VINFO.map(function (v) { return [v[0], v[2], v[5], catName(v[1]), sizesOf(v[0]).join('/')]; }));
  download('sudoku-fara-frontiere.csv', '﻿' + rows.map(function (r) { return r.map(function (c) { var x = String(c); if (/^[=+\-@\t\r]/.test(x)) x = "'" + x; return '"' + x.replace(/"/g, '""') + '"'; }).join(','); }).join('\n'), 'text/csv');
};
$('b-bib').onclick = function () {
  var bib = '@software{chiuta_sudoku_fara_frontiere_2026,\n  author  = {Chiuță, Alexandru-Ionuț},\n  title   = {Sudoku fără frontiere},\n  year    = {2026},\n  version = {' + SFF.VERSION + '},\n  note    = {Atlas de variante Sudoku cu generator și rezolvator local; un singur fișier HTML}\n}\n';
  download('sudoku-fara-frontiere.bib', bib, 'text/plain');
};

/* ---------- Joc: selecții și opțiuni ---------- */
function fillVariantSelect() {
  var cur = $('sel-var').value;
  $('sel-var').innerHTML = VINFO.map(function (v) { return '<option value="' + v[0] + '">' + vname(v) + '</option>'; }).join('') + '<option value="custom">' + t('custom') + '</option>';
  if (cur) $('sel-var').value = cur;
}
function buildCustom() {
  var mh = '', ch = '';
  MODS.forEach(function (m) { mh += '<label><input type="checkbox" data-m="' + m[0] + '"> ' + mlabel(m) + '</label>'; });
  CLUEMODS.forEach(function (m) { ch += '<label><input type="checkbox" data-c="' + m[0] + '"> ' + mlabel(m) + '</label>'; });
  $('custom-mods').innerHTML = mh; $('custom-clues').innerHTML = ch;
}
function customSel() {
  var mods = [], clues = [], jig = false, latin = false;
  Array.prototype.forEach.call($('custom-mods').querySelectorAll('input:checked'), function (i) { var m = i.dataset.m; if (m === 'jigsaw') jig = true; else mods.push(m); });
  Array.prototype.forEach.call($('custom-clues').querySelectorAll('input:checked'), function (i) { clues.push(i.dataset.c); });
  return { mods: mods, clues: clues, jigsaw: jig };
}
function customSizes() {
  var sel = customSel(), sizes = [4, 6, 9], ids = [];
  MODS.forEach(function (m) { if ((m[0] === 'jigsaw' ? sel.jigsaw : sel.mods.indexOf(m[0]) >= 0)) ids.push(m[3]); });
  CLUEMODS.forEach(function (m) { if (sel.clues.indexOf(m[0]) >= 0) ids.push(m[3]); });
  ids.forEach(function (id) { if (id === 'jigsaw' || id === 'latin') return; sizes = sizes.filter(function (n) { return PRE[id].sizes.indexOf(n) >= 0; }); });
  return sizes.sort(function (a, b) { return a - b; });
}
function refreshSizes() {
  var v = $('sel-var').value, sizes = v === 'custom' ? customSizes() : sizesOf(v), cur = $('sel-size').value;
  $('sel-size').innerHTML = sizes.map(function (n) { return '<option value="' + n + '">' + (v === 'custom' ? n + '×' + n : sizeLabel(n, v)) + '</option>'; }).join('');
  var def = v === 'custom' ? (sizes.indexOf(9) >= 0 ? 9 : sizes[0]) : PRE[v].sizes[0];
  $('sel-size').value = sizes.indexOf(+cur) >= 0 && v === prevVar ? cur : String(def);
  prevVar = v;
  $('wordbox').hidden = !(v === 'wordoku' && +$('sel-size').value === 9);
  syncTierOptions();
  if (v === 'custom' && !sizes.length) setMsg(t('custom_none'), 'bad'); else if ($('msg').textContent === t('custom_none')) setMsg('', '');
}
var prevVar = '';
/* nivelurile după tehnică (t1..t4) sunt oferite doar la Sudoku clasic 9×9 */
function syncTierOptions() {
  var sd = $('sel-diff'), want = $('sel-var').value === 'clasic' && +$('sel-size').value === 9, cur = sd.value;
  Array.prototype.slice.call(sd.querySelectorAll('option')).forEach(function (o) { if (TIERS.indexOf(o.value) >= 0) o.remove(); });
  if (want) TIERS.forEach(function (k) { var o = document.createElement('option'); o.value = k; o.textContent = t(k); sd.appendChild(o); });
  if (!want && TIERS.indexOf(cur) >= 0) sd.value = 'medium'; else if (cur) sd.value = cur;
}
function onVariantChange() {
  var v = $('sel-var').value;
  $('custom').hidden = v !== 'custom';
  refreshSizes();
}
$('sel-var').onchange = onVariantChange;
$('sel-size').onchange = function () { $('wordbox').hidden = !($('sel-var').value === 'wordoku' && +$('sel-size').value === 9); syncTierOptions(); };
$('custom').onchange = refreshSizes;

/* ---------- generare (Worker, cu rezervă pe firul principal) ---------- */
var maraTimer = 0, worker = null, slowTimer = null, degraded = '';
function cancelGen() { if (slowTimer) { clearTimeout(slowTimer); slowTimer = null; } if (worker) { try { worker.terminate(); URL.revokeObjectURL(worker._url); } catch (e) {} worker = null; } $('spin').hidden = true; }
function makeWorker() {
  try {
    var src = $('engine').textContent + '\nself.onmessage=function(e){try{self.postMessage({ok:1,P:SFF.generate(e.data)})}catch(err){self.postMessage({ok:0,err:String(err&&err.message||err)})}};';
    var url = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }));
    var w = new Worker(url); w._url = url; return w;
  } catch (e) { return null; }
}
function runGen(spec, done) {
  cancelGen();
  $('spin').hidden = false; $('spin-t').textContent = t('generating'); $('b-cancel').textContent = t('cancel');
  var t0 = Date.now();
  function finish(r) { cancelGen(); done(r, Date.now() - t0); }
  function inline() { setTimeout(function () { try { finish({ ok: 1, P: SFF.generate(spec) }); } catch (e) { finish({ ok: 0, err: String(e.message || e) }); } }, 30); }
  if (slowTimer) clearTimeout(slowTimer);
  var order = ['hard', 'medium', 'easy'], at = order.indexOf(spec.difficulty);
  if (at >= 0 && at < 2 && !spec._noDegrade) {
    slowTimer = setTimeout(function () {
      var w = worker; if (!w) return;
      var s2 = JSON.parse(JSON.stringify(spec)); s2.difficulty = order[at + 1];
      cancelGen(); degraded = (degraded ? degraded + ' → ' : '') + t(order[at + 1]);
      runGen(s2, done);
    }, 12000);
  }
  worker = makeWorker();
  if (!worker) { inline(); return; }
  worker.onmessage = function (e) { finish(e.data); };
  worker.onerror = function () { worker = null; inline(); };
  worker.postMessage(spec);
}
$('b-cancel').onclick = function () { degraded = ''; cancelGen(); };

var MARA = ['easy', 'easy', 'medium', 'medium', 'hard'];
function dailySpec() {
  var d = Math.floor(Date.now() / 86400000), id = VINFO[d % VINFO.length][0];
  if (!OWN.call(PRE, id)) id = 'clasic';
  var sizes = PRE[id].sizes, n = sizes.indexOf(9) >= 0 ? 9 : sizes[0];
  return { v: id, spec: { preset: id, n: n, difficulty: 'medium', seed: (20000000 + d) >>> 0, _noDegrade: true }, date: new Date(d * 86400000).toISOString().slice(0, 10) };
}
/* Puzzle zilnic clasic 9×9 cu dificultate la alegere (2.2.0). Mod SEPARAT: nu atinge „Puzzle-ul zilei” (seed 20000000 + zi),
   deci codurile zilnice deja generate rămân identice. Seed = 40000000 + 7*zi + indicele dificultății (easy, medium, hard, t1–t4). */
var D9 = ['easy', 'medium', 'hard', 't1', 't2', 't3', 't4'];
function dailySpec9(diff) {
  var d = Math.floor(Date.now() / 86400000), k = D9.indexOf(diff); if (k < 0) { diff = 'medium'; k = 1; }
  return { v: 'clasic', spec: { preset: 'clasic', n: 9, difficulty: diff, seed: (40000000 + d * 7 + k) >>> 0, _noDegrade: true }, date: new Date(d * 86400000).toISOString().slice(0, 10) };
}
function newFromUI(seed) {
  var v = $('sel-var').value, n = +$('sel-size').value, diff = $('sel-diff').value, mode = $('sel-mode').value || 'normal';
  if (mode === 'daily') { var dd = dailySpec(); startSpec(dd.spec, dd.v, 'daily', { id: 'daily', date: dd.date }); return; }
  if (mode === 'daily9') { var d9 = dailySpec9(diff); startSpec(d9.spec, d9.v, 'daily9', { id: 'daily9', date: d9.date }); return; }
  if (!n) { setMsg(t('custom_none'), 'bad'); return; }
  var spec = { n: n, difficulty: diff, seed: seed || ((Math.random() * 4294967295) >>> 0) };
  if (v === 'custom') { var s = customSel(); spec.mods = s.mods; spec.clues = s.clues; spec.jigsaw = s.jigsaw; spec.hard = 0.7; spec.preset = null; }
  else spec.preset = v;
  var mx = null;
  if (mode === 'marathon') { spec.difficulty = MARA[0]; mx = { id: 'marathon', step: 1, of: MARA.length, total: 0, base: JSON.parse(JSON.stringify(spec)), v: v }; }
  startSpec(spec, v, mode, mx);
}
function startSpec(spec, v, mode, mx) {
  clearTimeout(maraTimer); degraded = '';
  runGen(spec, function (r, ms) {
    if (!r.ok) { degraded = ''; setMsg(t('genfail') + ' (' + r.err + ')', 'bad'); return; }
    var P = r.P; P.mode = mode || 'normal'; P.ucode = codeOf(spec, P) + (P.mode !== 'normal' && P.mode !== 'daily' && P.mode !== 'daily9' ? '@' + P.mode : ''); P.ms = ms; P.vid = v || spec.preset || 'custom';
    loadGame(P, null, mx); setMsg(degraded ? t('degraded').replace('%', degraded) : '', degraded ? 'ok' : ''); degraded = '';
  });
}
function codeOf(spec, P) {
  if (spec.preset) return spec.preset + '-' + P.n + '-' + P.difficulty + '-' + P.seed;
  return ['c', P.n, P.difficulty, P.seed, (P.mods || []).join('.'), (P.clues || []).join('.'), spec.jigsaw ? 1 : 0].join('~');
}
var OWN = Object.prototype.hasOwnProperty;
var DIFFS = ['easy', 'medium', 'hard'], TIERS = ['t1', 't2', 't3', 't4'], MODE_IDS = ['orb', 'memory', 'duel', 'hardcore', 'sound', 'marathon'];
function okSeed(x) { return /^\d{1,10}$/.test(x) && +x <= 4294967295; }
function parseCode(s) {
  s = String(s || '').trim();
  if (s.length > 400) return null;
  var at = s.indexOf('@'), md = null;
  if (at > 0) { md = s.slice(at + 1); s = s.slice(0, at); if (MODE_IDS.indexOf(md) < 0) return null; if (md === 'marathon') md = null; }
  var res = parseCode0(s); if (res) res._mode = md; return res;
}
/* validare strictă: un cod primit de la altcineva nu poate cere variante, mărimi, reguli sau moduri inexistente */
function parseCode0(s) {
  var p, i;
  if (s.indexOf('c~') === 0) {
    p = s.split('~'); if (p.length !== 7) return null;
    if (!/^\d{1,2}$/.test(p[1]) || [4, 6, 9].indexOf(+p[1]) < 0 || DIFFS.indexOf(p[2]) < 0 || !okSeed(p[3]) || (p[6] !== '0' && p[6] !== '1')) return null;
    var mods = p[4] ? p[4].split('.') : [], clues = p[5] ? p[5].split('.') : [];
    for (i = 0; i < mods.length; i++) if (!MODS.some(function (m) { return m[0] === mods[i] && m[0] !== 'jigsaw'; })) return null;
    for (i = 0; i < clues.length; i++) if (!CLUEMODS.some(function (m) { return m[0] === clues[i]; })) return null;
    return { n: +p[1], difficulty: p[2], seed: +p[3] >>> 0, mods: mods, clues: clues, jigsaw: p[6] === '1', hard: 0.7, preset: null, _v: 'custom' };
  }
  p = s.split('-'); if (p.length !== 4 || !OWN.call(PRE, p[0])) return null;
  if (!/^\d{1,2}$/.test(p[1]) || PRE[p[0]].sizes.indexOf(+p[1]) < 0 || (DIFFS.indexOf(p[2]) < 0 && !(TIERS.indexOf(p[2]) >= 0 && p[0] === 'clasic' && +p[1] === 9)) || !okSeed(p[3])) return null;
  return { preset: p[0], n: +p[1], difficulty: p[2], seed: +p[3] >>> 0, _v: p[0] };
}
$('b-new').onclick = function () { newFromUI(); };
$('b-open').onclick = function () {
  var sp = parseCode($('code').value); if (!sp) { setMsg(t('badcode'), 'bad'); return; }
  sp._noDegrade = true; var v = sp._v, md = sp._mode; delete sp._v; delete sp._mode;
  /* sincronizează listele cu codul deschis */
  try {
    if (sp.preset && $('sel-var').querySelector('option[value="' + sp.preset + '"]')) {
      $('sel-var').value = sp.preset; onVariantChange();
      if ($('sel-size').querySelector('option[value="' + sp.n + '"]')) $('sel-size').value = String(sp.n);
      if ($('sel-diff').querySelector('option[value="' + sp.difficulty + '"]')) $('sel-diff').value = sp.difficulty;
      if (md && $('sel-mode').querySelector('option[value="' + md + '"]')) $('sel-mode').value = md; else if (!md) $('sel-mode').value = 'normal';
      $('sel-diff').disabled = $('sel-mode').value === 'daily';
    }
  } catch (e) {}
  startSpec(sp, v, md || 'normal', null);
};
$('b-copy').onclick = function () {
  var c = $('code').value; if (!c) return;
  try { navigator.clipboard.writeText(c).then(function () { setMsg(t('copied'), 'good'); }, function () { $('code').select(); }); } catch (e) { $('code').select(); }
};
/* ---------- foaie tipăribilă (2.1.0) ---------- */
var printWithSol = false;
function boardClone(withSol) { // desenează temporar puzzle-ul gol (doar indiciile) sau soluția, clonează SVG-ul, apoi restabilește starea
  var g = game, keep = { vals: g.vals, notes: g.notes, sel: g.sel, step: g.step, wrong: g.wrong, mx: g.mx, v3d: g.v3d }, c = null, i;
  var vals = new Int32Array(g.cnt);
  if (withSol) for (i = 0; i < g.cnt; i++) vals[i] = g.P.givens[i] > 0 ? 0 : (g.P.solution[i] | 0);
  g.vals = vals; g.notes = new Int32Array(g.cnt); g.sel = new Set(); g.step = null; g.wrong = new Set(); g.mx = { id: 'normal' }; g.v3d = false;
  try { renderDyn(); c = $('board').cloneNode(true); }
  finally { g.vals = keep.vals; g.notes = keep.notes; g.sel = keep.sel; g.step = keep.step; g.wrong = keep.wrong; g.mx = keep.mx; g.v3d = keep.v3d; renderDyn(); }
  c.removeAttribute('id'); c.removeAttribute('tabindex'); c.removeAttribute('role'); c.setAttribute('class', 'pboard'); c.setAttribute('aria-hidden', 'true');
  Array.prototype.forEach.call(c.querySelectorAll('[id]'), function (e) { e.removeAttribute('id'); });
  Array.prototype.forEach.call(c.querySelectorAll('[data-i]'), function (e) { e.parentNode.removeChild(e); });
  return c;
}
function psEl(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
function psPage(withSol) {
  var P = game.P, v = VBY[P.vid], pg = psEl('section', 'ps-page'), name = v ? vname(v) : t('custom');
  pg.appendChild(psEl('h1', '', name + (withSol ? ' · ' + t('ps_solution') : '')));
  var meta = [sizeLabel(game.N, P.vid), t(P.difficulty), game.mx && (game.mx.id === 'daily' || game.mx.id === 'daily9') && game.mx.date ? t(game.mx.id === 'daily9' ? 'mode_daily9' : 'mode_daily') + ' ' + game.mx.date : '', P.ucode ? t('code') + ': ' + P.ucode : ''].filter(Boolean);
  pg.appendChild(psEl('p', 'ps-meta', meta.join(' · ')));
  var ru = psEl('div', 'ps-rules'); ru.innerHTML = $('rules').innerHTML; pg.appendChild(ru);
  pg.appendChild(boardClone(withSol));
  pg.appendChild(psEl('p', 'ps-foot', t('ps_foot')));
  return pg;
}
function buildPrintSheet(withSol) {
  var sh = $('print-sheet'); sh.textContent = '';
  if (!game || curTab !== 'play' || !game.P.solution) return false;
  try {
    sh.appendChild(psPage(false));
    if (withSol) sh.appendChild(psPage(true));
  } catch (e) { sh.textContent = ''; return false; }
  return true;
}
function doPrint(withSol) {
  if (!game) { setMsg(t('ps_none'), 'bad'); return; }
  if (curTab !== 'play') showTab('play');
  printWithSol = !!withSol; window.print();
}
$('b-print').onclick = function () { doPrint(false); };
$('b-print-sol').onclick = function () { doPrint(true); };
window.addEventListener('beforeprint', function () { if (buildPrintSheet(printWithSol)) document.body.classList.add('psheet'); });
window.addEventListener('afterprint', function () { document.body.classList.remove('psheet'); $('print-sheet').textContent = ''; printWithSol = false; });
if (window.__SFF_TEST) window.__SFF_TEST.print = { build: buildPrintSheet, setSol: function (v) { printWithSol = !!v; } };

/* ---------- starea jocului ---------- */
var game = null, timerLast = 0, saveTimer = 0;
function setMsg(text, cls) { var m = $('msg'); m.textContent = text; m.className = 'msg' + (cls ? ' ' + cls : ''); m.dataset.k = ''; }
function symsFor(P) {
  var N = P.n, v = P.vid;
  if (v === 'wordoku') {
    if (N === 9) { var w = ($('word').value || '').toUpperCase().replace(/Ş/g, 'Ș').replace(/Ţ/g, 'Ț').replace(/[^A-ZĂÂÎȘȚ]/g, ''); var seen = {}, ok = w.length === 9; for (var i = 0; i < w.length; i++) { if (seen[w[i]]) ok = false; seen[w[i]] = 1; } if (!ok) setTimeout(function () { setMsg(L2('Cuvântul trebuie să aibă 9 litere diferite; am folosit ECOULSTRI.', 'The word needs 9 different letters; ECOULSTRI was used.', ["Le mot doit comporter 9 lettres différentes ; ECOULSTRI a été utilisé.", "La parola deve avere 9 lettere diverse; è stato usato ECOULSTRI.", "La palabra necesita 9 letras distintas; se usó ECOULSTRI.", "A palavra precisa de 9 letras diferentes; foi usada ECOULSTRI.", "Das Wort braucht 9 verschiedene Buchstaben; es wurde ECOULSTRI verwendet.", "A szónak 9 különböző betűből kell állnia; az ECOULSTRI lett használva."]), 'bad'); }, 0); return (ok ? w : 'ECOULSTRI').split(''); }
    return 'ABCDEFGHIJKLMNOPQRSTUVWXY'.slice(0, N).split('');
  }
  if (P.zero) return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, N).split('');
  return BASE_SYMS.slice(0, N).split('');
}
var MX_IDS = ['normal', 'orb', 'memory', 'marathon', 'duel', 'hardcore', 'daily', 'daily9', 'sound'];
function cleanSaved(sv, N) {
  var o = { vals: sv.vals, notes: sv.notes, elapsed: +sv.elapsed || 0, solved: !!sv.solved, revealed: !!sv.revealed, lost: !!sv.lost, syms: null, mx: null };
  if (!sv.notes || sv.notes.length !== sv.vals.length) o.notes = new Array(sv.vals.length).fill(0);
  if (Array.isArray(sv.syms) && sv.syms.length === N && sv.syms.every(function (x) { return typeof x === 'string' && /^[0-9A-ZĂÂÎȘȚ]{1,2}$/.test(x); })) o.syms = sv.syms.slice();
  var m = sv.mx;
  if (m && typeof m === 'object' && MX_IDS.indexOf(m.id) >= 0) {
    var x = { id: m.id };
    ['step', 'of', 'total', 'left', 'peeks', 'done', 'acc', 'per', 'lives'].forEach(function (k) { if (m[k] !== undefined) x[k] = +m[k] || 0; });
    if (m.phase === 'show' || m.phase === 'peek' || m.phase === 'hide') x.phase = m.phase;
    if (typeof m.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(m.date)) x.date = m.date; else if (m.id === 'daily' || m.id === 'daily9') x.date = new Date().toISOString().slice(0, 10);
    if (typeof m.v === 'string' && /^[a-z0-9_]{1,30}$/.test(m.v)) x.v = m.v;
    if (m.base && typeof m.base === 'object') x.base = JSON.parse(JSON.stringify(m.base));
    o.mx = x;
  }
  return o;
}
function loadGame(P, saved, mxInit) {
  if (typeof stopPlay === 'function') stopPlay();
  var S = SFF.makeSolver(P), L = S.L, cnt = S.cnt;
  game = {
    P: P, S: S, L: L, N: S.N, cnt: cnt,
    vals: new Int32Array(cnt), notes: new Int32Array(cnt), sel: new Set(), undo: [], redo: [], mode: 'val',
    elapsed: 0, solved: false, revealed: false, wrong: new Set(), syms: null
  };
  if (saved) { saved = cleanSaved(saved, S.N); game.vals = Int32Array.from(saved.vals); game.notes = Int32Array.from(saved.notes); game.elapsed = saved.elapsed || 0; game.solved = !!saved.solved; game.revealed = !!saved.revealed; game.syms = saved.syms; }
  if (!game.syms) game.syms = symsFor(P);
  game.lost = !!(saved && saved.lost); game.mx = (saved && saved.mx) || mxInit || freshMx(P);
  game.v3d = false; game.rot = [-0.5, 0.6]; show3dUI();
  game.symMap = {}; game.syms.forEach(function (s, i) { game.symMap[s] = i + 1; });
  if (game.L.greco) for (var gl = 0; gl < game.N; gl++) game.symMap[GL[gl]] = gl + 1;
  $('a-note').setAttribute('aria-pressed', 'false');
  $('code').value = P.ucode || P.code || '';
  buildBoard(); buildNumpad(); renderDyn(); updateStatus(); renderRules();
  timerLast = Date.now(); save();
  if (!saved) { var cl = P.givens.filter(Boolean).length; setMsg('', ''); }
  if (game.solved) setMsg(game.revealed ? t('solved_app') : t('solved'), 'good');
}
function curVal(i) { var g = game.P.givens[i]; return g > 0 ? g : game.vals[i]; }
function curVec() { var v = new Int32Array(game.cnt); for (var i = 0; i < game.cnt; i++) v[i] = curVal(i); return v; }
function renderRules() {
  var id = game.P.vid, v = VBY[id], h = '';
  if (v) h = '<b>' + vname(v) + '</b><br>' + vrules(v);
  else {
    var names = [];
    MODS.forEach(function (m) { if ((m[0] === 'jigsaw' ? game.P.regions : game.P.mods.indexOf(m[0]) >= 0)) names.push(VBY[m[3]] ? vname(VBY[m[3]]) : mlabel(m)); });
    CLUEMODS.forEach(function (m) { if (game.P.clues.indexOf(m[0]) >= 0) names.push(VBY[m[3]] ? vname(VBY[m[3]]) : mlabel(m)); });
    h = '<b>' + t('custom') + '</b><br>' + names.join(' + ');
    var seen = {};
    names.forEach(function () {});
    MODS.concat(CLUEMODS).forEach(function (m) {
      var on = m[0] === 'jigsaw' ? !!game.P.regions : (game.P.mods.indexOf(m[0]) >= 0 || game.P.clues.indexOf(m[0]) >= 0);
      if (on && VBY[m[3]] && !seen[m[3]]) { seen[m[3]] = 1; h += '<p><b>' + vname(VBY[m[3]]) + '.</b> ' + vrules(VBY[m[3]]) + '</p>'; }
    });
  }
  $('rules').innerHTML = h;
}
function techInfoTxt() {
  var g = game; if (!g || !techAvail(g) || g.N > 9) return '';
  if (g.techA === undefined) { try { g.techA = SFF.TECH.analyze(g.P.givens, g.N, { noSteps: true }); } catch (e) { g.techA = null; } }
  var a = g.techA; if (!a) return '';
  return ' · ' + t('tech_max').replace('{t}', a.solved ? t('tn_' + a.hardest) : t('tech_beyond'));
}
function ratingTxt(P) {
  if (P.rating === undefined || P.rating === null || P.rating < 0) return '';
  return ' · ' + (P.rating === 0 ? t('rate0') : t('rateN').replace('%', P.rating));
}
function updateStatus() {
  if (!game) return;
  var v = VBY[game.P.vid];
  $('st-name').textContent = (v ? vname(v) : t('custom')) + ' · ' + sizeLabel(game.P.n, game.P.vid);
  var cl = game.P.givens.filter(Boolean).length;
  $('st-info').textContent = cl + '/' + game.cnt + ' ' + t('clues') + ' · ' + t(game.P.difficulty) + (game.P.techTier && game.P.techWanted && game.P.techTier !== game.P.techWanted ? ' (' + t('tech_near').replace('{t}', t('t' + game.P.techTier)) + ')' : '') + ratingTxt(game.P) + techInfoTxt();
  var s = Math.floor(game.elapsed / 1000), m = Math.floor(s / 60);
  $('st-time').textContent = m + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);
  renderModebar();
}
setInterval(function () {
  if (!game || game.solved || game.lost || curTab !== 'play' || document.hidden) { timerLast = Date.now(); return; }
  var now = Date.now(), dt = now - timerLast; game.elapsed += dt; timerLast = now; modeTick(dt); updateStatus();
}, 1000);
function save() {
  if (!game) return;
  try {
    LS.set('game', JSON.stringify({ sv: 2, ev: SFF.VERSION, P: game.P, vals: Array.from(game.vals), notes: Array.from(game.notes), elapsed: game.elapsed, solved: game.solved, revealed: game.revealed, syms: game.syms, mx: game.mx, lost: game.lost }));
  } catch (e) {}
}
setInterval(save, 15000);
window.addEventListener('pagehide', save);

/* ---------- desenare tablă ---------- */
var CS = 44, MG = 50, NS = 'http://www.w3.org/2000/svg';
function geom() {
  var L = game.L, big = L.composite || L.cube || L.R > 12;
  CS = game.N <= 9 && !big ? 44 : (L.R >= 21 ? 30 : game.N >= 16 ? 30 : 36);
  var outside = game.P.cons.some(function (c) { return ['sandwich', 'sky', 'xsum', 'osum', 'lk', 'luk', 'rossini', 'outside', 'mclue'].indexOf(c.t) >= 0; });
  MG = outside ? CS * 1.2 : CS * 0.25;
}
function X(i) { return MG + game.L.pos[i][1] * CS; }
function Y(i) { return MG + game.L.pos[i][0] * CS; }
function CX(i) { return X(i) + CS / 2; }
function CY(i) { return Y(i) + CS / 2; }
var GL = 'ABCDEFGHIJ';
function sym(d, i) { if (i !== undefined && game.L.greco && game.L.layer[i] === 1) return GL[d - 1]; return game.syms[d - 1]; }
function groupOf(i) { var P = game.P; if (P.chains) return 0; if (P.regions) return P.regions[i]; if (P.mods.indexOf('latin') >= 0) return 0; return game.L.boxId[i]; }
var JIG = ['#f2e9d0', '#dfeadf', '#e4e0f0', '#f2dcdc', '#dcebf0'];
var JIGD = ['#2a2618', '#17261c', '#1f1c30', '#301b1b', '#16262e'];
function darkMode() { var th = document.documentElement.getAttribute('data-theme'); if (th) return th === 'dark'; return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches; }
function regionColors() {
  var P = game.P, N = game.N, cnt = game.cnt, adj = {}, col = {}, i;
  for (i = 0; i < N; i++) adj[i] = {};
  for (i = 0; i < cnt; i++) game.L.nbr4[i].forEach(function (j) { if (P.regions[i] !== P.regions[j]) adj[P.regions[i]][P.regions[j]] = 1; });
  for (i = 0; i < N; i++) { var used = {}; Object.keys(adj[i]).forEach(function (k) { if (col[k] !== undefined) used[col[k]] = 1; }); var c = 0; while (used[c]) c++; col[i] = c % 5; }
  return col;
}
function tints() {
  var P = game.P, L = game.L, N = game.N, t1 = new Uint8Array(game.cnt), i, r, c;
  var mods = P.mods;
  if (mods.indexOf('diag') >= 0 && !L.composite) for (i = 0; i < N; i++) { t1[L.at[i * L.C + i]] = 1; t1[L.at[i * L.C + N - 1 - i]] = 1; }
  if (mods.indexOf('hyper') >= 0 && N === 9) [[1, 1], [1, 5], [5, 1], [5, 5]].forEach(function (o) { for (r = 0; r < 3; r++) for (c = 0; c < 3; c++) t1[L.at[(o[0] + r) * L.C + o[1] + c]] = 2; });
  if (mods.indexOf('diag1') >= 0 && !L.composite) for (i = 0; i < N; i++) t1[L.at[i * L.C + i]] = 1;
  if (mods.indexOf('asterisk') >= 0 && N === 9) [[1, 4], [2, 2], [2, 6], [4, 1], [4, 4], [4, 7], [6, 2], [6, 6], [7, 4]].forEach(function (p) { t1[L.at[p[0] * L.C + p[1]]] = 1; });
  if (mods.indexOf('girandola') >= 0 && N === 9) [[0, 0], [0, 8], [8, 0], [8, 8], [4, 4], [1, 4], [7, 4], [4, 1], [4, 7]].forEach(function (p) { t1[L.at[p[0] * L.C + p[1]]] = 1; });
  if (mods.indexOf('sparse9') >= 0 && N === 9) [[0, 0], [0, 4], [0, 8], [4, 0], [4, 4], [4, 8], [8, 0], [8, 4], [8, 8]].forEach(function (p) { t1[L.at[p[0] * L.C + p[1]]] = 1; });
  if (P.cons.some(function (q) { return q.t === 'index'; })) for (r = 0; r < N; r++) t1[L.at[r * L.C]] = 1;
  if (mods.indexOf('center') >= 0 && N === 9) for (r = 1; r < 9; r += 3) for (c = 1; c < 9; c += 3) t1[L.at[r * L.C + c]] = 1;
  if (L.composite) { var cntg = new Uint8Array(game.cnt); L.offs.forEach(function (o) { for (r = 0; r < 9; r++) for (c = 0; c < 9; c++) cntg[L.at[(o[0] + r) * L.C + o[1] + c]]++; }); for (i = 0; i < game.cnt; i++) if (cntg[i] > 1) t1[i] = 1; }
  return t1;
}
function lineStr(cells) { return cells.map(function (i) { return CX(i) + ',' + CY(i); }).join(' '); }
function decor() {
  var P = game.P, L = game.L, h = '', o = '', i;
  var deco = 'var(--deco)';
  var PAL = ['#e67e22', '#3498db', '#9b59b6', '#27ae60', '#e74c3c', '#16a085', '#f1c40f'];
  function pline(cells, col, w, op, dash) { return '<polyline points="' + lineStr(cells) + '" fill="none" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round" opacity="' + op + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>'; }
  function arrowTail(cells, b, from) {
    var s1 = cells[from], dx = CX(s1) - CX(b), dy = CY(s1) - CY(b), len = Math.sqrt(dx * dx + dy * dy) || 1, rr = CS * 0.4, k = cells.length, out = '';
    var pts = (CX(b) + dx / len * rr) + ',' + (CY(b) + dy / len * rr) + ' ' + lineStr(cells.slice(from));
    out += '<polyline points="' + pts + '" fill="none" stroke="' + deco + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    var e = cells[k - 1], pv = cells[k - 2], ex = CX(e) - CX(pv), ey = CY(e) - CY(pv), el = Math.sqrt(ex * ex + ey * ey); ex /= el; ey /= el;
    var tx = CX(e) + ex * CS * 0.12, ty = CY(e) + ey * CS * 0.12, a = CS * 0.2;
    out += '<polygon points="' + tx + ',' + ty + ' ' + (tx - ex * a + ey * a * 0.6) + ',' + (ty - ey * a - ex * a * 0.6) + ' ' + (tx - ex * a - ey * a * 0.6) + ',' + (ty - ey * a + ex * a * 0.6) + '" fill="' + deco + '"/>';
    return out;
  }
  function circ(x, fillc) { return '<circle cx="' + CX(x) + '" cy="' + CY(x) + '" r="' + CS * 0.4 + '" fill="' + (fillc || 'none') + '" stroke="' + deco + '" stroke-width="2"/>'; }
  function tag(x, txt) { return '<text x="' + (X(x) + CS * 0.78) + '" y="' + (Y(x) + CS * 0.24) + '" class="lbl" style="font-size:' + CS * 0.34 + 'px;font-weight:800;fill:var(--cage)">' + txt + '</text>'; }
  if (P.chains) P.chains.forEach(function (ch, ci) {
    var col = PAL[ci % PAL.length];
    h += pline(ch, col, CS * 0.08, 0.7);
    ch.forEach(function (x) { h += '<circle cx="' + CX(x) + '" cy="' + CY(x) + '" r="' + CS * 0.44 + '" fill="none" stroke="' + col + '" stroke-width="2.2" opacity=".85"/>'; });
  });
  (game.visCons || P.cons).forEach(function (c) {
    var cells = c.cells, k = cells ? cells.length : 0;
    switch (c.t) {
      case 'cage': case 'calc': case 'pcage': case 'bcage': {
        var set = {}; cells.forEach(function (x) { set[x] = 1; });
        var s = 4, d = '';
        var has = function (r, cc) { if (r < 0 || cc < 0 || r >= L.R || cc >= L.C) return false; var j = L.at[r * L.C + cc]; return j >= 0 && !!set[j]; };
        cells.forEach(function (x) {
          var r = L.pos[x][0], cc = L.pos[x][1], x0 = X(x), y0 = Y(x), x1 = x0 + CS, y1 = y0 + CS;
          if (!has(r - 1, cc)) d += 'M' + (has(r, cc - 1) ? x0 : x0 + s) + ' ' + (y0 + s) + 'L' + (has(r, cc + 1) ? x1 : x1 - s) + ' ' + (y0 + s);
          if (!has(r + 1, cc)) d += 'M' + (has(r, cc - 1) ? x0 : x0 + s) + ' ' + (y1 - s) + 'L' + (has(r, cc + 1) ? x1 : x1 - s) + ' ' + (y1 - s);
          if (!has(r, cc - 1)) d += 'M' + (x0 + s) + ' ' + (has(r - 1, cc) ? y0 : y0 + s) + 'L' + (x0 + s) + ' ' + (has(r + 1, cc) ? y1 : y1 - s);
          if (!has(r, cc + 1)) d += 'M' + (x1 - s) + ' ' + (has(r - 1, cc) ? y0 : y0 + s) + 'L' + (x1 - s) + ' ' + (has(r + 1, cc) ? y1 : y1 - s);
        });
        h += '<path d="' + d + '" fill="none" stroke="var(--cage)" stroke-width="1.2" stroke-dasharray="3 2.5"/>';
        var first = cells.slice().sort(function (a, b) { return L.pos[a][0] - L.pos[b][0] || L.pos[a][1] - L.pos[b][1]; })[0];
        var lab = c.t === 'pcage' ? 'P' : c.t === 'bcage' ? 'Σ=Π' : c.t === 'cage' ? String(c.sum) : (c.cells.length === 1 ? String(c.val) : c.val + ({ '+': '+', 'x': '×', '-': '−', '/': '÷' })[c.op]);
        h += '<text x="' + (X(first) + 6) + '" y="' + (Y(first) + 10) + '" class="lbl" style="font-size:' + (CS * 0.25) + 'px;text-anchor:start;fill:var(--cage)">' + lab + '</text>';
        if (c.dbl) c.dbl.forEach(function (x) { o += '<text x="' + (X(x) + CS - 4) + '" y="' + (Y(x) + CS - 7) + '" class="lbl" style="font-size:' + CS * 0.24 + 'px;font-weight:800;text-anchor:end;fill:var(--cage)">×2</text>'; });
        break; }
      case 'thermo':
        h += '<circle cx="' + CX(cells[0]) + '" cy="' + CY(cells[0]) + '" r="' + CS * 0.36 + '" fill="' + deco + '" opacity=".55"/>';
        h += '<polyline points="' + lineStr(cells) + '" fill="none" stroke="' + deco + '" stroke-width="' + CS * 0.2 + '" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>';
        break;
      case 'arrow': {
        var b = cells[0], s1 = cells[1], dx = CX(s1) - CX(b), dy = CY(s1) - CY(b), len = Math.sqrt(dx * dx + dy * dy), rr = CS * 0.4;
        var pts = (CX(b) + dx / len * rr) + ',' + (CY(b) + dy / len * rr) + ' ' + lineStr(cells.slice(1));
        h += '<circle cx="' + CX(b) + '" cy="' + CY(b) + '" r="' + rr + '" fill="none" stroke="' + deco + '" stroke-width="2"/>';
        h += '<polyline points="' + pts + '" fill="none" stroke="' + deco + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        var e = cells[k - 1], pv = cells[k - 2], ex = CX(e) - CX(pv), ey = CY(e) - CY(pv), el = Math.sqrt(ex * ex + ey * ey); ex /= el; ey /= el;
        var tx = CX(e) + ex * CS * 0.12, ty = CY(e) + ey * CS * 0.12, a = CS * 0.2;
        h += '<polygon points="' + tx + ',' + ty + ' ' + (tx - ex * a + ey * a * 0.6) + ',' + (ty - ey * a - ex * a * 0.6) + ' ' + (tx - ex * a - ey * a * 0.6) + ',' + (ty - ey * a + ex * a * 0.6) + '" fill="' + deco + '"/>';
        break; }
      case 'slowthermo':
        h += '<circle cx="' + CX(cells[0]) + '" cy="' + CY(cells[0]) + '" r="' + CS * 0.36 + '" fill="none" stroke="' + deco + '" stroke-width="2.5" opacity=".8"/>';
        h += pline(cells, deco, CS * 0.16, 0.55, '1 ' + CS * 0.12);
        break;
      case 'nabner': h += pline(cells, '#8d6e63', CS * 0.18, 0.55); break;
      case 'parityline': h += pline(cells, '#e6b800', CS * 0.16, 0.75); break;
      case 'sameparity': h += pline(cells, '#3f51b5', CS * 0.16, 0.55); break;
      case 'regsum': h += pline(cells, '#e84393', CS * 0.16, 0.6); break;
      case 'zipper':
        h += pline(cells, '#c0392b', CS * 0.12, 0.6, '5 4');
        h += '<circle cx="' + CX(cells[(k - 1) >> 1]) + '" cy="' + CY(cells[(k - 1) >> 1]) + '" r="' + CS * 0.32 + '" fill="none" stroke="#c0392b" stroke-width="2" opacity=".8"/>';
        break;
      case 'lockout': {
        h += pline(cells, deco, 2, 1);
        [cells[0], cells[k - 1]].forEach(function (x) { var cx = CX(x), cy = CY(x), z = CS * 0.34; h += '<polygon points="' + cx + ',' + (cy - z) + ' ' + (cx + z) + ',' + cy + ' ' + cx + ',' + (cy + z) + ' ' + (cx - z) + ',' + cy + '" fill="var(--card)" stroke="' + deco + '" stroke-width="2"/>'; });
        break; }
      case 'darrow': {
        h += pline(cells, deco, 2, 1);
        [cells[0], cells[k - 1]].forEach(function (x) { h += '<circle cx="' + CX(x) + '" cy="' + CY(x) + '" r="' + CS * 0.34 + '" fill="var(--card)" stroke="' + deco + '" stroke-width="2"/>'; });
        break; }
      case 'avgarrow': case 'prodarrow':
        h += circ(cells[0]) + arrowTail(cells, cells[0], 1) + tag(cells[0], c.t === 'avgarrow' ? 'μ' : '×');
        break;
      case 'pillarrow': {
        var pa = cells[0], pb = cells[1], px0 = Math.min(X(pa), X(pb)) + CS * 0.1, py0 = Math.min(Y(pa), Y(pb)) + CS * 0.1;
        var pw = Math.abs(X(pa) - X(pb)) + CS * 0.8, ph = Math.abs(Y(pa) - Y(pb)) + CS * 0.8;
        h += '<rect x="' + px0 + '" y="' + py0 + '" width="' + pw + '" height="' + ph + '" rx="' + CS * 0.4 + '" fill="none" stroke="' + deco + '" stroke-width="2"/>';
        h += arrowTail(cells, pb, 2);
        break; }
      case 'fortress':
        cells.forEach(function (x) { h += '<rect x="' + (X(x) + 2) + '" y="' + (Y(x) + 2) + '" width="' + (CS - 4) + '" height="' + (CS - 4) + '" fill="' + deco + '" opacity=".32" rx="3"/>'; });
        break;
      case 'minmax':
        c.marks.forEach(function (m) {
          var x0 = X(m[0]) + 3, y0 = Y(m[0]) + 3, z = CS * 0.2;
          o += m[1] === 'max' ? '<polygon points="' + (x0 + z / 2) + ',' + y0 + ' ' + (x0 + z) + ',' + (y0 + z) + ' ' + x0 + ',' + (y0 + z) + '" fill="var(--cage)"/>'
            : '<polygon points="' + x0 + ',' + y0 + ' ' + (x0 + z) + ',' + y0 + ' ' + (x0 + z / 2) + ',' + (y0 + z) + '" fill="var(--cage)"/>';
        });
        break;
      case 'clone': {
        var ci = P.cons.filter(function (q) { return q.t === 'clone'; }).indexOf(c), col2 = PAL[(ci + 1) % PAL.length], lt = String.fromCharCode(65 + ci);
        [c.a, c.b].forEach(function (grp) {
          grp.forEach(function (x) { h += '<rect x="' + (X(x) + 1) + '" y="' + (Y(x) + 1) + '" width="' + (CS - 2) + '" height="' + (CS - 2) + '" fill="' + col2 + '" opacity=".3"/>'; });
          h += '<text x="' + (X(grp[0]) + CS * 0.14) + '" y="' + (Y(grp[0]) + CS * 0.2) + '" class="lbl" style="font-size:' + CS * 0.24 + 'px;font-weight:800;text-anchor:start;fill:' + col2 + '">' + lt + '</text>';
        });
        break; }
      case 'rossini': case 'outside': {
        var f2 = cells[0], dr2 = c.dir[0], dc2 = c.dir[1], ox2 = CX(f2) - dc2 * CS, oy2 = CY(f2) - dr2 * CS, txt2;
        if (c.t === 'outside') txt2 = c.digits.map(sym).join(' ');
        else { var vx = c.inc ? dc2 : -dc2, vy = c.inc ? dr2 : -dr2; txt2 = vx === 1 ? '▶' : vx === -1 ? '◀' : vy === 1 ? '▼' : '▲'; }
        o += '<text x="' + ox2 + '" y="' + oy2 + '" class="lbl" style="font-size:' + (c.t === 'outside' ? CS * 0.3 : CS * 0.34) + 'px;font-weight:700;fill:var(--cage)">' + txt2 + '</text>';
        break; }
      case 'renban': h += '<polyline points="' + lineStr(cells) + '" fill="none" stroke="#9b59d0" stroke-width="' + CS * 0.18 + '" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>'; break;
      case 'whisper': h += '<polyline points="' + lineStr(cells) + '" fill="none" stroke="#2ea84f" stroke-width="' + CS * 0.14 + '" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>'; break;
      case 'palin': h += '<polyline points="' + lineStr(cells) + '" fill="none" stroke="#6b7280" stroke-width="' + CS * 0.18 + '" stroke-linecap="round" stroke-linejoin="round" opacity=".45"/>'; break;
      case 'entropic': h += '<polyline points="' + lineStr(cells) + '" fill="none" stroke="#f08a24" stroke-width="' + CS * 0.16 + '" stroke-linecap="round" stroke-linejoin="round" opacity=".65"/>'; break;
      case 'modular': h += '<polyline points="' + lineStr(cells) + '" fill="none" stroke="#14a0a0" stroke-width="' + CS * 0.16 + '" stroke-linecap="round" stroke-linejoin="round" opacity=".65"/>'; break;
      case 'between':
        h += '<polyline points="' + lineStr(cells) + '" fill="none" stroke="' + deco + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        [cells[0], cells[k - 1]].forEach(function (x) { h += '<circle cx="' + CX(x) + '" cy="' + CY(x) + '" r="' + CS * 0.3 + '" fill="var(--card)" stroke="' + deco + '" stroke-width="2"/>'; });
        break;
      case 'dots':
        c.marks.forEach(function (m) {
          var mx = (CX(m.a) + CX(m.b)) / 2, my = (CY(m.a) + CY(m.b)) / 2, horiz = L.pos[m.a][0] === L.pos[m.b][0];
          if (c.kind === 'kropki') o += '<circle cx="' + mx + '" cy="' + my + '" r="' + CS * 0.14 + '" fill="' + (m.m === 'w' ? '#fff' : '#111') + '" stroke="#111" stroke-width="1.5"/>';
          else if (c.kind === 'diff') o += '<circle cx="' + mx + '" cy="' + my + '" r="' + CS * 0.15 + '" fill="var(--card)" stroke="var(--cage)" stroke-width="1.5"/><text x="' + mx + '" y="' + (my + 0.5) + '" class="lbl" style="font-size:' + CS * 0.22 + 'px;font-weight:800;fill:var(--cage)">' + m.m + '</text>';
          else if (c.kind === 'consec') o += '<rect x="' + (horiz ? mx - 2.5 : mx - CS * 0.2) + '" y="' + (horiz ? my - CS * 0.2 : my - 2.5) + '" width="' + (horiz ? 5 : CS * 0.4) + '" height="' + (horiz ? CS * 0.4 : 5) + '" rx="1.5" fill="var(--given)"/>';
          else if (c.kind === 'ratio') o += '<circle cx="' + mx + '" cy="' + my + '" r="' + CS * 0.17 + '" fill="var(--card)" stroke="var(--cage)" stroke-width="1.6"/><text x="' + mx + '" y="' + (my + 0.5) + '" class="lbl" style="font-size:' + CS * 0.24 + 'px;font-weight:800;fill:var(--cage)">3</text>';
          else o += '<text x="' + mx + '" y="' + my + '" class="lbl" style="font-size:' + CS * 0.3 + 'px;font-weight:800;fill:var(--cage);paint-order:stroke;stroke:var(--cell);stroke-width:3px">' + (m.m === 'x' ? 'X' : 'V') + '</text>';
        });
        break;
      case 'lt':
        c.marks.forEach(function (m) {
          var mx = (CX(m.a) + CX(m.b)) / 2, my = (CY(m.a) + CY(m.b)) / 2, ra = L.pos[m.a], rb = L.pos[m.b], g;
          if (ra[0] === rb[0]) g = ra[1] < rb[1] ? '<' : '>'; else g = ra[0] < rb[0] ? '∧' : '∨';
          o += '<text x="' + mx + '" y="' + my + '" class="lbl" style="font-size:' + CS * 0.34 + 'px;font-weight:700;fill:var(--given);paint-order:stroke;stroke:var(--cell);stroke-width:2.5px">' + g + '</text>';
        });
        break;
      case 'batt':
        c.marks.forEach(function (q) {
          var jx = X(q) + CS, jy = Y(q) + CS, z = CS * 0.16;
          o += '<rect x="' + (jx - z) + '" y="' + (jy - z) + '" width="' + z + '" height="' + z + '" fill="#111" stroke="#111" stroke-width=".8"/><rect x="' + jx + '" y="' + jy + '" width="' + z + '" height="' + z + '" fill="#111" stroke="#111" stroke-width=".8"/>' +
            '<rect x="' + jx + '" y="' + (jy - z) + '" width="' + z + '" height="' + z + '" fill="#fff" stroke="#111" stroke-width=".8"/><rect x="' + (jx - z) + '" y="' + jy + '" width="' + z + '" height="' + z + '" fill="#fff" stroke="#111" stroke-width=".8"/>';
        });
        break;
      case 'quad': {
        var br = cells[3], jx = X(br), jy = Y(br);
        o += '<circle cx="' + jx + '" cy="' + jy + '" r="' + CS * 0.3 + '" fill="var(--card)" stroke="var(--cage)" stroke-width="1.6"/>';
        o += '<text x="' + jx + '" y="' + jy + '" class="lbl" style="font-size:' + (c.digits.length > 3 ? CS * 0.2 : CS * 0.25) + 'px;font-weight:700;fill:var(--cage)">' + c.digits.map(sym).join('') + '</text>';
        break; }
      case 'parity':
        c.marks.forEach(function (m) {
          if (m[1] === 'e') h += '<rect x="' + (X(m[0]) + CS * 0.18) + '" y="' + (Y(m[0]) + CS * 0.18) + '" width="' + CS * 0.64 + '" height="' + CS * 0.64 + '" fill="' + deco + '" opacity=".28" rx="3"/>';
          else h += '<circle cx="' + CX(m[0]) + '" cy="' + CY(m[0]) + '" r="' + CS * 0.34 + '" fill="' + deco + '" opacity=".28"/>';
        });
        break;
      case 'mclue': {
        var mf = cells[0], mdr = c.dir[0], mdc = c.dir[1], mox = CX(mf) - mdc * CS, moy = CY(mf) - mdr * CS, mt = String(c.val);
        if (c.kind === 'dxsum') mt += ({ '1,1': '↘', '1,-1': '↙', '-1,1': '↗', '-1,-1': '↖' })[mdr + ',' + mdc];
        if (c.kind === 'dxsum') { mox += mdc * CS * 0.2; moy += mdr * CS * 0.2; }
        o += '<text x="' + mox + '" y="' + moy + '" class="lbl" style="font-size:' + CS * (c.kind === 'dxsum' ? 0.26 : mt.length > 3 ? 0.26 : mt.length > 2 ? 0.3 : 0.34) + 'px;font-weight:700;fill:var(--cage)">' + mt + '</text>';
        break; }
      case 'relief': case 'oddsweeper': case 'compass':
        c.marks.forEach(function (m) {
          var bx = X(m[0]) + CS - 8, by = Y(m[0]) + 9;
          if (c.t === 'compass') {
            var gl = ({ '-1,0': '↑', '-1,1': '↗', '0,1': '→', '1,1': '↘', '1,0': '↓', '1,-1': '↙', '0,-1': '←', '-1,-1': '↖' })[m[1] + ',' + m[2]];
            o += '<text x="' + bx + '" y="' + by + '" class="lbl" style="font-size:' + CS * 0.34 + 'px;font-weight:800;fill:var(--cage)">' + gl + '</text>';
          } else {
            o += '<rect x="' + (bx - 7) + '" y="' + (by - 7) + '" width="14" height="14" rx="' + (c.t === 'relief' ? 2 : 7) + '" fill="var(--card)" stroke="var(--cage)" stroke-width="1.4"' + (c.t === 'oddsweeper' ? ' stroke-dasharray="2.5 1.5"' : '') + '/>';
            o += '<text x="' + bx + '" y="' + (by + 0.5) + '" class="lbl" style="font-size:' + CS * 0.24 + 'px;font-weight:800;fill:var(--cage)">' + m[1] + '</text>';
          }
        });
        break;
      case 'quadsum': case 'stone': {
        var qb = cells[3], qx = X(qb), qy = Y(qb);
        if (c.t === 'quadsum') {
          o += '<circle cx="' + qx + '" cy="' + qy + '" r="' + CS * 0.26 + '" fill="var(--card)" stroke="var(--cage)" stroke-width="1.6"/>';
          o += '<text x="' + qx + '" y="' + qy + '" class="lbl" style="font-size:' + CS * (c.sum > 9 ? 0.23 : 0.27) + 'px;font-weight:700;fill:var(--cage)">' + c.sum + '</text>';
        } else o += '<rect x="' + (qx - CS * 0.15) + '" y="' + (qy - CS * 0.15) + '" width="' + CS * 0.3 + '" height="' + CS * 0.3 + '" fill="var(--card)" stroke="var(--cage)" stroke-width="2.2"/>';
        break; }
      case 'domino': case 'pillsq': {
        var da = cells[0], db = cells[1], dx0 = Math.min(X(da), X(db)) + CS * 0.08, dy0 = Math.min(Y(da), Y(db)) + CS * 0.08;
        var dw = Math.abs(X(da) - X(db)) + CS * 0.84, dh = Math.abs(Y(da) - Y(db)) + CS * 0.84;
        h += '<rect x="' + dx0 + '" y="' + dy0 + '" width="' + dw + '" height="' + dh + '" rx="' + CS * (c.t === 'pillsq' ? 0.4 : 0.12) + '" fill="none" stroke="var(--cage)" stroke-width="1.8"/>';
        if (c.t === 'domino') {
          var dtxt = c.digits.slice().sort(function (p, q) { return p - q; }).map(sym).join('·');
          o += '<text x="' + (dx0 + 3) + '" y="' + (dy0 + 8) + '" class="lbl" style="font-size:' + CS * 0.22 + 'px;font-weight:800;text-anchor:start;fill:var(--cage)">' + dtxt + '</text>';
        } else {
          var pdr = L.pos[db][0] - L.pos[da][0], pdc = L.pos[db][1] - L.pos[da][1];
          o += '<text x="' + (dx0 + dw - 8) + '" y="' + (dy0 + 8) + '" class="lbl" style="font-size:' + CS * 0.26 + 'px;font-weight:800;fill:var(--cage)">' + (pdc === 1 ? '▶' : pdc === -1 ? '◀' : pdr === 1 ? '▼' : '▲') + '</text>';
        }
        break; }
      case 'legato': case 'consonant': case 'fixstep': case 'compline': case 'zigzag': case 'fibonacci': case 'steps': case 'progression': case 'echo': case 'divisible': case 'primeline': {
        var LS = { legato: ['#2e86c1', 'L'], consonant: ['#8e44ad', '♪'], fixstep: ['#d35400', '±3'], compline: ['#16a085', '⊕'], zigzag: ['#c0392b', 'Z'], fibonacci: ['#b7950b', 'F'], steps: ['#2874a6', 'S'], progression: ['#117a65', 'A'], echo: ['#af601a', 'E'], divisible: ['#6c3483', '÷' + c.m], primeline: ['#1e8449', 'P'] }[c.t];
        h += pline(cells, LS[0], CS * 0.14, 0.6);
        h += '<circle cx="' + CX(cells[0]) + '" cy="' + CY(cells[0]) + '" r="' + CS * 0.14 + '" fill="' + LS[0] + '" opacity=".8"/>';
        if (c.t === 'fibonacci' || c.t === 'steps' || c.t === 'divisible') {
          var he = cells[k - 1], hp = cells[k - 2], hx = CX(he) - CX(hp), hy = CY(he) - CY(hp), hl = Math.sqrt(hx * hx + hy * hy) || 1; hx /= hl; hy /= hl;
          var hx0 = CX(he) + hx * CS * 0.1, hy0 = CY(he) + hy * CS * 0.1, ha = CS * 0.22;
          h += '<polygon points="' + hx0 + ',' + hy0 + ' ' + (hx0 - hx * ha + hy * ha * 0.6) + ',' + (hy0 - hy * ha - hx * ha * 0.6) + ' ' + (hx0 - hx * ha - hy * ha * 0.6) + ',' + (hy0 - hy * ha + hx * ha * 0.6) + '" fill="' + LS[0] + '"/>';
        }
        o += '<text x="' + (X(cells[0]) + CS * 0.78) + '" y="' + (Y(cells[0]) + CS * 0.22) + '" class="lbl" style="font-size:' + CS * 0.26 + 'px;font-weight:800;fill:' + LS[0] + '">' + LS[1] + '</text>';
        break; }
      case 'sandwich': case 'sky': case 'xsum': case 'osum': case 'lk': case 'luk': {
        var f = cells[0], dr = c.dir[0], dc = c.dir[1];
        var ox = CX(f) - dc * CS, oy = CY(f) - dr * CS;
        var txt = c.t === 'sky' ? c.clue : c.sum;
        if (c.t === 'lk' || c.t === 'luk') txt += ({ '1,1': '↘', '1,-1': '↙', '-1,1': '↗', '-1,-1': '↖' })[dr + ',' + dc];
        o += '<text x="' + ox + '" y="' + oy + '" class="lbl" style="font-size:' + CS * (c.t === 'lk' || c.t === 'luk' ? 0.27 : 0.34) + 'px;font-weight:700;fill:var(--cage)">' + txt + '</text>';
        break; }
    }
  });
  return { below: h, above: o };
}
function buildBoard() {
  geom();
  var L = game.L, W = L.C * CS + 2 * MG, H = L.R * CS + 2 * MG, i, grid = '', hit = '';
  var svg = $('board'); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  for (i = 0; i < game.cnt; i++) {
    grid += '<rect x="' + X(i) + '" y="' + Y(i) + '" width="' + CS + '" height="' + CS + '" fill="none" stroke="var(--line)" stroke-width="1"/>';
    hit += '<rect x="' + X(i) + '" y="' + Y(i) + '" width="' + CS + '" height="' + CS + '" fill="transparent" data-i="' + i + '"/>';
  }
  var th = '';
  for (i = 0; i < game.cnt; i++) {
    var r = L.pos[i][0], c = L.pos[i][1], g0 = groupOf(i), x = X(i), y = Y(i);
    var right = c + 1 < L.C ? L.at[r * L.C + c + 1] : -1, down = r + 1 < L.R ? L.at[(r + 1) * L.C + c] : -1, left = c > 0 ? L.at[r * L.C + c - 1] : -1, up = r > 0 ? L.at[(r - 1) * L.C + c] : -1;
    if (right < 0 || groupOf(right) !== g0) th += 'M' + (x + CS) + ' ' + y + 'V' + (y + CS);
    if (down < 0 || groupOf(down) !== g0) th += 'M' + x + ' ' + (y + CS) + 'H' + (x + CS);
    if (left < 0) th += 'M' + x + ' ' + y + 'V' + (y + CS);
    if (up < 0) th += 'M' + x + ' ' + y + 'H' + (x + CS);
  }
  var dc = decor();
  svg.innerHTML = '<g id="g-bg"></g><g>' + dc.below + '</g><g>' + grid + '</g><path d="' + th + '" fill="none" stroke="var(--thick)" stroke-width="2.6" stroke-linecap="square"/><g>' + dc.above + '</g><g id="g-dyn"></g><g id="g-hit">' + hit + '</g>';
  game.tint = tints(); game.rcol = game.P.regions && !game.P.chains ? regionColors() : null;
}
function noteLayout() {
  var N = game.N, cols = N <= 9 ? 3 : N <= 12 ? 4 : N <= 16 ? 4 : 5;
  return { cols: cols, rows: Math.ceil(N / cols) };
}
function conflicts() {
  var g = game, vec = curVec(), bad = new Uint8Array(g.cnt), i, k;
  for (i = 0; i < g.cnt; i++) {
    var v = vec[i]; if (!v) continue;
    var pr = g.S.peers[i];
    for (k = 0; k < pr.length; k++) if (vec[pr[k]] === v) { bad[i] = 1; break; }
  }
  (g.Sc || g.S).props.forEach(function (p) {
    for (var q = 0; q < p.cells.length; q++) if (!vec[p.cells[q]]) return;
    if (!p.ok(vec)) p.cells.forEach(function (c) { bad[c] = 1; });
  });
  return bad;
}
var srKey = '';
function announce() {
  var g = game; if (!g || g.sel.size !== 1) return;
  var i = Array.from(g.sel)[0], v = g.vals[i] || g.P.givens[i];
  var key = i + ':' + v + ':' + (g.P.givens[i] ? 1 : 0); if (key === srKey) return; srKey = key;
  var p = g.L.pos[i], txt = t('sr_row') + ' ' + (p[0] + 1) + ', ' + t('sr_col') + ' ' + (p[1] + 1) + ': ' + (v ? sym(v, i) + (g.P.givens[i] ? ' (' + t('sr_giv') + ')' : '') : t('sr_empty'));
  $('sr').textContent = txt;
}
function renderDyn() {
  var g = game, i, bg = '', tx = '', nl = noteLayout();
  setTimeout(announce, 0);
  if (g.P.fog) {
    var known = new Int32Array(g.cnt);
    for (i = 0; i < g.cnt; i++) known[i] = g.P.givens[i] > 0 || (g.vals[i] && g.vals[i] === g.P.solution[i]) ? 1 : 0;
    var lit = SFF.fogLit(g.L, known), key = lit.join('');
    if (key !== g.litKey) {
      g.litKey = key; g.lit = lit; g.visCons = SFF.visibleCons(g.P.cons, lit);
      g.Sc = SFF.makeSolver(Object.assign({}, g.P, { cons: g.visCons, givens: null }));
      buildBoard();
    }
  }
  var optConf = $('o-conf').checked, optSame = $('o-same').checked, optPeer = $('o-peer').checked;
  var mid = g.mx && g.mx.id, bad = optConf && !noHelp() ? conflicts() : null;
  if (mid === 'memory' || mid === 'hardcore') optSame = mid === 'hardcore' ? optSame : false;
  var orbSet = mid === 'orb' ? orbVisible() : null, memHide = mid === 'memory' && g.mx.phase !== 'show';
  var one = g.sel.size === 1 ? Array.from(g.sel)[0] : -1, same = one >= 0 ? curVal(one) : 0;
  var peerSet = {};
  if (optPeer && one >= 0) { peerSet[one] = 1; Array.prototype.forEach.call(g.S.peers[one], function (j) { peerSet[j] = 1; }); }
  var dark = darkMode();
  for (i = 0; i < g.cnt; i++) {
    var x = X(i), y = Y(i), v = curVal(i), fill = 'var(--cell)';
    if (g.rcol) fill = (dark ? JIGD : JIG)[g.rcol[g.P.regions[i]]];
    else if (g.tint[i] === 1) fill = 'var(--tint1)'; else if (g.tint[i] === 2) fill = 'var(--tint2)';
    if (peerSet[i]) fill = 'var(--peer)';
    if (optSame && same && v === same) fill = 'var(--same)';
    if (g.wrong.has(i)) fill = 'var(--wrong)';
    if (bad && bad[i]) fill = 'var(--bad)';
    if (g.sel.has(i)) fill = 'var(--sel)';
    if (g.step) { if (g.step.why[i]) fill = 'var(--why)'; if (g.step.grp[i]) fill = 'var(--grp)'; if (g.step.cell === i) fill = 'var(--stepc)'; }
    bg += '<rect x="' + x + '" y="' + y + '" width="' + CS + '" height="' + CS + '" style="fill:' + fill + '"/>';
    if (orbSet && !orbSet[i]) bg += '<rect x="' + x + '" y="' + y + '" width="' + CS + '" height="' + CS + '" fill="var(--muted)" opacity=".35"/>';
    if (g.P.fog && g.lit && !g.lit[i]) bg += '<rect x="' + x + '" y="' + y + '" width="' + CS + '" height="' + CS + '" fill="var(--muted)" opacity=".3"/>';
    if (orbSet && !orbSet[i]) continue;
    if (v && memHide && g.P.givens[i]) continue;
    if (v) {
      tx += '<text x="' + (x + CS / 2) + '" y="' + (y + CS / 2 + 1) + '" class="' + (g.P.givens[i] ? 'dg' : 'du') + '" style="font-size:' + CS * (g.syms[0].length > 1 ? 0.4 : 0.62) + 'px">' + sym(v, i) + '</text>';
    } else if (g.notes[i]) {
      var fs = CS / Math.max(nl.cols, nl.rows) * 0.78, m = g.notes[i];
      for (var d = 1; d <= g.N; d++) if (m >> (d - 1) & 1) {
        var cc = (d - 1) % nl.cols, rr = Math.floor((d - 1) / nl.cols);
        tx += '<text x="' + (x + (cc + 0.5) * CS / nl.cols) + '" y="' + (y + (rr + 0.5) * CS / nl.rows + 0.5) + '" class="nt" style="font-size:' + fs + 'px">' + sym(d, i) + '</text>';
      }
    }
  }
  $('g-bg').innerHTML = bg; $('g-dyn').innerHTML = tx;
  if (g.v3d) render3d();
  // numpad: cifre complete
  var cnts = new Int32Array(g.N + 1);
  for (i = 0; i < g.cnt; i++) { var vv = curVal(i); if (vv) cnts[vv]++; }
  var total = g.cnt / g.N;
  Array.prototype.forEach.call($('numpad').children, function (b) { var d = +b.dataset.d; if (d) b.classList.toggle('done', cnts[d] >= (g.L.composite || g.L.cube || g.L.greco ? total : g.N)); });
}
function buildNumpad() {
  var h = '';
  for (var d = 1; d <= game.N; d++) h += '<button data-d="' + d + '" aria-label="' + sym(d) + '">' + sym(d) + (game.L.greco ? '/' + GL[d - 1] : '') + '</button>';
  $('numpad').innerHTML = h;
  $('numpad').style.gridTemplateColumns = 'repeat(' + (game.N <= 9 ? 5 : game.N <= 16 ? 8 : 9) + ',1fr)';
}
$('numpad').onclick = function (e) { var b = e.target.closest('button'); if (b) inputDigit(+b.dataset.d); };

/* ---------- interacțiune ---------- */
var dragging = false;
function cellFromEvent(e) { var el = document.elementFromPoint(e.clientX, e.clientY); return el && el.dataset && el.dataset.i !== undefined ? +el.dataset.i : -1; }
$('board').addEventListener('pointerdown', function (e) {
  if (!game) return; var i = cellFromEvent(e); if (i < 0) return;
  dragging = true;
  if (e.shiftKey || e.ctrlKey || e.metaKey) { if (game.sel.has(i)) game.sel.delete(i); else game.sel.add(i); }
  else { game.sel = new Set([i]); }
  renderDyn(); e.preventDefault();
});
$('board').addEventListener('pointermove', function (e) {
  if (!dragging || !game) return; var i = cellFromEvent(e); if (i >= 0 && !game.sel.has(i)) { game.sel.add(i); renderDyn(); }
});
window.addEventListener('pointerup', function () { dragging = false; });
function pushUndo() {
  game.step = null;
  game.undo.push({ v: Int32Array.from(game.vals), n: Int32Array.from(game.notes) }); if (game.undo.length > 400) game.undo.shift(); game.redo = [];
}
function afterChange() {
  if ($('msg').dataset.k === 'check') setMsg('', '');
  game.wrong.clear(); renderDyn(); save();
  var full = true; for (var i = 0; i < game.cnt; i++) if (!curVal(i)) { full = false; break; }
  if (full && !game.solved && game.S.verify(curVec())) { game.solved = true; setMsg(t('solved'), 'good'); save(); onSolved(); }
}
function inputDigit(d) {
  var g = game; if (!g || g.solved || g.lost || d < 1 || d > g.N) return;
  var cells = Array.from(g.sel).filter(function (i) { return !g.P.givens[i]; }); if (!cells.length) return;
  pushUndo();
  if (g.mode === 'note') {
    var all = cells.every(function (i) { return !g.vals[i] && (g.notes[i] >> (d - 1) & 1); });
    cells.forEach(function (i) { if (g.vals[i]) return; g.notes[i] = all ? g.notes[i] & ~(1 << (d - 1)) : g.notes[i] | (1 << (d - 1)); });
  } else {
    var allSame = cells.every(function (i) { return g.vals[i] === d; });
    cells.forEach(function (i) {
      if (allSame) { g.vals[i] = 0; return; }
      g.vals[i] = d; g.notes[i] = 0;
      if ($('o-clean').checked) Array.prototype.forEach.call(g.S.peers[i], function (j) { g.notes[j] &= ~(1 << (d - 1)); });
    });
    var wr = onDigit(d, cells);
  }
  afterChange();
  if (wr && wr.length) { wr.forEach(function (i) { g.wrong.add(i); }); renderDyn(); }
}
function eraseSel() {
  var g = game; if (!g || g.solved || g.lost) return;
  var cells = Array.from(g.sel).filter(function (i) { return !g.P.givens[i] && (g.vals[i] || g.notes[i]); }); if (!cells.length) return;
  pushUndo(); cells.forEach(function (i) { g.vals[i] = 0; g.notes[i] = 0; }); afterChange();
}
function doUndo() { var g = game; if (!g || g.lost || !g.undo.length) return; g.redo.push({ v: Int32Array.from(g.vals), n: Int32Array.from(g.notes) }); var s = g.undo.pop(); g.vals = s.v; g.notes = s.n; g.solved = false; g.revealed = false; if (g.step) { g.step = null; setMsg('', ''); } afterChange(); }
function doRedo() { var g = game; if (!g || g.lost || !g.redo.length) return; g.undo.push({ v: Int32Array.from(g.vals), n: Int32Array.from(g.notes) }); var s = g.redo.pop(); g.vals = s.v; g.notes = s.n; if (g.step) { g.step = null; setMsg('', ''); } afterChange(); }
function toggleNote() { if (!game) return; game.mode = game.mode === 'note' ? 'val' : 'note'; $('a-note').setAttribute('aria-pressed', game.mode === 'note' ? 'true' : 'false'); }
$('a-note').onclick = toggleNote; $('a-erase').onclick = eraseSel; $('a-undo').onclick = doUndo; $('a-redo').onclick = doRedo;
$('a-auto').onclick = function () {
  var g = game; if (!g || g.solved || g.lost) return;
  if (noHelp()) { setMsg(L2('Notițele automate sunt dezactivate în acest mod.', 'Auto-notes are disabled in this mode.', ["Les notes automatiques sont désactivées dans ce mode.", "Gli appunti automatici sono disattivati in questa modalità.", "Las notas automáticas están desactivadas en este modo.", "As notas automáticas estão desativadas neste modo.", "Automatische Notizen sind in diesem Modus deaktiviert.", "Az automatikus jegyzetek ebben a módban ki vannak kapcsolva."]), 'bad'); return; }
  pushUndo();
  for (var i = 0; i < g.cnt; i++) {
    if (curVal(i)) { g.notes[i] = 0; continue; }
    var m = g.S.FULL; Array.prototype.forEach.call(g.S.peers[i], function (j) { var v = curVal(j); if (v) m &= ~(1 << (v - 1)); });
    g.notes[i] = m;
  }
  afterChange();
};
$('a-check').onclick = function () {
  var g = game; if (!g || g.solved || g.lost) return;
  if (noHelp()) { setMsg(L2('Verificarea este dezactivată în acest mod.', 'Checking is disabled in this mode.', ["La vérification est désactivée dans ce mode.", "La verifica è disattivata in questa modalità.", "La comprobación está desactivada en este modo.", "A verificação está desativada neste modo.", "Die Prüfung ist in diesem Modus deaktiviert.", "Az ellenőrzés ebben a módban ki van kapcsolva."]), 'bad'); return; }
  g.wrong.clear();
  for (var i = 0; i < g.cnt; i++) if (g.vals[i] && g.vals[i] !== g.P.solution[i]) g.wrong.add(i);
  renderDyn();
  setMsg(g.wrong.size ? t('check_bad') + g.wrong.size : t('check_ok'), g.wrong.size ? 'bad' : 'good'); $('msg').dataset.k = 'check';
};

/* ---------- pas cu pas ---------- */
function groupName(g, grp) {
  var L = g.L, r0 = L.pos[grp[0]][0], c0 = L.pos[grp[0]][1], sr = true, sc = true;
  grp.forEach(function (i) { if (L.pos[i][0] !== r0) sr = false; if (L.pos[i][1] !== c0) sc = false; });
  return sr ? L2('rândul marcat', 'row', ["de la ligne marquée", "della riga indicata", "de la fila marcada", "da linha marcada", "der markierten Zeile", "a megjelölt sorban"]) : sc ? L2('coloana marcată', 'column', ["de la colonne marquée", "della colonna indicata", "de la columna marcada", "da coluna marcada", "der markierten Spalte", "a megjelölt oszlopban"]) : L2('regiunea marcată', 'region', ["de la région marquée", "della regione indicata", "de la región marcada", "da região marcada", "des markierten Gebiets", "a megjelölt tartományban"]);
}
function nextStep() {
  var g = game, S = g.Sc || g.S, N = g.N, cnt = g.cnt, i, d, vec = curVec(), sol = g.P.solution, pm = new Int32Array(cnt), FULL = S.FULL;
  function pc(m) { var n = 0; while (m) { m &= m - 1; n++; } return n; }
  function res(cell, kind, why, grp, extra) { var W = {}, G = {}; (why || []).forEach(function (j) { W[j] = 1; }); (grp || []).forEach(function (j) { G[j] = 1; }); var o = { cell: cell, digit: sol[cell], kind: kind, why: W, grp: G }; if (extra) for (var k in extra) o[k] = extra[k]; return o; }
  for (i = 0; i < cnt; i++) if (g.vals[i] && !g.P.givens[i] && g.vals[i] !== sol[i]) return res(i, 'fix', [], []);
  for (i = 0; i < cnt; i++) {
    if (vec[i]) continue;
    var m = FULL; Array.prototype.forEach.call(S.peers[i], function (j) { if (vec[j]) m &= ~(1 << (vec[j] - 1)); });
    pm[i] = m;
  }
  var sel = Array.from(g.sel)[0], order = [], k;
  if (sel !== undefined) order.push(sel);
  for (i = 0; i < cnt; i++) order.push(i);
  /* a) unica cifră rămasă în celulă */
  for (k = 0; k < order.length; k++) {
    i = order[k]; if (vec[i] || pc(pm[i]) !== 1) continue;
    var why = [], seen = 0;
    Array.prototype.forEach.call(S.peers[i], function (j) { if (vec[j] && !(seen >> (vec[j] - 1) & 1)) { seen |= 1 << (vec[j] - 1); why.push(j); } });
    return res(i, 'naked', why, []);
  }
  /* b) unica celulă posibilă pentru o cifră într-un rând/coloană/regiune */
  var G = S.groups, gi, best = null;
  for (gi = 0; gi < G.length && !best; gi++) {
    var grp = G[gi]; if (grp.length !== N) continue;
    var have = 0; grp.forEach(function (j) { if (vec[j]) have |= 1 << (vec[j] - 1); });
    for (d = 1; d <= N && !best; d++) {
      if (have >> (d - 1) & 1) continue;
      var cs = grp.filter(function (j) { return !vec[j] && (pm[j] >> (d - 1) & 1); });
      if (cs.length === 1 && sol[cs[0]] === d) best = res(cs[0], 'hidden', [], grp, { grpName: groupName(g, grp) });
    }
  }
  if (best) return best;
  /* c) deducție prin propagarea regulilor variantei */
  var dom = S.candidates(vec);
  if (dom) for (k = 0; k < order.length; k++) { i = order[k]; if (!vec[i] && (dom[i] & (dom[i] - 1)) === 0) return res(i, 'rule', [], []); }
  /* d) fără deducție directă: ipoteză (cifra din soluție) în celula cu cele mai puține variante */
  var bi = -1, bc = 99; for (i = 0; i < cnt; i++) if (!vec[i]) { var c = dom ? pc(dom[i]) : pc(pm[i]); if (c < bc) { bc = c; bi = i; } }
  return bi < 0 ? null : res(bi, 'guess', [], []);
}
function doStep() {
  var g = game; if (!g || g.solved || g.lost) return false;
  if (noHelp()) { setMsg(L2('Pașii sunt dezactivați în acest mod.', 'Steps are disabled in this mode.', ["Le pas à pas est désactivé dans ce mode.", "Il passo passo è disattivato in questa modalità.", "El paso a paso está desactivado en este modo.", "O passo a passo está desativado neste modo.", "Schritt für Schritt ist in diesem Modus deaktiviert.", "A lépésről lépésre mód ebben a módban ki van kapcsolva."]), 'bad'); return false; }
  var st = nextStep(); if (!st) return false;
  pushUndo(); g.vals[st.cell] = st.digit; g.notes[st.cell] = 0; g.sel = new Set([st.cell]);
  var p = g.L.pos[st.cell], at = L2('(rând ' + (p[0] + 1) + ', col. ' + (p[1] + 1) + ')', '(row ' + (p[0] + 1) + ', col. ' + (p[1] + 1) + ')', ["(ligne " + (p[0] + 1) + ", col. " + (p[1] + 1) + ")", "(riga " + (p[0] + 1) + ", col. " + (p[1] + 1) + ")", "(fila " + (p[0] + 1) + ", col. " + (p[1] + 1) + ")", "(linha " + (p[0] + 1) + ", col. " + (p[1] + 1) + ")", "(Zeile " + (p[0] + 1) + ", Sp. " + (p[1] + 1) + ")", "(" + (p[0] + 1) + ". sor, " + (p[1] + 1) + ". oszlop)"]), dg = sym(st.digit, st.cell), msg;
  if (st.kind === 'fix') msg = L2('Corecție ' + at + ': cifra introdusă era greșită; corect este ', 'Fix ' + at + ': the digit entered was wrong; correct is ', ["Correction " + at + " : le chiffre saisi était faux ; le bon chiffre est ", "Correzione " + at + ": la cifra inserita era sbagliata; quella corretta è ", "Corrección " + at + ": el dígito introducido era erróneo; el correcto es ", "Correção " + at + ": o algarismo introduzido estava errado; o correto é ", "Korrektur " + at + ": Die eingegebene Ziffer war falsch; richtig ist ", "Javítás " + at + ": a beírt számjegy hibás volt; a helyes: "]) + dg + '.';
  else if (st.kind === 'naked') msg = dg + ' ' + at + L2(': toate celelalte cifre apar deja printre celulele marcate (rând, coloană, regiune sau regulă de vecinătate).', ': every other digit already appears among the marked cells (row, column, region or adjacency rule).', [" : tous les autres chiffres figurent déjà parmi les cases marquées (ligne, colonne, région ou règle de voisinage).", ": tutte le altre cifre compaiono già tra le celle indicate (riga, colonna, regione o regola di adiacenza).", ": todos los demás dígitos ya aparecen entre las celdas marcadas (fila, columna, región o regla de adyacencia).", ": todos os outros algarismos já aparecem entre as células marcadas (linha, coluna, região ou regra de adjacência).", ": Alle anderen Ziffern kommen bereits in den markierten Feldern vor (Zeile, Spalte, Gebiet oder Nachbarschaftsregel).", ": az összes többi számjegy már szerepel a megjelölt cellák között (sor, oszlop, tartomány vagy szomszédsági szabály)."]);
  else if (st.kind === 'hidden') msg = dg + ' ' + at + L2(': este singura celulă din ' + st.grpName + ' unde poate sta ' + dg + '.', ': it is the only cell in the marked ' + st.grpName + ' where ' + dg + ' can go.', [" : c’est la seule case " + st.grpName + " où " + dg + " peut se placer.", ": è l’unica cella " + st.grpName + " dove può stare " + dg + ".", ": es la única celda " + st.grpName + " donde puede ir " + dg + ".", ": é a única célula " + st.grpName + " onde pode ficar " + dg + ".", ": Es ist das einzige Feld " + st.grpName + ", in das " + dg + " passt.", ": ez az egyetlen cella " + st.grpName + ", ahová " + dg + " kerülhet."]);
  else if (st.kind === 'rule') msg = dg + ' ' + at + L2(': rezultă din regulile specifice variantei (indicii, sume, relații), combinate cu celelalte cifre.', ': follows from the variant’s specific rules (clues, sums, relations) combined with the other digits.', [" : découle des règles propres à la variante (indices, sommes, relations), combinées aux autres chiffres.", ": deriva dalle regole specifiche della variante (indizi, somme, relazioni), combinate con le altre cifre.", ": se deduce de las reglas propias de la variante (pistas, sumas, relaciones), combinadas con los demás dígitos.", ": resulta das regras específicas da variante (pistas, somas, relações), combinadas com os outros algarismos.", ": ergibt sich aus den besonderen Regeln der Variante (Hinweise, Summen, Beziehungen) zusammen mit den übrigen Ziffern.", ": a változat sajátos szabályaiból (támpontok, összegek, kapcsolatok) és a többi számjegyből következik."]);
  else msg = dg + ' ' + at + L2(': nicio deducție directă; cifra este luată din soluția unică (ar fi nevoie de o ipoteză).', ': no direct deduction; the digit comes from the unique solution (a guess would be needed).', [" : aucune déduction directe ; le chiffre provient de la solution unique (une hypothèse serait nécessaire).", ": nessuna deduzione diretta; la cifra è presa dalla soluzione unica (servirebbe un tentativo).", ": ninguna deducción directa; el dígito se toma de la solución única (haría falta una suposición).", ": nenhuma dedução direta; o algarismo vem da solução única (seria preciso uma hipótese).", ": keine direkte Folgerung; die Ziffer stammt aus der eindeutigen Lösung (man müsste raten).", ": nincs közvetlen következtetés; a számjegy az egyértelmű megoldásból származik (találgatásra lenne szükség)."]);
  afterChange(); if (!g.solved) { g.step = st; renderDyn(); setMsg(msg, ''); $('sr').textContent = msg; } else stopPlay();
  return true;
}
/* ---------- tehnici explicate: numește tehnica folosită și o explică (Sudoku clasic) ---------- */
function techAvail(g) {
  var P = g && g.P; if (!P) return false;
  return !(P.mods && P.mods.length) && !(P.clues && P.clues.length) && !(P.cons && P.cons.length) && !P.regions && !P.chains && !P.zero && !P.fog &&
    (!P.layout || !P.layout.kind || P.layout.kind === 'std') && SFF.TECH.supported(g.N);
}
function sigOf(vec) { return Array.prototype.join.call(vec, ','); }
function tcell(g, c) { var p = g.L.pos[c]; return '(' + (p[0] + 1) + ',' + (p[1] + 1) + ')'; }
function thouse(h) { return t('hw_' + h.k) + '\u00a0' + (h.i + 1); }
function tsym(g, d) { return g.syms[d - 1] || d; }
function explainTech(g, s) {
  var v = { c: s.cells.map(function (c) { return tcell(g, c); }).join(', '), d: s.digits.map(function (d) { return tsym(g, d); }).join(', '), e: s.elims.length }, key;
  if (s.tech === 'nakedSingle') key = 'tx_nakedSingle';
  else if (s.tech === 'hiddenSingle') { key = 'tx_hiddenSingle'; v.a = thouse(s.houses[0]); }
  else if (s.tech === 'pointing' || s.tech === 'claiming') { key = 'tx_locked'; v.a = thouse(s.houses[0]); v.b = thouse(s.houses[1]); }
  else if (s.tech === 'nakedPair' || s.tech === 'nakedTriple') { key = 'tx_nakedSubset'; v.a = thouse(s.houses[0]); }
  else if (s.tech === 'hiddenPair' || s.tech === 'hiddenTriple') { key = 'tx_hiddenSubset'; v.a = thouse(s.houses[0]); }
  else if (s.tech === 'xwing' || s.tech === 'swordfish') {
    key = 'tx_fish'; var k = s.tech === 'xwing' ? 2 : 3; v.a = s.houses.slice(0, k).map(thouse).join(' · '); v.b = s.houses.slice(k).map(thouse).join(' · ');
  } else { key = 'tx_xywing'; v.p = tcell(g, s.pivot); v.c = tcell(g, s.cells[1]) + ', ' + tcell(g, s.cells[2]); v.d = s.digits.slice(0, 2).map(function (d) { return tsym(g, d); }).join(', '); v.z = tsym(g, s.digits[2]); }
  var txt = t(key); Object.keys(v).forEach(function (k2) { txt = txt.split('{' + k2 + '}').join(v[k2]); });
  return t('tn_' + s.tech) + ': ' + txt;
}
function doTech() {
  var g = game; if (!g || g.solved || g.lost) return;
  if (noHelp() || !techAvail(g)) { setMsg(t('tech_unavail'), 'bad'); return; }
  var sol = g.P.solution, i;
  for (i = 0; i < g.cnt; i++) if (g.vals[i] && !g.P.givens[i] && g.vals[i] !== sol[i]) { doStep(); return; } /* cifră greșită: corecția o face pasul clasic */
  var vec = curVec(), S = SFF.TECH.create(vec, g.N, g.tcand && g.tcSig === sigOf(vec) ? g.tcand : null);
  var st = S.find();
  if (!st) { setMsg(t('tech_stuck'), ''); $('sr').textContent = t('tech_stuck'); return; }
  S.apply(st);
  pushUndo();
  if (st.place) { g.vals[st.place.cell] = st.place.digit; g.sel = new Set([st.place.cell]); }
  else g.sel = new Set(st.elims.map(function (e) { return e[0]; }));
  for (i = 0; i < g.cnt; i++) g.notes[i] = (curVal(i) || g.vals[i]) ? 0 : S.cand[i];
  g.tcand = S.cand; g.tcSig = sigOf(S.vals);
  var why = {}, grp = {};
  st.cells.forEach(function (c) { why[c] = 1; }); st.why.forEach(function (c) { why[c] = 1; });
  st.elims.forEach(function (e) { grp[e[0]] = 1; });
  var cell = st.place ? st.place.cell : st.elims[0][0], msg = explainTech(g, st) + (st.place ? '' : ' ' + t('tech_notes'));
  afterChange();
  if (!g.solved) { g.step = { cell: cell, digit: st.place ? st.place.digit : 0, kind: 'tech', why: why, grp: grp }; renderDyn(); setMsg(msg, ''); $('sr').textContent = msg; }
}
$('a-tech').onclick = function () { stopPlay(); doTech(); };
var playTimer = null;
function stopPlay() { if (playTimer) { clearInterval(playTimer); playTimer = null; } if ($('a-play')) { $('a-play').textContent = t('autoplay'); $('a-play').setAttribute('aria-pressed', 'false'); } }
$('a-step').onclick = function () { stopPlay(); doStep(); };
$('a-play').onclick = function () {
  if (playTimer) { stopPlay(); return; }
  if (!game || game.solved || game.lost || noHelp()) { if (game && noHelp()) setMsg(L2('Pașii sunt dezactivați în acest mod.', 'Steps are disabled in this mode.', ["Le pas à pas est désactivé dans ce mode.", "Il passo passo è disattivato in questa modalità.", "El paso a paso está desactivado en este modo.", "O passo a passo está desativado neste modo.", "Schritt für Schritt ist in diesem Modus deaktiviert.", "A lépésről lépésre mód ebben a módban ki van kapcsolva."]), 'bad'); return; }
  $('a-play').textContent = t('pause'); $('a-play').setAttribute('aria-pressed', 'true');
  if (!doStep()) { stopPlay(); return; }
  playTimer = setInterval(function () { if (!game || game.solved || game.lost || curTab !== 'play' || !doStep()) stopPlay(); }, 1600);
};
$('a-hint').onclick = function () {
  var g = game; if (!g || g.solved || g.lost) return;
  if (noHelp()) { setMsg(L2('Indiciul este dezactivat în acest mod.', 'Hints are disabled in this mode.', ["Les indices sont désactivés dans ce mode.", "I suggerimenti sono disattivati in questa modalità.", "Las pistas están desactivadas en este modo.", "As dicas estão desativadas neste modo.", "Tipps sind in diesem Modus deaktiviert.", "A tippek ebben a módban ki vannak kapcsolva."]), 'bad'); return; }
  var vec = curVec(), dom = (g.Sc || g.S).candidates(vec), target = -1, logic = false, i;
  var wrongAny = false; for (i = 0; i < g.cnt; i++) if (g.vals[i] && g.vals[i] !== g.P.solution[i]) wrongAny = true;
  if (dom && !wrongAny) {
    var sel = Array.from(g.sel)[0];
    if (sel !== undefined && !curVal(sel) && (dom[sel] & (dom[sel] - 1)) === 0) { target = sel; logic = true; }
    if (target < 0) for (i = 0; i < g.cnt; i++) if (!curVal(i) && (dom[i] & (dom[i] - 1)) === 0) { target = i; logic = true; break; }
  }
  if (target < 0) {
    var s2 = Array.from(g.sel)[0];
    if (s2 !== undefined && !curVal(s2)) target = s2;
    else { var best = 99; for (i = 0; i < g.cnt; i++) if (!curVal(i)) { var c = dom ? (function (m) { var n = 0; while (m) { m &= m - 1; n++; } return n; })(dom[i]) : 9; if (c < best) { best = c; target = i; } } }
  }
  if (target < 0) { setMsg(t('hint_none'), ''); return; }
  pushUndo(); g.vals[target] = g.P.solution[target]; g.notes[target] = 0; g.sel = new Set([target]);
  afterChange(); if (!g.solved) setMsg(logic ? t('hint_logic') : t('hint_rev'), '');
};
function ask(msg) {
  return FFF.dialog.confirm(msg, { danger: true });
}
$('a-solve').onclick = async function () {
  var g = game; if (!g || g.solved) return; if (!(await ask(t('confirm_solve')))) return;
  if (g !== game) return;
  pushUndo(); for (var i = 0; i < g.cnt; i++) { g.vals[i] = g.P.solution[i]; g.notes[i] = 0; }
  g.solved = true; g.revealed = true; g.wrong.clear(); renderDyn(); save(); setMsg(t('solved_app'), 'good');
};
$('a-clear').onclick = async function () {
  var g = game; if (!g || !(await ask(t('confirm_clear')))) return; if (g !== game) return; pushUndo(); if (['hardcore', 'duel', 'memory', 'marathon'].indexOf(g.mx && g.mx.id) >= 0) { g.undo = []; g.redo = []; } g.vals.fill(0); g.notes.fill(0); g.solved = false; g.revealed = false; g.elapsed = 0; g.lost = false; g.wrong.clear();
  if (g.mx && ['duel', 'hardcore', 'memory'].indexOf(g.mx.id) >= 0) g.mx = freshMx(g.P);
  afterChange(); setMsg('', '');
};
['o-conf', 'o-same', 'o-peer'].forEach(function (id) { $(id).onchange = function () { if (game) renderDyn(); }; });
document.addEventListener('keydown', function (e) {
  if (curTab !== 'play' || !game) return;
  var tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
  var k = e.key;
  if ((e.ctrlKey || e.metaKey) && k.toLowerCase() === 'z') { e.shiftKey ? doRedo() : doUndo(); e.preventDefault(); return; }
  if ((e.ctrlKey || e.metaKey) && k.toLowerCase() === 'y') { doRedo(); e.preventDefault(); return; }
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (k === 'Backspace' || k === 'Delete' || (k === '0' && !game.symMap['0'])) { eraseSel(); e.preventDefault(); return; }
  if (k === 'n' || k === 'N') { if (!game.symMap.N) { toggleNote(); e.preventDefault(); return; } }
  if (k.indexOf('Arrow') === 0) {
    var sel = Array.from(game.sel), last = sel.length ? sel[sel.length - 1] : 0, L = game.L;
    var dr = k === 'ArrowUp' ? -1 : k === 'ArrowDown' ? 1 : 0, dc = k === 'ArrowLeft' ? -1 : k === 'ArrowRight' ? 1 : 0;
    var r = L.pos[last][0] + dr, c = L.pos[last][1] + dc;
    while (r >= 0 && c >= 0 && r < L.R && c < L.C) { var j = L.at[r * L.C + c]; if (j >= 0) { game.sel = e.shiftKey ? new Set(sel.concat([j])) : new Set([j]); renderDyn(); break; } r += dr; c += dc; }
    e.preventDefault(); return;
  }
  var d = game.symMap[k.toUpperCase()]; if (d) { inputDigit(d); e.preventDefault(); }
});

/* ---------- rezolvator ---------- */
function buildSvMods() {
  var h = '';
  ['diag', 'hyper', 'center', 'dg', 'antiknight', 'antiking', 'nonconsec'].forEach(function (m) {
    var mm = MODS.filter(function (x) { return x[0] === m; })[0];
    h += '<label><input type="checkbox" data-m="' + m + '"> ' + mlabel(mm) + '</label>';
  });
  $('sv-mods').innerHTML = h;
}
var svP = null;
$('sv-ex').onclick = function () { $('sv-in').value = '530070000600195000098000060800060003400803001700020006060000280000419005000080079'; };
$('sv-go').onclick = function () {
  var s = $('sv-in').value.replace(/\s+/g, '').replace(/[._-]/g, '0');
  $('sv-play').hidden = true; $('sv-out').innerHTML = '';
  if (s.length === 81 && /[^0-9]/.test(s)) { $('sv-msg').textContent = L2('Sunt permise doar cifrele 0–9 (și . _ - pentru gol).', 'Only digits 0–9 (and . _ - for blank) are allowed.', ["Seuls les chiffres 0–9 sont autorisés (et . _ - pour une case vide).", "Sono ammesse solo le cifre 0–9 (e . _ - per le caselle vuote).", "Solo se permiten los dígitos 0–9 (y . _ - para las vacías).", "Só são permitidos os algarismos 0–9 (e . _ - para as vazias).", "Erlaubt sind nur die Ziffern 0–9 (und . _ - für leere Felder).", "Csak a 0–9 számjegyek megengedettek (üres cellához . _ -)."]); $('sv-msg').className = 'msg bad'; return; }
  if (s.length !== 81 || /[^0-9]/.test(s)) { $('sv-msg').textContent = t('sv_len') + s.length + ')'; $('sv-msg').className = 'msg bad'; return; }
  var mods = []; Array.prototype.forEach.call($('sv-mods').querySelectorAll('input:checked'), function (i) { mods.push(i.dataset.m); });
  var P = { layout: { kind: 'std', n: 9 }, mods: mods, cons: [] }, S = SFF.makeSolver(P), giv = new Int32Array(81);
  for (var i = 0; i < 81; i++) giv[i] = +s[i];
  var r = S.solve(giv, { limit: 2, budget: 3000000 });
  var msg = r.aborted && r.count < 2 ? t('sv_abort') : r.count === 0 ? t('sv_none') : r.count === 1 ? t('sv_one') : t('sv_many');
  $('sv-msg').textContent = msg; $('sv-msg').className = 'msg ' + (r.count === 1 ? 'good' : r.count === 0 ? 'bad' : '');
  if (r.count) {
    var sol = r.sols[0], h = '<table class="sol">';
    for (var a = 0; a < 9; a++) { h += '<tr>'; for (var b = 0; b < 9; b++) h += '<td class="' + (giv[a * 9 + b] ? 'g' : 's') + '">' + sol[a * 9 + b] + '</td>'; h += '</tr>'; }
    $('sv-out').innerHTML = h + '</table>';
    svP = { v: 1, n: 9, layout: P.layout, mods: mods, clues: [], cons: [], givens: Array.from(giv), solution: Array.from(sol), seed: 0, difficulty: 'medium', vid: mods.length ? 'custom' : 'clasic', ucode: '' };
    $('sv-play').hidden = false;
  }
};
$('sv-play').onclick = function () { if (!svP) return; loadGame(JSON.parse(JSON.stringify(svP)), null); showTab('play'); };

/* ---------- Despre ---------- */
function renderAbout() {
  $('ab-h').textContent = t('about_h');
  var ro = '<p><b>Sudoku fără frontiere</b> este un atlas de variante Sudoku, cu generator și rezolvator care rulează local, într-un singur fișier HTML. Nu are cont, nu trimite nimic pe rețea și nu încarcă nicio resursă externă. Starea jocului se păstrează doar în acest browser (chei <code>sff_*</code> în <code>localStorage</code>).</p>' +
    '<h3>Cum funcționează</h3><p>Motorul alege mai întâi o grilă rezolvată care respectă regulile variantei, deduce din ea indiciile (cuști, termometre, puncte etc.) și apoi scoate cifrele date una câte una, doar cât timp un solver cu propagare demonstrează că soluția rămâne unică. Un puzzle generat are deci exact o soluție. Aceeași inițializare (cod) regenerează același puzzle în aceeași versiune a aplicației.</p>' +
    '<h3>Limite</h3><ul><li>Dificultatea este orientativă: depinde de numărul de indicii date, nu de tehnicile logice necesare.</li><li>Nivelul „greu” scoate cât de multe indicii poate; la variantele cu multe indicii pe grilă pot rămâne foarte puține cifre date.</li><li>Regulile urmează convențiile uzuale ale fiecărei variante; unde există mai multe convenții, fișa spune care a fost aleasă.</li><li>Grilele 16×16 și 25×25 folosesc simbolurile 1–9 și litere; cele compuse (Samurai etc.) au doar regulile clasice, iar combinațiile foarte încărcate pot dura mai mult sau pot eșua.</li><li>Indiciul folosește logica pe candidați; dacă nu găsește un pas, dezvăluie o cifră din soluție.</li></ul>' +
    '<h3>Moduri de joc</h3><ul><li><b>Orb</b>: se văd doar celulele de la cel mult 2 pași de selecție.</li><li><b>Memorie</b>: cifrele date se văd câteva secunde, apoi se ascund; „Privește” costă 30 s. Fără indicii și fără evidențierea conflictelor.</li><li><b>Maraton</b>: 5 puzzle-uri la rând (ușor, ușor, mediu, mediu, greu), cu timp total.</li><li><b>Duel</b>: un adversar-cronometru completează o celulă la fiecare câteva secunde (completează din soluția cunoscută, nu prin logică); dacă termină primul, pierzi.</li><li><b>Hardcore</b>: 3 vieți, fiecare cifră greșită costă una; fără indiciu, verificare sau notițe automate.</li><li><b>Puzzle-ul zilei</b>: același puzzle pentru toți în aceeași zi (după data UTC), cu serie de zile consecutive, păstrată local.</li><li><b>Sonor</b>: fiecare cifră are o notă; un rând, o coloană sau o casetă completă sună ca un arpegiu.</li></ul>' +
    '<h3>Scurtături</h3><p>Cifre/litere: completează · <kbd>N</kbd>: notițe · <kbd>Backspace</kbd>: șterge · săgeți: mută · <kbd>Shift</kbd>/<kbd>Ctrl</kbd>+clic: selecție multiplă · <kbd>Ctrl</kbd>+<kbd>Z</kbd>/<kbd>Y</kbd>: anulează/refă.</p>' +
    '<p class="small">Proiect personal, nu un serviciu oficial. Licență: MIT (cod, texte și capturi), © 2026 Alexandru-Ionuț Chiuță. Textul integral e în fișierul LICENSE.</p>';
  var en = '<p><b>Sudoku without borders</b> is an atlas of Sudoku variants with a generator and solver that run locally, in a single HTML file. It has no account, sends nothing over the network and loads no external resource. Game state is kept only in this browser (<code>sff_*</code> keys in <code>localStorage</code>).</p>' +
    '<h3>How it works</h3><p>The engine first picks a solved grid that obeys the variant\'s rules, derives the clues from it (cages, thermometers, dots and so on) and then removes givens one by one, only while a propagating solver proves the solution stays unique. A generated puzzle therefore has exactly one solution. The same code regenerates the same puzzle in the same version of the app.</p>' +
    '<h3>Limits</h3><ul><li>Difficulty is indicative: it depends on the number of givens, not on the logical techniques required.</li><li>"Hard" removes as many givens as it can; in variants with many grid clues very few digits may remain.</li><li>Rules follow the usual conventions of each variant; where several exist, the card says which one was chosen.</li><li>16×16 and 25×25 grids use the symbols 1–9 and letters; composite grids (Samurai etc.) carry only the classic rules, and very loaded combinations may take longer or fail.</li><li>The hint and “Step by step” use candidate logic (single in a cell, single in a row/column/region, variant rules); if no direct step exists they reveal a digit from the solution and say so.</li></ul>' +
    '<h3>Game modes</h3><ul><li><b>Orb</b>: only cells within 2 steps of the selection are visible.</li><li><b>Memory</b>: the givens are shown for a few seconds, then hidden; “Peek” costs 30 s. No hints and no conflict highlighting.</li><li><b>Marathon</b>: 5 puzzles in a row (easy, easy, medium, medium, hard) with a total time.</li><li><b>Duel</b>: a clock opponent fills one cell every few seconds (it copies the known solution, no logic); if it finishes first, you lose.</li><li><b>Hardcore</b>: 3 lives, each wrong digit costs one; no hint, check or auto-notes.</li><li><b>Puzzle of the day</b>: the same puzzle for everyone on a given day (UTC date), with a streak of consecutive days kept locally.</li><li><b>Sound</b>: every digit has a note; a completed row, column or box plays an arpeggio.</li></ul>' +
    '<h3>Shortcuts</h3><p>Digits/letters: fill in · <kbd>N</kbd>: notes · <kbd>Backspace</kbd>: erase · arrows: move · <kbd>Shift</kbd>/<kbd>Ctrl</kbd>+click: multi-select · <kbd>Ctrl</kbd>+<kbd>Z</kbd>/<kbd>Y</kbd>: undo/redo.</p>' +
    '<p class="small">A personal project, not an official service. Licence: MIT (code, texts and screenshots), © 2026 Alexandru-Ionuț Chiuță. Full text in the LICENSE file.</p>';
  $('ab-body').innerHTML = lang === 'ro' ? ro : lang === 'en' ? en : (ABOUT[lang] || en);
}

/* ---------- i18n ---------- */
function i18n() {
  ['atlas', 'play', 'solver', 'about'].forEach(function (n) { $('t-' + n).textContent = t(n); });
  $('b-lang').value = lang; $('b-lang').title = t('tt_lang'); $('b-lang').setAttribute('aria-label', t('tt_lang')); $('b-theme').title = t('tt_theme'); $('b-theme').setAttribute('aria-label', t('tt_theme')); $('b-size').title = t('tt_size'); $('b-size').setAttribute('aria-label', t('tt_size'));
  $('atlas-h').textContent = t('atlas_h'); $('atlas-lead').textContent = t('atlas_lead');
  $('q').placeholder = t('search');
  $('sortby').setAttribute('aria-label', t('sort_by')); $('sortby').innerHTML = '<option value="rec">' + t('sort_rec') + '</option><option value="az">' + t('sort_az') + '</option><option value="za">' + t('sort_za') + '</option>';
  $('f-play').textContent = t('custom_btn'); $('b-today').textContent = t('today'); $('b-rand').textContent = t('rand');
  $('b-csv').textContent = t('csv'); $('b-bib').textContent = t('bib'); $('lex-h').textContent = t('lex_h');
  $('l-mode').textContent = t('mode'); var mv = $('sel-mode').value || 'normal'; $('sel-mode').innerHTML = ['normal', 'orb', 'memory', 'marathon', 'duel', 'hardcore', 'daily', 'daily9', 'sound'].map(function (m) { return '<option value="' + m + '">' + t('mode_' + m) + '</option>'; }).join(''); $('sel-mode').value = mv;
  $('h-new').textContent = t('new_h'); $('l-var').textContent = t('variant'); $('l-size').textContent = t('size'); $('l-diff').textContent = t('diff');
  var d = $('sel-diff').value || 'medium';
  $('sel-diff').innerHTML = '<option value="easy">' + t('easy') + '</option><option value="medium">' + t('medium') + '</option><option value="hard">' + t('hard') + '</option>'; syncTierOptions(); $('sel-diff').value = d;
  $('custom-h').textContent = t('custom_h'); $('custom-h2').textContent = t('custom_h2'); $('l-word').textContent = t('word');
  $('b-new').textContent = t('newgame'); $('b-print').textContent = t('print'); $('b-print-sol').textContent = t('print_sol'); $('l-code').textContent = t('code'); $('b-copy').textContent = t('copy'); $('b-open').textContent = t('open');
  [['a-note', 'note'], ['a-erase', 'erase'], ['a-undo', 'undo'], ['a-redo', 'redo'], ['a-hint', 'hint'], ['a-step', 'step'], ['a-tech', 'tech_btn'], ['a-play', 'autoplay'], ['a-auto', 'auto'], ['a-check', 'check'], ['a-solve', 'solve'], ['a-clear', 'clear']].forEach(function (p) { $(p[0]).textContent = t(p[1]); });
  if (playTimer) $('a-play').textContent = t('pause');
  $('q').setAttribute('aria-label', t('search')); $('word').setAttribute('aria-label', t('word')); $('sv-in').setAttribute('aria-label', t('sv_h'));
  $('v3d').textContent = L2('Vedere 3D', '3D view', ["Vue 3D", "Vista 3D", "Vista 3D", "Vista 3D", "3D-Ansicht", "3D nézet"]);
  $('l-conf').textContent = t('o_conf'); $('l-same').textContent = t('o_same'); $('l-peer').textContent = t('o_peer'); $('l-clean').textContent = t('o_clean');
  $('sv-h').textContent = t('sv_h'); $('sv-lead').textContent = t('sv_lead'); $('sv-go').textContent = t('sv_go'); $('sv-play').textContent = t('sv_play'); $('sv-ex').textContent = t('sv_ex');
  var checked = {};
  Array.prototype.forEach.call($('custom').querySelectorAll('input:checked'), function (i) { checked[i.dataset.m || ('c:' + i.dataset.c)] = 1; });
  fillVariantSelect(); buildCustom();
  Array.prototype.forEach.call($('custom').querySelectorAll('input'), function (i) { if (checked[i.dataset.m || ('c:' + i.dataset.c)]) i.checked = true; });
  buildSvMods(); renderCats(); renderCards(); renderLex(); renderAbout();
  $('foot').textContent = 'Sudoku fără frontiere v' + SFF.VERSION + ' · ' + L2('un singur fișier, offline, fără urmărire · licență MIT', 'single file, offline, no tracking · MIT licence', ["un seul fichier, hors ligne, sans traçage · licence MIT", "un solo file, offline, senza tracciamento · licenza MIT", "un solo archivo, sin conexión, sin rastreo · licencia MIT", "um só ficheiro, offline, sem rastreamento · licença MIT", "eine einzige Datei, offline, ohne Tracking · MIT-Lizenz", "egyetlen fájl, offline, követés nélkül · MIT-licenc"]);
  $('app-version').textContent = 'v' + SFF.VERSION;
  if (game) { updateStatus(); renderRules(); }
}


/* ---------- moduri de joc ---------- */
var AC = null;
function tone(d, dur) {
  try {
    if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
    var sc = [0, 2, 4, 7, 9], k = (d - 1) % 10, st = sc[k % 5] + 12 * Math.floor(k / 5) + 12 * Math.floor((d - 1) / 10);
    var o = AC.createOscillator(), gn = AC.createGain(), t0 = AC.currentTime, dd = dur || 0.35;
    o.type = 'triangle'; o.frequency.value = 261.63 * Math.pow(2, st / 12);
    gn.gain.setValueAtTime(0.0001, t0); gn.gain.exponentialRampToValueAtTime(0.18, t0 + 0.02); gn.gain.exponentialRampToValueAtTime(0.0001, t0 + dd);
    o.connect(gn); gn.connect(AC.destination); o.start(t0); o.stop(t0 + dd + 0.03);
  } catch (e) {}
}
function playSeq(ds) { ds.forEach(function (d, i) { setTimeout(function () { tone(d, 0.3); }, i * 220); }); }
function freshMx(P) {
  var m = P.mode || 'normal', g = game, x = { id: m };
  if (m === 'memory') { var gv = P.givens.filter(Boolean).length; x.phase = 'show'; x.left = Math.min(90, Math.round(6 + gv * 0.6)); x.peeks = 0; }
  if (m === 'duel') {
    var emp = []; for (var i = 0; i < g.cnt; i++) if (!P.givens[i]) emp.push(i);
    x.total = emp.length; x.done = 0; x.acc = 0; x.per = ({ easy: 9000, medium: 6000, hard: 4000 })[P.difficulty] || 6000;
  }
  if (m === 'hardcore') x.lives = 3;
  if (m === 'marathon') { x.step = 1; x.of = MARA.length; x.total = 0; }
  if (m === 'daily' || m === 'daily9') x.date = new Date().toISOString().slice(0, 10);
  return x;
}
function noHelp() { var m = game && game.mx && game.mx.id; return m === 'hardcore' || m === 'memory'; }
function orbVisible() {
  var g = game, L = g.L, vis = new Uint8Array(g.cnt), sel = Array.from(g.sel); if (!sel.length) return vis;
  sel.forEach(function (s) {
    for (var i = 0; i < g.cnt; i++) if (Math.max(Math.abs(L.pos[i][0] - L.pos[s][0]), Math.abs(L.pos[i][1] - L.pos[s][1])) <= 2) vis[i] = 1;
  });
  return vis;
}
function modeTick(dt) {
  var g = game, x = g && g.mx; if (!x || g.solved || g.lost) return;
  if (x.id === 'memory' && x.phase === 'show') { x.left -= dt / 1000; if (x.left <= 0) { x.phase = 'hide'; renderDyn(); } }
  if (x.id === 'memory' && x.phase === 'peek') { x.left -= dt / 1000; if (x.left <= 0) { x.phase = 'hide'; renderDyn(); } }
  if (x.id === 'duel') {
    x.acc += dt;
    while (x.acc >= x.per && x.done < x.total) { x.acc -= x.per; x.done++; }
    if (x.done >= x.total) { g.lost = true; setMsg(L2('Adversarul a terminat primul. Pornește un joc nou ca să te revanșezi.', 'The opponent finished first. Start a new game for a rematch.', ["L’adversaire a fini le premier. Lancez une nouvelle partie pour prendre votre revanche.", "L’avversario ha finito per primo. Inizia una nuova partita per la rivincita.", "El adversario terminó primero. Empieza una partida nueva para la revancha.", "O adversário terminou primeiro. Inicie um novo jogo para a desforra.", "Der Gegner war zuerst fertig. Starten Sie ein neues Spiel für die Revanche.", "Az ellenfél végzett elsőként. Indíts új játékot a visszavágóhoz."]), 'bad'); save(); }
  }
}
function renderModebar() {
  var el = $('modebar'), g = game, x = g && g.mx, h = '';
  if (!x || x.id === 'normal') { el.hidden = true; el._h = ''; return; }
  el.hidden = false;
  var nm = t('mode_' + x.id);
  h = '<b>' + nm + '</b>';
  if (x.id === 'orb') h += ' ' + L2('se văd doar celulele de la cel mult 2 pași de selecție', 'only cells within 2 steps of the selection are visible', ["seules les cases à 2 pas au plus de la sélection sont visibles", "si vedono solo le celle a non più di 2 passi dalla selezione", "solo se ven las celdas a 2 pasos como máximo de la selección", "só se veem as células a, no máximo, 2 passos da seleção", "sichtbar sind nur Felder höchstens 2 Schritte von der Auswahl entfernt", "csak a kijelöléstől legfeljebb 2 lépésre lévő cellák láthatók"]);
  if (x.id === 'memory') {
    if (x.phase === 'show') h += ' ' + L2('memorizează cifrele: ', 'memorise the digits: ', ["mémorisez les chiffres : ", "memorizza le cifre: ", "memoriza los dígitos: ", "memorize os algarismos: ", "Ziffern merken: ", "jegyezd meg a számjegyeket: "]) + Math.ceil(x.left) + ' s <button id="mb-go">' + L2('Gata', 'Ready', ["Prêt", "Pronto", "Listo", "Pronto", "Bereit", "Kész"]) + '</button>';
    else if (x.phase === 'peek') h += ' ' + L2('privești: ', 'peeking: ', ["vous regardez : ", "stai guardando: ", "estás mirando: ", "está a espreitar: ", "Sie spähen: ", "nézed: "]) + Math.ceil(x.left) + ' s';
    else h += ' ' + L2('cifrele date sunt ascunse', 'the given digits are hidden', ["les chiffres donnés sont cachés", "le cifre date sono nascoste", "los dígitos dados están ocultos", "os algarismos dados estão ocultos", "die vorgegebenen Ziffern sind verborgen", "az adott számjegyek el vannak rejtve"]) + ' <button id="mb-peek">' + L2('Privește 4 s (+30 s)', 'Peek 4 s (+30 s)', ["Regarder 4 s (+30 s)", "Sbircia 4 s (+30 s)", "Mirar 4 s (+30 s)", "Espreitar 4 s (+30 s)", "4 s spähen (+30 s)", "Nézd 4 mp-ig (+30 mp)"]) + '</button>';
  }
  if (x.id === 'duel') h += ' ' + L2('adversar: ', 'opponent: ', ["adversaire : ", "avversario: ", "adversario: ", "adversário: ", "Gegner: ", "ellenfél: "]) + x.done + '/' + x.total + ' <span class="bar2"><i style="width:' + Math.round(100 * x.done / Math.max(1, x.total)) + '%"></i></span>';
  if (x.id === 'hardcore') h += ' ' + L2('vieți: ', 'lives: ', ["vies : ", "vite: ", "vidas: ", "vidas: ", "Leben: ", "életek: "]) + new Array(Math.max(0, x.lives) + 1).join('♥');
  if (x.id === 'marathon') h += ' ' + x.step + '/' + x.of + ' · ' + L2('timp total ', 'total time ', ["temps total ", "tempo totale ", "tiempo total ", "tempo total ", "Gesamtzeit ", "összidő "]) + fmtT(x.total + g.elapsed);
  if (x.id === 'daily') { var ds = dailyInfo(); h += ' ' + x.date + ' · ' + L2('serie: ', 'streak: ', ["série : ", "serie: ", "racha: ", "sequência: ", "Serie: ", "sorozat: "]) + ds.streak + ' · ' + L2('record: ', 'best: ', ["record : ", "record: ", "récord: ", "recorde: ", "Rekord: ", "rekord: "]) + ds.best; }
  if (x.id === 'daily9') { var d9i = dailyInfo('daily9'); h += ' ' + x.date + ' · ' + L2('serie: ', 'streak: ', ["série : ", "serie: ", "racha: ", "sequência: ", "Serie: ", "sorozat: "]) + d9i.streak + ' · ' + L2('record: ', 'best: ', ["record : ", "record: ", "récord: ", "recorde: ", "Rekord: ", "rekord: "]) + d9i.best; }
  if (x.id === 'sound') h += ' <button id="mb-row">▶ ' + L2('Ascultă rândul', 'Play the row', ["Écouter la ligne", "Ascolta la riga", "Escuchar la fila", "Ouvir a linha", "Zeile abspielen", "A sor lejátszása"]) + '</button>';
  if (el._h === h) return; el._h = h; el.innerHTML = h;
  var b;
  if ((b = $('mb-go'))) b.onclick = function () { x.phase = 'hide'; renderDyn(); renderModebar(); };
  if ((b = $('mb-peek'))) b.onclick = function () { x.phase = 'peek'; x.left = 4; x.peeks++; g.elapsed += 30000; renderDyn(); renderModebar(); };
  if ((b = $('mb-row'))) b.onclick = function () {
    var s = Array.from(g.sel)[0]; if (s === undefined) { setMsg(L2('Selectează o celulă.', 'Select a cell.', ["Sélectionnez une case.", "Seleziona una cella.", "Selecciona una celda.", "Selecione uma célula.", "Wählen Sie ein Feld aus.", "Válassz ki egy cellát."]), ''); return; }
    var grp = g.L.rows.filter(function (q) { return q.indexOf(s) >= 0; })[0] || [];
    playSeq(grp.map(curVal).filter(Boolean));
  };
}
function fmtT(ms) { var s = Math.floor(ms / 1000); return Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); }
function dailyInfo(key) { try { var d = JSON.parse(LS.get(key || 'daily', '{}')); return { last: typeof d.last === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d.last) ? d.last : '', streak: +d.streak || 0, best: +d.best || 0 }; } catch (e) { return { last: '', streak: 0, best: 0 }; } }
function onDigit(d, cells) {
  var g = game, x = g.mx;
  if (x.id === 'sound') {
    tone(d);
    var done = false;
    cells.forEach(function (i) { [g.L.rows, g.L.cols, g.L.boxes].forEach(function (list) { list.forEach(function (grp) {
      if (grp.indexOf(i) < 0 || grp.length !== g.N) return;
      var seen = {}, ok = true; grp.forEach(function (q) { var v = curVal(q); if (!v || seen[v]) ok = false; seen[v] = 1; });
      if (ok) done = true;
    }); }); });
    if (done) setTimeout(function () { playSeq([1, 3, 5, 8]); }, 380);
  }
  var wrongNow = [];
  if (x.id === 'hardcore') {
    cells.forEach(function (i) {
      if (g.vals[i] && g.vals[i] !== g.P.solution[i]) { x.lives--; wrongNow.push(i); }
    });
    if (x.lives <= 0) { g.lost = true; setMsg(L2('Ai pierdut toate vietile. Pornește un joc nou.', 'You lost all lives. Start a new game.', ["Vous avez perdu toutes vos vies. Lancez une nouvelle partie.", "Hai perso tutte le vite. Inizia una nuova partita.", "Has perdido todas las vidas. Empieza una partida nueva.", "Perdeu todas as vidas. Inicie um novo jogo.", "Sie haben alle Leben verloren. Starten Sie ein neues Spiel.", "Elvesztetted az összes életed. Indíts új játékot."]), 'bad'); }
    else if (wrongNow.length) setMsg(L2('Greșeală! Vieți rămase: ', 'Mistake! Lives left: ', ["Erreur ! Vies restantes : ", "Errore! Vite rimaste: ", "¡Error! Vidas restantes: ", "Erro! Vidas restantes: ", "Fehler! Verbleibende Leben: ", "Hiba! Hátralévő életek: "]) + x.lives, 'bad');
  }
  return wrongNow;
}
function onSolved() {
  var g = game, x = g.mx;
  if (x.id === 'sound') playSeq([1, 3, 5, 8, 10]);
  if (x.id === 'daily') {
    var d = dailyInfo(), today = x.date, prev = new Date(new Date(today).getTime() - 86400000).toISOString().slice(0, 10);
    if (d.last !== today) { d.streak = d.last === prev ? d.streak + 1 : 1; d.last = today; d.best = Math.max(d.best, d.streak); LS.set('daily', JSON.stringify(d)); }
    setMsg(t('solved') + ' ' + L2('Serie: ', 'Streak: ', ["Série : ", "Serie: ", "Racha: ", "Sequência: ", "Serie: ", "Sorozat: "]) + d.streak, 'good');
  }
  if (x.id === 'daily9') {
    var e9 = dailyInfo('daily9'), t9 = x.date, p9 = new Date(new Date(t9).getTime() - 86400000).toISOString().slice(0, 10);
    if (e9.last !== t9) { e9.streak = e9.last === p9 ? e9.streak + 1 : 1; e9.last = t9; e9.best = Math.max(e9.best, e9.streak); LS.set('daily9', JSON.stringify(e9)); }
    setMsg(t('solved') + ' ' + L2('Serie: ', 'Streak: ', ["Série : ", "Serie: ", "Racha: ", "Sequência: ", "Serie: ", "Sorozat: "]) + e9.streak, 'good');
  }
  if (x.id === 'duel') setMsg(L2('Ai câștigat duelul! Adversarul avea ', 'You won the duel! The opponent had ', ["Vous avez gagné le duel ! L’adversaire en était à ", "Hai vinto il duello! L’avversario era a ", "¡Has ganado el duelo! El adversario llevaba ", "Ganhou o duelo! O adversário tinha ", "Sie haben das Duell gewonnen! Der Gegner hatte ", "Megnyerted a párbajt! Az ellenfélnek ennyi volt: "]) + x.done + '/' + x.total + '.', 'good');
  if (x.id === 'marathon') {
    x.total += g.elapsed; g.elapsed = 0;
    if (x.step < x.of) {
      setMsg(L2('Puzzle ' + x.step + '/' + x.of + ' rezolvat. Următorul pornește imediat…', 'Puzzle ' + x.step + '/' + x.of + ' solved. The next one starts now…', ["Grille " + x.step + "/" + x.of + " résolue. La suivante démarre tout de suite…", "Schema " + x.step + "/" + x.of + " risolto. Il prossimo parte subito…", "Puzle " + x.step + "/" + x.of + " resuelto. El siguiente empieza ahora…", "Puzzle " + x.step + "/" + x.of + " resolvido. O próximo começa já…", "Rätsel " + x.step + "/" + x.of + " gelöst. Das nächste startet sofort…", "" + x.step + "/" + x.of + ". rejtvény megoldva. A következő azonnal indul…"]), 'good');
      maraTimer = setTimeout(function () { maraNext(g, x); }, 1800);
    } else setMsg(L2('Maraton terminat! Timp total: ', 'Marathon finished! Total time: ', ["Marathon terminé ! Temps total : ", "Maratona finita! Tempo totale: ", "¡Maratón terminado! Tiempo total: ", "Maratona concluída! Tempo total: ", "Marathon beendet! Gesamtzeit: ", "A maraton véget ért! Összidő: "]) + fmtT(x.total), 'good');
  }
  renderModebar();
}
function maraNext(g, x) {
  if (game !== g || !x.base) return;
  var nx = { id: 'marathon', step: x.step + 1, of: x.of, total: x.total, base: x.base, v: x.v };
  var sp = JSON.parse(JSON.stringify(x.base)); sp.seed = (sp.seed + nx.step * 7919) >>> 0; sp.difficulty = MARA[nx.step - 1];
  startSpec(sp, x.v, 'marathon', nx);
}
$('sel-mode').onchange = function () { $('sel-diff').disabled = $('sel-mode').value === 'daily'; };


/* ---------- vedere 3D (cub latin 3D, cub cu casete) ---------- */
function setHid(e, h) { if (h) e.setAttribute('hidden', ''); else e.removeAttribute('hidden'); }
function is3d() { return game && game.L.cube && game.L.dim === 3; }
function show3dUI() {
  var on = is3d(); $('v3dbar').hidden = !on; setHid($('board3d'), true); setHid($('board'), false);
  if (on) { $('s3d').max = game.N; $('s3d').value = game.N; $('v3d').textContent = L2('Vedere 3D', '3D view', ["Vue 3D", "Vista 3D", "Vista 3D", "Vista 3D", "3D-Ansicht", "3D nézet"]); }
}
function render3d() {
  var g = game, N = g.N, L = g.L, sp = 118 / N, rx = g.rot[0], ry = g.rot[1], keep = +$('s3d').value, pts = [], i;
  var cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
  for (i = 0; i < g.cnt; i++) {
    var co = L.coords[i]; if (co[0] >= keep) continue;
    var x = (co[2] - (N - 1) / 2) * sp, y = (co[1] - (N - 1) / 2) * sp, z = (co[0] - (N - 1) / 2) * sp;
    var x1 = x * cy + z * sy, z1 = -x * sy + z * cy, y1 = y * cx - z1 * sx, z2 = y * sx + z1 * cx;
    pts.push({ i: i, x: x1, y: y1, z: z2 });
  }
  pts.sort(function (p, q) { return q.z - p.z; });
  var vec = curVec(), one = g.sel.size === 1 ? Array.from(g.sel)[0] : -1, same = one >= 0 ? curVal(one) : 0, h = '';
  pts.forEach(function (p) {
    var v = vec[p.i], r = sp * 0.3, depth = 0.55 + 0.45 * (1 - (p.z + 90) / 180);
    var fill = g.sel.has(p.i) ? 'var(--sel)' : (same && v === same) ? 'var(--same)' : g.wrong.has(p.i) ? 'var(--wrong)' : 'var(--cell)';
    h += '<g data-i="' + p.i + '" opacity="' + Math.max(0.45, Math.min(1, depth)) + '"><circle data-i="' + p.i + '" cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="' + r.toFixed(1) + '" style="fill:' + fill + '" stroke="var(--thick)" stroke-width=".5"/>';
    if (v) h += '<text x="' + p.x.toFixed(1) + '" y="' + (p.y + 0.5).toFixed(1) + '" class="' + (g.P.givens[p.i] ? 'dg' : 'du') + '" style="font-size:' + (r * 1.3).toFixed(1) + 'px;fill:' + (g.P.givens[p.i] ? 'var(--given)' : 'var(--user)') + ';font-weight:700">' + sym(v) + '</text>';
    h += '</g>';
  });
  $('board3d').innerHTML = h;
}
$('v3d').onclick = function () {
  if (!is3d()) return; game.v3d = !game.v3d;
  setHid($('board3d'), !game.v3d); setHid($('board'), game.v3d); if (game.v3d) render3d();
};
$('s3d').oninput = function () { if (game && game.v3d) render3d(); };
(function () {
  var sv = $('board3d'), st = null;
  sv.addEventListener('pointerdown', function (e) { st = { x: e.clientX, y: e.clientY, r: game.rot.slice(), moved: false }; try { sv.setPointerCapture(e.pointerId); } catch (_) {} });
  sv.addEventListener('pointermove', function (e) {
    if (!st) return; var dx = e.clientX - st.x, dy = e.clientY - st.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) st.moved = true;
    if (st.moved) { game.rot = [Math.max(-1.5, Math.min(1.5, st.r[0] + dy / 120)), st.r[1] + dx / 120]; render3d(); }
  });
  sv.addEventListener('pointerup', function (e) {
    if (!st) return; var moved = st.moved; st = null;
    if (moved) return;
    var el = document.elementFromPoint(e.clientX, e.clientY), i = el && el.dataset && el.dataset.i !== undefined ? +el.dataset.i : -1;
    if (i >= 0) { game.sel = e.shiftKey ? new Set(Array.from(game.sel).concat([i])) : new Set([i]); renderDyn(); }
  });
})();

/* ---------- pornire ---------- */
applyTheme(); document.documentElement.lang = lang;
fillVariantSelect(); $('sel-var').value = 'clasic'; buildCustom(); $('custom').hidden = true; prevVar = '';
i18n(); onVariantChange();
showTab('atlas');
try {
  var sv = LS.get('game', null);
  if (sv) {
    var sd = JSON.parse(sv), okv = sd && sd.P && (sd.sv === undefined || sd.sv === 2) && sd.vals && sd.vals.length === sd.P.givens.length && sd.P.solution && sd.P.solution.length === sd.P.givens.length;
    if (okv) { loadGame(sd.P, sd); var gx = game && game.mx; if (gx && gx.id === 'marathon' && game.solved && gx.step < gx.of) maraTimer = setTimeout(function () { maraNext(game, gx); }, 1800); } else LS.set('game_bad', sv);   /* format necunoscut: nu-l ștergem, îl punem deoparte */
  }
} catch (e) { game = null; }
window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && $('dlg').open) $('dlg').close(); });
if (window.__SFF_TEST) window.__SFF_TEST.api = { newFromUI: newFromUI, loadGame: loadGame, get game() { return game; } };
})();
