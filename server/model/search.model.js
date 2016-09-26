require('dotenv').config();

const request = require('request');

const searchModel = module.exports;

searchModel.getCity = ((params) => {
  console.log('params inside searchModel.getCity : ', params);

  // increment radius function on next request
  const changeLocationBoundaryWithModifier = searchModel.getBoxGivenLatLng(params.coordinates);

  // budget be params.userInput.userInputForm.budget and come in as string
  const costPerMile = 0.5
  const budget = params.userInputForm.budget;
  const percentBudget = 0.40
  const multiplier = searchModel.determineMultiplier(budget, costPerMile, percentBudget);
  const qs = changeLocationBoundaryWithModifier(multiplier);
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
      return resolve(body);
    }));
  });
});

searchModel.getBoxGivenLatLng = ((latLng) => {
  return function multiplier(num) {
    console.log('inside getBoxGivenLatLng num is: ', num)
    return {
    "north": latLng.latitude + latLng.latitude / num,
    "south": latLng.latitude - latLng.latitude / num,
    "west":  latLng.longitude + latLng.longitude / num,
    "east":  latLng.longitude - latLng.longitude / num,
    "lang": 'en',
    "username" : process.env.geoname_username
    };
  };
});


searchModel.determineMultiplier = ((budget, costPerMile, percentBudget) => {
  return (((percentBudget * budget) / costPerMile) / 4)
})
