import {
 POST_VOLUNTEERS_SUCCESS,
 POST_VOLUNTEERS_FAIL
} 
from "../Actions/ForgotPasswordActions.js"

const initialState = {
    email: {},
    error: "Post failed"
}

const forgotPasswordReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_VOLUNTEERS_SUCCESS:
        return {
            ...state, 
            email: action.payload
        }
        case  POST_VOLUNTEERS_FAIL:
        return {
            ...state, 
            error: "Post Failed"
        }
    }
}

export default forgotPasswordReducer; 