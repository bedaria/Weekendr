require('dotenv').config();

const request = require('request');

const searchModel = module.exports;

searchModel.getCity = ((params) => {
  console.log('params inside searchModel.getCity : ', params);

  // increment radius function on next request
  const changeLocationBoundaryWithModifier = searchModel.getBoxGivenLatLng(params.coordinates);

  // budget be params.userInput.userInputForm.budget and come in as string
  const budget = params.userInputForm.budget;
  const a = 1.09;
  const qs = changeLocationBoundaryWithModifier(budget * a);
  console.log('data inside searchModel inside getCity is: ', qs);
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
    return {
    "north": num * latLng.latitude,
    "south": latLng.latitude / num,
    "east": latLng.longitude / num,
    "west": num * latLng.longitude,
    "lang": 'en',
    "username" : process.env.geoname_username
    };
  };
});
