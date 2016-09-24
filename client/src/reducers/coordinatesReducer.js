
const coordinatesReducer = (state = [], action) => {
	switch(action.type) {
		case 'LAT_LONG':
			console.log(action.payload, "inside of cooodinatesReducer");
			var item = { ...state, 
				coordinates: action.payload && action.payload};
			console.log("what is this item?", item);
			return item;
		default: return state
	}
}

export default coordinatesReducer