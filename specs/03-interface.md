# SPEC 03 — Interface do Usuário

## 1. Objetivo

Este documento define a organização visual, os elementos da interface e as interações do sistema Controle Acadêmico.

A aplicação deverá possuir uma interface moderna, intuitiva e responsiva, inspirada na referência apresentada durante a mentoria.

O desenvolvimento visual deverá utilizar React, TypeScript e CSS tradicional, sem bibliotecas externas de componentes.

## 2. Identidade visual

O sistema deverá utilizar um estilo minimalista, com aparência de painel administrativo.

### Paleta de cores

- Cor primária: azul (`#2563EB`).
- Fundo principal: cinza muito claro (`#F8FAFC`).
- Fundo dos cartões: branco (`#FFFFFF`).
- Texto principal: cinza escuro (`#0F172A`).
- Texto secundário: cinza (`#64748B`).
- Bordas: cinza claro (`#E2E8F0`).
- Sucesso e situação ativa: verde (`#16A34A`).
- Erro, exclusão e situação inativa: vermelho (`#DC2626`).

### Tipografia

Utilizar fonte sem serifa, preferencialmente Arial ou fontes padrão do sistema.

Os títulos deverão apresentar peso maior que os textos comuns, garantindo hierarquia visual.

### Estilo geral

- Cartões com bordas suaves e cantos arredondados.
- Espaçamentos consistentes.
- Botões com estados visuais de hover e foco.
- Campos de formulário com bordas claramente identificáveis.
- Sombras discretas, sem excesso de elementos decorativos.
- Interface em português brasileiro.

## 3. Estrutura da página

A aplicação deverá possuir uma única página, dividida em três regiões principais.

### 3.1. Cabeçalho

Deverá apresentar:

- Título: "Controle Acadêmico".
- Subtítulo: "Sistema de gerenciamento de alunos".

O cabeçalho deverá ocupar a largura disponível e aparecer na parte superior da página.

### 3.2. Indicadores

Abaixo do cabeçalho deverão aparecer dois cartões:

**Cartão 1 — Total de alunos**

- Rótulo: "Total de alunos".
- Valor numérico correspondente ao total cadastrado.

**Cartão 2 — Alunos ativos**

- Rótulo: "Alunos ativos".
- Valor numérico correspondente aos alunos com situação ativa.

Ambos deverão exibir zero no estado inicial e ser atualizados automaticamente.

### 3.3. Área de gerenciamento

A região principal deverá possuir dois painéis:

**Painel esquerdo:** formulário de cadastro e edição.

**Painel direito:** campo de busca e tabela de alunos.

Em computadores, os painéis deverão aparecer lado a lado, sendo o painel da tabela mais largo que o formulário.

## 4. Formulário de alunos

O formulário deverá estar dentro de um cartão branco com o título "Novo aluno".

Os campos deverão aparecer na seguinte ordem:

1. Matrícula — campo de texto.
2. Nome completo — campo de texto.
3. E-mail — campo de e-mail.
4. Curso — campo de texto.
5. Período — campo numérico.
6. Aluno ativo — checkbox.

Todos os campos deverão possuir rótulos visíveis.

### Modo de cadastro

- Título do formulário: "Novo aluno".
- Botão principal: "Cadastrar".
- Checkbox "Aluno ativo" inicialmente marcado.
- Campos inicialmente vazios.

### Modo de edição

Ao selecionar um aluno na tabela:

- O título deverá mudar para "Editar aluno".
- Os campos deverão ser preenchidos com os dados do aluno.
- O botão principal deverá mudar para "Salvar alterações".
- Deverá aparecer um botão secundário "Cancelar".

O cancelamento deverá retornar o formulário ao modo de cadastro.

### Validações

Os erros deverão ser apresentados com mensagens legíveis, sem modificar os dados existentes.

O formulário deverá respeitar as validações definidas na SPEC 02.

## 5. Campo de busca

O campo de busca deverá aparecer acima da tabela, no painel direito.

Características:

- Placeholder: "Buscar por nome ou matrícula..."
- Ícone de lupa opcional.
- Atualização automática durante a digitação.
- Largura adaptável ao espaço disponível.

Quando o campo estiver vazio, todos os alunos deverão ser exibidos.

## 6. Tabela de alunos

A tabela deverá apresentar as seguintes colunas:

| Coluna | Conteúdo |
|---|---|
| Matrícula | Número ou código da matrícula |
| Nome | Nome completo |
| E-mail | Endereço eletrônico |
| Curso | Curso cadastrado |
| Período | Período acadêmico |
| Situação | Ativo ou Inativo |
| Ações | Editar e Excluir |

### Aparência

- Cabeçalho com fundo cinza muito claro.
- Linhas com separadores discretos.
- Informações organizadas e legíveis.
- Situação apresentada com identificação textual e visual.
- Alunos ativos identificados em verde.
- Alunos inativos identificados em vermelho.

### Botões de ação

**Editar:** botão com texto ou ícone de lápis, identificado claramente.

**Excluir:** botão com texto ou ícone de lixeira, identificado em vermelho.

As ações deverão atuar exclusivamente sobre o aluno selecionado.

## 7. Estados da interface

### 7.1. Lista vazia

Quando não houver alunos cadastrados, apresentar:

"Nenhum aluno cadastrado."

### 7.2. Busca sem resultados

Quando a pesquisa não encontrar correspondências, apresentar:

"Nenhum aluno encontrado."

### 7.3. Operações bem-sucedidas

Apresentar mensagens de sucesso na própria interface, conforme a SPEC 02.

### 7.4. Erros de validação

Apresentar mensagens de erro com identificação visual em vermelho e texto explicativo.

### 7.5. Confirmação de exclusão

Antes de excluir um aluno, apresentar uma confirmação.

Poderá ser utilizada a função nativa `window.confirm()` do navegador para manter a implementação simples.

## 8. Responsividade

O sistema deverá se adaptar a diferentes tamanhos de tela.

### Desktop — acima de 900px

- Formulário e tabela lado a lado.
- Indicadores organizados horizontalmente.
- Aproveitamento adequado da largura disponível.

### Tablet — entre 601px e 900px

- Formulário e tabela organizados verticalmente.
- Indicadores preferencialmente lado a lado.
- Espaçamentos adaptados à largura da tela.

### Smartphone — até 600px

- Cabeçalho com dimensões ajustadas.
- Indicadores empilhados ou adaptados à largura disponível.
- Formulário ocupando toda a largura.
- Lista de alunos abaixo do formulário.
- Tabela com rolagem horizontal quando necessário.
- Botões acessíveis ao toque.

A interface não deverá provocar rolagem horizontal desnecessária na página inteira.

## 9. Acessibilidade básica

- Todos os campos deverão possuir labels associados.
- Os botões deverão conter textos ou nomes acessíveis.
- Os elementos interativos deverão permitir navegação por teclado.
- O foco dos campos e botões deverá ser visualmente perceptível.
- As mensagens não deverão depender exclusivamente de cores.
- A tabela deverá utilizar estrutura semântica adequada.

## 10. Elementos não necessários

Não deverão ser implementados:

- Menu lateral de navegação.
- Tela de login.
- Sistema de múltiplas páginas.
- Gráficos ou dashboards avançados.
- Animações complexas.
- Bibliotecas externas de interface.
- Temas escuros ou alternância de temas.

## 11. Critérios de aceitação visual

A interface será considerada concluída quando:

1. O cabeçalho estiver visível e organizado.
2. Os dois indicadores forem apresentados corretamente.
3. O formulário possuir todos os campos obrigatórios.
4. A tabela apresentar as colunas definidas.
5. Os botões de cadastro, edição e exclusão estiverem claramente identificados.
6. Os estados de erro, sucesso e lista vazia forem apresentados corretamente.
7. O layout funcionar em desktop e dispositivos móveis.
8. O estilo visual permanecer consistente em todos os componentes.

## 12. Referências

A referência visual principal será a imagem apresentada pelo professor na mentoria.

Não é necessário reproduzir o modelo exatamente. A prioridade é atender aos requisitos funcionais e manter uma interface organizada, moderna e fácil de utilizar.