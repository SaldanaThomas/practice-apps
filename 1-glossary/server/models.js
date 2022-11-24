const db = require('./db');

module.exports = {
  add: (word, callback) => {
    db.add(word, (err) => {
      err ? callback(err) : callback(null);
    })
  },

  get: (callback) => {
    db.get((err, data) => {
      err ? callback(err) : callback(null, data);
    });
  },

  patch: (data, callback) => {
    db.patch(data, (err) => {
      err ? callback(err) : callback(null);
    });
  },

  delete: (data, callback) => {
    db.delete(data, (err) => {
      err ? callback(err) : callback(null);
    });
  }
};