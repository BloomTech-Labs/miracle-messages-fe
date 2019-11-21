import axios from "axios"
import { BottomNavigationAction } from "@material-ui/core"

export const GET_VOLUNTEERS_SUCCESS = "GET_VOLUNTEERS_SUCCESS"
export const GET_VOLUNTEERS_EMAIL_NOT_FOUND = "GET_VOLUNTEERS_EMAIL_NOT_FOUND"
export const GET_VOLUNTEERS_FAIL = "GET_VOLUNTEERS_FAIL"

export const addEmail = email => async dispatch => {
  dispatch({
    type: GET_VOLUNTEERS_SUCCESS
  })

  axios
    .post
    // Back end API goes in here
    ()
    .then(response => {
      console.log("This is the response from AddEmail", response)
      if (response === email) {
        return dispatch({
          type: GET_VOLUNTEERS_SUCCESS
        })
      } else {
        return dispatch({
          type: GET_VOLUNTEERS_EMAIL_NOT_FOUND
        })
      }
    })
    .catch(error => {
      console.log("This is the catch from AddEmail", error)
      return dispatch({
        type: GET_VOLUNTEERS_FAIL
      })
    })
}

// import axios from "axios"
// import { BottomNavigationAction } from "@material-ui/core"

// export const GET_VOLUNTEERS_SUCCESS = "POST_VOLUNTEERS_SUCCESS"
// export const GET_VOLUNTEERS_EMAIL_NOT_FOUND = "GET_VOLUNTEERS_EMAIL_NOT_FOUND"
// export const GET_VOLUNTEERS_FAIL = "POST_VOLUNTEERS_FAIL"

// export const addEmail = email => async dispatch => {
//   dispatch({
//     type: GET_VOLUNTEERS_SUCCESS
//   })

//   axios
//     .post
//     // Back end API goes in here
//     ()
//     .then(res => {
//       console.log("This is the response from AddEmail", res)
//       if (res === action.payload) {
//         return dispatch({
//           type: GET_VOLUNTEERS_SUCCESS
//         })
//       } else {
//         return dispatch({
//           type: GET_VOLUNTEERS_EMAIL_NOT_FOUND
//         })
//       }
//     })
//     .catch(error => {
//       console.log("This is the catch from AddEmail", error)
//       return dispatch({
//         type: GET_VOLUNTEERS_FAIL
//       })
//     })
// }
