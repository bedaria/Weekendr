import {
	RECEIVED_USER_INPUT_DATA
} from './actionTypes';

export function sendInputToState(props){
	console.log('we are inside sendInputToState props are ', props)
	return { 
		type: "RECEIVED_USER_INPUT_DATA",
		payload: props
	}
}

