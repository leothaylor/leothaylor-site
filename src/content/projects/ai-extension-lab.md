---
title: AI Extension Lab
summary: "Laboratório de agentes e extensões criados para repetir tarefas com o mesmo padrão sem reexplicar todas as regras a cada conversa. Reúne GPTs e outras arquiteturas com Instructions, Knowledge, testes, erros conhecidos e versões."
category: Laboratório
status: Em laboratório
year: "2026"
role: Desenho de sistema, instruções, base de conhecimento e validação
proof: "Casos já usados incluem Kimono Fusion, LT Storyboard e Jussan Storyboard. Cada agente é tratado como um sistema com escopo, regras, validações e limites próprios."
featured: false
order: 10
tags: [IA, agentes, prompt systems, validação, design]
accent: "#7EA6FF"
accent2: "#D8C36A"
surface: "#111827"
ink: "#F5F7FF"
metrics:
  - value: "6"
    label: camadas de registro do laboratório
  - value: "2"
    label: formatos validados no LT Storyboard
  - value: "V1"
    label: Kimono Fusion validado visualmente
  - value: "GPT"
    label: agentes especializados
---
## Para que existe

Algumas tarefas voltam muitas vezes e exigem as mesmas regras. Quando isso acontece, prefiro transformar a tarefa em uma extensão especializada em vez de reconstruir o contexto do zero em cada conversa.

O AI Extension Lab é o lugar onde organizo esses agentes. Ele serve para criar, versionar e testar Custom GPTs, Gems, Projects e arquiteturas equivalentes voltadas para tarefas delimitadas.

O objetivo principal é consistência. Uma extensão boa precisa receber uma entrada conhecida, aplicar regras estáveis e devolver um resultado previsível o bastante para entrar em um fluxo de trabalho real.

## Como o laboratório é organizado

Cada extensão pode ter um registro próprio com:

- objetivo e escopo;
- versão atual;
- Instructions;
- arquivos de Knowledge;
- testes e experimentos;
- erros e failure modes;
- padrões de sucesso;
- histórico de mudanças;
- próxima validação necessária.

Eu também separo os estados de maturidade. `Criado`, `testado`, `validado` e `generalizado` significam coisas diferentes. Um resultado visual bom em um teste comprova aquele teste, mas não garante que o agente já funcione bem em qualquer situação.

## Kimono Fusion Design Engine

O Kimono Fusion recebe uma arte de referência e tenta transformá-la em um kimono premium de jiu-jitsu.

A tarefa parece simples até o produto precisar aparecer em várias vistas. Frente, costas e detalhes precisam mostrar o mesmo kimono. Durante os primeiros testes, mudar a câmera podia alterar gola, patch, estampa, proporções ou posição dos elementos.

A arquitetura passou a separar:

- características que pertencem ao produto e precisam permanecer congeladas;
- regras de apresentação que podem variar com a câmera;
- vetos explícitos;
- referências visuais;
- conhecimento permanente sobre o produto.

A regra operacional central ficou: **a câmera muda; o produto permanece igual**.

O sistema já teve validação visual positiva em casos específicos. A generalização continua sendo tratada como uma etapa separada.

Quando eu adicionar a documentação visual completa ao site, este case vai mostrar a sequência inteira: arte de entrada, print do uso do agente e imagens finais do kimono em múltiplas vistas.

## LT Storyboard

O LT Storyboard foi criado para uma tarefa repetitiva da produção de conteúdo: pegar um roteiro já decidido e convertê-lo em material de pré-produção visual.

O fluxo é:

`estratégia e roteiro prontos → briefing textual → mapa de produção → storyboard visual`

Ele recebe informações como formato, objetivo, cenas, copy, função de cada parte, enquadramentos já definidos, CTA e identidade visual. A saída organiza o que precisa ser gravado e gera uma prancha que pode ser usada durante a produção.

A ferramenta já foi validada em dois formatos diferentes:

- carrossel com seis slides;
- Reel documental com seis cenas.

Nos dois testes, o agente preservou a estrutura, manteve a primeira pessoa, aplicou a identidade LT e evitou inventar CTA ou alterar a tese original.

O ganho prático aparece na hora da gravação. Em vez de reler um roteiro longo e interpretar tudo novamente, a prancha mostra a ordem, o enquadramento, a ação, o texto e os inserts necessários.

## Jussan Storyboard

Outra extensão foi criada para a operação de conteúdo do Jussan.

O objetivo é transformar conteúdos já estruturados em orientação visual suficiente para ele conseguir gravar e produzir sem depender de uma explicação nova a cada peça.

Um storyboard produzido para a rodada de conteúdo de 01/09 virou benchmark interno da extensão. A utilidade aqui está em padronizar decisões recorrentes de enquadramento, composição e sequência sem transformar a operação em edição pesada feita por mim.

Esse tipo de agente também ajuda a manter o limite do projeto: eu posso estruturar o sistema e o material de produção, enquanto a execução cotidiana continua com o próprio Jussan.

## O padrão de criação

Quando uma tarefa começa a se repetir, eu sigo uma lógica parecida:

1. identifico o que está sendo reexplicado toda vez;
2. separo regra fixa de contexto variável;
3. transformo as regras fixas em Instructions e Knowledge;
4. defino o formato de entrada e de saída;
5. testo com material real;
6. registro falhas e comportamentos bons;
7. ajusto o agente sem apagar o histórico do que já foi aprendido.

Isso cria uma memória operacional para aquela tarefa.

## Onde esse tipo de extensão faz mais sentido

Uso essa abordagem principalmente quando existe alguma combinação de:

- repetição;
- identidade visual que precisa ser preservada;
- estrutura de saída fixa;
- muitas regras pequenas fáceis de esquecer;
- necessidade de impedir improvisos indesejados;
- tarefa que pode ser delegada para a IA depois que o método foi definido.

O laboratório continua aberto porque novas extensões só fazem sentido quando uma atividade real começa a repetir o suficiente para justificar um sistema próprio.