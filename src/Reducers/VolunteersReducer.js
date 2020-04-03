import {
    GET_VOLUNTEERS_START,
    GET_VOLUNTEERS_SUCCESS,
    GET_VOLUNTEERS_FAIL,
    ADD_VOLUNTEERS_START,
    ADD_VOLUNTEERS_SUCCESS,
    ADD_VOLUNTEERS_FAIL,
    DELETE_VOLUNTEERS_START,
    DELETE_VOLUNTEERS_SUCCESS,
    DELETE_VOLUNTEERS_FAIL    
} from '../Actions/AdminPageActions';

const initialState = {
   isFetching: false,
   isRendering: false,
   isAdding: false,
   isDeleting: false,
   error: null,
   message: ''
};

export const volunteersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VOLUNTEERS_START: 
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Started Fetching'
            }
        case GET_VOLUNTEERS_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                isRendering: true,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Got Volunteers'
            }
        case GET_VOLUNTEERS_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to Get Volunteers'
            }
        case ADD_VOLUNTEERS_START: 
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Started Fetching'
            }
        case ADD_VOLUNTEERS_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                isRendering: true,
                isAdding: true,
                isDeleting: false,
                error: null,
                message: 'Added volunteer'
            }
        case ADD_VOLUNTEERS_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to Add Volunteers'
            }
        case DELETE_VOLUNTEERS_START: 
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Started Deleting'
            }
        case DELETE_VOLUNTEERS_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: true,
                error: null,
                message: 'Deleted volunteer'
            }
        case DELETE_VOLUNTEERS_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to Delete Volunteers'
            }
            default:
                return state
    }
}