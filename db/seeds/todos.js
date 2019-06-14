
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          project_id: 1,
          text: 'Call sister',
          notes: 'You havent called her in forever!'
        },
        {
          project_id: 2,
          text: 'Call Meryl',
          notes: 'Wat!'
        },
      ]);
    });
};
