import {
  GET_VOLUNTEERS_SUCCESS,
  GET_VOLUNTEERS_EMAIL_NOT_FOUND,
  GET_VOLUNTEERS_FAIL
} from "../Actions/ForgotPasswordActions.js"

const initialState = {
  email: "",
  emailNotFound: "Email Not Found",
  error: "Get Failed"
}

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOLUNTEERS_SUCCESS:
      return {
        ...state,
        email: action.payload
      }
    case GET_VOLUNTEERS_EMAIL_NOT_FOUND:
      return {
        ...state,
        emailNotFound: action.emailNotFound
      }
    case GET_VOLUNTEERS_FAIL:
      return {
        ...state,
        error: action.error
      }
  }
}

export default forgotPasswordReducer
