# Catálogo: Regras globais (10)

[English](../en/11-reguli-globale.md) · [Română](../11-reguli-globale.md) · [Français](../fr/11-reguli-globale.md) · [Italiano](../it/11-reguli-globale.md) · [Español](../es/11-reguli-globale.md) · **Português** · [Deutsch](../de/11-reguli-globale.md) · [Magyar](../hu/11-reguli-globale.md)

[← README](../../../README.pt.md) · [Todas as categorias](README.md)

[Tamanho e símbolos](01-marime-si-simboluri.md) · [Regiões e grupos](02-regiuni-si-grupuri.md) · [Vizinhos](03-vecini.md) · [Paridade, pontos, sinais](04-paritate-puncte-semne.md) · [Somas](05-sume.md) · [Pistas na margem](06-indicii-pe-margine.md) · [Linhas](07-linii.md) · [Grelhas compostas](08-grile-compuse.md) · [Parentes próximos](09-rude-apropiate.md) · [Topologias e saltos fairy](10-topologii-si-mutari-fairy.md) · **Regras globais** · [Pistas nas células](12-indicii-in-celule.md) · [Dimensões superiores](13-dimensiuni-superioare.md)

---


_A regra diz respeito à grelha inteira e, em regra, não tem marcações próprias; verifica-a com «Verificar» ou acompanha os conflitos._

<a id="symcomp"></a>
#### 111. Simetria complementar · Complementary symmetry (`symcomp`)

**As células simétricas em relação ao centro somam N+1.**

Além das regras clássicas, quaisquer duas células simétricas em relação ao centro da grelha (rotação de 180°) somam N+1 (em 9×9: 10). A célula central é, portanto, 5. Tamanhos 9×9 e 4×4.

<table><tr><td align="center"><img src="../../screens/symcomp_a.webp" width="300" alt="Simetria complementar: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/symcomp_b.webp" width="300" alt="Simetria complementar: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 1 (linha 5, col. 4): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `symcomp-9-medium-913346369` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_card.webp" width="200" alt="Simetria complementar: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_fiche.webp" width="260" alt="Simetria complementar: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_s4.webp" width="200" alt="Simetria complementar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_s9.webp" width="200" alt="Simetria complementar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_easy.webp" width="200" alt="Simetria complementar: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_a.webp" width="200" alt="Simetria complementar: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_hard.webp" width="200" alt="Simetria complementar: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_notes.webp" width="200" alt="Simetria complementar: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_check.webp" width="200" alt="Simetria complementar: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_solved.webp" width="200" alt="Simetria complementar: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_dark.webp" width="200" alt="Simetria complementar: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_mobile.webp" width="150" alt="Simetria complementar: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symcomp_en.webp" width="300" alt="Simetria complementar: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symcomp_rules.webp" width="300" alt="Simetria complementar: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="symparity"></a>
#### 112. Paridade simétrica · Symmetric parity (`symparity`)

**As células simétricas em relação ao centro têm a mesma paridade.**

Além das regras clássicas, quaisquer duas células simétricas em relação ao centro da grelha (rotação de 180°) são ambas pares ou ambas ímpares.

<table><tr><td align="center"><img src="../../screens/symparity_a.webp" width="300" alt="Paridade simétrica: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 24 pistas)</sub></td><td align="center"><img src="../../screens/symparity_b.webp" width="300" alt="Paridade simétrica: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 5 (linha 1, col. 1): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `symparity-9-medium-2361855335` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_card.webp" width="200" alt="Paridade simétrica: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/symparity_fiche.webp" width="260" alt="Paridade simétrica: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_s4.webp" width="200" alt="Paridade simétrica: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s6.webp" width="200" alt="Paridade simétrica: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/symparity_s9.webp" width="200" alt="Paridade simétrica: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_easy.webp" width="200" alt="Paridade simétrica: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/symparity_a.webp" width="200" alt="Paridade simétrica: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/symparity_hard.webp" width="200" alt="Paridade simétrica: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_notes.webp" width="200" alt="Paridade simétrica: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_check.webp" width="200" alt="Paridade simétrica: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_solved.webp" width="200" alt="Paridade simétrica: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_dark.webp" width="200" alt="Paridade simétrica: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/symparity_mobile.webp" width="150" alt="Paridade simétrica: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/symparity_en.webp" width="300" alt="Paridade simétrica: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/symparity_rules.webp" width="300" alt="Paridade simétrica: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="cgrav"></a>
#### 113. Centro de gravidade · Centre of gravity (`cgrav`)

**Cada linha está em equilíbrio como uma balança.**

Além das regras clássicas, cada linha está em equilíbrio: se as posições forem numeradas −4…+4 e cada algarismo for um peso, a soma dos pesos × posições é 0 (o centro de gravidade fica exatamente a meio). Só 9×9; a geração pode demorar alguns segundos em Fácil e até ~20 s em Difícil.

<table><tr><td align="center"><img src="../../screens/cgrav_a.webp" width="300" alt="Centro de gravidade: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 26 pistas)</sub></td><td align="center"><img src="../../screens/cgrav_b.webp" width="300" alt="Centro de gravidade: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 4 (linha 1, col. 7): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `cgrav-9-medium-1954301562` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_card.webp" width="200" alt="Centro de gravidade: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_fiche.webp" width="260" alt="Centro de gravidade: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_s9.webp" width="200" alt="Centro de gravidade: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_easy.webp" width="200" alt="Centro de gravidade: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_a.webp" width="200" alt="Centro de gravidade: Médio"><br><sub>Médio</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_notes.webp" width="200" alt="Centro de gravidade: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_check.webp" width="200" alt="Centro de gravidade: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_solved.webp" width="200" alt="Centro de gravidade: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_dark.webp" width="200" alt="Centro de gravidade: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_mobile.webp" width="150" alt="Centro de gravidade: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cgrav_en.webp" width="300" alt="Centro de gravidade: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cgrav_rules.webp" width="300" alt="Centro de gravidade: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="lexrows"></a>
#### 114. Linhas lexicográficas · Lexicographic rows (`lexrows`)

**As linhas crescem como palavras (primeira coluna: 1…N).**

Além das regras clássicas, lendo as linhas de cima para baixo como «palavras» de algarismos, cada linha é estritamente menor, em ordem lexicográfica, do que a de baixo (compara-se o primeiro algarismo diferente). Como a primeira coluna contém algarismos diferentes, a regra significa na prática que a primeira coluna, lida de cima para baixo, é 1, 2, …, N.

<table><tr><td align="center"><img src="../../screens/lexrows_a.webp" width="300" alt="Linhas lexicográficas: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/lexrows_b.webp" width="300" alt="Linhas lexicográficas: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 3 (linha 7, col. 6): é a única célula da coluna assinalada onde o 3 pode estar.
- **Código para o mesmo puzzle:** `lexrows-9-medium-957311172` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 1 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_card.webp" width="200" alt="Linhas lexicográficas: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_fiche.webp" width="260" alt="Linhas lexicográficas: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_s4.webp" width="200" alt="Linhas lexicográficas: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s6.webp" width="200" alt="Linhas lexicográficas: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_s9.webp" width="200" alt="Linhas lexicográficas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_easy.webp" width="200" alt="Linhas lexicográficas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_a.webp" width="200" alt="Linhas lexicográficas: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_hard.webp" width="200" alt="Linhas lexicográficas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_notes.webp" width="200" alt="Linhas lexicográficas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_check.webp" width="200" alt="Linhas lexicográficas: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_solved.webp" width="200" alt="Linhas lexicográficas: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_dark.webp" width="200" alt="Linhas lexicográficas: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_mobile.webp" width="150" alt="Linhas lexicográficas: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lexrows_en.webp" width="300" alt="Linhas lexicográficas: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lexrows_rules.webp" width="300" alt="Linhas lexicográficas: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="extremes"></a>
#### 115. Extremos adjacentes · Touching extremes (`extremes`)

**O mínimo e o máximo da caixa tocam-se.**

Além das regras clássicas, em cada caixa os algarismos 1 e N ficam em células vizinhas, incluindo na diagonal (movimento de rei). A convenção «incluindo a diagonal» foi escolhida aqui: com vizinhos apenas ortogonais não existem grelhas 9×9 (verificado exaustivamente).

<table><tr><td align="center"><img src="../../screens/extremes_a.webp" width="300" alt="Extremos adjacentes: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/extremes_b.webp" width="300" alt="Extremos adjacentes: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 6 (linha 4, col. 4): é a única célula da coluna assinalada onde o 6 pode estar.
- **Código para o mesmo puzzle:** `extremes-9-medium-1348183675` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 2 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_card.webp" width="200" alt="Extremos adjacentes: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/extremes_fiche.webp" width="260" alt="Extremos adjacentes: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_s4.webp" width="200" alt="Extremos adjacentes: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s6.webp" width="200" alt="Extremos adjacentes: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/extremes_s9.webp" width="200" alt="Extremos adjacentes: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_easy.webp" width="200" alt="Extremos adjacentes: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/extremes_a.webp" width="200" alt="Extremos adjacentes: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/extremes_hard.webp" width="200" alt="Extremos adjacentes: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_notes.webp" width="200" alt="Extremos adjacentes: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_check.webp" width="200" alt="Extremos adjacentes: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_solved.webp" width="200" alt="Extremos adjacentes: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_dark.webp" width="200" alt="Extremos adjacentes: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/extremes_mobile.webp" width="150" alt="Extremos adjacentes: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/extremes_en.webp" width="300" alt="Extremos adjacentes: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/extremes_rules.webp" width="300" alt="Extremos adjacentes: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="boxbalance"></a>
#### 116. Caixas equilibradas · Balanced boxes (`boxbalance`)

**A primeira e a última coluna da caixa têm a mesma soma.**

Além das regras clássicas, em cada caixa a soma dos algarismos da coluna da esquerda é igual à soma dos da coluna da direita.

<table><tr><td align="center"><img src="../../screens/boxbalance_a.webp" width="300" alt="Caixas equilibradas: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/boxbalance_b.webp" width="300" alt="Caixas equilibradas: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 6 (linha 6, col. 4): nenhuma dedução direta; o algarismo é tirado da solução única (seria necessária uma hipótese).
- **Código para o mesmo puzzle:** `boxbalance-9-medium-1668427631` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 314 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_card.webp" width="200" alt="Caixas equilibradas: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_fiche.webp" width="260" alt="Caixas equilibradas: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_s4.webp" width="200" alt="Caixas equilibradas: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s6.webp" width="200" alt="Caixas equilibradas: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_s9.webp" width="200" alt="Caixas equilibradas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_easy.webp" width="200" alt="Caixas equilibradas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_a.webp" width="200" alt="Caixas equilibradas: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_hard.webp" width="200" alt="Caixas equilibradas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_notes.webp" width="200" alt="Caixas equilibradas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_check.webp" width="200" alt="Caixas equilibradas: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_solved.webp" width="200" alt="Caixas equilibradas: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_dark.webp" width="200" alt="Caixas equilibradas: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_mobile.webp" width="150" alt="Caixas equilibradas: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/boxbalance_en.webp" width="300" alt="Caixas equilibradas: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/boxbalance_rules.webp" width="300" alt="Caixas equilibradas: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="lonely5"></a>
#### 117. O 5 solitário · Lonely 5 (`lonely5`)

**Um 5 só tem vizinhos pares.**

Além das regras clássicas, qualquer 5 tem apenas vizinhos ortogonais pares. Tamanhos 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/lonely5_a.webp" width="300" alt="O 5 solitário: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 24 pistas)</sub></td><td align="center"><img src="../../screens/lonely5_b.webp" width="300" alt="O 5 solitário: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 2 (linha 5, col. 3): é a única célula da linha assinalada onde o 2 pode estar.
- **Código para o mesmo puzzle:** `lonely5-9-medium-4284537212` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_card.webp" width="200" alt="O 5 solitário: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_fiche.webp" width="260" alt="O 5 solitário: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_s6.webp" width="200" alt="O 5 solitário: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_s9.webp" width="200" alt="O 5 solitário: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_easy.webp" width="200" alt="O 5 solitário: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_a.webp" width="200" alt="O 5 solitário: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_hard.webp" width="200" alt="O 5 solitário: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_notes.webp" width="200" alt="O 5 solitário: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_check.webp" width="200" alt="O 5 solitário: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_solved.webp" width="200" alt="O 5 solitário: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_dark.webp" width="200" alt="O 5 solitário: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_mobile.webp" width="150" alt="O 5 solitário: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/lonely5_en.webp" width="300" alt="O 5 solitário: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/lonely5_rules.webp" width="300" alt="O 5 solitário: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="nolonely"></a>
#### 118. Sem células isoladas · No lonely cells (`nolonely`)

**Cada célula tem um vizinho consecutivo.**

Além das regras clássicas, cada célula tem pelo menos um vizinho ortogonal cujo algarismo difere exatamente em 1.

<table><tr><td align="center"><img src="../../screens/nolonely_a.webp" width="300" alt="Sem células isoladas: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/nolonely_b.webp" width="300" alt="Sem células isoladas: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 5 (linha 9, col. 9): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `nolonely-9-medium-355818888` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_card.webp" width="200" alt="Sem células isoladas: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_fiche.webp" width="260" alt="Sem células isoladas: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_s4.webp" width="200" alt="Sem células isoladas: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s6.webp" width="200" alt="Sem células isoladas: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_s9.webp" width="200" alt="Sem células isoladas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_easy.webp" width="200" alt="Sem células isoladas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_a.webp" width="200" alt="Sem células isoladas: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_hard.webp" width="200" alt="Sem células isoladas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_notes.webp" width="200" alt="Sem células isoladas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_check.webp" width="200" alt="Sem células isoladas: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_solved.webp" width="200" alt="Sem células isoladas: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_dark.webp" width="200" alt="Sem células isoladas: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_mobile.webp" width="150" alt="Sem células isoladas: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nolonely_en.webp" width="300" alt="Sem células isoladas: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nolonely_rules.webp" width="300" alt="Sem células isoladas: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="noprog"></a>
#### 119. Sem progressões · No arithmetic progressions (`noprog`)

**Três algarismos adjacentes não formam uma progressão aritmética.**

Além das regras clássicas, três células adjacentes numa linha ou numa coluna não podem formar uma progressão aritmética (por exemplo, 2-4-6 ou 7-5-3 são proibidas).

<table><tr><td align="center"><img src="../../screens/noprog_a.webp" width="300" alt="Sem progressões: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 24 pistas)</sub></td><td align="center"><img src="../../screens/noprog_b.webp" width="300" alt="Sem progressões: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 2 (linha 3, col. 7): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `noprog-9-medium-3644248957` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 6 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_card.webp" width="200" alt="Sem progressões: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/noprog_fiche.webp" width="260" alt="Sem progressões: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_s4.webp" width="200" alt="Sem progressões: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s6.webp" width="200" alt="Sem progressões: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/noprog_s9.webp" width="200" alt="Sem progressões: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_easy.webp" width="200" alt="Sem progressões: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/noprog_a.webp" width="200" alt="Sem progressões: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/noprog_hard.webp" width="200" alt="Sem progressões: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_notes.webp" width="200" alt="Sem progressões: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_check.webp" width="200" alt="Sem progressões: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_solved.webp" width="200" alt="Sem progressões: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_dark.webp" width="200" alt="Sem progressões: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/noprog_mobile.webp" width="150" alt="Sem progressões: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/noprog_en.webp" width="300" alt="Sem progressões: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/noprog_rules.webp" width="300" alt="Sem progressões: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="semimagic"></a>
#### 120. Caixas semimágicas · Semi-magic boxes (`semimagic`)

**As linhas de cada caixa somam 15; as colunas também.**

Além das regras clássicas, cada linha e cada coluna de cada caixa somam 15. As caixas totalmente mágicas (com diagonais) são impossíveis, porque as três caixas de uma faixa teriam todas o centro 5 na mesma linha da grelha; por isso, as diagonais não são restringidas. Só 9×9 (em 4×4, as linhas e colunas exigiriam caixas com algarismos repetidos).

<table><tr><td align="center"><img src="../../screens/semimagic_a.webp" width="300" alt="Caixas semimágicas: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/semimagic_b.webp" width="300" alt="Caixas semimágicas: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 5, col. 5): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `semimagic-9-medium-3291682902` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_card.webp" width="200" alt="Caixas semimágicas: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_fiche.webp" width="260" alt="Caixas semimágicas: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_s9.webp" width="200" alt="Caixas semimágicas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_easy.webp" width="200" alt="Caixas semimágicas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_a.webp" width="200" alt="Caixas semimágicas: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_hard.webp" width="200" alt="Caixas semimágicas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_notes.webp" width="200" alt="Caixas semimágicas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_check.webp" width="200" alt="Caixas semimágicas: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_solved.webp" width="200" alt="Caixas semimágicas: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_dark.webp" width="200" alt="Caixas semimágicas: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_mobile.webp" width="150" alt="Caixas semimágicas: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/semimagic_en.webp" width="300" alt="Caixas semimágicas: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/semimagic_rules.webp" width="300" alt="Caixas semimágicas: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

