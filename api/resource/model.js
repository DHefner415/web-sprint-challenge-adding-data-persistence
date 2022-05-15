const db = require('../../data/dbConfig')

const getAll = () => {
  return db('resources')
}

const add = async source => {
  await db('resources').insert(source)
  const newSource = await getAll()
  const id = newSource[(newSource.length - 1)]

  const formatted = {
    resource_id: id.resource_id,
    resource_name: id.resource_name,
    resource_description: id.resource_description,
  }
  return formatted
}

module.exports = { getAll, add }
