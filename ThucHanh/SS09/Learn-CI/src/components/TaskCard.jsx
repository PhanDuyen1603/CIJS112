import './TaskCard.css'

function TaskCard({ title, description, tag, flagColor, deadline }) {
  return (
    <article className="task-card">
      <div className="task-card__header">
        <h3 className="task-card__title">{title}</h3>
        <button type="button" className="task-card__edit" aria-label="Chỉnh sửa">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
      </div>
      <p className="task-card__description">{description}</p>
      {tag && <span className="task-card__tag">{tag}</span>}
      <footer className="task-card__footer">
        <span className="task-card__meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
        </span>
        <span className="task-card__meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{deadline}</span>
        </span>
        <span className="task-card__meta task-card__flag" style={{ color: flagColor }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="currentColor" />
            <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </footer>
    </article>
  )
}

export default TaskCard
