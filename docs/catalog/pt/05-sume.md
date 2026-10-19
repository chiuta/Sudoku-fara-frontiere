# Catálogo: Somas (3)

[English](../en/05-sume.md) · [Română](../05-sume.md) · [Français](../fr/05-sume.md) · [Italiano](../it/05-sume.md) · [Español](../es/05-sume.md) · **Português** · [Deutsch](../de/05-sume.md) · [Magyar](../hu/05-sume.md)

[← README](../../../README.pt.md) · [Todas as categorias](README.md)

[Tamanho e símbolos](01-marime-si-simboluri.md) · [Regiões e grupos](02-regiuni-si-grupuri.md) · [Vizinhos](03-vecini.md) · [Paridade, pontos, sinais](04-paritate-puncte-semne.md) · **Somas** · [Pistas na margem](06-indicii-pe-margine.md) · [Linhas](07-linii.md) · [Grelhas compostas](08-grile-compuse.md) · [Parentes próximos](09-rude-apropiate.md) · [Topologias e saltos fairy](10-topologii-si-mutari-fairy.md) · [Regras globais](11-reguli-globale.md) · [Pistas nas células](12-indicii-in-celule.md) · [Dimensões superiores](13-dimensiuni-superioare.md)

---


_Os números pequenos no canto de uma gaiola ou na margem são somas; os algarismos de uma gaiola não se repetem, a menos que a ficha diga o contrário._

<a id="killer"></a>
#### 38. Killer · Killer (`killer`)

**Gaiolas com soma, sem repetições.**

A grelha está dividida em gaiolas tracejadas; o número no canto é a soma dos algarismos da gaiola. Numa gaiola, um algarismo não se repete.

<table><tr><td align="center"><img src="../../screens/killer_a.webp" width="300" alt="Killer: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 8 pistas)</sub></td><td align="center"><img src="../../screens/killer_b.webp" width="300" alt="Killer: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 3 (linha 4, col. 4): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `killer-9-medium-4271579875` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 1 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/killer_card.webp" width="200" alt="Killer: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/killer_fiche.webp" width="260" alt="Killer: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/killer_s4.webp" width="200" alt="Killer: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/killer_s6.webp" width="200" alt="Killer: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/killer_s9.webp" width="200" alt="Killer: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/killer_easy.webp" width="200" alt="Killer: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/killer_a.webp" width="200" alt="Killer: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/killer_hard.webp" width="200" alt="Killer: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/killer_notes.webp" width="200" alt="Killer: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/killer_check.webp" width="200" alt="Killer: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/killer_solved.webp" width="200" alt="Killer: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/killer_dark.webp" width="200" alt="Killer: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/killer_mobile.webp" width="150" alt="Killer: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/killer_en.webp" width="300" alt="Killer: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/killer_rules.webp" width="300" alt="Killer: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="littlekiller"></a>
#### 39. Little Killer · Little Killer (`littlekiller`)

**A soma da diagonal, a partir da margem.**

Um número com uma seta fora da grelha é a soma dos algarismos da diagonal para a qual a seta aponta; os algarismos podem repetir-se na diagonal.

<table><tr><td align="center"><img src="../../screens/littlekiller_a.webp" width="300" alt="Little Killer: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 21 pistas)</sub></td><td align="center"><img src="../../screens/littlekiller_b.webp" width="300" alt="Little Killer: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 9 (linha 3, col. 6): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `littlekiller-9-easy-459682937` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 31 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/littlekiller_card.webp" width="200" alt="Little Killer: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_fiche.webp" width="260" alt="Little Killer: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/littlekiller_s6.webp" width="200" alt="Little Killer: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_s9.webp" width="200" alt="Little Killer: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/littlekiller_easy.webp" width="200" alt="Little Killer: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_a.webp" width="200" alt="Little Killer: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_hard.webp" width="200" alt="Little Killer: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/littlekiller_notes.webp" width="200" alt="Little Killer: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_check.webp" width="200" alt="Little Killer: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_solved.webp" width="200" alt="Little Killer: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/littlekiller_dark.webp" width="200" alt="Little Killer: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_mobile.webp" width="150" alt="Little Killer: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/littlekiller_en.webp" width="300" alt="Little Killer: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/littlekiller_rules.webp" width="300" alt="Little Killer: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="luk"></a>
#### 40. Little Killer único · Little Unique Killer (`luk`)

**Little Killer com algarismos distintos na diagonal.**

O número junto a uma seta oblíqua é a soma dos algarismos da diagonal para a qual aponta, e em cada uma dessas diagonais os algarismos são todos diferentes (é aqui que difere do Little Killer clássico). O nome «Little Unique Killer» é usado por esta aplicação; não o encontrei como variante publicada com este nome.

<table><tr><td align="center"><img src="../../screens/luk_a.webp" width="300" alt="Little Killer único: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 16 pistas)</sub></td><td align="center"><img src="../../screens/luk_b.webp" width="300" alt="Little Killer único: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 3, col. 4): nenhuma dedução direta; o algarismo é tirado da solução única (seria necessária uma hipótese).
- **Código para o mesmo puzzle:** `luk-9-medium-1817969793` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 6 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/luk_card.webp" width="200" alt="Little Killer único: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/luk_fiche.webp" width="260" alt="Little Killer único: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/luk_s6.webp" width="200" alt="Little Killer único: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/luk_s9.webp" width="200" alt="Little Killer único: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/luk_easy.webp" width="200" alt="Little Killer único: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/luk_a.webp" width="200" alt="Little Killer único: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/luk_hard.webp" width="200" alt="Little Killer único: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/luk_notes.webp" width="200" alt="Little Killer único: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/luk_check.webp" width="200" alt="Little Killer único: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/luk_solved.webp" width="200" alt="Little Killer único: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/luk_dark.webp" width="200" alt="Little Killer único: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/luk_mobile.webp" width="150" alt="Little Killer único: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/luk_en.webp" width="300" alt="Little Killer único: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/luk_rules.webp" width="300" alt="Little Killer único: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

