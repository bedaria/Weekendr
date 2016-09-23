export default function(state = null, action) {
	console.log('receivedData inside receivedReducer: state',state)
	console.log('receivedData inside receivedReducer: state',action)
	switch(action.type) {
		case 'RECEIVED_DATA':
		return {..state, data: action.payload.data};
		default: return state
	}
	return state;
}

