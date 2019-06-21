const knex = require("../db/knex.js");

function getProjectAndTodos(project_id) {
  return new Promise((resolve, reject) => {
    return knex('todos')
      .where('project_id', project_id)
      .join('projects', 'projects.id', '=', 'todos.id')
      .then(async todos => {
          if (!todos.length) {
            try {
              const projectInfo = await getProjectInfo(project_id)
              resolve({
                project_name: projectInfo.title,
                project_icon: projectInfo.img_url,
                todos: []
              })
            } catch (e) {
              reject()
            }
            
          } else {
          const keys_to_remove = {
            project_id: true,
            created_at: true,
            updated_at: true,
            title: true,
            img_url: true,
          }
          resolve({
            project_name: todos[0].title,
            project_icon: todos[0].img_url,
            todos: todos.map(todo => {
              let acc = {}
              for (let key in todo) {
                if (!keys_to_remove[key]) {
                  acc = {
                    ...acc,
                    [key]: todo[key]
                  }
                }
              }
              return acc
            })
          })
        }
      })
      .catch(reject)
  })
}

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
  getOne: async function (req, res) {
    if (req.query.get_todos === "true") {
      try {
        const project_and_todos = await getProjectAndTodos(req.params.id)
        return res.json(project_and_todos)
      } catch (e) {
        return send500Status(e, res)
      }
    } else {
      return getProjectInfo(req.params.id)
        .then(project => {
          res.json(project)
        })
        .catch(e => send500Status(e, res))
    }

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
