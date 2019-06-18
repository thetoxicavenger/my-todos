
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.integer('order_id')
    table.string('title')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
