# Sudoku fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · **Italiano** · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versione:** 1.6.0 · **Ultimo aggiornamento:** 2026-10-19

Lingue dell'interfaccia: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Un atlante di varianti del Sudoku, con generatore e risolutore che funzionano in locale — in un unico file HTML.

**Licenza:** [MIT](LICENSE) · **Applicazione online:** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Guida illustrata (una sola pagina):** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.it.html>

![Alcune varianti, dopo «Passo dopo passo»](docs/screenshot.png)

## Che cos'è

Un atlante interattivo di 136 voci (≈130 con regole distinte: Seminterrato, Sudoku con zero e Righe lessicografiche sono logicamente quasi identiche ad altre varianti e sono dichiarate come tali nelle schede) (classiche, con regioni speciali, topologie e salti fairy, regole globali, indizi sulle linee, sul bordo, nelle celle o nella griglia, griglie composte, cubi e ipercubi, greco-latino e parenti stretti), più 7 modalità di gioco. Ogni variante ha una scheda con le regole e si può giocare in locale: i puzzle sono generati nel browser, con una **soluzione unica dimostrata** da un risolutore a propagazione. Puoi anche combinare regole in una «Combinazione personalizzata».

## Guida all'uso

### Avvio rapido

1. Apri `index.html` in un browser (funziona offline, senza installazione).
2. In **Atlante** scegli una variante (ricerca, categorie, «Variante di oggi», «Sorprendimi»); ogni variante ha una scheda con le regole.
3. In **Gioca** scegli la variante, la dimensione, la difficoltà e la modalità, poi premi **Nuova partita**. Il puzzle viene generato nel browser, con soluzione unica.

<p align="center"><img src="docs/screens/ui_atlas.it.webp" width="760" alt="L'atlante delle varianti"><br><sub>Atlante: ricerca, filtri per categoria e schede con le dimensioni disponibili.</sub></p>

### La schermata di gioco

<p align="center"><img src="docs/screens/ui_play.it.webp" width="760" alt="La schermata di gioco"><br><sub>La tavola, la barra di stato (variante · dimensione · indizi · difficoltà · ramificazioni necessarie al risolutore · tempo), il pannello «Nuova partita» con codice di condivisione, il tastierino numerico e le azioni.</sub></p>

- **Cifre:** selezioni una cella (o più, con Maiusc/trascinamento) e premi la cifra, sulla tastiera o sul tastierino a schermo. Le cifre esaurite appaiono attenuate.
- **Tastiera:** frecce = sposta la selezione, cifre/lettere = compila, `Backspace`/`Canc`/`0` = cancella, `N` = appunti, `Ctrl+Z` / `Ctrl+Y` = annulla / ripeti.
- **Appunti:** il pulsante «Appunti» (o `N`) passa ai piccoli candidati nella cella; «Appunti automatici» li calcola dalle regole visibili.
- **Verifiche:** «Mostra i conflitti», «Evidenzia la stessa cifra», «Evidenzia le celle collegate» e «Cancella automaticamente gli appunti» si possono spuntare; «Verifica» segna le cifre sbagliate.
- **Suggerimento** compila una cella (con la logica sui candidati; se non esiste un passo diretto, la cifra viene dalla soluzione). **Mostra la soluzione** compila tutto.
- **Codice:** il codice accanto a «Nuova partita» rigenera lo stesso puzzle nella stessa versione dell'applicazione; lo incolli in «Apri».

<p align="center"><img src="docs/screens/ui_notes.it.webp" width="760" alt="Appunti"><br><sub>Appunti: i piccoli candidati in una cella.</sub></p>

### Passo dopo passo e ▶ Auto

**Passo dopo passo** inserisce una cifra e mostra il perché: le celle che la giustificano sono colorate (giallo), la nuova cella è verde e sotto la tavola compare la spiegazione. **▶ Auto** esegue i passi da solo, a 1,6 s. I motivi possibili: l'unica cifra rimasta nella cella; l'unica cella di una riga/colonna/regione dove la cifra può stare; una deduzione dalle regole della variante; oppure, quando non esiste una deduzione diretta, la cifra della soluzione (detto esplicitamente). Se hai una cifra sbagliata, il primo passo la corregge. Ogni passo si può annullare; è disattivato in Hardcore e in Memoria.

<p align="center"><img src="docs/screens/ui_step.it.webp" width="760" alt="Passo dopo passo"><br><sub>Dopo tre passi: l'ultima cifra (verde) e le celle che la giustificano (giallo), con la spiegazione sotto la tavola.</sub></p>

### Modalità di gioco

Si scelgono in «Nuova partita → Modalità di gioco»; il codice riceve il suffisso `@modalità` (eccezioni: «Puzzle del giorno» e Maratona non hanno suffisso; un codice di Maratona apre un puzzle ordinario).

- **Orb:** si vedono solo le celle a non più di 2 passi dalla selezione.
- **Memoria:** gli indizi si vedono per alcuni secondi, poi si nascondono; il pulsante di sbirciata costa 30 s. Senza indizi, verifica, appunti automatici, «Passo dopo passo» ed evidenziazione dei conflitti.
- **Maratona:** 5 puzzle di seguito (facile, facile, medio, medio, difficile) con un tempo totale.
- **Duello:** un avversario-cronometro completa una cella ogni pochi secondi, dalla soluzione nota (senza logica); se finisce per primo, perdi.
- **Hardcore:** 3 vite, ogni cifra sbagliata ne costa una; senza suggerimento, verifica o appunti automatici.
- **Puzzle del giorno:** lo stesso puzzle per tutti in un dato giorno (data UTC), con una serie di giorni consecutivi conservata in locale.
- **Sonoro:** ogni cifra ha una nota; una riga, una colonna o un riquadro completo suona un arpeggio.

<p align="center"><img src="docs/screens/ui_mode_orb.it.webp" width="760" alt="Modalità Orb"><br><sub>Modalità Orb: è visibile solo l'intorno della selezione.</sub></p>

### Cubi e ipercubi

Gli strati sono mostrati come mosaico di fette. Per i cubi 3D compare anche una «Vista 3D»: trascini con il mouse per ruotare il cubo e il cursore nasconde gli strati anteriori. Gli ipercubi 4D/5D restano solo per strati.

<p align="center"><img src="docs/screens/ui_3d.it.webp" width="760" alt="Vista 3D"><br><sub>Cubo latino 3D 4×4×4 nella vista 3D rotante.</sub></p>

### Risolutore classico 9×9

Incolli un puzzle (81 caratteri: 1–9, con i vuoti come 0 o `.`), spunti eventualmente regole aggiuntive (diagonali, finestre hyper, anti-cavallo ecc.) e premi **Risolvi**: l'applicazione dice se la soluzione è unica, multipla o inesistente. «Gioca questo puzzle» lo porta nella tavola di gioco.

<p align="center"><img src="docs/screens/ui_solver.it.webp" width="760" alt="Risolutore"><br><sub>Il risolutore con il puzzle di esempio: «Soluzione unica».</sub></p>

### Telefono e tema scuro

L'interfaccia si adatta agli schermi stretti; tema chiaro/scuro/automatico (il pulsante 🌓), testo ingrandito (il pulsante A), lingua RO/EN (il pulsante RO).

<p align="center"><img src="docs/screens/ui_mobile.it.webp" width="260" alt="Telefono, tema chiaro"> &nbsp; <img src="docs/screens/ui_dark.it.webp" width="260" alt="Telefono, tema scuro"></p>

### Combinazione personalizzata

In Atlante, «Combinazione personalizzata» (o la variante «Combinazione personalizzata» in «Nuova partita») permette di spuntare qualsiasi insieme compatibile di regole di griglia e di indizi (ad es. Killer + diagonali, termometri + frecce).

### Galleria dell'interfaccia (tutti i tipi di schermata)

**Atlante**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.it.webp" width="330" alt="Filtro per categoria"><br><sub>Filtro per categoria</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.it.webp" width="330" alt="Ricerca per nome"><br><sub>Ricerca per nome</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.it.webp" width="330" alt="Lessico"><br><sub>Lessico</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlante in inglese"><br><sub>Atlante in inglese</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.it.webp" width="330" alt="Atlante, tema scuro"><br><sub>Atlante, tema scuro</sub></td></tr></table>

**Modalità di gioco**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.it.webp" width="330" alt="Memoria: gli indizi sono visibili"><br><sub>Memoria: gli indizi sono visibili</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.it.webp" width="330" alt="Memoria: gli indizi si sono nascosti"><br><sub>Memoria: gli indizi si sono nascosti</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.it.webp" width="330" alt="Maratona"><br><sub>Maratona</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.it.webp" width="330" alt="Duello (l'avversario completa celle)"><br><sub>Duello (l'avversario completa celle)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.it.webp" width="330" alt="Hardcore: un errore costa una vita"><br><sub>Hardcore: un errore costa una vita</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.it.webp" width="330" alt="Puzzle del giorno"><br><sub>Puzzle del giorno</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.it.webp" width="330" alt="Sonoro"><br><sub>Sonoro</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.it.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Gioco e strumenti**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.it.webp" width="330" alt="▶ Auto in corso"><br><sub>▶ Auto in corso</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.it.webp" width="330" alt="Puzzle risolto"><br><sub>Puzzle risolto</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.it.webp" width="330" alt="Combinazione personalizzata (elenco delle regole)"><br><sub>Combinazione personalizzata (elenco delle regole)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.it.webp" width="330" alt="Vista 3D ruotata"><br><sub>Vista 3D ruotata</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Vista di stampa"><br><sub>Vista di stampa</sub></td></tr></table>

**Risolutore e Informazioni**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.it.webp" width="330" alt="Risolutore: griglia vuota (soluzioni multiple)"><br><sub>Risolutore: griglia vuota (soluzioni multiple)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.it.webp" width="330" alt="Risolutore: nessuna soluzione"><br><sub>Risolutore: nessuna soluzione</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.it.webp" width="330" alt="La pagina «Informazioni»"><br><sub>La pagina «Informazioni»</sub></td></tr></table>

## Catalogo delle varianti (136)

Ogni variante ha qui sotto: le regole della scheda, una schermata con un puzzle reale generato dall'applicazione (la dimensione predefinita della variante (9×9 dove esiste, altrimenti ad es. 5×5 o 4×4); livello «medio»), una seconda schermata dopo 4 passi di «Passo dopo passo», la spiegazione reale dell'ultimo passo e un codice con cui rigeneri esattamente lo stesso puzzle. Sotto ogni variante, una «Galleria completa» (espandibile) contiene gli altri tipi di schermate: la scheda nell'Atlante e la scheda, tutte le dimensioni, facile/medio/difficile, appunti automatici, verifica con una cifra sbagliata, la soluzione completa, il tema scuro, il telefono, l'interfaccia in inglese e il pannello delle regole. Le schermate si trovano in `docs/screens/`. Le schermate sono create automaticamente dalla versione 1.4.0, in tema chiaro.

**Catalogo completo:** [docs/catalog/it/README.md](docs/catalog/it/README.md)

| Categoria | Varianti |
|---|---|
| **Dimensione e simboli** | [Classico](docs/catalog/it/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/it/01-marime-si-simboluri.md#wordoku) · [Quadrato latino](docs/catalog/it/01-marime-si-simboluri.md#latin) · [Sudoku con zero](docs/catalog/it/01-marime-si-simboluri.md#zero) |
| **Regioni e gruppi** | [Sudoku X](docs/catalog/it/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/it/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (irregolare)](docs/catalog/it/02-regiuni-si-grupuri.md#jigsaw) · [Gruppi disgiunti](docs/catalog/it/02-regiuni-si-grupuri.md#dg) · [Punti centrali](docs/catalog/it/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/it/02-regiuni-si-grupuri.md#girandola) · [Nove sparsi](docs/catalog/it/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/it/02-regiuni-si-grupuri.md#asterisk) · [Diagonale semplice](docs/catalog/it/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/it/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/it/02-regiuni-si-grupuri.md#pandiag) |
| **Vicini** | [Anti-cavallo](docs/catalog/it/03-vecini.md#antiknight) · [Anti-re](docs/catalog/it/03-vecini.md#antiking) · [Senza consecutivi](docs/catalog/it/03-vecini.md#nonconsec) · [Miracolo](docs/catalog/it/03-vecini.md#miracle) |
| **Parità, punti, segni** | [Pari–dispari](docs/catalog/it/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/it/04-paritate-puncte-semne.md#kropki) · [Consecutivo](docs/catalog/it/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/it/04-paritate-puncte-semne.md#xv) · [Confronti](docs/catalog/it/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/it/04-paritate-puncte-semne.md#batt) · [Quadruple](docs/catalog/it/04-paritate-puncte-semne.md#quad) · [Solo pari marcati](docs/catalog/it/04-paritate-puncte-semne.md#evenonly) · [Solo dispari marcati](docs/catalog/it/04-paritate-puncte-semne.md#oddonly) · [Fortezza](docs/catalog/it/04-paritate-puncte-semne.md#fortress) · [Minimo / Massimo](docs/catalog/it/04-paritate-puncte-semne.md#minmax) · [Indicizzazione](docs/catalog/it/04-paritate-puncte-semne.md#indexing) · [Rapporto ×3](docs/catalog/it/04-paritate-puncte-semne.md#ratio) · [Differenza](docs/catalog/it/04-paritate-puncte-semne.md#diff) · [Kropki solo marcati](docs/catalog/it/04-paritate-puncte-semne.md#kropkipos) · [XV solo marcati](docs/catalog/it/04-paritate-puncte-semne.md#xvpos) · [Consecutivo solo marcati](docs/catalog/it/04-paritate-puncte-semne.md#consecpos) · [Senza indizi](docs/catalog/it/04-paritate-puncte-semne.md#clueless) |
| **Somme** | [Killer](docs/catalog/it/05-sume.md#killer) · [Little Killer](docs/catalog/it/05-sume.md#littlekiller) · [Little Killer unico](docs/catalog/it/05-sume.md#luk) |
| **Indizi sul bordo** | [Sandwich](docs/catalog/it/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/it/06-indicii-pe-margine.md#xsum) · [Frame (le prime tre)](docs/catalog/it/06-indicii-pe-margine.md#frame) · [Grattacieli](docs/catalog/it/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/it/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/it/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/it/06-indicii-pe-margine.md#radar) · [Sandwich numerico](docs/catalog/it/06-indicii-pe-margine.md#sandnum) · [Sandwich di parità](docs/catalog/it/06-indicii-pe-margine.md#sandpar) · [Sandwich doppio](docs/catalog/it/06-indicii-pe-margine.md#sand2) · [Seminterrato](docs/catalog/it/06-indicii-pe-margine.md#subsol) · [Prodotto sul bordo](docs/catalog/it/06-indicii-pe-margine.md#prodmargin) · [Differenza sul bordo](docs/catalog/it/06-indicii-pe-margine.md#diffmargin) · [Salite](docs/catalog/it/06-indicii-pe-margine.md#ascents) · [Inversioni](docs/catalog/it/06-indicii-pe-margine.md#inversions) · [Cicli](docs/catalog/it/06-indicii-pe-margine.md#cycles) · [Punti fissi](docs/catalog/it/06-indicii-pe-margine.md#fixedpts) · [Somma alternata](docs/catalog/it/06-indicii-pe-margine.md#altsum) · [Somme sulle diagonali](docs/catalog/it/06-indicii-pe-margine.md#dxsum) |
| **Linee** | [Termometri](docs/catalog/it/07-linii.md#thermo) · [Frecce](docs/catalog/it/07-linii.md#arrow) · [Renban](docs/catalog/it/07-linii.md#renban) · [Sussurri tedeschi](docs/catalog/it/07-linii.md#whisper) · [Palindromo](docs/catalog/it/07-linii.md#palindrome) · [Tra le linee](docs/catalog/it/07-linii.md#between) · [Linee entropiche](docs/catalog/it/07-linii.md#entropic) · [Linee modulari](docs/catalog/it/07-linii.md#modular) · [Sussurri olandesi](docs/catalog/it/07-linii.md#dutch) · [Nabner](docs/catalog/it/07-linii.md#nabner) · [Termometro lento](docs/catalog/it/07-linii.md#slowthermo) · [Linea di parità](docs/catalog/it/07-linii.md#parityline) · [Linea di stessa parità](docs/catalog/it/07-linii.md#sameparity) · [Lockout](docs/catalog/it/07-linii.md#lockout) · [Freccia doppia](docs/catalog/it/07-linii.md#doublearrow) · [Zipper](docs/catalog/it/07-linii.md#zipper) · [Linee con somme per regione](docs/catalog/it/07-linii.md#regionsum) · [Freccia media](docs/catalog/it/07-linii.md#avgarrow) · [Freccia prodotto](docs/catalog/it/07-linii.md#prodarrow) · [Freccia «pillola»](docs/catalog/it/07-linii.md#pillarrow) · [Nebbia](docs/catalog/it/07-linii.md#fog) · [Legato](docs/catalog/it/07-linii.md#legato) · [Consonanza](docs/catalog/it/07-linii.md#consonant) · [Passo fisso](docs/catalog/it/07-linii.md#fixstep) · [Linea complementare](docs/catalog/it/07-linii.md#compline) · [Zigzag](docs/catalog/it/07-linii.md#zigzag) · [Fibonacci](docs/catalog/it/07-linii.md#fibonacci) · [Gradini](docs/catalog/it/07-linii.md#steps) · [Progressione aritmetica](docs/catalog/it/07-linii.md#progression) · [Eco](docs/catalog/it/07-linii.md#echo) · [Linea divisibile](docs/catalog/it/07-linii.md#divisible) · [Linea prima](docs/catalog/it/07-linii.md#primeline) |
| **Griglie composte** | [Samurai](docs/catalog/it/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/it/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/it/08-grile-compuse.md#gattai3) · [Sohei (anello di quattro)](docs/catalog/it/08-grile-compuse.md#sohei) · [Kazaguruma (mulino a vento)](docs/catalog/it/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/it/08-grile-compuse.md#tripledoku) · [Croce](docs/catalog/it/08-grile-compuse.md#cross) |
| **Parenti stretti** | [Futoshiki](docs/catalog/it/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/it/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/it/09-rude-apropiate.md#strimko) |
| **Topologie e mosse fairy** | [Anti-alfiere](docs/catalog/it/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-cammello](docs/catalog/it/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-zebra](docs/catalog/it/10-topologii-si-mutari-fairy.md#antizebra) · [Toro anti-re](docs/catalog/it/10-topologii-si-mutari-fairy.md#torusking) · [Toro anti-cavallo](docs/catalog/it/10-topologii-si-mutari-fairy.md#torusknight) · [Cilindro anti-re](docs/catalog/it/10-topologii-si-mutari-fairy.md#cylking) · [Möbius anti-re](docs/catalog/it/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein anti-re](docs/catalog/it/10-topologii-si-mutari-fairy.md#kleinking) · [Piano proiettivo anti-re](docs/catalog/it/10-topologii-si-mutari-fairy.md#projking) |
| **Regole globali** | [Simmetria complementare](docs/catalog/it/11-reguli-globale.md#symcomp) · [Parità simmetrica](docs/catalog/it/11-reguli-globale.md#symparity) · [Baricentro](docs/catalog/it/11-reguli-globale.md#cgrav) · [Righe lessicografiche](docs/catalog/it/11-reguli-globale.md#lexrows) · [Estremi adiacenti](docs/catalog/it/11-reguli-globale.md#extremes) · [Riquadri bilanciati](docs/catalog/it/11-reguli-globale.md#boxbalance) · [Il cinque solitario](docs/catalog/it/11-reguli-globale.md#lonely5) · [Senza celle isolate](docs/catalog/it/11-reguli-globale.md#nolonely) · [Senza progressioni](docs/catalog/it/11-reguli-globale.md#noprog) · [Riquadri semimagici](docs/catalog/it/11-reguli-globale.md#semimagic) |
| **Indizi nelle celle** | [Rilievo](docs/catalog/it/12-indicii-in-celule.md#relief) · [Mine dispari](docs/catalog/it/12-indicii-in-celule.md#oddsweeper) · [Bussola](docs/catalog/it/12-indicii-in-celule.md#compass) · [Somma nel quadrato](docs/catalog/it/12-indicii-in-celule.md#quadsum) · [Pietra 2×2](docs/catalog/it/12-indicii-in-celule.md#stone) · [Domino](docs/catalog/it/12-indicii-in-celule.md#domino) · [Pillola quadrato perfetto](docs/catalog/it/12-indicii-in-celule.md#pillsq) · [Gabbia prima](docs/catalog/it/12-indicii-in-celule.md#primecage) · [Gabbia bilanciata](docs/catalog/it/12-indicii-in-celule.md#balcage) · [Raddoppiatori](docs/catalog/it/12-indicii-in-celule.md#doubler) · [Cloni speculari](docs/catalog/it/12-indicii-in-celule.md#clonemir) |
| **Dimensioni superiori** | [Cubo latino 3D](docs/catalog/it/13-dimensiuni-superioare.md#cube3) · [Cubo con riquadri 2×2](docs/catalog/it/13-dimensiuni-superioare.md#cubebox) · [Ipercubo 4D](docs/catalog/it/13-dimensiuni-superioare.md#hyper4) · [Ipercubo 5D](docs/catalog/it/13-dimensiuni-superioare.md#hyper5) · [Greco-latino (quadrati ortogonali)](docs/catalog/it/13-dimensiuni-superioare.md#greco) |

Ogni categoria ha la propria pagina in [`docs/catalog/`](docs/catalog/README.md) (schermate e gallerie complete).

## Funzioni

- **Varianti dalla versione 1.0 (38):** classico (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), wordoku, quadrato latino, Sudoku X, Hyper (Windoku), Jigsaw, gruppi disgiunti, punti centrali, anti-cavallo, anti-re, senza consecutivi, Miracolo, pari–dispari, Kropki, consecutivo, XV, confronti, Battenburg, quadruple, Killer, Little Killer, Sandwich, X-Sums, Frame, grattacieli, termometri, frecce, Renban, sussurri tedeschi, palindromo, tra le linee, linee entropiche, linee modulari, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Aggiunte nella versione 1.1 (24):** Girandola (corretta nella 1.4), Asterisk, diagonale semplice, sussurri olandesi, Nabner, termometro lento, linea di parità (alternata), linea di stessa parità, solo pari marcati, solo dispari marcati, Little Killer unico, Fortezza, Minimo/Massimo, Lockout, freccia doppia, Zipper, Rossini, Outside, Clone, linee con somme per regione, freccia media, freccia prodotto, freccia «pillola», Strimko.
- **Aggiunte nella versione 1.2 (livello 3, 3):** Indicizzazione (la prima cifra della riga indica la colonna dell'1), Rapporto ×3 (cerchi per le coppie 3:1), Nebbia (gli indizi compaiono man mano che risolvi; il puzzle è costruito in modo che la semplice propagazione possa proseguire solo con ciò che è visibile).
- **Aggiunte nella versione 1.3 (70):**
  - *Topologie e salti fairy (9):* Anti-alfiere, Anti-cammello, Anti-zebra, Toro anti-re, Toro anti-cavallo, Cilindro, Möbius, Klein e piano proiettivo anti-re.
  - *Regole globali (12):* Pandiagonale, Sudoku con zero, Simmetria complementare, Parità simmetrica, Baricentro, Righe lessicografiche, Estremi adiacenti, Riquadri bilanciati, Il cinque solitario, Senza celle isolate, Senza progressioni, Riquadri semimagici.
  - *Indizi sul bordo (13):* Radar, Sandwich numerico, Sandwich di parità, Sandwich doppio, Seminterrato, Prodotto sul bordo, Differenza sul bordo, Salite, Inversioni, Cicli, Punti fissi, Somma alternata, Somme sulle diagonali.
  - *Indizi nelle celle e gabbie (11):* Rilievo, Mine dispari, Bussola, Somma nel quadrato, Pietra 2×2, Domino, Pillola quadrato perfetto, Gabbia prima, Gabbia bilanciata, Raddoppiatori, Cloni speculari.
  - *Punti (5):* Differenza, Kropki / XV / Consecutivo solo marcati, Senza indizi (solo punti Kropki).
  - *Linee (11):* Legato, Consonanza, Passo fisso, Linea complementare, Zigzag, Fibonacci, Gradini, Progressione aritmetica, Eco, Linea divisibile, Linea prima.
  - *Griglie composte (4):* Sohei, Kazaguruma, Croce, Tripledoku (V).
  - *Dimensioni superiori (5):* Cubo latino 3D, Cubo con riquadri 2×2, Ipercubo 4D, Ipercubo 5D, Greco-latino.
- **Modalità di gioco (7):** Orb, Memoria, Maratona, Duello, Hardcore, Puzzle del giorno, Sonoro. Si scelgono in «Nuova partita»; il codice di condivisione riceve il suffisso `@modalità` (non per il Puzzle del giorno e la Maratona).
- **Combinazione personalizzata:** qualsiasi insieme compatibile di regole di griglia + indizi (ad es. Killer + diagonali, termometri + frecce).
- **Gioco:** selezione multipla, appunti, annulla/ripeti, suggerimento (logica sui candidati), appunti automatici, verifica, conflitti evidenziati, cronometro, salvataggio automatico, stampa.
- **Codice di condivisione:** `variante-dimensione-difficoltà-seme` rigenera lo stesso puzzle nella stessa versione.
- **Risolutore classico 9×9** con regole aggiuntive facoltative; dice se la soluzione è unica, multipla o inesistente.
- **Atlante:** ricerca, categorie, «Variante di oggi», «Sorprendimi», lessico, esportazione CSV, citazione BibTeX.
- Tema chiaro/scuro/automatico, testo ingrandito, interfaccia in 8 lingue (RO, EN, FR, IT, ES, PT, DE, HU).
- Il **Puzzle del giorno** usa la data UTC; la serie di giorni consecutivi è conservata in locale (`sff_daily`).

## Come genera

Il motore sceglie una griglia risolta che rispetta le regole, ne deduce gli indizi (gabbie, termometri, punti...), poi toglie le cifre date una a una, solo finché il risolutore dimostra che la soluzione resta unica. La generazione gira in un Web Worker creato dallo stesso file (senza rete); se il Worker non è disponibile, gira sul thread principale.

## Limiti

- «Passo dopo passo» inserisce una cifra ed evidenzia il perché (l'unica cifra rimasta nella cella; l'unica cella possibile di una riga/colonna/regione; una deduzione dalle regole della variante; oppure, quando non esiste una deduzione diretta, la cifra della soluzione, segnalata come tale). «▶ Auto» esegue i passi da solo, a 1,6 s. Disattivato in Hardcore e in Memoria; ogni passo si può annullare.
- La difficoltà facile/medio/difficile è solo il numero di indizi conservati. Il puzzle mostra anche una misura dello sforzo del risolutore (0 = si risolve solo per propagazione; altrimenti il numero di ramificazioni), che non è una valutazione delle tecniche umane. Se la generazione dura oltre 12 s, la difficoltà scende automaticamente (ma non per il «Puzzle del giorno» o per i codici condivisi).
- Testato in Chromium (anche aperto come file://). Firefox e Safari/iOS non hanno potuto essere testati nell'ambiente di sviluppo; se il Worker da Blob è bloccato, l'applicazione ripiega sulla generazione sul thread principale (interfaccia bloccata durante la generazione).
- Accessibilità: la tastiera (frecce, cifre, N, Ctrl+Z) e l'annuncio vocale della cella selezionata; la tavola è in SVG e non è uno strumento completo per i lettori di schermo.
- Lo stato salvato ha un numero di versione; un formato sconosciuto viene messo da parte (`sff_game_bad`), non cancellato.
- «Difficile» toglie quante più cifre possibile; nelle varianti con molti indizi nella griglia possono restare pochissime cifre date.
- Le griglie composte hanno solo le regole classiche; le combinazioni molto cariche possono richiedere più tempo o fallire (l'applicazione lo segnala).
- 16×16 e 25×25 usano i simboli 1–9 e lettere (A–G e A–P rispettivamente).
- **Geometrie scelte da me** (le fonti divergono): Sohei, Kazaguruma, Croce, Tripledoku (V); la definizione di Domino; l'incollaggio dei bordi per Möbius, Klein e il piano proiettivo; «Estremi adiacenti» con vicini comprese le diagonali (con vicini solo ortogonali non esistono griglie 9×9); Riquadri semimagici su righe e colonne (i riquadri completamente magici, con diagonali, sono impossibili).
- **Ipercubi e cubi:** sono mostrati per strati (mosaico di fette) e, per i 3D, in una vista 3D rotante; per i cubi 3D esiste anche una «Vista 3D» rotante (trascini con il mouse, il cursore nasconde gli strati anteriori); gli ipercubi 4D/5D restano solo per strati. Essendo molto rigidi, in «Difficile» restano solo poche cifre date (nel 5D solo alcune delle 243 celle). Greco-latino: dimensioni 3, 4, 5, 7 (6 è impossibile; 8 e 9 omesse per velocità).
- **Anti-wazir** non esiste: vietare la stessa cifra su celle adiacenti ortogonalmente è già una regola di qualsiasi Sudoku. «Anti-alfiere» indica il salto 2×2, non un alfiere scorrevole. Le voci «Strings complementary/equal» dell'elenco di lavoro non sono varianti separate: l'idea è coperta da Linea complementare ed Eco.
- **Varianti logicamente vicine o identiche (dichiarate nelle schede):** Sudoku con zero (solo simboli diversi rispetto al Classico), Righe lessicografiche (si riduce a «la prima colonna è 1…N»), Seminterrato (Grattacieli con le cifre invertite).
- **Duello:** l'avversario è un cronometro che completa celle dalla soluzione nota, non un risolutore con logica.
- Le regole seguono le convenzioni consuete; le schede dicono quale variante di convenzione è stata scelta. Per alcune nuove varianti le fonti divergono e ho fissato una convenzione esplicita: Girandola (dalla 1.4: angoli, centro e r2c5, r5c2, r5c8, r8c5, secondo Regexp::Sudoku; la vecchia disposizione è ora «Nove sparsi»), «linea di parità» (alternata, con la variante «stessa parità» separata), Rossini (la freccia indica la maggiore delle prime tre cifre), Outside (le cifre sul bordo compaiono tra le prime tre celle), Zipper (tutte le coppie simmetriche sommano al centro), Linee con somme per regione (la somma su ogni riquadro attraversato è la stessa), Fortezza (contano solo i vicini non marcati).

## Privacy e rete

- **Archiviazione locale:** `localStorage`, chiavi `sff_lang`, `sff_theme`, `sff_size`, `sff_game`, `sff_daily` (lingua, tema, dimensione del testo, partita in corso, serie del Puzzle del giorno) e `sff_game_bad` (stato salvato in un formato sconosciuto, conservato).
- **Rete:** nel codice non ci sono `fetch`, `XMLHttpRequest`, CDN o risorse esterne. L'unico URL nel file è lo spazio dei nomi SVG (`http://www.w3.org/2000/svg`), che non genera alcuna richiesta.

## Struttura del repository

```
index.html          aplicația (generat; se deschide direct în browser)
engine.js           motorul: solver, generator, variantele
src/                interfața (template.html, style.css, data.js, app.js)
build.py            asamblează index.html din src/ + engine.js
test.js             suita de teste (node test.js)
docs/               capturi (docs/screens), catalogul pe categorii (docs/catalog), GHID.html + GHID.<lang>.html (ghid ilustrat; se văd pe Pages)
CHANGELOG.md        istoric versiuni
CONTRIBUTING.md     cum contribui
LICENSE             MIT
```

Pubblicazione su GitHub Pages: Settings → Pages → Branch `main`, cartella `/ (root)`; `index.html` è nella radice e usa solo percorsi relativi, quindi funziona anche sotto `https://<utente>.github.io/<repository>/`. Vedi [`CHANGELOG.md`](CHANGELOG.md) e [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Esecuzione locale / offline

Scarica `index.html` e aprilo in un browser; non richiede internet.

## Test

Girano anche automaticamente su GitHub (Actions, `.github/workflows/ci.yml`): build riproducibile, `node test.js` e verifica che `index.html` non abbia risorse esterne.

`engine.js` è il motore (la stessa sorgente è inclusa in `index.html`). La suite `test.js` si esegue con Node:

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

Per ogni variante e dimensione, ai livelli facile e difficile, verifica: la soluzione rispetta le regole, il puzzle ha una soluzione unica (conteggio con lo stesso risolutore del generatore, con un budget ampio; le enumerazioni 4×4 e il validatore della semantica sono scritti separatamente), la soluzione sopravvive alla propagazione a partire da sottoinsiemi casuali di indizi (*soundness*). Inoltre, nel 4×4 il numero di soluzioni senza indizi è confrontato con un'enumerazione esaustiva (ad es. 288 per il classico), e alcune combinazioni personalizzate sono verificate. Dalla versione 1.1, ogni puzzle è verificato anche da un validatore della semantica delle regole scritto separatamente dal motore, direttamente dal testo delle schede (verifica, ad esempio, Zipper, Lockout, le frecce media/prodotto/pillola, Clone, le catene Strimko). Dalla versione 1.3, il validatore indipendente copre anche le topologie, i salti fairy, le regole globali, gli indizi sul bordo, nelle celle, le gabbie, le linee e i punti (formule riscritte separatamente dal motore), e per cubi, ipercubi e greco-latino il numero di soluzioni senza indizi è confrontato con un'enumerazione DFS separata (ad es. 21888 per il cubo 4×4×4 con riquadri 2×2, 72 e 6912 per il greco-latino 3 e 4). Ultima esecuzione: 3144 verifiche, tutte superate; il validatore indipendente copre ora anche i tipi della 1.0–1.2, e un test dei mutanti (16.506 ridenominazioni di cifre) mostra un accordo totale tra il motore e il validatore; 660 puzzle 4×4 sono stati confermati unici da un'enumerazione separata; stress aggiuntivo su 12 semi per variante (5652 puzzle, zero errori); inoltre, una prova di stress con 5 puzzle per ogni variante, dimensione minima e massima, senza alcun errore (la generazione più lenta, in «Difficile» su alcune varianti con regole globali, è durata circa 21 s). Limite: la verifica incrociata per enumerazione esaustiva esiste solo per le varianti che hanno una dimensione 4×4 (e per i piccoli cubi/greco-latino, come mostrato sopra).

## Cosa non è implementato dal livello 3

Non sono inclusi: Chaos Construction, Deconstruction, gli ibridi con altri puzzle (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), le griglie sovrapposte Flower/Butterfly (Sohei e Kazaguruma esistono dalla 1.3, con una geometria scelta da me), le celle modificatrici, Schrödinger, «liar», Vudoku, Capsule, Deficit. Alcune cambiano la modalità di gioco o richiedono risolutori con un altro tipo di logica; per altre le fonti trovate non fissano né le regole né la geometria, e inventarle significherebbe presentare come variante nota qualcosa che non lo è.

## Licenza

**MIT** — vedi [`LICENSE`](LICENSE). Si applica all'intero repository: il codice (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), i testi (README, le schede) e le schermate in `docs/screens/`. Puoi usare, copiare, modificare, pubblicare e vendere, a condizione di mantenere l'avviso di copyright e il testo della licenza. Il programma è fornito «così com'è», senza garanzie.

Note:
- L'applicazione non include librerie o risorse esterne, quindi non ci sono licenze di terzi da rispettare.
- I nomi e le regole delle varianti del Sudoku (Killer, Kropki, Sandwich ecc.) designano tipi di puzzle di dominio pubblico; i testi delle schede sono scritti per questa applicazione. I nomi restano degli autori e delle comunità che li hanno creati.

## Autore

Alexio — Alexandru-Ionuț Chiuță, contatto: <alexio@trom.tf>.

## Sintesi

Un atlante di 136 voci di Sudoku (≈130 con regole distinte; Seminterrato, Zero e Righe lessicografiche sono quasi duplicati di altre varianti e lo dicono nelle schede) (più 7 modalità di gioco: Orb, Memoria, Maratona, Duello, Hardcore, Puzzle del giorno, Sonoro) con generatore e risolutore locali, in un unico file HTML. I puzzle sono generati nel browser con una soluzione unica dimostrata (le cifre date vengono tolte solo finché un risolutore a propagazione conferma l'unicità). Include un mixer di regole personalizzato, appunti/annulla/suggerimenti, codici di condivisione, un risolutore classico 9×9, esportazione CSV e citazione BibTeX. Nessuna richiesta di rete; lo stato è memorizzato in `localStorage` (`sff_*`). La difficoltà (facile/medio/difficile) è solo il numero di cifre date conservate; ogni puzzle mostra anche un valore misurato: di quante ramificazioni ha bisogno un risolutore a propagazione (0 = risolto per sola propagazione). È lo sforzo del risolutore, non una valutazione delle tecniche umane. Esegui `node test.js` per la suite di test del motore. Licenza: MIT (vedi `LICENSE`), che copre codice, testi e schermate.

Questo README contiene una guida all'uso con schermate dell'interfaccia e un catalogo con due schermate reali, le regole e un codice riproducibile per ciascuna delle 136 varianti (`screens/`).

## Note v1.4

- **Girandola** è stata corretta secondo la descrizione di Regexp::Sudoku (angoli, centro, r2c5, r5c2, r5c8, r8c5). La vecchia disposizione (angoli, punti medi dei lati, centro) resta come «Nove sparsi» (`sparse9`). I codici `girandola-…` generati prima della 1.4 producono ora un altro puzzle.
- Corretto nella 1.4 dopo le schermate: l'etichetta della scheda «Gioca» (chiave di testo duplicata), gli elenchi rimasti sui vecchi valori dopo «Apri» con un codice e il messaggio «Celle sbagliate» rimasto dopo l'annullamento.
- Verifiche 1.4: validatore scritto alla cieca dal testo delle schede (135/135 delle varianti allora esistenti hanno superato; «Nove sparsi» è stata aggiunta dopo e ha un validatore in `test.js`), confronto con fonti pubblicate su 56 varianti (le schede Regionsum, Rossini e Little Unique Killer hanno ricevuto precisazioni), un'unica esecuzione di 1818 puzzle su tutte le varianti e dimensioni ≤12 senza errori (lo script non fa parte del repository), «Passo dopo passo» testato su tutte le 136 varianti.
- Ancora non confermati dalle fonti: la disposizione di Sohei, Kazaguruma, Croce, Tripledoku V; il trattamento delle cifre ripetute in Quad e Raddoppiatori; la connettività diagonale in Strimko.
