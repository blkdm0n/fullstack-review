const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');





let repoSchema = mongoose.Schema({
  // DONE: your schema here!
  // Schema defines shape of the data in our database   
  userRepos: Array
});

//convert schema into a model we can use
let Repo = mongoose.model('Repo', repoSchema);

const save = (userRepos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var db = mongoose.connection;


  
  var userRepo = new Repo({userRepos});
  userRepo.save(function (err) {
    if (err) {
      console.log('repos not saved');
    } else {
      console.log('data is safe and sound');
    }
});
 
  //hmm i only want to save specific data to my database
  
  
  
}

module.exports.save = save;

// console.log(data[0].owner.login);
// console.log(data[0].html_url);
//description: String  // console.log(data[0].description);
//updatedAt: String //console.log(data[0].updated_at);