# Catálogo: Topologias e saltos fairy (9)

[English](../en/10-topologii-si-mutari-fairy.md) · [Română](../10-topologii-si-mutari-fairy.md) · [Français](../fr/10-topologii-si-mutari-fairy.md) · [Italiano](../it/10-topologii-si-mutari-fairy.md) · [Español](../es/10-topologii-si-mutari-fairy.md) · **Português** · [Deutsch](../de/10-topologii-si-mutari-fairy.md) · [Magyar](../hu/10-topologii-si-mutari-fairy.md)

[← README](../../../README.pt.md) · [Todas as categorias](README.md)

[Tamanho e símbolos](01-marime-si-simboluri.md) · [Regiões e grupos](02-regiuni-si-grupuri.md) · [Vizinhos](03-vecini.md) · [Paridade, pontos, sinais](04-paritate-puncte-semne.md) · [Somas](05-sume.md) · [Pistas na margem](06-indicii-pe-margine.md) · [Linhas](07-linii.md) · [Grelhas compostas](08-grile-compuse.md) · [Parentes próximos](09-rude-apropiate.md) · **Topologias e saltos fairy** · [Regras globais](11-reguli-globale.md) · [Pistas nas células](12-indicii-in-celule.md) · [Dimensões superiores](13-dimensiuni-superioare.md)

---


_As margens da grelha colam-se segundo a regra da variante; uma célula da margem tem vizinhos também do lado oposto._

<a id="antibishop"></a>
#### 102. Anti-bispo · Anti-alfil (`antibishop`)

**Sem o mesmo algarismo a dois passos na diagonal.**

Além das regras clássicas, duas células situadas exatamente a dois passos na diagonal (2 linhas e 2 colunas de distância, o movimento «alfil» do xadrez fairy) não podem conter o mesmo algarismo. Não é o bispo deslizante (esse imporia diagonais inteiras); é apenas o salto de 2×2. Tamanhos 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/antibishop_a.webp" width="300" alt="Anti-bispo: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 26 pistas)</sub></td><td align="center"><img src="../../screens/antibishop_b.webp" width="300" alt="Anti-bispo: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 9 (linha 7, col. 3): é a única célula da linha assinalada onde o 9 pode estar.
- **Código para o mesmo puzzle:** `antibishop-9-medium-4275501725` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 1 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_card.webp" width="200" alt="Anti-bispo: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_fiche.webp" width="260" alt="Anti-bispo: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_s6.webp" width="200" alt="Anti-bispo: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_s9.webp" width="200" alt="Anti-bispo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_easy.webp" width="200" alt="Anti-bispo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_a.webp" width="200" alt="Anti-bispo: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_hard.webp" width="200" alt="Anti-bispo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_notes.webp" width="200" alt="Anti-bispo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_check.webp" width="200" alt="Anti-bispo: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_solved.webp" width="200" alt="Anti-bispo: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_dark.webp" width="200" alt="Anti-bispo: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_mobile.webp" width="150" alt="Anti-bispo: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antibishop_en.webp" width="300" alt="Anti-bispo: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antibishop_rules.webp" width="300" alt="Anti-bispo: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="anticamel"></a>
#### 103. Anti-camelo · Anti-camel (`anticamel`)

**Sem o mesmo algarismo a um salto de camelo (1,3).**

Além das regras clássicas, duas células a um salto de camelo (1 linha e 3 colunas, ou 3 linhas e 1 coluna) não podem conter o mesmo algarismo. Só 9×9.

<table><tr><td align="center"><img src="../../screens/anticamel_a.webp" width="300" alt="Anti-camelo: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 26 pistas)</sub></td><td align="center"><img src="../../screens/anticamel_b.webp" width="300" alt="Anti-camelo: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 7 (linha 4, col. 5): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `anticamel-9-medium-634926365` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_card.webp" width="200" alt="Anti-camelo: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_fiche.webp" width="260" alt="Anti-camelo: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_s9.webp" width="200" alt="Anti-camelo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_easy.webp" width="200" alt="Anti-camelo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_a.webp" width="200" alt="Anti-camelo: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_hard.webp" width="200" alt="Anti-camelo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_notes.webp" width="200" alt="Anti-camelo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_check.webp" width="200" alt="Anti-camelo: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_solved.webp" width="200" alt="Anti-camelo: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_dark.webp" width="200" alt="Anti-camelo: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_mobile.webp" width="150" alt="Anti-camelo: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/anticamel_en.webp" width="300" alt="Anti-camelo: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/anticamel_rules.webp" width="300" alt="Anti-camelo: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="antizebra"></a>
#### 104. Anti-zebra · Anti-zebra (`antizebra`)

**Sem o mesmo algarismo a um salto de zebra (2,3).**

Além das regras clássicas, duas células a um salto de zebra (2 linhas e 3 colunas, ou 3 linhas e 2 colunas) não podem conter o mesmo algarismo. Só 9×9.

<table><tr><td align="center"><img src="../../screens/antizebra_a.webp" width="300" alt="Anti-zebra: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 26 pistas)</sub></td><td align="center"><img src="../../screens/antizebra_b.webp" width="300" alt="Anti-zebra: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 5 (linha 1, col. 3): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `antizebra-9-medium-439216389` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_card.webp" width="200" alt="Anti-zebra: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_fiche.webp" width="260" alt="Anti-zebra: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_s9.webp" width="200" alt="Anti-zebra: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_easy.webp" width="200" alt="Anti-zebra: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_a.webp" width="200" alt="Anti-zebra: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_hard.webp" width="200" alt="Anti-zebra: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_notes.webp" width="200" alt="Anti-zebra: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_check.webp" width="200" alt="Anti-zebra: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_solved.webp" width="200" alt="Anti-zebra: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_dark.webp" width="200" alt="Anti-zebra: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_mobile.webp" width="150" alt="Anti-zebra: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antizebra_en.webp" width="300" alt="Anti-zebra: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antizebra_rules.webp" width="300" alt="Anti-zebra: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="torusking"></a>
#### 105. Toro anti-rei · Torus anti-king (`torusking`)

**Anti-rei numa grelha que se fecha como um toro.**

A grelha continua nas margens: a margem de cima cola-se à de baixo, a da esquerda à da direita. Duas células vizinhas na diagonal (movimento de rei), incluindo através da margem, não podem conter o mesmo algarismo (por exemplo, o canto superior esquerdo é vizinho diagonal do canto inferior direito). Só 9×9.

<table><tr><td align="center"><img src="../../screens/torusking_a.webp" width="300" alt="Toro anti-rei: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/torusking_b.webp" width="300" alt="Toro anti-rei: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 6 (linha 5, col. 5): é a única célula da linha assinalada onde o 6 pode estar.
- **Código para o mesmo puzzle:** `torusking-9-medium-1622319202` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 17 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_card.webp" width="200" alt="Toro anti-rei: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/torusking_fiche.webp" width="260" alt="Toro anti-rei: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_s9.webp" width="200" alt="Toro anti-rei: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_easy.webp" width="200" alt="Toro anti-rei: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/torusking_a.webp" width="200" alt="Toro anti-rei: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/torusking_hard.webp" width="200" alt="Toro anti-rei: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_notes.webp" width="200" alt="Toro anti-rei: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_check.webp" width="200" alt="Toro anti-rei: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_solved.webp" width="200" alt="Toro anti-rei: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_dark.webp" width="200" alt="Toro anti-rei: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/torusking_mobile.webp" width="150" alt="Toro anti-rei: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusking_en.webp" width="300" alt="Toro anti-rei: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusking_rules.webp" width="300" alt="Toro anti-rei: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="torusknight"></a>
#### 106. Toro anti-cavalo · Torus anti-knight (`torusknight`)

**Anti-cavalo numa grelha que se fecha como um toro.**

A grelha continua nas margens (cima com baixo, esquerda com direita). Duas células a um salto de cavalo, incluindo através da margem, não podem conter o mesmo algarismo. Só 9×9.

<table><tr><td align="center"><img src="../../screens/torusknight_a.webp" width="300" alt="Toro anti-cavalo: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/torusknight_b.webp" width="300" alt="Toro anti-cavalo: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 5 (linha 3, col. 6): é a única célula da linha assinalada onde o 5 pode estar.
- **Código para o mesmo puzzle:** `torusknight-9-medium-2092083509` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_card.webp" width="200" alt="Toro anti-cavalo: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_fiche.webp" width="260" alt="Toro anti-cavalo: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_s9.webp" width="200" alt="Toro anti-cavalo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_easy.webp" width="200" alt="Toro anti-cavalo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_a.webp" width="200" alt="Toro anti-cavalo: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_hard.webp" width="200" alt="Toro anti-cavalo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_notes.webp" width="200" alt="Toro anti-cavalo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_check.webp" width="200" alt="Toro anti-cavalo: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_solved.webp" width="200" alt="Toro anti-cavalo: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_dark.webp" width="200" alt="Toro anti-cavalo: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_mobile.webp" width="150" alt="Toro anti-cavalo: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/torusknight_en.webp" width="300" alt="Toro anti-cavalo: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/torusknight_rules.webp" width="300" alt="Toro anti-cavalo: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="cylking"></a>
#### 107. Cilindro anti-rei · Cylinder anti-king (`cylking`)

**A esquerda cola-se à direita; em cima e em baixo ficam margens.**

A margem da esquerda cola-se à da direita, como num cilindro; em cima e em baixo não se colam. Duas células a um movimento de rei (incluindo através da junção esquerda–direita) não podem conter o mesmo algarismo. Só 9×9.

<table><tr><td align="center"><img src="../../screens/cylking_a.webp" width="300" alt="Cilindro anti-rei: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 24 pistas)</sub></td><td align="center"><img src="../../screens/cylking_b.webp" width="300" alt="Cilindro anti-rei: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 7, col. 5): é a única célula da linha assinalada onde o 8 pode estar.
- **Código para o mesmo puzzle:** `cylking-9-medium-3432982682` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 2 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_card.webp" width="200" alt="Cilindro anti-rei: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cylking_fiche.webp" width="260" alt="Cilindro anti-rei: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_s9.webp" width="200" alt="Cilindro anti-rei: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_easy.webp" width="200" alt="Cilindro anti-rei: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/cylking_a.webp" width="200" alt="Cilindro anti-rei: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/cylking_hard.webp" width="200" alt="Cilindro anti-rei: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_notes.webp" width="200" alt="Cilindro anti-rei: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_check.webp" width="200" alt="Cilindro anti-rei: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_solved.webp" width="200" alt="Cilindro anti-rei: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_dark.webp" width="200" alt="Cilindro anti-rei: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/cylking_mobile.webp" width="150" alt="Cilindro anti-rei: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cylking_en.webp" width="300" alt="Cilindro anti-rei: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cylking_rules.webp" width="300" alt="Cilindro anti-rei: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="mobiusking"></a>
#### 108. Möbius anti-rei · Möbius anti-king (`mobiusking`)

**A esquerda cola-se à direita com uma torção.**

A margem da esquerda cola-se à da direita com uma torção (a linha r liga-se à linha 10−r), como numa fita de Möbius. Duas células a um movimento de rei, incluindo através da junção, não podem conter o mesmo algarismo. Só 9×9. A convenção de colagem é a descrita aqui.

<table><tr><td align="center"><img src="../../screens/mobiusking_a.webp" width="300" alt="Möbius anti-rei: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/mobiusking_b.webp" width="300" alt="Möbius anti-rei: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 6 (linha 5, col. 2): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `mobiusking-9-medium-3019619418` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 4 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_card.webp" width="200" alt="Möbius anti-rei: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_fiche.webp" width="260" alt="Möbius anti-rei: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_s9.webp" width="200" alt="Möbius anti-rei: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_easy.webp" width="200" alt="Möbius anti-rei: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_a.webp" width="200" alt="Möbius anti-rei: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_hard.webp" width="200" alt="Möbius anti-rei: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_notes.webp" width="200" alt="Möbius anti-rei: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_check.webp" width="200" alt="Möbius anti-rei: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_solved.webp" width="200" alt="Möbius anti-rei: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_dark.webp" width="200" alt="Möbius anti-rei: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_mobile.webp" width="150" alt="Möbius anti-rei: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/mobiusking_en.webp" width="300" alt="Möbius anti-rei: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/mobiusking_rules.webp" width="300" alt="Möbius anti-rei: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="kleinking"></a>
#### 109. Klein anti-rei · Klein anti-king (`kleinking`)

**Garrafa de Klein: esquerda–direita com torção, cima–baixo simples.**

A margem da esquerda cola-se à da direita com uma torção (a linha r liga-se à linha 10−r), e a de cima cola-se à de baixo sem torção: uma garrafa de Klein. Duas células a um movimento de rei, incluindo através das junções, não podem conter o mesmo algarismo. Só 9×9. A convenção de colagem é a descrita aqui.

<table><tr><td align="center"><img src="../../screens/kleinking_a.webp" width="300" alt="Klein anti-rei: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/kleinking_b.webp" width="300" alt="Klein anti-rei: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 4, col. 8): é a única célula da linha assinalada onde o 8 pode estar.
- **Código para o mesmo puzzle:** `kleinking-9-medium-1542891122` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_card.webp" width="200" alt="Klein anti-rei: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_fiche.webp" width="260" alt="Klein anti-rei: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_s9.webp" width="200" alt="Klein anti-rei: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_easy.webp" width="200" alt="Klein anti-rei: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_a.webp" width="200" alt="Klein anti-rei: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_hard.webp" width="200" alt="Klein anti-rei: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_notes.webp" width="200" alt="Klein anti-rei: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_check.webp" width="200" alt="Klein anti-rei: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_solved.webp" width="200" alt="Klein anti-rei: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_dark.webp" width="200" alt="Klein anti-rei: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_mobile.webp" width="150" alt="Klein anti-rei: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/kleinking_en.webp" width="300" alt="Klein anti-rei: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kleinking_rules.webp" width="300" alt="Klein anti-rei: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="projking"></a>
#### 110. Plano projetivo anti-rei · Projective-plane anti-king (`projking`)

**Os dois pares de margens colam-se com torção.**

A esquerda cola-se à direita com torção (a linha r com 10−r) e a de cima à de baixo com torção (a coluna c com 10−c): um plano projetivo real. Duas células a um movimento de rei, incluindo através das junções, não podem conter o mesmo algarismo. Só 9×9. A convenção de colagem é a descrita aqui.

<table><tr><td align="center"><img src="../../screens/projking_a.webp" width="300" alt="Plano projetivo anti-rei: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/projking_b.webp" width="300" alt="Plano projetivo anti-rei: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 1 (linha 6, col. 6): é a única célula da linha assinalada onde o 1 pode estar.
- **Código para o mesmo puzzle:** `projking-9-medium-1483663755` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_card.webp" width="200" alt="Plano projetivo anti-rei: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/projking_fiche.webp" width="260" alt="Plano projetivo anti-rei: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_s9.webp" width="200" alt="Plano projetivo anti-rei: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_easy.webp" width="200" alt="Plano projetivo anti-rei: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/projking_a.webp" width="200" alt="Plano projetivo anti-rei: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/projking_hard.webp" width="200" alt="Plano projetivo anti-rei: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_notes.webp" width="200" alt="Plano projetivo anti-rei: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/projking_check.webp" width="200" alt="Plano projetivo anti-rei: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/projking_solved.webp" width="200" alt="Plano projetivo anti-rei: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_dark.webp" width="200" alt="Plano projetivo anti-rei: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/projking_mobile.webp" width="150" alt="Plano projetivo anti-rei: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/projking_en.webp" width="300" alt="Plano projetivo anti-rei: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/projking_rules.webp" width="300" alt="Plano projetivo anti-rei: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

