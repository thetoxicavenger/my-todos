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
