# SPEC 04 — Regras Técnicas e Arquitetura

## 1. Objetivo

Este documento estabelece as tecnologias, a arquitetura, a organização dos arquivos e as diretrizes de implementação do sistema Controle Acadêmico.

O desenvolvimento deverá seguir as especificações definidas nos documentos:

- `01-visao-geral.md`
- `02-requisitos-funcionais.md`
- `03-interface.md`

O objetivo é construir uma aplicação simples, funcional e organizada, adequada a um exercício de desenvolvimento orientado por especificações (Spec-Driven Development).

## 2. Tecnologias obrigatórias

A aplicação deverá utilizar:

| Tecnologia | Finalidade |
|---|---|
| React | Construção da interface |
| TypeScript | Tipagem e organização do código |
| Vite | Ambiente de desenvolvimento |
| HTML5 | Estrutura semântica |
| CSS3 | Estilização e responsividade |

### Restrições tecnológicas

- Não utilizar backend.
- Não utilizar banco de dados.
- Não utilizar APIs externas.
- Não utilizar LocalStorage ou SessionStorage.
- Não utilizar Redux, Zustand ou outras bibliotecas de gerenciamento de estado.
- Não utilizar Tailwind CSS, Bootstrap ou bibliotecas de componentes.
- Não utilizar React Router, pois a aplicação terá uma única página.
- Não adicionar dependências desnecessárias.

## 3. Arquitetura da aplicação

A aplicação deverá seguir uma arquitetura baseada em componentes funcionais do React.

O componente principal será responsável por gerenciar o estado dos alunos e coordenar as operações de cadastro, listagem, busca, edição e exclusão.

Os componentes secundários serão responsáveis pela apresentação visual e interação com o usuário.

A implementação deverá priorizar simplicidade, legibilidade e separação de responsabilidades.

## 4. Estrutura de pastas

A estrutura sugerida para o projeto será:

```text
controle-academico/
├── specs/
│   ├── 01-visao-geral.md
│   ├── 02-requisitos-funcionais.md
│   ├── 03-interface.md
│   └── 04-regras-tecnicas.md
├── src/
│   ├── components/
│   │   ├── Indicadores.tsx
│   │   ├── FormularioAluno.tsx
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
└── vite.config.ts
```

Arquivos adicionais gerados automaticamente pelo Vite poderão ser mantidos quando necessários ao funcionamento do projeto.

## 5. Modelo de dados

Deverá ser definido um tipo TypeScript chamado `Aluno`, contendo:

| Propriedade | Tipo |
|---|---|
| id | string |
| matricula | string |
| nome | string |
| email | string |
| curso | string |
| periodo | number |
| ativo | boolean |

O campo `id` será um identificador interno único, independente da matrícula.

O identificador poderá ser gerado por meio de `crypto.randomUUID()`.

A matrícula será armazenada como texto para preservar eventuais zeros à esquerda.

## 6. Gerenciamento de estado

O gerenciamento de dados deverá utilizar exclusivamente o hook `useState` do React.

### Estados principais

**Alunos:** lista de alunos cadastrados.

**Busca:** texto digitado no campo de pesquisa.

**Aluno em edição:** identificador do aluno selecionado para edição ou `null` quando o formulário estiver no modo de cadastro.

**Formulário:** valores atuais dos campos preenchidos pelo usuário.

**Mensagem:** feedback de sucesso ou erro das operações.

### Regras de atualização

- Não modificar diretamente os arrays e objetos armazenados no estado.
- Utilizar atualizações imutáveis.
- A inclusão deverá gerar uma nova lista contendo o aluno cadastrado.
- A edição deverá substituir somente os dados do aluno selecionado.
- A exclusão deverá gerar uma lista sem o aluno removido.
- Os componentes deverão refletir automaticamente as alterações do estado.

## 7. Responsabilidades dos componentes

### App.tsx

Componente principal da aplicação.

Responsabilidades:

- Armazenar a lista de alunos.
- Gerenciar o estado da busca.
- Controlar a seleção do aluno em edição.
- Executar operações de cadastro, atualização e exclusão.
- Calcular os indicadores.
- Filtrar os alunos exibidos.
- Coordenar a comunicação entre os componentes.

### Indicadores.tsx

Responsável por apresentar:

- Total de alunos cadastrados.
- Total de alunos ativos.

Deverá receber os valores através de propriedades (props).

### FormularioAluno.tsx

Responsável por:

- Apresentar os campos do formulário.
- Controlar o preenchimento dos campos.
- Identificar os modos de cadastro e edição.
- Aplicar as validações necessárias antes de salvar.
- Enviar os dados válidos ao componente principal.
- Permitir o cancelamento da edição.

O período poderá ser tratado como texto durante o preenchimento e convertido em número somente após a validação.

### ListaAlunos.tsx

Responsável por:

- Apresentar o campo de busca.
- Renderizar a tabela.
- Exibir a situação dos alunos.
- Disponibilizar as ações Editar e Excluir.
- Apresentar mensagens para listas vazias e buscas sem resultados.

As operações de edição e exclusão deverão ser comunicadas ao componente principal através de funções recebidas por props.

## 8. Cadastro e edição

O mesmo formulário deverá ser utilizado para cadastrar e editar alunos.

### Cadastro

- O formulário inicia vazio.
- O checkbox de aluno ativo inicia marcado.
- Após validação, um novo aluno é adicionado ao estado.
- O formulário é limpo após sucesso.

### Edição

- O aluno selecionado preenche o formulário.
- O identificador interno permite localizar o registro original.
- A validação de matrícula duplicada deverá desconsiderar o próprio aluno em edição.
- Após salvar, o formulário retorna ao modo de cadastro.
- Cancelar a edição não deverá alterar os dados armazenados.

## 9. Busca de alunos

A pesquisa deverá utilizar operações nativas do JavaScript e TypeScript.

Regras:

- Filtrar os alunos pelo nome ou matrícula.
- Ignorar diferenças entre letras maiúsculas e minúsculas.
- Permitir correspondências parciais.
- Atualizar os resultados enquanto o usuário digita.
- Não modificar a lista original.
- Não alterar os indicadores.

## 10. Validação de dados

As validações deverão seguir a SPEC 02.

Deverão ser utilizadas verificações simples, sem bibliotecas externas.

As validações deverão impedir:

- Campos obrigatórios vazios.
- Matrículas duplicadas.
- E-mails com formato inválido.
- Períodos não inteiros ou fora do intervalo permitido.

O sistema deverá remover espaços desnecessários dos campos textuais antes do armazenamento.

As mensagens de erro deverão aparecer na interface.

## 11. Exclusão de alunos

A exclusão deverá utilizar a função nativa `window.confirm()` para solicitar confirmação ao usuário.

Quando confirmada, deverá remover exclusivamente o aluno selecionado.

Quando cancelada, a lista permanecerá inalterada.

Não será necessária a criação de um modal personalizado.

## 12. Cálculo dos indicadores

Os indicadores deverão ser calculados diretamente a partir da lista de alunos.

**Total de alunos:** quantidade de elementos na lista.

**Total de ativos:** quantidade de elementos cuja propriedade `ativo` seja verdadeira.

Os resultados serão derivados do estado existente, sem necessidade de manter estados independentes para os contadores.

## 13. Estilização

A estilização deverá utilizar CSS tradicional.

### Organização

- `index.css`: estilos globais, fonte, normalização e configurações básicas.
- `App.css`: estilos da interface, cartões, formulário, tabela, botões e responsividade.

### Diretrizes

- Utilizar classes CSS com nomes claros.
- Respeitar a paleta de cores da SPEC 03.
- Utilizar Flexbox e CSS Grid conforme necessário.
- Definir media queries para diferentes tamanhos de tela.
- Não inserir estilos inline desnecessariamente.
- Não utilizar bibliotecas externas para ícones ou estilos.

Os botões poderão utilizar textos como "Editar" e "Excluir", dispensando dependências de ícones.

## 14. Boas práticas de React e TypeScript

A implementação deverá:

1. Utilizar componentes funcionais.
2. Utilizar `useState` para os estados necessários.
3. Utilizar props tipadas para comunicação entre componentes.
4. Evitar o tipo `any`.
5. Utilizar nomes de variáveis e funções claros.
6. Evitar repetição desnecessária de código.
7. Utilizar identificadores estáveis como `key` nas listas.
8. Evitar manipulação direta do DOM.
9. Separar a lógica dos dados da apresentação sempre que possível.
10. Manter o código compreensível para estudantes iniciantes em React.

Não será necessário implementar padrões arquiteturais complexos.

## 15. Acessibilidade e experiência do usuário

- Todos os campos deverão possuir labels.
- Os botões deverão possuir nomes compreensíveis.
- As mensagens de erro deverão ser legíveis.
- As mensagens de sucesso deverão aparecer na interface.
- Elementos interativos deverão permitir navegação por teclado.
- A interface deverá funcionar em telas de computadores e smartphones.
- Ações importantes deverão possuir feedback visual.

## 16. Estratégia de implementação

A implementação deverá ocorrer por etapas.

### Fase 1 — Configuração

- Preparar o projeto React com TypeScript utilizando Vite.
- Preservar os documentos da pasta `specs`.
- Organizar a estrutura de diretórios.
- Remover conteúdos demonstrativos desnecessários do Vite.

### Fase 2 — Estrutura visual

- Criar cabeçalho.
- Criar cartões de indicadores.
- Criar formulário.
- Criar tabela.
- Aplicar os estilos iniciais.

### Fase 3 — Funcionalidades

- Implementar cadastro.
- Implementar listagem.
- Implementar busca.
- Implementar edição.
- Implementar exclusão.
- Implementar indicadores.

### Fase 4 — Validações

- Verificar campos obrigatórios.
- Verificar matrícula duplicada.
- Validar e-mail.
- Validar período.
- Apresentar mensagens de erro e sucesso.

### Fase 5 — Testes e ajustes

- Executar os cenários de teste da SPEC 02.
- Verificar funcionamento da interface.
- Testar a responsividade.
- Corrigir eventuais problemas.
- Confirmar que nenhuma funcionalidade depende de backend.

## 17. Diretrizes para utilização de IA

A inteligência artificial deverá auxiliar na implementação do projeto utilizando os quatro documentos de especificação como referência.

### Regras para a IA

- Ler e considerar todas as especificações antes de implementar.
- Não acrescentar funcionalidades fora do escopo.
- Não alterar os requisitos sem justificativa ou aprovação.
- Não utilizar tecnologias não previstas.
- Priorizar soluções simples e didáticas.
- Manter os componentes organizados.
- Informar quais arquivos deverão ser criados ou modificados.
- Explicar resumidamente as principais decisões técnicas.
- Verificar a compatibilidade das alterações com os requisitos definidos.
- Evitar reescrever arquivos não relacionados à tarefa solicitada.

A implementação deverá preservar o objetivo pedagógico do exercício.

## 18. Critérios técnicos de conclusão

O projeto estará tecnicamente concluído quando:

1. Executar corretamente com Vite.
2. Utilizar React e TypeScript.
3. Atender aos seis requisitos funcionais.
4. Não depender de backend ou banco de dados.
5. Manter os dados exclusivamente no estado do React.
6. Apresentar uma interface responsiva.
7. Possuir componentes organizados e tipados.
8. Não apresentar erros de TypeScript na verificação de produção.
9. Passar pelos testes funcionais definidos na SPEC 02.

## 19. Resultado esperado

Uma aplicação web de Controle Acadêmico funcional, com interface organizada, capaz de gerenciar alunos temporariamente em memória, desenvolvida em React com TypeScript e orientada integralmente pelas especificações documentadas.