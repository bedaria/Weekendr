var _ = require('underscore');
var Yelp = require('yelp')
var yelpModel = module.exports
var path = require('path')
require('dotenv').config()

var yelp = new Yelp({
	//use auth here
})
yelpModel.getBusiness = function(params) {
	yelp.search({term: 'food', location: 'Montreal'})
	.then(function(data) {
		console.log('data from yelp: ',data)
		res.status(200).send(data)
	})
	.catch(function(err) {
		console.log('error in /yelp/search GET: ',err)
	})
}

