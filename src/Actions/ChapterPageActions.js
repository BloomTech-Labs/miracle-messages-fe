import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_CHAPTER_INFO = "FETCH_CHAPTER_INFO";
export const FETCH_CHAPTER_VOLUNTEERS = "FETCH_CHAPTER_VOLUNTEERS";
export const FETCH_CHAPTER_REUNIONS = "FETCH_CHAPTER_REUNIONS";
export const FETCH_PENDING_VOLUNTEERS = "FETCH_PENDING_VOLUNTEERS";

//For catching errors to toggle fetching status
export const FETCH_CHAPTER_INFO_ERROR = "FETCH_CHAPTER_INFO_ERROR";
export const FETCH_CHAPTER_VOLUNTEERS_ERROR = "FETCH_CHAPTER_VOLUNTEERS_ERROR";
export const FETCH_CHAPTER_REUNIONS_ERROR = "FETCH_CHAPTER_REUNIONS_ERROR";
export const FETCH_PENDING_VOLUNTEERS_ERROR = "FETCH_PENDING_VOLUNTEERS_ERROR";

export const RECEIVE_CHAPTER_INFO = "RECEIVE_CHAPTER_INFO";
export const RECEIVE_CHAPTER_VOLUNTEERS = "RECEIVE_CHAPTER_VOLUNTEERS";
export const RECEIVE_CHAPTER_REUNIONS = "RECEIVE_CHAPTER_REUNIONS";
export const RECEIVE_PENDING_VOLUNTEERS = "RECEIVE_PENDING_VOLUNTEERS";

const baseURL = "https://miracle-messages-dev.herokuapp.com";
const basePath = "/api/chapter";

const buildUrls = (id) => {
  return {
    chapter: `${baseURL}${basePath}/${id}`,
    volunteers: `${baseURL}/api/volunteer/${id}`,
    reunions: `${baseURL}/api/reunion/${id}`,
    pendingVols: `${baseURL}/api/pending/${id}/Volunteers`,
  };
};

export const fetchChapterInfo = (id) => (dispatch) => {
  const { chapter } = buildUrls(id);

  dispatch({ type: FETCH_CHAPTER_INFO });

  axios
    .get(chapter)
    .then((res) => {
      dispatch({
        type: RECEIVE_CHAPTER_INFO,
        payload: res.data,
      });
    })
    .catch(err => dispatch({ type: FETCH_CHAPTER_INFO_ERROR }))
};

export const fetchChapterVolunteers = (id) => (dispatch) => {
  const { volunteers } = buildUrls(id);

  dispatch({ type: FETCH_CHAPTER_VOLUNTEERS });

  axios
    .get(volunteers)
    .then((res) => {
      dispatch({
        type: RECEIVE_CHAPTER_VOLUNTEERS,
        payload: res.data,
      });
    })
    .catch(err => dispatch({ type: FETCH_CHAPTER_VOLUNTEERS_ERROR }))
};

export const fetchChapterReunions = (id) => (dispatch) => {
  const { reunions } = buildUrls(id);

  dispatch({ type: FETCH_CHAPTER_REUNIONS });

  axios
    .get(reunions)
    .then((res) => {
      dispatch({
        type: RECEIVE_CHAPTER_REUNIONS,
        payload: res.data,
      });
    })
    .catch(err => dispatch({ type: FETCH_CHAPTER_REUNIONS_ERROR }))
};

export const fetchPendingVols = (id) => (dispatch) => {
  const { pendingVols } = buildUrls(id);

  dispatch({ type: FETCH_PENDING_VOLUNTEERS });

  axiosWithAuth()
    .get(pendingVols)
    .then((res) => {
      dispatch({
        type: RECEIVE_PENDING_VOLUNTEERS,
        payload: res.data,
      })
    })
    .catch(err => dispatch({ type: FETCH_PENDING_VOLUNTEERS_ERROR }))
};
