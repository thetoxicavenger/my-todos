const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res) {
    knex('projects')
    .then(projects => {
      res.json(projects)
    })
  },
  addOne: (req, res) => {
    knex('projects')
    .insert(req.body)
    .returning('*')
    .then(results => {
      res.json(results[0])
    })
  },
  getOne: function(req, res) {
    knex('projects')
    .where('id', req.params.id)
    .first()
    .then(project => {
      res.json(project)
    })
  },
  editOne: function(req, res) {
    knex('projects')
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
  }
}
