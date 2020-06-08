import {
  START_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_LOGIN,
  LOGOUT_SUCCESS,
} from "../Actions/AdminPageActions";

import { POST_USER_SUCCESS } from "../Actions/index";

const initialState = {
  isLoggedIn: false,
  isLoggedOut: true,
  isFetching: false,
  errors: null,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    login: "",
    timeZone: "",
  },
  userImg: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        isLoggedOut: false,
        errors: null,
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        isLoggedOut: false,
        user: {
          id: action.payload.id,
          firstName: action.payload.profile.firstName,
          lastName: action.payload.profile.lastName,
          login: action.payload.profile.login,
          timeZone: action.payload.profile.timeZone,
        },
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        isLoggedOut: false,
        userImg: action.payload,
      };

    case FAILURE_LOGIN:
      return {
        isFetching: false,
        isLoggedIn: false,
        isLoggedOut: false,
        errors: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        isLoggedOut: true,
      };
    default:
      return state;
  }
};
