const express = require('express');
const fakeData = require('../data');
const getReposByUsername = require('../helpers/github.js');
const bodyParser = require ('body-parser');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  //we get the user name by sending a post request from the client
  //this data is being return in the data my AJAX call
  //the search value wasn't in a string causing an error
  
  console.log(req.body);
  



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

