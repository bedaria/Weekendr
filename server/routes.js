const userController = require('./controller/user.controller.js');
// const yelpController = require('./controller/yelp.controller.js');
const searchController = require('./controller/search.controller.js');
const googleFlightsController = require('./controller/googleFlights.controller.js');

module.exports = (app, express) => {
  app.post('/api/createUser', userController.user.createUser);
  app.post('/api/signin', userController.user.authenticateUser);
  app.post('/api/googleFlights', googleFlightsController.googleFlights.getFlights);

  app.post('/api/search/getCity', searchController.search.getCity)
}