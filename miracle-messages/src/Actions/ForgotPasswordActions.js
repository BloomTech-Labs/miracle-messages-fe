import axios from "axios"; 

export const GET_VOLUNTEERS_SUCCESS
export const GET_VOLUNTEERS_FAIL

export const addEmail = email => async dispatch => {
    dispatch({
        type: GET_VOLUNTEERS_SUCCESS
    })

    axios
        .post(
            // API from Twilio goes here! 
        )
        .then(res => {
            console.log("This is the response from AddEmail", res)
            return dispatch({
            type: GET_VOLUNTEERS_SUCCESS
            })
        })
        .catch(error => {
            console.log("This is the catch from AddEmail", error)
            return dispatch({
                type: GET_VOLUNTEERS_FAIL
            })
        })
}