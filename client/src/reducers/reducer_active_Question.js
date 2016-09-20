export default function(state = null, action) {
	switch(action.type) {
		case 'ANSWER_SELECTED':
		return action.payload;
	}
	return state;
}