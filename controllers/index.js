var router = require('express').Router();

router.use('/sample', require('./sample.controller'));

module.exports = router;