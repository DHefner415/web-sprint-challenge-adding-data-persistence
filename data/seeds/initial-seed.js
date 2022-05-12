const projects = [
  {
    project_name: 'this',
    project_description: 'that',
    project_completed: false,
  },
  {
    project_name: 'foo',
    project_description: 'bar',
    project_completed: true,
  },
  {
    project_name: 'baz',
    project_description: 'fizz',
    project_completed: false,
  },
]
const resources = [
  {
    resource_name: 'this',
    resource_description: 'this n that',
  },
  {
    resource_name: 'another name',
    resource_description: 'no description',
  },
]
const tasks = [
  {
    task_description: 'asdf',
    task_notes: 'asd',
    task_completed: false,
    project_id: 1,
  },
  {
    task_description: 'ljhg',
    task_notes: 'lkjh',
    task_completed: true,
    project_id: 2,
  },
  {
    task_description: 'yuo',
    task_notes: 'poiy',
    project_id: 2,
  },
]
const project_resources = [
  {
    project_id: 1,
    resource_id: 2,
  },
]

exports.seed = async function (knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(project_resources)
}
