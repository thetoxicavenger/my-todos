
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {title: 'Personal', order_id: 0, img_url: 'https://cdn3.iconfinder.com/data/icons/hand-signs/432/call-me-512.png'},
        {title: 'Work', order_id: 1, img_url: 'https://cdn3.iconfinder.com/data/icons/business-511/100/business_10-512.png'},
        
      ]);
    });
};
