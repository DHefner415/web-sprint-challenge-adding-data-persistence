const db = require('../../data/dbConfig')

const getAll = async () => {
  const rows = await db('projects') //grab info from db
  const projects = rows.map(row => {
    //read info from db
    const formatted = {
      //apply info to display
      project_id: row.project_id,
      project_name: row.project_name,
      project_description: row.project_description,
      project_completed:
        row.project_completed === null || row.project_completed === 0
          ? false
          : true,
    }
    return formatted
  })
  return projects
}

const getById = project_id => {
  return db('projects').where('project_id', project_id).first()
}

const add = async proj => {
  await db('projects').insert(proj)
  const newProj = await getAll()
  const id = newProj[newProj.length - 1]

  const formatted = {
    project_id: id.project_id,
    project_name: id.project_name,
    project_description: id.project_description,
    project_completed: id.project_completed,
  }
  return formatted
}

module.exports = { getAll, getById, add }
