---
title: Suíte local de automação multimídia
summary: "Suíte local no Windows que transforma gravações brutas em material pronto para uso: extrai B-roll e fotos, corta aulas, sincroniza cenas à música, prepara podcasts, trabalha áudio e gera três versões de Reel a partir dos mesmos takes."
category: Sistema interno
status: Operado
year: "2026"
role: Arquitetura do workflow, automações, testes e integração de IA
proof: "Uso prático por duplo clique: arquivo em ENTRADA, execução pelo INICIAR.bat e resultado em SAIDA. Já foi validada com vídeos reais de iPhone 4K, aulas de BJJ, B-roll e produção de Reels."
featured: false
order: 9
tags: [FFmpeg, Python, automação, vídeo, IA, workflow]
accent: "#55C6D9"
accent2: "#F2B84B"
surface: "#102128"
ink: "#F4FCFF"
metrics:
  - value: "3"
    label: versões de Reel por execução
  - value: "25"
    label: takes em teste real 4K
  - value: "20"
    label: fotos no mesmo teste
  - value: "4K"
    label: resolução preservada
---
## O que é

É uma coleção de automações locais que fui construindo para retirar etapas repetitivas da edição de vídeo e áudio. Em vez de abrir um editor e repetir manualmente o mesmo processo toda vez, cada necessidade recorrente pode virar um módulo próprio.

A suíte roda no meu PC com Python, FFmpeg, FFprobe, PowerShell e arquivos BAT. Muitos módulos têm uma estrutura simples de pastas: `ENTRADA` recebe os arquivos brutos, `INICIAR.bat` abre a automação e `SAIDA` recebe o resultado. Alguns também geram `RELATORIOS`, arquivos temporários e configurações específicas.

## Como eu uso na prática

O fluxo foi pensado para ser operacional, sem depender de terminal no uso cotidiano:

1. coloco o vídeo, áudio, música ou lista de links na pasta `ENTRADA`;
2. dou duplo clique em `INICIAR.bat`;
3. escolho o modo ou preset quando o módulo oferece opções;
4. a automação analisa e processa o material;
5. retiro o resultado da pasta `SAIDA` e faço apenas a revisão final.

Isso permite gravar uma vez e reaproveitar o mesmo material em formatos diferentes.

## O que a suíte já faz

### Extrair B-roll e fotos de vídeos longos

O Extrator de B-roll V2 analisa gravações longas, identifica regiões de atividade, separa takes candidatos e também procura bons frames para fotografia. No modo combinado, a análise pesada é feita uma vez e alimenta os dois produtos.

Em um teste real com quatro vídeos de iPhone em 4K, incluindo uma fonte de 116,5 segundos, a execução gerou **25 takes e 20 fotos**. Os arquivos finais mantiveram a resolução `2160 × 3840`, os takes preservaram o áudio e as fotos foram extraídas diretamente dos vídeos originais em resolução cheia.

### Gerar três edições do mesmo Reel

Outro módulo recebe B-rolls numerados e uma música e devolve três versões do mesmo Reel:

- Dinâmico;
- Equilibrado;
- Cinematográfico.

As três versões usam as mesmas fontes, na mesma ordem e com a mesma duração-alvo. O que muda é a distribuição do tempo entre os takes. Em uma validação real, sete B-rolls viraram três vídeos de 30 segundos sem repetir nenhuma fonte dentro da mesma versão.

### Cortar pausas de aulas de BJJ

O módulo Aula BJJ Dinâmica trabalha sobre aulas contínuas gravadas no iPhone. Ele procura trechos com silêncio e pouca atividade para retirar pausas mortas e entregar um vídeo mais direto para revisão ou publicação.

Esse módulo já foi testado em aulas reais. Ele também guarda presets agressivo, equilibrado e conservador para variar o quanto a automação pode cortar.

### Trabalhar com música e áudio

A suíte também possui módulos para:

- montar cenas sincronizadas à batida;
- cortar músicas em durações específicas;
- baixar áudio de links e playlists em MP3;
- preparar áudio e vídeo para outros fluxos;
- gerar contact sheets e materiais auxiliares para revisão.

### Preparar podcasts e conteúdo falado

Parte da suíte foi usada no piloto de podcast para organizar material bruto, gerar pacotes de análise, preparar cortes e reduzir o trabalho manual antes da decisão editorial.

Também existem módulos para talking head, split-screen, master de áudio e vídeo e outros fluxos que surgiram de necessidades reais da produção.

## Como as automações evoluem

Cada módulo nasceu de algum atrito repetido. Quando um problema aparece de novo, eu tento transformá-lo em regra de sistema.

Vídeos de iPhone com frame rate variável, por exemplo, produziram stuttering e frames congelados em um fluxo baseado em concatenação. A solução passou a usar `filter_complex_script`, `trim`, `atrim` e timestamps recalculados para fazer cortes frame-accurate.

Em outro teste, uma música tinha cerca de 17,8 segundos sem batidas detectadas. O algoritmo segurava um take por tempo demais. O módulo ganhou uma grade musical regularizada para preencher esses intervalos sem quebrar o ritmo da edição.

Também surgiram correções específicas para caminhos com acentos no Windows, uso do `cmd.exe`, preservação de áudio, seleção de frames, diversidade visual e proteção contra repetição de fontes.

## O papel da IA

A IA entra onde faz sentido analisar conteúdo, classificar material ou ajudar na decisão. O processamento de tempo, corte, concatenação, renderização e validação fica no código quando precisa ser determinístico.

Esse desenho permite combinar interpretação com execução reproduzível.

## Por que mantenho isso local

A suíte funciona como uma oficina pessoal de produção. Arquivos grandes permanecem no PC, o processamento pode ser repetido sem depender de uma plataforma externa e cada melhoria fica disponível para os próximos trabalhos.

O objetivo é reduzir tarefas mecânicas e deixar mais tempo para escolher o que vale publicar, ensinar ou desenvolver.