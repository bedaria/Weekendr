var searchModel = require('../model/search.model.js')
console.log('we are inside searchController')
exports.search = {
	getCity: getCity
}

function getCity(req, res) {
	console.log('*****req.body inside searchController inside getCity is: ',req.body)
	searchModel.getCity(req.body)
		.then(function(cityList) {
			console.log('result inside search.getCity inside searchController is : ', cityList)
			res.status(200).send(cityList)
		})
		.catch(function(err) {
			console.log('Error inside searchController inside getCity: ',err)
			res.status(500).end('Error inside searchController inside getCity')
		})
}



