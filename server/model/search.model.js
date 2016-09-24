var _ = require('lodash');
require('dotenv').config();
var request = require('request');

var searchModel = module.exports;

searchModel.getCity = function(params) {
	console.log('params inside searchModel.getCity : ', params)
	console.log('params should be lat,lng')
	var latLng = {
		lat: 34,
		lng: 118
	}

	//increment radius function on next request
	var changeLocationBoundaryWithModifier = searchModel.getBoxGivenLatLng(latLng)

	//budget be params.userInput.userInputForm.budget and come in as string
	var budget = 1.05
	var qs = changeLocationBoundaryWithModifier(budget) 
	console.log('data inside searchModel inside getCity is: ',qs)
	return new Promise(function(resolve, reject) {
		var options = {
			uri: 'http://api.geonames.org/citiesJSON',
			qs: qs
		}
		request(options, function(error, response, body) {
			if (error) {
				console.log('error inside searchModel inside getCity: ',error)
			}  else {
				return resolve(body)
			}
		})
	})
}

searchModel.getBoxGivenLatLng = function(latLng) {
	return function multiplier(num) {
		return {
			"north": num * latLng.lat,
			"south": latLng.lat / num,
			"east": latLng.lng / num,
			"west": num * latLng.lng,
			"lang": 'en',
			"username" : process.env.geoname_username
		}
	}
}



