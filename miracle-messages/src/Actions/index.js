import axios from 'axios';
export const FETCH_CHAPTER_INFO = 'FETCH_CHAPTER_INFO';
export const FETCH_CHAPTER_SUCCESS = 'FETCH_CHAPTER_SUCCESS';
export const FETCH_CHAPTER_FAIL = 'FETCH_CHAPTER_FAIL';

export const FETCHING_PARTNER = 'FETCHING_PARTNER';
export const FETCH_PARTNER_SUCCCESS = 'FETCH_PARTNER_SUCCESS';
export const FETCH_PARTNER_ERR = 'FETCH_PARTNER_ERR';


const URL = 'https://miracle-messages-staging.herokuapp.com/api';

//this data pull enables us to get chapter related data from backend so we can display on the map
export const getData = () => dispatch => {
    dispatch({ type: FETCH_CHAPTER_INFO});
 axios
   .get ('https://miracle-messages-staging.herokuapp.com/api/chapter')
   .then(res => dispatch({type: FETCH_CHAPTER_SUCCESS, payload: res.data}))
   .catch(err => dispatch({type: FETCH_CHAPTER_FAIL}));
}

// // get pull partners data from the back-end

export const getSponsor = (data) => dispatch => {
   dispatch({type: FETCHING_PARTNER});
     axios
          .get('https://miracle-messages-staging.herokuapp.com/api/partner')
          .then(res => dispatch({type: FETCH_PARTNER_SUCCCESS, payload: res.data}))               
          .catch(err => dispatch({
             type: FETCH_PARTNER_ERR, payload: err
          }));
}