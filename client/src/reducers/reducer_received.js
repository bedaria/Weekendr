export default function(state = null, action) {
	console.log('we are inside receivedReducer', state)
	console.log('action inside receivedReducer: ',action)
	switch(action.type) {
		case 'RECEIVED_DATA':
		console.log('actionpayload inside receivedReducer is: ', action.payload)
		return action.payload.data
	}
	return state;
}