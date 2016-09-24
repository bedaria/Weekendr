var searchModel = require('../model/search.model.js')
console.log('we are inside searchController')
exports.search = {
	getCity: getCity
}

function getCity(req, res) {
	console.log('req.body is: ',req.body)
	searchModel.getCity(req.body)
		.then(function(result) {
			console.log('result inside search.getCity inside searchModel is : ', result)
			res.status(200).send(result)
		})
		.catch(function(err) {
			console.log('Error inside searchController inside getCity: ',err)
			res.status(500).end('Error inside searchController inside getCity')
		})
}


