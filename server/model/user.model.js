const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fullName: {
    type: Sequelize.STRING
  },
  facebookId: {
    type: Sequelize.STRING
  },
  profilePhoto: {
    type: Sequelize.STRING
  }
});

User
  .sync()
  .then(() => console.log('<Weekendr> User model sync() successful'))
  .catch(error => console.log('<Weekendr> Couldn\'t sync() User model'));

module.exports = User;
