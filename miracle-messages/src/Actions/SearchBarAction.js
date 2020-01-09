import axios from "axios"

export const GET_CHAPTERS_FETCHING = "GET_CHAPTERS_FETCHING"
export const GET_CHAPTERS_SUCCESS = "GET_CHAPTERS_SUCCESS"
export const GET_CHAPTERS_FAIL = "GET_CHAPTERS_FAIL"

export const getChapter = chapters => async dispatch => {
  dispatch({
    type: GET_CHAPTERS_FETCHING
  })

  axios
    .get("localhost:5000/api/chapter", chapters)
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
}
