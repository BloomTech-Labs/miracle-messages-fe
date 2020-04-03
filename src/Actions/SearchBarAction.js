import axios from "axios";

export const GET_CHAPTERS_FETCHING = "GET_CHAPTERS_FETCHING";
export const GET_CHAPTERS_SUCCESS = "GET_CHAPTERS_SUCCESS";
export const GET_CHAPTERS_FAIL = "GET_CHAPTERS_FAIL";
export const UPDATE_CHAPTERS = 'UPDATE_CHAPTERS';

export const getChapter = chapters => async dispatch => {
  dispatch({
    type: GET_CHAPTERS_FETCHING
  })

  axios
  //TODO why is this here?
    //.get("localhost:5000/api/chapter", chapters)
    .get('https://miracle-messages-dev.herokuapp.com', chapters)
    .then(res => {
      // console.log(res)
      dispatch({
        type: GET_CHAPTERS_SUCCESS
      })
    })
    .catch(error => {
      //   console.log(error)
      return dispatch({
        type: GET_CHAPTERS_FAIL
      })
    })
};

export const updateChapters = chapters => async dispatch => {
  dispatch({
    type: UPDATE_CHAPTERS,
    payload: chapters
  })
};
