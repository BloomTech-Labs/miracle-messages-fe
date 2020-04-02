import {
    GET_CHAPTERS_START,
    GET_CHAPTERS_SUCCESS,
    GET_CHAPTERS_FAIL,

    ADD_CHAPTER_START,
    ADD_CHAPTER_SUCCESS,
    ADD_CHAPTER_FAIL,

    DELETE_CHAPTER_START,
    DELETE_CHAPTER_SUCCESS,
    DELETE_CHAPTER_FAIL    
} from '../Actions/AdminPageActions';

const initialState = {
   chapter: [],
   isFetching: false,
   isRendering: false,
   isAdding: false,
   isDeleting: false,
   error: '',
   message: ''
};

export const ChapterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHAPTERS_START: 
            return {
                ...state,
                chapter: [],
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: '',
                message: 'Started Fetching'
            }
        case GET_CHAPTERS_SUCCESS: 
            return {
                ...state,
                chapter: action.payload,
                isFetching: false,
                isRendering: true,
                isAdding: false,
                isDeleting: false,
                error: '',
                message: 'Got chapters'
            }
        case GET_CHAPTERS_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to get the Chapters'
            }   
        case ADD_CHAPTER_START: 
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: '',
                message: 'Started Fetching'
            }
        case ADD_CHAPTER_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                isRendering: true,
                isAdding: false,
                isDeleting: false,
                error: '',
                message: 'Added chapter'
            }
        case ADD_CHAPTER_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to add the Chapter'
            } 
        case DELETE_CHAPTER_START: 
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: '',
                message: 'Started Fetching'
            }
        case DELETE_CHAPTER_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                isRendering: true,
                isAdding: false,
                isDeleting: false,
                error: '',
                message: 'Deleted chapter'
            }
        case DELETE_CHAPTER_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to Delete the Chapter'
            }   
        default:
            return state  
    }
};