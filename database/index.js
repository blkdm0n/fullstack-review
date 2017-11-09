const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


// console.log(fakeData[0].owner.login);
// console.log(fakeData[0].html_url);
// console.log(fakeData[0].description);

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  
  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;