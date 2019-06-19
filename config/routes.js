const projects = require("../controllers/projects.js")
const todos = require("../controllers/todos.js")

module.exports = function(server, app){

  const handle = app.getRequestHandler()

  server.get('/', (req, res) => {
    return app.render(req, res, '/')
  })

  server.get('/projects', (req, res) => {
    return app.render(req, res, '/project', { id: req.query.id })
  })

  server.get('/api/projects', projects.getAll)
  server.post('/api/projects', projects.addOne)
  server.get('/api/projects/:id', projects.getOne)
  server.get('/api/projects/:id/todos', projects.getTodos)
  server.patch('/api/projects/:id', projects.editOne)
  server.delete('/api/projects/:id', projects.deleteOne)

  server.post('/api/todos', todos.addOne)
  server.patch('/api/todos/:id', todos.editOne)
  server.delete('/api/todos/:id', todos.deleteOne)
  server.post('/api/todos/delete', todos.deleteMultiple)
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

}
