const request = require('request');
const config = require('../config.js');
const saveRepos = require('../database/index.js');


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

  function callback(err, resp, repos) {
    if (err) {
      console.log('error');
    } else {
      console.log('off to fetch some repos');
      //repo data is here!!!!
      saveRepos.save(repos);      
    }
  }
  //invoke our function so that we can retrieve the data
  request(options, callback);
};


module.exports.getReposByUsername = getReposByUsername;


