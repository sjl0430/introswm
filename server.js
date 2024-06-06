const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.listen(port, function () {
  console.log('Server is listening on '+port);
});

app.use(express.static(path.join(__dirname, 'introweb/build')))

app.get('/', function(ask, rep){
  rep.sendFile(path.join(__dirname, 'introweb/build/index.html'));
});

app.get('*', function (ask, rep){
  rep.sendFile(path.join(__dirname, '/introweb/build/index.html'));
});