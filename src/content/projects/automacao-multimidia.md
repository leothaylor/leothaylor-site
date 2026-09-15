---
title: Suíte local de automação multimídia
summary: "Conjunto de ferramentas locais para cortar vídeos, montar variações de Reel, preparar podcasts, extrair B-roll e reaproveitar gravações."
category: Sistema interno
status: Operado
year: "2026"
role: Arquitetura do workflow, automações, testes e integração de IA
proof: "Módulos usados na produção com FFmpeg, Python, PowerShell/BAT e pipelines de IA."
featured: false
order: 9
tags: [FFmpeg, Python, automação, vídeo, IA, workflow]
accent: "#55C6D9"
accent2: "#F2B84B"
surface: "#102128"
ink: "#F4FCFF"
metrics:
  - value: "3"
    label: variações de Reel
  - value: "FFMPEG"
    label: motor de render
  - value: "PY"
    label: análise e lógica
  - value: "BAT"
    label: uso por clique
---
## Objetivo

Eu gravo bastante material para conteúdo e aulas. A suíte surgiu para cortar o trabalho repetitivo entre a gravação e os arquivos prontos para revisar ou publicar.

## O que já existe

Os módulos cobrem extração de B-roll, montagem sincronizada com batida, talking-head, preparação de podcast, geração de três versões de Reel, edição de aulas de BJJ e seleção de frames para carrossel.

A interface de vários fluxos é um arquivo `.bat`, porque eu queria conseguir usar as automações por clique no Windows sem abrir terminal toda vez.

## Erros que entraram no sistema

Vídeos de iPhone com frame rate variável geraram travamentos até a renderização passar a usar `filter_complex_script`. Em outro módulo, uma música tinha quase 18 segundos sem batidas detectáveis e fazia um take ficar parado tempo demais. O preset ganhou uma regra de fallback para esses intervalos.

Cada correção fica incorporada ao fluxo seguinte em vez de virar uma solução manual isolada.
