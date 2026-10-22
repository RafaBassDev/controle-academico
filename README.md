# Controle Acadêmico

## Apresentação

O **Controle Acadêmico** é uma aplicação web para gerenciamento básico de alunos. Seu objetivo é permitir cadastrar e consultar estudantes, pesquisar registros, editar informações, excluir alunos mediante confirmação e acompanhar indicadores de matrículas.

## Contexto acadêmico

O projeto foi desenvolvido durante uma mentoria de desenvolvimento orientado por especificações (*Spec-Driven Development* — SDD), com a inteligência artificial utilizada como apoio à análise, implementação e validação dos requisitos.

## Tecnologias

- React
- TypeScript
- Vite
- CSS tradicional

## Funcionalidades

- **RF01 — Cadastro de alunos:** cadastra matrícula, nome, e-mail, curso, período e situação, com validação dos campos, do e-mail, do período e de matrículas duplicadas.
- **RF02 — Listagem de alunos:** apresenta os alunos em tabela, na ordem de cadastro, incluindo seus dados e situação.
- **RF03 — Busca de alunos:** filtra os registros por nome ou matrícula, com correspondência parcial e sem diferenciar maiúsculas de minúsculas.
- **RF04 — Edição de alunos:** permite atualizar os dados de um aluno existente, validando os campos e evitando duplicação de registros.
- **RF05 — Exclusão de alunos:** remove o aluno selecionado somente após confirmação do usuário.
- **RF06 — Indicadores:** apresenta a quantidade total de alunos e a quantidade de alunos ativos, atualizadas conforme os registros.

## Estrutura do projeto

```text
controle-academico/
├── specs/
│   ├── 01-visao-geral.md
│   ├── 02-requisitos-funcionais.md
│   ├── 03-interface.md
│   └── 04-regras-tecnicas.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FormularioAluno.tsx
│   │   ├── Indicadores.tsx
│   │   └── ListaAlunos.tsx
│   ├── types/
│   │   └── Aluno.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── PROMPT.md
├── vite.config.ts
└── README.md
```

- **`App.tsx`:** mantém a lista e os estados da aplicação e coordena as operações entre os componentes.
- **`FormularioAluno.tsx`:** apresenta o formulário de cadastro e edição e valida os dados informados.
- **`ListaAlunos.tsx`:** oferece a busca, apresenta a tabela e encaminha as ações de edição e exclusão.
- **`Indicadores.tsx`:** exibe o total de alunos e o total de alunos ativos recebidos por propriedades.
- **`types/Aluno.ts`:** define a estrutura tipada dos dados de um aluno.
- **`assets/` e `public/`:** armazenam recursos estáticos utilizados pela aplicação.
- **`specs/01-visao-geral.md`:** descreve o propósito, o escopo e as limitações gerais do sistema.
- **`specs/02-requisitos-funcionais.md`:** detalha os requisitos RF01–RF06, as validações e os cenários CT01–CT16.
- **`specs/03-interface.md`:** especifica a interface, os elementos visuais, os estados e a responsividade.
- **`specs/04-regras-tecnicas.md`:** documenta as tecnologias, a arquitetura, a organização e as regras técnicas.
- **`PROMPT.md`:** registra as orientações do projeto para apoiar o desenvolvimento com IA, respeitando as especificações.

## Como executar

É necessário ter o Node.js e o npm instalados.

```bash
npm install
```

Instala as dependências declaradas pelo projeto.

```bash
npm run dev
```

Inicia o servidor de desenvolvimento Vite. Abra no navegador o endereço local informado no terminal.

```bash
npm run build
```

Executa a verificação TypeScript e gera a versão de produção na pasta `dist/`.

```bash
npm run lint
```

Executa o Oxlint para verificar problemas de lint no projeto.

## Armazenamento

O projeto não utiliza backend nem banco de dados. Os alunos são mantidos temporariamente no estado React (`useState`) e não são gravados em LocalStorage ou outro armazenamento permanente. Portanto, os registros são perdidos quando a página é atualizada ou encerrada.

## Cenários de teste (CT01–CT16)

Os cenários abaixo reproduzem as descrições da SPEC 02:

1. **CT01 — Cadastro válido:** Preencher todos os campos com dados válidos e cadastrar o aluno. Verificar a mensagem "Aluno cadastrado com sucesso!", a exibição do aluno na tabela e a atualização dos indicadores.
2. **CT02 — Matrícula duplicada:** Tentar cadastrar outro aluno com uma matrícula já existente. Verificar que o cadastro é impedido e que a mensagem de matrícula duplicada é apresentada.
3. **CT03 — Nome obrigatório:** Tentar cadastrar um aluno sem preencher o nome ou preenchendo-o somente com espaços. Verificar que o cadastro é impedido e que a mensagem de campos obrigatórios é apresentada.
4. **CT04 — E-mail inválido:** Tentar cadastrar um aluno com e-mail em formato inválido. Verificar que o cadastro é impedido e que a mensagem de e-mail inválido é apresentada.
5. **CT05 — Período inválido:** Tentar cadastrar um aluno com período não inteiro ou fora do intervalo de 1 a 12. Verificar que o cadastro é impedido e que a mensagem de período inválido é apresentada.
6. **CT06 — Busca por nome:** Digitar o nome completo ou parte do nome de um aluno. Verificar que os resultados correspondentes são filtrados sem diferenciar letras maiúsculas e minúsculas.
7. **CT07 — Busca por matrícula:** Digitar a matrícula completa ou parte dela. Verificar que o aluno correspondente é exibido.
8. **CT08 — Edição e atualização sem duplicação:** Editar um aluno, alterar seus dados e salvar. Verificar a mensagem "Aluno atualizado com sucesso!", os novos dados na tabela e a permanência de apenas um registro para o aluno editado.
9. **CT09 — Cancelamento da edição:** Iniciar a edição de um aluno, alterar dados e cancelar. Verificar que os dados originais permanecem inalterados e que o formulário retorna ao modo de cadastro.
10. **CT10 — Exclusão confirmada:** Solicitar a exclusão de um aluno e confirmar em `window.confirm()`. Verificar que somente o aluno selecionado é removido, que a mensagem de sucesso é exibida e que a tabela e os indicadores são atualizados.
11. **CT11 — Exclusão cancelada:** Solicitar a exclusão de um aluno e cancelar em `window.confirm()`. Verificar que o aluno e os indicadores permanecem inalterados.
12. **CT12 — Indicadores após alterações:** Cadastrar, editar a situação de um aluno e excluir um aluno. Verificar que os totais de alunos e de alunos ativos refletem cada operação.
13. **CT13 — Indicadores independentes da busca:** Aplicar uma busca que filtre parte dos alunos. Verificar que os indicadores continuam representando todos os alunos cadastrados.
14. **CT14 — Dados após recarregamento:** Cadastrar um aluno e recarregar a página. Verificar que a aplicação retorna ao estado inicial sem o aluno, conforme a regra de armazenamento temporário.
15. **CT15 — Busca sem resultados:** Digitar um termo que não corresponda a nenhum aluno. Verificar a mensagem "Nenhum aluno encontrado.".
16. **CT16 — Limpeza da busca:** Digitar um termo de busca e depois apagar o conteúdo do campo. Verificar que todos os alunos voltam a ser exibidos.

## Considerações finais

As quatro SPECS definem o escopo funcional, as regras de interface e as diretrizes técnicas do projeto. O `PROMPT.md` orienta o uso da IA com base nessas especificações. Essa abordagem ajuda a implementar os requisitos de forma rastreável e a verificar o comportamento esperado por meio dos cenários de teste.

## Autores

Projeto desenvolvido em dupla durante a mentoria de desenvolvimento orientado por especificações (Spec-Driven Development — SDD), com utilização de inteligência artificial como apoio ao desenvolvimento.

**Desenvolvedores:**

- Rafael Santos
- Mirna Penaforte

**Repositório:** Controle Acadêmico — GitHub.
