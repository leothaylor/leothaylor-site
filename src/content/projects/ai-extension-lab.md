---
title: AI Extension Lab
summary: "Laboratório de agentes e extensões criados para repetir tarefas com o mesmo padrão sem reexplicar todas as regras a cada conversa. Reúne GPTs e outras arquiteturas com Instructions, Knowledge, testes, erros conhecidos e versões."
category: Laboratório
status: Em laboratório
year: "2026"
role: Desenho de sistema, instruções, base de conhecimento e validação
proof: "O histórico reúne Kimono Fusion, LT Storyboard, Jussan Storyboard, Oficina de Inserts Visuais, LT Asset Forge e CinePrompter Projeto 60, com níveis diferentes de maturidade e validação."
featured: false
order: 10
tags: [IA, agentes, prompt systems, validação, design]
accent: "#7EA6FF"
accent2: "#D8C36A"
surface: "#111827"
ink: "#F5F7FF"
metrics:
  - value: "6"
    label: extensões documentadas
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

## Oficina de Inserts Visuais

A **Oficina de Inserts Visuais — Leo Thaylor** surgiu em junho de 2026 para transformar roteiros talkhead em um plano visual executável.

A extensão funciona como diretor visual operacional e arquiteto de prompts. Ela recebe o roteiro ou uma frase, identifica a função que o visual precisa cumprir e propõe os inserts prioritários para aquela peça.

O fluxo planejado e testado durante a construção foi:

`roteiro → mapa visual → imagem-mãe → Flow/Veo ou Omni → Canva → CapCut`

Cada ferramenta tinha uma função específica:

- Gemini Imagem para criar a imagem-mãe;
- Flow/Veo para transformar essa base em clipes curtos;
- Omni para trabalhar sobre vídeo real preservando rosto, câmera, gesto e timing;
- Canva para texto e composição;
- CapCut para ritmo, legenda, som e montagem final.

O talkhead continuava como eixo. Os inserts entravam para explicar uma ideia, provar algo, criar contraste, marcar uma frase, representar pensamento ou quebrar o ritmo visual.

O roteiro **NÃO VAI DAR TEMPO** foi usado como material de teste durante a criação. Um dos primeiros assets, chamado internamente de Tela Chumbo, foi descartado porque parecia background genérico e ainda saiu horizontal. Esse tipo de erro passou a orientar as regras seguintes de composição e formato.

A arquitetura chegou a prever até cinco inserts prioritários por roteiro e prompts específicos por ferramenta. O histórico recuperado não comprova um vídeo final passando por 100% do pipeline, então registro esta extensão como **protótipo avançado testado durante produção**, sem tratar a cadeia completa como validada.

## LT Asset Forge

O **LT Asset Forge** foi criado em julho de 2026 para produzir uma biblioteca visual reutilizável para motion graphics.

O problema era recorrente: cada Reel, vídeo em Remotion ou montagem no CapCut podia exigir ícones, objetos isolados, overlays, inserts e backgrounds que precisavam parecer parte do mesmo universo visual.

A extensão organiza esse trabalho em categorias e templates. Ela recebe o tipo de asset desejado e monta a direção visual, o prompt e as restrições para geração.

Uma parte importante do sistema foi separar **identidade** de **ação**. Em gerações com uma foto minha como referência, a foto serve para preservar quem aparece e o prompt define pose, gesto, cena e contexto. Regras anti-retrato foram adicionadas para evitar que o modelo voltasse sempre para a mesma pose de fotografia promocional.

Também passei a usar fundo verde-limão em assets isolados para facilitar remoção automática e reaproveitamento posterior em CapCut, Remotion e outras ferramentas.

O histórico registra testes no Google Flow com:

- mockups vivos;
- containers com pessoa;
- detalhes editoriais;
- mini-personagem isolado;
- objetos e elementos de comunicação para motion.

Um teste de braço ajustando faixa falhou porque o modelo entregou um casaco comum em vez de kimono. O erro entrou como referência para prompts mais específicos de roupa e contexto.

A linguagem visual segue o sistema LT: escuro, concreto, editorial e cinematográfico, evitando neon, roxo, estética de startup e aparência de coach.

As imagens originais desses testes não ficaram preservadas junto da documentação que recuperei agora. Por isso considero o Asset Forge **usado e parcialmente validado no histórico**, mas ainda quero anexar evidência visual ao case quando os arquivos forem localizados.

## CinePrompter | Projeto 60 (Sora 2)

O **CinePrompter | Projeto 60 (Sora 2)** é um caso histórico de 2025 e mostra uma abordagem mais estruturada do que simplesmente escrever um prompt de vídeo.

Ele foi desenhado para transformar uma ideia do Projeto 60 em prompts e storyboards curtos para Sora 2, mantendo cenário, objetos, continuidade, linguagem visual e pilares recorrentes da série.

A base de conhecimento incluía arquivos separados para:

- resumo do Projeto 60;
- cena-base da casa;
- regras de captação e edição;
- métricas e alertas;
- âncoras visuais e sonoras;
- continuidade entre clipes de até 15 segundos;
- treino;
- dieta;
- corrida;
- saúde mental;
- catálogo de hooks;
- registro de execuções.

A saída padrão combinava **PROMPT Sora 2 + CHECKLIST**. Quando necessário, acrescentava um storyboard.

O prompt seguia uma estrutura estável com câmera, sujeito, ação, ambiente, física, estilo, continuidade, áudio e duração. Narrativas maiores eram quebradas em três partes: hook/identidade, ação e resultado/loop.

Exemplos trabalhados no histórico usavam elementos concretos da rotina, como corrida, treino, cozinha, smartwatch, halteres e métricas na tela. A ideia era reduzir o atrito entre pensar a cena e conseguir uma instrução de geração suficientemente específica.

O sistema também registrava metas de retenção e conclusão para os vídeos. O histórico recuperado não contém logs suficientes para afirmar que essas metas foram atingidas em produção.

Mais tarde, falhas persistentes do Sora 2 fizeram o Projeto 60 migrar para um uso mais complementar de IA e para produção com vídeo real. Mesmo assim, o CinePrompter continua útil como registro de um princípio que permaneceu nas extensões posteriores: **separar conhecimento permanente, variáveis do episódio e contrato de saída**.

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