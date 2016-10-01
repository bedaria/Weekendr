const Promise = require('bluebird');
const _ = require('underscore');
const fourSquareModel = require('../model/foursquare.model');
const googleFlights = require('../model/googleFlights.model');
const airbnbModel = require('../model/airbnb.model');
const expediaHotelsModel = require('../model/expediaHotels.model');

/* ******** REQ.BODY ********
req.body inside receiveCity:
{ name: 'Los Angeles',
  id: 5368361,
  lat: 34.0522342,
  lng: -118.2436849,
  answers:
   [ { title: 'Transportation', option: [Object] },
     { title: 'Lodging', option: [Object] },
     { title: 'Outdoor Activities', option: [Object] },
     { title: 'Indoor Activities', option: [Object] } ],
  budget: '400',
  numTravelers: '3',
  date: '2016-10-01',
  origin:
   { latitude: 34.019292799999995,
     longitude: -118.49436989999998,
     address: '604 Arizona Ave, Santa Monica, CA 90401, USA',
     airport: '' } }
****************** */

// NEW RECEIVE CITY PROMISIFIED
function receiveCity(req, res) {
  console.log('inside receiveCity req.body is : ', req.body);
  const promiseArray = [];

  // TRANSPORTATION
  const first = _.first(req.body.answers);
  if (first.title === 'Transportation') {
    if (first.option.option === 'Car') {
      console.log('inside receivedCity we received Car');
    } else if (first.option.option === 'Airplane') {
      promiseArray.push(googleFlights.getFlights(req.body));
      console.log('inside receiveCity we receive Airplane');
    } else if (first.option.option === 'Train') {
      console.log('inside receiveCity we received Train');
    }
  }

  // LODGING
  const second = req.body.answers[1];
  if (second.option.option === 'Airbnb') {
    console.log('inside receivedCity we received Airbnb');
    promiseArray.push(airbnbModel.getListings(req.body));
  } else if (second.option.option === 'Hotel') {
    console.log('inside receivedCity we received Hotel');
    promiseArray.push(expediaHotelsModel.findHotels(req.body));
  }

  const answers = req.body.answers.slice(2);
  const fourSquarePromises = answers.map((answer) => {
    return fourSquareModel.explore(req.body, answer.option.id);
  });
  const newPromiseArray = promiseArray.concat(fourSquarePromises);

  Promise.all(newPromiseArray)
    .then((data) => {
      console.log('dataArr after promiseArray: ', data);
      // insert data handlers

      // manipulate data and change it to bundle
      // res.status(200).send(bundle) <--
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error inside receiveCity: ', err);
      res.status(500).end(err);
    });
}


exports.receive = {
  receiveCity,
};
