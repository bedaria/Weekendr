import UserInputData from './UserInputData';


const userInputReducer = (state = [], action) => {

  switch(action.type) {
    case 'RECEIVED_USER_INPUT_DATA':
      console.log("test inside of userInputReducer", action.payload);
      return {...state, 
        userInputForm: action.payload
      }
    default: return state
  }
}

export default userInputReducer