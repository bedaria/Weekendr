require('dotenv').config();
const request = require('request');

expediaHotelsModel = module.exports;

expediaHotelsModel.findHotels = (params) => {
  const budget = params;

  const qs = {
    apikey: process.env.expedia_consumer_key,
    room1: params.numberOfTravelers,
    checkInDate: params.date,
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

      const filtered = body.hotelList
        .filter(hotel =>
          hotel.isHotelAvailable && parseFloat(hotel.lowRateInfo.formattedTotalPriceWithMandatoryFees) < .4 * budget)
      return resolve(filtered);
    });
  });
};
