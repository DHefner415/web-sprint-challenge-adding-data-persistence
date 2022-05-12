exports.up = function (knex) {
  return knex.schema
    .createTable('projects', t => {
      t.increments('project_id')
      t.string('project_name').notNullable()
      t.string('project_description', 128)
      t.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', t => {
      t.increments('resource_id')
      t.string('resource_name', 128).notNullable().unique()
      t.string('resource_description', 200)
    })
    .createTable('tasks', t => {
      t.increments('task_id')
      t.string('task_description', 200).notNullable()
      t.string('task_notes', 200)
      t.boolean('task_completed').defaultTo(false)
      t.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('cascade')
    })
    .createTable('project_resources', t => {
      t.increments('project_resources_id')
      t.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('cascade')
      t.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('cascade')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
}
