require('dotenv').config();

const request = require('request');

const searchModel = module.exports;


searchModel.getCity = (params) => {
  console.log('params inside searchModel.getCity : ', params);
  /* if user selects Car as mode of transport cost per mile = 0.5 */
  console.log('***params answers', params.answers[0].option.option);
  let costPerMile = 0.5;
  let budget = params.userInputForm.budget;
  if (params.answers[0].option.option === 'Airplane') {
    costPerMile -= 0.39;
    budget -= 50;
  }
  const percentBudget = 0.40;
  console.log('budget with plane or car: ', budget);
  console.log('costpermine', costPerMile)
  const qs = searchModel.getCoordinates(params.coordinates, budget, costPerMile, percentBudget);
  console.log('qs inside searchModel inside getCity is: ', qs);
  return new Promise((resolve, reject) => {
    const options = {
      uri: 'http://api.geonames.org/citiesJSON',
      qs,
    };
    request(options, ((error, response, body) => {
      if (error) {
        return reject(console.log('error inside searchModel inside getCity: ', error));
      }
      console.log('body is: ', body);
      return resolve(body);
    }));
  });
};


searchModel.getCoordinates = (latLng, budget, costPerMile, percentBudget) => {
  const miles = (((percentBudget * budget) / costPerMile));
  const milesAtEquator = 69.172;
  const milesToDegreesLongitude = () => {
    return ((Math.cos(latLng.latitude)) * (miles / milesAtEquator));
  };

  const milesToDegreesLatitude = () => {
    return miles / milesAtEquator;
  };

  const degreesLatitude = milesToDegreesLatitude(miles);
  const degreesLongitude = milesToDegreesLongitude(miles);

  const getBoxGivenLatLng = (degLat, degLng) => {
    return {
      "north": latLng.latitude + degLat,
      "south": latLng.latitude - degLat,
      "west": latLng.longitude + degLng,
      "east": latLng.longitude - degLng,
      "lang": 'en',
      "username" : 'jcmitch',
      };
  };
  const result = getBoxGivenLatLng(degreesLatitude, degreesLongitude);
  return result;
};
