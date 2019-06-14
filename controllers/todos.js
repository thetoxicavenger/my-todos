const knex = require("../db/knex.js");

module.exports = {
  addOne: (req, res) => {
    knex('todos')
    .insert(req.body)
    .returning('*')
    .then(results => {
      res.json(results[0])
    })
  },
  editOne: function(req, res) {
    knex('todos')
    .where('id', req.params.id)
    .update(req.body)
    .then(() => {
      res.sendStatus(200)
    })
  },
  deleteOne: function(req, res) {
    knex('projects')
    .where('id', req.params.id)
    .del()
    .then(() => {
      res.sendStatus(200)
    })
  },
  deleteMultiple: function(req, res) {
    knex('todos')
    .whereIn('id', JSON.parse(req.body.ids))
    .del()
    .then(() => {
      res.sendStatus(200)
    })
  }
}
