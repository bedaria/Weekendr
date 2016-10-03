

hotelHandler = module.exports;


const handleExpedia = (data) => {
  return JSON.parse(data).hotelList.filter(hotel => hotel.isHotelAvailable);
};

hotelHandler = {
  handleExpedia: handleExpedia
};
