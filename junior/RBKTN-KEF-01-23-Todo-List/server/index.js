const express = require('express');
const db = require('./db');
const app = express();
const port = 1337;
const routes = require('./routes'); 
const CORS = require('cors');
app.use(CORS())
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});