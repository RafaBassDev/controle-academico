# PROMPT MESTRE — Controle Acadêmico

## 1. Papel da Inteligência Artificial

Você atuará como um desenvolvedor frontend especializado em React, TypeScript e desenvolvimento orientado por especificações (Spec-Driven Development — SDD).

Sua missão é desenvolver uma aplicação web chamada **Controle Acadêmico**, seguindo rigorosamente os documentos de especificação existentes neste repositório.

O projeto faz parte de uma mentoria de introdução ao desenvolvimento com React e utilização de IA. Portanto, o código deverá ser funcional, organizado, simples e compreensível para um estudante iniciante.

Não implemente funcionalidades que não estejam previstas nas especificações.

## 2. Documentos obrigatórios

Antes de escrever qualquer código, leia integralmente os seguintes arquivos:

1. `specs/01-visao-geral.md`
2. `specs/02-requisitos-funcionais.md`
3. `specs/03-interface.md`
4. `specs/04-regras-tecnicas.md`

Esses documentos constituem a fonte principal de requisitos do projeto.

Não modifique os arquivos de especificação sem autorização.

Caso identifique conflitos entre os documentos, informe o problema e solicite orientação antes de tomar uma decisão que altere o comportamento previsto.

## 3. Objetivo da implementação

Desenvolva uma aplicação web de gerenciamento acadêmico que permita:

- RF01 — Cadastrar alunos.
- RF02 — Listar alunos cadastrados.
- RF03 — Buscar alunos por nome ou matrícula.
- RF04 — Editar os dados de alunos existentes.
- RF05 — Excluir alunos mediante confirmação.
- RF06 — Visualizar indicadores de total de alunos e alunos ativos.

Todas as funcionalidades deverão funcionar de maneira integrada e atualizar a interface automaticamente.

## 4. Tecnologias e restrições

Utilize exclusivamente:

- React com TypeScript.
- Vite como ferramenta de desenvolvimento.
- CSS tradicional para estilização.
- Hooks nativos do React, principalmente `useState`.
- Recursos nativos do JavaScript e do navegador.

Não utilize:

- Backend ou banco de dados.
- APIs externas.
- LocalStorage ou SessionStorage.
- Tailwind CSS ou Bootstrap.
- Bibliotecas externas de componentes.
- Bibliotecas adicionais de gerenciamento de estado.
- Sistemas de autenticação ou roteamento.

Os dados deverão permanecer exclusivamente na memória do React e retornar ao estado inicial quando a página for recarregada.

## 5. Organização do código

Respeite a estrutura definida em `04-regras-tecnicas.md`.

Organize a aplicação utilizando componentes funcionais e arquivos separados por responsabilidade.

O componente `App.tsx` deverá centralizar os dados dos alunos e coordenar as operações do sistema.

Utilize os componentes:

- `Indicadores.tsx`
- `FormularioAluno.tsx`
- `ListaAlunos.tsx`

Defina o tipo `Aluno` no arquivo `src/types/Aluno.ts`.

Utilize interfaces ou tipos TypeScript para as propriedades dos componentes.

Evite o uso de `any`, duplicação de código e lógica desnecessariamente complexa.

## 6. Regras de funcionamento

Implemente todas as validações definidas na SPEC 02.

Em especial:

- Impedir campos obrigatórios vazios.
- Impedir matrículas duplicadas.
- Validar o formato do e-mail.
- Permitir períodos inteiros entre 1 e 12.
- Utilizar um identificador interno único para cada aluno.
- Permitir edição sem duplicar registros.
- Solicitar confirmação antes da exclusão.
- Filtrar os alunos por nome ou matrícula em tempo real.
- Atualizar automaticamente os indicadores.
- Exibir mensagens de sucesso e erro.
- Iniciar a aplicação com a lista de alunos vazia.

Não altere os requisitos funcionais para simplificar a implementação.

## 7. Interface visual

A interface deverá seguir as definições do arquivo `03-interface.md`.

Crie uma página única, moderna e responsiva, contendo:

1. Cabeçalho com o título Controle Acadêmico.
2. Cartão de total de alunos.
3. Cartão de alunos ativos.
4. Formulário de cadastro e edição.
5. Campo de busca.
6. Tabela com os alunos cadastrados e suas ações.

Em telas grandes, organize o formulário à esquerda e a tabela à direita, utilizando mais espaço para a tabela.

Em dispositivos móveis, organize os elementos verticalmente.

Utilize a paleta de cores definida na SPEC 03.

Priorize legibilidade, consistência visual e facilidade de uso.

Não crie funcionalidades extras ou elementos decorativos que prejudiquem a simplicidade do exercício.

## 8. Processo de desenvolvimento

O trabalho deverá ocorrer em etapas.

### Etapa 1 — Análise do projeto

- Leia todos os documentos de especificação.
- Verifique os arquivos e diretórios já existentes.
- Identifique os requisitos e a estrutura necessária.
- Apresente um resumo do plano de implementação.
- Informe eventuais inconsistências encontradas.

Não altere arquivos nesta etapa.

### Etapa 2 — Preparação do ambiente

- Configure o projeto React com TypeScript e Vite, caso ainda não esteja configurado.
- Preserve integralmente a pasta `specs` e o arquivo `PROMPT.md`.
- Não utilize comandos que apaguem os documentos existentes.
- Crie a estrutura de diretórios definida na SPEC 04.
- Remova somente conteúdos demonstrativos desnecessários do Vite.

Antes de qualquer operação que possa sobrescrever arquivos existentes, solicite autorização.

### Etapa 3 — Construção da interface

- Desenvolva os componentes React.
- Construa o formulário de alunos.
- Construa a tabela.
- Construa os indicadores.
- Implemente os estilos utilizando CSS.
- Aplique as regras de responsividade.

### Etapa 4 — Implementação das funcionalidades

Implemente os seis requisitos funcionais descritos na SPEC 02.

Utilize os estados do React para gerenciar os dados e as interações.

### Etapa 5 — Validações e feedback

- Implemente as regras de validação.
- Apresente mensagens de erro e sucesso.
- Garanta o funcionamento adequado dos modos de cadastro e edição.
- Implemente a confirmação de exclusão.

### Etapa 6 — Testes e verificação

Execute ou oriente a execução dos cenários de teste CT01 a CT16 definidos na SPEC 02.

Verifique também:

- Erros de TypeScript.
- Funcionamento dos componentes.
- Atualização correta dos estados.
- Responsividade.
- Ausência de dependências desnecessárias.
- Funcionamento da aplicação sem backend.

Não declare um teste como aprovado sem executá-lo ou verificar evidências suficientes. Indique quais testes ainda dependem de validação manual.

## 9. Regras de interação com o desenvolvedor

O usuário está aprendendo React e TypeScript.

Por isso:

1. Explique brevemente o objetivo de cada etapa.
2. Informe quais arquivos serão criados ou modificados.
3. Utilize linguagem acessível.
4. Evite introduzir conceitos avançados sem necessidade.
5. Explique decisões técnicas importantes.
6. Não modifique arquivos fora do escopo da etapa atual.
7. Ao concluir uma etapa, apresente o que foi realizado e como verificar o resultado.
8. Aguarde a autorização do usuário antes de iniciar a próxima etapa.

Sempre que possível, gere código pronto para utilização no VS Code, evitando exemplos incompletos.

## 10. Critérios de conclusão

O desenvolvimento será considerado concluído quando:

- Os seis requisitos funcionais estiverem implementados.
- As regras de validação estiverem funcionando.
- A interface estiver responsiva.
- Os dados forem armazenados apenas na memória do React.
- O código estiver organizado e tipado.
- O projeto executar com `npm run dev`.
- A verificação de produção com `npm run build` for concluída sem erros.
- Os cenários de teste da SPEC 02 forem validados.

## 11. Instrução inicial

Antes de iniciar a implementação:

1. Leia integralmente as quatro SPECS.
2. Analise a estrutura atual do repositório.
3. Apresente um resumo do que será construído.
4. Identifique a primeira etapa prática de desenvolvimento.
5. Aguarde minha autorização para começar a modificar arquivos.

**Prioridade máxima:** respeitar as especificações, manter a implementação simples e garantir que todas as funcionalidades solicitadas pelo professor sejam atendidas.