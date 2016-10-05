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
  budget: '400',
  numTravelers: '3',
  date: '2016-10-01',
  origin:
   { latitude: 34.019292799999995,
     longitude: -118.49436989999998,
     address: '604 Arizona Ave, Santa Monica, CA 90401, USA',
     airport: '' } }
****************** */

  /*
  Things to add to req.body
  1) Country code: Ie. USA, MX, CN, FR
  */


// NEW RECEIVE CITY PROMISIED
function receiveCity(req, res) {
  // console.log('inside receiveCity req.body is : ', req.body);
  const promiseArray = [];
  var activity1 = req.body.answers[3].option.option
  var activity2 = req.body.answers[2].option.option

  // TRANSPORTATION
  // follow the same pattern below for insertion of Car, Airplane, and Train Models
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
  if (second.title === 'Lodging') {
    if (second.option.option === 'Airbnb') {
      console.log('inside receivedCity we received Airbnb');
      promiseArray.push(airbnbModel.getListings(req.body));
    } else if (second.option.option === 'Hotel') {
      console.log('inside receivedCity we received Hotel');
      promiseArray.push(expediaHotelsModel.findHotels(req.body));
    } else if (second.option.option === 'Hostel') {
        console.log('inside receivedCity we received Hostel');
    }
  }

  const answers = req.body.answers.slice(2);
  const fourSquarePromises = answers.map((answer) => {
    return fourSquareModel.explore(req.body, answer.option.id);
  });
  const newPromiseArray = promiseArray.concat(fourSquarePromises);
  const selectedCategoriesArray = req.body.answers.map((answer) => {
    return {
      title: answer.title,
      id: answer.option.id,
      option: answer.option.option,
    };
  });

var createBundles = (transportation, hotels, activities) => {
  var bundles = []
  var budgetDistribution = {transportation: 0.4, lodging: 0.4, activities: 0.2}

  if(transportation) {
    var addTransportation = []

    if(!bundles.length)
      bundles = [[{'transportation': 'None'}]]

    bundles.forEach(bundle => {
      transportation.tripOption.forEach(transportation => {
          var bundleCopy = bundle.slice()
          bundleCopy.push({'transportation': transportation})
          addTransportation.push(bundleCopy)
      })
    })

    bundles = addTransportation
  }

  if(hotels.length > 0) {
    var addHotel = []
    console.log("hotels before each: ")
    if(!bundles.length)
        bundles = [[{transportation: 'Travel by car!'}]]

    console.log("hotels")
    bundles.forEach(bundle => {
        hotels.forEach(hotel => {
            if(Number(hotel.lowRate)  < budgetDistribution.lodging * req.body.budget) {
              var bundleCopy = bundle.slice()

              bundleCopy.push({ 'hotel':
                {name: hotel.name,
                 address: hotel.address,
                 city: hotel.city,
                 hotelStarRating: hotel.hotelStarRating,
                 hotelGuestRating: hotel.hotelGuestRating,
                 pic: hotel.thumbnailUrl,
                 lowRate: hotel.lowRate
                }
              })
              addHotel.push(bundleCopy)
            }
        })
      })
    console.log("after hotels")
    bundles = addHotel
  }

  console.log("before activities length: ", activities[0].length)
  if(activities && activities.length) {
    var addActivity = []

    if(!bundles.length)
      bundles = [[{'lodging': 'Stay with a Friend!'}, {'transportation': 'Travel by Car!'}]]

    var activity1 = req.body.answers[2].option.option
    var activity2 = req.body.answers[3].option.option

    bundles.forEach(bundle => {
      activities.forEach(activity => {
        activity.forEach(act => {

          if(act.category === activity1) {

            var bundleCopy = bundle.slice()
            bundleCopy.push({'activity1': {
                category: act.category,
                results: act.results
              }
            })
            addActivity.push(bundleCopy)
          }
        })
        bundles = addActivity
      })
    })

    addActivity = []
    bundles.forEach(bundle => {
      activities.forEach(activity => {
        activity.forEach(act => {

          if(act.category === activity2) {

            var bundleCopy = bundle.slice()
            bundleCopy.push({'activity2': {
                category: act.category,
                results: act.results
              }
            })
            addActivity.push(bundleCopy)
          }
        })

      })
    })
    console.log("activities after")
    bundles = addActivity
  }

  if(!bundles.length)
    bundles = [[{'transportation': 'Sorry nothing found'}, {'lodging': 'Sorry nothing found'}, {'activities': 'Sorry nothing found'}]]

  console.log("bundles: ", bundles.length)
  if(bundles.length >= 6)
    return bundles.slice(0,6)
  else return bundles
}

  Promise.all(newPromiseArray)
  .then((dataArray) => {
    const bundle = [];

    const fourSquareDataArray = dataArray.slice(2);

    bundle.push(fourSquareModel.parseFourSquareData(fourSquareDataArray, selectedCategoriesArray)); //add country later

    var bundles = createBundles(dataArray[0], dataArray[1], bundle)
    console.log("bundles.length: ", bundles.length)
    res.status(200).send(bundles);

  })
  .catch((err) => {
    console.log('error inside receiveCity: ', err);
    res.status(500).end(err);
  });
}

exports.receive = {
  receiveCity,
};
