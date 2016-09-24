import axios from 'axios';



export function updateUserInfo(username, lastName, firstName, email) {
  return {
    type: 'LOG_IN',
    payload: {
      firstName,
      lastName,
      username,
      email
    }
  }
}

export function getLatLng(){
	return dispatch => {
	  function getLocation() {
	      if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(showLocation);
	      } else {
	         console.log( "Geolocation is not supported by this browser.");
	      }
	    }
	    function showLocation(positionA){
	      console.log("Latitude: " + positionA.coords.latitude + " Longitude: ", + positionA.coords.longitude); 
	      lat = positionA.coords.latitude;
	      long = positionA.coords.longitude;
	    }
	    getLocation()
	    .then((position) => {
	    	console.log('received data inside getLatLng', position)
	    	dispatch({
	    		type: 'COORDINATES',
	    		payload: position
	    	})
	    })
	    .catch(function(reason){
	      console.log('Handle rejected promise ('+reason+') here.');
	    })
	}
}

export function sendInputToState(props){
	return { 
		type: "RECEIVED_USER_INPUT_DATA",
		payload: props
	}
}