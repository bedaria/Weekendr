require('dotenv').config();
const request = require('request');

const userFlights = module.exports;

userFlights.getFlights = (params) => {
  const originCity = params.origin.airport;
  const destinLat = params.lat;
  const destinLong = params.lng;
  var destinationCity = '';
  const date = params.date;
  const numTravelers = Number(params.numTravelers);

  var options1 = { method: 'GET',
    url: 'https://airport.api.aero/airport/nearest/' + destinLat  + '/' + destinLong, 
    qs: { user_key: process.env.airport_API },
    headers: 
     { 'postman-token': 'fdabd356-6d99-3917-fc45-f2107c01af12',
       'cache-control': 'no-cache',
       'content-type': 'application/json' 
     } 
  };


  const flights =  new Promise((resolve, reject) => {
    request(options1, function (error, response, body) {
      if (error) {
          reject('error inside airport inside getFlights:'+ error);
      } else {
          function parseForMike(str) {
            var stringify = JSON.stringify(str)
            var parsed = JSON.parse(stringify)
            parsed = parsed.slice(9)
            parsed = parsed.split('')
            parsed[parsed.length -1] = ''
            parsed = parsed.join('')
            return JSON.parse(parsed);
          }
          var airportName = parseForMike(body);
          destinationCity = airportName.airports[0].code;
          resolve(body);
      }
    })
  })

    return flights.then(function(body){
      console.log(body, "body!!")
        var options2 = { method: 'POST',
        url: 'https://www.googleapis.com/qpxExpress/v1/trips/search',
        qs: { key: process.env.GoogleFlights_API },
        headers: 
         { 'postman-token': 'a65c633a-e5d1-fc9a-5ea9-0357a2ff93c9',
           'cache-control': 'no-cache',
           'content-type': 'application/json' },
        body: 
         { request: 
            { slice: [ { origin: originCity, destination: destinationCity, date: date} ],
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
        request(options2, function(error, response, body) {
          if (error) {
            return reject('error inside airport inside getFlights:'+ error);
          } else {
            console.log("originCity", originCity);
            console.log("destinationCity", destinationCity);
            console.log(body, "BODY2");
            return resolve(body);
          }
        })
      })
    })
}