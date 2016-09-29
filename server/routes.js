const userController = require('./controller/user.controller.js');
// const yelpController = require('./controller/yelp.controller.js');
<<<<<<< f718a3a84d9268ca0d83ef4d4a1b72acdf0e2520
const receiveController = require('./controller/receive.controller.js');
const searchController = require('./controller/search.controller.js');
<<<<<<< bb1b86cad71210207a1585ff1c2d4cae62c7bd65
const googleFlightsController = require('./controller/googleFlights.controller.js');
=======
=======
const searchController = require('./controller/search.controller.js');
const googleFlightsController = require('./controller/googleFlights.controller.js');
>>>>>>> [feature] - backend beginnign
>>>>>>> [feature] - backend beginnign

module.exports = (app, express) => {
  app.post('/api/createUser', userController.user.createUser);
  app.post('/api/signin', userController.user.authenticateUser);
  app.post('/api/googleFlights', googleFlightsController.googleFlights.getFlights);

  app.post('/api/search/getCity', searchController.search.getCity);
  app.post('/api/receive/receiveCity', receiveController.receive.receiveCity);
}