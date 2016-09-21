const Sequelize = require('sequelize');
require('dotenv').config();

var sequelize = new Sequelize('weekendr', process.env.db_username, process.env.db_password, {
  host: 'mysql.kanadachi.com',
  dialect: 'mysql',
  port: '3306',

  options: {
    timezone: 'America/Los_Angeles'
  }
});

sequelize
  .sync()
  .then(() => console.log('<Weekendr> User model sync() successful'))
  .catch(error => console.log('<Weekendr> Couldn\'t sync() User model'));

sequelize
.authenticate()
.then(() =>console.log('<Weekendr> Connected to DB'))
.catch(err => console.log('<Weekendr> Failed to connect to DB: ', err));

module.exports = sequelize;