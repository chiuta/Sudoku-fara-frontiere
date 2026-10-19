# Catálogo: Parentes próximos (3)

[English](../en/09-rude-apropiate.md) · [Română](../09-rude-apropiate.md) · [Français](../fr/09-rude-apropiate.md) · [Italiano](../it/09-rude-apropiate.md) · [Español](../es/09-rude-apropiate.md) · **Português** · [Deutsch](../de/09-rude-apropiate.md) · [Magyar](../hu/09-rude-apropiate.md)

[← README](../../../README.pt.md) · [Todas as categorias](README.md)

[Tamanho e símbolos](01-marime-si-simboluri.md) · [Regiões e grupos](02-regiuni-si-grupuri.md) · [Vizinhos](03-vecini.md) · [Paridade, pontos, sinais](04-paritate-puncte-semne.md) · [Somas](05-sume.md) · [Pistas na margem](06-indicii-pe-margine.md) · [Linhas](07-linii.md) · [Grelhas compostas](08-grile-compuse.md) · **Parentes próximos** · [Topologias e saltos fairy](10-topologii-si-mutari-fairy.md) · [Regras globais](11-reguli-globale.md) · [Pistas nas células](12-indicii-in-celule.md) · [Dimensões superiores](13-dimensiuni-superioare.md)

---


_Parente próximo do Sudoku: lê a ficha para ver o que muda em relação ao jogo clássico._

<a id="futoshiki"></a>
#### 99. Futoshiki · Futoshiki (`futoshiki`)

**Quadrado latino com sinais de desigualdade.**

Cada linha e coluna contêm os algarismos 1–N uma vez; os sinais < e > entre as células têm de ser respeitados. Parente próximo do sudoku, sem caixas.

<table><tr><td align="center"><img src="../../screens/futoshiki_a.webp" width="300" alt="Futoshiki: puzzle inicial"><br><sub>Puzzle inicial (5×5 · médio · 5 pistas)</sub></td><td align="center"><img src="../../screens/futoshiki_b.webp" width="300" alt="Futoshiki: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 2 (linha 1, col. 2): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `futoshiki-5-medium-4235973107` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_card.webp" width="200" alt="Futoshiki: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_fiche.webp" width="260" alt="Futoshiki: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_s4.webp" width="200" alt="Futoshiki: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_s5.webp" width="200" alt="Futoshiki: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_s6.webp" width="200" alt="Futoshiki: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_s7.webp" width="200" alt="Futoshiki: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_easy.webp" width="200" alt="Futoshiki: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_a.webp" width="200" alt="Futoshiki: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_hard.webp" width="200" alt="Futoshiki: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_notes.webp" width="200" alt="Futoshiki: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_check.webp" width="200" alt="Futoshiki: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_solved.webp" width="200" alt="Futoshiki: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_dark.webp" width="200" alt="Futoshiki: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_mobile.webp" width="150" alt="Futoshiki: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/futoshiki_en.webp" width="300" alt="Futoshiki: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/futoshiki_rules.webp" width="300" alt="Futoshiki: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="kenken"></a>
#### 100. KenKen (Calcudoku) · KenKen (Calcudoku) (`kenken`)

**Quadrado latino com gaiolas aritméticas.**

Cada linha e coluna contêm os algarismos 1–N uma vez; cada gaiola tem um resultado e uma operação (+, −, ×, ÷). Os algarismos podem repetir-se numa gaiola se não estiverem na mesma linha ou coluna.

<table><tr><td align="center"><img src="../../screens/kenken_a.webp" width="300" alt="KenKen (Calcudoku): puzzle inicial"><br><sub>Puzzle inicial (5×5 · médio · 1 pistas)</sub></td><td align="center"><img src="../../screens/kenken_b.webp" width="300" alt="KenKen (Calcudoku): após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 4 (linha 1, col. 4): resulta das regras específicas da variante (pistas, somas, relações), combinadas com os restantes algarismos.
- **Código para o mesmo puzzle:** `kenken-5-medium-3034946116` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_card.webp" width="200" alt="KenKen (Calcudoku): O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/kenken_fiche.webp" width="260" alt="KenKen (Calcudoku): A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_s4.webp" width="200" alt="KenKen (Calcudoku): 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/kenken_s5.webp" width="200" alt="KenKen (Calcudoku): 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/kenken_s6.webp" width="200" alt="KenKen (Calcudoku): 6×6"><br><sub>6×6</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_easy.webp" width="200" alt="KenKen (Calcudoku): Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/kenken_a.webp" width="200" alt="KenKen (Calcudoku): Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/kenken_hard.webp" width="200" alt="KenKen (Calcudoku): Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_notes.webp" width="200" alt="KenKen (Calcudoku): Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_check.webp" width="200" alt="KenKen (Calcudoku): «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_solved.webp" width="200" alt="KenKen (Calcudoku): A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_dark.webp" width="200" alt="KenKen (Calcudoku): Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/kenken_mobile.webp" width="150" alt="KenKen (Calcudoku): Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/kenken_en.webp" width="300" alt="KenKen (Calcudoku): Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/kenken_rules.webp" width="300" alt="KenKen (Calcudoku): As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

<a id="strimko"></a>
#### 101. Strimko · Strimko (`strimko`)

**Cadeias em vez de caixas.**

Cada linha, coluna e cadeia (círculos unidos por linhas, também na diagonal) contém cada algarismo exatamente uma vez. Não há caixas. Tamanhos 4–7.

<table><tr><td align="center"><img src="../../screens/strimko_a.webp" width="300" alt="Strimko: puzzle inicial"><br><sub>Puzzle inicial (5×5 · médio · 5 pistas)</sub></td><td align="center"><img src="../../screens/strimko_b.webp" width="300" alt="Strimko: após 4 passos"><br><sub>Após 4 passos de «Passo a passo»</sub></td></tr></table>

- **Último passo explicado pela aplicação:** 2 (linha 2, col. 1): todos os outros algarismos já aparecem entre as células assinaladas (linha, coluna, região ou regra de vizinhança).
- **Código para o mesmo puzzle:** `strimko-5-medium-2938744326` (cola-o em «Novo jogo → Código») · esforço do resolvedor: sem ramificações

<details><summary><b>Galeria completa: todos os tipos de capturas</b></summary>

<p><b>Atlas</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_card.webp" width="200" alt="Strimko: O cartão no Atlas"><br><sub>O cartão no Atlas</sub></td><td align="center" valign="top"><img src="../../screens/strimko_fiche.webp" width="260" alt="Strimko: A ficha (abre-se ao clicar no cartão)"><br><sub>A ficha (abre-se ao clicar no cartão)</sub></td></tr>
</table>

<p><b>Tamanhos (nível médio)</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_s4.webp" width="200" alt="Strimko: 4×4"><br><sub>4×4</sub></td><td align="center" valign="top"><img src="../../screens/strimko_s5.webp" width="200" alt="Strimko: 5×5"><br><sub>5×5</sub></td><td align="center" valign="top"><img src="../../screens/strimko_s6.webp" width="200" alt="Strimko: 6×6"><br><sub>6×6</sub></td></tr>
<tr><td align="center" valign="top"><img src="../../screens/strimko_s7.webp" width="200" alt="Strimko: 7×7"><br><sub>7×7</sub></td></tr>
</table>

<p><b>Dificuldade</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_easy.webp" width="200" alt="Strimko: Fácil"><br><sub>Fácil</sub></td><td align="center" valign="top"><img src="../../screens/strimko_a.webp" width="200" alt="Strimko: Médio"><br><sub>Médio</sub></td><td align="center" valign="top"><img src="../../screens/strimko_hard.webp" width="200" alt="Strimko: Difícil"><br><sub>Difícil</sub></td></tr>
</table>

<p><b>Estados de jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_notes.webp" width="200" alt="Strimko: Notas automáticas (candidatos)"><br><sub>Notas automáticas (candidatos)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_check.webp" width="200" alt="Strimko: «Verificar» com um algarismo errado (vermelho)"><br><sub>«Verificar» com um algarismo errado (vermelho)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_solved.webp" width="200" alt="Strimko: A solução completa"><br><sub>A solução completa</sub></td></tr>
</table>

<p><b>Temas e dispositivos</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_dark.webp" width="200" alt="Strimko: Tema escuro"><br><sub>Tema escuro</sub></td><td align="center" valign="top"><img src="../../screens/strimko_mobile.webp" width="150" alt="Strimko: Telemóvel (390 px)"><br><sub>Telemóvel (390 px)</sub></td><td align="center" valign="top"><img src="../../screens/strimko_en.webp" width="300" alt="Strimko: Interface em inglês"><br><sub>Interface em inglês</sub></td></tr>
</table>

<p><b>O painel de regras no jogo</b></p>

<table>
<tr><td align="center" valign="top"><img src="../../screens/strimko_rules.webp" width="300" alt="Strimko: As regras apresentadas junto ao tabuleiro"><br><sub>As regras apresentadas junto ao tabuleiro</sub></td></tr>
</table>

</details>

