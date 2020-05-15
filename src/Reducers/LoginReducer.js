import {
  START_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_LOGIN,
} from "../Actions/AdminPageActions";

const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  isFetching: false,
  errors: null,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    login: "",
    timeZone: "",
  },
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

    case FAILURE_LOGIN:
      return {
        isFetching: false,
        isLoggedIn: false,
        isLoggedOut: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
