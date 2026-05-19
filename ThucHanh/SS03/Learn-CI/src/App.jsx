import TaskCard from './components/TaskCard'
import './App.css'

const tasks = [
  {
    title: 'Mobile Wireframes',
    description:
      'Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiện',
    tag: 'MindX School',
    attachments: 3,
    deadline: 'Apr 12',
  },
  {
    title: 'Mobile Wireframes',
    description:
      'Thực hiện nghiên cứu người dùng để hiểu rõ hơn nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng.',
    tag: 'Nguyễn Văn A',
    attachments: 1,
    deadline: 'Apr 12',
  },
  {
    title: 'Client Call',
    description:
      'Cuộc họp trực tuyến với khách hàng để thảo luận về yêu cầu dự án, cập nhật tiến độ và giải quyết các vấn đề phát sinh. Cần chuẩn bị tài liệu và câu hỏi trước cuộc họp.',
    tag: 'Trịnh Hồng M',
    attachments: 0,
    deadline: 'Apr 2',
  },
]

function App() {
  return (
    <div className="board">
      <header className="board__header">
        <label className="search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="search" placeholder="Search Items" />
        </label>
        <button type="button" className="btn-new">
          New Item
        </button>
      </header>

      <main className="board__main">
        <section className="kanban-column">
          <div className="kanban-column__header">
            <div className="kanban-column__title-row">
              <h2 className="kanban-column__title">To do</h2>
              <span className="kanban-column__count">{tasks.length}</span>
            </div>
            <div className="kanban-column__actions">
              <button type="button" className="kanban-column__icon-btn" aria-label="Thêm thẻ">
                +
              </button>
              <button type="button" className="kanban-column__icon-btn" aria-label="Tùy chọn">
                ⋯
              </button>
            </div>
          </div>
          <div className="kanban-column__cards">
            {tasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
