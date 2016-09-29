require('dotenv').config();
const request = require('request');

expediaHotelsModel = module.exports;

expediaHotelsModel.findHotels = (params) => {
  const qs = {
    apikey: process.env.expedia_consumer_key,
    room1: params.rooms,
    checkInDate: params.weekend,
    checkOutDate: parseInt(checkInDate) + 2
  };

  return new Promise((resolve, reject) => {
    const url = {
      uri: 'http://terminal2.expedia.com/x/mhotels/search',
      qs
    };

    request(url, (error, response, body) => {
      if (error)
         return reject(error);

      return resolve(body);
    });
  });
};

