# SPEC 02 — Requisitos Funcionais

## 1. Objetivo

Este documento define os requisitos funcionais do sistema Controle Acadêmico, detalhando as operações disponíveis, regras de validação, comportamentos esperados e critérios de aceitação.

A aplicação deverá executar todas as funcionalidades diretamente no frontend, utilizando React e TypeScript, sem backend ou banco de dados.

## 2. Estrutura dos dados do aluno

Cada aluno deverá possuir as seguintes informações:

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| Matrícula | Texto | Sim | Identificador acadêmico único |
| Nome | Texto | Sim | Nome completo do aluno |
| E-mail | Texto | Sim | Endereço eletrônico do aluno |
| Curso | Texto | Sim | Curso em que está matriculado |
| Período | Número inteiro | Sim | Período acadêmico, de 1 a 12 |
| Ativo | Booleano | Sim | Indica se o aluno está ativo ou inativo |

O campo `ativo` deverá assumir o valor `true` para alunos ativos e `false` para alunos inativos.

## 3. RF01 — Cadastrar aluno

**Descrição:** O sistema deverá permitir o cadastro de novos alunos através de um formulário.

### Comportamento esperado

1. O usuário preenche os campos matrícula, nome, e-mail, curso e período.
2. O usuário define a situação do aluno através de um checkbox "Aluno ativo".
3. O sistema deverá apresentar o checkbox marcado inicialmente.
4. O usuário clica no botão "Cadastrar".
5. O sistema valida as informações preenchidas.
6. Caso os dados sejam válidos, o aluno será incluído na lista.
7. A tabela e os indicadores deverão ser atualizados automaticamente.
8. O formulário deverá ser limpo após o cadastro bem-sucedido, retornando o checkbox ao estado ativo.

### Regras de validação

- Nenhum campo obrigatório poderá ficar vazio.
- Campos que contenham somente espaços deverão ser considerados vazios.
- A matrícula deverá ser única.
- Não será permitido cadastrar duas matrículas iguais.
- O e-mail deverá possuir um formato válido.
- O período deverá ser um número inteiro entre 1 e 12.
- Os espaços desnecessários no início e no fim dos campos textuais deverão ser removidos.

### Mensagens esperadas

- Sucesso: "Aluno cadastrado com sucesso!"
- Campos obrigatórios: "Preencha todos os campos obrigatórios."
- Matrícula duplicada: "Já existe um aluno com esta matrícula."
- E-mail inválido: "Informe um e-mail válido."
- Período inválido: "Informe um período entre 1 e 12."

### Critérios de aceitação

- Um aluno com dados válidos pode ser cadastrado.
- Um aluno com matrícula duplicada não pode ser cadastrado.
- Um formulário incompleto não pode ser enviado com sucesso.
- O novo aluno aparece imediatamente na tabela.
- O contador é atualizado após o cadastro.

---

## 4. RF02 — Listar alunos

**Descrição:** O sistema deverá apresentar todos os alunos cadastrados em uma tabela.

### Comportamento esperado

A tabela deverá conter as seguintes colunas:

1. Matrícula
2. Nome
3. E-mail
4. Curso
5. Período
6. Situação
7. Ações

A situação deverá ser apresentada visualmente como "Ativo" ou "Inativo".

Cada linha deverá possuir dois botões de ação: "Editar" e "Excluir".

### Regras de funcionamento

- A tabela deverá ser atualizada sempre que um aluno for cadastrado, editado ou excluído.
- Os dados deverão ser apresentados sem necessidade de atualizar a página.
- A aplicação deverá iniciar sem alunos cadastrados.
- Caso a lista esteja vazia, o sistema deverá apresentar a mensagem "Nenhum aluno cadastrado."
- Os alunos deverão aparecer na ordem em que foram cadastrados.

### Critérios de aceitação

- Todos os alunos cadastrados são exibidos corretamente.
- As informações correspondem aos dados registrados.
- A tabela é atualizada automaticamente após alterações.
- O sistema apresenta uma mensagem adequada quando não existem alunos.

---

## 5. RF03 — Buscar alunos

**Descrição:** O sistema deverá permitir a busca de alunos pelo nome ou matrícula.

### Comportamento esperado

1. O usuário digita uma informação no campo de busca.
2. O sistema filtra automaticamente os alunos exibidos.
3. A busca deverá ocorrer enquanto o usuário digita, sem necessidade de clicar em um botão.
4. Ao apagar o conteúdo da busca, todos os alunos deverão voltar a aparecer.

### Regras de funcionamento

- A busca poderá utilizar o nome completo, parte do nome, matrícula completa ou parte da matrícula.
- A busca por nome não deverá diferenciar letras maiúsculas e minúsculas.
- A busca não deverá modificar os dados armazenados.
- Caso nenhum aluno corresponda à pesquisa, deverá ser exibida a mensagem "Nenhum aluno encontrado."
- Os indicadores de total e alunos ativos deverão continuar representando todos os alunos cadastrados, independentemente do filtro aplicado.

### Critérios de aceitação

- A busca encontra alunos pelo nome.
- A busca encontra alunos pela matrícula.
- A busca funciona com informações parciais.
- Os resultados são atualizados automaticamente.
- Limpar o campo restaura a lista completa.

---

## 6. RF04 — Editar aluno

**Descrição:** O sistema deverá permitir a alteração das informações de alunos já cadastrados.

### Comportamento esperado

1. O usuário clica no botão "Editar" de um aluno.
2. O formulário deverá ser preenchido automaticamente com os dados do aluno selecionado.
3. O formulário deverá entrar em modo de edição.
4. O botão "Cadastrar" deverá ser substituído por "Salvar alterações".
5. O sistema deverá apresentar também um botão "Cancelar".
6. O usuário poderá modificar as informações desejadas.
7. Ao clicar em "Salvar alterações", o sistema validará os dados.
8. Caso estejam corretos, as informações serão atualizadas na tabela.
9. Após salvar, o formulário deverá retornar ao modo de cadastro.

### Regras de funcionamento

- Todos os campos poderão ser editados, inclusive matrícula e situação.
- A matrícula alterada não poderá coincidir com a de outro aluno.
- As regras de validação do RF01 também deverão ser aplicadas à edição.
- A edição deverá modificar o aluno existente, sem criar um novo registro.
- Clicar em "Cancelar" deverá descartar as alterações não salvas.
- Caso ocorra erro de validação, os dados não deverão ser modificados.

### Mensagem esperada

- Sucesso: "Aluno atualizado com sucesso!"

### Critérios de aceitação

- Os dados de um aluno existente podem ser atualizados com informações válidas.
- A atualização modifica o aluno selecionado sem criar um novo registro.
- Uma matrícula já utilizada por outro aluno não pode ser salva.
- Um erro de validação impede a alteração dos dados existentes.
- Cancelar a edição descarta as alterações e mantém os dados originais.

---

## 7. RF05 — Excluir aluno

**Descrição:** O sistema deverá permitir excluir um aluno cadastrado mediante confirmação do usuário.

### Comportamento esperado

1. O usuário clica no botão "Excluir" do aluno desejado.
2. O sistema solicita confirmação utilizando `window.confirm()`.
3. Se o usuário confirmar, somente o aluno selecionado será removido.
4. A tabela e os indicadores serão atualizados automaticamente.
5. Se o usuário cancelar a confirmação, os dados permanecerão inalterados.
6. Se o aluno excluído estiver em edição, o formulário deverá retornar ao modo de cadastro.
7. Após a exclusão, o sistema deverá apresentar a mensagem "Aluno excluído com sucesso!".

### Critérios de aceitação

- A exclusão confirmada remove somente o aluno selecionado.
- A tabela e os indicadores refletem a exclusão.
- Cancelar a confirmação mantém o aluno na lista.
- Excluir o aluno que está em edição encerra a edição e retorna o formulário ao modo de cadastro.

---

## 8. RF06 — Exibir indicadores

**Descrição:** O sistema deverá apresentar indicadores com a quantidade total de alunos e a quantidade de alunos ativos.

### Regras de funcionamento

- O total de alunos deverá corresponder à quantidade de alunos cadastrados.
- O total de alunos ativos deverá corresponder à quantidade de alunos cuja situação seja ativa.
- Os valores deverão ser calculados diretamente a partir da lista de alunos.
- Os indicadores deverão ser atualizados automaticamente após cadastro, edição ou exclusão.
- A busca não deverá alterar os valores dos indicadores.
- Ambos os indicadores deverão iniciar com o valor zero.

### Critérios de aceitação

- O total de alunos e o total de alunos ativos são apresentados corretamente.
- Os indicadores são atualizados após cadastro, edição e exclusão.
- Aplicar ou limpar uma busca não altera os indicadores.
- Sem alunos cadastrados, ambos os indicadores exibem zero.

---

## 9. Regras gerais

- **RG01 — Armazenamento temporário:** os dados deverão ser armazenados com `useState`, sem persistência em LocalStorage, SessionStorage ou outros meios permanentes.
- **RG02 — Atualização automática:** as alterações realizadas deverão atualizar a interface sem recarregar a página.
- **RG03 — Identificador interno:** cada aluno deverá possuir um identificador interno único, independente da matrícula.
- **RG04 — Mensagens:** mensagens de sucesso e erro deverão ser apresentadas na interface.
- **RG05 — Estado inicial:** a aplicação deverá iniciar com a lista vazia, o formulário em modo de cadastro, o checkbox de aluno ativo marcado e o campo de busca vazio.

---

## 10. Cenários de teste

### CT01 — Cadastro válido

Preencher todos os campos com dados válidos e cadastrar o aluno. Verificar a mensagem "Aluno cadastrado com sucesso!", a exibição do aluno na tabela e a atualização dos indicadores.

### CT02 — Matrícula duplicada

Tentar cadastrar outro aluno com uma matrícula já existente. Verificar que o cadastro é impedido e que a mensagem de matrícula duplicada é apresentada.

### CT03 — Nome obrigatório

Tentar cadastrar um aluno sem preencher o nome ou preenchendo-o somente com espaços. Verificar que o cadastro é impedido e que a mensagem de campos obrigatórios é apresentada.

### CT04 — E-mail inválido

Tentar cadastrar um aluno com e-mail em formato inválido. Verificar que o cadastro é impedido e que a mensagem de e-mail inválido é apresentada.

### CT05 — Período inválido

Tentar cadastrar um aluno com período não inteiro ou fora do intervalo de 1 a 12. Verificar que o cadastro é impedido e que a mensagem de período inválido é apresentada.

### CT06 — Busca por nome

Digitar o nome completo ou parte do nome de um aluno. Verificar que os resultados correspondentes são filtrados sem diferenciar letras maiúsculas e minúsculas.

### CT07 — Busca por matrícula

Digitar a matrícula completa ou parte dela. Verificar que o aluno correspondente é exibido.

### CT08 — Edição e atualização sem duplicação

Editar um aluno, alterar seus dados e salvar. Verificar a mensagem "Aluno atualizado com sucesso!", os novos dados na tabela e a permanência de apenas um registro para o aluno editado.

### CT09 — Cancelamento da edição

Iniciar a edição de um aluno, alterar dados e cancelar. Verificar que os dados originais permanecem inalterados e que o formulário retorna ao modo de cadastro.

### CT10 — Exclusão confirmada

Solicitar a exclusão de um aluno e confirmar em `window.confirm()`. Verificar que somente o aluno selecionado é removido, que a mensagem de sucesso é exibida e que a tabela e os indicadores são atualizados.

### CT11 — Exclusão cancelada

Solicitar a exclusão de um aluno e cancelar em `window.confirm()`. Verificar que o aluno e os indicadores permanecem inalterados.

### CT12 — Indicadores após alterações

Cadastrar, editar a situação de um aluno e excluir um aluno. Verificar que os totais de alunos e de alunos ativos refletem cada operação.

### CT13 — Indicadores independentes da busca

Aplicar uma busca que filtre parte dos alunos. Verificar que os indicadores continuam representando todos os alunos cadastrados.

### CT14 — Dados após recarregamento

Cadastrar um aluno e recarregar a página. Verificar que a aplicação retorna ao estado inicial sem o aluno, conforme a regra de armazenamento temporário.

### CT15 — Busca sem resultados

Digitar um termo que não corresponda a nenhum aluno. Verificar a mensagem "Nenhum aluno encontrado.".

### CT16 — Limpeza da busca

Digitar um termo de busca e depois apagar o conteúdo do campo. Verificar que todos os alunos voltam a ser exibidos.

---

## 11. Definição de conclusão

O sistema será considerado concluído quando todos os cenários de teste CT01 a CT16 tiverem sido verificados e as seis funcionalidades — cadastro, listagem, busca, edição, exclusão e indicadores — funcionarem de maneira integrada.