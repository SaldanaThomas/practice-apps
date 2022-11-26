const db = require('./db');

module.exports = {
  get: (callback) => {
    db.query(`SELECT * FROM checkout`, (err, data) => {
      callback(err, data);
    });
  },

  post: ({sessionId, name, email, password, address, phone, card, expDate, cvv, billZip}, callback) => {
    db.query(`INSERT INTO checkout (sessionId, name, email, password, address, phone, card, expDate, cvv, billZip) VALUES ("${sessionId}", "${name}", "${email}", "${password}", "${address}", "${phone}", "${card}", "${expDate}", "${cvv}", "${billZip}")`, (err, data) => {
      callback(err, data)
    });
  }
};