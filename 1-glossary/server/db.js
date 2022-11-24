const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');

const repoSchema = mongoose.Schema({
  term: {type: String, unique: true},
  definition: String
});

const repo = mongoose.model('Repo', repoSchema);

module.exports = {
  add: (word, callback) => {
    repo.insertMany(word, (err) => {
      callback(err);
    })
  },

  get: (callback) => {
    repo.find({})
    .exec((err, data) => {
      callback(err, data);
    })
  },

  patch: (word, callback) => {
    let filter = {term: word.term};
    repo.updateOne(filter, word)
    .exec(err => callback(err));
  },

  delete: (word, callback) => {
    repo.deleteOne(word)
    .exec(err => callback(err));
  }
};