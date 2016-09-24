const initialValue = {
	latitude: 0,
	longitude: 0
}

const coordinatesReducer = (state = initialValue, action) => {
	switch(action.type) {
		case 'LAT_LONG':
			console.log(action.payload, "inside of cooodinatesReducer");
			var item = { ...state, 
				coordinates: action.payload};
			console.log("what is this item?", item);
			return item;
		default: return state
	}
}

export default coordinatesReducer