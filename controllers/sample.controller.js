var router = require('express').Router();
var appRoot = require('app-root-path');
var service = require(appRoot + '/services/sample.service')(require(appRoot + '/helpers/http'));

router.get('/', (req, res) => service.getSample().then(data => res.send(data)));

module.exports = router;