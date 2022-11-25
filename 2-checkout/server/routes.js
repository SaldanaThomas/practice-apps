const controllers = require('./controllers');
const router = require('express').Router();

router.get('/', controllers.get);
router.post('/', controllers.post);

module.exports = router;