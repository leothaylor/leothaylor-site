---
title: AI Extension Lab
summary: "Laboratório de extensões GPT criadas para tarefas repetitivas e padronizadas. Cada agente resolve um tipo de trabalho específico: direção visual, identidade, storyboard, roteiro, produto, mapas ou produção de conteúdo."
category: Laboratório
status: Em laboratório
year: "2026"
role: Desenho de sistema, instruções, base de conhecimento e validação
proof: "A seleção pública reúne oito extensões com uso real, resultado visual forte ou utilidade operacional clara: Kimono Fusion, FaceLock, Visual DNA, Jussan Storyboard, Roteirista ROTINA ACS, Designer Editorial ACS Flat 2D, Virtual Outfit Identity Lock e Gerador de Mapas NotebookLM."
featured: false
order: 10
tags: [IA, agentes, prompt systems, validação, design]
accent: "#7EA6FF"
accent2: "#D8C36A"
surface: "#111827"
ink: "#F5F7FF"
metrics:
  - value: "8"
    label: extensões selecionadas
  - value: "2"
    label: usadas com frequência
  - value: "6"
    label: usadas ou validadas na prática
  - value: "GPT"
    label: agentes especializados
---
## Para que existe

Eu crio extensões quando uma tarefa começa a exigir as mesmas regras muitas vezes.

Em vez de reexplicar tudo em cada conversa, transformo a tarefa em um agente especializado. A extensão recebe uma entrada conhecida, aplica um conjunto de regras estáveis e devolve um resultado dentro de um formato esperado.

Na prática, isso serve para coisas como:

- transformar uma arte em um produto físico coerente;
- copiar a estrutura visual de uma referência sem copiar literalmente a peça;
- preservar um rosto enquanto a cena inteira muda;
- trocar roupa sem alterar pose, corpo ou identidade;
- converter briefing em storyboard;
- gerar dezenas de opções de roteiro a partir de um briefing editorial;
- criar prompts dentro de uma linguagem visual fixa;
- preparar estruturas hierárquicas para mapas no NotebookLM.

O inventário completo fica no meu sistema interno. Aqui estão somente as extensões que hoje representam melhor esse trabalho.

## Kimono Fusion Design Engine

O Kimono Fusion nasceu de uma ideia de produto que eu já carregava: criar kimonos artísticos de jiu-jitsu com aparência de peça realmente fabricável.

Eu envio uma arte de referência. Pode ser anime, filme, ilustração, fotografia, pintura ou outra linguagem visual. A extensão analisa essa arte e cria um MASTER PROMPT para transformar a referência em um kimono premium.

O ponto mais importante é a continuidade.

Não basta gerar um kimono bonito de frente e outro bonito de costas. Frente, costas, interior, macros e product board precisam parecer fotografias do mesmo produto.

Por isso o sistema separa o que pode mudar do que precisa ficar congelado.

**Permanece igual:**

- corte do kimono;
- cor-base;
- gola;
- patches;
- arte interna;
- emblemas;
- etiquetas;
- costura;
- faixa;
- linguagem do produto.

**Pode mudar:**

- câmera;
- enquadramento;
- distância;
- abertura da jaqueta;
- crop;
- composição da foto.

O resultado é uma série de imagens realistas do mesmo kimono em vários ângulos. Tenho exemplos visuais bons dessa sequência e eles são uma das melhores provas do que essa extensão faz.

**Uso atual:** ocasional, mas validado visualmente e com alto valor de portfólio.

<div class="kimono-showcase">
  <section class="kimono-model">
    <div class="kimono-model__head"><div><span>MODELO 01</span><strong>Kimono Fusion</strong></div><small>3 imagens do mesmo produto</small></div>
    <div class="kimono-model__grid">
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-01-01.png" alt="Kimono Fusion, modelo 01, imagem 01" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 01</span><strong>Aguardando arquivo</strong><code>kimono-01-01.png</code></div><figcaption>Modelo 01 · imagem 01</figcaption></figure>
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-01-02.png" alt="Kimono Fusion, modelo 01, imagem 02" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 02</span><strong>Aguardando arquivo</strong><code>kimono-01-02.png</code></div><figcaption>Modelo 01 · imagem 02</figcaption></figure>
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-01-03.png" alt="Kimono Fusion, modelo 01, imagem 03" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 03</span><strong>Aguardando arquivo</strong><code>kimono-01-03.png</code></div><figcaption>Modelo 01 · imagem 03</figcaption></figure>
    </div>
  </section>
  <section class="kimono-model">
    <div class="kimono-model__head"><div><span>MODELO 02</span><strong>Kimono Fusion</strong></div><small>3 imagens do mesmo produto</small></div>
    <div class="kimono-model__grid">
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-02-01.png" alt="Kimono Fusion, modelo 02, imagem 01" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 01</span><strong>Aguardando arquivo</strong><code>kimono-02-01.png</code></div><figcaption>Modelo 02 · imagem 01</figcaption></figure>
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-02-02.png" alt="Kimono Fusion, modelo 02, imagem 02" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 02</span><strong>Aguardando arquivo</strong><code>kimono-02-02.png</code></div><figcaption>Modelo 02 · imagem 02</figcaption></figure>
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-02-03.png" alt="Kimono Fusion, modelo 02, imagem 03" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 03</span><strong>Aguardando arquivo</strong><code>kimono-02-03.png</code></div><figcaption>Modelo 02 · imagem 03</figcaption></figure>
    </div>
  </section>
  <section class="kimono-model kimono-model--pending">
    <div class="kimono-model__head"><div><span>MODELO 03</span><strong>Espaço reservado</strong></div><small>próximo conjunto · 3 imagens</small></div>
    <div class="kimono-model__grid">
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-03-01.png" alt="Kimono Fusion, modelo 03, imagem 01" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 01</span><strong>Próximo upload</strong><code>kimono-03-01.png</code></div><figcaption>Modelo 03 · imagem 01</figcaption></figure>
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-03-02.png" alt="Kimono Fusion, modelo 03, imagem 02" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 02</span><strong>Próximo upload</strong><code>kimono-03-02.png</code></div><figcaption>Modelo 03 · imagem 02</figcaption></figure>
      <figure class="kimono-slot"><img class="kimono-slot__img" src="../../project-media/ai-extension-lab/kimono-fusion/kimono-03-03.png" alt="Kimono Fusion, modelo 03, imagem 03" loading="lazy"><div class="kimono-slot__placeholder"><span>IMAGEM 03</span><strong>Próximo upload</strong><code>kimono-03-03.png</code></div><figcaption>Modelo 03 · imagem 03</figcaption></figure>
    </div>
  </section>
</div>

## FaceLock Prompt Engine

O FaceLock resolve outro problema recorrente.

Eu encontro no Pinterest ou em campanhas uma foto com pose, luz, cenário ou direção de arte interessante. Envio essa referência para a extensão. Ela desmonta a estrutura da imagem e devolve um prompt preparado para reconstruir aquela cena com a minha própria foto.

O objetivo é preservar minha identidade facial enquanto muda o restante da cena.

O fluxo prático é:

`foto de referência → FaceLock → prompt estruturado → nova conversa com prompt + minha foto → cena reconstruída`

A extensão tenta preservar:

- rosto;
- cabelo;
- proporções;
- características pessoais;
- pose solicitada;
- direção de câmera;
- luz;
- ambiente;
- composição.

É especialmente útil quando quero uma fotografia editorial ou cinematográfica com uma direção visual específica, mas sem perder minha identidade no processo.

**Uso atual:** ocasional. Foi uma das extensões com maior volume de uso e continua útil quando quero produzir imagens pessoais com direção visual forte.

## Visual DNA Prompt Engine

O Visual DNA Prompt Engine trabalha com identidade visual de peças, não com identidade facial.

Eu posso pegar uma arte que gostei e usar como referência estrutural. A extensão analisa paleta, tipografia, hierarquia, composição, textura, distribuição de elementos e linguagem visual.

Depois eu entrego uma nova copy.

Exemplo:

- referência: uma peça editorial com estátua grega;
- slide 1: "Como criar uma extensão GPT";
- slide 2: "Como definir as regras";
- slide 3: "Como testar o resultado".

A extensão cria prompts para esses novos slides mantendo o universo visual da referência, sem simplesmente repetir a mesma composição.

Isso permite transformar uma única referência em uma pequena linguagem visual reutilizável.

Usei essa lógica também em trabalhos da Neural Concursos, onde uma arte aprovada passou a funcionar como fonte de DNA visual para peças seguintes.

**Uso atual:** ocasional. Continua sendo uma das ferramentas mais interessantes quando encontro uma referência visual forte e quero construir novas peças dentro daquela lógica.

## Jussan Storyboard

O Jussan Storyboard foi criado para transformar conteúdo escrito em uma orientação visual suficientemente clara para outra pessoa executar.

Eu já tinha o tema, a estrutura e o roteiro. A extensão organizava isso em uma prancha visual com ordem de gravação, enquadramentos, ações, texto e referência de cena.

O ganho apareceu rapidamente: Jussan conseguia olhar o storyboard e entender como gravar sem precisar receber outra explicação longa minha.

Um storyboard feito para a rodada de conteúdo de 01/09 virou benchmark interno. Jussan gostou do formato e eu também mostrei a ideia ao Digão, que reagiu bem.

A função da extensão pode ser resumida assim:

`conteúdo decidido → briefing → storyboard visual → gravação`

Esse tipo de ferramenta me interessa porque transforma conhecimento implícito de direção em um objeto que pode ser entregue para outra pessoa.

**Uso atual:** ocasional. Validado em uso com terceiro e com exemplos visuais que podem ser mostrados no case.

## Roteirista ROTINA ACS

Hoje é uma das extensões que mais uso.

O Roteirista ROTINA ACS recebe um briefing editorial que já foi organizado no Notion e devolve várias opções de roteiro.

Antes eu usava a ferramenta para conversar e chegar a um roteiro único. O fluxo evoluiu.

Hoje funciona melhor assim:

`briefing estruturado no Notion → lote de roteiros → peneira humana → seleção → produção`

A extensão não decide sozinha o que vai ser publicado. Ela amplia o espaço de opções.

Eu comparo os roteiros, descarto os fracos, combino partes quando necessário e escolho o que realmente vale produzir.

Isso é útil porque preserva a linguagem e os problemas reais do ACS sem depender de uma conversa longa toda vez que quero explorar novos ângulos.

**Uso atual:** frequente. É uma extensão operacional, não apenas um experimento.

## Designer Editorial ACS Premium Flat 2D

Também está entre as extensões que mais uso.

O ROTINA ACS possui formatos visuais próprios. Um deles é o Flat 2D, com personagem ACS, composição específica, copy integrada e regras visuais já definidas.

Quando tenho roteiro, copy e direção visual, envio esse material para a extensão. Ela devolve prompts prontos dentro desse formato.

Na prática:

`roteiro + copy + direção visual → extensão → prompt visual pronto → geração da arte`

Isso evita reescrever toda a especificação visual do canal a cada slide.

O valor está justamente na especialização. A extensão conhece as restrições daquele formato específico e trabalha dentro delas.

**Uso atual:** frequente. É uma das ferramentas mais maduras do laboratório porque participa diretamente da produção atual do ROTINA ACS.

## Virtual Outfit Identity Lock GPT

O Virtual Outfit faz uma edição controlada de roupa e acessórios.

Eu envio uma foto minha e uma referência de uma peça, por exemplo:

- camisa;
- tênis;
- relógio;
- casaco;
- acessório.

A extensão gera um prompt para aplicar aquela peça à minha foto preservando o restante.

A pessoa precisa continuar sendo a mesma. Pose, corpo, enquadramento, rosto e cenário não deveriam mudar só porque a roupa foi trocada.

O resultado ficou especialmente bom nos testes que fiz. Ele funciona quase como um provador virtual baseado em geração de imagem, mas com foco em preservar identidade e composição.

**Uso atual:** ocasional. Não é uma ferramenta que preciso toda semana, mas o resultado é forte e demonstra bem a lógica de identity lock.

## Gerador de Mapas NotebookLM | OS Leo

Essa extensão nasceu de um problema diferente: transformar informação complexa em uma estrutura que o NotebookLM consiga renderizar corretamente como mapa.

Eu usava em situações como planejamento de reunião, fluxograma, currículo ou estrutura de decisão.

O erro comum era mandar um texto grande e esperar que o NotebookLM descobrisse sozinho quais elementos eram pais, filhos e subníveis.

A extensão passou a fazer essa arquitetura antes.

O fluxo ficou:

`conversa ou conteúdo bruto → estrutura hierárquica serializada → NotebookLM → mapa/fluxograma`

Usei essa lógica, por exemplo, para organizar estruturas ligadas ao BJJ e à trajetória faixa branca → azul.

A extensão não tenta ser o mapa final. Ela prepara a informação para que a ferramenta de visualização receba uma árvore explícita e tenha menos espaço para interpretar a hierarquia de forma errada.

**Uso atual:** ocasional. Continua útil sempre que preciso transformar raciocínio complexo em uma representação visual organizada.

## O padrão por trás das oito extensões

Apesar de resolverem problemas diferentes, quase todas seguem a mesma arquitetura.

1. Identificar a tarefa que está se repetindo.
2. Separar regra fixa de contexto variável.
3. Definir o que pode mudar e o que precisa permanecer travado.
4. Criar um formato claro de entrada.
5. Criar um formato claro de saída.
6. Testar com material real.
7. Guardar erros, restrições e casos que funcionaram.
8. Ajustar a extensão sem perder o aprendizado anterior.

É por isso que uso extensões principalmente para tarefas padronizadas e repetitivas. Quando o trabalho depende de histórico longitudinal, memória pessoal ou contexto acumulado, prefiro outras estruturas, como projetos e bases no Notion.
