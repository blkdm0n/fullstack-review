const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');



let repoSchema = mongoose.Schema({
  // DONE: your schema here!
  // Schema defines shape of the data in our database
  username: String,    // console.log(data[0].owner.login);
  url: String,         // console.log(data[0].html_url);
  description: String  // console.log(data[0].description);
});

//convert schema into a model we can use
let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;