---
title: Da Teia V1 à V2: quando reescrever é melhor que continuar remendando
date: 2026-09-15
category: Produto
order: 3
summary: A primeira versão provou o comportamento. A segunda precisou abandonar parte da implementação para preservar melhor a ideia.
---
A primeira Teia de Ideias funcionava.

Isso não significava que deveria continuar crescendo sobre a mesma base.

Ela tinha canvas, nós, conexões, zoom, pan, exportação e persistência local. O problema apareceu quando o uso começou a pedir mais semântica, múltiplas teias, busca, nós dinâmicos, handles, direção nas relações e uma interface menos carregada.

## A pergunta mudou

Não era mais “como adiciono mais recursos à V1?”.

Virou: **qual parte da V1 é produto e qual parte é apenas implementação?**

O produto era a ideia de visualizar raciocínio e execução: ideias, ações, decisões, experimentos e resultados conectados.

O motor Canvas feito à mão não precisava ser preservado como dogma.

## Reescrever sem apagar o passado

A V1 foi congelada como histórico. A V2 nasceu em outro repositório usando React, TypeScript e React Flow.

Isso permitiu melhorar o modelo sem fingir que a primeira versão nunca existiu.

Também deixou um critério que quero reutilizar: quando a implementação começa a consumir energia para defender limitações que não fazem parte do valor central, **reescrever pode ser menos desperdício do que remendar**.

Mas só depois que a versão anterior já ensinou alguma coisa real.
