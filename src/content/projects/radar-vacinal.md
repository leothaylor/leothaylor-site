---
title: Radar Vacinal ACS
summary: Uma ferramenta gratuita para organizar acompanhamento vacinal no trabalho do ACS, construída como PWA local-first.
category: Produto próprio
status: Construído / validado
year: "2026"
role: Produto, arquitetura, implementação e evolução
proof: PWA publicada, instalada e testada em Windows, iPhone e uso offline.
featured: true
order: 1
liveUrl: https://leothaylor.github.io/radar-vacinal-premium/
repoUrl: https://github.com/leothaylor/radar-vacinal-premium
tags: [PWA, local-first, saúde, produto, UX, GitHub Pages]
---
## O problema

O acompanhamento vacinal no território pode virar uma combinação de memória, listas fragmentadas e conferências repetidas. O Radar nasceu para reduzir esse atrito sem criar uma infraestrutura clínica pesada.

## O que foi construído

A versão atual funciona como **PWA instalável**, com uso offline, dados mantidos no próprio dispositivo, busca e filtros, Busca Ativa, registro de doses, backup e restauração, exportação em PDF/JPG e compartilhamento pelo mecanismo nativo do aparelho.

A base vacinal foi separada da interface e o motor de regras foi isolado para permitir revisão e testes. Migrações preservam histórico em vez de simplesmente apagar estados antigos quando não existe equivalência segura.

## Decisão importante

A hipótese de vender uma versão “Premium” foi abandonada. O custo de suporte, manutenção e responsabilidade não combinava com um produto barato. A ferramenta ampliada passou a ser gratuita e a funcionar como **utilidade + autoridade + aquisição indireta** dentro do ecossistema ROTINA ACS.

## O que esse case representa

Não é só uma landing page. É um exemplo de produto surgindo de um problema operacional real, passando por regras, privacidade, modelo de negócio, instalação, uso offline e teste em dispositivo real.
