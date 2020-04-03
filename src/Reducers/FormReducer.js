import {
  ADD_VOLUNTEER_START,
  ADD_VOLUNTEER_SUCCESS,
  ADD_VOLUNTEER_FAIL
} from '../Actions/FormActions';

const initialState = {
  volunteers: [],
  volunteer: {},
  status: {
    isAdding: false,
    addSuccess: false,
    addFail: false,
    error: null,
    message: ''
  }
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VOLUNTEER_START:
      return {
        ...state,
        status: {
          isAdding: true,
          addSuccess: false,
          addFail: false,
          message: ''
        }
      };
    case ADD_VOLUNTEER_SUCCESS:
      return {
        ...state,
        volunteers: [...state.volunteers, action.payload],
        volunteer: action.payload,
        status: {
          ...state.status,
          isAdding: false,
          addSuccess: true,
          addFail: false,
          message: 'Your Form Has Been Submmited'
        }
      };

    case ADD_VOLUNTEER_FAIL:
      return {
        ...state,
        status: {
          ...state.status,
          addFail: true
        },
        error: action.payload
      };

    default:
      return state;
  }
};
