import {
	LAT_LONG
} from './actionTypes';

export function getLatLng(){
	console.log('we are inside getlatlng')
	return dispatch => {
	  var lat = 0;
	  var long = 0;
	  function getLocation() {
	      if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(showLocation)
	      } else {
	         alert( "Geolocation is not supported by this browser.");
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
