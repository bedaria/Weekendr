import UserInputData from './UserInputData';


const userInputReducer = (state = UserInputData.userInputForm, action) => {
  console.log("inside userInputReducer 1", state);
  console.log("inside userInputReducer 2", action);
  switch(action.type) {
    case 'RECEIVED_USER_INPUT_DATA':
      return {...state, 
        userInputForm: action.payload.userInputForm
      }
    default: return state
  }
}

export default userInputReducer