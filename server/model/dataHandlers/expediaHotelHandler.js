

hotelHandler = module.exports;

hotelHandler = {
  handleAirbnb,
  handleExpedia,
  handleHostel
}


hotelHandler.handleExpedia = (data) => {
  return JSON.parse(data).hotelList.filter(hotel => hotel.isHotelAvailable);
};
