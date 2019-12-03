import {
    GET_CHAPTERS_SUCCESS,
    GET_CHAPTERS_FAIL
} from "../Actions/SearchBarAction.js"; 

const initialState = {
    chapter: [],
    isFailing: false, 
    message: ""
}

export const SearchBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHAPTERS_SUCCESS:
            return {
                ...state, 
                chapter: [], 
                isFailing: false, 
                message: "Got chapter!"
            }
            case GET_CHAPTERS_FAIL: 
                return {
                    ...state, 
                    isFailing: true, 
                    message: "Failed"
                }
            default:
                return state
    }
}
