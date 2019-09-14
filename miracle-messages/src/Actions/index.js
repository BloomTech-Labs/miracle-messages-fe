import axios from 'axios';
export const FETCH_CHAPTER_INFO = 'FETCH_CHAPTER_INFO';
export const FETCH_CHAPTER_SUCCESS = 'FETCH_CHAPTER_SUCCESS';
export const FETCH_CHAPTER_FAIL = 'FETCH_CHAPTER_FAIL';

export const FETCHING_PARTNER = 'FETCHING_PARTNER';
export const FETCH_PARTNER_SUCCCESS = 'FETCH_PARTNER_SUCCESS';
export const FETCH_PARTNER_ERR = 'FETCH_PARTNER_ERR';

export const DELETE_PARTNER = 'DELETE_PARTNER';
export const DELETE_PARTNER_SUCCESS = 'DELETE_PARTNER_SUCCESS';
export const DELETE_PARTNER_ERR = 'DELETE_PARTNER_ERR';

export const PARTNER_UPDATE = 'PARTNER_UPDATE';
export const PARTNER_UPDATE_SUCCESS = 'PARTNER_UPDATE_SUCCESS';
export const PARTNER_ERR = 'PARTNER_ERR';

// const url = 'https://miracle-messages-production.herokuapp.com/api';

//this data pull enables us to get chapter related data from backend so we can display on the map
export const getData = url => dispatch => {
  dispatch({ type: FETCH_CHAPTER_INFO });
  axios
    .get('https://miracle-messages-production.herokuapp.com/api/chapter')
    .then(res => dispatch({ type: FETCH_CHAPTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_CHAPTER_FAIL }));
};

// //  pull partners data from the back-end

export const getSponsor = data => dispatch => {
  dispatch({ type: FETCHING_PARTNER });
  axios
    .get('https://miracle-messages-production.herokuapp.com/api/partner')
    .then(res => dispatch({ type: FETCH_PARTNER_SUCCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_PARTNER_ERR,
        payload: err
      })
    );
};

export const deleteSponsor = id => dispatch => {
  dispatch({ type: DELETE_PARTNER });
  axios
    .delete(
      `https://miracle-messages-production.herokuapp.com/api/partner/${id}`
    )
    .then(res => {
      dispatch({ type: DELETE_PARTNER_SUCCESS, payload: res.data });
      getSponsor();
    })
    .catch(err => {
      dispatch({ type: DELETE_PARTNER_ERR });
    });
};

export const FETCH_CHAPTER_DEFAULT_INFO = 'FETCH_CHAPTER_DEFAULT_INFO';
export const FETCH_CHAPTER_DEFAULT_SUCCESS = 'FETCH_CHAPTER_DEFAULT_SUCCESS';
export const FETCH_CHAPTER_DEFAULT_FAIL = 'FETCH_CHAPTER_DEFAULT_FAIL';

export const getDefault = () => dispatch => {
  dispatch({ type: FETCH_CHAPTER_DEFAULT_INFO });
  axios
    .get('https://miracle-messages-production.herokuapp.com/api/chapter/1')
    .then(res =>
      dispatch({ type: FETCH_CHAPTER_DEFAULT_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_CHAPTER_DEFAULT_FAIL }));
};

// export const updateSponsor = (id, info) => dispatch => {
//    const updated = {
//        id: info.id,
//        name: info.name,
//        site_url: info.site_url,
//        icon_url: info.icon_url,
//        category: info.category
//    }
//    dispatch({type: PARTNER_UPDATE});
//    axios
//      .put(`https://miracle-messages-production.herokuapp.com/api/partner/${id}`, updated)
//      .then(e => {
//         dispatch({type:PARTNER_UPDATE_SUCCESS, payload: e.data})
//      })
//      .catch(err => {
//         dispatch({type: PARTNER_ERR})
//      });
// }
