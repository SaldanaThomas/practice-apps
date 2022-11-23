const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');

const repoSchema = mongoose.Schema({
  term: {type: String, unique: true},
  definition: String
});

const repo = mongoose.model('Repo', repoSchema);

module.exports = {
  add: (data, callback) => {
    console.log('IN DATABASE');
    repo.insertMany(data, (err) => {
      callback(err);
    })
  }//,

  // get: (callback) => {
  //   repo.find({})
  //   .exec((err, data) => {
  //     callback(err, data);
  //   })
  // }
};