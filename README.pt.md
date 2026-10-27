# Sudoku fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · **Português** · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versão:** 2.2.0 · **Última atualização:** 2026-10-27

Idiomas da interface: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Um atlas de variantes do Sudoku, com gerador e resolvedor que funcionam localmente — num único ficheiro HTML.

**Licença:** [MIT](LICENSE) · **Aplicação online:** <https://chiuta.github.io/Sudoku-fara-frontiere/> · **Guia ilustrado (uma única página):** <https://chiuta.github.io/Sudoku-fara-frontiere/docs/GHID.pt.html>

![Algumas variantes, depois de «Passo a passo»](docs/screenshot.png)

## O que é

Um atlas interativo de 136 entradas (≈130 com regras distintas: Cave, Sudoku com zero e Linhas lexicográficas são logicamente quase idênticas a outras variantes e são declaradas como tal nas fichas) (clássicas, com regiões especiais, topologias e saltos fairy, regras globais, pistas nas linhas, na margem, nas células ou na grelha, grelhas compostas, cubos e hipercubos, greco-latino e parentes próximos), mais 7 modos de jogo. Cada variante tem uma ficha com as regras e pode jogar-se localmente: os puzzles são gerados no navegador, com **solução única demonstrada** por um resolvedor com propagação. Pode também combinar regras numa «Combinação personalizada».

## Guia de utilização

### Início rápido

1. Abra `index.html` num navegador (funciona offline, sem instalação).
2. Em **Atlas** escolhe uma variante (pesquisa, categorias, «Variante de hoje», «Surpreende-me»); cada variante tem uma ficha com as regras.
3. Em **Jogar** escolhe a variante, o tamanho, a dificuldade e o modo, e depois prime **Novo jogo**. O puzzle é gerado no navegador, com solução única.

<p align="center"><img src="docs/screens/ui_atlas.pt.webp" width="760" alt="O atlas de variantes"><br><sub>Atlas: pesquisa, filtros por categoria e cartões com os tamanhos disponíveis.</sub></p>

### O ecrã de jogo

<p align="center"><img src="docs/screens/ui_play.pt.webp" width="760" alt="O ecrã de jogo"><br><sub>O tabuleiro, a barra de estado (variante · tamanho · pistas · dificuldade · ramificações necessárias ao resolvedor · tempo), o painel «Novo jogo» com código de partilha, o teclado numérico e as ações.</sub></p>

- **Algarismos:** seleciona uma célula (ou várias, com Shift/arrastar) e prime o algarismo, no teclado ou no teclado do ecrã. Os algarismos esgotados aparecem esbatidos.
- **Teclado:** setas = mover a seleção, algarismos/letras = preencher, `Backspace`/`Delete`/`0` = apagar, `N` = notas, `Ctrl+Z` / `Ctrl+Y` = anular / refazer.
- **Notas:** o botão «Notas» (ou `N`) passa para candidatos pequenos na célula; «Notas automáticas» calcula-os a partir das regras visíveis.
- **Verificações:** «Mostrar os conflitos», «Realçar o mesmo algarismo», «Realçar as células relacionadas» e «Limpar as notas automaticamente» podem ser assinaladas; «Verificar» marca os algarismos errados.
- **Pista** preenche uma célula (por lógica sobre candidatos; se não existir um passo direto, o algarismo vem da solução). **Mostrar a solução** preenche tudo.
- **Código:** o código junto a «Novo jogo» regenera o mesmo puzzle na mesma versão da aplicação; cola-o em «Abrir».

<p align="center"><img src="docs/screens/ui_notes.pt.webp" width="760" alt="Notas"><br><sub>Notas: os candidatos pequenos numa célula.</sub></p>

### Passo a passo e ▶ Auto

**Passo a passo** coloca um algarismo e mostra porquê: as células que o justificam ficam coloridas (amarelo), a célula nova é verde e por baixo do tabuleiro aparece a explicação. **▶ Auto** executa os passos sozinho, a cada 1,6 s. Os motivos possíveis: o único algarismo que resta na célula; a única célula de uma linha/coluna/região onde o algarismo pode ficar; uma dedução a partir das regras da variante; ou, quando não existe dedução direta, o algarismo da solução (dito explicitamente). Se tiver um algarismo errado, o primeiro passo corrige-o. Cada passo pode ser anulado; está desativado em Hardcore e Memória.

<p align="center"><img src="docs/screens/ui_step.pt.webp" width="760" alt="Passo a passo"><br><sub>Depois de três passos: o último algarismo (verde) e as células que o justificam (amarelo), com a explicação por baixo do tabuleiro.</sub></p>

### Modos de jogo

Escolhem-se em «Novo jogo → Modo de jogo»; o código recebe o sufixo `@modo` (exceções: o «Puzzle do dia» e a Maratona não têm sufixo; um código de Maratona abre um puzzle normal).

- **Orb:** só se veem as células a, no máximo, 2 passos da seleção.
- **Memória:** as pistas veem-se alguns segundos e depois ocultam-se; o botão de espreitar custa 30 s. Sem pistas, verificação, notas automáticas, «Passo a passo» nem realce de conflitos.
- **Maratona:** 5 puzzles seguidos (fácil, fácil, médio, médio, difícil) com um tempo total.
- **Duelo:** um adversário-cronómetro preenche uma célula a cada poucos segundos, a partir da solução conhecida (sem lógica); se terminar primeiro, perde.
- **Hardcore:** 3 vidas, cada algarismo errado custa uma; sem pista, verificação nem notas automáticas.
- **Puzzle do dia:** o mesmo puzzle para todos num dado dia (data UTC), com uma série de dias consecutivos guardada localmente.
- **Sonoro:** cada algarismo tem uma nota; uma linha, uma coluna ou uma caixa completa toca um arpejo.

<p align="center"><img src="docs/screens/ui_mode_orb.pt.webp" width="760" alt="Modo Orb"><br><sub>Modo Orb: só a vizinhança da seleção está visível.</sub></p>

### Cubos e hipercubos

As camadas são apresentadas como um mosaico de fatias. Nos cubos 3D aparece também uma «Vista 3D»: arrasta com o rato para rodar o cubo, e o cursor oculta as camadas da frente. Os hipercubos 4D/5D ficam apenas por camadas.

<p align="center"><img src="docs/screens/ui_3d.pt.webp" width="760" alt="Vista 3D"><br><sub>Cubo latino 3D 4×4×4 na vista 3D rotativa.</sub></p>

### Resolvedor clássico 9×9

Cola um puzzle (81 carateres: 1–9, com os vazios como 0 ou `.`), assinala opcionalmente regras adicionais (diagonais, janelas hyper, anti-cavalo, etc.) e prime **Resolver**: a aplicação diz se a solução é única, múltipla ou inexistente. «Jogar este puzzle» leva-o para o tabuleiro de jogo.

<p align="center"><img src="docs/screens/ui_solver.pt.webp" width="760" alt="Resolvedor"><br><sub>O resolvedor com o puzzle de exemplo: «Solução única».</sub></p>

### Telemóvel e tema escuro

A interface adapta-se a ecrãs estreitos; tema claro/escuro/automático (o botão 🌓), texto ampliado (o botão A), língua RO/EN (o botão RO).

<p align="center"><img src="docs/screens/ui_mobile.pt.webp" width="260" alt="Telemóvel, tema claro"> &nbsp; <img src="docs/screens/ui_dark.pt.webp" width="260" alt="Telemóvel, tema escuro"></p>

### Combinação personalizada

No Atlas, a «Combinação personalizada» (ou a variante «Combinação personalizada» em «Novo jogo») permite assinalar qualquer conjunto compatível de regras de grelha e pistas (p. ex. Killer + diagonais, termómetros + setas).

### Galeria da interface (todos os tipos de ecrã)

**Atlas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_filter.pt.webp" width="330" alt="Filtragem por categoria"><br><sub>Filtragem por categoria</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_search.pt.webp" width="330" alt="Pesquisa por nome"><br><sub>Pesquisa por nome</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_lexicon.pt.webp" width="330" alt="Léxico"><br><sub>Léxico</sub></td><td align="center" valign="top"><img src="docs/screens/ui_atlas_en.webp" width="330" alt="Atlas em inglês"><br><sub>Atlas em inglês</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_atlas_dark.pt.webp" width="330" alt="Atlas, tema escuro"><br><sub>Atlas, tema escuro</sub></td></tr></table>

**Modos de jogo**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_show.pt.webp" width="330" alt="Memória: as pistas estão visíveis"><br><sub>Memória: as pistas estão visíveis</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_memory_hidden.pt.webp" width="330" alt="Memória: as pistas ocultaram-se"><br><sub>Memória: as pistas ocultaram-se</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_marathon.pt.webp" width="330" alt="Maratona"><br><sub>Maratona</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_duel.pt.webp" width="330" alt="Duelo (o adversário preenche células)"><br><sub>Duelo (o adversário preenche células)</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_hardcore.pt.webp" width="330" alt="Hardcore: um erro custa uma vida"><br><sub>Hardcore: um erro custa uma vida</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_daily.pt.webp" width="330" alt="Puzzle do dia"><br><sub>Puzzle do dia</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_mode_sound.pt.webp" width="330" alt="Sonoro"><br><sub>Sonoro</sub></td><td align="center" valign="top"><img src="docs/screens/ui_mode_orb.pt.webp" width="330" alt="Orb"><br><sub>Orb</sub></td></tr></table>

**Jogo e ferramentas**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_autoplay.pt.webp" width="330" alt="▶ Auto em curso"><br><sub>▶ Auto em curso</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solved.pt.webp" width="330" alt="Puzzle resolvido"><br><sub>Puzzle resolvido</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_custom.pt.webp" width="330" alt="Combinação personalizada (lista de regras)"><br><sub>Combinação personalizada (lista de regras)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_3d_rotated.pt.webp" width="330" alt="Vista 3D rodada"><br><sub>Vista 3D rodada</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_print.webp" width="330" alt="Vista de impressão"><br><sub>Vista de impressão</sub></td></tr></table>

**Resolvedor e Sobre**

<table><tr><td align="center" valign="top"><img src="docs/screens/ui_solver_multi.pt.webp" width="330" alt="Resolvedor: grelha vazia (soluções múltiplas)"><br><sub>Resolvedor: grelha vazia (soluções múltiplas)</sub></td><td align="center" valign="top"><img src="docs/screens/ui_solver_none.pt.webp" width="330" alt="Resolvedor: sem solução"><br><sub>Resolvedor: sem solução</sub></td></tr><tr><td align="center" valign="top"><img src="docs/screens/ui_about.pt.webp" width="330" alt="A página «Sobre»"><br><sub>A página «Sobre»</sub></td></tr></table>

## Catálogo de variantes (136)

Cada variante tem a seguir: as regras da ficha, uma captura com um puzzle real gerado pela aplicação (o tamanho predefinido da variante (9×9 onde existe, caso contrário p. ex. 5×5 ou 4×4); nível «médio»), uma segunda captura após 4 passos de «Passo a passo», a explicação real do último passo e um código com o qual regenera exatamente o mesmo puzzle. Sob cada variante, uma «Galeria completa» (expansível) contém os outros tipos de capturas: o cartão no Atlas e a ficha, todos os tamanhos, fácil/médio/difícil, notas automáticas, verificação com um algarismo errado, a solução completa, o tema escuro, o telemóvel, a interface em inglês e o painel de regras. As capturas estão em `docs/screens/`. As capturas são feitas automaticamente desde a versão 1.4.0, em tema claro.

**Catálogo completo:** [docs/catalog/pt/README.md](docs/catalog/pt/README.md)

| Categoria | Variantes |
|---|---|
| **Tamanho e símbolos** | [Clássico](docs/catalog/pt/01-marime-si-simboluri.md#clasic) · [Wordoku](docs/catalog/pt/01-marime-si-simboluri.md#wordoku) · [Quadrado latino](docs/catalog/pt/01-marime-si-simboluri.md#latin) · [Sudoku com zero](docs/catalog/pt/01-marime-si-simboluri.md#zero) |
| **Regiões e grupos** | [Sudoku X](docs/catalog/pt/02-regiuni-si-grupuri.md#diag) · [Hyper (Windoku)](docs/catalog/pt/02-regiuni-si-grupuri.md#hyper) · [Jigsaw (irregular)](docs/catalog/pt/02-regiuni-si-grupuri.md#jigsaw) · [Grupos disjuntos](docs/catalog/pt/02-regiuni-si-grupuri.md#dg) · [Pontos centrais](docs/catalog/pt/02-regiuni-si-grupuri.md#center) · [Girandola](docs/catalog/pt/02-regiuni-si-grupuri.md#girandola) · [Noves dispersos](docs/catalog/pt/02-regiuni-si-grupuri.md#sparse9) · [Asterisk](docs/catalog/pt/02-regiuni-si-grupuri.md#asterisk) · [Diagonal simples](docs/catalog/pt/02-regiuni-si-grupuri.md#diag1) · [Clone](docs/catalog/pt/02-regiuni-si-grupuri.md#clone) · [Pandiagonal](docs/catalog/pt/02-regiuni-si-grupuri.md#pandiag) |
| **Vizinhos** | [Anti-cavalo](docs/catalog/pt/03-vecini.md#antiknight) · [Anti-rei](docs/catalog/pt/03-vecini.md#antiking) · [Sem consecutivos](docs/catalog/pt/03-vecini.md#nonconsec) · [Milagre](docs/catalog/pt/03-vecini.md#miracle) |
| **Paridade, pontos, sinais** | [Par–ímpar](docs/catalog/pt/04-paritate-puncte-semne.md#evenodd) · [Kropki](docs/catalog/pt/04-paritate-puncte-semne.md#kropki) · [Consecutivo](docs/catalog/pt/04-paritate-puncte-semne.md#consec) · [XV](docs/catalog/pt/04-paritate-puncte-semne.md#xv) · [Comparações](docs/catalog/pt/04-paritate-puncte-semne.md#greater) · [Battenburg](docs/catalog/pt/04-paritate-puncte-semne.md#batt) · [Quádruplos](docs/catalog/pt/04-paritate-puncte-semne.md#quad) · [Só pares marcados](docs/catalog/pt/04-paritate-puncte-semne.md#evenonly) · [Só ímpares marcados](docs/catalog/pt/04-paritate-puncte-semne.md#oddonly) · [Fortaleza](docs/catalog/pt/04-paritate-puncte-semne.md#fortress) · [Mínimo / Máximo](docs/catalog/pt/04-paritate-puncte-semne.md#minmax) · [Indexação](docs/catalog/pt/04-paritate-puncte-semne.md#indexing) · [Razão ×3](docs/catalog/pt/04-paritate-puncte-semne.md#ratio) · [Diferença](docs/catalog/pt/04-paritate-puncte-semne.md#diff) · [Kropki só marcados](docs/catalog/pt/04-paritate-puncte-semne.md#kropkipos) · [XV só marcados](docs/catalog/pt/04-paritate-puncte-semne.md#xvpos) · [Consecutivo só marcados](docs/catalog/pt/04-paritate-puncte-semne.md#consecpos) · [Sem pistas](docs/catalog/pt/04-paritate-puncte-semne.md#clueless) |
| **Somas** | [Killer](docs/catalog/pt/05-sume.md#killer) · [Little Killer](docs/catalog/pt/05-sume.md#littlekiller) · [Little Killer único](docs/catalog/pt/05-sume.md#luk) |
| **Pistas na margem** | [Sandwich](docs/catalog/pt/06-indicii-pe-margine.md#sandwich) · [X-Sums](docs/catalog/pt/06-indicii-pe-margine.md#xsum) · [Frame (os três primeiros)](docs/catalog/pt/06-indicii-pe-margine.md#frame) · [Arranha-céus](docs/catalog/pt/06-indicii-pe-margine.md#skyscraper) · [Rossini](docs/catalog/pt/06-indicii-pe-margine.md#rossini) · [Outside](docs/catalog/pt/06-indicii-pe-margine.md#outside) · [Radar](docs/catalog/pt/06-indicii-pe-margine.md#radar) · [Sanduíche numérico](docs/catalog/pt/06-indicii-pe-margine.md#sandnum) · [Sanduíche de paridade](docs/catalog/pt/06-indicii-pe-margine.md#sandpar) · [Sanduíche duplo](docs/catalog/pt/06-indicii-pe-margine.md#sand2) · [Cave](docs/catalog/pt/06-indicii-pe-margine.md#subsol) · [Produto na margem](docs/catalog/pt/06-indicii-pe-margine.md#prodmargin) · [Diferença na margem](docs/catalog/pt/06-indicii-pe-margine.md#diffmargin) · [Subidas](docs/catalog/pt/06-indicii-pe-margine.md#ascents) · [Inversões](docs/catalog/pt/06-indicii-pe-margine.md#inversions) · [Ciclos](docs/catalog/pt/06-indicii-pe-margine.md#cycles) · [Pontos fixos](docs/catalog/pt/06-indicii-pe-margine.md#fixedpts) · [Soma alternada](docs/catalog/pt/06-indicii-pe-margine.md#altsum) · [Somas nas diagonais](docs/catalog/pt/06-indicii-pe-margine.md#dxsum) |
| **Linhas** | [Termómetros](docs/catalog/pt/07-linii.md#thermo) · [Setas](docs/catalog/pt/07-linii.md#arrow) · [Renban](docs/catalog/pt/07-linii.md#renban) · [Sussurros alemães](docs/catalog/pt/07-linii.md#whisper) · [Palíndromo](docs/catalog/pt/07-linii.md#palindrome) · [Entre linhas](docs/catalog/pt/07-linii.md#between) · [Linhas entrópicas](docs/catalog/pt/07-linii.md#entropic) · [Linhas modulares](docs/catalog/pt/07-linii.md#modular) · [Sussurros holandeses](docs/catalog/pt/07-linii.md#dutch) · [Nabner](docs/catalog/pt/07-linii.md#nabner) · [Termómetro lento](docs/catalog/pt/07-linii.md#slowthermo) · [Linha de paridade](docs/catalog/pt/07-linii.md#parityline) · [Linha de igual paridade](docs/catalog/pt/07-linii.md#sameparity) · [Lockout](docs/catalog/pt/07-linii.md#lockout) · [Seta dupla](docs/catalog/pt/07-linii.md#doublearrow) · [Zipper](docs/catalog/pt/07-linii.md#zipper) · [Linhas com somas por região](docs/catalog/pt/07-linii.md#regionsum) · [Seta média](docs/catalog/pt/07-linii.md#avgarrow) · [Seta produto](docs/catalog/pt/07-linii.md#prodarrow) · [Seta «comprimido»](docs/catalog/pt/07-linii.md#pillarrow) · [Nevoeiro](docs/catalog/pt/07-linii.md#fog) · [Legato](docs/catalog/pt/07-linii.md#legato) · [Consonância](docs/catalog/pt/07-linii.md#consonant) · [Passo fixo](docs/catalog/pt/07-linii.md#fixstep) · [Linha complementar](docs/catalog/pt/07-linii.md#compline) · [Zigzag](docs/catalog/pt/07-linii.md#zigzag) · [Fibonacci](docs/catalog/pt/07-linii.md#fibonacci) · [Degraus](docs/catalog/pt/07-linii.md#steps) · [Progressão aritmética](docs/catalog/pt/07-linii.md#progression) · [Eco](docs/catalog/pt/07-linii.md#echo) · [Linha divisível](docs/catalog/pt/07-linii.md#divisible) · [Linha prima](docs/catalog/pt/07-linii.md#primeline) |
| **Grelhas compostas** | [Samurai](docs/catalog/pt/08-grile-compuse.md#samurai) · [Twodoku](docs/catalog/pt/08-grile-compuse.md#twodoku) · [Gattai-3](docs/catalog/pt/08-grile-compuse.md#gattai3) · [Sohei (anel de quatro)](docs/catalog/pt/08-grile-compuse.md#sohei) · [Kazaguruma (moinho de vento)](docs/catalog/pt/08-grile-compuse.md#kazaguruma) · [Tripledoku (V)](docs/catalog/pt/08-grile-compuse.md#tripledoku) · [Cruz](docs/catalog/pt/08-grile-compuse.md#cross) |
| **Parentes próximos** | [Futoshiki](docs/catalog/pt/09-rude-apropiate.md#futoshiki) · [KenKen (Calcudoku)](docs/catalog/pt/09-rude-apropiate.md#kenken) · [Strimko](docs/catalog/pt/09-rude-apropiate.md#strimko) |
| **Topologias e movimentos fairy** | [Anti-bispo](docs/catalog/pt/10-topologii-si-mutari-fairy.md#antibishop) · [Anti-camelo](docs/catalog/pt/10-topologii-si-mutari-fairy.md#anticamel) · [Anti-zebra](docs/catalog/pt/10-topologii-si-mutari-fairy.md#antizebra) · [Toro anti-rei](docs/catalog/pt/10-topologii-si-mutari-fairy.md#torusking) · [Toro anti-cavalo](docs/catalog/pt/10-topologii-si-mutari-fairy.md#torusknight) · [Cilindro anti-rei](docs/catalog/pt/10-topologii-si-mutari-fairy.md#cylking) · [Möbius anti-rei](docs/catalog/pt/10-topologii-si-mutari-fairy.md#mobiusking) · [Klein anti-rei](docs/catalog/pt/10-topologii-si-mutari-fairy.md#kleinking) · [Plano projetivo anti-rei](docs/catalog/pt/10-topologii-si-mutari-fairy.md#projking) |
| **Regras globais** | [Simetria complementar](docs/catalog/pt/11-reguli-globale.md#symcomp) · [Paridade simétrica](docs/catalog/pt/11-reguli-globale.md#symparity) · [Centro de gravidade](docs/catalog/pt/11-reguli-globale.md#cgrav) · [Linhas lexicográficas](docs/catalog/pt/11-reguli-globale.md#lexrows) · [Extremos adjacentes](docs/catalog/pt/11-reguli-globale.md#extremes) · [Caixas equilibradas](docs/catalog/pt/11-reguli-globale.md#boxbalance) · [O cinco solitário](docs/catalog/pt/11-reguli-globale.md#lonely5) · [Sem células solitárias](docs/catalog/pt/11-reguli-globale.md#nolonely) · [Sem progressões](docs/catalog/pt/11-reguli-globale.md#noprog) · [Caixas semimágicas](docs/catalog/pt/11-reguli-globale.md#semimagic) |
| **Pistas nas células** | [Relevo](docs/catalog/pt/12-indicii-in-celule.md#relief) · [Minas ímpares](docs/catalog/pt/12-indicii-in-celule.md#oddsweeper) · [Bússola](docs/catalog/pt/12-indicii-in-celule.md#compass) · [Soma no quadrado](docs/catalog/pt/12-indicii-in-celule.md#quadsum) · [Pedra 2×2](docs/catalog/pt/12-indicii-in-celule.md#stone) · [Dominó](docs/catalog/pt/12-indicii-in-celule.md#domino) · [Comprimido de quadrado perfeito](docs/catalog/pt/12-indicii-in-celule.md#pillsq) · [Jaula prima](docs/catalog/pt/12-indicii-in-celule.md#primecage) · [Jaula equilibrada](docs/catalog/pt/12-indicii-in-celule.md#balcage) · [Duplicadores](docs/catalog/pt/12-indicii-in-celule.md#doubler) · [Clones em espelho](docs/catalog/pt/12-indicii-in-celule.md#clonemir) |
| **Dimensões superiores** | [Cubo latino 3D](docs/catalog/pt/13-dimensiuni-superioare.md#cube3) · [Cubo com caixas 2×2](docs/catalog/pt/13-dimensiuni-superioare.md#cubebox) · [Hipercubo 4D](docs/catalog/pt/13-dimensiuni-superioare.md#hyper4) · [Hipercubo 5D](docs/catalog/pt/13-dimensiuni-superioare.md#hyper5) · [Greco-latino (quadrados ortogonais)](docs/catalog/pt/13-dimensiuni-superioare.md#greco) |

Cada categoria tem a sua própria página em [`docs/catalog/`](docs/catalog/README.md) (capturas e galerias completas).

## Funcionalidades

- **Variantes desde a versão 1.0 (38):** clássico (4×4, 6×6, 8×8, 9×9, 12×12, 16×16, 25×25), wordoku, quadrado latino, Sudoku X, Hyper (Windoku), Jigsaw, grupos disjuntos, pontos centrais, anti-cavalo, anti-rei, sem consecutivos, Milagre, par–ímpar, Kropki, consecutivo, XV, comparações, Battenburg, quádruplos, Killer, Little Killer, Sanduíche, X-Sums, Frame, arranha-céus, termómetros, setas, Renban, sussurros alemães, palíndromo, entre linhas, linhas entrópicas, linhas modulares, Samurai, Twodoku, Gattai-3, Futoshiki, KenKen.
- **Acrescentadas na versão 1.1 (24):** Girandola (corrigida na 1.4), Asterisk, diagonal simples, sussurros holandeses, Nabner, termómetro lento, linha de paridade (alternante), linha de igual paridade, só pares marcados, só ímpares marcados, Little Killer único, Fortaleza, Mínimo/Máximo, Lockout, seta dupla, Zipper, Rossini, Outside, Clone, linhas com somas por região, seta média, seta produto, seta «comprimido», Strimko.
- **Acrescentadas na versão 1.2 (nível 3, 3):** Indexação (o primeiro algarismo da linha indica a coluna do 1), Razão ×3 (círculos para pares 3:1), Nevoeiro (as pistas aparecem à medida que resolve; o puzzle é construído de modo a que a simples propagação só possa continuar com o que se vê).
- **Acrescentadas na versão 1.3 (70):**
  - *Topologias e saltos fairy (9):* Anti-bispo, Anti-camelo, Anti-zebra, Toro anti-rei, Toro anti-cavalo, Cilindro, Möbius, Klein e plano projetivo anti-rei.
  - *Regras globais (12):* Pandiagonal, Sudoku com zero, Simetria complementar, Paridade simétrica, Centro de gravidade, Linhas lexicográficas, Extremos adjacentes, Caixas equilibradas, O cinco solitário, Sem células solitárias, Sem progressões, Caixas semimágicas.
  - *Pistas na margem (13):* Radar, Sanduíche numérico, Sanduíche de paridade, Sanduíche duplo, Cave, Produto na margem, Diferença na margem, Subidas, Inversões, Ciclos, Pontos fixos, Soma alternada, Somas nas diagonais.
  - *Pistas nas células e jaulas (11):* Relevo, Minas ímpares, Bússola, Soma no quadrado, Pedra 2×2, Dominó, Comprimido de quadrado perfeito, Jaula prima, Jaula equilibrada, Duplicadores, Clones em espelho.
  - *Pontos (5):* Diferença, Kropki / XV / Consecutivo só marcados, Sem pistas (só pontos Kropki).
  - *Linhas (11):* Legato, Consonância, Passo fixo, Linha complementar, Zigzag, Fibonacci, Degraus, Progressão aritmética, Eco, Linha divisível, Linha prima.
  - *Grelhas compostas (4):* Sohei, Kazaguruma, Cruz, Tripledoku (V).
  - *Dimensões superiores (5):* Cubo latino 3D, Cubo com caixas 2×2, Hipercubo 4D, Hipercubo 5D, Greco-latino.
- **Modos de jogo (7):** Orb, Memória, Maratona, Duelo, Hardcore, Puzzle do dia, Sonoro. Escolhem-se em «Novo jogo»; o código de partilha recebe o sufixo `@modo` (não no Puzzle do dia nem na Maratona).
- **Combinação personalizada:** qualquer conjunto compatível de regras de grelha + pistas (p. ex. Killer + diagonais, termómetros + setas).
- **Jogo:** seleção múltipla, notas, anular/refazer, pista (lógica sobre candidatos), notas automáticas, verificação, conflitos realçados, cronómetro, gravação automática, impressão.
- **Código de partilha:** `variante-tamanho-dificuldade-semente` regenera o mesmo puzzle na mesma versão.
- **Resolvedor clássico 9×9** com regras adicionais opcionais; diz se a solução é única, múltipla ou inexistente.
- **Atlas:** pesquisa, categorias, «Variante de hoje», «Surpreende-me», léxico, exportação CSV, citação BibTeX.
- Tema claro/escuro/automático, texto ampliado, interface em 8 idiomas (RO, EN, FR, IT, ES, PT, DE, HU).
- O **Puzzle do dia** usa a data UTC; a série de dias consecutivos é guardada localmente (`sudoku-fara-frontiere.daily`).

## Como gera

O motor escolhe uma grelha resolvida que respeite as regras, deduz dela as pistas (jaulas, termómetros, pontos...), e depois retira os algarismos dados um a um, apenas enquanto o resolvedor demonstrar que a solução continua única. A geração corre num Web Worker criado a partir do mesmo ficheiro (sem rede); se o Worker não estiver disponível, corre na thread principal.

## Limites

- «Passo a passo» preenche um algarismo e realça porquê (o único algarismo que resta na célula; a única célula possível de uma linha/coluna/região; uma dedução a partir das regras da variante; ou, quando não existe dedução direta, o algarismo da solução, assinalado como tal). «▶ Auto» executa os passos sozinho, a cada 1,6 s. Desativado em Hardcore e Memória; cada passo pode ser anulado.
- A dificuldade fácil/médio/difícil é apenas o número de pistas mantidas. O puzzle mostra também uma medida do esforço do resolvedor (0 = resolve-se só por propagação; caso contrário o número de ramificações), que não é uma avaliação das técnicas humanas. Se a geração demorar mais de 12 s, a dificuldade desce automaticamente (mas não no «Puzzle do dia» nem nos códigos partilhados).
- Testado em Chromium (incluindo aberto como file://). Firefox e Safari/iOS não puderam ser testados no ambiente de desenvolvimento; se o Worker a partir de um Blob estiver bloqueado, a aplicação recorre à geração na thread principal (interface bloqueada durante a geração).
- Acessibilidade: o teclado (setas, algarismos, N, Ctrl+Z) e o anúncio por voz da célula selecionada; o tabuleiro é SVG e não é uma ferramenta completa para leitores de ecrã.
- O estado guardado tem um número de versão; um formato desconhecido é posto de lado (`sudoku-fara-frontiere.game_bad`), não apagado.
- «Difícil» retira tantos algarismos quanto possível; nas variantes com muitas pistas na grelha podem restar muito poucos algarismos dados.
- As grelhas compostas têm apenas as regras clássicas; combinações muito carregadas podem demorar mais ou falhar (a aplicação di-lo).
- 16×16 e 25×25 usam os símbolos 1–9 e letras (A–G e A–P respetivamente).
- **Geometrias escolhidas por mim** (as fontes divergem): Sohei, Kazaguruma, Cruz, Tripledoku (V); a definição de Dominó; a colagem das arestas em Möbius, Klein e no plano projetivo; «Extremos adjacentes» com vizinhos incluindo as diagonais (com vizinhos apenas ortogonais não existem grelhas 9×9); Caixas semimágicas em linhas e colunas (as caixas totalmente mágicas, com diagonais, são impossíveis).
- **Hipercubos e cubos:** são apresentados por camadas (mosaico de fatias) e, os 3D, numa vista 3D rotativa; nos cubos 3D existe também uma «Vista 3D» rotativa (arrasta com o rato, o cursor oculta as camadas da frente); os hipercubos 4D/5D ficam apenas por camadas. Por serem muito rígidos, em «Difícil» restam apenas alguns algarismos dados (em 5D apenas alguns das 243 células). Greco-latino: tamanhos 3, 4, 5, 7 (6 é impossível; 8 e 9 omitidos por rapidez).
- **Anti-wazir** não existe: proibir o mesmo algarismo em células vizinhas ortogonalmente já é uma regra de qualquer Sudoku. «Anti-bispo» significa o salto 2×2, não um bispo deslizante. Os elementos «Strings complementary/equal» da lista de trabalho não são variantes separadas: a ideia está coberta por Linha complementar e Eco.
- **Variantes logicamente próximas ou idênticas (indicadas nas fichas):** Sudoku com zero (apenas outros símbolos relativamente ao Clássico), Linhas lexicográficas (reduz-se a «a primeira coluna é 1…N»), Cave (Arranha-céus com os algarismos invertidos).
- **Duelo:** o adversário é um cronómetro que preenche células a partir da solução conhecida, não um resolvedor com lógica.
- As regras seguem as convenções habituais; as fichas dizem que variante de convenção foi escolhida. Para algumas variantes novas as fontes divergem e fixei uma convenção explícita: Girandola (desde a 1.4: cantos, centro e r2c5, r5c2, r5c8, r8c5, segundo Regexp::Sudoku; a disposição antiga é agora «Noves dispersos»), «linha de paridade» (alternante, com a variante «igual paridade» à parte), Rossini (a seta aponta para o maior dos três primeiros algarismos), Outside (os algarismos da margem aparecem entre as três primeiras células), Zipper (todos os pares simétricos somam o centro), Linhas com somas por região (a soma em cada caixa atravessada é a mesma), Fortaleza (só contam os vizinhos não marcados).

## Privacidade e rede

- **Armazenamento local:** `localStorage`, chaves `sudoku-fara-frontiere.lang`, `sudoku-fara-frontiere.theme`, `sudoku-fara-frontiere.size`, `sudoku-fara-frontiere.game`, `sudoku-fara-frontiere.daily` (língua, tema, tamanho do texto, o jogo atual, a série do Puzzle do dia) e `sudoku-fara-frontiere.game_bad` (estado guardado num formato desconhecido, conservado).
- **Rede:** no código não existem `fetch`, `XMLHttpRequest`, CDN nem recursos externos. O único URL do ficheiro é o espaço de nomes SVG (`http://www.w3.org/2000/svg`), que não gera nenhum pedido.

## Estrutura do repositório

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

Publicação no GitHub Pages: Settings → Pages → Branch `main`, pasta `/ (root)`; `index.html` está na raiz e usa apenas caminhos relativos, pelo que funciona também sob `https://<utilizador>.github.io/<repositório>/`. Ver [`CHANGELOG.md`](CHANGELOG.md) e [`CONTRIBUTING.pt.md`](CONTRIBUTING.pt.md).

## Execução local / offline

Descarregue `index.html` e abra-o num navegador; não requer internet.

## Testes

Correm também automaticamente no GitHub (Actions, `.github/workflows/ci.yml`): compilação reprodutível, `node test.js` e verificação de que `index.html` não tem recursos externos.

`engine.js` é o motor (a mesma fonte está incluída em `index.html`). A suíte `test.js` corre com Node:

```
node test.js            # toate variantele și mărimile
node test.js killer     # o singură variantă
```

Para cada variante e tamanho, nos níveis fácil e difícil, verifica: a solução respeita as regras, o puzzle tem solução única (contagem com o mesmo resolvedor do gerador, com um orçamento amplo; as enumerações 4×4 e o validador de semântica são escritos separadamente), a solução sobrevive à propagação a partir de subconjuntos aleatórios de pistas (*soundness*). Além disso, em 4×4 o número de soluções sem pistas é comparado com uma enumeração exaustiva (p. ex. 288 para o clássico), e são verificadas algumas combinações personalizadas. Desde a versão 1.1, cada puzzle é verificado também por um validador da semântica das regras escrito à parte do motor, diretamente a partir do texto das fichas (verifica, por exemplo, Zipper, Lockout, as setas média/produto/comprimido, Clone, as cadeias do Strimko). Desde a versão 1.3, o validador independente cobre também as topologias, os saltos fairy, as regras globais, as pistas na margem, nas células, as jaulas, as linhas e os pontos (fórmulas reescritas à parte do motor), e para cubos, hipercubos e greco-latino o número de soluções sem pistas é comparado com uma enumeração DFS à parte (p. ex. 21888 para o cubo 4×4×4 com caixas 2×2, 72 e 6912 para o greco-latino 3 e 4). Última execução: 3144 verificações, todas aprovadas; o validador independente cobre agora também os tipos da 1.0–1.2, e um teste de mutantes (16.506 mudanças de nome de algarismos) mostra acordo total entre o motor e o validador; 660 puzzles 4×4 foram confirmados únicos por uma enumeração à parte; esforço adicional com 12 sementes por variante (5652 puzzles, zero erros); além disso, uma prova de esforço com 5 puzzles em cada variante, tamanho mínimo e máximo, sem qualquer erro (a geração mais lenta, em «Difícil» em algumas variantes com regras globais, demorou cerca de 21 s). Limite: a verificação cruzada por enumeração exaustiva existe apenas para as variantes que têm tamanho 4×4 (e para cubos/greco-latino pequenos, como se mostrou acima).

## O que não está implementado do nível 3

Não estão incluídos: Chaos Construction, Deconstruction, os híbridos com outros puzzles (Loop, Snake, Yin-Yang, Nurikabe, Sudoku Mine), as grelhas sobrepostas Flower/Butterfly (Sohei e Kazaguruma existem desde a 1.3, com uma geometria escolhida por mim), as células modificadoras, Schrödinger, «liar», Vudoku, Capsule, Deficit. Algumas mudam o modo de jogo ou exigem resolvedores com outro tipo de lógica; para outras, as fontes encontradas não fixam nem as regras nem a geometria, e inventá-las significaria apresentar como variante conhecida algo que não o é.

## Licença

**MIT** — ver [`LICENSE`](LICENSE). Aplica-se a todo o repositório: o código (`engine.js`, `src/`, `build.py`, `test.js`, `index.html`), os textos (README, as fichas) e as capturas de `docs/screens/`. Pode usar, copiar, modificar, publicar e vender, desde que mantenha o aviso de direitos de autor e o texto da licença. O programa é fornecido «tal como está», sem garantias.

Notas:
- A aplicação não inclui bibliotecas nem recursos externos, pelo que não há licenças de terceiros a respeitar.
- Os nomes e as regras das variantes do Sudoku (Killer, Kropki, Sandwich, etc.) designam tipos de puzzle publicamente conhecidos; os textos das fichas são escritos para esta aplicação. Os nomes continuam a ser dos autores e das comunidades que os criaram.

## Autor

Alexio — Alexandru-Ionuț Chiuță, contacto: <alexio@trom.tf>.

## Resumo

Um atlas de 136 entradas de Sudoku (≈130 com regras distintas; Cave, Zero e Linhas lexicográficas são quase duplicados de outras variantes e dizem-no nas fichas) (mais 7 modos de jogo: Orb, Memória, Maratona, Duelo, Hardcore, Puzzle do dia, Sonoro) com gerador e resolvedor locais, num único ficheiro HTML. Os puzzles são gerados no navegador com uma solução única demonstrada (os algarismos dados só são retirados enquanto um resolvedor com propagação confirmar a unicidade). Inclui um misturador de regras personalizado, notas/anular/pistas, códigos de partilha, um resolvedor clássico 9×9, exportação CSV e citação BibTeX. Sem pedidos de rede; o estado é guardado em `localStorage` (`sff_*`). A dificuldade (fácil/médio/difícil) é apenas o número de algarismos dados mantidos; cada puzzle mostra também um valor medido: quantas ramificações precisa um resolvedor com propagação (0 = resolve-se só por propagação). É esforço do resolvedor, não uma avaliação de técnicas humanas. Execute `node test.js` para a suíte de testes do motor. Licença: MIT (ver `LICENSE`), que abrange código, textos e capturas.

Este README contém um guia de utilização com capturas da interface e um catálogo com duas capturas reais, as regras e um código reprodutível para cada uma das 136 variantes (`screens/`).

## Notas v1.4

- **Girandola** foi corrigida segundo a descrição do Regexp::Sudoku (cantos, centro, r2c5, r5c2, r5c8, r8c5). A disposição antiga (cantos, pontos médios dos lados, centro) fica como «Noves dispersos» (`sparse9`). Os códigos `girandola-…` gerados antes da 1.4 produzem agora outro puzzle.
- Corrigido na 1.4 a partir das capturas: a etiqueta do separador «Jogar» (chave de texto duplicada), as listas que ficavam com valores antigos após «Abrir» com um código e a mensagem «Células erradas» que permanecia depois de anular.
- Verificações 1.4: validador escrito às cegas a partir do texto das fichas (135/135 das variantes então existentes passaram; «Noves dispersos» foi acrescentada depois e tem validador em `test.js`), confronto com fontes publicadas em 56 variantes (as fichas Regionsum, Rossini e Little Unique Killer receberam precisões), uma execução única de 1818 puzzles em todas as variantes e tamanhos ≤12 sem erros (o script não faz parte do repositório), «Passo a passo» testado em todas as 136 variantes.
- Ainda não confirmados pelas fontes: a disposição de Sohei, Kazaguruma, Cruz, Tripledoku V; o tratamento dos algarismos repetidos em Quad e Duplicadores; a conectividade diagonal no Strimko.
