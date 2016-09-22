const User = require('../model/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

createUser = (req, resp) => {
  bcrypt.hash(req.body.password, 8, (err, hash) => {
    if (err)
      console.log("<Weekendr> Error hashing password (user.controller line 8): ", err)
    else
      User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
      })
      .then(newUser => {
        const token = jwt.sign(req.body, 'catsarecool');
        resp.send({token: token})
      })
      .catch(err => {
        console.log("<Weekendr> Error creating user (user.controller line 23): ", err)
        resp.send("ERROR")
      })
  })
}

authenticateUser = (req, resp) => {
  User.findOne({
    where: {
      userName: req.body.username
    }
  })
  .then(user => {
    if(!user)
      resp.send("ERROR")

    bcrypt.compare(req.body.password, user.dataValues.password, (err, isFound) => {
      if(isFound){
        const token = jwt.sign(req.body, 'catsarecool');
        resp.send({token: token,
          username: req.body.username,
          firstName: user.dataValues.firstName,
          lastName: user.dataValues.lastName,
          email: user.dataValues.email
        })
      }
      else {
        console.log("<Weekendr> Error authenticating user (user.controller line 46): ", err)
        resp.send("ERROR")
      }
    })
  })
  .catch((err) => console.log("<Weekendr> Error authenticating user (user.controller line 52): ", err))
}

exports.user = {
  createUser: createUser,
  authenticateUser: authenticateUser
}
