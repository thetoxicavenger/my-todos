
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('title')
    table.string('img_url')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
