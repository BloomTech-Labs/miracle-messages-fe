import axios from "axios"

export const FETCH_CHAPTER_INFO = "FETCH_CHAPTER_INFO"
export const FETCH_CHAPTER_VOLUNTEERS = "FETCH_CHAPTER_VOLUNTEERS"
export const FETCH_CHAPTER_REUNIONS = "FETCH_CHAPTER_REUNIONS"



const baseURL = "https://miracle-messages-dev.herokuapp.com"
const basePath = "/api/chapter"

const buildUrls = (id) => {
  return {
    chapter: `${baseURL}${basePath}/${id}`,
    volunteers: `${baseURL}${basePath}/${id}/volunteers`,
    reunions: `${baseURL}${basePath}/${id}/reunions`
  }
}

export const fetchChapterInfo = (id) => dispatch => {
  const { chapter } = buildUrls(id)

  axios
    .get(chapter)
    .then(res => {
      dispatch({
        type: FETCH_CHAPTER_INFO,
        payload: res.data
      })
    })
}

export const fetchChapterVolunteers = (id) => dispatch => {
  const { volunteers } = buildUrls(id)

  axios
    .get(volunteers)
    .then(res => {
      dispatch({
        type: FETCH_CHAPTER_VOLUNTEERS,
        payload: res.data
      })
    })
}

export const fetchChapterReunions = (id) => dispatch => {
  const { reunions } = buildUrls(id)

  axios
    .get(reunions)
    .then(res => {
      dispatch({
        type: FETCH_CHAPTER_REUNIONS,
        payload: res.data
      })
    })
}

