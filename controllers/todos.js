const knex = require("../db/knex.js");

module.exports = {
  addOne: (req, res) => {
    const body = {
      ...req.body,
      project_id: Number(req.body.project_id)
    }
    knex('todos')
    .insert(body)
    .then(() => {
      res.redirect('/projects?id=' + body.project_id)
    })
    .catch(e => res.sendStatus(500))
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
