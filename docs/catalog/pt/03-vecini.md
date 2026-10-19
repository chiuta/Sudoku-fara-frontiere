# Catálogo: Vizinhos (4)

[English](../en/03-vecini.md) · [Română](../03-vecini.md) · [Français](../fr/03-vecini.md) · [Italiano](../it/03-vecini.md) · [Español](../es/03-vecini.md) · **Português** · [Deutsch](../de/03-vecini.md) · [Magyar](../hu/03-vecini.md)

[← README](../../../README.pt.md) · [Todas as categorias](README.md)

[Tamanho e símbolos](01-marime-si-simboluri.md) · [Regiões e grupos](02-regiuni-si-grupuri.md) · **Vizinhos** · [Paridade, pontos, sinais](04-paritate-puncte-semne.md) · [Somas](05-sume.md) · [Pistas na margem](06-indicii-pe-margine.md) · [Linhas](07-linii.md) · [Grelhas compostas](08-grile-compuse.md) · [Parentes próximos](09-rude-apropiate.md) · [Topologias e saltos fairy](10-topologii-si-mutari-fairy.md) · [Regras globais](11-reguli-globale.md) · [Pistas nas células](12-indicii-in-celule.md) · [Dimensões superiores](13-dimensiuni-superioare.md)

---


_A regra diz que células não podem ter o mesmo algarismo ou algarismos próximos; os conflitos veem-se a vermelho se «conflitos» estiver assinalado._

<a id="antiknight"></a>
#### 16. Anti-cavalo · Anti-knight (`antiknight`)

**Sem o mesmo algarismo a um salto de cavalo.**

Além das regras clássicas, duas células a um salto de cavalo de xadrez não podem conter o mesmo algarismo. Só 9×9.

<table><tr><td align="center"><img src="../../screens/antiknight_a.webp" width="300" alt="Anti-cavalo: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 24 pistas)</sub></td><td align="center"><img src="../../screens/antiknight_b.webp" width="300" alt="Anti-cavalo: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 6 (linha 4, col. 5): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `antiknight-9-medium-867238284` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_card.webp" width="200" alt="Anti-cavalo: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_fiche.webp" width="260" alt="Anti-cavalo: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_s9.webp" width="200" alt="Anti-cavalo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_easy.webp" width="200" alt="Anti-cavalo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_a.webp" width="200" alt="Anti-cavalo: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_hard.webp" width="200" alt="Anti-cavalo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_notes.webp" width="200" alt="Anti-cavalo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_check.webp" width="200" alt="Anti-cavalo: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_solved.webp" width="200" alt="Anti-cavalo: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_dark.webp" width="200" alt="Anti-cavalo: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_mobile.webp" width="150" alt="Anti-cavalo: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiknight_en.webp" width="300" alt="Anti-cavalo: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiknight_rules.webp" width="300" alt="Anti-cavalo: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="antiking"></a>
#### 17. Anti-rei · Anti-king (`antiking`)

**Os vizinhos diagonais são diferentes.**

Além das regras clássicas, duas células vizinhas na diagonal (movimento de rei) não podem conter o mesmo algarismo. Só 9×9.

<table><tr><td align="center"><img src="../../screens/antiking_a.webp" width="300" alt="Anti-rei: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 26 pistas)</sub></td><td align="center"><img src="../../screens/antiking_b.webp" width="300" alt="Anti-rei: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 2 (linha 1, col. 2): é a única célula da coluna assinalada onde o 2 pode estar.
- **Código para o mesmo puzzle:** `antiking-9-medium-1002649182` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_card.webp" width="200" alt="Anti-rei: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/antiking_fiche.webp" width="260" alt="Anti-rei: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_s9.webp" width="200" alt="Anti-rei: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_easy.webp" width="200" alt="Anti-rei: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/antiking_a.webp" width="200" alt="Anti-rei: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/antiking_hard.webp" width="200" alt="Anti-rei: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_notes.webp" width="200" alt="Anti-rei: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_check.webp" width="200" alt="Anti-rei: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_solved.webp" width="200" alt="Anti-rei: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_dark.webp" width="200" alt="Anti-rei: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/antiking_mobile.webp" width="150" alt="Anti-rei: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/antiking_en.webp" width="300" alt="Anti-rei: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/antiking_rules.webp" width="300" alt="Anti-rei: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="nonconsec"></a>
#### 18. Sem consecutivos · Non-consecutive (`nonconsec`)

**Os vizinhos não são consecutivos.**

Além das regras clássicas, células vizinhas na horizontal ou na vertical não podem conter algarismos consecutivos (por exemplo, 4 ao lado de 5). 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/nonconsec_a.webp" width="300" alt="Sem consecutivos: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 24 pistas)</sub></td><td align="center"><img src="../../screens/nonconsec_b.webp" width="300" alt="Sem consecutivos: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 6 (linha 3, col. 5): é a única célula da linha assinalada onde o 6 pode estar.
- **Código para o mesmo puzzle:** `nonconsec-9-medium-749961353` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_card.webp" width="200" alt="Sem consecutivos: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_fiche.webp" width="260" alt="Sem consecutivos: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_s6.webp" width="200" alt="Sem consecutivos: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_s9.webp" width="200" alt="Sem consecutivos: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_easy.webp" width="200" alt="Sem consecutivos: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_a.webp" width="200" alt="Sem consecutivos: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_hard.webp" width="200" alt="Sem consecutivos: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_notes.webp" width="200" alt="Sem consecutivos: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_check.webp" width="200" alt="Sem consecutivos: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_solved.webp" width="200" alt="Sem consecutivos: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_dark.webp" width="200" alt="Sem consecutivos: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_mobile.webp" width="150" alt="Sem consecutivos: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/nonconsec_en.webp" width="300" alt="Sem consecutivos: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/nonconsec_rules.webp" width="300" alt="Sem consecutivos: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="miracle"></a>
#### 19. Milagre · Miracle (`miracle`)

**Anti-cavalo + anti-rei + sem consecutivos.**

As três restrições anteriores, em simultâneo. A variante é extremamente restritiva: os puzzles têm muito poucas pistas dadas.

<table><tr><td align="center"><img src="../../screens/miracle_a.webp" width="300" alt="Milagre: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 3 pistas)</sub></td><td align="center"><img src="../../screens/miracle_b.webp" width="300" alt="Milagre: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 1 (linha 5, col. 4): nenhuma dedução direta; o algarismo é tirado da solução única (seria necessária uma hipótese).
- **Código para o mesmo puzzle:** `miracle-9-medium-1546367855` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 113 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_card.webp" width="200" alt="Milagre: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/miracle_fiche.webp" width="260" alt="Milagre: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_s9.webp" width="200" alt="Milagre: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_easy.webp" width="200" alt="Milagre: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/miracle_a.webp" width="200" alt="Milagre: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/miracle_hard.webp" width="200" alt="Milagre: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_notes.webp" width="200" alt="Milagre: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_check.webp" width="200" alt="Milagre: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_solved.webp" width="200" alt="Milagre: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_dark.webp" width="200" alt="Milagre: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/miracle_mobile.webp" width="150" alt="Milagre: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/miracle_en.webp" width="300" alt="Milagre: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/miracle_rules.webp" width="300" alt="Milagre: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

