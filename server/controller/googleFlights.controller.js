var userFlights = require('../model/googleFlights.model.js');

exports.googleFlights = {
  getFlights: getFlights
}

function getFlights(req,res) {
  console.log(req.body, "req.body inside");
  userFlights.getFlights(req.body)
  .then(function(result) {
    res.status(200).send(result)
  })
  .catch(function(err) {
    console.log('error inside googleFlights controller inside getActivities', err)
  })
}
