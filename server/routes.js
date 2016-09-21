const userController = require('./controller/user.controller.js');

module.exports = (app, express) => {
  app.post('/api/createUser', userController.createUser);
  app.post('/api/signin', userController.authenticateUser);
}