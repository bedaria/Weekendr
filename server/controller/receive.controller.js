const Promise = require('bluebird');
const _ = require('underscore');
const fourSquareModel = require('../model/foursquare.model');
const googleFlights = require('../model/googleFlights.model');
const airbnbModel = require('../model/airbnb.model');


/****** REQ.BODY  ********
 req.body inside receiveCity { name: 'Tijuana',
  id: 3981609,
  lat: 32.502698,
  lng: -117.003714,
  answers:
   [ { title: 'Transportation', option: [Object] },
     { title: 'Lodging', option: [Object] },
     { title: 'Outdoor Activities', option: [Object] },
     { title: 'Indoor Activities', option: [Object] } ],
  budget: '500',
  numTravelers: '3',
  date: '2016-12-31',
  origin:
   { latitude: 34.019224699999995,
     longitude: -118.49427560000001,
     airport: '' } }
  * ******************/


// NEW RECEIVE CITY PROMISIED
function receiveCity(req, res) {
  // console.log('inside receiveCity req.body is : ', req.body);
  const promiseArray = [];

  //follow the same pattern below for insertion of Car, Airplane, and Train Models
  const first = _.first(req.body.answers);
  if (first.title === 'Transportation') {
    if (first.option.option === 'Car') {
      console.log('inside receivedCity we received Car');
    } else if (first.option.option === 'Airplane') {
      console.log('inside receiveCity we receive Airplane');
    } else if (first.option.option === 'Train') {
      console.log('inside receiveCity we received Train');
    }
  }

  const second = req.body.answers[1];
  if (second.title === 'Lodging') {
    if (second.option.option === 'Hostel') {
      console.log('inside receivedCity we received Hostel');
      // push invoked Hostel model into promiseArray
      // promiseArray.push()
    } else if (second.option.option === 'Airbnb') {
      console.log('inside receivedCity we received Airbnb');
      // SAM
      // push invoked Airbnb model into promiseArray
      // promiseArray.push()
    } else if (second.option.option === 'Hotel') {
      console.log('inside receivedCity we received Hotel');
      // Daria
      // push invoked Hotel model into promiseArray
      // promiseArray.push()
    }
  }
  const answers = req.body.answers.slice(2);
  const fourSquarePromises = answers.map((answer) => {
    return fourSquareModel.explore(req.body, answer.option.id);
  });
  const newPromiseArray = promiseArray.concat(fourSquarePromises);

  Promise.all(newPromiseArray)
  .then((data) => {
    // console.log('dataArr after promiseArray: ', dataArr);
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
