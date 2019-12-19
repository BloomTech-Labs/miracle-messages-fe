import axios from "axios"

export const START_LOGIN = "START_LOGIN"
export const FAILURE_LOGIN = "FAILURE_LOGIN"
export const SUCCESS_LOGIN = "SUCCESS_LOGIN"

export const GET_USERS_START = "GET_USERS_START"
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const GET_USERS_FAIL = "GET_USERS_FAIL"

export const ADD_USERS_START = "ADD_USERS_START"
export const ADD_USERS_SUCCESS = "ADD_USERS_SUCCESS"
export const ADD_USERS_FAIL = "ADD_USERS_FAIL"

export const DELETE_USERS_START = "DELETE_USERS_START"
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS"
export const DELETE_USERS_FAIL = "DELETE_USERS_FAIL"

export const GET_VOLUNTEERS_START = "GET_VOLUNTEERS_START"
export const GET_VOLUNTEERS_SUCCESS = "GET_VOLUNTEERS_SUCCESS"
export const GET_VOLUNTEERS_FAIL = "GET_VOLUNTEERS_FAIL"

export const ADD_VOLUNTEERS_START = "ADDING_VOLUNTEERS_START"
export const ADD_VOLUNTEERS_SUCCESS = "ADDING_VOLUNTEERS_SUCCESS"
export const ADD_VOLUNTEERS_FAIL = "ADDING_VOLUNTEERS_FAIL"

export const DELETE_VOLUNTEERS_START = "DELETE VOLUNTEERS_START"
export const DELETE_VOLUNTEERS_SUCCESS = "DELETE_VOLUNTEERS_SUCEESS"
export const DELETE_VOLUNTEERS_FAIL = "DELETE_VOLUNTEERS_FAIL"

export const GET_CHAPTERS_START = "GET_CHAPTERS_START"
export const GET_CHAPTERS_SUCCESS = "GET_CHAPTERS_SUCCESS"
export const GET_CHAPTERS_FAIL = "GET_CHAPTERS_FAIL"

export const ADD_CHAPTER_START = "ADDING_CHAPTERS_START"
export const ADD_CHAPTER_SUCCESS = "ADDING_CHAPTERS_SUCCESS"
export const ADD_CHAPTER_FAIL = "ADDING_CHAPTERS_FAIL"

export const DELETE_CHAPTER_START = "DELETE_CHAPTERS_START"
export const DELETE_CHAPTER_SUCCESS = "DELETE_CHAPTERS_SUCEESS"
export const DELETE_CHAPTER_FAIL = "DELETE_CHAPTERS_FAIL"

export const fetchLogin = user => dispatch => {
  dispatch({ type: START_LOGIN })
  return axios
    .post("http://localhost:5000/api/user/login", user)

    .then(res => {
      dispatch({ type: SUCCESS_LOGIN })
      localStorage.setItem("token", res.data.acces_token)
      return true
    })
    .catch(err => {
      dispatch({
        type: FAILURE_LOGIN,
        payload: "Incorrect Credentials"
      })
      return false
    })
}

export const addUser = (username, password) => dispatch => {
  dispatch({ type: ADD_USERS_START })
  return axios
    .post("http://localhost:5000/api/user/register", username, password)
    .thern(res => {
      dispatch({ type: ADD_USERS_SUCCESS, payload: res.user.data })
    })
    .catch(err => {
      dispatch({ type: ADD_USERS_FAIL, payload: err })
    })
}

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START })
  axios
    .get("http://localhost:5000/api/user/users")
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_FAIL,
        payload: err
      })
    })
}

export const deleteUser = user => dispatch => {
  dispatch({ type: DELETE_USERS_START })
  return axios
    .delete(`/delete/${user.id}`)
    .then(res => {
      dispatch({ type: DELETE_USERS_SUCCESS })
    })
    .catch(err => {
      dispatch({
        type: DELETE_USERS_FAIL,
        payload: err
      })
    })
}

export const addVolunteer = volunteer => dispatch => {
  dispatch({ type: ADD_VOLUNTEERS_START })
  return axios
    .post("http://localhost:5000/api/form", volunteer)
    .thern(res => {
      dispatch({ type: ADD_VOLUNTEERS_SUCCESS, payload: res.volunteer.data })
    })
    .catch(err => {
      dispatch({ type: ADD_VOLUNTEERS_FAIL, payload: err })
    })
}

export const getVolunteers = volunteers => dispatch => {
  dispatch({ type: GET_VOLUNTEERS_START })
  return axios
    .get("", volunteers)
    .then(res => {
      dispatch({ type: GET_VOLUNTEERS_SUCCESS, payload: res.volunteers.data })
    })
    .catch(err => {
      dispatch({
        type: GET_VOLUNTEERS_FAIL,
        payload: err
      })
    })
}

export const deleteVolunteer = user => dispatch => {
  dispatch({ type: DELETE_VOLUNTEERS_START })
  return axios
    .delete(`/delete/${user.id}`)
    .then(res => {
      dispatch({ type: DELETE_VOLUNTEERS_SUCCESS })
    })
    .catch(err => {
      dispatch({
        type: DELETE_VOLUNTEERS_FAIL,
        payload: err
      })
    })
}

export const addChapter = chapter => dispatch => {
  dispatch({ type: ADD_CHAPTER_START })
  return axios
    .post("/chapter", chapter)
    .thern(res => {
      dispatch({ type: ADD_CHAPTER_SUCCESS, payload: res.chapter.data })
    })
    .catch(err => {
      dispatch({ type: ADD_CHAPTER_FAIL, payload: err })
    })
}

export const getChapters = chapters => dispatch => {
  dispatch({ type: GET_CHAPTERS_START })
  return axios
    .get("/chapter", chapters)
    .then(res => {
      dispatch({ type: GET_CHAPTERS_SUCCESS, payload: res.chapter.data })
    })
    .catch(err => {
      dispatch({
        type: GET_CHAPTERS_FAIL,
        payload: err
      })
    })
}

export const deleteChapter = chapter => dispatch => {
  dispatch({ type: DELETE_CHAPTER_START })
  return axios
    .delete(`/delete/${chapter.name}`)
    .then(res => {
      dispatch({ type: DELETE_CHAPTER_SUCCESS })
    })
    .catch(err => {
      dispatch({
        type: DELETE_CHAPTER_FAIL,
        payload: err
      })
    })
}
