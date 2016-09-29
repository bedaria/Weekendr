var router = require('express').Router();
var controller = require('../controller/googleFlights.controller.js');

router.post('/activities', controller.googleFlights.getFlights);

module.exports = router;
