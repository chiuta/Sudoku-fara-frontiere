# Catálogo: Pistas na margem (19)

[English](../en/06-indicii-pe-margine.md) · [Română](../06-indicii-pe-margine.md) · [Français](../fr/06-indicii-pe-margine.md) · [Italiano](../it/06-indicii-pe-margine.md) · [Español](../es/06-indicii-pe-margine.md) · **Português** · [Deutsch](../de/06-indicii-pe-margine.md) · [Magyar](../hu/06-indicii-pe-margine.md)

[← README](../../../README.pt.md) · [Todas as categorias](README.md)

[Tamanho e símbolos](01-marime-si-simboluri.md) · [Regiões e grupos](02-regiuni-si-grupuri.md) · [Vizinhos](03-vecini.md) · [Paridade, pontos, sinais](04-paritate-puncte-semne.md) · [Somas](05-sume.md) · **Pistas na margem** · [Linhas](07-linii.md) · [Grelhas compostas](08-grile-compuse.md) · [Parentes próximos](09-rude-apropiate.md) · [Topologias e saltos fairy](10-topologii-si-mutari-fairy.md) · [Regras globais](11-reguli-globale.md) · [Pistas nas células](12-indicii-in-celule.md) · [Dimensões superiores](13-dimensiuni-superioare.md)

---


_As pistas estão escritas fora da grelha, no fim da linha ou da coluna a que se referem._

<a id="sandwich"></a>
#### 41. Sanduíche · Sandwich (`sandwich`)

**A soma entre o 1 e o maior algarismo.**

O número na margem é a soma dos algarismos que se encontram entre o algarismo 1 e o algarismo N (9 em 9×9) da linha ou coluna respetiva.

<table><tr><td align="center"><img src="../../screens/sandwich_a.webp" width="300" alt="Sanduíche: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 16 pistas)</sub></td><td align="center"><img src="../../screens/sandwich_b.webp" width="300" alt="Sanduíche: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 3 (linha 1, col. 2): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `sandwich-9-medium-4184518699` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_card.webp" width="200" alt="Sanduíche: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_fiche.webp" width="260" alt="Sanduíche: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_s4.webp" width="200" alt="Sanduíche: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s6.webp" width="200" alt="Sanduíche: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_s9.webp" width="200" alt="Sanduíche: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_easy.webp" width="200" alt="Sanduíche: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_a.webp" width="200" alt="Sanduíche: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_hard.webp" width="200" alt="Sanduíche: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_notes.webp" width="200" alt="Sanduíche: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_check.webp" width="200" alt="Sanduíche: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_solved.webp" width="200" alt="Sanduíche: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_dark.webp" width="200" alt="Sanduíche: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_mobile.webp" width="150" alt="Sanduíche: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandwich_en.webp" width="300" alt="Sanduíche: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandwich_rules.webp" width="300" alt="Sanduíche: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="xsum"></a>
#### 42. Somas X · X-Sums (`xsum`)

**Primeiro algarismo = quantas células se somam.**

Se o primeiro algarismo de uma linha ou coluna é k, a soma dos primeiros k algarismos (a partir dessa extremidade) é o número da margem.

<table><tr><td align="center"><img src="../../screens/xsum_a.webp" width="300" alt="Somas X: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 16 pistas)</sub></td><td align="center"><img src="../../screens/xsum_b.webp" width="300" alt="Somas X: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 3 (linha 3, col. 1): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `xsum-9-medium-920107551` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 5 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_card.webp" width="200" alt="Somas X: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/xsum_fiche.webp" width="260" alt="Somas X: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_s6.webp" width="200" alt="Somas X: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/xsum_s9.webp" width="200" alt="Somas X: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_easy.webp" width="200" alt="Somas X: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/xsum_a.webp" width="200" alt="Somas X: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/xsum_hard.webp" width="200" alt="Somas X: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_notes.webp" width="200" alt="Somas X: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_check.webp" width="200" alt="Somas X: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_solved.webp" width="200" alt="Somas X: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_dark.webp" width="200" alt="Somas X: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/xsum_mobile.webp" width="150" alt="Somas X: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/xsum_en.webp" width="300" alt="Somas X: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/xsum_rules.webp" width="300" alt="Somas X: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="frame"></a>
#### 43. Moldura (primeiros três) · Frame (first three) (`frame`)

**A soma dos três primeiros algarismos.**

O número na margem é a soma dos três primeiros algarismos da linha ou coluna, a partir dessa extremidade.

<table><tr><td align="center"><img src="../../screens/frame_a.webp" width="300" alt="Moldura (primeiros três): puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 16 pistas)</sub></td><td align="center"><img src="../../screens/frame_b.webp" width="300" alt="Moldura (primeiros três): após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 7 (linha 1, col. 4): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `frame-9-medium-3867362192` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_card.webp" width="200" alt="Moldura (primeiros três): O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/frame_fiche.webp" width="260" alt="Moldura (primeiros três): A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_s6.webp" width="200" alt="Moldura (primeiros três): 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/frame_s9.webp" width="200" alt="Moldura (primeiros três): 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_easy.webp" width="200" alt="Moldura (primeiros três): Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/frame_a.webp" width="200" alt="Moldura (primeiros três): Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/frame_hard.webp" width="200" alt="Moldura (primeiros três): Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_notes.webp" width="200" alt="Moldura (primeiros três): Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/frame_check.webp" width="200" alt="Moldura (primeiros três): «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/frame_solved.webp" width="200" alt="Moldura (primeiros três): A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_dark.webp" width="200" alt="Moldura (primeiros três): Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/frame_mobile.webp" width="150" alt="Moldura (primeiros três): Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/frame_en.webp" width="300" alt="Moldura (primeiros três): Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/frame_rules.webp" width="300" alt="Moldura (primeiros três): As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="skyscraper"></a>
#### 44. Arranha-céus · Skyscrapers (`skyscraper`)

**Quantos edifícios se veem da margem.**

Os algarismos são alturas de edifícios. O número na margem indica quantos edifícios se veem a partir dessa extremidade (um edifício esconde os mais baixos que estão atrás dele).

<table><tr><td align="center"><img src="../../screens/skyscraper_a.webp" width="300" alt="Arranha-céus: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 16 pistas)</sub></td><td align="center"><img src="../../screens/skyscraper_b.webp" width="300" alt="Arranha-céus: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 9 (linha 3, col. 2): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `skyscraper-9-medium-1967302454` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 143 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_card.webp" width="200" alt="Arranha-céus: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_fiche.webp" width="260" alt="Arranha-céus: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_s4.webp" width="200" alt="Arranha-céus: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s6.webp" width="200" alt="Arranha-céus: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_s9.webp" width="200" alt="Arranha-céus: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_easy.webp" width="200" alt="Arranha-céus: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_a.webp" width="200" alt="Arranha-céus: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_hard.webp" width="200" alt="Arranha-céus: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_notes.webp" width="200" alt="Arranha-céus: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_check.webp" width="200" alt="Arranha-céus: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_solved.webp" width="200" alt="Arranha-céus: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_dark.webp" width="200" alt="Arranha-céus: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_mobile.webp" width="150" alt="Arranha-céus: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/skyscraper_en.webp" width="300" alt="Arranha-céus: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/skyscraper_rules.webp" width="300" alt="Arranha-céus: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="rossini"></a>
#### 45. Rossini · Rossini (`rossini`)

**Seta na margem: os três primeiros algarismos crescem num sentido.**

Uma seta fora da grelha indica que os três primeiros algarismos, a partir dessa extremidade, são estritamente monótonos: crescem no sentido para onde a seta aponta (para o interior da grelha) ou, se a seta aponta para a margem, crescem em direção à margem, isto é, decrescem para o interior. Convenção: a ponta da seta aponta para o maior algarismo. A ausência de seta não indica nada (não é a variante Rossini clássica, em que as extremidades sem seta excluem as sequências monótonas).

<table><tr><td align="center"><img src="../../screens/rossini_a.webp" width="300" alt="Rossini: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 19 pistas)</sub></td><td align="center"><img src="../../screens/rossini_b.webp" width="300" alt="Rossini: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 1, col. 7): é a única célula da coluna assinalada onde o 8 pode estar.
- **Código para o mesmo puzzle:** `rossini-9-medium-4071954052` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 2 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_card.webp" width="200" alt="Rossini: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/rossini_fiche.webp" width="260" alt="Rossini: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_s4.webp" width="200" alt="Rossini: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s6.webp" width="200" alt="Rossini: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/rossini_s9.webp" width="200" alt="Rossini: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_easy.webp" width="200" alt="Rossini: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/rossini_a.webp" width="200" alt="Rossini: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/rossini_hard.webp" width="200" alt="Rossini: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_notes.webp" width="200" alt="Rossini: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_check.webp" width="200" alt="Rossini: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_solved.webp" width="200" alt="Rossini: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_dark.webp" width="200" alt="Rossini: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/rossini_mobile.webp" width="150" alt="Rossini: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/rossini_en.webp" width="300" alt="Rossini: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/rossini_rules.webp" width="300" alt="Rossini: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="outside"></a>
#### 46. Exterior · Outside (`outside`)

**Os algarismos da margem aparecem entre os três primeiros.**

Os algarismos escritos fora da grelha devem aparecer entre as três primeiras células da linha ou coluna respetiva, a partir dessa extremidade, por qualquer ordem. Se forem três algarismos, são exatamente as três células.

<table><tr><td align="center"><img src="../../screens/outside_a.webp" width="300" alt="Exterior: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 23 pistas)</sub></td><td align="center"><img src="../../screens/outside_b.webp" width="300" alt="Exterior: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 5 (linha 2, col. 5): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `outside-9-medium-3531544633` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_card.webp" width="200" alt="Exterior: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/outside_fiche.webp" width="260" alt="Exterior: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_s4.webp" width="200" alt="Exterior: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/outside_s6.webp" width="200" alt="Exterior: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/outside_s9.webp" width="200" alt="Exterior: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_easy.webp" width="200" alt="Exterior: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/outside_a.webp" width="200" alt="Exterior: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/outside_hard.webp" width="200" alt="Exterior: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_notes.webp" width="200" alt="Exterior: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/outside_check.webp" width="200" alt="Exterior: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/outside_solved.webp" width="200" alt="Exterior: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_dark.webp" width="200" alt="Exterior: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/outside_mobile.webp" width="150" alt="Exterior: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/outside_en.webp" width="300" alt="Exterior: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/outside_rules.webp" width="300" alt="Exterior: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="radar"></a>
#### 47. Radar · Radar (`radar`)

**A pista diz onde está o maior.**

Além das regras clássicas, um número fora da grelha indica em que posição (contando a partir dessa extremidade) se encontra o maior algarismo (9 em 9×9) na linha ou coluna respetiva.

<table><tr><td align="center"><img src="../../screens/radar_a.webp" width="300" alt="Radar: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 21 pistas)</sub></td><td align="center"><img src="../../screens/radar_b.webp" width="300" alt="Radar: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 4 (linha 3, col. 6): é a única célula da linha assinalada onde o 4 pode estar.
- **Código para o mesmo puzzle:** `radar-9-medium-2588350498` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_card.webp" width="200" alt="Radar: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/radar_fiche.webp" width="260" alt="Radar: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_s4.webp" width="200" alt="Radar: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/radar_s6.webp" width="200" alt="Radar: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/radar_s9.webp" width="200" alt="Radar: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_easy.webp" width="200" alt="Radar: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/radar_a.webp" width="200" alt="Radar: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/radar_hard.webp" width="200" alt="Radar: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_notes.webp" width="200" alt="Radar: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/radar_check.webp" width="200" alt="Radar: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/radar_solved.webp" width="200" alt="Radar: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_dark.webp" width="200" alt="Radar: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/radar_mobile.webp" width="150" alt="Radar: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/radar_en.webp" width="300" alt="Radar: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/radar_rules.webp" width="300" alt="Radar: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="sandnum"></a>
#### 48. Sanduíche numérico · Counting sandwich (`sandnum`)

**Quantas células há entre o 1 e o N.**

Além das regras clássicas, um número fora da grelha indica quantas células se encontram entre o algarismo 1 e o algarismo N (9 em 9×9) na linha ou coluna respetiva.

<table><tr><td align="center"><img src="../../screens/sandnum_a.webp" width="300" alt="Sanduíche numérico: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 19 pistas)</sub></td><td align="center"><img src="../../screens/sandnum_b.webp" width="300" alt="Sanduíche numérico: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 6, col. 5): é a única célula da coluna assinalada onde o 8 pode estar.
- **Código para o mesmo puzzle:** `sandnum-9-medium-2830514440` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 1802 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_card.webp" width="200" alt="Sanduíche numérico: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_fiche.webp" width="260" alt="Sanduíche numérico: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_s4.webp" width="200" alt="Sanduíche numérico: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s6.webp" width="200" alt="Sanduíche numérico: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_s9.webp" width="200" alt="Sanduíche numérico: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_easy.webp" width="200" alt="Sanduíche numérico: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_a.webp" width="200" alt="Sanduíche numérico: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_hard.webp" width="200" alt="Sanduíche numérico: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_notes.webp" width="200" alt="Sanduíche numérico: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_check.webp" width="200" alt="Sanduíche numérico: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_solved.webp" width="200" alt="Sanduíche numérico: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_dark.webp" width="200" alt="Sanduíche numérico: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_mobile.webp" width="150" alt="Sanduíche numérico: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandnum_en.webp" width="300" alt="Sanduíche numérico: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandnum_rules.webp" width="300" alt="Sanduíche numérico: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="sandpar"></a>
#### 49. Sanduíche de paridade · Parity sandwich (`sandpar`)

**Quantos algarismos ímpares há entre o 1 e o N.**

Além das regras clássicas, um número fora da grelha indica quantos algarismos ímpares se encontram entre o 1 e o N na linha ou coluna respetiva.

<table><tr><td align="center"><img src="../../screens/sandpar_a.webp" width="300" alt="Sanduíche de paridade: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 19 pistas)</sub></td><td align="center"><img src="../../screens/sandpar_b.webp" width="300" alt="Sanduíche de paridade: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 2 (linha 5, col. 5): nenhuma dedução direta; o algarismo é tirado da solução única (seria necessária uma hipótese).
- **Código para o mesmo puzzle:** `sandpar-9-medium-3081747068` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 38 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_card.webp" width="200" alt="Sanduíche de paridade: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_fiche.webp" width="260" alt="Sanduíche de paridade: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_s6.webp" width="200" alt="Sanduíche de paridade: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_s9.webp" width="200" alt="Sanduíche de paridade: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_easy.webp" width="200" alt="Sanduíche de paridade: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_a.webp" width="200" alt="Sanduíche de paridade: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_hard.webp" width="200" alt="Sanduíche de paridade: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_notes.webp" width="200" alt="Sanduíche de paridade: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_check.webp" width="200" alt="Sanduíche de paridade: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_solved.webp" width="200" alt="Sanduíche de paridade: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_dark.webp" width="200" alt="Sanduíche de paridade: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_mobile.webp" width="150" alt="Sanduíche de paridade: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sandpar_en.webp" width="300" alt="Sanduíche de paridade: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sandpar_rules.webp" width="300" alt="Sanduíche de paridade: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="sand2"></a>
#### 50. Sanduíche duplo · Double sandwich (`sand2`)

**Duas somas: entre 1 e 9, entre 2 e 8.**

Além das regras clássicas, a pista «a,b» fora da grelha indica: a = a soma dos algarismos entre o 1 e o 9, b = a soma dos algarismos entre o 2 e o 8 na linha ou coluna respetiva. Só 9×9.

<table><tr><td align="center"><img src="../../screens/sand2_a.webp" width="300" alt="Sanduíche duplo: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 16 pistas)</sub></td><td align="center"><img src="../../screens/sand2_b.webp" width="300" alt="Sanduíche duplo: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 6, col. 9): nenhuma dedução direta; o algarismo é tirado da solução única (seria necessária uma hipótese).
- **Código para o mesmo puzzle:** `sand2-9-medium-1633059211` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 3778 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_card.webp" width="200" alt="Sanduíche duplo: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/sand2_fiche.webp" width="260" alt="Sanduíche duplo: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_s9.webp" width="200" alt="Sanduíche duplo: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_easy.webp" width="200" alt="Sanduíche duplo: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/sand2_a.webp" width="200" alt="Sanduíche duplo: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/sand2_hard.webp" width="200" alt="Sanduíche duplo: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_notes.webp" width="200" alt="Sanduíche duplo: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_check.webp" width="200" alt="Sanduíche duplo: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_solved.webp" width="200" alt="Sanduíche duplo: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_dark.webp" width="200" alt="Sanduíche duplo: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/sand2_mobile.webp" width="150" alt="Sanduíche duplo: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/sand2_en.webp" width="300" alt="Sanduíche duplo: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/sand2_rules.webp" width="300" alt="Sanduíche duplo: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="subsol"></a>
#### 51. Cave · Basement (`subsol`)

**Como os Arranha-céus, mas com os algarismos invertidos.**

Além das regras clássicas, um número fora da grelha indica quantas vezes, olhando a partir dessa extremidade, aparece um algarismo menor do que todos os que o precedem (o primeiro algarismo conta). É o oposto dos arranha-céus: aqui contamos os mínimos sucessivos. É o Arranha-céus com os algarismos invertidos (d passa a N+1−d), pelo que é logicamente isomorfo a este.

<table><tr><td align="center"><img src="../../screens/subsol_a.webp" width="300" alt="Cave: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 16 pistas)</sub></td><td align="center"><img src="../../screens/subsol_b.webp" width="300" alt="Cave: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 8 (linha 1, col. 4): nenhuma dedução direta; o algarismo é tirado da solução única (seria necessária uma hipótese).
- **Código para o mesmo puzzle:** `subsol-9-medium-2589656574` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 487 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_card.webp" width="200" alt="Cave: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/subsol_fiche.webp" width="260" alt="Cave: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_s4.webp" width="200" alt="Cave: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s6.webp" width="200" alt="Cave: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/subsol_s9.webp" width="200" alt="Cave: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_easy.webp" width="200" alt="Cave: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/subsol_a.webp" width="200" alt="Cave: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/subsol_hard.webp" width="200" alt="Cave: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_notes.webp" width="200" alt="Cave: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_check.webp" width="200" alt="Cave: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_solved.webp" width="200" alt="Cave: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_dark.webp" width="200" alt="Cave: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/subsol_mobile.webp" width="150" alt="Cave: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/subsol_en.webp" width="300" alt="Cave: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/subsol_rules.webp" width="300" alt="Cave: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="prodmargin"></a>
#### 52. Produto na margem · Edge product (`prodmargin`)

**O produto dos dois primeiros algarismos.**

Além das regras clássicas, um número fora da grelha é o produto dos dois primeiros algarismos da linha ou coluna respetiva, olhando a partir dessa extremidade.

<table><tr><td align="center"><img src="../../screens/prodmargin_a.webp" width="300" alt="Produto na margem: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/prodmargin_b.webp" width="300" alt="Produto na margem: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 1 (linha 3, col. 8): é a única célula da linha assinalada onde o 1 pode estar.
- **Código para o mesmo puzzle:** `prodmargin-9-medium-3463419111` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 618 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_card.webp" width="200" alt="Produto na margem: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_fiche.webp" width="260" alt="Produto na margem: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_s4.webp" width="200" alt="Produto na margem: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s6.webp" width="200" alt="Produto na margem: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_s9.webp" width="200" alt="Produto na margem: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_easy.webp" width="200" alt="Produto na margem: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_a.webp" width="200" alt="Produto na margem: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_hard.webp" width="200" alt="Produto na margem: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_notes.webp" width="200" alt="Produto na margem: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_check.webp" width="200" alt="Produto na margem: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_solved.webp" width="200" alt="Produto na margem: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_dark.webp" width="200" alt="Produto na margem: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_mobile.webp" width="150" alt="Produto na margem: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/prodmargin_en.webp" width="300" alt="Produto na margem: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/prodmargin_rules.webp" width="300" alt="Produto na margem: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="diffmargin"></a>
#### 53. Diferença na margem · Edge difference (`diffmargin`)

**A diferença dos dois primeiros algarismos.**

Além das regras clássicas, um número fora da grelha é a diferença (em valor absoluto) entre os dois primeiros algarismos da linha ou coluna respetiva, olhando a partir dessa extremidade.

<table><tr><td align="center"><img src="../../screens/diffmargin_a.webp" width="300" alt="Diferença na margem: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/diffmargin_b.webp" width="300" alt="Diferença na margem: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 2 (linha 6, col. 4): é a única célula da linha assinalada onde o 2 pode estar.
- **Código para o mesmo puzzle:** `diffmargin-9-medium-4161532716` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 313 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_card.webp" width="200" alt="Diferença na margem: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_fiche.webp" width="260" alt="Diferença na margem: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_s4.webp" width="200" alt="Diferença na margem: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s6.webp" width="200" alt="Diferença na margem: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_s9.webp" width="200" alt="Diferença na margem: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_easy.webp" width="200" alt="Diferença na margem: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_a.webp" width="200" alt="Diferença na margem: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_hard.webp" width="200" alt="Diferença na margem: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_notes.webp" width="200" alt="Diferença na margem: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_check.webp" width="200" alt="Diferença na margem: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_solved.webp" width="200" alt="Diferença na margem: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_dark.webp" width="200" alt="Diferença na margem: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_mobile.webp" width="150" alt="Diferença na margem: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/diffmargin_en.webp" width="300" alt="Diferença na margem: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/diffmargin_rules.webp" width="300" alt="Diferença na margem: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="ascents"></a>
#### 54. Subidas · Ascents (`ascents`)

**Quantos pares vizinhos sobem.**

Além das regras clássicas, um número fora da grelha indica quantas vezes, olhando a partir dessa extremidade, um algarismo é seguido imediatamente por um maior.

<table><tr><td align="center"><img src="../../screens/ascents_a.webp" width="300" alt="Subidas: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/ascents_b.webp" width="300" alt="Subidas: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 9 (linha 2, col. 3): é a única célula da coluna assinalada onde o 9 pode estar.
- **Código para o mesmo puzzle:** `ascents-9-medium-1827630994` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 361 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_card.webp" width="200" alt="Subidas: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/ascents_fiche.webp" width="260" alt="Subidas: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_s4.webp" width="200" alt="Subidas: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s6.webp" width="200" alt="Subidas: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/ascents_s9.webp" width="200" alt="Subidas: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_easy.webp" width="200" alt="Subidas: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/ascents_a.webp" width="200" alt="Subidas: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/ascents_hard.webp" width="200" alt="Subidas: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_notes.webp" width="200" alt="Subidas: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_check.webp" width="200" alt="Subidas: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_solved.webp" width="200" alt="Subidas: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_dark.webp" width="200" alt="Subidas: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/ascents_mobile.webp" width="150" alt="Subidas: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/ascents_en.webp" width="300" alt="Subidas: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/ascents_rules.webp" width="300" alt="Subidas: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="inversions"></a>
#### 55. Inversões · Inversions (`inversions`)

**Quantos pares estão em ordem inversa.**

Além das regras clássicas, um número fora da grelha é o número de inversões da linha/coluna vista a partir dessa extremidade: quantos pares de algarismos (não necessariamente vizinhos) têm o da frente maior do que o que vem depois.

<table><tr><td align="center"><img src="../../screens/inversions_a.webp" width="300" alt="Inversões: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/inversions_b.webp" width="300" alt="Inversões: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 7 (linha 7, col. 6): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `inversions-9-medium-2138830078` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 62 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_card.webp" width="200" alt="Inversões: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/inversions_fiche.webp" width="260" alt="Inversões: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_s4.webp" width="200" alt="Inversões: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s6.webp" width="200" alt="Inversões: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/inversions_s9.webp" width="200" alt="Inversões: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_easy.webp" width="200" alt="Inversões: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/inversions_a.webp" width="200" alt="Inversões: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/inversions_hard.webp" width="200" alt="Inversões: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_notes.webp" width="200" alt="Inversões: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_check.webp" width="200" alt="Inversões: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_solved.webp" width="200" alt="Inversões: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_dark.webp" width="200" alt="Inversões: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/inversions_mobile.webp" width="150" alt="Inversões: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/inversions_en.webp" width="300" alt="Inversões: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/inversions_rules.webp" width="300" alt="Inversões: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="cycles"></a>
#### 56. Ciclos · Cycles (`cycles`)

**Quantos ciclos tem a permutação.**

Além das regras clássicas, a linha/coluna lida a partir da extremidade é uma permutação (a posição i tem o algarismo a_i). A pista fora da grelha é o número de ciclos da permutação (a posição i remete para a posição a_i). Tamanhos 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/cycles_a.webp" width="300" alt="Ciclos: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/cycles_b.webp" width="300" alt="Ciclos: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 4 (linha 2, col. 6): é a única célula da região assinalada onde o 4 pode estar.
- **Código para o mesmo puzzle:** `cycles-9-medium-708965529` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 562 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_card.webp" width="200" alt="Ciclos: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/cycles_fiche.webp" width="260" alt="Ciclos: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_s6.webp" width="200" alt="Ciclos: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/cycles_s9.webp" width="200" alt="Ciclos: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_easy.webp" width="200" alt="Ciclos: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/cycles_a.webp" width="200" alt="Ciclos: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/cycles_hard.webp" width="200" alt="Ciclos: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_notes.webp" width="200" alt="Ciclos: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_check.webp" width="200" alt="Ciclos: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_solved.webp" width="200" alt="Ciclos: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_dark.webp" width="200" alt="Ciclos: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/cycles_mobile.webp" width="150" alt="Ciclos: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/cycles_en.webp" width="300" alt="Ciclos: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/cycles_rules.webp" width="300" alt="Ciclos: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="fixedpts"></a>
#### 57. Pontos fixos · Fixed points (`fixedpts`)

**Quantos algarismos estão na sua posição.**

Além das regras clássicas, um número fora da grelha indica quantos algarismos se encontram na posição igual ao seu valor (a segunda célula contém 2, etc.), contando a partir dessa extremidade. Tamanhos 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/fixedpts_a.webp" width="300" alt="Pontos fixos: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/fixedpts_b.webp" width="300" alt="Pontos fixos: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 3 (linha 1, col. 8): nenhuma dedução direta; o algarismo é tirado da solução única (seria necessária uma hipótese).
- **Código para o mesmo puzzle:** `fixedpts-9-medium-3926317386` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 4802 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_card.webp" width="200" alt="Pontos fixos: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_fiche.webp" width="260" alt="Pontos fixos: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_s6.webp" width="200" alt="Pontos fixos: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_s9.webp" width="200" alt="Pontos fixos: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_easy.webp" width="200" alt="Pontos fixos: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_a.webp" width="200" alt="Pontos fixos: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_hard.webp" width="200" alt="Pontos fixos: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_notes.webp" width="200" alt="Pontos fixos: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_check.webp" width="200" alt="Pontos fixos: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_solved.webp" width="200" alt="Pontos fixos: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_dark.webp" width="200" alt="Pontos fixos: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_mobile.webp" width="150" alt="Pontos fixos: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/fixedpts_en.webp" width="300" alt="Pontos fixos: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/fixedpts_rules.webp" width="300" alt="Pontos fixos: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="altsum"></a>
#### 58. Soma alternada · Alternating sum (`altsum`)

**a₁ − a₂ + a₃ − …**

Além das regras clássicas, um número fora da grelha é a soma alternada dos algarismos, olhando a partir dessa extremidade: o primeiro algarismo menos o segundo mais o terceiro e assim sucessivamente. Pode ser negativo. Tamanhos 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/altsum_a.webp" width="300" alt="Soma alternada: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/altsum_b.webp" width="300" alt="Soma alternada: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 3 (linha 9, col. 4): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `altsum-9-medium-1703080656` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 2188 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_card.webp" width="200" alt="Soma alternada: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/altsum_fiche.webp" width="260" alt="Soma alternada: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_s6.webp" width="200" alt="Soma alternada: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/altsum_s9.webp" width="200" alt="Soma alternada: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_easy.webp" width="200" alt="Soma alternada: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/altsum_a.webp" width="200" alt="Soma alternada: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/altsum_hard.webp" width="200" alt="Soma alternada: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_notes.webp" width="200" alt="Soma alternada: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_check.webp" width="200" alt="Soma alternada: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_solved.webp" width="200" alt="Soma alternada: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_dark.webp" width="200" alt="Soma alternada: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/altsum_mobile.webp" width="150" alt="Soma alternada: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/altsum_en.webp" width="300" alt="Soma alternada: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/altsum_rules.webp" width="300" alt="Soma alternada: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="dxsum"></a>
#### 59. Somas X diagonais · Diagonal X-sums (`dxsum`)

**Os primeiros d algarismos numa diagonal, d = o primeiro algarismo.**

Além das regras clássicas, uma pista na extremidade de uma diagonal (que parte da célula da margem) indica a soma das primeiras d células dessa diagonal, em que d é o primeiro algarismo que nela se encontra; se a diagonal tiver menos de d células, soma-se a diagonal inteira (como nas Somas X, mas em diagonais). Tamanhos 9×9 e 6×6.

<table><tr><td align="center"><img src="../../screens/dxsum_a.webp" width="300" alt="Somas X diagonais: puzzle inicial"><br><sub>Puzzle inicial (9×9 · médio · 18 pistas)</sub></td><td align="center"><img src="../../screens/dxsum_b.webp" width="300" alt="Somas X diagonais: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 1 (linha 8, col. 8): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `dxsum-9-medium-391021028` (cola-o em «Novo jogo → Código») · esforço do resolvedor: 256 ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_card.webp" width="200" alt="Somas X diagonais: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_fiche.webp" width="260" alt="Somas X diagonais: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_s6.webp" width="200" alt="Somas X diagonais: 6×6"><br><sub>6×6</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_s9.webp" width="200" alt="Somas X diagonais: 9×9"><br><sub>9×9</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_easy.webp" width="200" alt="Somas X diagonais: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_a.webp" width="200" alt="Somas X diagonais: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_hard.webp" width="200" alt="Somas X diagonais: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_notes.webp" width="200" alt="Somas X diagonais: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_check.webp" width="200" alt="Somas X diagonais: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_solved.webp" width="200" alt="Somas X diagonais: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_dark.webp" width="200" alt="Somas X diagonais: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_mobile.webp" width="150" alt="Somas X diagonais: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/dxsum_en.webp" width="300" alt="Somas X diagonais: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/dxsum_rules.webp" width="300" alt="Somas X diagonais: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

