const models = require('./models');

module.exports = {
  get: (req, res) => {
    models.get((err, data) => {
      err ? res.status(404).send() : res.status(200).send(data);
    });
  },

  post: (req, res) => {
    console.log('CONTROLLERS/POST -> ', req.body);
    models.post(req.body, (err) => {
      if (err) {
        console.log(err);
        res.status(404).send();
      } else {
        res.status(201).send();
      }
    });
  }
};