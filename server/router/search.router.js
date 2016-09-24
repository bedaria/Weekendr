var router = require('express').Router();
var controller = require('../controller/search.controller.js');

router.get('/getcity', controller.search.getCity)

module.exports = router;