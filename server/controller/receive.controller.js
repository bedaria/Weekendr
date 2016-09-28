const searchGooglePlacesModel = require('../model/searchGoooglePlaces.model.js');

exports.receive = {
  receiveCity: receiveCity
}

 /* req.body inside request 
  { 
  cityName: 'Los Angeles',
  population: 3792621,
  id: 5368361,
  lat: 34.0522342,
  lng: -118.2436849
  }*/



function receiveCity(req, res){
  console.log('inside receiveCity req.body is: ', req.body);
  searchGooglePlacesModel.searchGooglePlaces(req.body);

}