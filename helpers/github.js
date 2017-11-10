const request = require('request');
const config = require('../config.js');


//was this the problem?  let limited the block scope
const getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log('In the getRepos function');
  console.log(options.url);

  function callback(err, resp, body) {
    if (err) {
      console.log('error');
    } else {
      //repo data is here!!!!
      console.log(body); 
    }
  }
  //invoke our function so that we can retrieve the data
  request(options, callback);
};


module.exports.getReposByUsername = getReposByUsername;


