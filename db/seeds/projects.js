
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {title: 'Personal', order_id: 0},
        {title: 'Work', order_id: 1},
        
      ]);
    });
};
