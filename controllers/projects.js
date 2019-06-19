const knex = require("../db/knex.js");

function getProjectTodos(project_id) {
  return new Promise((resolve, reject) => {
    return knex('todos')
      .where('project_id', project_id)
      .then(resolve)
      .catch(reject)
  })
}

function getProjectInfo(project_id) {
  return new Promise((resolve, reject) => {
    return knex('projects')
      .where('id', project_id)
      .first()
      .then(resolve)
      .catch(reject)
  })
}

function getAllProjects() {
  return new Promise((resolve, reject) => {
    return knex('projects')
      .then(resolve)
      .catch(reject)
  })
}

function send500Status(e, res) {
  console.error(e)
  return res.sendStatus(500)
}

module.exports = {
  getAll: function (req, res) {
    return getAllProjects()
      .then(projects => {
        res.json(projects)
      })
      .catch(e => send500Status(e, res))
  },
  getOne: function (req, res) {
    return getProjectInfo(req.params.id)
      .then(project => {
        res.json(project)
      })
      .catch(e => send500Status(e, res))
  },
  addOne: (req, res) => {
    knex('projects')
      .insert(req.body)
      .returning('*')
      .then(results => {
        res.json(results[0])
      })
      .catch(e => send500Status(e, res))
  },
  editOne: function (req, res) {
    knex('projects')
      .where('id', req.params.id)
      .update(req.body)
      .then(() => {
        res.sendStatus(200)
      })
      .catch(e => send500Status(e, res))
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
      .catch(e => send500Status(e, res))
  },
  getTodos: function (req, res) {
    getProjectTodos(req.params.id)
      .then(todos => {
        res.json(todos)
      })
      .catch(e => send500Status(e, res))
  },
}
