const express = require('express');
const fakeData = require('../data');
const getReposByUsername = require('../helpers/github.js');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  //how do i get the user name?
  
  
  res.send('Hello from POST!');
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

