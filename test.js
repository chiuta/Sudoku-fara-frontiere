/* SPDX-License-Identifier: MIT · Copyright (c) 2026 Alexandru-Ionuț Chiuță (Alexio)
   Teste pentru motorul Sudoku fără frontiere. Rulare: node test.js [preset] */
'use strict';
const SFF = require('./engine.js');
const only = process.argv[2];
let fails = 0, total = 0;
function check(name, cond, info) { total++; if (!cond) { fails++; console.log('  FAIL', name, info || ''); } }

function soundness(S, P, rounds) {
  const rnd = SFF.RNG(12345);
  for (let r = 0; r < rounds; r++) {
    const g = new Int32Array(S.cnt);
    const frac = rnd.next() * 0.7;
    for (let i = 0; i < S.cnt; i++) if (rnd.next() < frac) g[i] = P.solution[i];
    const dom = S.candidates(g);
    if (!dom) return false;
    for (let i = 0; i < S.cnt; i++) if (!(dom[i] & (1 << (P.solution[i] - 1)))) return false;
  }
  return true;
}


/* validator independent al semanticii regulilor noi (scris separat de motor, direct din textul fișelor) */
function semantic(P) {
  const v = P.solution, N = P.n, L = SFF.makeLayout(P.layout), bad = [];
  const reg = x => P.regions ? P.regions[x] : L.boxId[x];
  const nb4 = x => L.nbr4[x];
  for (const c of P.cons) {
    const cl = c.cells, d = cl ? cl.map(x => v[x]) : null, k = cl ? cl.length : 0; let ok = true;
    switch (c.t) {
      case 'whisper': if (c.th) for (let i = 1; i < k; i++) ok = ok && Math.abs(d[i] - d[i - 1]) >= c.th; break;
      case 'nabner': for (let i = 0; i < k; i++) for (let j = i + 1; j < k; j++) ok = ok && Math.abs(d[i] - d[j]) > 1; break;
      case 'slowthermo': for (let i = 1; i < k; i++) ok = ok && d[i] >= d[i - 1]; break;
      case 'parityline': for (let i = 1; i < k; i++) ok = ok && d[i] % 2 !== d[i - 1] % 2; break;
      case 'sameparity': for (let i = 1; i < k; i++) ok = ok && d[i] % 2 === d[i - 1] % 2; break;
      case 'luk': ok = new Set(d).size === k && d.reduce((a, b) => a + b, 0) === c.sum; break;
      case 'fortress': { const s = new Set(cl); for (const x of cl) for (const o of nb4(x)) if (!s.has(o)) ok = ok && v[x] > v[o]; break; }
      case 'minmax': for (const [x, t] of c.marks) for (const o of nb4(x)) ok = ok && (t === 'min' ? v[x] < v[o] : v[x] > v[o]); break;
      case 'lockout': { const lo = Math.min(d[0], d[k - 1]), hi = Math.max(d[0], d[k - 1]); ok = hi - lo >= 4; for (let i = 1; i < k - 1; i++) ok = ok && (d[i] < lo || d[i] > hi); break; }
      case 'darrow': ok = d.slice(1, k - 1).reduce((a, b) => a + b, 0) === d[0] + d[k - 1]; break;
      case 'avgarrow': ok = d.slice(1).reduce((a, b) => a + b, 0) / (k - 1) === d[0]; break;
      case 'prodarrow': ok = d.slice(1).reduce((a, b) => a * b, 1) === d[0]; break;
      case 'pillarrow': ok = d.slice(2).reduce((a, b) => a + b, 0) === 10 * d[0] + d[1] && L.nbr4[cl[0]].indexOf(cl[1]) >= 0; break;
      case 'zipper': { const m = d[(k - 1) / 2]; for (let i = 0; i < (k - 1) / 2; i++) ok = ok && d[i] + d[k - 1 - i] === m; ok = ok && k % 2 === 1; break; }
      case 'rossini': ok = c.inc ? (d[0] < d[1] && d[1] < d[2]) : (d[0] > d[1] && d[1] > d[2]); break;
      case 'outside': ok = c.digits.every(x => d.indexOf(x) >= 0) && k === 3; break;
      case 'index': { const N2 = P.n; for (let r = 0; r < N2; r++) { const row = Array.from({ length: N2 }, (_, q) => v[L.at[r * L.C + q]]); ok = ok && row[row[0] - 1] === 1; } break; }
      case 'clone': for (let i = 0; i < c.a.length; i++) ok = ok && v[c.a[i]] === v[c.b[i]]; break;
      case 'regsum': { const s = {}; for (const x of cl) s[reg(x)] = (s[reg(x)] || 0) + v[x]; const vals = Object.values(s); ok = vals.length >= 2 && vals.every(x => x === vals[0]); break; }
      default: continue;
    }
    if (!ok) bad.push(c.t);
  }
  const m = P.mods;
  const cellsAt = a => a.map(p => L.at[p[0] * L.C + p[1]]);
  const full = g => new Set(g.map(x => v[x])).size === N;
  if (m.indexOf('diag1') >= 0 && !full(Array.from({ length: N }, (_, i) => L.at[i * L.C + i]))) bad.push('diag1');
  if (m.indexOf('asterisk') >= 0 && !full(cellsAt([[1, 4], [2, 2], [2, 6], [4, 1], [4, 4], [4, 7], [6, 2], [6, 6], [7, 4]]))) bad.push('asterisk');
  if (m.indexOf('girandola') >= 0 && !full(cellsAt([[0, 0], [0, 8], [8, 0], [8, 8], [4, 4], [1, 4], [7, 4], [4, 1], [4, 7]]))) bad.push('girandola');
  if (m.indexOf('sparse9') >= 0 && !full(cellsAt([[0, 0], [0, 4], [0, 8], [4, 0], [4, 4], [4, 8], [8, 0], [8, 4], [8, 8]]))) bad.push('sparse9');
  for (const c of P.cons) if (c.t === 'dots' && c.kind === 'ratio') {
    const mk = {}; c.marks.forEach(q => { mk[q.a + ',' + q.b] = 1; });
    for (let i = 0; i < L.count; i++) for (const j of nb4(i)) if (j > i) { const r3 = v[i] === 3 * v[j] || v[j] === 3 * v[i]; if (r3 !== !!mk[i + ',' + j]) bad.push('ratio'); }
  }
  if (P.fog) { /* simulare independentă: din date, doar cu indiciile vizibile, propagarea trebuie să rezolve tot */
    const known = Int32Array.from(P.givens); let ch = true;
    while (ch) { ch = false; const lit = SFF.fogLit(L, known), vis = SFF.visibleCons(P.cons, lit);
      const Sv = SFF.makeSolver(Object.assign({}, P, { cons: vis, givens: null })), dom = Sv.candidates(known);
      if (!dom) { bad.push('ceață-contradicție'); break; }
      for (let i = 0; i < L.count; i++) if (!known[i] && (dom[i] & (dom[i] - 1)) === 0) { known[i] = 32 - Math.clz32(dom[i]); ch = true; if (known[i] !== v[i]) bad.push('ceață-greșit'); } }
    if (known.some(x => !x)) bad.push('ceață-nerezolvat');
  }
  if (P.chains) { if (P.chains.length !== N || !P.chains.every(ch => ch.length === N && full(ch))) bad.push('strimko-lanț'); }
  /* ---------- Loturile A–E: validatori scriși separat de motor ---------- */
  if (!L.composite) {
    const C = L.C, G = (r, c) => v[L.at[r * C + c]], pos = x => L.pos[x], inb = (r, c) => r >= 0 && c >= 0 && r < N && c < N;
    const sq = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const kn = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]];
    const leaps = { antibishop: [[2, 2], [2, -2], [-2, 2], [-2, -2]], anticamel: [[1, 3], [3, 1], [1, -3], [3, -1], [-1, 3], [-3, 1], [-1, -3], [-3, -1]], antizebra: [[2, 3], [3, 2], [2, -3], [3, -2], [-2, 3], [-3, 2], [-2, -3], [-3, -2]] };
    for (const k of Object.keys(leaps)) if (m.indexOf(k) >= 0)
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) for (const [dr, dc] of leaps[k]) if (inb(r + dr, c + dc) && G(r, c) === G(r + dr, c + dc)) bad.push(k);
    const md = x => ((x % N) + N) % N;
    const topoStep = (topo, r, c, dr, dc) => {
      let r2 = r + dr, c2 = c + dc;
      if (topo === 'torus') return [md(r2), md(c2)];
      if (topo === 'cyl') return (r2 < 0 || r2 >= N) ? null : [r2, md(c2)];
      if (c2 < 0 || c2 >= N) { c2 = md(c2); r2 = N - 1 - r2; }
      if (r2 < 0 || r2 >= N) { if (topo === 'mobius') return null; r2 = md(r2); if (topo === 'proj') c2 = N - 1 - c2; }
      return [r2, c2];
    };
    const topos = { torusking: ['torus', sq], torusknight: ['torus', kn], cylking: ['cyl', sq], mobiusking: ['mobius', sq], kleinking: ['klein', sq], projking: ['proj', sq] };
    for (const k of Object.keys(topos)) if (m.indexOf(k) >= 0)
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) for (const [dr, dc] of topos[k][1]) { const t = topoStep(topos[k][0], r, c, dr, dc); if (t && !(t[0] === r && t[1] === c) && G(r, c) === G(t[0], t[1])) bad.push(k); }
    if (m.indexOf('pandiag') >= 0) for (let i = 0; i < N; i++) { const a = new Set(), b = new Set(); for (let j = 0; j < N; j++) { a.add(G(j, (j + i) % N)); b.add(G(j, md(i - j))); } if (a.size !== N || b.size !== N) bad.push('pandiag'); }
    const has = t => P.cons.some(c => c.t === t);
    const mid = (N * (N + 1)) / 2;
    if (has('symcomp')) for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (G(r, c) + G(N - 1 - r, N - 1 - c) !== N + 1) bad.push('symcomp');
    if (has('symparity')) for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if ((G(r, c) - G(N - 1 - r, N - 1 - c)) % 2) bad.push('symparity');
    if (has('cgrav')) for (let r = 0; r < N; r++) { let t = 0; for (let c = 0; c < N; c++) t += (c - (N - 1) / 2) * G(r, c); if (Math.abs(t) > 1e-9) bad.push('cgrav'); }
    if (has('lexrows')) for (let r = 0; r + 1 < N; r++) { let lt = false; for (let c = 0; c < N; c++) { if (G(r, c) !== G(r + 1, c)) { lt = G(r, c) < G(r + 1, c); break; } } if (!lt) bad.push('lexrows'); }
    if (has('extremes')) for (const bx of L.boxes) { const a = bx.find(x => v[x] === 1), z = bx.find(x => v[x] === N); if (Math.max(Math.abs(pos(a)[0] - pos(z)[0]), Math.abs(pos(a)[1] - pos(z)[1])) !== 1) bad.push('extremes'); }
    if (has('boxbalance')) for (const bx of L.boxes) { const cs = bx.map(x => pos(x)[1]), lo = Math.min(...cs), hi = Math.max(...cs); let a = 0, b = 0; bx.forEach(x => { if (pos(x)[1] === lo) a += v[x]; if (pos(x)[1] === hi) b += v[x]; }); if (a !== b) bad.push('boxbalance'); }
    const orth = (r, c) => [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].filter(q => inb(q[0], q[1]));
    if (has('lonely5')) for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (G(r, c) === 5) orth(r, c).forEach(q => { if (G(q[0], q[1]) % 2) bad.push('lonely5'); });
    if (has('nolonely')) for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!orth(r, c).some(q => Math.abs(G(q[0], q[1]) - G(r, c)) === 1)) bad.push('nolonely');
    if (has('noprog')) for (let r = 0; r < N; r++) for (let c = 0; c + 2 < N; c++) { if (2 * G(r, c + 1) === G(r, c) + G(r, c + 2)) bad.push('noprog'); if (2 * G(c + 1, r) === G(c, r) + G(c + 2, r)) bad.push('noprog'); }
    if (has('semimagic')) for (const bx of L.boxes) for (const ax of [0, 1]) { const rs = {}; bx.forEach(x => { rs[pos(x)[ax]] = (rs[pos(x)[ax]] || 0) + v[x]; }); Object.values(rs).forEach(t => { if (t !== 15) bad.push('semimagic'); }); }
    /* indicii pe margine, formule rescrise independent */
    const mv = (kind, a) => {
      const n = a.length, ip = a.indexOf(1), iN = a.indexOf(N), i2 = a.indexOf(2), iN1 = a.indexOf(N - 1);
      const sumBetween = (p, q) => { let t = 0; for (let z = Math.min(p, q) + 1; z < Math.max(p, q); z++) t += a[z]; return t; };
      if (kind === 'radar') return iN + 1;
      if (kind === 'sandnum') return Math.abs(ip - iN) - 1;
      if (kind === 'sandpar') { let t = 0; for (let z = Math.min(ip, iN) + 1; z < Math.max(ip, iN); z++) t += a[z] % 2; return t; }
      if (kind === 'sand2') return sumBetween(ip, iN) + ',' + sumBetween(i2, iN1);
      if (kind === 'subsol') { let t = 0; a.forEach((x, i) => { if (a.slice(0, i).every(y => y > x)) t++; }); return t; }
      if (kind === 'prodmargin') return a[0] * a[1];
      if (kind === 'diffmargin') return Math.max(a[0], a[1]) - Math.min(a[0], a[1]);
      if (kind === 'ascents') return a.slice(1).filter((x, i) => x > a[i]).length;
      if (kind === 'inversions') { let t = 0; a.forEach((x, i) => a.forEach((y, j) => { if (i < j && x > y) t++; })); return t; }
      if (kind === 'cycles') { const vis = new Array(n).fill(false); let t = 0; for (let i = 0; i < n; i++) if (!vis[i]) { t++; for (let j = i; !vis[j]; j = a[j] - 1) vis[j] = true; } return t; }
      if (kind === 'fixedpts') return a.filter((x, i) => x === i + 1).length;
      if (kind === 'altsum') return a.reduce((t, x, i) => t + (i % 2 ? -x : x), 0);
      if (kind === 'dxsum') return a.slice(0, a[0]).reduce((t, x) => t + x, 0);
      return null;
    };
    for (const c of P.cons) if (c.t === 'mclue') {
      const a = c.cells.map(x => v[x]);
      if (String(mv(c.kind, a)) !== String(c.val)) bad.push('mclue-' + c.kind);
      const p0 = pos(c.cells[0]);
      if (c.kind !== 'dxsum') { const p1 = pos(c.cells[1]); if (Math.abs(p0[0] - p1[0]) + Math.abs(p0[1] - p1[1]) !== 1) bad.push('mclue-linie'); }
      else { for (let i = 1; i < c.cells.length; i++) { const p = pos(c.cells[i]), q = pos(c.cells[i - 1]); if (Math.abs(p[0] - q[0]) !== 1 || Math.abs(p[1] - q[1]) !== 1) bad.push('dxsum-diag'); } }
    }
    const adj = (x, y) => Math.abs(pos(x)[0] - pos(y)[0]) + Math.abs(pos(x)[1] - pos(y)[1]) === 1;
    const prime = t => { if (t < 2) return false; for (let q = 2; q * q <= t; q++) if (t % q === 0) return false; return true; };
    for (const c of P.cons) {
      const cl = c.cells, d = cl ? cl.map(x => v[x]) : null, k = cl ? cl.length : 0; let ok = true;
      switch (c.t) {
        case 'relief': for (const [x, t] of c.marks) ok = ok && nb4(x).filter(o => v[o] < v[x]).length === t; break;
        case 'oddsweeper': for (const [x, t] of c.marks) ok = ok && sq.filter(([dr, dc]) => inb(pos(x)[0] + dr, pos(x)[1] + dc)).filter(([dr, dc]) => G(pos(x)[0] + dr, pos(x)[1] + dc) % 2).length === t; break;
        case 'compass': for (const [x, dr, dc] of c.marks) { const r = pos(x)[0], cc = pos(x)[1], best = G(r + dr, cc + dc); ok = ok && inb(r + dr, cc + dc) && sq.every(([a, b]) => !inb(r + a, cc + b) || (a === dr && b === dc) || G(r + a, cc + b) < best); } break;
        case 'quadsum': { const rs = cl.map(x => pos(x)[0]), cs = cl.map(x => pos(x)[1]); ok = Math.max(...rs) - Math.min(...rs) === 1 && Math.max(...cs) - Math.min(...cs) === 1 && new Set(cl).size === 4 && d.reduce((a, b) => a + b, 0) === c.sum; break; }
        case 'stone': ok = new Set(d).size === 4; break;
        case 'domino': ok = adj(cl[0], cl[1]) && [...d].sort().join() === [...c.digits].sort().join(); break;
        case 'pillsq': ok = adj(cl[0], cl[1]) && [16, 25, 36, 49, 64, 81].indexOf(10 * d[0] + d[1]) >= 0; break;
        case 'pcage': ok = new Set(d).size === k && prime(d.reduce((a, b) => a + b, 0)); break;
        case 'bcage': ok = d.reduce((a, b) => a + b, 0) === d.reduce((a, b) => a * b, 1); break;
        case 'cage': if (c.dbl) ok = new Set(d).size === k && d.reduce((a, b) => a + b, 0) + c.dbl.reduce((a, x) => a + v[x], 0) === c.sum; break;
        case 'legato': for (let i = 1; i < k; i++) ok = ok && Math.abs(d[i] - d[i - 1]) <= 2; break;
        case 'consonant': for (let i = 1; i < k; i++) ok = ok && [2, 3, 4].indexOf(Math.abs(d[i] - d[i - 1])) >= 0; break;
        case 'fixstep': for (let i = 1; i < k; i++) ok = ok && Math.abs(d[i] - d[i - 1]) === 3; break;
        case 'compline': for (let i = 1; i < k; i++) ok = ok && d[i] + d[i - 1] === N + 1; break;
        case 'echo': for (let i = 0; i + 3 < k; i++) ok = ok && d[i] === d[i + 3]; break;
        case 'zigzag': for (let i = 1; i + 1 < k; i++) ok = ok && (d[i] > d[i - 1]) === (d[i] > d[i + 1]); break;
        case 'steps': for (let i = 2; i < k; i++) ok = ok && d[i] - d[i - 1] > d[i - 1] - d[i - 2]; break;
        case 'progression': for (let i = 2; i < k; i++) ok = ok && d[i] - d[i - 1] === d[1] - d[0]; break;
        case 'fibonacci': for (let i = 2; i < k; i++) ok = ok && d[i] === d[i - 1] + d[i - 2]; break;
        case 'divisible': ok = Number(d.join('')) % c.m === 0; break;
        case 'primeline': ok = d.every(x => prime(x)); break;
        default: continue;
      }
      if (!ok) bad.push(c.t);
    }
    for (const c of P.cons) if (c.t === 'dots') {
      const mk = {}; c.marks.forEach(q => { mk[Math.min(q.a, q.b) + ',' + Math.max(q.a, q.b)] = q.m; });
      const rel = { kropki: (a, b) => (Math.abs(a - b) === 1 ? 'w' : (a === 2 * b || b === 2 * a) ? 'b' : null), xv: (a, b) => (a + b === 10 ? 'x' : a + b === 5 ? 'v' : null), consec: (a, b) => (Math.abs(a - b) === 1 ? 'w' : null) }[c.kind];
      if (c.kind === 'diff') { c.marks.forEach(q => { if (Math.abs(v[q.a] - v[q.b]) !== q.m) bad.push('diff'); }); }
      else if (rel) {
        for (let i = 0; i < L.count; i++) for (const j of nb4(i)) if (j > i) {
          const r = rel(v[i], v[j]), g = mk[i + ',' + j];
          if (c.kind === 'consec') { if (!!g !== !!r && !c.pos) bad.push('dots-' + c.kind); if (g && !r) bad.push('dots-' + c.kind); }
          else if (c.kind === 'kropki') { /* perechea 1–2 satisface ambele relații: punctul poate fi alb sau negru */
            const a = v[i], b = v[j], okw = Math.abs(a - b) === 1, okb = a === 2 * b || b === 2 * a;
            if (g ? !((g === 'w' && okw) || (g === 'b' && okb)) : (!c.pos && (okw || okb))) bad.push('dots-kropki'); }
          else { if (c.pos ? (g && g !== r) : (g || null) !== r) bad.push('dots-' + c.kind); }
        }
      }
    }
    if (P.clues.indexOf('clonemir') >= 0) for (const c of P.cons) if (c.t === 'clone') {
      const dr = pos(c.b[0])[0] - pos(c.a[0])[0], cs = c.a.map(x => pos(x)[1]), s = Math.min(...cs) + Math.max(...cs);
      let dcs = new Set(); c.a.forEach((x, i) => { if (pos(c.b[i])[0] - pos(x)[0] !== dr) bad.push('clonemir-r'); dcs.add(pos(c.b[i])[1] + pos(x)[1] - s); });
      if (dcs.size !== 1) bad.push('clonemir-c');
    }
  }

  /* ---------- Tipurile vechi (1.0–1.2): validatori independenți, adăugați în 1.3 ---------- */
  {
    const cnt = L.count, pos = x => L.pos[x], atRC = (r, c) => (r < 0 || c < 0 || r >= L.R || c >= L.C) ? -1 : L.at[r * L.C + c];
    const dist = g => new Set(g.map(x => v[x])).size === g.length;
    L.rows.forEach(g => { if (!dist(g)) bad.push('grup-rând'); }); L.cols.forEach(g => { if (!dist(g)) bad.push('grup-coloană'); });
    if (P.regions) { const m = {}; P.regions.forEach((id, x) => { (m[id] = m[id] || []).push(x); }); Object.values(m).forEach(g => { if (!dist(g)) bad.push('regiune'); }); }
    else if (m.indexOf('latin') < 0) L.boxes.forEach(g => { if (!dist(g)) bad.push('casetă'); });
    if (!L.composite && !L.cube && !L.greco) {
      const C = L.C, G = (r, c) => v[L.at[r * C + c]];
      const KN2 = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]], KG = [[1, 1], [1, 0], [1, -1], [0, 1], [0, -1], [-1, 1], [-1, 0], [-1, -1]];
      const pairs = (ds, f) => { for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) for (const [a, b] of ds) if (r + a >= 0 && c + b >= 0 && r + a < N && c + b < N && f(G(r, c), G(r + a, c + b))) return true; return false; };
      if (m.indexOf('antiknight') >= 0 && pairs(KN2, (x, y) => x === y)) bad.push('antiknight');
      if (m.indexOf('antiking') >= 0 && pairs(KG, (x, y) => x === y)) bad.push('antiking');
      if (m.indexOf('nonconsec') >= 0 && pairs([[0, 1], [1, 0]], (x, y) => Math.abs(x - y) === 1)) bad.push('nonconsec');
      if (m.indexOf('diag') >= 0) { const a = [], b = []; for (let i = 0; i < N; i++) { a.push(G(i, i)); b.push(G(i, N - 1 - i)); } if (new Set(a).size !== N || new Set(b).size !== N) bad.push('diag'); }
      if (m.indexOf('hyper') >= 0 && N === 9) for (const [r0, c0] of [[1, 1], [1, 5], [5, 1], [5, 5]]) { const s = new Set(); for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s.add(G(r0 + r, c0 + c)); if (s.size !== 9) bad.push('hyper'); }
      if (m.indexOf('center') >= 0 && N === 9) { const s = new Set(); for (let r = 1; r < 9; r += 3) for (let c = 1; c < 9; c += 3) s.add(G(r, c)); if (s.size !== 9) bad.push('center'); }
      if (m.indexOf('dg') >= 0 && !P.regions && m.indexOf('latin') < 0) { const br = L.br, bc = L.bc; for (let i = 0; i < br; i++) for (let j = 0; j < bc; j++) { const s = new Set(); for (let r = i; r < N; r += br) for (let c = j; c < N; c += bc) s.add(G(r, c)); if (s.size !== N) bad.push('dg'); } }
    }
    const cls = x => Math.floor((x - 1) * 3 / N);
    const isPair = x => x.length === 2;
    for (const c of P.cons) {
      const cl = c.cells, d = cl ? cl.map(x => v[x]) : null, k = cl ? cl.length : 0; let ok = true;
      switch (c.t) {
        case 'whisper': { const th = c.th || Math.ceil(N / 2); for (let i = 1; i < k; i++) ok = ok && Math.abs(d[i] - d[i - 1]) >= th; break; }
        case 'thermo': for (let i = 1; i < k; i++) ok = ok && d[i] > d[i - 1]; break;
        case 'arrow': ok = d.slice(1).reduce((a, b) => a + b, 0) === d[0]; break;
        case 'renban': { const s = [...d].sort((a, b) => a - b); for (let i = 1; i < k; i++) ok = ok && s[i] === s[i - 1] + 1; break; }
        case 'palin': for (let i = 0; i < k; i++) ok = ok && d[i] === d[k - 1 - i]; break;
        case 'between': { const lo = Math.min(d[0], d[k - 1]), hi = Math.max(d[0], d[k - 1]); for (let i = 1; i < k - 1; i++) ok = ok && d[i] > lo && d[i] < hi; break; }
        case 'entropic': for (let i = 1; i < k; i++) { ok = ok && cls(d[i]) !== cls(d[i - 1]); if (i >= 2) ok = ok && cls(d[i]) !== cls(d[i - 2]); } break;
        case 'modular': for (let i = 1; i < k; i++) { ok = ok && (d[i] - 1) % 3 !== (d[i - 1] - 1) % 3; if (i >= 2) ok = ok && (d[i] - 1) % 3 !== (d[i - 2] - 1) % 3; } break;
        case 'osum': ok = d.reduce((a, b) => a + b, 0) === c.sum; break;
        case 'lk': ok = d.reduce((a, b) => a + b, 0) === c.sum; break;
        case 'cage': if (!c.dbl) ok = new Set(d).size === k && d.reduce((a, b) => a + b, 0) === c.sum; break;
        case 'sandwich': { const p = d.indexOf(1), q = d.indexOf(N); let s = 0; for (let i = Math.min(p, q) + 1; i < Math.max(p, q); i++) s += d[i]; ok = s === c.sum; break; }
        case 'sky': { let mx = 0, n = 0; d.forEach(x => { if (x > mx) { mx = x; n++; } }); ok = n === c.clue; break; }
        case 'xsum': ok = d.slice(0, d[0]).reduce((a, b) => a + b, 0) === c.sum; break;
        case 'quad': { const have = {}; d.forEach(x => { have[x] = (have[x] || 0) + 1; }); const need = {}; c.digits.forEach(x => { need[x] = (need[x] || 0) + 1; }); for (const x in need) ok = ok && (have[x] || 0) >= need[x]; ok = ok && k === 4; break; }
        case 'parity': for (const [x, t] of c.marks) ok = ok && (v[x] % 2 === 0) === (t === 'e'); break;
        case 'lt': for (const q of c.marks) ok = ok && v[q.a] < v[q.b]; break;
        case 'calc': { const mx = Math.max(...d), mn = Math.min(...d); const val = c.op === '+' ? d.reduce((a, b) => a + b, 0) : c.op === 'x' ? d.reduce((a, b) => a * b, 1) : c.op === '-' ? mx - mn : mx / mn; ok = val === c.val && (c.op !== '/' || mx % mn === 0); break; }
        case 'batt': { const ms = new Set(c.marks); for (let r = 0; r < L.R - 1; r++) for (let q = 0; q < L.C - 1; q++) {
          const a = atRC(r, q), b = atRC(r, q + 1), cc = atRC(r + 1, q), dd = atRC(r + 1, q + 1); if (a < 0 || b < 0 || cc < 0 || dd < 0) continue;
          const pa = v[a] % 2, pb = v[b] % 2, pc = v[cc] % 2, pd = v[dd] % 2, pat = pa === pd && pb === pc && pa !== pb;
          if (pat !== ms.has(a)) ok = false; } break; }
        default: continue;
      }
      if (!ok) bad.push('vechi-' + c.t);
    }
    /* Doar pare/impare marcate: indiciile adevărate; Kropki completă, XV complet, Consecutiv complet verificate mai sus */
  }
  if (L.greco) {
    const N2 = N * N, seenP = new Set();
    for (let i = 0; i < N2; i++) { const k = v[i] + ',' + v[N2 + i]; if (seenP.has(k)) bad.push('greco-ortogonal'); seenP.add(k); }
    for (let ly = 0; ly < 2; ly++) for (let a = 0; a < N; a++) {
      const rr = new Set(), cc = new Set();
      for (let b = 0; b < N; b++) { rr.add(v[ly * N2 + a * N + b]); cc.add(v[ly * N2 + b * N + a]); }
      if (rr.size !== N || cc.size !== N) bad.push('greco-latin');
    }
  }
  return bad;
}

const presets = Object.keys(SFF.PRESETS).filter(p => !only || p === only);
for (const name of presets) {
  const pr = SFF.PRESETS[name];
  for (const n of pr.sizes) {
    for (const diff of ['easy', 'hard']) {
      const label = name + ' ' + n + ' ' + diff;
      const t0 = Date.now();
      let P;
      try { P = SFF.generate({ preset: name, n: n, difficulty: diff, seed: 7 + n }); }
      catch (e) { check(label + ' generare', false, e.message); continue; }
      const ms = Date.now() - t0;
      const S = SFF.makeSolver(P);
      check(label + ' soluție validă', S.verify(Int32Array.from(P.solution)));
      { const bd = semantic(P); check(label + ' semantică independentă', bd.length === 0, bd.join(',')); }
      const res = S.solve(Int32Array.from(P.givens), { limit: 2, budget: 3000000 });
      check(label + ' unică', res.count === 1 && !res.aborted, 'count=' + res.count + ' aborted=' + res.aborted);
      if (res.count >= 1) check(label + ' aceeași soluție', res.sols[0].every((v, i) => v === P.solution[i]));
      check(label + ' soundness', soundness(S, P, 12));
      const cl = P.givens.filter(Boolean).length;
      console.log(label.padEnd(26), 'ind=' + String(cl).padStart(3) + '/' + S.cnt, 'cons=' + P.cons.length, ms + 'ms');
    }
  }
}

/* verificare încrucișată: număr de soluții 4×4 (fără indicii) prin enumerare vs. solver */
function perms(a){ if(a.length<=1) return [a]; const o=[]; a.forEach((x,i)=>perms(a.slice(0,i).concat(a.slice(i+1))).forEach(p=>o.push([x].concat(p)))); return o; }
if (!only) {
  const PM = perms([1,2,3,4]);
  for (const name of Object.keys(SFF.PRESETS)) {
    const pr = SFF.PRESETS[name]; if (pr.sizes.indexOf(4) < 0 || pr.layout) continue;
    const P = SFF.generate({ preset: name, n: 4, difficulty: 'easy', seed: 99 });
    const S = SFF.makeSolver(Object.assign({}, P, { givens: null }));
    let brute = 0; const v = new Int32Array(16);
    for (const a of PM) for (const b of PM) for (const c of PM) for (const d of PM) {
      [a,b,c,d].forEach((row,r)=>row.forEach((x,k)=>{v[r*4+k]=x;}));
      if (S.verify(v)) brute++;
    }
    const res = S.solve(null, { limit: 1e7, budget: 1e7 });
    check('încrucișat ' + name + ' 4x4', res.count === brute && !res.aborted, 'brute=' + brute + ' solver=' + res.count);
    console.log('încrucișat', name.padEnd(12), 'soluții fără indicii:', brute);
  }
}
/* combinații personalizate */
if (!only) {
  const combos = [
    { mods: ['diag'], clues: ['killer'] }, { mods: ['antiknight'], clues: ['kropki'] },
    { mods: [], clues: ['thermo', 'arrow'] }, { mods: ['hyper'], clues: ['sandwich'] },
    { mods: ['diag', 'hyper'], clues: [] }, { jigsaw: true, mods: [], clues: ['killer'] },
    { mods: ['asterisk'], clues: ['nabner'] }, { mods: ['diag1'], clues: ['zipper', 'outside'] }, { mods: [], clues: ['clone', 'rossini'] },
    { mods: ['antiking'], clues: ['regionsum'] }, { mods: [], clues: ['luk', 'minmax'] }, { mods: ['girandola'], clues: ['pillarrow'] }, { mods: ['sparse9'], clues: ['pillarrow'] }
  ];
  combos.forEach((cb, i) => {
    const t0 = Date.now();
    try {
      const P = SFF.generate(Object.assign({ n: 9, difficulty: 'medium', seed: 31 + i }, cb));
      const S = SFF.makeSolver(P);
      const res = S.solve(Int32Array.from(P.givens), { limit: 2, budget: 3000000 });
      check('combo ' + JSON.stringify(cb), res.count === 1 && !res.aborted && S.verify(Int32Array.from(P.solution)));
      console.log('combo', JSON.stringify(cb).padEnd(52), 'ind=' + P.givens.filter(Boolean).length, (Date.now() - t0) + 'ms');
    } catch (e) { check('combo ' + JSON.stringify(cb), false, e.message); }
  });
}

/* verificare încrucișată pentru cuburi, hipercuburi și Greco-Latin: enumerare DFS pe grupurile din aranjament (cod separat de solver) */
function bruteCount(layoutSpec, orth, limit) {
  const L = SFF.makeLayout(layoutSpec), N = L.N, cnt = L.count, groups = L.rows.concat(L.cols, L.boxes), of = Array.from({ length: cnt }, () => []);
  groups.forEach((g, gi) => g.forEach(c => of[c].push(gi)));
  const used = new Int32Array(groups.length), val = new Int32Array(cnt), pairs = new Set(); let sols = 0;
  const N2 = N * N;
  (function rec(i) {
    if (sols >= limit) return;
    if (i === cnt) { sols++; return; }
    let m = 0; for (const gi of of[i]) m |= used[gi];
    for (let v = 1; v <= N; v++) {
      if (m >> v & 1) continue;
      let key = null;
      if (orth && i >= N2) { key = val[i - N2] * 16 + v; if (pairs.has(key)) continue; pairs.add(key); }
      for (const gi of of[i]) used[gi] |= 1 << v; val[i] = v;
      rec(i + 1);
      for (const gi of of[i]) used[gi] &= ~(1 << v); val[i] = 0;
      if (key !== null) pairs.delete(key);
    }
  })(0);
  return sols;
}
if (!only) {
  for (const [name, n, orth] of [['cube3', 4, false], ['cubebox', 4, false], ['hyper4', 3, false], ['greco', 3, true], ['greco', 4, true]]) {
    const pr = SFF.PRESETS[name], P = SFF.generate({ preset: name, n: n, difficulty: 'easy', seed: 99 });
    const S = SFF.makeSolver(Object.assign({}, P, { givens: null }));
    const res = S.solve(null, { limit: 1e8, budget: 1e8 });
    const brute = bruteCount(P.layout, orth, 1e8);
    check('încrucișat ' + name + ' ' + n, res.count === brute && !res.aborted, 'brute=' + brute + ' solver=' + res.count);
    console.log('încrucișat', name.padEnd(8), n, 'soluții fără indicii:', brute);
  }
}

/* chei duplicate în textele interfeței (data.js): ultima ar suprascrie-o pe prima în tăcere */
(function () {
  const fsx = require('fs'), pth = require('path'); let f = pth.join(__dirname, 'src', 'data.js');
  if (!fsx.existsSync(f)) return;
  const L = fsx.readFileSync(f, 'utf8').split('\n');
  const a = L.findIndex(l => l.startsWith('var U = {')), e = L.findIndex((l, i) => i > a && l.startsWith('en: {')), z = L.findIndex((l, i) => i > e && /^(\};|var MODS)/.test(l));
  [['ro', L.slice(a, e)], ['en', L.slice(e, z)]].forEach(function (p) {
    const keys = (p[1].join('\n').match(/(?:^|[\s,{])([A-Za-z_][A-Za-z_0-9]*)\s*:\s*['"\[`]/g) || []).map(s => s.replace(/^[\s,{]/, '').replace(/\s*:.*$/, ''));
    const dup = keys.filter((k, i) => keys.indexOf(k) !== i);
    total++; if (dup.length) { fails++; console.log('CHEI DUPLICATE în texte ' + p[0] + ': ' + dup.join(',')); }
  });
})();
console.log(fails ? ('\n' + fails + ' EȘECURI din ' + total) : ('\nToate cele ' + total + ' verificări au trecut.'));
process.exit(fails ? 1 : 0);
