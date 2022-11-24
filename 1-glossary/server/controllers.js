const models = require('./models.js');

module.exports = {
  add: (req, res) => {
    models.add(req.body, (err) => {
      err ? res.status(404).send() : res.status(201).send();
    });
  },

  get: (req, res) => {
    models.get((err, data) => {
      err ? res.status(404).send() : res.status(200).send(data);
    });
  },

  patch: (req, res) => {
    models.patch(req.body, (err) => {
      err ? res.status(404).send() : res.status(202).send();
    });
  },

  delete: (req, res) => {
    console.log('CONTROLLERS -> ', req.body);
    models.delete(req.body, (err) => {
      err ? res.status(404).send() : res.status(203).send();
    });
  }
};