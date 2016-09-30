const userController = require('./controller/user.controller');
const receiveController = require('./controller/receive.controller');
const searchController = require('./controller/search.controller');
const airbnbController = require('./controller/airbnb.controller');
const googleFlightsController = require('./controller/googleFlights.controller');

module.exports = (app, express) => {
  // user
  app.post('/api/createUser', userController.user.createUser);
  app.post('/api/signin', userController.user.authenticateUser);

  // receive
  app.post('/api/receive/receiveCity', receiveController.receive.receiveCity);

  // search
  app.post('/api/search/getCity', searchController.search.getCity);

  // google flights
  app.post('/api/googleFlights', googleFlightsController.googleFlights.getFlights);

  // airbnb
  app.post('/api/airbnb/getListings', airbnbController.listings.get);
};
