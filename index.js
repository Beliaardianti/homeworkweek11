const express = require('express');
const app = express();

const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const router = require('./routes/todos-router');
const db = require('./config/db')
require('dotenv').config()
const port = process.env.PORT || 3000
app.use('/router', router)
// parse application/json
app.use(bodyParser.json())
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))





  app.listen(3000, () => {
    console.log(`Server is running on port 3000 http://localhost:${port}`);
  });


  