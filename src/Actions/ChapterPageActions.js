import axios from "axios";

export const FETCH_CHAPTER_INFO = "FETCH_CHAPTER_INFO";
export const FETCH_CHAPTER_VOLUNTEERS = "FETCH_CHAPTER_VOLUNTEERS";
export const FETCH_CHAPTER_REUNIONS = "FETCH_CHAPTER_REUNIONS";

export const RECEIVE_CHAPTER_INFO = "RECEIVE_CHAPTER_INFO";
export const RECEIVE_CHAPTER_VOLUNTEERS = "RECEIVE_CHAPTER_VOLUNTEERS";
export const RECEIVE_CHAPTER_REUNIONS = "RECEIVE_CHAPTER_REUNIONS";

const baseURL = "https://miracle-messages-dev.herokuapp.com";
const basePath = "/api/chapter";

const buildUrls = (id) => {
  return {
    chapter: `${baseURL}${basePath}/${id}`,
    volunteers: `${baseURL}/api/volunteer/${id}`,
    reunions: `${baseURL}/api/reunion/${id}`,
  };
};

export const fetchChapterInfo = (id) => (dispatch) => {
  const { chapter } = buildUrls(id);

  dispatch({ type: FETCH_CHAPTER_INFO });

  axios.get(chapter).then((res) => {
    console.log(res);
    dispatch({
      type: RECEIVE_CHAPTER_INFO,
      payload: res.data,
    });
  });
};

export const fetchChapterVolunteers = (id) => (dispatch) => {
  const { volunteers } = buildUrls(id);

  dispatch({ type: FETCH_CHAPTER_VOLUNTEERS });

  axios.get(volunteers).then((res) => {
    console.log("fetch vol", res.data);

    dispatch({
      type: RECEIVE_CHAPTER_VOLUNTEERS,
      payload: res.data,
    });
  });
};

export const fetchChapterReunions = (id) => (dispatch) => {
  const { reunions } = buildUrls(id);

  dispatch({ type: FETCH_CHAPTER_VOLUNTEERS });

  axios.get(reunions).then((res) => {
    dispatch({
      type: RECEIVE_CHAPTER_REUNIONS,
      payload: res.data,
    });
  });
};
