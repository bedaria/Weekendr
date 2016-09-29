const expediaHotelsModel = require('../model/expediaHotels.model.js');
//http://terminal2.expedia.com/x/mhotels/search?city=SEATTLE&checkInDate=2016-12-01&checkOutDate=2016-12-03&room1=2&apikey=EESKag75BPlhcZNnRBSADxsUkhkWv5JD

//need city, checkIn/OutDates, people per room, budget?
getHotels = (req, resp) => {

  expediaHotelsModel.findHotels(req.body)
  .then(result => {
    //const totalHotelCount = body.totalHotelCount;
    //const availableHotelCount = body.availableHotelCount;
    //const searchRegionId = body.searchRegionId;
     //.filter(hotel => hotel.isHotelAvailable && hotel.hotelStarRating > 3 && )
      //hotel.totalPriceWithMandatoryFees < .4 * budget)
    const data = body.hotelList;
    res.status(200).send(result);
  })
  .catch(err =>
    console.log("Erro getting hotels from expedia in hotel.controller: ", err)
  )
}

exports.hotels = {
  getHotels
}