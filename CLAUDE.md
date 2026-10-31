@AGENTS.md

# AX Serigrafia: site

Site da AX Serigrafia ("Sua ideia em estampa"), a serigrafia do pai do Alexandre.

## Partes do sistema
1. **Landing page** (`/`): one page inspirada no site da SAP (cabeçalho, carrossel, painel interativo, cards, rodapé, botão fixo "Fale Conosco").
2. **Simulador de pedido** (`/simular`): pedido de orçamento em etapas (peça e grade de tamanhos → arte por local de estampa → dados do cliente) com resumo lateral.
3. **Painel do admin** (`/admin`): área com login para o pai acompanhar pedidos, status, histórico e clientes.

## Especificação
A especificação completa fica no Obsidian do Alexandre:
`C:\Users\alexa\OneDrive\Documentos\Obsidian Vault\AxSiteDocumantation\Especificação do Site AX.md`
Leia antes de implementar regras de negócio. Itens com ❓ ainda não foram decididos: pergunte em vez de assumir.

## Stack
- Next.js (App Router, TypeScript, pasta `src/`)
- MUI (Material UI) com Emotion; tema em `src/theme.ts`
- Planejado: Supabase (banco, login, arquivos) e Vercel (hospedagem)

## Convenções
- Interface e textos do site em **português do Brasil**.
- Visual: paleta inspirada na SAP (decidido em 17/10/2026): azul `#0070F2` (`primary`), azul-marinho `#1D2D3E` (`secondary`), branco. Use as cores do tema, não valores soltos.
- Textos da landing ficam em `src/data/landing.ts`; os componentes só desenham esses dados.
- Documentação da landing page no Obsidian: `AxSiteDocumantation/Landing Page.md`.
- Estilize com componentes MUI e a prop `sx`; evite CSS solto.
- Pensar primeiro no celular (mobile first).
- Componentes da landing em `src/components/`.

## Sobre o Alexandre
É o primeiro projeto dele construindo com IA e ele quer aprender. Explique as decisões importantes de forma simples, trabalhe em etapas pequenas e testáveis, e sugira um commit ao fim de cada etapa que funcionar.
