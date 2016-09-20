export default function(state = null, action) {
	switch(action.type) {
		case 'RECEIVED_DATA':
		console.log('actionpayload is: ', action.payload)
		return action.payload.data
	}
	return state;
}