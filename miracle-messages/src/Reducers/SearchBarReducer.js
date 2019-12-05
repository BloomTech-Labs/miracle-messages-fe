import {
    GET_CHAPTERS_FETCHING,
    GET_CHAPTERS_SUCCESS,
    GET_CHAPTERS_FAIL,
    FILTER_CHAPTERS 
} from "../Actions/SearchBarAction.js"; 

const initialState = {
    chapters: [],
    filteredChapter: "", 
    isFetching: false, 
    isSuccessful: false, 
    isFiltering: false, 
    isFailing: false, 
    message: ""
}


export const searchBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHAPTERS_FETCHING:
            return {
                ...state, 
                chapters: [], 
                isFetching: true, 
                isSuccessful: false, 
                isFiltering: false, 
                isFailing: false, 
                message: "fetching chapters"
            }
        case GET_CHAPTERS_SUCCESS:
            return {
                ...state, 
                chapters: action.payload,
                isFetching: false,
                isSuccessful: true,  
                isFiltering: false, 
                isFailing: false, 
                message: "Got chapter successfully"
            }
            case FILTER_CHAPTERS: 
            return {
                ...state, 
                chapterFilter: action.payload,
                isFetching: false, 
                isSuccessful: true, 
                isFiltering: true, 
                isFailing: false,
                message: "Filtering through chapters"
            }
            case GET_CHAPTERS_FAIL: 
                return {
                    ...state, 
                    isFetching: false,
                    isSuccessful: false,  
                    isFailing: true, 
                    message: "Failed getting chapters"
                }
            default:
                return state
    }
}
