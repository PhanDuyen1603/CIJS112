import { useState, useEffect, useMemo } from 'react'
import TaskCard from '../../components/TaskCard'
import SaveTaskModal from '../../components/SaveTaskModal'
import { Button, Spin } from 'antd'
import '../../App.css'

const API_URL = 'https://mindx-mockup-server.vercel.app/api/resources/SS07-JS112?apiKey=6a15af23e12a5b4162873459';

function BoardPage() {
  const [tasks, setTasks] = useState([])
  const [users, setUsers] = useState([])
  const [taskStatus, setTaskStatus] = useState([])
  const [reloadKey, setReloadKey] = useState(0)
  const [flags, setFlags] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  let filteredCount = 0;

  // useEffect(() => {
  //   const API_URL = 'https://mindx-mockup-server.vercel.app/api/resources/SS07-JS112?apiKey=6a15af23e12a5b4162873459';
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json)
  //       console.log(json.data.data[0].tasks)
  //     })
  // }, [])

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        const board = json.data.data[0]
        setTasks(board.tasks)
        setUsers(board.users)
        setTaskStatus(board.taskStatus)
        setFlags(board.flags)
      })
      .finally(() => setLoading(false))// sẽ tắt loading dù OK hay lỗi
  }, [reloadKey])

  const handleReload = () => setReloadKey((k) => k + 1)

  const filteredTasks = useMemo(() => tasks.filter((task) => {
    filteredCount++; // mỗi lần filter sẽ tăng 1
    const q = searchKeyword.trim().toLowerCase()
    if (q === '') {
      return true
    }
    return task.title.toLowerCase().includes(q) || task.description.toLowerCase().includes(q)
  }), [tasks, searchKeyword])

  const taskByStatus = useMemo(() => {
    console.log('useMemo taskStatus rendered', taskStatus);
    const grouped = {};
    filteredTasks.forEach((task) => {
      if(!grouped[task.statusId]) {
        grouped[task.statusId] = [];
      }
      grouped[task.statusId].push(task);
    });
    return grouped;
  }, [filteredTasks, taskStatus])

  if (loading) {
    return (
      <div className="board__loading">
        <Spin size="large" tip="Loading tasks..." />
      </div>
    )
  }

  console.log('Sử dụng useMemo, filteredCount:', filteredCount);

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
        <Button
          onClick={handleReload}
          loading={loading}
        >
          Refresh
        </Button>
        <Button type="primary" onClick={showModal}>
          New Item
        </Button>
      </header>

      <main className="board__main">
        {console.log('taskStatus rendered', taskStatus)}

        {taskStatus.map((status) => {
          const columnTasks = taskByStatus[status.statusId] || []
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

export default BoardPage
