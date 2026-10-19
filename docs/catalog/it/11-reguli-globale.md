# Catalogo: Regole globali (10)

[English](../en/11-reguli-globale.md) · [Română](../11-reguli-globale.md) · [Français](../fr/11-reguli-globale.md) · **Italiano** · [Español](../es/11-reguli-globale.md) · [Português](../pt/11-reguli-globale.md) · [Deutsch](../de/11-reguli-globale.md) · [Magyar](../hu/11-reguli-globale.md)

[← README](../../../README.it.md) · [Tutte le categorie](README.md)

[Dimensione e simboli](01-marime-si-simboluri.md) · [Regioni e gruppi](02-regiuni-si-grupuri.md) · [Vicini](03-vecini.md) · [Parità, punti, segni](04-paritate-puncte-semne.md) · [Somme](05-sume.md) · [Indizi sul bordo](06-indicii-pe-margine.md) · [Linee](07-linii.md) · [Griglie composte](08-grile-compuse.md) · [Parenti stretti](09-rude-apropiate.md) · [Topologie e mosse fairy](10-topologii-si-mutari-fairy.md) · **Regole globali** · [Indizi nelle celle](12-indicii-in-celule.md) · [Dimensioni superiori](13-dimensiuni-superioare.md)

---


_La regola riguarda l'intera griglia e, di regola, non ha segni propri; verificala con «Verifica» oppure osserva i conflitti._

<a id="symcomp"></a>
#### 111. Simmetria complementare · Complementary symmetry (`symcomp`)

**Le celle simmetriche rispetto al centro sommano N+1.**

Oltre alle regole classiche, due celle qualsiasi simmetriche rispetto al centro della griglia (rotazione di 180°) sommano N+1 (nel 9×9: 10). La cella centrale è quindi 5. Dimensioni 9×9 e 4×4.

<table><tr><td align="center"><img src="../../screens/symcomp_a.webp" width="300" alt="Simmetria complementare: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 23 indizi)</sub></td><td align="center"><img src="../../screens/symcomp_b.webp" width="300" alt="Simmetria complementare: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 1 (riga 5, col. 4): tutte le altre cifre compaiono già tra le celle evidenziate (riga, colonna, regione o regola di vicinato).
- **Codice per lo stesso puzzle:** `symcomp-9-medium-913346369` (incollalo in «Nuova partita → Codice») · impegno del risolutore: nessuna ramificazione

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_card.webp" width="200" alt="Simmetria complementare: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_fiche.webp" width="260" alt="Simmetria complementare: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_s4.webp" width="200" alt="Simmetria complementare: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_s9.webp" width="200" alt="Simmetria complementare: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_easy.webp" width="200" alt="Simmetria complementare: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_a.webp" width="200" alt="Simmetria complementare: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_hard.webp" width="200" alt="Simmetria complementare: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_notes.webp" width="200" alt="Simmetria complementare: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_check.webp" width="200" alt="Simmetria complementare: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_solved.webp" width="200" alt="Simmetria complementare: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_dark.webp" width="200" alt="Simmetria complementare: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_mobile.webp" width="150" alt="Simmetria complementare: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_en.webp" width="300" alt="Simmetria complementare: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_rules.webp" width="300" alt="Simmetria complementare: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="symparity"></a>
#### 112. Parità simmetrica · Symmetric parity (`symparity`)

**Le celle simmetriche rispetto al centro hanno la stessa parità.**

Oltre alle regole classiche, due celle qualsiasi simmetriche rispetto al centro della griglia (rotazione di 180°) sono entrambe pari o entrambe dispari.

<table><tr><td align="center"><img src="../../screens/symparity_a.webp" width="300" alt="Parità simmetrica: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 24 indizi)</sub></td><td align="center"><img src="../../screens/symparity_b.webp" width="300" alt="Parità simmetrica: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 5 (riga 1, col. 1): deriva dalle regole specifiche della variante (indizi, somme, relazioni), combinate con le altre cifre.
- **Codice per lo stesso puzzle:** `symparity-9-medium-2361855335` (incollalo in «Nuova partita → Codice») · impegno del risolutore: nessuna ramificazione

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_card.webp" width="200" alt="Parità simmetrica: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/symparity_fiche.webp" width="260" alt="Parità simmetrica: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_s4.webp" width="200" alt="Parità simmetrica: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s6.webp" width="200" alt="Parità simmetrica: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s9.webp" width="200" alt="Parità simmetrica: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_easy.webp" width="200" alt="Parità simmetrica: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/symparity_a.webp" width="200" alt="Parità simmetrica: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/symparity_hard.webp" width="200" alt="Parità simmetrica: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_notes.webp" width="200" alt="Parità simmetrica: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_check.webp" width="200" alt="Parità simmetrica: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_solved.webp" width="200" alt="Parità simmetrica: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_dark.webp" width="200" alt="Parità simmetrica: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/symparity_mobile.webp" width="150" alt="Parità simmetrica: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_en.webp" width="300" alt="Parità simmetrica: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_rules.webp" width="300" alt="Parità simmetrica: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="cgrav"></a>
#### 113. Baricentro · Centre of gravity (`cgrav`)

**Ogni riga sta in equilibrio come un'altalena.**

Oltre alle regole classiche, ogni riga è in equilibrio: se le posizioni si numerano da −4 a +4 e ogni cifra è un peso, la somma dei pesi × posizioni è 0 (il baricentro è esattamente al centro). Solo 9×9; la generazione può richiedere qualche secondo a Facile e fino a ~20 s a Difficile.

<table><tr><td align="center"><img src="../../screens/cgrav_a.webp" width="300" alt="Baricentro: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 26 indizi)</sub></td><td align="center"><img src="../../screens/cgrav_b.webp" width="300" alt="Baricentro: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 4 (riga 1, col. 7): tutte le altre cifre compaiono già tra le celle evidenziate (riga, colonna, regione o regola di vicinato).
- **Codice per lo stesso puzzle:** `cgrav-9-medium-1954301562` (incollalo in «Nuova partita → Codice») · impegno del risolutore: nessuna ramificazione

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_card.webp" width="200" alt="Baricentro: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_fiche.webp" width="260" alt="Baricentro: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_s9.webp" width="200" alt="Baricentro: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_easy.webp" width="200" alt="Baricentro: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_a.webp" width="200" alt="Baricentro: Media"><br><sub>Media</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_notes.webp" width="200" alt="Baricentro: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_check.webp" width="200" alt="Baricentro: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_solved.webp" width="200" alt="Baricentro: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_dark.webp" width="200" alt="Baricentro: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_mobile.webp" width="150" alt="Baricentro: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_en.webp" width="300" alt="Baricentro: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_rules.webp" width="300" alt="Baricentro: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="lexrows"></a>
#### 114. Righe lessicografiche · Lexicographic rows (`lexrows`)

**Le righe crescono come parole (prima colonna: 1…N).**

Oltre alle regole classiche, leggendo le righe dall'alto in basso come «parole» di cifre, ogni riga è strettamente minore in ordine lessicografico di quella sottostante (si confronta la prima cifra diversa). Poiché la prima colonna contiene cifre diverse, la regola significa in realtà che la prima colonna, letta dall'alto in basso, è 1, 2, …, N.

<table><tr><td align="center"><img src="../../screens/lexrows_a.webp" width="300" alt="Righe lessicografiche: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 23 indizi)</sub></td><td align="center"><img src="../../screens/lexrows_b.webp" width="300" alt="Righe lessicografiche: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 3 (riga 7, col. 6): è l'unica cella della colonna evidenziata in cui può stare 3.
- **Codice per lo stesso puzzle:** `lexrows-9-medium-957311172` (incollalo in «Nuova partita → Codice») · impegno del risolutore: 1 ramificazione

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_card.webp" width="200" alt="Righe lessicografiche: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_fiche.webp" width="260" alt="Righe lessicografiche: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_s4.webp" width="200" alt="Righe lessicografiche: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s6.webp" width="200" alt="Righe lessicografiche: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s9.webp" width="200" alt="Righe lessicografiche: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_easy.webp" width="200" alt="Righe lessicografiche: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_a.webp" width="200" alt="Righe lessicografiche: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_hard.webp" width="200" alt="Righe lessicografiche: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_notes.webp" width="200" alt="Righe lessicografiche: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_check.webp" width="200" alt="Righe lessicografiche: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_solved.webp" width="200" alt="Righe lessicografiche: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_dark.webp" width="200" alt="Righe lessicografiche: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_mobile.webp" width="150" alt="Righe lessicografiche: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_en.webp" width="300" alt="Righe lessicografiche: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_rules.webp" width="300" alt="Righe lessicografiche: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="extremes"></a>
#### 115. Estremi adiacenti · Touching extremes (`extremes`)

**Il minimo e il massimo del riquadro si toccano.**

Oltre alle regole classiche, in ogni riquadro le cifre 1 e N stanno in celle adiacenti, anche in diagonale (mossa di re). La convenzione «anche in diagonale» è scelta qui: con soli vicini ortogonali non esistono griglie 9×9 (verificato in modo esaustivo).

<table><tr><td align="center"><img src="../../screens/extremes_a.webp" width="300" alt="Estremi adiacenti: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 23 indizi)</sub></td><td align="center"><img src="../../screens/extremes_b.webp" width="300" alt="Estremi adiacenti: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 6 (riga 4, col. 4): è l'unica cella della colonna evidenziata in cui può stare 6.
- **Codice per lo stesso puzzle:** `extremes-9-medium-1348183675` (incollalo in «Nuova partita → Codice») · impegno del risolutore: 2 ramificazioni

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_card.webp" width="200" alt="Estremi adiacenti: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/extremes_fiche.webp" width="260" alt="Estremi adiacenti: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_s4.webp" width="200" alt="Estremi adiacenti: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s6.webp" width="200" alt="Estremi adiacenti: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s9.webp" width="200" alt="Estremi adiacenti: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_easy.webp" width="200" alt="Estremi adiacenti: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/extremes_a.webp" width="200" alt="Estremi adiacenti: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/extremes_hard.webp" width="200" alt="Estremi adiacenti: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_notes.webp" width="200" alt="Estremi adiacenti: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_check.webp" width="200" alt="Estremi adiacenti: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_solved.webp" width="200" alt="Estremi adiacenti: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_dark.webp" width="200" alt="Estremi adiacenti: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/extremes_mobile.webp" width="150" alt="Estremi adiacenti: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_en.webp" width="300" alt="Estremi adiacenti: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_rules.webp" width="300" alt="Estremi adiacenti: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="boxbalance"></a>
#### 116. Riquadri bilanciati · Balanced boxes (`boxbalance`)

**La prima e l'ultima colonna del riquadro hanno la stessa somma.**

Oltre alle regole classiche, in ogni riquadro la somma delle cifre della colonna di sinistra è uguale alla somma delle cifre della colonna di destra.

<table><tr><td align="center"><img src="../../screens/boxbalance_a.webp" width="300" alt="Riquadri bilanciati: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 23 indizi)</sub></td><td align="center"><img src="../../screens/boxbalance_b.webp" width="300" alt="Riquadri bilanciati: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 6 (riga 6, col. 4): nessuna deduzione diretta; la cifra è presa dalla soluzione unica (servirebbe un'ipotesi).
- **Codice per lo stesso puzzle:** `boxbalance-9-medium-1668427631` (incollalo in «Nuova partita → Codice») · impegno del risolutore: 314 ramificazioni

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_card.webp" width="200" alt="Riquadri bilanciati: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_fiche.webp" width="260" alt="Riquadri bilanciati: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_s4.webp" width="200" alt="Riquadri bilanciati: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s6.webp" width="200" alt="Riquadri bilanciati: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s9.webp" width="200" alt="Riquadri bilanciati: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_easy.webp" width="200" alt="Riquadri bilanciati: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_a.webp" width="200" alt="Riquadri bilanciati: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_hard.webp" width="200" alt="Riquadri bilanciati: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_notes.webp" width="200" alt="Riquadri bilanciati: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_check.webp" width="200" alt="Riquadri bilanciati: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_solved.webp" width="200" alt="Riquadri bilanciati: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_dark.webp" width="200" alt="Riquadri bilanciati: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_mobile.webp" width="150" alt="Riquadri bilanciati: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_en.webp" width="300" alt="Riquadri bilanciati: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_rules.webp" width="300" alt="Riquadri bilanciati: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="lonely5"></a>
#### 117. Il cinque solitario · Lonely 5 (`lonely5`)

**Un 5 ha solo vicini pari.**

Oltre alle regole classiche, ogni 5 ha solo vicini ortogonali pari. Dimensioni 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/lonely5_a.webp" width="300" alt="Il cinque solitario: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 24 indizi)</sub></td><td align="center"><img src="../../screens/lonely5_b.webp" width="300" alt="Il cinque solitario: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 2 (riga 5, col. 3): è l'unica cella della riga evidenziata in cui può stare 2.
- **Codice per lo stesso puzzle:** `lonely5-9-medium-4284537212` (incollalo in «Nuova partita → Codice») · impegno del risolutore: nessuna ramificazione

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_card.webp" width="200" alt="Il cinque solitario: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_fiche.webp" width="260" alt="Il cinque solitario: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_s6.webp" width="200" alt="Il cinque solitario: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_s9.webp" width="200" alt="Il cinque solitario: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_easy.webp" width="200" alt="Il cinque solitario: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_a.webp" width="200" alt="Il cinque solitario: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_hard.webp" width="200" alt="Il cinque solitario: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_notes.webp" width="200" alt="Il cinque solitario: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_check.webp" width="200" alt="Il cinque solitario: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_solved.webp" width="200" alt="Il cinque solitario: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_dark.webp" width="200" alt="Il cinque solitario: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_mobile.webp" width="150" alt="Il cinque solitario: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_en.webp" width="300" alt="Il cinque solitario: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_rules.webp" width="300" alt="Il cinque solitario: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="nolonely"></a>
#### 118. Senza celle isolate · No lonely cells (`nolonely`)

**Ogni cella ha un vicino consecutivo.**

Oltre alle regole classiche, ogni cella ha almeno un vicino ortogonale la cui cifra differisce di esattamente 1.

<table><tr><td align="center"><img src="../../screens/nolonely_a.webp" width="300" alt="Senza celle isolate: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 23 indizi)</sub></td><td align="center"><img src="../../screens/nolonely_b.webp" width="300" alt="Senza celle isolate: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 5 (riga 9, col. 9): tutte le altre cifre compaiono già tra le celle evidenziate (riga, colonna, regione o regola di vicinato).
- **Codice per lo stesso puzzle:** `nolonely-9-medium-355818888` (incollalo in «Nuova partita → Codice») · impegno del risolutore: nessuna ramificazione

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_card.webp" width="200" alt="Senza celle isolate: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_fiche.webp" width="260" alt="Senza celle isolate: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_s4.webp" width="200" alt="Senza celle isolate: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s6.webp" width="200" alt="Senza celle isolate: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s9.webp" width="200" alt="Senza celle isolate: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_easy.webp" width="200" alt="Senza celle isolate: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_a.webp" width="200" alt="Senza celle isolate: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_hard.webp" width="200" alt="Senza celle isolate: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_notes.webp" width="200" alt="Senza celle isolate: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_check.webp" width="200" alt="Senza celle isolate: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_solved.webp" width="200" alt="Senza celle isolate: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_dark.webp" width="200" alt="Senza celle isolate: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_mobile.webp" width="150" alt="Senza celle isolate: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_en.webp" width="300" alt="Senza celle isolate: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_rules.webp" width="300" alt="Senza celle isolate: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="noprog"></a>
#### 119. Senza progressioni · No arithmetic progressions (`noprog`)

**Tre cifre adiacenti non formano una progressione aritmetica.**

Oltre alle regole classiche, tre celle adiacenti su una riga o su una colonna non possono formare una progressione aritmetica (ad es. 2-4-6 o 7-5-3 sono vietate).

<table><tr><td align="center"><img src="../../screens/noprog_a.webp" width="300" alt="Senza progressioni: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 24 indizi)</sub></td><td align="center"><img src="../../screens/noprog_b.webp" width="300" alt="Senza progressioni: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 2 (riga 3, col. 7): tutte le altre cifre compaiono già tra le celle evidenziate (riga, colonna, regione o regola di vicinato).
- **Codice per lo stesso puzzle:** `noprog-9-medium-3644248957` (incollalo in «Nuova partita → Codice») · impegno del risolutore: 6 ramificazioni

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_card.webp" width="200" alt="Senza progressioni: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/noprog_fiche.webp" width="260" alt="Senza progressioni: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_s4.webp" width="200" alt="Senza progressioni: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s6.webp" width="200" alt="Senza progressioni: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s9.webp" width="200" alt="Senza progressioni: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_easy.webp" width="200" alt="Senza progressioni: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/noprog_a.webp" width="200" alt="Senza progressioni: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/noprog_hard.webp" width="200" alt="Senza progressioni: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_notes.webp" width="200" alt="Senza progressioni: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_check.webp" width="200" alt="Senza progressioni: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_solved.webp" width="200" alt="Senza progressioni: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_dark.webp" width="200" alt="Senza progressioni: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/noprog_mobile.webp" width="150" alt="Senza progressioni: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_en.webp" width="300" alt="Senza progressioni: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_rules.webp" width="300" alt="Senza progressioni: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

<a id="semimagic"></a>
#### 120. Riquadri semimagici · Semi-magic boxes (`semimagic`)

**Le righe di ogni riquadro sommano 15; così le colonne.**

Oltre alle regole classiche, ogni riga e ogni colonna di ogni riquadro sommano 15. I riquadri completamente magici (con le diagonali) sono impossibili, perché i tre riquadri di una fascia avrebbero tutti il centro 5 nella stessa riga della griglia; per questo le diagonali non sono vincolate. Solo 9×9 (nel 4×4 le righe e le colonne richiederebbero riquadri con cifre ripetute).

<table><tr><td align="center"><img src="../../screens/semimagic_a.webp" width="300" alt="Riquadri semimagici: puzzle iniziale"><br><sub>Puzzle iniziale (9×9 · medio · 23 indizi)</sub></td><td align="center"><img src="../../screens/semimagic_b.webp" width="300" alt="Riquadri semimagici: dopo 4 passi"><br><sub>Dopo 4 passi di «Passo passo»</sub></td></tr></table>

- **Ultimo passo spiegato dall'app:** 8 (riga 5, col. 5): tutte le altre cifre compaiono già tra le celle evidenziate (riga, colonna, regione o regola di vicinato).
- **Codice per lo stesso puzzle:** `semimagic-9-medium-3291682902` (incollalo in «Nuova partita → Codice») · impegno del risolutore: nessuna ramificazione

<details><summary><b>Galleria completa: tutti i tipi di schermata</b></summary>

<p><b>Atlante</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_card.webp" width="200" alt="Riquadri semimagici: La scheda nell'Atlante"><br><sub>La scheda nell'Atlante</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_fiche.webp" width="260" alt="Riquadri semimagici: La scheda (si apre con un clic sulla carta)"><br><sub>La scheda (si apre con un clic sulla carta)</sub></td></tr>
</table>

<p><b>Dimensioni (livello medio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_s9.webp" width="200" alt="Riquadri semimagici: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Difficoltà</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_easy.webp" width="200" alt="Riquadri semimagici: Facile"><br><sub>Facile</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_a.webp" width="200" alt="Riquadri semimagici: Media"><br><sub>Media</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_hard.webp" width="200" alt="Riquadri semimagici: Difficile"><br><sub>Difficile</sub></td></tr>
</table>

<p><b>Stati di gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_notes.webp" width="200" alt="Riquadri semimagici: Appunti automatici (candidati)"><br><sub>Appunti automatici (candidati)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_check.webp" width="200" alt="Riquadri semimagici: «Verifica» con una cifra sbagliata (rosso)"><br><sub>«Verifica» con una cifra sbagliata (rosso)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_solved.webp" width="200" alt="Riquadri semimagici: La soluzione completa"><br><sub>La soluzione completa</sub></td></tr>
</table>

<p><b>Temi e dispositivi</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_dark.webp" width="200" alt="Riquadri semimagici: Tema scuro"><br><sub>Tema scuro</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_mobile.webp" width="150" alt="Riquadri semimagici: Telefono (390 px)"><br><sub>Telefono (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_en.webp" width="300" alt="Riquadri semimagici: Interfaccia in inglese"><br><sub>Interfaccia in inglese</sub></td></tr>
</table>

<p><b>Il pannello delle regole nel gioco</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_rules.webp" width="300" alt="Riquadri semimagici: Le regole mostrate accanto alla tavola"><br><sub>Le regole mostrate accanto alla tavola</sub></td></tr>
</table>

</details>

