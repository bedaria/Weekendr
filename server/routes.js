const userController = require('./controller/user.controller.js');
// const yelpController = require('./controller/yelp.controller.js');
const searchController = require('./controller/search.controller.js')

module.exports = (app, express) => {
  app.post('/api/createUser', userController.user.createUser);
  app.post('/api/signin', userController.user.authenticateUser);
  app.post('/api/authorize', userController.user.authorizeUser);


  app.post('/api/search/getCity', searchController.search.getCity)
}