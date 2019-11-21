import axios from "axios"

export const POST_NEWPASS_SUCCESS = "POST_NEWPASS_SUCCESS"
export const POST_NEWPASS_FAIL = "POST_NEWPASS_FAIL"
export const POST_NEWPASSCATCH_FAIL = "POST_NEWPASSCATCH_FAIL"

export const addNewPassword = password => async dispatch => {
  dispatch({
    type: POST_NEWPASS_SUCCESS
  })
  axios
    .put
    // "API from volunteer form" , password
    ()
    .then(response => {
      console.log("This is the response from addNewPassword", response)
      if (response === action.payload) {
        return dispatch({
          type: POST_NEWPASS_SUCCESS
        })
      } else {
        returndispatch({ POST_NEWPASS_FAIL })
      }
    })
    .catch(error => {
      console.log("This is the catch from addNewPassword", error)
      return dispatch({
        type: POST_NEWPASSCATCH_FAIL
      })
    })
}
