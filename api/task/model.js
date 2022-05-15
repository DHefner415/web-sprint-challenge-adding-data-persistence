const db = require('../../data/dbConfig')

const getAll = async () => {
  const rows = await db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
    .orderBy('task_id')
  const tasks = rows.map(row => {
    const formatted = {
      task_id: row.task_id,
      task_description: row.task_description,
      task_notes: row.task_notes,
      task_completed:
        row.task_completed === null || row.task_completed === 0 ? false : true,
      project_name: row.project_name,
      project_description: row.project_description,
    }
    return formatted
  })
  return tasks
}

const add = async task => {
  await db('tasks').insert(task)
  const newTask = await getAll()
  const id = newTask[newTask.length - 1]

  const formatted = {
    task_id: id.task_id,
    task_description: id.task_description,
    task_notes: id.task_notes,
    task_completed:
      id.task_completed === null || id.task_completed === 0 ? false : true,
    project_id: id.project_id,
  }
  return formatted
}

module.exports = { getAll, add }
