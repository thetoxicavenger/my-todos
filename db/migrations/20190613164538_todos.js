
exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments('id')
    table.integer('project_id')
      .references('id')
      .inTable('projects')
      .index()
      .onDelete('CASCADE')
    table.string('text')
    table.string('notes')
    table.boolean('is_completed').defaultsTo(false)
    table.boolean('is_flagged').defaultsTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('todos')
};
