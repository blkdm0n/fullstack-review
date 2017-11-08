const express = require('express');
const fakeData = require('../data');
const config = require('../config');

let app = express();


//OWNER NAME: console.log(fakeData[0].owner.login);

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //post request to GH
  
  
  res.send('Hello from POST!')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  

  //required and rendered fakeData on get request
  res.send(fakeData);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

