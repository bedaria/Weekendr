const Promise = require('bluebird');
const _ = require('underscore');
const fourSquareModel = require('../model/foursquare.model');
const googleFlights = require('../model/googleFlights.model');
const airbnbModel = require('../model/airbnb.model');
const expediaHotelsModel = require('../model/expediaHotels.model');



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
  console.log('inside receiveCity req.body is : ', req.body);
  const promiseArray = [];

  //follow the same pattern below for insertion of Car, Airplane, and Train Models
  const first = _.first(req.body.answers);
  if (first.title === 'Transportation') {
    if (first.option.option === 'Car') {
      console.log('inside receivedCity we received Car');
    } else if (first.option.option === 'Airplane') {
      // promiseArray.push(googleFlights.getFlights(req.body));
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
      // promiseArray.push(airbnbModel.listings.get(req.body));
    } else if (second.option.option === 'Hotel') {
      console.log('inside receivedCity we received Hotel');
      // promiseArray.push(expediaHotelsModel.findHotels(req.body))
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
  .then((dataArray) => {
    console.log('received data from all API calls inside receiveCity:dataArray length ', dataArray.length);
    var fourSquareDataArray = dataArray; //put dataArray.slice(2) when  other models are fixed
    fourSquareModel.parseFourSquareData(fourSquareDataArray);
    // console.log(':::',fourSquareDataArray)
    // console.log('dataArr after promiseArray: ', dataArr);
    // insert data handlers

    // manipulate data and change it to bundle
    // res.status(200).send(bundle) <--
    res.status(200).send(dataArray);

  })
  .catch((err) => {
    console.log('error inside receiveCity: ', err);
    res.status(500).end(err);
  });
}


exports.receive = {
  receiveCity,
};
