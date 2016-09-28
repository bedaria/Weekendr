const categories = require('./categories.js')
require('dotenv').config();
const request = require('request');



fourSquareModel = module.exports;

 /* Map state to props inside TripList and send it here
   Search through categories to see if there are matches between
   answers params sent in through front end and categories and
   then use ID from categories array if there is a match and put that into
   the qs request object
 */

fourSquareModel.explore = function(params) {
  console.log('params inside fourSquareModel inside search',params)
  const qs = {
    client_id: process.env.foursquare_client_id,
    client_secret: process.env.foursquare_client_secret,
    v: '20130815',
    ll: [34, -118],
    categoryId: '4fceea171983d5d06c3e9823'
  }
  return new Promise((resolve, reject) => {
    const options = {
      uri: 'https://api.foursquare.com/v2/venues/explore',
      qs
    }
    request(options, ((error, response, body) => {
       if (error) {
        return reject(console.log('error inside fourSquareModel inside explor: ', error));
      }
      // console.log('body is: ', body);
      return resolve(body);
    }));
  });
};