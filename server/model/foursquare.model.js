const categories = require('./foursquareData/foursquareCategoryJSON.js')
require('dotenv').config();
const request = require('request');


fourSquareModel = module.exports;
 /* Map state to props inside TripList and send it here
   Search through categories to see if there are matches between
   answers params sent in through front end and categories and
   then use ID from categories array if there is a match and put that into
   the qs request object
 */

fourSquareModel.explore = (params) => {
  // console.log('params inside fourSquareModel inside search', params);
  // console.log('title inside answers inside fourSquareModel: ', params.answers[3].title);
  // console.log('option inside answers inside fourSquareModel: ', params.answers[3].option);
  // console.log('id inside answers inside fourSquareModel: ', params.answers[3].option.id);
  const lat = params.lat.toString();
  const lng = params.lng.toString();
  const ll = '' + lat + ',' + lng;
  // use for number of api calls in array
  const lengthOfCalls = params.answers.length - 2;
  const qs = {
    client_id: process.env.foursquare_client_id,
    client_secret: process.env.foursquare_client_secret,
    v: '20130815',
    categoryId: params.answers[3].option.id,
    ll,
    intent: 'browse',
  };
  return new Promise((resolve, reject) => {
    const options = {
      uri: 'https://api.foursquare.com/v2/venues/explore',
      qs,
    };
    request(options, ((error, response, body) => {
      if (error) {
        return reject(console.log('error inside fourSquareModel inside explor: ', error));
      }
      return resolve(body);
    }));
  });
};


fourSquareModel.rank = (params) => {
  console.log('params coming into foursquareDAta are: ', params);
}
