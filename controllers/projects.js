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

module.exports = {
  getAll: function (req, res) {
    knex('projects')
      .then(projects => {
        res.json(projects)
      })
  },
  getOne: function (req, res) {
    getProjectInfo(req.params.id)
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
    getProjectTodos(req.params.id)
      .then(todos => {
        res.json(todos)
      })
  },
  renderOne: function(req, res) {
    Promise.all([getProjectInfo(req.params.id), getProjectTodos(req.params.id)])
    .then(results => {
      if (typeof results[0] === 'object' && results[1].length) {
        res.render('pages/project', {
          project: results[0],
          todos: results[1],
          error: false
        })
      } else {
        res.render('pages/project_not_found')
      }
      
    })
    .catch(e => {
      console.error(e)
      res.sendStatus(500)
    })
  }
}
