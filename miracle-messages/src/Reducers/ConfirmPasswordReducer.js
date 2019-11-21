import {
  POST_NEWPASS_SUCCESS,
  POST_NEWPASSCATCH_FAIL,
  POST_NEWPASS_FAIL
} from "../Actions/ConfirmPasswordActions.js"

const startingState = {
  password: "",
  failedPassword: "Your password has failed",
  error: "Post failed"
}

const confirmPasswordReducer = (state = startingState, action) => {
  switch (action.type) {
    case POST_NEWPASS_SUCCESS:
      return {
        ...state,
        password: action.payload
      }
    case POST_NEWPASSCATCH_FAIL:
      return {
        ...state,
        failedPassword: action.failedPassword
      }
    case POST_NEWPASS_FAIL:
      return {
        ...state,
        error: action.error
      }
  }
}

export default ConfirmPasswordReducer
