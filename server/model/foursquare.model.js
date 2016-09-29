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
  // console.log('answers inside fourSquareModel: ', params.answers[3].title);
  // console.log('answers inside fourSquareModel: ', params.answers[3].option)
  const lat = params.lat.toString();
  const lng = params.lng.toString();
  const ll = '' + lat + ',' + lng;
  const lengthOfCalls = params.answers.length - 2;
  console.log('lengthOfCalls: ', lengthOfCalls);
  const qs = {
    client_id: process.env.foursquare_client_id,
    client_secret: process.env.foursquare_client_secret,
    v: '20130815',
    categoryId: '4fceea171983d5d06c3e9823',
    ll,
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
