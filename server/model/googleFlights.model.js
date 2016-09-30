require('dotenv').config();
const request = require('request');

const userFlights = module.exports;

userFlights.getFlights = (params) => {
  console.log(params, "This is params");

  const originCity = params.userInputForm.originCity;
  const selectedCity = params.cityName;
  const date = params.userInput.userInputForm.datePicker;
  const numTravelers = params.userInputForm.numTravelers;

  var options = { method: 'POST',
    url: 'https://www.googleapis.com/qpxExpress/v1/trips/search',
    qs: { key: process.env.GoogleFlights_API },
    headers: 
     { 'postman-token': 'a65c633a-e5d1-fc9a-5ea9-0357a2ff93c9',
       'cache-control': 'no-cache',
       'content-type': 'application/json' },
    body: 
     { request: 
        { slice: [ { origin: originCity, destination: selectedCity, date: date} ],
          passengers: 
           { adultCount: numTravelers,
             infantInLapCount: 0,
             infantInSeatCount: 0,
             childCount: 0,
             seniorCount: 0 },
          solutions: 10,
          refundable: false } },
    json: true };
  return new Promise((resolve, reject) => {
  request(options, function (error, response, body) {
    if (error) {
        res.status(500).end(error);
          return reject(console.log('error inside GoogleFlights inside getFlights:', error));
    } else {
        console.log(body);
        res.status(200)
          return resolve(body);
      }
    });
  })
}
