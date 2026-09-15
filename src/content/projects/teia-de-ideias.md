---
title: Teia de Ideias V2
summary: Ambiente visual para conectar ideias, ações, decisões, experimentos e resultados sem transformar tudo em uma ferramenta corporativa.
category: Produto próprio
status: Construído / validado
year: "2025–2026"
role: Conceito, produto, arquitetura e validação
proof: V2 publicada e validada após correções de interação e exportação em uso real.
featured: true
order: 2
liveUrl: https://leothaylor.github.io/9ideia-v2/
repoUrl: https://github.com/leothaylor/9ideia-v2
tags: [React, TypeScript, React Flow, localStorage, produto, visual thinking]
---
## De mapa mental para mapa de execução

A primeira versão era uma ferramenta simples para ligar nós em um canvas. O uso real mostrou outra coisa: eu estava usando aquilo para visualizar como uma ideia virava ação, decisão, correção e resultado.

A V2 nasceu dessa observação, não de uma lista abstrata de features.

## V2

A reconstrução trouxe múltiplas teias, nós semânticos, status, tags, descrição, links, conexões direcionais, busca, autosave, backup em JSON, minimapa e exportação PNG.

Em vez de continuar ampliando um motor Canvas manual, a V2 foi refeita com React, TypeScript e React Flow.

## Teste que mudou o produto

A primeira exportação PNG funcionava, mas uma segunda exportação depois de mover um nó podia falhar. O caso real revelou que a solução anterior não reproduzia o comportamento do usuário. A exportação passou a manter uma imagem preparada em memória e invalidá-la quando o grafo muda.

## O que esse case representa

Um ciclo completo de **uso → diagnóstico → reescrita → teste → bug real → correção**, mantendo a V1 preservada como histórico em vez de reescrevê-la retroativamente.
