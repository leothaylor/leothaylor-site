---
title: AI Extension Lab
summary: "Experimentos com agentes de IA para tarefas visuais e operacionais que exigem regras consistentes entre uma execução e outra."
category: Laboratório
status: Em laboratório
year: "2026"
role: Desenho de sistema, instruções, base de conhecimento e validação
proof: "Agentes funcionais em tarefas delimitadas, com resultados visuais validados caso a caso."
featured: false
order: 10
tags: [IA, agentes, prompt systems, validação, design]
accent: "#7EA6FF"
accent2: "#D8C36A"
surface: "#111827"
ink: "#F5F7FF"
---
## Kimono Fusion

Um dos agentes recebe uma arte de referência e a transforma em um kimono de jiu-jitsu com frente, costas e detalhes do mesmo produto.

O problema mais difícil apareceu quando a câmera mudava. Uma geração podia alterar gola, patch, estampa ou proporções e acabar mostrando outro kimono.

A regra central ficou simples: **a câmera muda; o produto permanece igual**.

## Estrutura do agente

Eu separei invariantes do produto, regras de apresentação, lista de vetos e material de conhecimento. Essa divisão ajuda a impedir que o agente altere uma característica que deveria ficar congelada entre as imagens.

## Estado atual

O sistema já produz resultados bons em tarefas específicas. A generalização ainda está em teste. Os próximos registros visuais deste case serão prints de uso do agente junto das imagens finais, para mostrar entrada, instrução e resultado na mesma sequência.
