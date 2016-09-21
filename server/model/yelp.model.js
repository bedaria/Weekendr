const _ = require('underscore');
const Yelp = require('yelp');
const yelpModel = module.exports;
const path = require('path');
require('dotenv').config();

const yelp = new Yelp({
  consumer_key: process.env.yelp_consumer_key,
  consumer_secret: process.env.yelp_consumer_secret,
  token: process.env.yelp_token,
  token_secret: process.env.yelp_token_secret
});

yelpModel.getBusiness = function(params) {
  yelp.search({ term: 'food', location: 'Montreal' })
    .then(function(data) {
      console.log('data from yelp: ', data);
      res.status(200).send(data);
    })
    .catch(function(err) {
      console.error('error in /yelp/search GET: ', err);
    });
};
