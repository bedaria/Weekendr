import UserInputData from './UserInputData';


const userInputReducer = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVED_USER_INPUT_DATA':
      return {...state, 
        userInputForm: action.payload
      }
    default: return state
  }
}

export default userInputReducer