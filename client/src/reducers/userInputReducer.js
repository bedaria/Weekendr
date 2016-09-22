import UserInputData from './UserInputData';


const initialState = {
  budget: '',
  numTravelers: '',
  date: '',
  modeTransport: ''
}

const userInputReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FIRST_INPUT':
      return {...state, 
        budget: action.payload.budget,
        numTravelers: action.payload.numTravelers,
        date: action.payload.date,
        modeTransport: action.payload.modeTransport
      }
    default: return initialState
  }
}

export default userInputReducer