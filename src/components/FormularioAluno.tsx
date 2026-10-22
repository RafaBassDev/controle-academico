import { useState, type FormEvent } from 'react'
import type { Aluno } from '../types/Aluno'

interface FormularioAlunoProps {
  alunoEmEdicao: Aluno | null
  mensagemSucesso: string | null
  matriculasExistentes: string[]
  onCadastrar: (aluno: Omit<Aluno, 'id'>) => void
  onSalvarEdicao: (id: string, aluno: Omit<Aluno, 'id'>) => void
  onLimparMensagem: () => void
  onCancelarEdicao: () => void
}

interface DadosFormulario {
  matricula: string
  nome: string
  email: string
  curso: string
  periodo: string
  ativo: boolean
}

type MensagemFormulario = {
  tipo: 'erro'
  texto: string
} | null

function criarFormularioVazio(): DadosFormulario {
  return {
    matricula: '',
    nome: '',
    email: '',
    curso: '',
    periodo: '',
    ativo: true,
  }
}

function FormularioAluno({
  alunoEmEdicao,
  mensagemSucesso,
  matriculasExistentes,
  onCadastrar,
  onSalvarEdicao,
  onLimparMensagem,
  onCancelarEdicao,
}: FormularioAlunoProps) {
  const [dados, setDados] = useState<DadosFormulario>(() =>
    alunoEmEdicao
      ? {
          matricula: alunoEmEdicao.matricula,
          nome: alunoEmEdicao.nome,
          email: alunoEmEdicao.email,
          curso: alunoEmEdicao.curso,
          periodo: String(alunoEmEdicao.periodo),
          ativo: alunoEmEdicao.ativo,
        }
      : criarFormularioVazio(),
  )
  const [mensagem, setMensagem] = useState<MensagemFormulario>(null)
  const modoEdicao = alunoEmEdicao !== null

  function atualizarCampo<K extends keyof DadosFormulario>(
    campo: K,
    valor: DadosFormulario[K],
  ) {
    setDados((dadosAtuais) => ({ ...dadosAtuais, [campo]: valor }))
    setMensagem(null)
    onLimparMensagem()
  }

  function salvar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const matricula = dados.matricula.trim()
    const nome = dados.nome.trim()
    const email = dados.email.trim()
    const curso = dados.curso.trim()
    const periodoTexto = dados.periodo.trim()

    if (!matricula || !nome || !email || !curso || !periodoTexto) {
      setMensagem({ tipo: 'erro', texto: 'Preencha todos os campos obrigatórios.' })
      return
    }

    if (matriculasExistentes.includes(matricula)) {
      setMensagem({ tipo: 'erro', texto: 'Já existe um aluno com esta matrícula.' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMensagem({ tipo: 'erro', texto: 'Informe um e-mail válido.' })
      return
    }

    const periodo = Number(periodoTexto)
    if (!Number.isInteger(periodo) || periodo < 1 || periodo > 12) {
      setMensagem({ tipo: 'erro', texto: 'Informe um período entre 1 e 12.' })
      return
    }

    const dadosAluno = {
      matricula,
      nome,
      email,
      curso,
      periodo,
      ativo: dados.ativo,
    }

    if (alunoEmEdicao) {
      onSalvarEdicao(alunoEmEdicao.id, dadosAluno)
      return
    }

    onCadastrar(dadosAluno)
    setDados(criarFormularioVazio())
  }

  function cancelarEdicao() {
    setMensagem(null)
    onLimparMensagem()
    onCancelarEdicao()
  }

  return (
    <section className="panel form-panel" aria-labelledby="form-panel-title">
      <div className="panel-heading">
        <div>
          <h2 id="form-panel-title">{modoEdicao ? 'Editar aluno' : 'Novo aluno'}</h2>
          <p className="panel-description">Preencha os dados do estudante</p>
        </div>
        <span className="panel-heading-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8v-1.5a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5V20"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <form className="student-form" onSubmit={salvar} noValidate>
        <div className="form-field">
          <label htmlFor="matricula">Matrícula</label>
          <input
            id="matricula"
            name="matricula"
            type="text"
            placeholder="Ex.: 2024001"
            value={dados.matricula}
            onChange={(event) => atualizarCampo('matricula', event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome do aluno"
            value={dados.nome}
            onChange={(event) => atualizarCampo('nome', event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="aluno@exemplo.com"
            value={dados.email}
            onChange={(event) => atualizarCampo('email', event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="curso">Curso</label>
          <input
            id="curso"
            name="curso"
            type="text"
            placeholder="Nome do curso"
            value={dados.curso}
            onChange={(event) => atualizarCampo('curso', event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="periodo">Período</label>
          <input
            id="periodo"
            name="periodo"
            type="number"
            min="1"
            max="12"
            step="1"
            placeholder="Ex.: 1"
            value={dados.periodo}
            onChange={(event) => atualizarCampo('periodo', event.target.value)}
          />
        </div>

        <label className="checkbox-field" htmlFor="ativo">
          <input
            id="ativo"
            name="ativo"
            type="checkbox"
            checked={dados.ativo}
            onChange={(event) => atualizarCampo('ativo', event.target.checked)}
          />
          <span className="custom-checkbox" aria-hidden="true" />
          <span>Aluno ativo</span>
        </label>

        {mensagem && (
          <p className="form-feedback form-feedback-erro" role="alert">
            {mensagem.texto}
          </p>
        )}
        {mensagemSucesso && (
          <p className="form-feedback form-feedback-sucesso" role="status">
            {mensagemSucesso}
          </p>
        )}

        <div className="form-actions">
          {modoEdicao && (
            <button
              className="button button-secondary"
              type="button"
              onClick={cancelarEdicao}
            >
              Cancelar
            </button>
          )}
          <button className="button button-primary" type="submit">
            {modoEdicao ? 'Salvar alterações' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default FormularioAluno
