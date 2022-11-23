const controllers = require('./controllers.js');
const router = require('express').Router();

router.post('/', controllers.add);
// router.get('/', controllers.get);
// router.patch('/', controllers.patch);
// router.delete('/', controllers.delete);

module.exports = router;