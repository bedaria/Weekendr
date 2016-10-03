import { RECEIVED_USER_INPUT_DATA } from './actionTypes';

export function sendInputToState(props){
	return {
		type: 'RECEIVED_USER_INPUT_DATA',
		payload: props, 
	};
}

