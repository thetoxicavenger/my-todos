
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          project_id: 1,
          text: 'Call Julia',
        },
        {
          project_id: 1,
          text: 'Call Matt',
        },
        {
          project_id: 1,
          text: 'Call Mom',
        },
        {
          project_id: 1,
          text: 'Call Dad',
        },
        {
          project_id: 2,
          text: 'Call Greg',
        },
        {
          project_id: 2,
          text: 'Call Meryl',
        },
        {
          project_id: 2,
          text: 'Call Mimi',
        },
        {
          project_id: 2,
          text: 'Call Troy',
        },
      ]);
    });
};
