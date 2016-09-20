var router = require('express').Router();
var controller = require('../controller/yelp.controller.js');

router.get('/activities', controller.yelp.getActivities)

module.exports = router;