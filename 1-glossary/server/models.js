const db = require('./db');


module.exports = {
  add: (data, callback) => {
    console.log('INSIDE CONTROLLERS');
    db.add(data, (err) => {
      err ? callback(err) : callback(null);
    })
  }//,

  // get: (callback) => {
  //   db.get((err, data) => {
  //     err ? callback(err) : callback(null, data);
  //   });
  // },

  // patch: (data, callback) => {
  //   db.get(data, (err) => {
  //     err ? callback(err) : callback(null);
  //   });
  // },

  // delete: (data, callback) => {
  //   db.get(data, (err) => {
  //     err ? callback(err) : callback(null);
  //   });
  // }
};