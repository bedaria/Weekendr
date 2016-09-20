var yelpModel = require('../model/yelp.model.js');

exports.yelp = {
	getActivities: getActivities
}

function getActivities(req,res) {
	console.log('we are inside yelpController inside getActivities')
	yelpModel.getBusiness(req.body)
	.then(function(result) {
		res.status(200).send(result)
	})
	.catch(function(err) {
		console.log('error inside yelp controller inside getActivities', err)
	})
}
