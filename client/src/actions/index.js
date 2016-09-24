import axios from 'axios';

export function answerQuestion(answer, props, answersArr) {
	let answerObj = {}
	answerObj.title = props.quizList[props.questionIndex].title
	answerObj.option = props.quizList[props.questionIndex].options.filter((q) => {
		return q.option === answer
	})[0]
		props.quizAnswers.push(answerObj)
		return {
		type: 'ANSWER_SELECTED',
		payload: {answers: props.quizAnswers, questionIndex: props.questionIndex+1}
		}
}


export function postQuestionListInput(input) {
	return dispatch => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((data) => {
			console.log('recevied data inside actions: ',data)
			dispatch({
				type: 'RECEIVED_DATA',
				payload: data
			})
		})
		.catch(function(err) {
			console.log('error inside postQuestionListInput inside actions: ',err)
		})
	}
}


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
	return { 
		type: "RECEIVED_USER_INPUT_DATA",
		payload: props
	}
}