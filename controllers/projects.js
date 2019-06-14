const knex = require("../db/knex.js");

module.exports = {
  getAll: function (req, res) {
    knex('projects')
      .then(projects => {
        res.json(projects)
      })
  },
  getOne: function (req, res) {
    knex('projects')
      .where('id', req.params.id)
      .first()
      .then(project => {
        res.json(project)
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
  editOne: function (req, res) {
    knex('projects')
      .where('id', req.params.id)
      .update(req.body)
      .then(() => {
        res.sendStatus(200)
      })
  },
  deleteOne: function (req, res) {
    knex('projects')
      .where('id', req.params.id)
      .del()
      .then(() => {
        knex('todos')
        .where('project_id', req.params.id)
        .del()
        .then(() => {
          res.sendStatus(200)
        })
      })
  },
  getTodos: function (req, res) {
    knex('todos')
      .where('project_id', req.params.id)
      .then(todos => {
        res.json(todos)
      })
  }
}
