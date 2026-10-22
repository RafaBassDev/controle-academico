# SPEC 01 — Visão Geral do Projeto

## 1. Identificação

**Nome:** Controle Acadêmico  
**Tipo:** Aplicação Web  
**Tecnologias:** React, TypeScript, Vite e CSS  
**Arquitetura:** Frontend, sem backend e sem banco de dados.

## 2. Objetivo

Desenvolver uma aplicação web de controle acadêmico que permita realizar o gerenciamento básico de alunos por meio de uma interface simples, intuitiva e organizada.

O sistema deverá permitir cadastrar, visualizar, buscar, editar e excluir alunos, além de apresentar indicadores sobre a quantidade total de estudantes e aqueles que estão ativos.

O projeto será desenvolvido com React e TypeScript, utilizando exclusivamente o estado da aplicação para armazenar as informações.

## 3. Público-alvo

O sistema será destinado a usuários responsáveis pelo gerenciamento acadêmico, como secretários, coordenadores e administradores de instituições de ensino.

## 4. Escopo do projeto

A aplicação deverá oferecer as seguintes funcionalidades:

- **RF01 — Cadastro de alunos:** permitir cadastrar alunos informando matrícula, nome, e-mail, curso, período e situação (ativo ou inativo).
- **RF02 — Listagem de alunos:** apresentar os estudantes cadastrados em uma tabela organizada.
- **RF03 — Busca de alunos:** permitir pesquisar alunos por nome ou matrícula.
- **RF04 — Edição de alunos:** permitir alterar os dados de estudantes já cadastrados.
- **RF05 — Exclusão de alunos:** permitir remover alunos da aplicação.
- **RF06 — Indicadores:** apresentar a quantidade total de alunos cadastrados e a quantidade de alunos ativos.

## 5. Requisitos não funcionais

- A interface deverá ser simples, organizada e de fácil utilização.
- A aplicação deverá funcionar em navegadores modernos.
- O layout deverá se adaptar a diferentes tamanhos de tela.
- As operações deverão atualizar a interface sem recarregar a página.
- O código deverá ser organizado e utilizar componentes funcionais do React.
- O projeto deverá utilizar TypeScript para definir os tipos dos dados.

## 6. Armazenamento de dados

O projeto não utilizará backend, banco de dados ou APIs externas.

As informações dos alunos deverão ser armazenadas temporariamente na memória da aplicação, utilizando o hook `useState` do React.

Ao atualizar ou fechar a página, os dados cadastrados durante a sessão poderão ser perdidos.

Não deverá ser implementada persistência em LocalStorage ou outras tecnologias de armazenamento.

A aplicação deverá iniciar com uma lista vazia de alunos.

## 7. Estrutura visual

O sistema deverá possuir uma única tela principal, contendo:

- Cabeçalho com o título "Controle Acadêmico".
- Indicadores com total de alunos e alunos ativos.
- Formulário para cadastrar e editar alunos.
- Campo de busca.
- Tabela com informações dos alunos.
- Botões individuais de edição e exclusão para cada aluno.

## 8. Limitações e funcionalidades fora do escopo

O sistema não deverá implementar:

- Login.
- Backend ou banco de dados.
- Controle de notas ou frequência.
- Gerenciamento de professores.
- Boletins ou relatórios.
- Persistência permanente dos dados.
- Integrações externas.

## 9. Critérios gerais de conclusão

O projeto será considerado concluído quando:

- Os seis requisitos funcionais estiverem funcionando corretamente.
- Cadastro, consulta, edição, exclusão, busca e indicadores tiverem sido validados.
- A aplicação executar com Vite e sem depender de backend.

## 10. Documentos complementares

Os requisitos detalhados, as definições de interface e as regras técnicas estão nos seguintes documentos:

- `specs/02-requisitos-funcionais.md`
- `specs/03-interface.md`
- `specs/04-regras-tecnicas.md`