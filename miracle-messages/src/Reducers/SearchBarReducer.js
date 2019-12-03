import {
    GET_CHAPTERS_FETCHING,
    GET_CHAPTERS_SUCCESS,
    GET_CHAPTERS_FAIL
} from "../Actions/SearchBarAction.js"; 

const initialState = {
    chapter: [],
    isFetching: false, 
    isSuccessful: false, 
    isFailing: false, 
    message: ""
}

export const SearchBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHAPTERS_FETCHING:
            return {
                ...state, 
                chapter: [], 
                isFetching: true, 
                isSuccessful: false, 
                isFailing: false, 
                message: "fetching chapters"
            }
        case GET_CHAPTERS_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                isSuccessful: true,   
                isFailing: false, 
                message: "Got chapter successfully"
            }
            case GET_CHAPTERS_FAIL: 
                return {
                    ...state, 
                    isFailing: true, 
                    message: "Failed getting chapters"
                }
            default:
                return state
    }
}
