# SPDX-License-Identifier: MIT · Copyright (c) 2026 Alexandru-Ionuț Chiuță (Alexio)
import re
r=lambda p:open(p,encoding='utf8').read()
t=r('src/template.html')
t=t.replace('/*CSS*/',r('src/style.css'))
t=t.replace('/*ENGINE*/',r('engine.js'))
t=t.replace('/*APP*/',r('src/data.js')+'\n'+r('src/app.js'))
import hashlib,base64
def _h(x): return "'sha256-"+base64.b64encode(hashlib.sha256(x.encode('utf8')).digest()).decode()+"'"
_sc=[m for m in re.findall(r'<script[^>]*>(.*?)</script>',t,flags=re.S)]
_csp="default-src 'none'; script-src "+' '.join(_h(x) for x in _sc)+"; style-src 'unsafe-inline'; img-src data: blob:; worker-src blob:; connect-src 'none'; base-uri 'none'; form-action 'none'"
t=t.replace('<!--CSP-->','<meta http-equiv="Content-Security-Policy" content="'+_csp+'">')
open('index.html','w',encoding='utf8').write(t)
print(len(t),'bytes')
