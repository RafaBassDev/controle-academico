import { useState } from 'react'
import './App.css'
import FormularioAluno from './components/FormularioAluno'
import Indicadores from './components/Indicadores'
import ListaAlunos from './components/ListaAlunos'
import type { Aluno } from './types/Aluno'

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [busca, setBusca] = useState('')
  const [alunoEmEdicaoId, setAlunoEmEdicaoId] = useState<string | null>(null)
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null)

  function cadastrarAluno(dadosAluno: Omit<Aluno, 'id'>) {
    const novoAluno: Aluno = {
      id: crypto.randomUUID(),
      ...dadosAluno,
    }

    setAlunos((alunosAtuais) => [...alunosAtuais, novoAluno])
    setMensagemSucesso('Aluno cadastrado com sucesso!')
  }

  function atualizarAluno(id: string, dadosAluno: Omit<Aluno, 'id'>) {
    setAlunos((alunosAtuais) =>
      alunosAtuais.map((aluno) =>
        aluno.id === id ? { ...dadosAluno, id: aluno.id } : aluno,
      ),
    )
    setAlunoEmEdicaoId(null)
    setMensagemSucesso('Aluno atualizado com sucesso!')
  }

  function iniciarEdicao(aluno: Aluno) {
    setMensagemSucesso(null)
    setAlunoEmEdicaoId(aluno.id)
  }

  function cancelarEdicao() {
    setMensagemSucesso(null)
    setAlunoEmEdicaoId(null)
  }

  function excluirAluno(id: string) {
    const confirmado = window.confirm('Deseja realmente excluir este aluno?')
    if (!confirmado) return

    setAlunos((alunosAtuais) => alunosAtuais.filter((aluno) => aluno.id !== id))
    if (alunoEmEdicaoId === id) {
      setAlunoEmEdicaoId(null)
    }
    setMensagemSucesso('Aluno excluído com sucesso!')
  }

  const alunoEmEdicao =
    alunos.find((aluno) => aluno.id === alunoEmEdicaoId) ?? null
  const alunosAtivos = alunos.filter((aluno) => aluno.ativo).length
  const termoBusca = busca.trim().toLowerCase()
  const alunosFiltrados = alunos.filter(
    (aluno) =>
      aluno.nome.toLowerCase().includes(termoBusca) ||
      aluno.matricula.toLowerCase().includes(termoBusca),
  )

  return (
    <main className="app-shell">
      <header className="page-header">
        <div className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M7 5.5h12.2L25 11v15.5H7V5.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M19 5.8V11h5.5M11 16h10M11 20h10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h1>Controle Acadêmico</h1>
          <p>Sistema de gerenciamento de alunos</p>
        </div>
      </header>

      <section className="dashboard-section" aria-label="Indicadores acadêmicos">
        <Indicadores totalAlunos={alunos.length} alunosAtivos={alunosAtivos} />
      </section>

      <section className="management-grid" aria-label="Gerenciamento de alunos">
        <FormularioAluno
          key={alunoEmEdicao?.id ?? 'novo'}
          alunoEmEdicao={alunoEmEdicao}
          mensagemSucesso={mensagemSucesso}
          matriculasExistentes={alunos
            .filter((aluno) => aluno.id !== alunoEmEdicaoId)
            .map((aluno) => aluno.matricula)}
          onCadastrar={cadastrarAluno}
          onSalvarEdicao={atualizarAluno}
          onLimparMensagem={() => setMensagemSucesso(null)}
          onCancelarEdicao={cancelarEdicao}
        />
        <ListaAlunos
          alunos={alunosFiltrados}
          busca={busca}
          onBuscaChange={setBusca}
          onEditar={iniciarEdicao}
          onExcluir={excluirAluno}
        />
      </section>
    </main>
  )
}

export default App
