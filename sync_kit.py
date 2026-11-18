#!/usr/bin/env python3
"""Aduce sursa la zi după `node fff-kit/build.mjs release …`, care modifică direct index.html (bloc de kit, versiune, dată).

  1. blocul <!--fff:kit:start…--> … <!--fff:kit:end--> din index.html  →  src/template.html
  2. meta application-version / last-updated din index.html           →  src/template.html
     și constanta `var VERSION` din index.html (scriptul „engine”)       →  engine.js
  3. rulează build.py și check_fresh.py (index.html trebuie să fie reproductibil din sursă).

Folosire (din rădăcina depozitului):  python3 sync_kit.py
Fără el, verificarea CI „index.html corespunde sursei” cade la fiecare actualizare de kit."""
import os, re, subprocess, sys

root = os.path.dirname(os.path.abspath(__file__))


def rd(p):
    with open(os.path.join(root, p), encoding='utf-8') as f:
        return f.read()


def wr(p, s):
    with open(os.path.join(root, p), 'w', encoding='utf-8') as f:
        f.write(s)


def one(pattern, text, what, flags=0):
    m = list(re.finditer(pattern, text, flags))
    if len(m) != 1:
        sys.exit(f'sync_kit: {what}: se așteaptă exact o apariție, am găsit {len(m)}')
    return m[0]


page, tpl, eng = rd('index.html'), rd('src/template.html'), rd('engine.js')
S, E = '<!--fff:kit:start', '<!--fff:kit:end-->'
if page.count(S) != 1 or page.count(E) != 1 or tpl.count(S) != 1 or tpl.count(E) != 1:
    sys.exit('sync_kit: blocul de kit lipsește sau apare de mai multe ori (index.html / src/template.html)')
tpl = tpl[:tpl.index(S)] + page[page.index(S):page.index(E) + len(E)] + tpl[tpl.index(E) + len(E):]

for name in ('application-version', 'last-updated'):
    pat = r'<meta name="%s" content="([^"]*)">' % name
    val = one(pat, page, 'index.html ' + name).group(1)
    m = one(pat, tpl, 'src/template.html ' + name)
    tpl = tpl[:m.start()] + '<meta name="%s" content="%s">' % (name, val) + tpl[m.end():]
ver = one(r"^var VERSION = '([^']*)';", page, 'index.html: var VERSION', re.M).group(1)
m = one(r"^var VERSION = '([^']*)';", eng, 'engine.js: var VERSION', re.M)
eng = eng[:m.start()] + "var VERSION = '%s';" % ver + eng[m.end():]

wr('src/template.html', tpl)
wr('engine.js', eng)
for script in ('build.py', 'check_fresh.py'):
    subprocess.run([sys.executable, os.path.join(root, script)], check=True)
