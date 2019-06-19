const express = require("express");
const bodyParser = require('body-parser');
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json({ extended: true }));
  server.use(bodyParser.urlencoded({ extended: true }));

  var routes_setter = require('./config/routes.js');
  routes_setter(server, app);

  server.listen(port, function () {
    console.log('Listening on', port);
  });
})



/*

const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})


*/
