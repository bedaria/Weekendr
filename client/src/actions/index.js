
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
	console.log('we are inside getlatlng')
	return dispatch => {
	  var lat = 0;
	  var long = 0;
	  function getLocation() {
	      if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(showLocation)
	      } else {
	         console.log( "Geolocation is not supported by this browser.");
	      }
	    }
	    function showLocation(positionA){
	    	console.log("Latitude: " + positionA.coords.latitude + " Longitude: ", + positionA.coords.longitude);
		    lat = positionA.coords.latitude;
		    long = positionA.coords.longitude;
		    checkStatus();
		    var data = {
		    	latitude: lat,
			    longitude: long
		    }
	      dispatch({
					type: 'LAT_LONG',
					payload: data
	      })
	    }
	    function checkStatus(){
	    		console.log('received data inside getLatLng')
	    }
	    getLocation()
	}
}

export function sendInputToState(props){
	console.log('we are inside sendInputToState props are ', props)
	return { 
		type: "RECEIVED_USER_INPUT_DATA",
		payload: props
	}
}