# SPDX-License-Identifier: MIT · Copyright (c) 2026 Alexandru-Ionuț Chiuță (Alexio)
import re
r=lambda p:open(p,encoding='utf8').read()
t=r('src/template.html')
t=t.replace('/*CSS*/',r('src/style.css'))
t=t.replace('/*ENGINE*/',r('engine.js'))
t=t.replace('/*APP*/',r('src/data.js')+'\n'+r('src/app.js'))
open('index.html','w',encoding='utf8').write(t)
print(len(t),'bytes')
