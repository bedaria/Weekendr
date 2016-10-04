const User = require('../model/user.model.js');

// passport.use(new FacebookStrategy({
//   clientID: process.env.client_id,
//   clientSecret: process.env.client_secret,
//   callbackURL: 'http://localhost:3000/signin/facebook/callback',
//   profileFields: ['id', 'displayName', 'photos', 'emails']
//   },
//   (accessToken, refreshToken, profile, done) => {
//     User.findOne({
//       where: {
//         userName: profile.displayName
//       }
//     })
//     .then(user => {
//       if(!user)
//         User.create({
//           userName: profile.displayName,
//           firstName: '',
//           lastName: '',
//           email: profile.email || '',
//           password: '',
//           fullName: profile.displayName,
//           facebookId: profile.id,
//           profilePhoto: profile.photos[0].value
//         })
//         .then(() => {
//           done(null, profile)
//         })
//         .catch(err => console.log("error adding a user: ", err))
//       else
//         done(null, profile)
//     })
//   }
// ));

const logoutFromFacebook = (req, resp) => {
  req.logout()
  resp.redirect('/')
}

exports.facebook = {
  logoutFromFacebook: logoutFromFacebook
}