var _ = require('lodash');
require('dotenv').config();
var request = require('request');

var searchModel = module.exports;

searchModel.getCity = function(params) {
	console.log('params inside searchModel.getCity : ', params)
	console.log('params should be lat,lng')
	// var params = {
	// 	lat: '1',
	// 	lng: '2'
	// }
	var latLng = {
		lat: 34,
		lng: 118
	}
	//price
	var changeBoxWithModifier = searchModel.getBoxGivenLatLng(latLng)
	//increment radius function on next request
	let p = 1.05
	let qs = changeBoxWithModifier(p) 
	console.log('data inside searchModel inside getCity is: ',qs)
	return new Promise(function(resolve, reject) {
		request.get('http://api.geonames.org/citiesJSON?north='+qs.north+ '&south=' + qs.south + '&east='+qs.east+'&west='+qs.west+'&lang=de&username='+qs.username, qs, function(err, response, body){
			if (!err) {
				console.log('body is: ', body)
				resolve(body)
			}  else {
				reject(err)
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



