import axios from 'axios';

export const ADD_VOLUNTEER_START = 'ADD_VOLUNTEER_START';
export const ADD_VOLUNTEER_SUCCESS = 'ADD_VOLUNTEER_SUCCESS';
export const ADD_VOLUNTEER_FAIL = 'ADD_VOLUNTEER_FAIL';

export const addVolunteers = volunteer => async dispatch => {
  dispatch({
    type: ADD_VOLUNTEER_START
  });

  axios
    .post(
      'https://miracle-messages-production.herokuapp.com/api/form',
      volunteer
    )
    .then(res => {
      return dispatch({
        type: ADD_VOLUNTEER_SUCCESS
      });
    })
    .catch(err => {
      return dispatch({ type: ADD_VOLUNTEER_FAIL, payload: err });
    });
};
