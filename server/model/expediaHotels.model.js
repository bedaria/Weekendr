const Promise = require('bluebird');
require('dotenv').config();
const request = require('request');

expediaHotelsModel = module.exports;

expediaHotelsModel.findHotels = (params) => {
  const budget = params;
  var checkOutDate = params.date.split("-")

  checkOutDate[2] = parseInt(checkOutDate[2]) + 2
  convert = (str) => {
    if(str.length === 1) return 0 + str
    else return str
  }
  checkOutDate = checkOutDate.map(strNum => {
    return convert(strNum.toString())
  })

  const qs = {
    apikey: process.env.expedia_consumer_key,
    room1: params.numTravelers,
    checkInDate: params.date,
    checkOutDate: checkOutDate.join("-"),
    city: params.name
  };

  return new Promise((resolve, reject) => {
    const url = {
      method: 'GET',
      uri: 'http://terminal2.expedia.com/x/mhotels/search',
      qs
    };

    request(url, (error, response, body) => {
      if (error)
         return reject(error);

      return resolve(JSON.parse(body).hotelList.filter(hotel => hotel.isHotelAvailable));
    });
  });
};
