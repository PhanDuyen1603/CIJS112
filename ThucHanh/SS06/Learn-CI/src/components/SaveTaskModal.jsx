import { Modal, Form, Input, Select, DatePicker, Button } from 'antd'
import dayjs from 'dayjs'
import './SaveTaskModal.css'

function SaveTaskModal({ open, onCancel, onSave, users, taskStatus }) {
  const [form] = Form.useForm()

  const handleSave = async () => {
    try {
      const values = await form.validateFields()
      onSave?.(values)
      onCancel()
    } catch {
      // validation errors shown in form
    }
  }

  const handleCancel = () => {
    form.resetFields()
    onCancel()
  }

  return (
    <Modal
      className="save-task-modal"
      open={open}
      onCancel={handleCancel}
      width={640}
      centered
      destroyOnClose
      closable={false}
      title={
        <div className="save-task-modal__header">
          <div className="save-task-modal__header-top">
            <span className="save-task-modal__flag" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3v18l7-4 7 4V3H5z" />
              </svg>
            </span>
            <button
              type="button"
              className="save-task-modal__close"
              aria-label="Đóng"
              onClick={handleCancel}
            >
              ×
            </button>
          </div>
          <h2 className="save-task-modal__title">Save task</h2>
        </div>
      }
      footer={
        <div className="save-task-modal__footer">
          <Button className="save-task-modal__btn-cancel" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" className="save-task-modal__btn-save" onClick={handleSave}>
            Save
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        className="save-task-modal__form"
        initialValues={{
          title: '',
          endDate: dayjs('2024-06-15'),
          description: '',
          assign: users[0]?.userId,
          status: undefined,
        }}
        validateTrigger={['onSubmit', 'onBlur']}
      >
        <div className="save-task-modal__row">
          <Form.Item
            label={
              <>
                Title <span className="save-task-modal__required">*</span>
              </>
            }
            name="title"
            rules={[{ required: true, message: 'Title is required' }]}
          >
            <Input placeholder="Type title of task" />
          </Form.Item>
          <Form.Item label="End Date" name="endDate">
            <DatePicker
              format="DD / MM / YYYY"
              style={{ width: '100%' }}
              placeholder="DD / MM / YYYY"
            />
          </Form.Item>
        </div>

        <div className="save-task-modal__row">
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Type description..." rows={4} />
          </Form.Item>
          <Form.Item label="Assign" name="assign">
            <Select
              options={users.map((u) => ({ value: u.userId, label: u.name }))}
            />
          </Form.Item>
        </div>

        <div className="save-task-modal__status-col">
          <Form.Item label="Status" name="status">
            <Select
              placeholder="Choose status"
              allowClear
              options={taskStatus.map((s) => ({ value: s.statusId, label: s.name }))}
            />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default SaveTaskModal
