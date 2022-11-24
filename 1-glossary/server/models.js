const db = require('./db');

module.exports = {
  add: (word, callback) => {
    db.insertMany(word, (err) => callback(err));
  },

  get: (callback) => {
    db.find({})
    .exec((err, data) => callback(err, data));
  },

  patch: (data, callback) => {
    let filter = {term: data.term};
    db.updateOne(filter, data)
    .exec(err => callback(err));
  },

  delete: (data, callback) => {
    db.deleteOne(data)
    .exec(err => callback(err));
  }
};