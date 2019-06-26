
exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments('id')
    table.integer('project_id')
      .references('id')
      .inTable('projects')
      .index()
      .onDelete('CASCADE')
    table.string('text')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('todos')
};
