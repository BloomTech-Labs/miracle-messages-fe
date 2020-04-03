import {
  START_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_LOGIN
} from "../Actions/AdminPageActions";

const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  isFetching: false,
  errors: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        isLoggedOut: false,
        errors: null
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        isLoggedOut: false,
        errors: null
      };

    case FAILURE_LOGIN:
      return {
        isFetching: false,
        isLoggedIn: false,
        isLoggedOut: false,
        errors: action.payload
      };

    default:
      return state;
  }
};
