import axios from 'axios';
import { AIRBNB_LISTINGS } from './actionTypes';

export function fetchAirbnbListings(props) {
  const options = {
    address: props.coordinates.address,
    lat: props.coordinates.latitude,
    lng: props.coordinates.longitude
  };

  return (dispatch) => {
    axios.post('/api/airbnb/getListings', options)
      .then((data) => {
        console.log('Data from axios call inside fetchAirbnbListings in airbnbActions:', data);
        dispatch({
          type: AIRBNB_LISTINGS,
          payload: data
        });
      })
      .catch((err) => {
        console.error('Error inside fetchAirbnbListings in airbnbActions: ', err);
      });
  };
}
