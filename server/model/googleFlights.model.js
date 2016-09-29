var request = require('request');


var userFlights = module.exports;

userFlights.getFlights = function(params){
  console.log(params, "This is params");
  // var options = { method: 'POST',
  //   url: 'https://www.googleapis.com/qpxExpress/v1/trips/search',
  //   qs: { key: 'AIzaSyAHEeYona8aTh93TTK8a6420E1hYB5SocQ' },
  //   headers: 
  //    { 'postman-token': 'a65c633a-e5d1-fc9a-5ea9-0357a2ff93c9',
  //      'cache-control': 'no-cache',
  //      'content-type': 'application/json' },
  //   body: 
  //    { request: 
  //       { slice: [ { origin: originCity, destination: selectedCity, date: this.params.userInput.userInputForm.datePicker } ],
  //         passengers: 
  //          { adultCount: 1,
  //            infantInLapCount: 0,
  //            infantInSeatCount: 0,
  //            childCount: 0,
  //            seniorCount: 0 },
  //         solutions: 10,
  //         refundable: false } },
  //   json: true };

  // request(options, function (error, response, body) {
  //   if (error) {
  //       res.status(500).end(error);

  //   } else {
  //       console.log(body);
  //       res.status(200).send(body);
  //   }
  // });
}
