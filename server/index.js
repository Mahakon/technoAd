const path = require('path');
const http = require('https');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../static/public')));

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () =>
console.log('Express app listening on localhost: ' + PORT));
