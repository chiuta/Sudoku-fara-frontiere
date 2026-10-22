/* SPDX-License-Identifier: MIT · Copyright (c) 2026 Alexandru-Ionuț Chiuță (Alexio)
   SUDOKU FĂRĂ FRONTIERE — motor (solver cu propagare + generator cu soluție unică)
   Fără dependențe, fără rețea. Rulează în browser, în Worker și în Node. */
(function (root) {
'use strict';
var VERSION = '1.6.4';

/* ---------- RNG și utilitare pe biți ---------- */
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function RNG(seed) {
  var f = mulberry32(seed >>> 0);
  return {
    next: f,
    int: function (n) { return Math.floor(f() * n); },
    pick: function (a) { return a[Math.floor(f() * a.length)]; },
    chance: function (p) { return f() < p; },
    shuffle: function (a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(f() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  };
}
function range(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
function pop(x) { x = x - ((x >>> 1) & 0x55555555); x = (x & 0x33333333) + ((x >>> 2) & 0x33333333); return (((x + (x >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24; }
function bitIndex(b) { return 31 - Math.clz32(b); }

/* ---------- Layout (grilă simplă sau compusă) ---------- */
var BOX = { 4: [2, 2], 6: [2, 3], 8: [2, 4], 9: [3, 3], 12: [3, 4], 16: [4, 4], 25: [5, 5] };
function makeCube(spec) {
  var d = spec.d, N = spec.n, cnt = Math.pow(N, d), i, a, k;
  var rowAx = [], colAx = [];
  for (a = d - 2; a >= 0; a -= 2) rowAx.push(a);
  for (a = d - 1; a >= 0; a -= 2) colAx.push(a);
  function strides(ax) { var st = [], w = N, l; for (l = 0; l < ax.length; l++) { st.push(l === 0 ? 1 : w + 1); if (l > 0) w = N * w + (N - 1); } return { st: st, w: w }; }
  var sr = strides(rowAx), sc = strides(colAx), R = sr.w, C = sc.w;
  var at = new Int32Array(R * C).fill(-1), pos = [], coords = [];
  for (i = 0; i < cnt; i++) {
    var x = [], t = i; for (a = d - 1; a >= 0; a--) { x[a] = t % N; t = Math.floor(t / N); }
    var r = 0, c = 0; rowAx.forEach(function (ax, l) { r += x[ax] * sr.st[l]; }); colAx.forEach(function (ax, l) { c += x[ax] * sc.st[l]; });
    at[r * C + c] = i; pos.push([r, c]); coords.push(x);
  }
  var lines = [], mult = []; for (a = 0, k = 1; a < d; a++) mult[d - 1 - a] = (a === 0 ? 1 : mult[d - a] * N);
  for (a = 0; a < d; a++) {
    for (i = 0; i < cnt; i++) if (coords[i][a] === 0) { var g = []; for (k = 0; k < N; k++) g.push(i + k * mult[a]); lines.push(g.sort(function (p, q) { return p - q; })); }
  }
  var bx = [], boxId = new Int32Array(cnt), b = BOX[N] || [1, N], br = spec.boxes ? b[0] : 1, bc = spec.boxes ? b[1] : N;
  for (i = 0; i < cnt; i++) {
    var layer = Math.floor(i / (N * N));
    boxId[i] = spec.boxes ? 0 : layer;
  }
  if (spec.boxes) {
    var layers = cnt / (N * N), id = 0;
    for (var ly = 0; ly < layers; ly++) for (var r0 = 0; r0 < N; r0 += br) for (var c0 = 0; c0 < N; c0 += bc) {
      var gg = []; for (var rr = 0; rr < br; rr++) for (var cc = 0; cc < bc; cc++) gg.push(ly * N * N + (r0 + rr) * N + c0 + cc);
      bx.push(gg); gg.forEach(function (q) { boxId[q] = id; }); id++;
    }
  }
  var nbr4 = [], nbr8 = [];
  for (i = 0; i < cnt; i++) {
    var a4 = [], a8 = [], rr2 = pos[i][0], cc2 = pos[i][1];
    for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue; var r2 = rr2 + dr, c2 = cc2 + dc;
      if (r2 < 0 || c2 < 0 || r2 >= R || c2 >= C) continue; var j2 = at[r2 * C + c2]; if (j2 < 0) continue;
      a8.push(j2); if (!dr || !dc) a4.push(j2);
    }
    nbr4.push(a4); nbr8.push(a8);
  }
  return { N: N, br: br, bc: bc, R: R, C: C, at: at, pos: pos, count: cnt, rows: lines, cols: [], boxes: bx, boxId: boxId, nbr4: nbr4, nbr8: nbr8, composite: false, cube: true, dim: d, coords: coords, offs: [[0, 0]] };
}
function makeGreco(spec) {
  var N = spec.n, cnt = 2 * N * N, R = N, C = 2 * N + 1, at = new Int32Array(R * C).fill(-1), pos = [], i, r, c, ly;
  for (ly = 0; ly < 2; ly++) for (r = 0; r < N; r++) for (c = 0; c < N; c++) { var cc = ly * (N + 1) + c; at[r * C + cc] = pos.length; pos.push([r, cc]); }
  var rows = [], boxId = new Int32Array(cnt);
  for (ly = 0; ly < 2; ly++) {
    for (r = 0; r < N; r++) { var g = []; for (c = 0; c < N; c++) g.push(ly * N * N + r * N + c); rows.push(g); }
    for (c = 0; c < N; c++) { var h = []; for (r = 0; r < N; r++) h.push(ly * N * N + r * N + c); rows.push(h); }
  }
  for (i = 0; i < cnt; i++) boxId[i] = i >= N * N ? 1 : 0;
  var nbr4 = [], nbr8 = [];
  for (i = 0; i < cnt; i++) {
    var a4 = [], a8 = [];
    for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue; var r2 = pos[i][0] + dr, c2 = pos[i][1] + dc;
      if (r2 < 0 || c2 < 0 || r2 >= R || c2 >= C) continue; var j2 = at[r2 * C + c2]; if (j2 < 0) continue;
      a8.push(j2); if (!dr || !dc) a4.push(j2);
    }
    nbr4.push(a4); nbr8.push(a8);
  }
  var layer = new Int32Array(cnt); for (i = 0; i < cnt; i++) layer[i] = i >= N * N ? 1 : 0;
  return { N: N, br: 1, bc: N, R: R, C: C, at: at, pos: pos, count: cnt, rows: rows, cols: [], boxes: [], boxId: boxId, nbr4: nbr4, nbr8: nbr8, composite: false, greco: true, layer: layer, offs: [[0, 0]] };
}
function makeLayout(L) {
  if (L.kind === 'cube') return makeCube(L);
  if (L.kind === 'greco') return makeGreco(L);
  var N, br, bc, offs;
  if (!L.kind || L.kind === 'std') {
    N = L.n; var b = BOX[N] || [1, N]; br = L.br || b[0]; bc = L.bc || b[1]; offs = [[0, 0]];
  } else {
    N = 9; br = 3; bc = 3;
    offs = { samurai: [[6, 6], [0, 0], [0, 12], [12, 0], [12, 12]], twodoku: [[0, 0], [6, 6]], gattai3: [[0, 0], [6, 6], [12, 12]],
      sohei: [[0, 6], [6, 12], [12, 6], [6, 0]], kazaguruma: [[9, 9], [3, 12], [12, 15], [15, 6], [6, 3]],
      tripledoku: [[0, 0], [6, 6], [0, 12]], cross: [[6, 6], [0, 6], [6, 0], [6, 12], [12, 6]] }[L.kind];
  }
  var R = 0, C = 0, i, j, o;
  for (i = 0; i < offs.length; i++) { R = Math.max(R, offs[i][0] + N); C = Math.max(C, offs[i][1] + N); }
  var at = new Int32Array(R * C).fill(-1), pos = [], r, c;
  for (i = 0; i < offs.length; i++) { o = offs[i]; for (r = 0; r < N; r++) for (c = 0; c < N; c++) { var k = (o[0] + r) * C + o[1] + c; if (at[k] < 0) { at[k] = pos.length; pos.push([o[0] + r, o[1] + c]); } } }
  var seen = {}, rows = [], cols = [], boxes = [];
  function add(arr, list) { var g = arr.slice().sort(function (a, b) { return a - b; }); var key = g.join(','); if (seen[key]) return; seen[key] = 1; list.push(g); }
  for (i = 0; i < offs.length; i++) {
    o = offs[i];
    for (r = 0; r < N; r++) { var g1 = []; for (c = 0; c < N; c++) g1.push(at[(o[0] + r) * C + o[1] + c]); add(g1, rows); }
    for (c = 0; c < N; c++) { var g2 = []; for (r = 0; r < N; r++) g2.push(at[(o[0] + r) * C + o[1] + c]); add(g2, cols); }
    for (var r0 = 0; r0 < N; r0 += br) for (var c0 = 0; c0 < N; c0 += bc) { var g3 = []; for (r = 0; r < br; r++) for (c = 0; c < bc; c++) g3.push(at[(o[0] + r0 + r) * C + o[1] + c0 + c]); add(g3, boxes); }
  }
  var cnt = pos.length, nbr4 = [], nbr8 = [], boxId = new Int32Array(cnt);
  boxes.forEach(function (g, id) { g.forEach(function (cell) { boxId[cell] = id; }); });
  for (i = 0; i < cnt; i++) {
    var a4 = [], a8 = [], rr = pos[i][0], cc = pos[i][1];
    for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue; var r2 = rr + dr, c2 = cc + dc;
      if (r2 < 0 || c2 < 0 || r2 >= R || c2 >= C) continue; var j2 = at[r2 * C + c2]; if (j2 < 0) continue;
      a8.push(j2); if (!dr || !dc) a4.push(j2);
    }
    nbr4.push(a4); nbr8.push(a8);
  }
  return { N: N, br: br, bc: bc, R: R, C: C, at: at, pos: pos, count: cnt, rows: rows, cols: cols, boxes: boxes, boxId: boxId, nbr4: nbr4, nbr8: nbr8, composite: offs.length > 1, offs: offs };
}

/* ---------- Structură (grupuri complete + perechi diferite) ---------- */
var KN = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]];
var tupCache = {};
function cgravTuples(N) {
  if (tupCache[N]) return tupCache[N];
  var out = [], cur = [], used = 0, co = []; for (var q = 0; q < N; q++) co.push(2 * q - (N - 1));
  (function rec(i, sum) {
    if (i === N) { if (sum === 0) for (var t = 0; t < N; t++) out.push(cur[t]); return; }
    for (var d = 1; d <= N; d++) { if (used >> (d - 1) & 1) continue; used |= 1 << (d - 1); cur[i] = d; rec(i + 1, sum + co[i] * d); used &= ~(1 << (d - 1)); }
  })(0, 0);
  return (tupCache[N] = { d: Int8Array.from(out), n: out.length / N });
}
var KING = [[1, 1], [1, 0], [1, -1], [0, 1], [0, -1], [-1, 1], [-1, 0], [-1, -1]];
var LEAPS = { antibishop: [[2, 2], [2, -2]], anticamel: [[1, 3], [3, 1], [1, -3], [3, -1]], antizebra: [[2, 3], [3, 2], [2, -3], [3, -2]] };
var TOPO = { torusking: ['torus', KING], torusknight: ['torus', KN], cylking: ['cyl', KING], mobiusking: ['mobius', KING], kleinking: ['klein', KING], projking: ['proj', KING] };
function wrapStep(topo, r, c, dr, dc, N) {
  var r2 = r + dr, c2 = c + dc, md = function (x) { return ((x % N) + N) % N; };
  if (topo === 'torus') return [md(r2), md(c2)];
  if (topo === 'cyl') return r2 < 0 || r2 >= N ? null : [r2, md(c2)];
  var colWrap = c2 < 0 || c2 >= N;
  if (topo === 'mobius') { if (r2 < 0 || r2 >= N) return null; return colWrap ? [N - 1 - r2, md(c2)] : [r2, c2]; }
  if (colWrap) { c2 = md(c2); r2 = N - 1 - r2; }
  if (r2 < 0 || r2 >= N) { r2 = md(r2); if (topo === 'proj') c2 = N - 1 - c2; }
  return [r2, c2];
}
function buildStructure(P, L) {
  var mods = {}; (P.mods || []).forEach(function (m) { mods[m] = 1; });
  var N = L.N, at = L.at, C = L.C, full = [], i, j, r, c, g;
  L.rows.forEach(function (x) { full.push(x); }); L.cols.forEach(function (x) { full.push(x); });
  if (P.regions) { var m = {}; P.regions.forEach(function (id, k) { (m[id] = m[id] || []).push(k); }); Object.keys(m).forEach(function (k) { full.push(m[k]); }); }
  else if (!mods.latin) L.boxes.forEach(function (x) { full.push(x); });
  if (!L.composite) {
    if (mods.diag) { var a = [], b = []; for (i = 0; i < N; i++) { a.push(at[i * C + i]); b.push(at[i * C + N - 1 - i]); } full.push(a, b); }
    if (mods.hyper && N === 9) [[1, 1], [1, 5], [5, 1], [5, 5]].forEach(function (o) { var q = []; for (r = 0; r < 3; r++) for (c = 0; c < 3; c++) q.push(at[(o[0] + r) * C + o[1] + c]); full.push(q); });
    if (mods.pandiag) for (i = 0; i < N; i++) { var pa = [], pb = []; for (j = 0; j < N; j++) { pa.push(at[j * C + (j + i) % N]); pb.push(at[j * C + (((i - j) % N) + N) % N]); } full.push(pa, pb); }
    if (mods.diag1) { var d1 = []; for (i = 0; i < N; i++) d1.push(at[i * C + i]); full.push(d1); }
    if (mods.asterisk && N === 9) full.push([[1, 4], [2, 2], [2, 6], [4, 1], [4, 4], [4, 7], [6, 2], [6, 6], [7, 4]].map(function (p) { return at[p[0] * C + p[1]]; }));
    if (mods.girandola && N === 9) full.push([[0, 0], [0, 8], [8, 0], [8, 8], [4, 4], [1, 4], [7, 4], [4, 1], [4, 7]].map(function (p) { return at[p[0] * C + p[1]]; }));
    if (mods.sparse9 && N === 9) full.push([[0, 0], [0, 4], [0, 8], [4, 0], [4, 4], [4, 8], [8, 0], [8, 4], [8, 8]].map(function (p) { return at[p[0] * C + p[1]]; }));
    if (mods.center && N === 9) { g = []; for (r = 1; r < 9; r += 3) for (c = 1; c < 9; c += 3) g.push(at[r * C + c]); full.push(g); }
    if (mods.dg && !P.regions && !mods.latin) for (i = 0; i < L.br; i++) for (j = 0; j < L.bc; j++) { g = []; for (r = i; r < N; r += L.br) for (c = j; c < N; c += L.bc) g.push(at[r * C + c]); full.push(g); }
  }
  var ne = [];
  if (mods.antiknight || mods.antiking) {
    for (i = 0; i < L.count; i++) {
      var pr = L.pos[i][0], pc = L.pos[i][1];
      if (mods.antiknight) KN.forEach(function (d) { var r2 = pr + d[0], c2 = pc + d[1]; if (r2 < 0 || c2 < 0 || r2 >= L.R || c2 >= L.C) return; var k = at[r2 * C + c2]; if (k > i) ne.push([i, k]); });
      if (mods.antiking) [[1, 1], [1, -1]].forEach(function (d) { var r2 = pr + d[0], c2 = pc + d[1]; if (r2 < 0 || c2 < 0 || r2 >= L.R || c2 >= L.C) return; var k = at[r2 * C + c2]; if (k >= 0) ne.push([i, k]); });
    }
  }
  if (!L.composite) {
    Object.keys(LEAPS).forEach(function (m) {
      if (!mods[m]) return;
      for (i = 0; i < L.count; i++) LEAPS[m].forEach(function (d) { var r2 = L.pos[i][0] + d[0], c2 = L.pos[i][1] + d[1]; if (r2 < 0 || c2 < 0 || r2 >= L.R || c2 >= L.C) return; var k = at[r2 * C + c2]; if (k >= 0 && k !== i) ne.push([i, k]); });
    });
    Object.keys(TOPO).forEach(function (m) {
      if (!mods[m]) return;
      for (i = 0; i < L.count; i++) TOPO[m][1].forEach(function (d) { var w = wrapStep(TOPO[m][0], L.pos[i][0], L.pos[i][1], d[0], d[1], N); if (!w) return; var k = at[w[0] * C + w[1]]; if (k >= 0 && k !== i) ne.push([i, k]); });
    });
  }
  return { full: full, ne: ne, mods: mods };
}

/* ---------- indicii pe margine: valoarea unei linii (a = cifrele de la margine spre interior) ---------- */
function mval(kind, a, N) {
  var n = a.length, i, j, r = 0;
  var between = function (lo, hi, f) {
    var p = a.indexOf(lo), q = a.indexOf(hi), x = Math.min(p, q), y = Math.max(p, q), t = 0;
    for (var z = x + 1; z < y; z++) t += f(a[z]); return t;
  };
  switch (kind) {
    case 'radar': return a.indexOf(N) + 1;
    case 'sandnum': return between(1, N, function () { return 1; });
    case 'sandpar': return between(1, N, function (x) { return x & 1; });
    case 'sand2': return between(1, N, function (x) { return x; }) + ',' + between(2, N - 1, function (x) { return x; });
    case 'subsol': { var mn = 99; for (i = 0; i < n; i++) if (a[i] < mn) { mn = a[i]; r++; } return r; }
    case 'prodmargin': return a[0] * a[1];
    case 'diffmargin': return Math.abs(a[0] - a[1]);
    case 'ascents': for (i = 0; i + 1 < n; i++) if (a[i] < a[i + 1]) r++; return r;
    case 'inversions': for (i = 0; i < n; i++) for (j = i + 1; j < n; j++) if (a[i] > a[j]) r++; return r;
    case 'cycles': { var seen = {}; for (i = 0; i < n; i++) { if (seen[i]) continue; r++; j = i; while (!seen[j]) { seen[j] = 1; j = a[j] - 1; } } return r; }
    case 'fixedpts': for (i = 0; i < n; i++) if (a[i] === i + 1) r++; return r;
    case 'altsum': for (i = 0; i < n; i++) r += (i % 2 ? -1 : 1) * a[i]; return r;
    case 'dxsum': { var k = Math.min(a[0], n); for (i = 0; i < k; i++) r += a[i]; return r; }
  }
  throw new Error('mclue ' + kind);
}
/* ---------- Solver ---------- */
function makeSolver(P) {
  var L = makeLayout(P.layout), N = L.N, cnt = L.count, FULL = (1 << N) - 1;
  var st = buildStructure(P, L), groups = st.full, dgroups = [], props = [];
  var baseMask = new Int32Array(cnt).fill(FULL);
  var scratch = new Int32Array(cnt);
  var C = L.C, pos = L.pos, at = L.at;

  function minD(m) { return bitIndex(m & -m) + 1; }
  function maxD(m) { return 32 - Math.clz32(m); }
  function rangeMask(lo, hi) { if (lo < 1) lo = 1; if (hi > N) hi = N; if (lo > hi) return 0; return ((1 << hi) - 1) & ~((1 << (lo - 1)) - 1); }
  function restrict(dom, j, mask, push) { var o = dom[j], nd = o & mask; if (nd === o) return true; if (nd === 0) return false; dom[j] = nd; push(j); return true; }

  function generic(p, dom, push) {
    var cells = p.cells, u0 = -1, u1 = -1, nu = 0, k, i;
    for (k = 0; k < cells.length; k++) {
      i = cells[k]; var d = dom[i];
      if ((d & (d - 1)) === 0) scratch[i] = bitIndex(d) + 1;
      else { nu++; if (nu === 1) u0 = i; else if (nu === 2) u1 = i; else return true; }
    }
    if (nu === 0) return p.ok(scratch);
    var m0 = 0, m1 = 0, x, y, b, b2;
    if (nu === 1) { x = dom[u0]; while (x) { b = x & -x; x ^= b; scratch[u0] = bitIndex(b) + 1; if (p.ok(scratch)) m0 |= b; } return restrict(dom, u0, m0, push); }
    x = dom[u0];
    while (x) { b = x & -x; x ^= b; scratch[u0] = bitIndex(b) + 1; y = dom[u1];
      while (y) { b2 = y & -y; y ^= b2; scratch[u1] = bitIndex(b2) + 1; if (p.ok(scratch)) { m0 |= b; m1 |= b2; } } }
    return restrict(dom, u0, m0, push) && restrict(dom, u1, m1, push);
  }
  function addProp(cells, ok, prune, useGeneric) {
    var p = { cells: cells, ok: ok };
    p.prune = function (dom, push) { if (prune && !prune(dom, push)) return false; return useGeneric ? generic(p, dom, push) : true; };
    props.push(p); return p;
  }

  /* relații binare */
  var relCache = {};
  function rel(name) {
    if (relCache[name]) return relCache[name];
    var f;
    switch (name) {
      case 'consec': f = function (a, b) { return Math.abs(a - b) === 1; }; break;
      case 'notconsec': f = function (a, b) { return Math.abs(a - b) !== 1; }; break;
      case 'black': f = function (a, b) { return a === 2 * b || b === 2 * a; }; break;
      case 'nodot': f = function (a, b) { return Math.abs(a - b) !== 1 && a !== 2 * b && b !== 2 * a; }; break;
      case 'x': f = function (a, b) { return a + b === N + 1; }; break;
      case 'v': f = function (a, b) { return a + b === 5; }; break;
      case 'noxv': f = function (a, b) { return a + b !== N + 1 && a + b !== 5; }; break;
      case 'lt': f = function (a, b) { return a < b; }; break;
      case 'eq': f = function (a, b) { return a === b; }; break;
      case 'whisper': f = function (a, b) { return Math.abs(a - b) >= Math.ceil(N / 2); }; break;
      case 'par': f = function (a, b) { return (a & 1) !== (b & 1); }; break;
      case 'ent': f = function (a, b) { return Math.floor((a - 1) * 3 / N) !== Math.floor((b - 1) * 3 / N); }; break;
      case 'mod': f = function (a, b) { return (a - 1) % 3 !== (b - 1) % 3; }; break;
      case 'ratio3': f = function (a, b) { return a === 3 * b || b === 3 * a; }; break;
      case 'noratio3': f = function (a, b) { return a !== 3 * b && b !== 3 * a; }; break;
      case 'comp': f = function (a, b) { return a + b === N + 1; }; break;
      case 'le': f = function (a, b) { return a <= b; }; break;
      case 'five': f = function (a, b) { return (a !== 5 || b % 2 === 0) && (b !== 5 || a % 2 === 0); }; break;
      case 'near2': f = function (a, b) { return Math.abs(a - b) <= 2; }; break;
      case 'cons3': f = function (a, b) { var d = Math.abs(a - b); return d >= 2 && d <= 4; }; break;
      case 'step3': f = function (a, b) { return Math.abs(a - b) === 3; }; break;
      case 'far4': f = function (a, b) { return Math.abs(a - b) >= 4; }; break;
      case 'spar': f = function (a, b) { return (a & 1) === (b & 1); }; break;
      default:
        if (/^diff\d+$/.test(name)) { var dk = +name.slice(4); f = function (a, b) { return Math.abs(a - b) === dk; }; break; }
        if (/^wh\d+$/.test(name)) { var th = +name.slice(2); f = function (a, b) { return Math.abs(a - b) >= th; }; break; }
        throw new Error('rel ' + name);
    }
    var T = new Int32Array(N + 1), TR = new Int32Array(N + 1);
    for (var a = 1; a <= N; a++) for (var b = 1; b <= N; b++) if (f(a, b)) { T[a] |= 1 << (b - 1); TR[b] |= 1 << (a - 1); }
    return (relCache[name] = { f: f, T: T, TR: TR });
  }
  function sup(T, m) { var s = 0; while (m) { var b = m & -m; m ^= b; s |= T[bitIndex(b) + 1]; } return s; }
  function addArc(a, b, name) {
    var R = rel(name);
    addProp([a, b], function (v) { return R.f(v[a], v[b]); }, function (dom, push) {
      if (!restrict(dom, b, sup(R.T, dom[a]), push)) return false;
      return restrict(dom, a, sup(R.TR, dom[b]), push);
    }, false);
  }

  /* sumă liniară cu GAC prin enumerare (limitat) */
  function linGAC(cells, coef, target, distinct, dom, push) {
    var k = cells.length, mn = 0, mx = 0, lo = [], hi = [], i;
    for (i = 0; i < k; i++) {
      var d = dom[cells[i]], a = minD(d), b = maxD(d);
      if (coef[i] > 0) { lo.push(coef[i] * a); hi.push(coef[i] * b); } else { lo.push(coef[i] * b); hi.push(coef[i] * a); }
      mn += lo[i]; mx += hi[i];
    }
    if (mn > target || mx < target) return false;
    if (k <= 7) {
      var supp = [], sufLo = [], sufHi = [], path = [], nodes = 0, found = false, aborted = false;
      for (i = 0; i <= k; i++) { supp.push(0); sufLo.push(0); sufHi.push(0); }
      for (i = k - 1; i >= 0; i--) { sufLo[i] = sufLo[i + 1] + lo[i]; sufHi[i] = sufHi[i + 1] + hi[i]; }
      var rec = function (i, sum, used) {
        if (aborted) return;
        if (i === k) { if (sum === target) { found = true; for (var j = 0; j < k; j++) supp[j] |= 1 << (path[j] - 1); } return; }
        if (++nodes > 4000) { aborted = true; return; }
        var x = dom[cells[i]]; if (distinct) x &= ~used;
        while (x) {
          var bb = x & -x; x ^= bb; var dd = bitIndex(bb) + 1, s = sum + coef[i] * dd;
          if (s + sufLo[i + 1] > target || s + sufHi[i + 1] < target) continue;
          path[i] = dd; rec(i + 1, s, distinct ? (used | bb) : used);
        }
      };
      rec(0, 0, 0);
      if (!aborted) {
        if (!found) return false;
        for (i = 0; i < k; i++) if (!restrict(dom, cells[i], supp[i], push)) return false;
        return true;
      }
    }
    for (i = 0; i < k; i++) {
      var c = coef[i], rLo = mn - lo[i], rHi = mx - hi[i], l, h, A = target - rHi, B = target - rLo;
      if (c > 0) { l = Math.ceil(A / c); h = Math.floor(B / c); } else { l = Math.ceil(B / c); h = Math.floor(A / c); }
      if (!restrict(dom, cells[i], rangeMask(l, h), push)) return false;
    }
    return true;
  }
  function ones(k) { var a = []; for (var i = 0; i < k; i++) a.push(1); return a; }
  function addChain(cells, strict) {
    var k = cells.length, s = strict ? 1 : 0;
    addProp(cells, function (v) { for (var q = 1; q < k; q++) if (strict ? v[cells[q]] <= v[cells[q - 1]] : v[cells[q]] < v[cells[q - 1]]) return false; return true; },
      function (dom, push) {
        var q, m;
        for (q = 1; q < k; q++) { m = minD(dom[cells[q - 1]]); if (!restrict(dom, cells[q], rangeMask(m + s, N), push)) return false; }
        for (q = k - 2; q >= 0; q--) { m = maxD(dom[cells[q + 1]]); if (!restrict(dom, cells[q], rangeMask(1, m - s), push)) return false; }
        return true;
      }, false);
  }

  /* ---------- compilarea constrângerilor de indiciu ---------- */
  var cons = P.cons || [];
  var markMap = function (marks) { var m = {}; marks.forEach(function (x) { m[x.a + ',' + x.b] = x.m; m[x.b + ',' + x.a] = x.m; }); return m; };
  cons.forEach(function (c) {
    var cells = c.cells, k = cells ? cells.length : 0, i, j;
    switch (c.t) {
      case 'cage': {
        dgroups.push(cells);
        var cco = ones(k); if (c.dbl) cells.forEach(function (x, q) { if (c.dbl.indexOf(x) >= 0) cco[q] = 2; });
        addProp(cells, function (v) { var s = 0; for (var q = 0; q < k; q++) s += cco[q] * v[cells[q]]; return s === c.sum; },
          function (dom, push) { return linGAC(cells, cco, c.sum, true, dom, push); }, false);
        break; }
      case 'osum': {
        addProp(cells, function (v) { var s = 0; for (var q = 0; q < k; q++) s += v[cells[q]]; return s === c.sum; },
          function (dom, push) { return linGAC(cells, ones(k), c.sum, true, dom, push); }, false);
        break; }
      case 'lk': case 'luk': {
        var uq = c.t === 'luk'; if (uq) dgroups.push(cells);
        addProp(cells, function (v) { var s = 0; for (var q = 0; q < k; q++) s += v[cells[q]]; return s === c.sum; },
          function (dom, push) { return linGAC(cells, ones(k), c.sum, uq, dom, push); }, false);
        break; }
      case 'arrow': {
        var co = ones(k); co[0] = -1;
        addProp(cells, function (v) { var s = 0; for (var q = 1; q < k; q++) s += v[cells[q]]; return s === v[cells[0]]; },
          function (dom, push) { return linGAC(cells, co, 0, false, dom, push); }, false);
        break; }
      case 'calc': {
        var okc = function (v) {
          var s = 0, pr = 1, mx = 0, mi = 99, q; for (q = 0; q < k; q++) { var x = v[cells[q]]; s += x; pr *= x; if (x > mx) mx = x; if (x < mi) mi = x; }
          if (c.op === '+') return s === c.val; if (c.op === 'x') return pr === c.val;
          if (c.op === '-') return mx - mi === c.val; if (c.op === '/') return mi > 0 && mx % mi === 0 && mx / mi === c.val; return false;
        };
        addProp(cells, okc, c.op === '+' ? function (dom, push) { return linGAC(cells, ones(k), c.val, false, dom, push); } : null, true);
        break; }
      case 'thermo': addChain(cells, true); break;
      case 'slowthermo': addChain(cells, false); break;
      case 'rossini': addChain(c.inc ? cells : cells.slice().reverse(), true); break;
      case 'renban': {
        dgroups.push(cells);
        addProp(cells, function (v) { var mn = 99, mx = 0, q; for (q = 0; q < k; q++) { var x = v[cells[q]]; if (x < mn) mn = x; if (x > mx) mx = x; } return mx - mn === k - 1; },
          function (dom, push) {
            var fmin = 99, fmax = 0, nf = 0, q;
            for (q = 0; q < k; q++) { var d = dom[cells[q]]; if ((d & (d - 1)) === 0) { var x = bitIndex(d) + 1; nf++; if (x < fmin) fmin = x; if (x > fmax) fmax = x; } }
            if (nf > 0) { if (fmax - fmin >= k) return false; var mk = rangeMask(fmax - k + 1, fmin + k - 1); for (q = 0; q < k; q++) if (!restrict(dom, cells[q], mk, push)) return false; }
            return true;
          }, true);
        break; }
      case 'whisper': { var wn = c.th ? 'wh' + c.th : 'whisper'; for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], wn); break; }
      case 'legato': for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], 'near2'); break;
      case 'consonant': for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], 'cons3'); break;
      case 'fixstep': for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], 'step3'); break;
      case 'compline': for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], 'comp'); break;
      case 'echo': for (i = 0; i + 3 < k; i++) addArc(cells[i], cells[i + 3], 'eq'); break;
      case 'zigzag': for (i = 0; i + 2 < k; i++) (function (a, b, d) { addProp([a, b, d], function (v) { return (v[b] - v[a]) * (v[d] - v[b]) < 0; }, null, true); })(cells[i], cells[i + 1], cells[i + 2]); break;
      case 'steps': for (i = 0; i + 2 < k; i++) (function (a, b, d) { addProp([a, b, d], function (v) { return v[d] - v[b] > v[b] - v[a]; }, null, true); })(cells[i], cells[i + 1], cells[i + 2]); break;
      case 'progression': for (i = 0; i + 2 < k; i++) (function (a, b, d) { addProp([a, b, d], function (v) { return 2 * v[b] === v[a] + v[d]; }, null, true); })(cells[i], cells[i + 1], cells[i + 2]); break;
      case 'fibonacci': for (i = 0; i + 2 < k; i++) (function (a, b, d) {
        addProp([a, b, d], function (v) { return v[d] === v[a] + v[b]; }, function (dom, push) {
          if (!restrict(dom, d, rangeMask(minD(dom[a]) + minD(dom[b]), maxD(dom[a]) + maxD(dom[b])), push)) return false;
          if (!restrict(dom, a, rangeMask(1, maxD(dom[d]) - minD(dom[b])), push)) return false;
          return restrict(dom, b, rangeMask(1, maxD(dom[d]) - minD(dom[a])), push);
        }, true); })(cells[i], cells[i + 1], cells[i + 2]); break;
      case 'divisible':
        addProp(cells, function (v) { var n = 0; for (var q = 0; q < k; q++) n = n * 10 + v[cells[q]]; return n % c.m === 0; }, null, true); break;
      case 'primeline': cells.forEach(function (cell) {
        var pm = 0; for (var d = 2; d <= N; d++) { var pr = true; for (var t = 2; t * t <= d; t++) if (d % t === 0) pr = false; if (pr) pm |= 1 << (d - 1); }
        baseMask[cell] &= pm; addProp([cell], function (v) { return !!(pm >> (v[cell] - 1) & 1); }, null, false);
      }); break;
      case 'parityline': for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], 'par'); break;
      case 'sameparity': for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], 'spar'); break;
      case 'nabner': {
        dgroups.push(cells);
        for (i = 0; i < k; i++) for (j = i + 1; j < k; j++) addArc(cells[i], cells[j], 'notconsec');
        break; }
      case 'fortress': {
        var fset = {}; cells.forEach(function (x) { fset[x] = 1; });
        cells.forEach(function (s) { L.nbr4[s].forEach(function (o) { if (!fset[o]) addArc(o, s, 'lt'); }); });
        break; }
      case 'minmax':
        c.marks.forEach(function (mkx) {
          var cell = mkx[0];
          L.nbr4[cell].forEach(function (o) { if (mkx[1] === 'min') addArc(cell, o, 'lt'); else addArc(o, cell, 'lt'); });
        });
        break;
      case 'lockout': {
        var le1 = cells[0], le2 = cells[k - 1];
        addArc(le1, le2, 'far4');
        addProp(cells, function (v) {
          var lo = Math.min(v[le1], v[le2]), hi = Math.max(v[le1], v[le2]);
          for (var q = 1; q < k - 1; q++) if (v[cells[q]] >= lo && v[cells[q]] <= hi) return false;
          return true;
        }, function (dom, push) {
          var d1 = dom[le1], d2 = dom[le2];
          if ((d1 & (d1 - 1)) === 0 && (d2 & (d2 - 1)) === 0) {
            var a = bitIndex(d1) + 1, b = bitIndex(d2) + 1, mk = FULL & ~rangeMask(Math.min(a, b), Math.max(a, b));
            for (var q = 1; q < k - 1; q++) if (!restrict(dom, cells[q], mk, push)) return false;
          }
          return true;
        }, true);
        break; }
      case 'darrow': {
        var dco = ones(k); dco[0] = -1; dco[k - 1] = -1;
        addProp(cells, function (v) { var s = 0; for (var q = 1; q < k - 1; q++) s += v[cells[q]]; return s === v[cells[0]] + v[cells[k - 1]]; },
          function (dom, push) { return linGAC(cells, dco, 0, false, dom, push); }, false);
        break; }
      case 'avgarrow': {
        var aco = ones(k); aco[0] = -(k - 1);
        addProp(cells, function (v) { var s = 0; for (var q = 1; q < k; q++) s += v[cells[q]]; return s === (k - 1) * v[cells[0]]; },
          function (dom, push) { return linGAC(cells, aco, 0, false, dom, push); }, false);
        break; }
      case 'pillarrow': {
        var pco = ones(k); pco[0] = -10; pco[1] = -1;
        addProp(cells, function (v) { var s = 0; for (var q = 2; q < k; q++) s += v[cells[q]]; return s === 10 * v[cells[0]] + v[cells[1]]; },
          function (dom, push) { return linGAC(cells, pco, 0, false, dom, push); }, false);
        break; }
      case 'prodarrow': {
        addProp(cells, function (v) { var pr = 1; for (var q = 1; q < k; q++) pr *= v[cells[q]]; return pr === v[cells[0]]; },
          function (dom, push) {
            var pm = 1, ph = 1, q;
            for (q = 1; q < k; q++) { pm *= minD(dom[cells[q]]); ph *= maxD(dom[cells[q]]); }
            if (!restrict(dom, cells[0], rangeMask(pm, ph), push)) return false;
            var d = dom[cells[0]];
            if ((d & (d - 1)) === 0) {
              var bv = bitIndex(d) + 1, dv = 0, t;
              for (t = 1; t <= N; t++) if (bv % t === 0) dv |= 1 << (t - 1);
              for (q = 1; q < k; q++) if (!restrict(dom, cells[q], dv, push)) return false;
            }
            return true;
          }, true);
        break; }
      case 'zipper': {
        var zc = (k - 1) >> 1, zm = cells[zc];
        addProp(cells, function (v) { for (var q = 0; q < zc; q++) if (v[cells[q]] + v[cells[k - 1 - q]] !== v[zm]) return false; return true; },
          function (dom, push) {
            var allowed = dom[zm], q, xa, xb, ba, bb, va, ps;
            for (q = 0; q < zc; q++) {
              var da = dom[cells[q]], db = dom[cells[k - 1 - q]]; ps = 0; xa = da;
              while (xa) { ba = xa & -xa; xa ^= ba; va = bitIndex(ba) + 1; xb = db;
                while (xb) { bb = xb & -xb; xb ^= bb; var sm = va + bitIndex(bb) + 1; if (sm <= N) ps |= 1 << (sm - 1); } }
              allowed &= ps;
            }
            if (!restrict(dom, zm, allowed, push)) return false;
            var cd = dom[zm];
            for (q = 0; q < zc; q++) {
              var ma = 0, mb = 0; xa = dom[cells[q]];
              while (xa) { ba = xa & -xa; xa ^= ba; va = bitIndex(ba) + 1; xb = dom[cells[k - 1 - q]];
                while (xb) { bb = xb & -xb; xb ^= bb; var vb = bitIndex(bb) + 1; if (va + vb <= N && ((cd >> (va + vb - 1)) & 1)) { ma |= ba; mb |= bb; } } }
              if (!restrict(dom, cells[q], ma, push) || !restrict(dom, cells[k - 1 - q], mb, push)) return false;
            }
            return true;
          }, true);
        break; }
      case 'outside': {
        var odg = c.digits, odm = 0; odg.forEach(function (d) { odm |= 1 << (d - 1); });
        addProp(cells, function (v) { return odg.every(function (d) { return cells.some(function (x) { return v[x] === d; }); }); },
          function (dom, push) {
            for (var t = 0; t < odg.length; t++) {
              var bit = 1 << (odg[t] - 1), host = -1, nh = 0, q;
              for (q = 0; q < k; q++) if (dom[cells[q]] & bit) { nh++; host = cells[q]; }
              if (nh === 0) return false;
              if (nh === 1 && !restrict(dom, host, bit, push)) return false;
            }
            if (odg.length === k) for (var q2 = 0; q2 < k; q2++) if (!restrict(dom, cells[q2], odm, push)) return false;
            return true;
          }, true);
        break; }
      case 'index': L.rows.forEach(function (g) {
        addProp(g, function (v) { return v[g[v[g[0]] - 1]] === 1; },
          function (dom, push) {
            var keep = 0, x = dom[g[0]], bb, d;
            while (x) { bb = x & -x; x ^= bb; d = bitIndex(bb) + 1; if (dom[g[d - 1]] & 1) keep |= bb; }
            if (!restrict(dom, g[0], keep, push)) return false;
            var d0 = dom[g[0]];
            if ((d0 & (d0 - 1)) === 0) return restrict(dom, g[bitIndex(d0)], 1, push);
            return true;
          }, true);
      }); break;
      case 'symcomp': case 'symparity':
        for (i = 0; i < cnt; i++) {
          j = cnt - 1 - i;
          if (j > i) addArc(i, j, c.t === 'symcomp' ? 'comp' : 'spar');
          else if (j === i && c.t === 'symcomp') (function (cell) { var m = 1 << ((N + 1) / 2 - 1); baseMask[cell] &= m; addProp([cell], function (v) { return 2 * v[cell] === N + 1; }, null, false); })(i);
        }
        break;
      case 'cgrav': { var tup = cgravTuples(N);
        L.rows.forEach(function (g) {
          var k2 = g.length;
          addProp(g, function (v) { for (var t = 0; t < tup.n; t++) { var okk = true; for (var q = 0; q < k2; q++) if (tup.d[t * k2 + q] !== v[g[q]]) { okk = false; break; } if (okk) return true; } return false; },
            function (dom, push) {
              var sp = new Array(k2).fill(0), t, q;
              for (t = 0; t < tup.n; t++) {
                var good = true;
                for (q = 0; q < k2; q++) if (!(dom[g[q]] >> (tup.d[t * k2 + q] - 1) & 1)) { good = false; break; }
                if (good) for (q = 0; q < k2; q++) sp[q] |= 1 << (tup.d[t * k2 + q] - 1);
              }
              for (q = 0; q < k2; q++) if (!restrict(dom, g[q], sp[q], push)) return false;
              return true;
            }, false);
        }); break; }
      case 'lexrows': for (i = 0; i + 1 < L.rows.length; i++) (function (g1, g2) {
        addArc(g1[0], g2[0], 'lt');
        addProp(g1.concat(g2), function (v) { for (var q = 0; q < g1.length; q++) if (v[g1[q]] !== v[g2[q]]) return v[g1[q]] < v[g2[q]]; return false; }, null, true);
      })(L.rows[i], L.rows[i + 1]); break;
      case 'extremes': L.boxes.forEach(function (g) {
        addProp(g, function (v) { var a = -1, b = -1; for (var q = 0; q < g.length; q++) { if (v[g[q]] === 1) a = g[q]; if (v[g[q]] === N) b = g[q]; } return a >= 0 && b >= 0 && L.nbr8[a].indexOf(b) >= 0; },
          function (dom, push) {
            var bN = 1 << (N - 1), fa = -1, fb = -1, q;
            for (q = 0; q < g.length; q++) { if (dom[g[q]] === 1) fa = g[q]; if (dom[g[q]] === bN) fb = g[q]; }
            if (fa >= 0) for (q = 0; q < g.length; q++) if (g[q] !== fa && L.nbr8[fa].indexOf(g[q]) < 0 && !restrict(dom, g[q], ~bN, push)) return false;
            if (fb >= 0) for (q = 0; q < g.length; q++) if (g[q] !== fb && L.nbr8[fb].indexOf(g[q]) < 0 && !restrict(dom, g[q], ~1, push)) return false;
            for (q = 0; q < g.length; q++) {
              var x = g[q], has1 = false, hasN = false;
              L.nbr8[x].forEach(function (y) { if (g.indexOf(y) >= 0) { if (dom[y] & 1) has1 = true; if (dom[y] & bN) hasN = true; } });
              if ((dom[x] & bN) && !has1 && !restrict(dom, x, ~bN, push)) return false;
              if ((dom[x] & 1) && !hasN && !restrict(dom, x, ~1, push)) return false;
            }
            return true;
          }, true);
      }); break;
      case 'boxbalance': L.boxes.forEach(function (g) {
        var cs = g.map(function (x) { return L.pos[x][1]; }), c0 = Math.min.apply(null, cs), c1 = Math.max.apply(null, cs);
        addProp(g, function (v) { var a = 0, b = 0; for (var q = 0; q < g.length; q++) { if (cs[q] === c0) a += v[g[q]]; if (cs[q] === c1) b += v[g[q]]; } return a === b; }, null, true);
      }); break;
      case 'lonely5': for (i = 0; i < cnt; i++) L.nbr4[i].forEach(function (o) { if (o > i) addArc(i, o, 'five'); }); break;
      case 'nolonely': for (i = 0; i < cnt; i++) (function (cell) {
        var cl = [cell].concat(L.nbr4[cell]);
        addProp(cl, function (v) { for (var q = 1; q < cl.length; q++) if (Math.abs(v[cl[q]] - v[cell]) === 1) return true; return false; }, null, true);
      })(i); break;
      case 'noprog': {
        var trip = function (g) { for (var q = 0; q + 2 < g.length; q++) (function (a, b, d) { addProp([a, b, d], function (v) { return 2 * v[b] !== v[a] + v[d]; }, null, true); })(g[q], g[q + 1], g[q + 2]); };
        L.rows.forEach(trip); L.cols.forEach(trip); break; }
      case 'semimagic': L.boxes.forEach(function (g) {
        [[0, L.br], [1, L.bc]].forEach(function (ax) {
          var by = {}; g.forEach(function (x) { (by[L.pos[x][ax[0]]] = by[L.pos[x][ax[0]]] || []).push(x); });
          var tgt = N * (N + 1) / 2 / ax[1];
          Object.keys(by).forEach(function (rk) {
            var cl = by[rk];
            addProp(cl, function (v) { var s = 0; for (var q = 0; q < cl.length; q++) s += v[cl[q]]; return s === tgt; }, function (dom, push) { return linGAC(cl, ones(cl.length), tgt, true, dom, push); }, false);
          });
        });
      }); break;
      case 'mclue':
        addProp(cells, function (v) { var a = []; for (var q = 0; q < k; q++) a.push(v[cells[q]]); return String(mval(c.kind, a, N)) === String(c.val); },
          c.kind === 'radar' ? function (dom, push) {
            var p = c.val - 1, q, bN = 1 << (N - 1);
            if (p < 0 || p >= k) return false;
            if (!restrict(dom, cells[p], bN, push)) return false;
            for (q = 0; q < k; q++) if (q !== p && !restrict(dom, cells[q], ~bN, push)) return false;
            return true;
          } : null, true);
        break;
      case 'relief': c.marks.forEach(function (m) {
        var cl = [m[0]].concat(L.nbr4[m[0]]);
        addProp(cl, function (v) { var t = 0; for (var q = 1; q < cl.length; q++) if (v[cl[q]] < v[cl[0]]) t++; return t === m[1]; }, null, true);
      }); break;
      case 'oddsweeper': c.marks.forEach(function (m) {
        var cl = [m[0]].concat(L.nbr8[m[0]]);
        addProp(cl, function (v) { var t = 0; for (var q = 1; q < cl.length; q++) if (v[cl[q]] & 1) t++; return t === m[1]; }, null, true);
      }); break;
      case 'compass': c.marks.forEach(function (m) {
        var nb = L.nbr8[m[0]], tgt = at[(L.pos[m[0]][0] + m[1]) * C + L.pos[m[0]][1] + m[2]], cl = [m[0]].concat(nb);
        addProp(cl, function (v) { for (var q = 0; q < nb.length; q++) if (nb[q] !== tgt && v[nb[q]] >= v[tgt]) return false; return true; }, null, true);
      }); break;
      case 'quadsum':
        addProp(cells, function (v) { return v[cells[0]] + v[cells[1]] + v[cells[2]] + v[cells[3]] === c.sum; }, function (dom, push) { return linGAC(cells, ones(4), c.sum, false, dom, push); }, false);
        break;
      case 'stone': dgroups.push(cells); break;
      case 'domino':
        addProp(cells, function (v) { var x = v[cells[0]], y = v[cells[1]]; return (x === c.digits[0] && y === c.digits[1]) || (x === c.digits[1] && y === c.digits[0]); }, null, true);
        break;
      case 'pillsq':
        addProp(cells, function (v) { var n = 10 * v[cells[0]] + v[cells[1]]; return n === 16 || n === 25 || n === 36 || n === 49 || n === 64 || n === 81; }, null, true);
        break;
      case 'pcage': {
        dgroups.push(cells);
        addProp(cells, function (v) { var t = 0; for (var q = 0; q < k; q++) t += v[cells[q]]; if (t < 2) return false; for (var d = 2; d * d <= t; d++) if (t % d === 0) return false; return true; }, null, true);
        break; }
      case 'bcage':
        addProp(cells, function (v) { var t = 0, pr = 1; for (var q = 0; q < k; q++) { t += v[cells[q]]; pr *= v[cells[q]]; } return t === pr; }, null, true);
        break;
      case 'orth': {
        var N2 = N * N;
        for (i = 0; i < N2; i++) for (j = i + 1; j < N2; j++) (function (p, q) {
          var cl4 = [p, q, p + N2, q + N2];
          addProp(cl4, function (v) { return !(v[p] === v[q] && v[p + N2] === v[q + N2]); }, function (dom, push) {
            if ((dom[p] & (dom[p] - 1)) === 0 && dom[p] === dom[q]) {
              if ((dom[p + N2] & (dom[p + N2] - 1)) === 0 && !restrict(dom, q + N2, ~dom[p + N2], push)) return false;
              if ((dom[q + N2] & (dom[q + N2] - 1)) === 0 && !restrict(dom, p + N2, ~dom[q + N2], push)) return false;
            }
            if ((dom[p + N2] & (dom[p + N2] - 1)) === 0 && dom[p + N2] === dom[q + N2]) {
              if ((dom[p] & (dom[p] - 1)) === 0 && !restrict(dom, q, ~dom[p], push)) return false;
              if ((dom[q] & (dom[q] - 1)) === 0 && !restrict(dom, p, ~dom[q], push)) return false;
            }
            return true;
          }, true);
        })(i, j);
        break; }
      case 'clone': for (i = 0; i < c.a.length; i++) addArc(c.a[i], c.b[i], 'eq'); break;
      case 'regsum': {
        var rg = {}, rkeys = [];
        cells.forEach(function (x) { var id = P.regions ? P.regions[x] : L.boxId[x]; if (!rg[id]) { rg[id] = []; rkeys.push(id); } rg[id].push(x); });
        var rgs = rkeys.map(function (id) { return rg[id]; });
        addProp(cells, function (v) {
          var s0 = -1;
          for (var g = 0; g < rgs.length; g++) { var s = 0; for (var q = 0; q < rgs[g].length; q++) s += v[rgs[g][q]]; if (s0 < 0) s0 = s; else if (s !== s0) return false; }
          return true;
        }, function (dom, push) {
          var mn = [], mx = [], Slo = 0, Shi = 999, g, q;
          for (g = 0; g < rgs.length; g++) {
            var a = 0, b = 0; for (q = 0; q < rgs[g].length; q++) { a += minD(dom[rgs[g][q]]); b += maxD(dom[rgs[g][q]]); }
            mn.push(a); mx.push(b); Slo = Math.max(Slo, a); Shi = Math.min(Shi, b);
          }
          if (Slo > Shi) return false;
          for (g = 0; g < rgs.length; g++) for (q = 0; q < rgs[g].length; q++) {
            var x = rgs[g][q];
            if (!restrict(dom, x, rangeMask(Slo - (mx[g] - maxD(dom[x])), Shi - (mn[g] - minD(dom[x]))), push)) return false;
          }
          if (Slo === Shi) for (g = 0; g < rgs.length; g++) if (!linGAC(rgs[g], ones(rgs[g].length), Slo, true, dom, push)) return false;
          return true;
        }, false);
        break; }
      case 'palin': for (i = 0; i < (k >> 1); i++) addArc(cells[i], cells[k - 1 - i], 'eq'); break;
      case 'entropic': case 'modular': {
        var rn = c.t === 'entropic' ? 'ent' : 'mod', R = rel(rn);
        for (i = 1; i < k; i++) addArc(cells[i - 1], cells[i], rn);
        for (i = 2; i < k; i++) (function (a, b, d) { addProp([a, b, d], function (v) { return R.f(v[a], v[b]) && R.f(v[b], v[d]) && R.f(v[a], v[d]); }, null, true); })(cells[i - 2], cells[i - 1], cells[i]);
        break; }
      case 'between': {
        var e1 = cells[0], e2 = cells[k - 1];
        addProp(cells, function (v) { var a = v[e1], b = v[e2], lo = Math.min(a, b), hi = Math.max(a, b); for (var q = 1; q < k - 1; q++) if (v[cells[q]] <= lo || v[cells[q]] >= hi) return false; return true; },
          function (dom, push) {
            var lo = Math.min(minD(dom[e1]), minD(dom[e2])), hi = Math.max(maxD(dom[e1]), maxD(dom[e2])), mk = rangeMask(lo + 1, hi - 1);
            for (var q = 1; q < k - 1; q++) if (!restrict(dom, cells[q], mk, push)) return false;
            return true;
          }, true);
        break; }
      case 'sandwich': {
        var line = cells, S = c.sum, mid = rangeMask(2, N - 1), b1 = 1, bN = 1 << (N - 1);
        addProp(line, function (v) {
          var p = -1, q = -1; for (var t = 0; t < k; t++) { if (v[line[t]] === 1) p = t; else if (v[line[t]] === N) q = t; }
          var a = Math.min(p, q), b = Math.max(p, q), s = 0; for (t = a + 1; t < b; t++) s += v[line[t]]; return s === S;
        }, function (dom, push) {
          var s1 = 0, sN = 0, p, q, t;
          for (p = 0; p < k; p++) {
            if (!(dom[line[p]] & b1)) continue;
            for (q = 0; q < k; q++) {
              if (q === p || !(dom[line[q]] & bN)) continue;
              var a = Math.min(p, q), b = Math.max(p, q), mnS = 0, mxS = 0, bad = false, n = b - a - 1;
              for (t = a + 1; t < b; t++) { var m = dom[line[t]] & mid; if (!m) { bad = true; break; } mnS += minD(m); mxS += maxD(m); }
              if (bad) continue;
              var dmin = n * (n + 3) / 2, dmax = n * (2 * N - n - 1) / 2;
              if (Math.max(mnS, dmin) > S || Math.min(mxS, dmax) < S) continue;
              s1 |= 1 << p; sN |= 1 << q;
            }
          }
          for (p = 0; p < k; p++) {
            if (!(s1 >> p & 1) && !restrict(dom, line[p], ~b1, push)) return false;
            if (!(sN >> p & 1) && !restrict(dom, line[p], ~bN, push)) return false;
          }
          var fp = -1, fq = -1;
          for (t = 0; t < k; t++) { if (dom[line[t]] === b1) fp = t; else if (dom[line[t]] === bN) fq = t; }
          if (fp >= 0 && fq >= 0) {
            var lo2 = Math.min(fp, fq), hi2 = Math.max(fp, fq), bt = line.slice(lo2 + 1, hi2);
            for (t = 0; t < bt.length; t++) if (!restrict(dom, bt[t], mid, push)) return false;
            if (bt.length) return linGAC(bt, ones(bt.length), S, true, dom, push); else return S === 0;
          }
          return true;
        }, false);
        break; }
      case 'sky': {
        var cl = c.clue;
        var vis = function (v) { var mx = 0, n = 0; for (var q = 0; q < k; q++) { if (v[cells[q]] > mx) { mx = v[cells[q]]; n++; } } return n === cl; };
        addProp(cells, vis, function (dom, push) {
          var q;
          for (q = 0; q < k; q++) if (!restrict(dom, cells[q], rangeMask(1, N - cl + 1 + q), push)) return false;
          if (cl === 1 && !restrict(dom, cells[0], 1 << (N - 1), push)) return false;
          if (cl === N) for (q = 0; q < k; q++) if (!restrict(dom, cells[q], 1 << q, push)) return false;
          var mx = 0, n = 0;
          for (q = 0; q < k; q++) {
            var d = dom[cells[q]]; if ((d & (d - 1)) !== 0) break;
            var x = bitIndex(d) + 1; if (x > mx) { mx = x; n++; }
          }
          if (n > cl) return false;
          if (q === k) return n === cl;
          if (mx === N && n !== cl) return false;
          if (n + (N - mx) < cl) return false;
          return true;
        }, true);
        break; }
      case 'xsum': {
        var Sx = c.sum, c0 = cells[0];
        addProp(cells, function (v) { var kk = v[c0], s = 0; for (var q = 0; q < kk; q++) s += v[cells[q]]; return s === Sx; },
          function (dom, push) {
            var d = dom[c0], keep = 0, x = d, q, minRest = [0];
            for (q = 1; q < k; q++) minRest.push(minRest[q - 1] + minD(dom[cells[q]]));
            var maxRest = [0]; for (q = 1; q < k; q++) maxRest.push(maxRest[q - 1] + maxD(dom[cells[q]]));
            while (x) {
              var bb = x & -x; x ^= bb; var kk = bitIndex(bb) + 1;
              // suma primelor kk celule: kk + celule 1..kk-1
              var lo = kk + minRest[kk - 1], hi = kk + maxRest[kk - 1];
              if (lo <= Sx && hi >= Sx) keep |= bb;
            }
            if (!restrict(dom, c0, keep, push)) return false;
            d = dom[c0];
            if ((d & (d - 1)) === 0) { var kf = bitIndex(d) + 1, sub = cells.slice(0, kf); return linGAC(sub, ones(kf), Sx, true, dom, push); }
            return true;
          }, true);
        break; }
      case 'dots': {
        var mm = markMap(c.marks);
        for (i = 0; i < cnt; i++) for (j = 0; j < L.nbr4[i].length; j++) {
          var o = L.nbr4[i][j]; if (o < i) continue;
          var mk = mm[i + ',' + o];
          if (c.kind === 'kropki') { if (mk || !c.pos) addArc(i, o, mk === 'w' ? 'consec' : mk === 'b' ? 'black' : 'nodot'); }
          else if (c.kind === 'consec') { if (mk || !c.pos) addArc(i, o, mk ? 'consec' : 'notconsec'); }
          else if (c.kind === 'xv') { if (mk || !c.pos) addArc(i, o, mk === 'x' ? 'x' : mk === 'v' ? 'v' : 'noxv'); }
          else if (c.kind === 'diff') { if (mk) addArc(i, o, 'diff' + mk); }
          else if (c.kind === 'ratio') addArc(i, o, mk ? 'ratio3' : 'noratio3');
        }
        break; }
      case 'lt': c.marks.forEach(function (x) { addArc(x.a, x.b, 'lt'); }); break;
      case 'batt': {
        var ms = {}; c.marks.forEach(function (q) { ms[q] = 1; });
        for (var r = 0; r < L.R - 1; r++) for (var cc = 0; cc < L.C - 1; cc++) {
          var qa = at[r * C + cc], qb = at[r * C + cc + 1], qc = at[(r + 1) * C + cc], qd = at[(r + 1) * C + cc + 1];
          if (qa < 0 || qb < 0 || qc < 0 || qd < 0) continue;
          (function (a, b, cx, d, marked) {
            addProp([a, b, cx, d], function (v) {
              var bt = (v[a] & 1) === (v[d] & 1) && (v[b] & 1) === (v[cx] & 1) && (v[a] & 1) !== (v[b] & 1);
              return marked ? bt : !bt;
            }, null, true);
          })(qa, qb, qc, qd, !!ms[qa]);
        }
        break; }
      case 'quad': {
        addProp(cells, function (v) {
          var cntd = {}, q; for (q = 0; q < 4; q++) cntd[v[cells[q]]] = (cntd[v[cells[q]]] || 0) + 1;
          var need = {}; c.digits.forEach(function (d) { need[d] = (need[d] || 0) + 1; });
          for (var d in need) if ((cntd[d] || 0) < need[d]) return false; return true;
        }, null, true);
        break; }
      case 'parity': {
        c.marks.forEach(function (mkx) {
          var cell = mkx[0], ev = mkx[1] === 'e', mk2 = 0;
          for (var d = 1; d <= N; d++) if ((d % 2 === 0) === ev) mk2 |= 1 << (d - 1);
          baseMask[cell] &= mk2;
          addProp([cell], function (v) { return (v[cell] % 2 === 0) === ev; }, null, false);
        });
        break; }
      default: throw new Error('constrângere necunoscută: ' + c.t);
    }
  });
  if (st.mods.nonconsec) for (var ci = 0; ci < cnt; ci++) L.nbr4[ci].forEach(function (o) { if (o > ci) addArc(ci, o, 'notconsec'); });

  /* vecini, grupuri pe celulă, constrângeri pe celulă */
  var peerSets = [], i;
  for (i = 0; i < cnt; i++) peerSets.push({});
  function link(g) { for (var a = 0; a < g.length; a++) for (var b = 0; b < g.length; b++) if (a !== b) peerSets[g[a]][g[b]] = 1; }
  groups.forEach(link); dgroups.forEach(link);
  st.ne.forEach(function (p) { peerSets[p[0]][p[1]] = 1; peerSets[p[1]][p[0]] = 1; });
  var peers = peerSets.map(function (s) { return Int32Array.from(Object.keys(s).map(Number)); });
  var cellGroups = [], cellCons = [];
  for (i = 0; i < cnt; i++) { cellGroups.push([]); cellCons.push([]); }
  groups.forEach(function (g, gi) { g.forEach(function (c) { cellGroups[c].push(gi); }); });
  props.forEach(function (p, pi) { p.cells.forEach(function (c) { cellCons[c].push(pi); }); });

  var inQ = new Uint8Array(cnt);
  function hidden(g, dom, push) {
    var once = 0, twice = 0, k, d;
    for (k = 0; k < g.length; k++) { d = dom[g[k]]; twice |= once & d; once |= d; }
    if (once !== FULL) return false;
    var singles = once & ~twice; if (singles === 0) return true;
    for (k = 0; k < g.length; k++) {
      var c = g[k]; d = dom[c]; var m = d & singles;
      if (m) { if (m & (m - 1)) return false; if (d !== m) { dom[c] = m; push(c); } }
    }
    return true;
  }
  function propagate(dom, q) {
    var push = function (j) { if (!inQ[j]) { inQ[j] = 1; q.push(j); } };
    var ok = true, k;
    while (q.length) {
      var ci = q.pop(); inQ[ci] = 0;
      var di = dom[ci];
      if (di === 0) { ok = false; break; }
      if ((di & (di - 1)) === 0) {
        var pr = peers[ci];
        for (k = 0; k < pr.length; k++) { var j = pr[k], dj = dom[j]; if (dj & di) { var nd = dj & ~di; if (nd === 0) { ok = false; break; } dom[j] = nd; push(j); } }
        if (!ok) break;
      }
      var cg = cellGroups[ci];
      for (k = 0; k < cg.length; k++) if (!hidden(groups[cg[k]], dom, push)) { ok = false; break; }
      if (!ok) break;
      var cc = cellCons[ci];
      for (k = 0; k < cc.length; k++) if (!props[cc[k]].prune(dom, push)) { ok = false; break; }
      if (!ok) break;
    }
    if (!ok) while (q.length) inQ[q.pop()] = 0;
    return ok;
  }
  function initDom(givens) {
    var d = new Int32Array(cnt);
    for (var k = 0; k < cnt; k++) { d[k] = baseMask[k]; if (givens && givens[k] > 0) d[k] &= 1 << (givens[k] - 1); }
    return d;
  }
  function verify(vals) {
    var k, g, seen, s;
    for (k = 0; k < cnt; k++) if (!(vals[k] >= 1 && vals[k] <= N)) return false;
    for (k = 0; k < groups.length; k++) { g = groups[k]; seen = 0; for (s = 0; s < g.length; s++) seen |= 1 << (vals[g[s]] - 1); if (seen !== FULL) return false; }
    for (k = 0; k < dgroups.length; k++) { g = dgroups[k]; seen = 0; for (s = 0; s < g.length; s++) { var b = 1 << (vals[g[s]] - 1); if (seen & b) return false; seen |= b; } }
    for (k = 0; k < st.ne.length; k++) if (vals[st.ne[k][0]] === vals[st.ne[k][1]]) return false;
    for (k = 0; k < props.length; k++) if (!props[k].ok(vals)) return false;
    return true;
  }
  /* căutare: numără soluții până la limit; exclude = [celulă, cifră] */
  function solve(givens, opts) {
    opts = opts || {};
    var limit = opts.limit || 2, budget = opts.budget || 100000, rnd = opts.rnd || null;
    var dom = initDom(givens);
    if (opts.exclude) dom[opts.exclude[0]] &= ~(1 << (opts.exclude[1] - 1));
    var res = { count: 0, sols: [], aborted: false, nodes: 0 };
    for (var k0 = 0; k0 < cnt; k0++) if (dom[k0] === 0) return res;
    var q = range(cnt); for (k0 = 0; k0 < cnt; k0++) inQ[k0] = 1;
    if (!propagate(dom, q)) return res;
    var rec = function (dm) {
      if (res.aborted || res.count >= limit) return;
      if (++res.nodes > budget) { res.aborted = true; return; }
      var best = -1, bc = 99, k;
      for (k = 0; k < cnt; k++) { var c = pop(dm[k]); if (c > 1 && c < bc) { bc = c; best = k; if (c === 2) break; } }
      if (best < 0) {
        var vals = new Int32Array(cnt); for (k = 0; k < cnt; k++) vals[k] = bitIndex(dm[k]) + 1;
        if (verify(vals)) { res.count++; res.sols.push(vals); }
        return;
      }
      var bits = [], x = dm[best]; while (x) { var b = x & -x; x ^= b; bits.push(b); }
      if (rnd) rnd.shuffle(bits);
      for (var t = 0; t < bits.length; t++) {
        if (res.aborted || res.count >= limit) return;
        var nd = dm.slice(); nd[best] = bits[t];
        inQ[best] = 1;
        if (propagate(nd, [best])) rec(nd);
      }
    };
    rec(dom);
    return res;
  }
  /* candidații după propagare, pornind de la valori (0 = gol); null dacă e contradicție */
  function candidates(vals) {
    var dom = initDom(vals), k;
    for (k = 0; k < cnt; k++) if (dom[k] === 0) return null;
    var q = range(cnt); for (k = 0; k < cnt; k++) inQ[k] = 1;
    return propagate(dom, q) ? dom : null;
  }
  return { L: L, N: N, cnt: cnt, groups: groups, dgroups: dgroups, props: props, peers: peers, ne: st.ne, FULL: FULL, solve: solve, verify: verify, candidates: candidates, initDom: initDom, propagate: propagate };
}

/* ---------- Generator ---------- */
function patternGrid(N, br, bc, rnd) {
  var bands = rnd.shuffle(range(N / br)), stacks = rnd.shuffle(range(N / bc)), rowOrder = [], colOrder = [];
  bands.forEach(function (b) { rnd.shuffle(range(br)).forEach(function (r) { rowOrder.push(b * br + r); }); });
  stacks.forEach(function (s) { rnd.shuffle(range(bc)).forEach(function (c) { colOrder.push(s * bc + c); }); });
  var dg = rnd.shuffle(range(N)), g = [];
  for (var r = 0; r < N; r++) for (var c = 0; c < N; c++) g.push(dg[(bc * (rowOrder[r] % br) + Math.floor(rowOrder[r] / br) + colOrder[c]) % N] + 1);
  return g;
}
function genRegions(N, rnd) {
  var cells = N * N, i;
  function nb(i) { var a = [], rr = Math.floor(i / N), cc = i % N; if (rr > 0) a.push(i - N); if (rr < N - 1) a.push(i + N); if (cc > 0) a.push(i - 1); if (cc < N - 1) a.push(i + 1); return a; }
  var NB = []; for (i = 0; i < cells; i++) NB.push(nb(i));
  var box = BOX[N], reg = [];
  for (i = 0; i < cells; i++) { var r = Math.floor(i / N), c = i % N; reg.push(box ? Math.floor(r / box[0]) * (N / box[1]) + Math.floor(c / box[1]) : r); }
  function connected(id) {
    var first = -1, total = 0, k;
    for (k = 0; k < cells; k++) if (reg[k] === id) { total++; if (first < 0) first = k; }
    var seen = {}, st = [first], n = 1; seen[first] = 1;
    while (st.length) { var x = st.pop(); for (var t = 0; t < NB[x].length; t++) { var y = NB[x][t]; if (reg[y] === id && !seen[y]) { seen[y] = 1; n++; st.push(y); } } }
    return n === total;
  }
  for (var it = 0; it < cells * 60; it++) {
    var a1 = rnd.int(cells), b1 = NB[a1][rnd.int(NB[a1].length)];
    var A = reg[a1], B = reg[b1]; if (A === B) continue;
    var cand = [];
    for (i = 0; i < cells; i++) if (reg[i] === B && i !== b1) { for (var t = 0; t < NB[i].length; t++) if (reg[NB[i][t]] === A && NB[i][t] !== a1) { cand.push(i); break; } }
    cand.push(b1);
    var c1 = cand[rnd.int(cand.length)];
    reg[a1] = B; reg[c1] = A;
    if (!(connected(A) && connected(B))) { reg[a1] = A; reg[c1] = B; }
  }
  for (var id = 0; id < N; id++) {
    var rs = {}, cs = {};
    for (i = 0; i < cells; i++) if (reg[i] === id) { rs[Math.floor(i / N)] = 1; cs[i % N] = 1; }
    if (Object.keys(rs).length === 1 || Object.keys(cs).length === 1) return null;
  }
  return reg;
}

/* generatoare de indicii (derivate din soluție) */
function adjacencyCtx(P, L, sol, rnd) { return { P: P, L: L, N: L.N, sol: sol, rnd: rnd, cnt: L.count, pos: L.pos, at: L.at, nbr4: L.nbr4, nbr8: L.nbr8, used: new Uint8Array(L.count) }; }

function findPath(ctx, start, len, nbrs, extendOk, finalOk, stepLimit) {
  var path = [start], inPath = {}; inPath[start] = 1; var steps = 0;
  function dfs() {
    if (path.length === len) return finalOk ? (finalOk(path) ? path.slice() : null) : path.slice();
    var last = path[path.length - 1], cand = ctx.rnd.shuffle(nbrs[last].slice());
    for (var t = 0; t < cand.length; t++) {
      var j = cand[t]; if (ctx.used[j] || inPath[j]) continue;
      if (!extendOk(path, j)) continue;
      path.push(j); inPath[j] = 1;
      var r = dfs();
      path.pop(); delete inPath[j];
      if (r) return r;
      if (++steps > (stepLimit || 300)) return null;
    }
    return null;
  }
  return dfs();
}
function placeLines(ctx, targetFrac, minLen, maxLen, nbrs, mk, maxTries) {
  var out = [], covered = 0, target = Math.round(ctx.cnt * targetFrac), tries = 0;
  maxTries = maxTries || ctx.cnt * 6;
  while (covered < target && tries++ < maxTries) {
    var s = ctx.rnd.int(ctx.cnt); if (ctx.used[s]) continue;
    var len = minLen + ctx.rnd.int(maxLen - minLen + 1);
    var p = mk(s, len);
    if (p) { out.push(p); p.forEach(function (c) { ctx.used[c] = 1; }); covered += p.length; }
  }
  return out;
}
function outsideLines(ctx) {
  // toate liniile (rând/coloană) cu capetele lor: {cells (ordonate din capăt), dir:[dr,dc]}
  var L = ctx.L, N = ctx.N, out = [], r, c;
  for (r = 0; r < N; r++) {
    var row = [], rev = []; for (c = 0; c < N; c++) row.push(L.at[r * L.C + c]);
    for (c = N - 1; c >= 0; c--) rev.push(L.at[r * L.C + c]);
    out.push({ cells: row, dir: [0, 1], kind: 'row', idx: r }); out.push({ cells: rev, dir: [0, -1], kind: 'row', idx: r });
  }
  for (c = 0; c < N; c++) {
    var col = [], rv = []; for (r = 0; r < N; r++) col.push(L.at[r * L.C + c]);
    for (r = N - 1; r >= 0; r--) rv.push(L.at[r * L.C + c]);
    out.push({ cells: col, dir: [1, 0], kind: 'col', idx: c }); out.push({ cells: rv, dir: [-1, 0], kind: 'col', idx: c });
  }
  return out;
}

var CLUES = {
  killer: function (ctx) {
    var N = ctx.N, rnd = ctx.rnd, cageOf = new Int32Array(ctx.cnt).fill(-1), cages = [];
    var order = rnd.shuffle(range(ctx.cnt));
    order.forEach(function (s) {
      if (cageOf[s] >= 0) return;
      var r = rnd.next(), target = r < 0.04 ? 1 : r < 0.34 ? 2 : r < 0.68 ? 3 : r < 0.92 ? 4 : 5; target = Math.min(target, N);
      var cells = [s], digs = {}; digs[ctx.sol[s]] = 1; cageOf[s] = cages.length;
      while (cells.length < target) {
        var cand = [];
        cells.forEach(function (c) { ctx.nbr4[c].forEach(function (o) { if (cageOf[o] < 0 && !digs[ctx.sol[o]]) cand.push(o); }); });
        if (!cand.length) break;
        var o = rnd.pick(cand); cells.push(o); digs[ctx.sol[o]] = 1; cageOf[o] = cages.length;
      }
      cages.push(cells);
    });
    return cages.map(function (cells) { cells.sort(function (a, b) { return a - b; }); var s = 0; cells.forEach(function (c) { s += ctx.sol[c]; }); return { t: 'cage', cells: cells, sum: s }; });
  },
  kenken: function (ctx) {
    var N = ctx.N, rnd = ctx.rnd, cageOf = new Int32Array(ctx.cnt).fill(-1), cages = [];
    rnd.shuffle(range(ctx.cnt)).forEach(function (s) {
      if (cageOf[s] >= 0) return;
      var r = rnd.next(), target = r < 0.12 ? 1 : r < 0.55 ? 2 : r < 0.88 ? 3 : 4;
      var cells = [s]; cageOf[s] = cages.length;
      while (cells.length < target) {
        var cand = []; cells.forEach(function (c) { ctx.nbr4[c].forEach(function (o) { if (cageOf[o] < 0) cand.push(o); }); });
        if (!cand.length) break; var o = rnd.pick(cand); cells.push(o); cageOf[o] = cages.length;
      }
      cages.push(cells);
    });
    return cages.map(function (cells) {
      cells.sort(function (a, b) { return a - b; });
      var v = cells.map(function (c) { return ctx.sol[c]; }), s = 0, pr = 1; v.forEach(function (x) { s += x; pr *= x; });
      var ops = ['+', 'x'];
      if (cells.length === 1) return { t: 'calc', cells: cells, op: '+', val: v[0] };
      if (cells.length === 2) { ops.push('-'); var mx = Math.max(v[0], v[1]), mi = Math.min(v[0], v[1]); if (mx % mi === 0) ops.push('/'); }
      var op = ctx.rnd.pick(ops);
      return { t: 'calc', cells: cells, op: op, val: op === '+' ? s : op === 'x' ? pr : op === '-' ? Math.abs(v[0] - v[1]) : Math.max(v[0], v[1]) / Math.min(v[0], v[1]) };
    });
  },
  lk: function (ctx, dens, uniq) {
    var L = ctx.L, N = ctx.N, lines = [];
    for (var i = 0; i < ctx.cnt; i++) {
      [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(function (d) {
        var r = ctx.pos[i][0], c = ctx.pos[i][1];
        var pr = r - d[0], pc = c - d[1];
        if (pr >= 0 && pc >= 0 && pr < L.R && pc < L.C) return;
        var cells = [], rr = r, cc = c;
        while (rr >= 0 && cc >= 0 && rr < L.R && cc < L.C) { cells.push(L.at[rr * L.C + cc]); rr += d[0]; cc += d[1]; }
        if (cells.length >= 2 && cells.length < N) lines.push({ cells: cells, dir: d });
      });
    }
    ctx.rnd.shuffle(lines);
    var want = Math.round(N * 1.6 * dens), out = [];
    // preferă liniile lungi
    lines.sort(function (a, b) { return (b.cells.length + ctx.rnd.next() * 3) - (a.cells.length + ctx.rnd.next() * 3); });
    for (var k = 0; k < lines.length && out.length < want; k++) {
      var s = 0, seen = {}, dup = false; lines[k].cells.forEach(function (c) { s += ctx.sol[c]; if (seen[ctx.sol[c]]) dup = true; seen[ctx.sol[c]] = 1; });
      if (uniq && dup) continue;
      out.push({ t: uniq ? 'luk' : 'lk', cells: lines[k].cells, sum: s, dir: lines[k].dir });
    }
    return out;
  },
  sandwich: function (ctx, dens) {
    var out = [], N = ctx.N;
    outsideLines(ctx).forEach(function (ln, i) {
      if (i % 2) return; // simetric: o singură parte
      if (!ctx.rnd.chance(Math.min(1, 0.8 * dens + 0.1))) return;
      var p = -1, q = -1; ln.cells.forEach(function (c, t) { if (ctx.sol[c] === 1) p = t; else if (ctx.sol[c] === N) q = t; });
      var s = 0; for (var t = Math.min(p, q) + 1; t < Math.max(p, q); t++) s += ctx.sol[ln.cells[t]];
      out.push({ t: 'sandwich', cells: ln.cells, sum: s, dir: ln.dir });
    });
    return out;
  },
  sky: function (ctx, dens) {
    var out = [];
    outsideLines(ctx).forEach(function (ln) {
      if (!ctx.rnd.chance(Math.min(1, 0.55 * dens + 0.05))) return;
      var mx = 0, n = 0; ln.cells.forEach(function (c) { if (ctx.sol[c] > mx) { mx = ctx.sol[c]; n++; } });
      out.push({ t: 'sky', cells: ln.cells, clue: n, dir: ln.dir });
    });
    return out;
  },
  xsum: function (ctx, dens) {
    var out = [];
    outsideLines(ctx).forEach(function (ln) {
      if (!ctx.rnd.chance(Math.min(1, 0.55 * dens + 0.05))) return;
      var k = ctx.sol[ln.cells[0]], s = 0; for (var t = 0; t < k; t++) s += ctx.sol[ln.cells[t]];
      out.push({ t: 'xsum', cells: ln.cells, sum: s, dir: ln.dir });
    });
    return out;
  },
  osum: function (ctx, dens) {
    var out = [];
    outsideLines(ctx).forEach(function (ln) {
      if (!ctx.rnd.chance(Math.min(1, 0.55 * dens + 0.05))) return;
      var cells = ln.cells.slice(0, 3), s = 0; cells.forEach(function (c) { s += ctx.sol[c]; });
      out.push({ t: 'osum', cells: cells, sum: s, dir: ln.dir });
    });
    return out;
  },
  thermo: function (ctx, dens) {
    var sol = ctx.sol, N = ctx.N, mx = Math.min(7, N);
    var lines = placeLines(ctx, 0.42 * dens, 3, mx, ctx.nbr4, function (s, len) {
      return findPath(ctx, s, len, ctx.nbr4, function (p, j) { return sol[j] > sol[p[p.length - 1]]; });
    });
    return lines.map(function (cells) { return { t: 'thermo', cells: cells }; });
  },
  arrow: function (ctx, dens) {
    var sol = ctx.sol, out = [], want = Math.round(ctx.N * 1.0 * dens + 1), tries = 0;
    while (out.length < want && tries++ < ctx.cnt * 8) {
      var b = ctx.rnd.int(ctx.cnt); if (ctx.used[b] || sol[b] < 3) continue;
      var target = sol[b], len = 2 + ctx.rnd.int(3);
      // DFS pe celule libere vecine king, suma = bulb
      var path = [b], inP = {}; inP[b] = 1, steps = 0;
      var steps = 0;
      var dfs = function (sum) {
        if (path.length === len + 1) return sum === target;
        var last = path[path.length - 1], cand = ctx.rnd.shuffle(ctx.nbr8[last].slice());
        for (var t = 0; t < cand.length; t++) {
          var j = cand[t]; if (ctx.used[j] || inP[j]) continue;
          if (sum + sol[j] > target) continue;
          path.push(j); inP[j] = 1;
          if (dfs(sum + sol[j])) return true;
          path.pop(); delete inP[j];
          if (++steps > 200) return false;
        }
        return false;
      };
      if (dfs(0)) { out.push({ t: 'arrow', cells: path.slice() }); path.forEach(function (c) { ctx.used[c] = 1; }); }
    }
    return out;
  },
  renban: function (ctx, dens) {
    var sol = ctx.sol, N = ctx.N;
    var lines = placeLines(ctx, 0.28 * dens, 3, Math.min(6, N), ctx.nbr4, function (s, len) {
      return findPath(ctx, s, len, ctx.nbr4, function (p, j) {
        var mn = sol[j], mxv = sol[j]; for (var i = 0; i < p.length; i++) { if (sol[p[i]] === sol[j]) return false; mn = Math.min(mn, sol[p[i]]); mxv = Math.max(mxv, sol[p[i]]); }
        return mxv - mn < len;
      }, function (p) { var mn = 99, mxv = 0; p.forEach(function (c) { mn = Math.min(mn, sol[c]); mxv = Math.max(mxv, sol[c]); }); return mxv - mn === p.length - 1; });
    });
    return lines.map(function (cells) { return { t: 'renban', cells: cells }; });
  },
  whisper: function (ctx, dens) {
    var sol = ctx.sol, th = Math.ceil(ctx.N / 2);
    var lines = placeLines(ctx, 0.3 * dens, 5, 9, ctx.nbr8, function (s, len) {
      return findPath(ctx, s, len, ctx.nbr8, function (p, j) { return Math.abs(sol[j] - sol[p[p.length - 1]]) >= th; });
    });
    return lines.map(function (cells) { return { t: 'whisper', cells: cells }; });
  },
  entropic: function (ctx, dens) { return classLines(ctx, dens, 'entropic', function (d) { return Math.floor((d - 1) * 3 / ctx.N); }); },
  modular: function (ctx, dens) { return classLines(ctx, dens, 'modular', function (d) { return (d - 1) % 3; }); },
  between: function (ctx, dens) {
    var sol = ctx.sol;
    var lines = placeLines(ctx, 0.28 * dens, 4, 7, ctx.nbr8, function (s, len) {
      var asc = ctx.rnd.chance(0.5), a = sol[s];
      return findPath(ctx, s, len, ctx.nbr8, function (p, j) {
        var last = p.length === len - 1;
        if (!last) return asc ? sol[j] > a : sol[j] < a;
        var m = a; for (var i = 1; i < p.length; i++) m = asc ? Math.max(m === a ? 0 : m, sol[p[i]]) : Math.min(m === a ? 99 : m, sol[p[i]]);
        var mm = asc ? 0 : 99; for (i = 1; i < p.length; i++) mm = asc ? Math.max(mm, sol[p[i]]) : Math.min(mm, sol[p[i]]);
        return asc ? sol[j] > mm : sol[j] < mm;
      });
    });
    return lines.map(function (cells) { return { t: 'between', cells: cells }; });
  },
  palin: function (ctx, dens) {
    var sol = ctx.sol, out = [], want = Math.round(ctx.N * 0.5 * dens + 1), tries = 0;
    while (out.length < want && tries++ < ctx.cnt * 10) {
      var c0 = ctx.rnd.int(ctx.cnt); if (ctx.used[c0]) continue;
      var pairs = 2 + ctx.rnd.int(3), left = [], right = [], inP = {};
      inP[c0] = 1;
      var cur = [c0, c0];
      var ok = true;
      for (var p = 0; p < pairs && ok; p++) {
        var cand = [];
        ctx.nbr8[cur[0]].forEach(function (a) {
          if (ctx.used[a] || inP[a]) return;
          ctx.nbr8[cur[1]].forEach(function (b) { if (b !== a && !ctx.used[b] && !inP[b] && sol[a] === sol[b]) cand.push([a, b]); });
        });
        if (!cand.length) { ok = false; break; }
        var pr = ctx.rnd.pick(cand); left.push(pr[0]); right.push(pr[1]); inP[pr[0]] = 1; inP[pr[1]] = 1; cur = pr;
      }
      if (!ok) continue;
      var cells = left.slice().reverse().concat([c0]).concat(right);
      out.push({ t: 'palin', cells: cells }); cells.forEach(function (c) { ctx.used[c] = 1; });
    }
    return out;
  },
  kropki: function (ctx) {
    var marks = [], sol = ctx.sol;
    for (var i = 0; i < ctx.cnt; i++) ctx.nbr4[i].forEach(function (j) {
      if (j < i) return; var a = sol[i], b = sol[j], w = Math.abs(a - b) === 1, bl = a === 2 * b || b === 2 * a;
      if (w && bl) marks.push({ a: i, b: j, m: ctx.rnd.chance(0.5) ? 'w' : 'b' }); else if (w) marks.push({ a: i, b: j, m: 'w' }); else if (bl) marks.push({ a: i, b: j, m: 'b' });
    });
    return [{ t: 'dots', kind: 'kropki', marks: marks }];
  },
  consec: function (ctx) {
    var marks = [], sol = ctx.sol;
    for (var i = 0; i < ctx.cnt; i++) ctx.nbr4[i].forEach(function (j) { if (j > i && Math.abs(sol[i] - sol[j]) === 1) marks.push({ a: i, b: j, m: 'c' }); });
    return [{ t: 'dots', kind: 'consec', marks: marks }];
  },
  xv: function (ctx) {
    var marks = [], sol = ctx.sol, N = ctx.N;
    for (var i = 0; i < ctx.cnt; i++) ctx.nbr4[i].forEach(function (j) {
      if (j < i) return; var s = sol[i] + sol[j];
      if (s === N + 1) marks.push({ a: i, b: j, m: 'x' }); else if (s === 5) marks.push({ a: i, b: j, m: 'v' });
    });
    return [{ t: 'dots', kind: 'xv', marks: marks }];
  },
  lt: function (ctx, dens) {
    var marks = [], sol = ctx.sol;
    for (var i = 0; i < ctx.cnt; i++) ctx.nbr4[i].forEach(function (j) {
      if (j < i || !ctx.rnd.chance(0.32 * dens + 0.04)) return;
      marks.push(sol[i] < sol[j] ? { a: i, b: j } : { a: j, b: i });
    });
    return [{ t: 'lt', marks: marks }];
  },
  batt: function (ctx) {
    var L = ctx.L, marks = [], sol = ctx.sol;
    for (var r = 0; r < L.R - 1; r++) for (var c = 0; c < L.C - 1; c++) {
      var a = L.at[r * L.C + c], b = L.at[r * L.C + c + 1], cx = L.at[(r + 1) * L.C + c], d = L.at[(r + 1) * L.C + c + 1];
      if (a < 0 || b < 0 || cx < 0 || d < 0) continue;
      if ((sol[a] & 1) === (sol[d] & 1) && (sol[b] & 1) === (sol[cx] & 1) && (sol[a] & 1) !== (sol[b] & 1)) marks.push(a);
    }
    return [{ t: 'batt', marks: marks }];
  },
  quad: function (ctx, dens) {
    var L = ctx.L, out = [], sol = ctx.sol;
    for (var r = 0; r < L.R - 1; r++) for (var c = 0; c < L.C - 1; c++) {
      if (!ctx.rnd.chance(0.34 * dens + 0.04)) continue;
      var cells = [L.at[r * L.C + c], L.at[r * L.C + c + 1], L.at[(r + 1) * L.C + c], L.at[(r + 1) * L.C + c + 1]];
      if (cells.some(function (x) { return x < 0; })) continue;
      var ds = ctx.rnd.shuffle(cells.map(function (x) { return sol[x]; })).slice(0, 2 + ctx.rnd.int(3)).sort(function (x, y) { return x - y; });
      out.push({ t: 'quad', cells: cells, digits: ds });
    }
    return out;
  },
  evenodd: function (ctx, dens) {
    var marks = [];
    for (var i = 0; i < ctx.cnt; i++) if (ctx.rnd.chance(0.38 * dens + 0.06)) marks.push([i, ctx.sol[i] % 2 === 0 ? 'e' : 'o']);
    return [{ t: 'parity', marks: marks }];
  }
};
/* ---- variante adăugate în 1.1 ---- */
function tailSearch(ctx, start, len, partOk, finalOk) {
  var path = [], inP = {}, steps = 0; inP[start] = 1;
  function dfs(last) {
    if (path.length === len) return finalOk(path);
    var cand = ctx.rnd.shuffle(ctx.nbr8[last].slice());
    for (var t = 0; t < cand.length; t++) {
      var j = cand[t]; if (ctx.used[j] || inP[j]) continue;
      path.push(j);
      if (partOk(path)) { inP[j] = 1; if (dfs(j)) return true; delete inP[j]; }
      path.pop();
      if (++steps > 300) return false;
    }
    return false;
  }
  return dfs(start) ? path.slice() : null;
}
function markUsed(ctx, cells) { cells.forEach(function (c) { ctx.used[c] = 1; }); }
function sumOf(ctx, cells) { var s = 0; cells.forEach(function (c) { s += ctx.sol[c]; }); return s; }
CLUES.ratio = function (ctx) {
  var marks = [], sol = ctx.sol;
  for (var i = 0; i < ctx.cnt; i++) ctx.nbr4[i].forEach(function (j) { if (j > i && (sol[i] === 3 * sol[j] || sol[j] === 3 * sol[i])) marks.push({ a: i, b: j, m: 'r' }); });
  return [{ t: 'dots', kind: 'ratio', marks: marks }];
};
/* Ceață: ce se vede depinde de celulele cunoscute (date sau completate corect) și vecinii lor */
function fogLit(L, known) {
  var lit = new Uint8Array(L.count), i;
  for (i = 0; i < L.count; i++) if (known[i] > 0) { lit[i] = 1; L.nbr8[i].forEach(function (j) { lit[j] = 1; }); }
  return lit;
}
function visibleCons(cons, lit) {
  var out = [];
  cons.forEach(function (c) {
    if (c.cells) { if (c.cells.some(function (x) { return lit[x]; })) out.push(c); return; }
    if (c.a) { if (c.a.concat(c.b).some(function (x) { return lit[x]; })) out.push(c); return; }
    if (c.marks && c.t === 'lt') { var m = c.marks.filter(function (q) { return lit[q.a] || lit[q.b]; }); if (m.length) out.push({ t: c.t, marks: m }); return; }
    if (c.marks && (c.t === 'parity' || c.t === 'minmax')) { var m2 = c.marks.filter(function (q) { return lit[q[0]]; }); if (m2.length) out.push({ t: c.t, marks: m2 }); return; }
    out.push(c);
  });
  return out;
}
function fogComplete(P, L, sol, giv, rnd) {
  for (var guard = 0; guard < L.count + 2; guard++) {
    var known = giv.slice(), changed = true, i;
    while (changed) {
      changed = false;
      var Sv = makeSolver(Object.assign({}, P, { cons: visibleCons(P.cons, fogLit(L, known)), givens: null }));
      var dom = Sv.candidates(known);
      if (!dom) throw new Error('ceață: contradicție');
      for (i = 0; i < L.count; i++) if (!known[i] && (dom[i] & (dom[i] - 1)) === 0) { known[i] = bitIndex(dom[i]) + 1; changed = true; }
    }
    var und = []; for (i = 0; i < L.count; i++) if (!known[i]) und.push(i);
    if (!und.length) return giv;
    var lit2 = fogLit(L, known), near = und.filter(function (x) { return lit2[x]; });
    var pick = rnd.pick(near.length ? near : und); giv[pick] = sol[pick];
  }
  return giv;
}
CLUES.whisper4 = function (ctx, dens) {
  var sol = ctx.sol;
  return placeLines(ctx, 0.3 * dens, 5, 9, ctx.nbr8, function (s, len) {
    return findPath(ctx, s, len, ctx.nbr8, function (p, j) { return Math.abs(sol[j] - sol[p[p.length - 1]]) >= 4; });
  }).map(function (cells) { return { t: 'whisper', cells: cells, th: 4 }; });
};
CLUES.nabner = function (ctx, dens) {
  var sol = ctx.sol, mx = ctx.N >= 9 ? 5 : 3;
  return placeLines(ctx, 0.3 * dens, 3, mx, ctx.nbr8, function (s, len) {
    return findPath(ctx, s, len, ctx.nbr8, function (p, j) { for (var i = 0; i < p.length; i++) if (Math.abs(sol[p[i]] - sol[j]) <= 1) return false; return true; });
  }).map(function (cells) { return { t: 'nabner', cells: cells }; });
};
CLUES.slowthermo = function (ctx, dens) {
  var sol = ctx.sol;
  return placeLines(ctx, 0.42 * dens, 3, Math.min(7, ctx.N), ctx.nbr8, function (s, len) {
    return findPath(ctx, s, len, ctx.nbr8, function (p, j) { return sol[j] >= sol[p[p.length - 1]]; });
  }).map(function (cells) { return { t: 'slowthermo', cells: cells }; });
};
function parityLines(type, same) {
  return function (ctx, dens) {
    var sol = ctx.sol;
    return placeLines(ctx, 0.36 * dens, 4, same ? 6 : 8, ctx.nbr8, function (s, len) {
      return findPath(ctx, s, len, ctx.nbr8, function (p, j) { return ((sol[j] & 1) === (sol[p[p.length - 1]] & 1)) === same; });
    }).map(function (cells) { return { t: type, cells: cells }; });
  };
}
CLUES.parityline = parityLines('parityline', false);
CLUES.sameparity = parityLines('sameparity', true);
function onlyParity(par) {
  return function (ctx, dens) {
    var marks = [];
    for (var i = 0; i < ctx.cnt; i++) if (ctx.sol[i] % 2 === par && ctx.rnd.chance(0.6 * dens + 0.1)) marks.push([i, par ? 'o' : 'e']);
    return [{ t: 'parity', marks: marks }];
  };
}
CLUES.evenonly = onlyParity(0);
CLUES.oddonly = onlyParity(1);
CLUES.luk = function (ctx, dens) { return CLUES.lk(ctx, dens, true); };
CLUES.fortress = function (ctx, dens) {
  var sol = ctx.sol, cells = [];
  for (var i = 0; i < ctx.cnt; i++) {
    var top = ctx.nbr4[i].every(function (o) { return sol[i] > sol[o]; });
    if (top && ctx.rnd.chance(Math.min(1, 0.8 * dens + 0.1))) cells.push(i);
  }
  return cells.length ? [{ t: 'fortress', cells: cells }] : [];
};
CLUES.minmax = function (ctx, dens) {
  var sol = ctx.sol, marks = [];
  for (var i = 0; i < ctx.cnt; i++) {
    var mn = ctx.nbr4[i].every(function (o) { return sol[i] < sol[o]; }), mx = ctx.nbr4[i].every(function (o) { return sol[i] > sol[o]; });
    if ((mn || mx) && ctx.rnd.chance(Math.min(1, 0.75 * dens + 0.1))) marks.push([i, mn ? 'min' : 'max']);
  }
  return marks.length ? [{ t: 'minmax', marks: marks }] : [];
};
CLUES.lockout = function (ctx, dens) {
  var sol = ctx.sol;
  return placeLines(ctx, 0.26 * dens, 3, 7, ctx.nbr4, function (s, len) {
    return findPath(ctx, s, len, ctx.nbr4, function () { return true; }, function (p) {
      var a = sol[p[0]], b = sol[p[p.length - 1]], lo = Math.min(a, b), hi = Math.max(a, b);
      if (hi - lo < 4) return false;
      for (var i = 1; i < p.length - 1; i++) if (sol[p[i]] >= lo && sol[p[i]] <= hi) return false;
      return true;
    }, 400);
  }).map(function (cells) { return { t: 'lockout', cells: cells }; });
};
CLUES.doublearrow = function (ctx, dens) {
  var sol = ctx.sol, out = [], want = Math.round(ctx.N * 0.8 * dens + 1), tries = 0;
  while (out.length < want && tries++ < ctx.cnt * 10) {
    var b = ctx.rnd.int(ctx.cnt); if (ctx.used[b]) continue;
    var path = [b], inP = {}, steps = 0, sum = 0; inP[b] = 1;
    var dfs = function () {
      var last = path[path.length - 1], cand = ctx.rnd.shuffle(ctx.nbr8[last].slice());
      for (var t = 0; t < cand.length; t++) {
        var j = cand[t]; if (ctx.used[j] || inP[j]) continue;
        if (path.length >= 2 && sol[b] + sol[j] === sum) { path.push(j); return true; }
        if (path.length >= 5 || sum + sol[j] > 18) continue;
        path.push(j); inP[j] = 1; sum += sol[j];
        if (dfs()) return true;
        path.pop(); delete inP[j]; sum -= sol[j];
        if (++steps > 200) return false;
      }
      return false;
    };
    if (dfs()) { out.push({ t: 'darrow', cells: path.slice() }); markUsed(ctx, path); }
  }
  return out;
};
function arrowKind(type, lenMin, lenSpan, bulbOk, partOk, finalOk) {
  return function (ctx, dens) {
    var sol = ctx.sol, out = [], want = Math.round(ctx.N * 0.9 * dens + 1), tries = 0;
    while (out.length < want && tries++ < ctx.cnt * 10) {
      var b = ctx.rnd.int(ctx.cnt); if (ctx.used[b] || !bulbOk(sol[b])) continue;
      var len = lenMin + ctx.rnd.int(lenSpan), v = sol[b];
      var tail = tailSearch(ctx, b, len, function (p) { return partOk(p, v, ctx, len); }, function (p) { return finalOk(p, v, ctx, len); });
      if (tail) { var cells = [b].concat(tail); out.push({ t: type, cells: cells }); markUsed(ctx, cells); }
    }
    return out;
  };
}
function sumPath(ctx, p) { var s = 0; p.forEach(function (c) { s += ctx.sol[c]; }); return s; }
function prodPath(ctx, p) { var s = 1; p.forEach(function (c) { s *= ctx.sol[c]; }); return s; }
CLUES.avgarrow = arrowKind('avgarrow', 2, 3, function (v) { return v >= 2; },
  function (p, v, ctx, len) { return sumPath(ctx, p) <= len * v; }, function (p, v, ctx, len) { return sumPath(ctx, p) === len * v; });
CLUES.prodarrow = arrowKind('prodarrow', 2, 2, function (v) { return v >= 2; },
  function (p, v, ctx) { return v % prodPath(ctx, p) === 0; }, function (p, v, ctx) { return prodPath(ctx, p) === v; });
CLUES.pillarrow = function (ctx, dens) {
  var sol = ctx.sol, out = [], want = Math.round(ctx.N * 0.5 * dens + 1), tries = 0;
  while (out.length < want && tries++ < ctx.cnt * 12) {
    var a = ctx.rnd.int(ctx.cnt); if (ctx.used[a] || sol[a] > 4) continue;
    var b = ctx.rnd.pick(ctx.nbr4[a]); if (ctx.used[b]) continue;
    var T = 10 * sol[a] + sol[b], len = 3 + ctx.rnd.int(3);
    if (T > 9 * len || T < len) continue;
    ctx.used[a] = 1;
    var tail = tailSearch(ctx, b, len, function (p) { return sumPath(ctx, p) < T + 1 && sumPath(ctx, p) + (len - p.length) <= T; }, function (p) { return sumPath(ctx, p) === T; });
    ctx.used[a] = 0;
    if (tail) { var cells = [a, b].concat(tail); out.push({ t: 'pillarrow', cells: cells }); markUsed(ctx, cells); }
  }
  return out;
};
CLUES.zipper = function (ctx, dens) {
  var sol = ctx.sol, out = [], want = Math.round(ctx.N * 0.5 * dens + 1), tries = 0;
  while (out.length < want && tries++ < ctx.cnt * 12) {
    var c0 = ctx.rnd.int(ctx.cnt); if (ctx.used[c0] || sol[c0] < 3) continue;
    var pairs = 1 + ctx.rnd.int(3), left = [], right = [], inP = {}, cur = [c0, c0], ok = true;
    inP[c0] = 1;
    for (var p = 0; p < pairs && ok; p++) {
      var cand = [];
      ctx.nbr8[cur[0]].forEach(function (a) {
        if (ctx.used[a] || inP[a]) return;
        ctx.nbr8[cur[1]].forEach(function (b) { if (b !== a && !ctx.used[b] && !inP[b] && sol[a] + sol[b] === sol[c0]) cand.push([a, b]); });
      });
      if (!cand.length) { ok = p > 0; break; }
      var pr = ctx.rnd.pick(cand); left.push(pr[0]); right.push(pr[1]); inP[pr[0]] = 1; inP[pr[1]] = 1; cur = pr;
    }
    if (!ok || !left.length) continue;
    var cells = left.slice().reverse().concat([c0]).concat(right);
    out.push({ t: 'zipper', cells: cells }); markUsed(ctx, cells);
  }
  return out;
};
CLUES.rossini = function (ctx, dens) {
  var out = [], sol = ctx.sol;
  outsideLines(ctx).forEach(function (ln) {
    if (!ctx.rnd.chance(Math.min(1, 0.6 * dens + 0.05))) return;
    var c3 = ln.cells.slice(0, 3), a = sol[c3[0]], b = sol[c3[1]], c = sol[c3[2]];
    if (a < b && b < c) out.push({ t: 'rossini', cells: c3, inc: true, dir: ln.dir });
    else if (a > b && b > c) out.push({ t: 'rossini', cells: c3, inc: false, dir: ln.dir });
  });
  return out;
};
CLUES.outside = function (ctx, dens) {
  var out = [], sol = ctx.sol;
  outsideLines(ctx).forEach(function (ln) {
    if (!ctx.rnd.chance(Math.min(1, 0.5 * dens + 0.05))) return;
    var c3 = ln.cells.slice(0, 3), r = ctx.rnd.next(), want = r < 0.3 ? 1 : r < 0.8 ? 2 : 3;
    var ds = ctx.rnd.shuffle(c3.map(function (x) { return sol[x]; })).slice(0, want).sort(function (x, y) { return x - y; });
    out.push({ t: 'outside', cells: c3, digits: ds, dir: ln.dir });
  });
  return out;
};
CLUES.regionsum = function (ctx, dens) {
  var sol = ctx.sol, N = ctx.N, regOf = function (x) { return ctx.P.regions ? ctx.P.regions[x] : ctx.L.boxId[x]; };
  return placeLines(ctx, 0.3 * dens, 5, N >= 9 ? 9 : 8, ctx.nbr4, function (s, len) {
    return findPath(ctx, s, len, ctx.nbr4, function () { return true; }, function (p) {
      var sums = {}, n = 0, v = null;
      p.forEach(function (c) { var r = regOf(c); if (sums[r] === undefined) { sums[r] = 0; n++; } sums[r] += sol[c]; });
      if (n < 2) return false;
      for (var r in sums) { if (v === null) v = sums[r]; else if (sums[r] !== v) return false; }
      return true;
    }, 500);
  }).map(function (cells) { return { t: 'regsum', cells: cells }; });
};
function pairLine(type, lo, hi, test, nb) {
  return function (ctx, dens) {
    var sol = ctx.sol, N = ctx.N, nbrs = nb === 4 ? ctx.nbr4 : ctx.nbr8;
    return placeLines(ctx, 0.32 * dens, lo, hi, nbrs, function (s, len) {
      return findPath(ctx, s, len, nbrs, function (p, j) { return test(sol, p, j, N); });
    }).map(function (cells) { return { t: type, cells: cells }; });
  };
}
CLUES.legato = pairLine('legato', 4, 8, function (s, p, j) { return Math.abs(s[j] - s[p[p.length - 1]]) <= 2; });
CLUES.consonant = pairLine('consonant', 4, 8, function (s, p, j) { var d = Math.abs(s[j] - s[p[p.length - 1]]); return d >= 2 && d <= 4; });
CLUES.fixstep = pairLine('fixstep', 4, 7, function (s, p, j) { return Math.abs(s[j] - s[p[p.length - 1]]) === 3; });
CLUES.compline = pairLine('compline', 3, 6, function (s, p, j, N) { return s[j] + s[p[p.length - 1]] === N + 1; });
CLUES.zigzag = pairLine('zigzag', 4, 8, function (s, p, j) { var l = p.length; return l < 2 || (s[j] - s[p[l - 1]]) * (s[p[l - 1]] - s[p[l - 2]]) < 0; });
CLUES.fibonacci = pairLine('fibonacci', 3, 5, function (s, p, j) { var l = p.length; return l < 2 || s[j] === s[p[l - 1]] + s[p[l - 2]]; });
CLUES.steps = pairLine('steps', 3, 5, function (s, p, j) { var l = p.length; return l < 2 || s[j] - s[p[l - 1]] > s[p[l - 1]] - s[p[l - 2]]; });
CLUES.progression = pairLine('progression', 3, 6, function (s, p, j) { var l = p.length; return l < 2 || 2 * s[p[l - 1]] === s[p[l - 2]] + s[j]; });
CLUES.echo = pairLine('echo', 4, 8, function (s, p, j) { var l = p.length; return l < 3 || s[j] === s[p[l - 3]]; });
CLUES.primeline = pairLine('primeline', 4, 8, function (s, p, j) { return [2, 3, 5, 7].indexOf(s[j]) >= 0 && (p.length > 1 || [2, 3, 5, 7].indexOf(s[p[0]]) >= 0); });
CLUES.divisible = function (ctx, dens) {
  var sol = ctx.sol, out = [], want = Math.round(ctx.N * 0.5 * dens + 1), tries = 0, ms = [3, 4, 7, 9, 11, 13];
  while (out.length < want && tries++ < ctx.cnt * 12) {
    var s0 = ctx.rnd.int(ctx.cnt); if (ctx.used[s0]) continue;
    var len = 3 + ctx.rnd.int(2), m = ctx.rnd.pick(ms);
    var p = findPath(ctx, s0, len, ctx.nbr4, function () { return true; }, function (pp) { var n = 0; pp.forEach(function (c) { n = n * 10 + sol[c]; }); return n % m === 0; }, 120);
    if (p) { out.push({ t: 'divisible', cells: p, m: m }); markUsed(ctx, p); }
  }
  return out;
};
['kropki', 'xv', 'consec'].forEach(function (kd) {
  CLUES[kd + 'pos'] = function (ctx) {
    var full = CLUES[kd](ctx)[0], marks = full.marks.filter(function () { return ctx.rnd.chance(0.55); });
    return [{ t: 'dots', kind: kd, pos: true, marks: marks }];
  };
});
CLUES.diff = function (ctx, dens) {
  var marks = [], sol = ctx.sol;
  for (var i = 0; i < ctx.cnt; i++) ctx.nbr4[i].forEach(function (j) { if (j > i && ctx.rnd.chance(0.3 * dens + 0.05)) marks.push({ a: i, b: j, m: Math.abs(sol[i] - sol[j]) }); });
  return [{ t: 'dots', kind: 'diff', marks: marks }];
};
function marginClue(kind, prob, once, minN) {
  return function (ctx, dens) {
    var out = [];
    outsideLines(ctx).forEach(function (ln, i) {
      if (once && i % 2) return;
      if (!ctx.rnd.chance(Math.min(1, prob * dens + 0.05))) return;
      var a = ln.cells.map(function (x) { return ctx.sol[x]; });
      out.push({ t: 'mclue', kind: kind, cells: ln.cells, val: mval(kind, a, ctx.N), dir: ln.dir });
    });
    return out;
  };
}
['radar', 'subsol', 'prodmargin', 'diffmargin', 'ascents', 'inversions', 'cycles', 'fixedpts', 'altsum'].forEach(function (k) { CLUES[k] = marginClue(k, 0.5, false); });
['sandnum', 'sandpar', 'sand2'].forEach(function (k) { CLUES[k] = marginClue(k, 0.7, true); });
CLUES.dxsum = function (ctx, dens) {
  var L = ctx.L, N = ctx.N, lines = [];
  for (var i = 0; i < ctx.cnt; i++) [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(function (d) {
    var r = ctx.pos[i][0], c = ctx.pos[i][1], pr = r - d[0], pc = c - d[1];
    if (pr >= 0 && pc >= 0 && pr < L.R && pc < L.C) return;
    var cells = [], rr = r, cc = c;
    while (rr >= 0 && cc >= 0 && rr < L.R && cc < L.C) { cells.push(L.at[rr * L.C + cc]); rr += d[0]; cc += d[1]; }
    if (cells.length >= 3) lines.push({ cells: cells, dir: d });
  });
  ctx.rnd.shuffle(lines);
  var want = Math.round(N * 1.5 * dens), out = [];
  for (var k = 0; k < lines.length && out.length < want; k++) {
    var a = lines[k].cells.map(function (x) { return ctx.sol[x]; });
    out.push({ t: 'mclue', kind: 'dxsum', cells: lines[k].cells, val: mval('dxsum', a, N), dir: lines[k].dir });
  }
  return out;
};
function cellMarks(type, test, prob, base) {
  return function (ctx, dens) {
    var marks = [];
    for (var i = 0; i < ctx.cnt; i++) if (ctx.rnd.chance(prob * dens + 0.04)) { var m = test(ctx, i); if (m) marks.push([i].concat(m)); }
    return marks.length ? [{ t: type, marks: marks }] : [];
  };
}
CLUES.relief = cellMarks('relief', function (ctx, i) { var t = 0; ctx.nbr4[i].forEach(function (o) { if (ctx.sol[o] < ctx.sol[i]) t++; }); return [t]; }, 0.3);
CLUES.oddsweeper = cellMarks('oddsweeper', function (ctx, i) { var t = 0; ctx.nbr8[i].forEach(function (o) { if (ctx.sol[o] & 1) t++; }); return [t]; }, 0.3);
CLUES.compass = cellMarks('compass', function (ctx, i) {
  var best = -1, bv = 0, tie = false;
  ctx.nbr8[i].forEach(function (o) { if (ctx.sol[o] > bv) { bv = ctx.sol[o]; best = o; tie = false; } else if (ctx.sol[o] === bv) tie = true; });
  if (tie || best < 0) return null;
  return [ctx.pos[best][0] - ctx.pos[i][0], ctx.pos[best][1] - ctx.pos[i][1]];
}, 0.35);
CLUES.quadsum = function (ctx, dens) {
  var L = ctx.L, out = [];
  for (var r = 0; r < L.R - 1; r++) for (var c = 0; c < L.C - 1; c++) {
    if (!ctx.rnd.chance(0.3 * dens + 0.04)) continue;
    var cells = [L.at[r * L.C + c], L.at[r * L.C + c + 1], L.at[(r + 1) * L.C + c], L.at[(r + 1) * L.C + c + 1]];
    if (cells.some(function (x) { return x < 0; })) continue;
    out.push({ t: 'quadsum', cells: cells, sum: sumOf(ctx, cells) });
  }
  return out;
};
CLUES.stone = function (ctx, dens) {
  var L = ctx.L, out = [];
  for (var r = 0; r < L.R - 1; r++) for (var c = 0; c < L.C - 1; c++) {
    if (!ctx.rnd.chance(0.3 * dens + 0.04)) continue;
    var cells = [L.at[r * L.C + c], L.at[r * L.C + c + 1], L.at[(r + 1) * L.C + c], L.at[(r + 1) * L.C + c + 1]];
    if (cells.some(function (x) { return x < 0; })) continue;
    var bxs = {}; cells.forEach(function (x) { bxs[L.boxId[x]] = 1; });
    if (Object.keys(bxs).length < 2) continue; /* un bloc 2×2 într-o singură casetă ar fi vacuu */
    var ds = {}; cells.forEach(function (x) { ds[ctx.sol[x]] = 1; });
    if (Object.keys(ds).length === 4) out.push({ t: 'stone', cells: cells });
  }
  return out;
};
CLUES.domino = function (ctx, dens) {
  var out = [], want = Math.round(ctx.cnt * 0.1 * dens + 2), tries = 0;
  while (out.length < want && tries++ < ctx.cnt * 8) {
    var a = ctx.rnd.int(ctx.cnt); if (ctx.used[a]) continue;
    var b = ctx.rnd.pick(ctx.nbr4[a]); if (ctx.used[b]) continue;
    out.push({ t: 'domino', cells: [a, b], digits: [ctx.sol[a], ctx.sol[b]] }); markUsed(ctx, [a, b]);
  }
  return out;
};
CLUES.pillsq = function (ctx, dens) {
  var out = [], sq = { 16: 1, 25: 1, 36: 1, 49: 1, 64: 1, 81: 1 };
  for (var a = 0; a < ctx.cnt; a++) ctx.nbr4[a].forEach(function (b) {
    if (ctx.used[a] || ctx.used[b]) return;
    if (sq[10 * ctx.sol[a] + ctx.sol[b]] && ctx.rnd.chance(Math.min(1, 0.8 * dens))) { out.push({ t: 'pillsq', cells: [a, b] }); markUsed(ctx, [a, b]); }
  });
  return out;
};
function isPrimeN(t) { if (t < 2) return false; for (var d = 2; d * d <= t; d++) if (t % d === 0) return false; return true; }
CLUES.primecage = function (ctx, dens) {
  return CLUES.killer(ctx, dens).filter(function (c) { return c.cells.length >= 2 && isPrimeN(c.sum) && ctx.rnd.chance(0.9); }).map(function (c) { return { t: 'pcage', cells: c.cells }; });
};
CLUES.balcage = function (ctx, dens) {
  var out = [], want = Math.round(ctx.N * 0.6 * dens + 1), tries = 0;
  while (out.length < want && tries++ < ctx.cnt * 25) {
    var s0 = ctx.rnd.int(ctx.cnt); if (ctx.used[s0]) continue;
    var len = 3 + ctx.rnd.int(2);
    var p = findPath(ctx, s0, len, ctx.nbr4, function () { return true; }, function (pp) { var t = 0, pr = 1; pp.forEach(function (c) { t += ctx.sol[c]; pr *= ctx.sol[c]; }); return t === pr; }, 60);
    if (p) { out.push({ t: 'bcage', cells: p }); markUsed(ctx, p); }
  }
  return out;
};
CLUES.doubler = function (ctx, dens) {
  return CLUES.killer(ctx, dens).map(function (c) {
    if (c.cells.length >= 2 && ctx.rnd.chance(0.45)) {
      var d = ctx.rnd.pick(c.cells); c.dbl = [d]; c.sum += ctx.sol[d];
    }
    return c;
  });
};
CLUES.greco = function () { return [{ t: 'orth' }]; };
/* indicii construite ÎNAINTE de grila rezolvată (soluția trebuie să le respecte) */
var PRE = {
  index: function () { return [{ t: 'index' }]; },
  clonemir: function (L, rnd) { return PRE.clone(L, rnd, true); },
  clone: function (L, rnd, mirror) {
    var N = L.N, out = [], usedC = {}, pairs = N >= 9 ? 2 : 1, peerOf = function (a, b) { return L.pos[a][0] === L.pos[b][0] || L.pos[a][1] === L.pos[b][1] || L.boxId[a] === L.boxId[b]; };
    for (var pi = 0; pi < pairs; pi++) {
      for (var tries = 0; tries < 400; tries++) {
        var size = 3 + rnd.int(N >= 9 ? 3 : 2), s0 = rnd.int(L.count);
        if (usedC[s0]) continue;
        var shape = [s0], inS = {}; inS[s0] = 1;
        while (shape.length < size) {
          var cand = []; shape.forEach(function (c) { L.nbr4[c].forEach(function (o) { if (!inS[o] && !usedC[o]) cand.push(o); }); });
          if (!cand.length) break; var o = rnd.pick(cand); shape.push(o); inS[o] = 1;
        }
        if (shape.length < size) continue;
        var dr = rnd.int(2 * N - 1) - (N - 1), dc = rnd.int(2 * N - 1) - (N - 1); if (!dr && !dc) continue;
        var img = [], good = true, cmin = 99, cmax = -1;
        shape.forEach(function (x) { cmin = Math.min(cmin, L.pos[x][1]); cmax = Math.max(cmax, L.pos[x][1]); });
        for (var k = 0; k < shape.length && good; k++) {
          var r2 = L.pos[shape[k]][0] + dr, c2 = (mirror ? cmin + cmax - L.pos[shape[k]][1] : L.pos[shape[k]][1]) + dc;
          if (r2 < 0 || c2 < 0 || r2 >= L.R || c2 >= L.C) { good = false; break; }
          var idx = L.at[r2 * L.C + c2];
          if (idx < 0 || usedC[idx] || inS[idx] || peerOf(shape[k], idx)) good = false; else img.push(idx);
        }
        if (!good) continue;
        shape.concat(img).forEach(function (c) { usedC[c] = 1; });
        out.push({ t: 'clone', a: shape, b: img }); break;
      }
    }
    return out;
  }
};
['symcomp', 'symparity', 'cgrav', 'lexrows', 'extremes', 'boxbalance', 'lonely5', 'nolonely', 'noprog', 'semimagic'].forEach(function (n) { PRE[n] = function () { return [{ t: n }]; }; });
/* Strimko: partiția grilei în N lanțuri (conexe, 8-vecini), fiecare cu toate cifrele */
function genChains(N, sol, rnd) {
  var cells = N * N, owner = new Int32Array(cells).fill(-1), chains = [], steps = 0, i;
  var NB = [];
  for (i = 0; i < cells; i++) { var a = [], r = Math.floor(i / N), c = i % N; for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) { if (!dr && !dc) continue; var r2 = r + dr, c2 = c + dc; if (r2 >= 0 && c2 >= 0 && r2 < N && c2 < N) a.push(r2 * N + c2); } NB.push(a); }
  function build(ci) {
    if (ci === N) return true;
    var s = -1; for (var q = 0; q < cells; q++) if (owner[q] < 0) { s = q; break; }
    var path = [s], digs = 1 << (sol[s] - 1); owner[s] = ci;
    function grow() {
      if (++steps > 30000) return false;
      if (path.length === N) { chains.push(path.slice()); if (build(ci + 1)) return true; chains.pop(); return false; }
      var last = path[path.length - 1], cand = rnd.shuffle(NB[last].filter(function (j) { return owner[j] < 0 && !((digs >> (sol[j] - 1)) & 1); }));
      for (var t = 0; t < cand.length; t++) {
        var j = cand[t], bit = 1 << (sol[j] - 1);
        owner[j] = ci; path.push(j); digs |= bit;
        if (grow()) return true;
        path.pop(); digs &= ~bit; owner[j] = -1;
        if (steps > 30000) return false;
      }
      return false;
    }
    if (grow()) return true;
    owner[s] = -1; return false;
  }
  if (!build(0)) return null;
  return { chains: chains, regions: Array.prototype.slice.call(owner) };
}
function classLines(ctx, dens, type, cls) {
  var sol = ctx.sol;
  var lines = placeLines(ctx, 0.32 * dens, 4, 8, ctx.nbr8, function (s, len) {
    return findPath(ctx, s, len, ctx.nbr8, function (p, j) {
      var l = p.length; if (cls(sol[j]) === cls(sol[p[l - 1]])) return false;
      if (l >= 2 && (cls(sol[j]) === cls(sol[p[l - 2]]))) return false; return true;
    });
  });
  return lines.map(function (cells) { return { t: type, cells: cells }; });
}

/* ---------- presetări (variante jucabile) ---------- */
var PRESETS = {
  clasic:   { sizes: [9, 4, 6, 8, 12, 16, 25], mods: [], clues: [], hard: 1 },
  wordoku:  { sizes: [9, 4, 6, 8, 12, 16], mods: [], clues: [], hard: 1 },
  latin:    { sizes: [9, 4, 5, 6, 7, 8], mods: ['latin'], clues: [], hard: 0.9 },
  diag:     { sizes: [9, 4, 6], mods: ['diag'], clues: [], hard: 0.85 },
  hyper:    { sizes: [9], mods: ['hyper'], clues: [], hard: 0.8 },
  jigsaw:   { sizes: [9, 4, 5, 6, 7, 8], jigsaw: true, mods: [], clues: [], hard: 0.95 },
  dg:       { sizes: [9, 4, 6], mods: ['dg'], clues: [], hard: 0.85 },
  center:   { sizes: [9], mods: ['center'], clues: [], hard: 0.85 },
  antiknight: { sizes: [9], mods: ['antiknight'], clues: [], hard: 0.75 },
  antiking: { sizes: [9], mods: ['antiking'], clues: [], hard: 0.8 },
  nonconsec: { sizes: [9, 6], mods: ['nonconsec'], clues: [], hard: 0.75 },
  miracle:  { sizes: [9], mods: ['antiknight', 'antiking', 'nonconsec'], clues: [], hard: 0.1 },
  evenodd:  { sizes: [9, 4, 6], mods: [], clues: ['evenodd'], hard: 0.7 },
  kropki:   { sizes: [9, 4, 6], mods: [], clues: ['kropki'], hard: 0.4 },
  consec:   { sizes: [9, 4, 6], mods: [], clues: ['consec'], hard: 0.4 },
  xv:       { sizes: [9], mods: [], clues: ['xv'], hard: 0.45 },
  greater:  { sizes: [9, 4, 6], mods: [], clues: ['lt'], hard: 0.55 },
  batt:     { sizes: [9, 4, 6], mods: [], clues: ['batt'], hard: 0.6 },
  quad:     { sizes: [9, 4, 6], mods: [], clues: ['quad'], hard: 0.6 },
  killer:   { sizes: [9, 4, 6], mods: [], clues: ['killer'], hard: 0.25 },
  littlekiller: { sizes: [9, 6], mods: [], clues: ['lk'], hard: 0.5 },
  sandwich: { sizes: [9, 4, 6], mods: [], clues: ['sandwich'], hard: 0.5 },
  xsum:     { sizes: [9, 6], mods: [], clues: ['xsum'], hard: 0.5 },
  frame:    { sizes: [9, 6], mods: [], clues: ['osum'], hard: 0.5 },
  skyscraper: { sizes: [9, 4, 6], mods: [], clues: ['sky'], hard: 0.5 },
  thermo:   { sizes: [9, 4, 6], mods: [], clues: ['thermo'], hard: 0.45 },
  arrow:    { sizes: [9, 6], mods: [], clues: ['arrow'], hard: 0.5 },
  renban:   { sizes: [9, 6], mods: [], clues: ['renban'], hard: 0.55 },
  whisper:  { sizes: [9], mods: [], clues: ['whisper'], hard: 0.55 },
  palindrome: { sizes: [9, 6], mods: [], clues: ['palin'], hard: 0.65 },
  between:  { sizes: [9, 6], mods: [], clues: ['between'], hard: 0.55 },
  entropic: { sizes: [9, 6], mods: [], clues: ['entropic'], hard: 0.55 },
  modular:  { sizes: [9, 6], mods: [], clues: ['modular'], hard: 0.55 },
  samurai:  { sizes: [9], layout: 'samurai', mods: [], clues: [], hard: 1 },
  twodoku:  { sizes: [9], layout: 'twodoku', mods: [], clues: [], hard: 1 },
  gattai3:  { sizes: [9], layout: 'gattai3', mods: [], clues: [], hard: 1 },
  sohei:    { sizes: [9], layout: 'sohei', mods: [], clues: [], hard: 1 },
  kazaguruma: { sizes: [9], layout: 'kazaguruma', mods: [], clues: [], hard: 1 },
  tripledoku: { sizes: [9], layout: 'tripledoku', mods: [], clues: [], hard: 1 },
  cross:    { sizes: [9], layout: 'cross', mods: [], clues: [], hard: 1 },
  greco:    { sizes: [4, 5, 7, 3], layout: 'greco', mods: ['latin'], clues: ['greco'], hard: 0.9 },
  cube3:    { sizes: [4, 5, 6], layout: 'cube', dim: 3, mods: ['latin'], clues: [], hard: 0.9 },
  cubebox:  { sizes: [4], layout: 'cube', dim: 3, cubeBoxes: true, mods: [], clues: [], hard: 0.9 },
  hyper4:   { sizes: [3, 4], layout: 'cube', dim: 4, mods: ['latin'], clues: [], hard: 0.9 },
  hyper5:   { sizes: [3], layout: 'cube', dim: 5, mods: ['latin'], clues: [], hard: 0.9 },
  futoshiki: { sizes: [5, 4, 6, 7], mods: ['latin'], clues: ['lt'], hard: 0.5, dens: 1.15 },
  kenken:   { sizes: [5, 4, 6], mods: ['latin'], clues: ['kenken'], hard: 0.1 },
  /* nivelul 1 (1.1) */
  girandola: { sizes: [9], mods: ['girandola'], clues: [], hard: 0.85 },
  sparse9: { sizes: [9], mods: ['sparse9'], clues: [], hard: 0.85 },
  asterisk: { sizes: [9], mods: ['asterisk'], clues: [], hard: 0.85 },
  diag1:    { sizes: [9, 4, 6], mods: ['diag1'], clues: [], hard: 0.9 },
  dutch:    { sizes: [9], mods: [], clues: ['whisper4'], hard: 0.6 },
  nabner:   { sizes: [9, 6], mods: [], clues: ['nabner'], hard: 0.65 },
  slowthermo: { sizes: [9, 6], mods: [], clues: ['slowthermo'], hard: 0.55 },
  parityline: { sizes: [9, 6], mods: [], clues: ['parityline'], hard: 0.6 },
  sameparity: { sizes: [9, 6], mods: [], clues: ['sameparity'], hard: 0.6 },
  evenonly: { sizes: [9, 4, 6], mods: [], clues: ['evenonly'], hard: 0.75 },
  oddonly:  { sizes: [9, 4, 6], mods: [], clues: ['oddonly'], hard: 0.75 },
  luk:      { sizes: [9, 6], mods: [], clues: ['luk'], hard: 0.5 },
  fortress: { sizes: [9, 4, 6], mods: [], clues: ['fortress'], hard: 0.55 },
  minmax:   { sizes: [9, 4, 6], mods: [], clues: ['minmax'], hard: 0.55 },
  /* nivelul 2 (1.1) */
  lockout:  { sizes: [9], mods: [], clues: ['lockout'], hard: 0.6 },
  doublearrow: { sizes: [9, 6], mods: [], clues: ['doublearrow'], hard: 0.5 },
  zipper:   { sizes: [9, 6], mods: [], clues: ['zipper'], hard: 0.6 },
  rossini:  { sizes: [9, 4, 6], mods: [], clues: ['rossini'], hard: 0.6 },
  outside:  { sizes: [9, 4, 6], mods: [], clues: ['outside'], hard: 0.7 },
  clone:    { sizes: [9, 6], mods: [], clues: ['clone'], hard: 0.8 },
  regionsum: { sizes: [9, 6], mods: [], clues: ['regionsum'], hard: 0.6 },
  avgarrow: { sizes: [9, 6], mods: [], clues: ['avgarrow'], hard: 0.55 },
  prodarrow: { sizes: [9, 6], mods: [], clues: ['prodarrow'], hard: 0.6 },
  pillarrow: { sizes: [9], mods: [], clues: ['pillarrow'], hard: 0.5 },
  strimko:  { sizes: [5, 4, 6, 7], mods: ['latin'], strimko: true, clues: [], hard: 0.5 },
  /* nivelul 3 (1.2) */
  indexing: { sizes: [9, 4, 6], mods: [], clues: ['index'], hard: 0.6 },
  ratio:    { sizes: [9, 4, 6], mods: [], clues: ['ratio'], hard: 0.45 },
  fog:      { sizes: [9, 6], mods: [], clues: ['thermo', 'arrow', 'renban'], fog: true, hard: 0.6 },
  /* 1.3: structură și reguli globale */
  antibishop: { sizes: [9, 6], mods: ['antibishop'], clues: [], hard: 0.8 },
  anticamel: { sizes: [9], mods: ['anticamel'], clues: [], hard: 0.8 },
  antizebra: { sizes: [9], mods: ['antizebra'], clues: [], hard: 0.8 },
  cylking:  { sizes: [9], mods: ['cylking'], clues: [], hard: 0.75 },
  torusking: { sizes: [9], mods: ['torusking'], clues: [], hard: 0.7 },
  torusknight: { sizes: [9], mods: ['torusknight'], clues: [], hard: 0.7 },
  mobiusking: { sizes: [9], mods: ['mobiusking'], clues: [], hard: 0.7 },
  kleinking: { sizes: [9], mods: ['kleinking'], clues: [], hard: 0.7 },
  projking: { sizes: [9], mods: ['projking'], clues: [], hard: 0.7 },
  pandiag:  { sizes: [5, 7], mods: ['latin', 'pandiag'], clues: [], hard: 0.6 },
  zero:     { sizes: [9, 4, 6], mods: [], clues: [], zero: true, hard: 1 },
  symcomp:  { sizes: [9, 4], mods: [], clues: ['symcomp'], hard: 0.7 },
  symparity: { sizes: [9, 6, 4], mods: [], clues: ['symparity'], hard: 0.75 },
  cgrav:    { sizes: [9], mods: [], clues: ['cgrav'], hard: 0.8 },
  lexrows:  { sizes: [9, 6, 4], mods: [], clues: ['lexrows'], hard: 0.7 },
  extremes: { sizes: [9, 6, 4], mods: [], clues: ['extremes'], hard: 0.7 },
  boxbalance: { sizes: [9, 6, 4], mods: [], clues: ['boxbalance'], hard: 0.7 },
  lonely5:  { sizes: [9, 6], mods: [], clues: ['lonely5'], hard: 0.75 },
  nolonely: { sizes: [9, 6, 4], mods: [], clues: ['nolonely'], hard: 0.7 },
  noprog:   { sizes: [9, 6, 4], mods: [], clues: ['noprog'], hard: 0.75 },
  semimagic: { sizes: [9], mods: [], clues: ['semimagic'], hard: 0.7 },
  radar:    { sizes: [9, 6, 4], mods: [], clues: ['radar'], hard: 0.55 },
  sandnum:  { sizes: [9, 6, 4], mods: [], clues: ['sandnum'], hard: 0.6 },
  sandpar:  { sizes: [9, 6], mods: [], clues: ['sandpar'], hard: 0.6 },
  sand2:    { sizes: [9], mods: [], clues: ['sand2'], hard: 0.5 },
  subsol:   { sizes: [9, 6, 4], mods: [], clues: ['subsol'], hard: 0.5 },
  prodmargin: { sizes: [9, 6, 4], mods: [], clues: ['prodmargin'], hard: 0.55 },
  diffmargin: { sizes: [9, 6, 4], mods: [], clues: ['diffmargin'], hard: 0.55 },
  ascents:  { sizes: [9, 6, 4], mods: [], clues: ['ascents'], hard: 0.55 },
  inversions: { sizes: [9, 6, 4], mods: [], clues: ['inversions'], hard: 0.55 },
  cycles:   { sizes: [9, 6], mods: [], clues: ['cycles'], hard: 0.55 },
  fixedpts: { sizes: [9, 6], mods: [], clues: ['fixedpts'], hard: 0.55 },
  altsum:   { sizes: [9, 6], mods: [], clues: ['altsum'], hard: 0.55 },
  dxsum:    { sizes: [9, 6], mods: [], clues: ['dxsum'], hard: 0.55 },
  relief:   { sizes: [9, 6, 4], mods: [], clues: ['relief'], hard: 0.55 },
  oddsweeper: { sizes: [9, 6, 4], mods: [], clues: ['oddsweeper'], hard: 0.55 },
  compass:  { sizes: [9, 6, 4], mods: [], clues: ['compass'], hard: 0.55 },
  quadsum:  { sizes: [9, 6, 4], mods: [], clues: ['quadsum'], hard: 0.5 },
  stone:    { sizes: [9, 6, 4], mods: [], clues: ['stone'], hard: 0.65 },
  domino:   { sizes: [9, 6, 4], mods: [], clues: ['domino'], hard: 0.5 },
  pillsq:   { sizes: [9], mods: [], clues: ['pillsq'], hard: 0.6 },
  primecage: { sizes: [9, 6], mods: [], clues: ['primecage'], hard: 0.55 },
  balcage:  { sizes: [9, 6], mods: [], clues: ['balcage'], hard: 0.55 },
  doubler:  { sizes: [9, 6, 4], mods: [], clues: ['doubler'], hard: 0.3 },
  clonemir: { sizes: [9, 6], mods: [], clues: ['clonemir'], hard: 0.8 },
  /* 1.3: puncte, diferențe, linii */
  diff:     { sizes: [9, 6, 4], mods: [], clues: ['diff'], hard: 0.5 },
  kropkipos: { sizes: [9, 6, 4], mods: [], clues: ['kropkipos'], hard: 0.45 },
  xvpos:    { sizes: [9], mods: [], clues: ['xvpos'], hard: 0.5 },
  consecpos: { sizes: [9, 6, 4], mods: [], clues: ['consecpos'], hard: 0.5 },
  clueless: { sizes: [9, 6, 4], mods: [], clues: ['kropki'], hard: 0 },
  legato:   { sizes: [9, 6], mods: [], clues: ['legato'], hard: 0.6 },
  consonant: { sizes: [9, 6], mods: [], clues: ['consonant'], hard: 0.6 },
  fixstep:  { sizes: [9, 6], mods: [], clues: ['fixstep'], hard: 0.6 },
  compline: { sizes: [9, 6], mods: [], clues: ['compline'], hard: 0.6 },
  zigzag:   { sizes: [9, 6], mods: [], clues: ['zigzag'], hard: 0.6 },
  fibonacci: { sizes: [9, 6], mods: [], clues: ['fibonacci'], hard: 0.6 },
  steps:    { sizes: [9, 6], mods: [], clues: ['steps'], hard: 0.6 },
  progression: { sizes: [9, 6], mods: [], clues: ['progression'], hard: 0.6 },
  echo:     { sizes: [9, 6], mods: [], clues: ['echo'], hard: 0.6 },
  divisible: { sizes: [9], mods: [], clues: ['divisible'], hard: 0.6 },
  primeline: { sizes: [9, 6], mods: [], clues: ['primeline'], hard: 0.6 }
};
var DIFF = { easy: 0.52, medium: 0.4, hard: 0 };

function checkSpec(spec) {
  var own = Object.prototype.hasOwnProperty, bad = function (m) { throw new Error('specificație invalidă: ' + m); };
  if (!spec || typeof spec !== 'object') bad('lipsește');
  if (spec.preset !== undefined && spec.preset !== null && !own.call(PRESETS, spec.preset)) bad('variantă necunoscută');
  var pr = spec.preset ? PRESETS[spec.preset] : null;
  if (spec.n !== undefined && !(Number.isInteger(spec.n) && spec.n >= 2 && spec.n <= 25)) bad('mărime');
  if (pr && spec.n !== undefined && pr.sizes.indexOf(spec.n) < 0) bad('mărime nepermisă pentru această variantă');
  if (spec.difficulty !== undefined && !own.call(DIFF, spec.difficulty)) bad('dificultate');
  if (spec.seed !== undefined && !(typeof spec.seed === 'number' && isFinite(spec.seed))) bad('sămânță');
  (spec.clues || []).forEach(function (c) { if (!own.call(CLUES, c) && !own.call(PRE, c)) bad('regulă necunoscută: ' + c); });
}
function generate(spec) {
  checkSpec(spec);
  var preset = spec.preset ? PRESETS[spec.preset] : null;
  var def = {
    mods: (spec.mods || (preset && preset.mods) || []).slice(),
    clues: (spec.clues || (preset && preset.clues) || []).slice(),
    jigsaw: spec.jigsaw !== undefined ? spec.jigsaw : !!(preset && preset.jigsaw),
    zero: spec.zero !== undefined ? spec.zero : !!(preset && preset.zero),
    fog: spec.fog !== undefined ? spec.fog : !!(preset && preset.fog),
    strimko: spec.strimko !== undefined ? spec.strimko : !!(preset && preset.strimko),
    layoutKind: spec.layoutKind || (preset && preset.layout) || 'std',
    dim: spec.dim || (preset && preset.dim) || 3, cubeBoxes: spec.cubeBoxes !== undefined ? spec.cubeBoxes : !!(preset && preset.cubeBoxes),
    hard: spec.hard !== undefined ? spec.hard : (preset ? preset.hard : 1),
    dens: spec.dens || (preset && preset.dens) || 1
  };
  var n = spec.n || (preset && preset.sizes[0]) || 9;
  var difficulty = spec.difficulty || 'medium';
  var seed = (spec.seed >>> 0) || 1;
  var rnd = RNG(seed);
  var layoutSpec = def.layoutKind === 'std' ? { kind: 'std', n: n } : def.layoutKind === 'greco' ? { kind: 'greco', n: n } : def.layoutKind === 'cube' ? { kind: 'cube', d: def.dim, n: n, boxes: !!def.cubeBoxes } : { kind: def.layoutKind };
  var L = makeLayout(layoutSpec);
  var N = L.N, cnt = L.count;
  var baseP = { layout: layoutSpec, mods: def.mods, cons: [] };
  var sol = null, regions = null, attempt;

  /* 1. grilă rezolvată */
  var preNames = def.clues.filter(function (c) { return PRE[c]; }), postNames = def.clues.filter(function (c) { return !PRE[c]; }), preCons = [], strimkoChains = null;
  var plain = !def.jigsaw && def.mods.length === 0 && !L.composite && !L.cube && !L.greco && !preNames.length && !def.strimko;
  if (L.greco) {
    var gp = rnd.shuffle(Array.from({ length: N }, function (_, q) { return q; })), gq = rnd.shuffle(Array.from({ length: N }, function (_, q) { return q; }));
    var da = rnd.shuffle(Array.from({ length: N }, function (_, q) { return q; })), db = rnd.shuffle(Array.from({ length: N }, function (_, q) { return q; }));
    var g4 = [0, 2, 3, 1];
    var m4 = function (x, y) { /* produsul în GF(4), 0..3 = 0,1,w,w+1 */ var t = [[0, 0, 0, 0], [0, 1, 2, 3], [0, 2, 3, 1], [0, 3, 1, 2]]; return t[x][y]; };
    sol = new Array(cnt);
    for (var gi = 0; gi < N; gi++) for (var gj = 0; gj < N; gj++) {
      var ii = gp[gi], jj = gq[gj], A, B;
      if (N === 4) { A = ii ^ jj; B = ii ^ m4(2, jj); } else { A = (ii + jj) % N; B = (ii + 2 * jj) % N; }
      sol[gi * N + gj] = da[A] + 1; sol[N * N + gi * N + gj] = db[B] + 1;
    }
  } else if (L.cube && !(def.cubeBoxes)) {
    /* hipercub latin: (suma indicilor permutați) mod N, cifre redenumite; toate liniile pe axe sunt permutări */
    var pm = [], dg = rnd.shuffle(Array.from({ length: N }, function (_, q) { return q; })), ax;
    for (ax = 0; ax < def.dim; ax++) pm.push(rnd.shuffle(Array.from({ length: N }, function (_, q) { return q; })));
    sol = L.coords.map(function (x) { var t = 0; for (var q = 0; q < def.dim; q++) t += pm[q][x[q]]; return dg[t % N] + 1; });
  } else if (L.cube) {
    for (attempt = 0; attempt < 40 && !sol; attempt++) {
      var S0c = makeSolver({ layout: layoutSpec, mods: def.mods, cons: [] }), rc = S0c.solve(null, { limit: 1, budget: 200000, rnd: rnd });
      if (rc.count) sol = Array.prototype.slice.call(rc.sols[0]);
    }
    if (!sol) throw new Error('cub: nu s-a găsit grila');
  } else if (plain) {
    sol = patternGrid(N, L.br, L.bc, rnd);
  } else if (L.composite) {
    var S9 = makeSolver({ layout: { kind: 'std', n: 9 }, mods: [], cons: [] });
    var at = L.at;
    for (attempt = 0; attempt < 400 && !sol; attempt++) {
      var trial = new Array(cnt).fill(0), fail = false;
      L.offs.forEach(function (o) {
        if (fail) return;
        var giv = new Int32Array(81), r, c;
        for (r = 0; r < 9; r++) for (c = 0; c < 9; c++) giv[r * 9 + c] = trial[at[(o[0] + r) * L.C + o[1] + c]] || 0;
        var res = S9.solve(giv, { limit: 1, budget: 50000, rnd: rnd });
        if (!res.count) { fail = true; return; }
        for (r = 0; r < 9; r++) for (c = 0; c < 9; c++) trial[at[(o[0] + r) * L.C + o[1] + c]] = res.sols[0][r * 9 + c];
      });
      if (!fail) sol = trial;
    }
    if (!sol) throw new Error('compus: eșec');
  } else {
    for (attempt = 0; attempt < 60 && !sol; attempt++) {
      var P0 = { layout: layoutSpec, mods: def.mods, cons: [] };
      if (def.jigsaw) { regions = genRegions(N, rnd); if (!regions) continue; P0.regions = regions; }
      preCons = [];
      preNames.forEach(function (nm) { PRE[nm](L, rnd).forEach(function (c) { preCons.push(c); }); });
      P0.cons = preCons;
      var S0 = makeSolver(P0);
      var cap = def.mods.indexOf('antiknight') >= 0 && def.mods.indexOf('nonconsec') >= 0 ? 400000 : preNames.length ? 30000 : 4000;
      var res0 = S0.solve(null, { limit: 1, budget: cap, rnd: rnd });
      if (res0.count) sol = Array.prototype.slice.call(res0.sols[0]);
      if (sol && def.strimko) {
        var ch = genChains(N, sol, rnd);
        if (!ch) { sol = null; continue; }
        regions = ch.regions; strimkoChains = ch.chains;
      }
    }
    if (!sol) throw new Error('nu s-a găsit o grilă rezolvată pentru această combinație');
  }

  /* 2. indicii derivate din soluție */
  var P = { v: 1, engine: VERSION, preset: spec.preset || null, n: N, layout: layoutSpec, mods: def.mods, clues: def.clues, cons: [], seed: seed, difficulty: difficulty };
  if (regions) P.regions = regions;
  if (strimkoChains) P.chains = strimkoChains;
  preCons.forEach(function (c) { P.cons.push(c); });
  var ctx = adjacencyCtx(P, L, sol, rnd);
  ctx.P = P;
  var dens = def.dens / Math.sqrt(Math.max(1, def.clues.length));
  postNames.forEach(function (cl) {
    if (!CLUES[cl]) throw new Error('indiciu necunoscut ' + cl);
    CLUES[cl](ctx, dens).forEach(function (c) { P.cons.push(c); });
  });

  /* 3. rezolvator + verificare soluție */
  var S = makeSolver(P);
  if (!S.verify(Int32Array.from(sol))) throw new Error('soluția nu respectă regulile (bug de generare)');

  /* 4. scoate indicii cât timp soluția rămâne unică */
  var target = Math.round(cnt * DIFF[difficulty] * def.hard);
  var giv = sol.slice(), have = cnt, work = 0, workMax = cnt > 200 ? 600000 : 300000;
  var bud = cnt > 200 ? 400 : 3000;
  var order = rnd.shuffle(range(cnt));
  for (var t = 0; t < order.length; t++) {
    if (have <= target || work > workMax) break;
    var i = order[t], saved = giv[i]; giv[i] = 0;
    var r = S.solve(giv, { limit: 1, budget: bud, exclude: [i, saved] });
    work += r.nodes + 1;
    if (r.count === 0 && !r.aborted) have--; else giv[i] = saved;
  }
  if (def.zero) P.zero = true;
  if (def.fog) { giv = fogComplete(P, L, sol, giv, rnd); have = giv.filter(Boolean).length; P.fog = true; }
  P.givens = giv; P.solution = sol; P.clueCount = have;
  /* dificultate măsurată: ramificări necesare după propagare (nu depinde de RNG) */
  (function () {
    var c = S.candidates(Int32Array.from(giv)), solved1 = !!c;
    if (c) for (var k = 0; k < cnt; k++) if ((c[k] & (c[k] - 1)) !== 0) { solved1 = false; break; }
    if (solved1) { P.rating = 0; return; }
    var rr = S.solve(Int32Array.from(giv), { limit: 1, budget: 20000 });
    P.rating = rr.aborted || rr.count !== 1 ? -1 : Math.max(1, rr.nodes - 1);
  })();
  P.code = (spec.preset || 'custom') + '-' + N + '-' + difficulty + '-' + seed;
  return P;
}

var API = { fogLit: fogLit, visibleCons: visibleCons, genRegions: genRegions, VERSION: VERSION, makeLayout: makeLayout, makeSolver: makeSolver, generate: generate, PRESETS: PRESETS, RNG: RNG, BOX: BOX };
if (typeof module !== 'undefined' && module.exports) module.exports = API; else root.SFF = API;
})(typeof self !== 'undefined' ? self : this);
