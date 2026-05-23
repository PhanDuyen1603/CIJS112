import { useState } from 'react'
import { tasks as initialTasks, taskStatus, users, flags } from './data'
import TaskCard from './components/TaskCard'
import SaveTaskModal from './components/SaveTaskModal'
import { Button } from 'antd'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredTasks = tasks.filter((task) => {
    const q = searchKeyword.trim().toLowerCase()
    if (q === '') {
      return true
    }
    return task.title.toLowerCase().includes(q) || task.description.toLowerCase().includes(q)
  })

  function getAssigneeName(userId, userList) {
    const user = userList.find((u) => u.userId === userId)
    return user ? user.name : ''
  }

  function formatDeadline(date) {
    if (!date) return ''
    const d =
      date instanceof Date
        ? date
        : typeof date.toDate === 'function'
          ? date.toDate()
          : new Date(date)
    if (Number.isNaN(d.getTime())) return ''
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  function getFlagColor(flagId, flagList) {
    const flag = flagList.find((f) => f.flagId === flagId)
    return flag ? flag.color : '#999999'
  }

  const showModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSaveTask = (values) => {
    const newTaskId = tasks.length > 0 ? Math.max(...tasks.map(task => task.taskId)) + 1 : 1;

    const newTask = {
      taskId: newTaskId,
      title: values.title.trim(),
      description: values.description?.trim() || '',
      statusId: values.status ?? 1,
      flagId: 1,
      assignedTo: values.assign ?? 1,
      deadline: values.endDate?.toDate?.() ?? new Date(),
    }
    setTasks([...tasks, newTask])
    closeModal()
  }


  return (
    <div className="board">
      <header className="board__header">
        <label className="search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search Items"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </label>
        <Button type="primary" onClick={showModal}>
          New Item
        </Button>
      </header>

      <main className="board__main">
        {taskStatus.map((status) => {
          const columnTasks = filteredTasks.filter((t) => t.statusId === status.statusId)
          return (
            <section key={status.statusId} className="kanban-column">
              <div className="kanban-column__toolbar">
                <div className="kanban-column__title-row">
                  <h2 className="kanban-column__title">{status.name}</h2>
                  <span className="kanban-column__count">{columnTasks.length}</span>
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
                {columnTasks.map((task) => (
                  <TaskCard
                    key={task.taskId}
                    title={task.title}
                    description={task.description}
                    tag={getAssigneeName(task.assignedTo, users)}
                    flagColor={getFlagColor(task.flagId, flags)}
                    deadline={formatDeadline(task.deadline)}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </main>

      <SaveTaskModal
        open={isModalOpen}
        onCancel={closeModal}
        onSave={handleSaveTask}
        users={users}
        taskStatus={taskStatus}
      />
    </div>
  )
}

export default App
