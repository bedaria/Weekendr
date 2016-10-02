const model = require('../model/airbnb.model');

exports.getListings = (req, res) => {
  model.getListings(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
};
