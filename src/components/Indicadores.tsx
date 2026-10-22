interface IndicadoresProps {
  totalAlunos: number
  alunosAtivos: number
}

function Indicadores({ totalAlunos, alunosAtivos }: IndicadoresProps) {
  return (
    <div className="stats-grid">
      <article className="stat-card">
        <div className="stat-icon stat-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20m6-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7.5a4 4 0 0 1 0 7.8M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="stat-copy">
          <span className="stat-label">Total de alunos</span>
          <strong className="stat-value">{totalAlunos}</strong>
        </div>
        <span className="stat-caption">Alunos cadastrados</span>
      </article>

      <article className="stat-card">
        <div className="stat-icon stat-icon-green" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M20 11.1V12a8 8 0 1 1-4.75-7.32M20 5l-8 8-2.5-2.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="stat-copy">
          <span className="stat-label">Alunos ativos</span>
          <strong className="stat-value">{alunosAtivos}</strong>
        </div>
        <span className="stat-caption">Com matrícula ativa</span>
      </article>
    </div>
  )
}

export default Indicadores
