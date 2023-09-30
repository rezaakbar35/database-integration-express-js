const express = require('express')
const app = express()
const pool = require('./query.js')

const route = require('./route.js')

app.use('/', route)

pool.connect((err, client, done) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database');
    }
  });

app.listen(3000);
