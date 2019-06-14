const projects = require("../controllers/projects.js")
const todos = require("../controllers/todos.js")

module.exports = function(app){

  app.get('/api/projects', projects.getAll)
  app.post('/api/projects', projects.addOne)
  app.get('/api/projects/:id', projects.getOne)
  app.get('/api/projects/:id/todos', projects.getTodos)
  app.patch('/api/projects/:id', projects.editOne)
  app.delete('/api/projects/:id', projects.deleteOne)

  app.post('/api/todos', todos.addOne)
  app.patch('/api/todos/:id', todos.editOne)
  app.delete('/api/todos/:id', todos.deleteOne)
  app.post('/api/todos/delete', todos.deleteMultiple)
  
  

}
