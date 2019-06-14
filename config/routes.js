//Update the name of the controller below and rename the file.
const projects = require("../controllers/projects.js")
module.exports = function(app){

  app.get('/api/projects', projects.getAll)

  app.post('/api/projects', projects.addOne)

  app.get('/api/projects/:id', projects.getOne)

  app.patch('/api/projects/:id', projects.editOne)

  app.delete('/api/projects/:id', projects.deleteOne)

}
