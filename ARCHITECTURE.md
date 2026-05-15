# Arquitetura do Projeto - Caminho do Fechamento

Este documento descreve a organização e as decisões de arquitetura tomadas para o projeto do curso.

## 🏛 Estrutura de Arquivos

A organização foi pensada para ser simples, eficiente e compatível com hospedagem estática na Vercel:

```text
treinamento-neurovendas/
│
├── index.html          # Hub central (Página Inicial)
├── introducao.html     # Página de Introdução
├── modulo1.html        # Módulo 1
├── modulo2.html        # Módulo 2
├── modulo3.html        # Módulo 3
├── modulo4.html        # Módulo 4
├── modulo5.html        # Módulo 5
├── roleplay.html       # Laboratório de Role Play
├── conclusao.html      # Página de Conclusão
│
├── style.css           # Design System (Glassmorphism, Dark Mode)
├── app.js              # Lógica de progresso (LocalStorage)
│
├── README.md           # Documentação geral
└── ARCHITECTURE.md     # Este documento
│
└── caminho_do_fechamento/  # Pasta de Recursos
    ├── introducao/     # PDFs, PPTs e MP4 da Introdução
    ├── modulo_1/       # Recursos do Módulo 1
    ├── modulo_2/       # Recursos do Módulo 2
    ├── modulo_3/       # Recursos do Módulo 3
    ├── modulo_4/       # Recursos do Módulo 4
    ├── modulo_5/       # Recursos do Módulo 5
    └── conclusao/      # Recursos da Conclusão
```

## 🎨 Decisões de Design

- **Dark Mode Padrão**: Para reduzir a fadiga ocular durante o estudo.
- **Glassmorphism**: Uso de fundos translúcidos com desfoque (`backdrop-filter`) para um visual premium e moderno.
- **Cores**: Base escura com acentos em Âmbar/Dourado (`#f59e0b`) para transmitir valor e sucesso.

## 🔄 Fluxo de Dados

- Atualmente, o projeto é 100% estático.
- O progresso do aluno (qual módulo já foi visto) está preparado para ser salvo no `localStorage` do navegador do usuário, sem necessidade de banco de dados no momento.

## 📦 Deploy

- O deploy é feito via Vercel CLI.
- Os arquivos são enviados como "Static Assets".
