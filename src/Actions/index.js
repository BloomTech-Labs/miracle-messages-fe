import { axiosWithAuth } from "../utils/axiosWithAuth";
export const FETCH_CHAPTER_INFO = "FETCH_CHAPTER_INFO";
export const FETCH_CHAPTER_SUCCESS = "FETCH_CHAPTER_SUCCESS";
export const FETCH_CHAPTER_FAIL = "FETCH_CHAPTER_FAIL";

export const FETCHING_REUNION = "FETCHING_REUNION";
export const FETCH_REUNION_SUCCESS = "FETCH_REUNION_SUCCESS";
export const FETCH_REUNION_ERR = "FETCH_REUNION_ERR";

export const FETCHING_PARTNER = "FETCHING_PARTNER";
export const FETCH_PARTNER_SUCCCESS = "FETCH_PARTNER_SUCCESS";
export const FETCH_PARTNER_ERR = "FETCH_PARTNER_ERR";

export const DELETE_PARTNER = "DELETE_PARTNER";
export const DELETE_PARTNER_SUCCESS = "DELETE_PARTNER_SUCCESS";
export const DELETE_PARTNER_ERR = "DELETE_PARTNER_ERR";

export const PARTNER_UPDATE = "PARTNER_UPDATE";
export const PARTNER_UPDATE_SUCCESS = "PARTNER_UPDATE_SUCCESS";
export const PARTNER_ERR = "PARTNER_ERR";

export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const GET_CHAPTER_REUNIONS = "GET_CHAPTER_REUNIONS";

//this data pull enables us to get chapter related data from backend so we can display on the map
export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_CHAPTER_INFO });
  axiosWithAuth()
    .get("/api/chapter")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_CHAPTER_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_CHAPTER_FAIL }));
};

export const getReunions = () => (dispatch) => {
  dispatch({ type: FETCHING_REUNION });
  axiosWithAuth()
    .get("/api/reunion")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_REUNION_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_REUNION_ERR, payload: err }));
};

export const getChapterReunions = (id) => (dispatch) => {
  axiosWithAuth()
    .get(`/api/reunion/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_CHAPTER_REUNIONS, payload: res.data });
    });
};

// //  pull partners data from the back-end

export const getSponsor = (data) => (dispatch) => {
  dispatch({ type: FETCHING_PARTNER });
  axiosWithAuth()
    .get("/api/partner")
    .then((res) => dispatch({ type: FETCH_REUNION_SUCCESS, payload: res.data }))
    .catch((err) => {
      console.log(err);
      console.log(err.response);
      dispatch({
        type: FETCH_REUNION_ERR,
        payload: err,
      });
    });
};

export const deleteSponsor = (id) => (dispatch) => {
  dispatch({ type: DELETE_PARTNER });
  axiosWithAuth()
    .delete(`/api/partner/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PARTNER_SUCCESS, payload: res.data });
      getSponsor();
    })
    .catch((err) => {
      dispatch({ type: DELETE_PARTNER_ERR });
    });
};

export const FETCH_CHAPTER_DEFAULT_INFO = "FETCH_CHAPTER_DEFAULT_INFO";
export const FETCH_CHAPTER_DEFAULT_SUCCESS = "FETCH_CHAPTER_DEFAULT_SUCCESS";
export const FETCH_CHAPTER_DEFAULT_FAIL = "FETCH_CHAPTER_DEFAULT_FAIL";

export const getDefault = () => (dispatch) => {
  dispatch({ type: FETCH_CHAPTER_DEFAULT_INFO });
  axiosWithAuth()
    .get("/api/chapter/1")
    .then((res) =>
      dispatch({ type: FETCH_CHAPTER_DEFAULT_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: FETCH_CHAPTER_DEFAULT_FAIL }));
};

export const registerUser = (user) => (dispatch) => {
  axiosWithAuth()
    .post("/api/user/login", user)
    .then((res) => {
      console.log(res);
      dispatch({
        type: POST_USER_SUCCESS,
        payload: res.data.profile_img_url,
      });
    });
};
