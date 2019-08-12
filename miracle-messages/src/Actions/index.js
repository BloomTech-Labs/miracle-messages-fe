import axios from 'axios';
export const FETCH_CHAPTER_INFO = 'FETCH_CHAPTER_INFO';
export const FETCH_CHAPTER_SUCCESS = 'FETCH_CHAPTER_SUCCESS';
export const FETCH_CHAPTER_FAIL = 'FETCH_CHAPTER_FAIL';


//this data pull enables us to get chapter related data from backend so we can display on the map
export const getData = () => dispatch => {
    dispatch({ type: FETCH_CHAPTER_INFO});
 axios
   .get ('http://localhost:5000/api/chapter')
   .then(res => dispatch({type: FETCH_CHAPTER_SUCCESS, payload: res.data}))
   .catch(err => dispatch({type: FETCH_CHAPTER_FAIL}));
}