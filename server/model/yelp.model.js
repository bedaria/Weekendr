var _ = require('underscore');
var Yelp = require('yelp')
var yelpModel = module.exports
var path = require('path')
require('dotenv').config()

var yelp = new Yelp({
	consumner_key: process.env.yelp_consumer_key,
	consumner_secret: process.env.yelp_consumer_secret,
	token: process.env.yelp_token,
	token_secret: process.env.yelp_token_secret
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

