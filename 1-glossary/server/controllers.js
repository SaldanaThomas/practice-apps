const models = require('./models.js');

module.exports = {
  add: (req, res) => {
    console.log('IN MODELS ----ADD----', req.body);
    models.get(req.body, (err) => {
      console.log('RETURN TO MODELS');
      err ? res.status(404).send() : res.status(201).send();
    });
  }//,

  // get: (req, res) => {
  //   console.log('IN MODELS ----GET----');
  //   models.get((err, data) => {
  //     err ? res.status(404).send() : res.status(200).send(data);
  //   });
  // },

  // patch: (req, res) => {
  //   console.log('IN MODELS ----PATCH----', req.body);
  //   models.update(req.body, (err) => {
  //     err ? res.status(404).send() : res.status(202).send();
  //   });
  // },

  // delete: (req, res) => {
  //   console.log('IN MODELS ----DELETE----', req.body);
  //   models.remove(req.body, (err) => {
  //     err ? res.status(404).send() : res.status(203).send();
  //   });
  // },
};