const userController = require('./controller/user.controller.js');

module.exports = (app, express) => {
  app.post('/api/createUser', userController.user.createUser);
  app.post('/api/signin', userController.user.authenticateUser);
}