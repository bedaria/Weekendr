const coordinatesReducer = (state = [], action) => {
	switch(action.type) {
		case 'COORDINATES':
			return {...state, position: action.payload.position};
		default: return state
	}
}

export default coordinatesReducer