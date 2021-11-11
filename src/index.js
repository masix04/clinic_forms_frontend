  //Added After JWT - OKTA installed
const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');
//above OKTA

// IT => contains the express Framework for creting REST-APi
const express = require('express');
// IS-A => Middle-Ware responsible for cross-origin requests
const cors = require('cors');
// MAKE-SURES THAT => bodies of incoming request are read and attached to request object
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'clinic'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  //Added After JWT - OKTA installed
  .use(bearerToken())
  // .use(oktaAuth)
  // ABOVE OKTA
  .use(events(connection)); // For events router => create a router (file-events.js)

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});