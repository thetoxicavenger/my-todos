
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          project_id: 1,
          text: 'Call sister',
          order_id: 0
        },
        {
          project_id: 2,
          text: 'Call Meryl',
          order_id: 1
        },
      ]);
    });
};
