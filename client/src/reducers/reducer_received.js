export default function(state = null, action) {
	switch(action.type) {
		case 'RECEIVED_DATA':
		return action.payload;
	}
	return state;
}