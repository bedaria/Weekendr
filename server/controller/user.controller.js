const User = require('../model/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = (req, resp) => {
  bcrypt.hash(req.body.password, 8, (err, hash) => {
    if (err)
      console.log("<Weekendr> Error hashing password (user.controller line 8): ", err)
    else
      User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        fullName: null,
        facebookId: null,
        profilePhoto: null
      })
      .then(newUser => {
        const token = jwt.sign({userName: req.body.userName}, 'catsarecool');
        resp.resp({token: token,
          userName: req.body.userName,
          firstName: req.body.firstName})
      })
      .catch(err => {
        console.log("<Weekendr> Error creating user (user.controller line 23): ", err)
        resp.send("ERROR")
      })
  })
}

const authenticateUser = (req, resp) => {
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
        const token = jwt.sign({userName: req.body.username}, 'catsarecool');
        resp.send({token: token,
          userName: user.userName,
          firstName: user.firstName})
      }
      else {
        console.log("<Weekendr> Error authenticating user (user.controller line 46): ", err)
        resp.send("ERROR")
      }
    })
  })
  .catch((err) => console.log("<Weekendr> Error authenticating user (user.controller line 52): ", err))
}

const authorizeUser = (req, resp) => {
  jwt.verify(req.body.token, 'catsarecool', (err, decoded) => {
    if(err) resp.send({error: "Please log in."})
    else {
      if(decoded.userName) {
        User.findOne({
          where: {
            userName: decoded.userName
          }
         })
         .then(user => {
           resp.send({
            email: user.email,
            lastName: user.lastName
           })
         })
         .catch(err => resp.send({error: "Couldn't find user."}))
        }
      else console.log("Username not encoded correctly")
    }
  })
}

exports.user = {
  createUser: createUser,
  authenticateUser: authenticateUser,
  authorizeUser: authorizeUser
}
