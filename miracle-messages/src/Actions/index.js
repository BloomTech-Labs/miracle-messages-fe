import axios from 'axios';

export const FETCH_CHAPTER_INFO = 'FETCH_CHAPTER_INFO';
export const FETCH_CHAPTER_SUCCESS = 'FETCH_CHAPTER_SUCCESS';
export const FETCH_CHAPTER_FAIL = 'FETCH_CHAPTER_FAIL';

// CHAPTER data

export const getData = () => dispatch => {
    dispatch({ type: FETCH_CHAPTER_INFO});
 axios
   .get ('https://miracle-messages-staging.herokuapp.com/api/chapter')
   .then(res => {
       dispatch({type: FETCH_CHAPTER_SUCCESS, payload: res.data});
   })
   .catch(err => {
       dispatch({type: FETCH_CHAPTER_FAIL});
   });
}