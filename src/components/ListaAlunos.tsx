import type { Aluno } from '../types/Aluno'

interface ListaAlunosProps {
  alunos: Aluno[]
  busca: string
  onBuscaChange: (busca: string) => void
  onEditar: (aluno: Aluno) => void
  onExcluir: (id: string) => void
}

function ListaAlunos({
  alunos,
  busca,
  onBuscaChange,
  onEditar,
  onExcluir,
}: ListaAlunosProps) {
  return (
    <section className="panel list-panel" aria-labelledby="list-panel-title">
      <div className="panel-heading list-heading">
        <div>
          <h2 id="list-panel-title">Alunos</h2>
          <p className="panel-description">Consulte os estudantes cadastrados</p>
        </div>
        <span className="student-count">
          {alunos.length} {alunos.length === 1 ? 'aluno' : 'alunos'}
        </span>
      </div>

      <div className="search-field">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="m16 16 4.2 4.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
        <input
          aria-label="Buscar aluno por nome ou matrícula"
          type="search"
          placeholder="Buscar por nome ou matrícula..."
          value={busca}
          onChange={(event) => onBuscaChange(event.target.value)}
        />
      </div>

      <div className="table-scroll">
        <table className="students-table">
          <thead>
            <tr>
              <th scope="col">Matrícula</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Curso</th>
              <th scope="col">Período</th>
              <th scope="col">Situação</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.length === 0 ? (
              <tr>
                <td className="empty-cell" colSpan={7}>
                  <div className="empty-state">
                    <span className="empty-state-icon" aria-hidden="true">
                      <svg viewBox="0 0 48 48" fill="none">
                        <path
                          d="M13 8h15l8 8v23H13V8Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M28 8v9h8M19 25h11M19 31h11"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 14v27h23"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <strong>
                      {busca.trim()
                        ? 'Nenhum aluno encontrado.'
                        : 'Nenhum aluno cadastrado.'}
                    </strong>
                    <span>
                      {busca.trim()
                        ? 'Tente buscar por outro nome ou matrícula.'
                        : 'Os alunos adicionados aparecerão nesta lista.'}
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              alunos.map((aluno) => (
                <tr key={aluno.id}>
                  <td>{aluno.matricula}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.curso}</td>
                  <td>{aluno.periodo}</td>
                  <td>
                    <span className={`student-status ${aluno.ativo ? 'student-status-active' : 'student-status-inactive'}`}>
                      {aluno.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="table-action"
                        type="button"
                        aria-label={`Editar ${aluno.nome}`}
                        onClick={() => onEditar(aluno)}
                      >
                        Editar
                      </button>
                      <button
                        className="table-action table-action-delete"
                        type="button"
                        onClick={() => onExcluir(aluno.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ListaAlunos
