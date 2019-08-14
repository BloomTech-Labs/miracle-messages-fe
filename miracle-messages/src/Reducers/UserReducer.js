import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,

    ADD_USERS_START,
    ADD_USERS_SUCCESS,
    ADD_USERS_FAIL,

    DELETE_USERS_START,
    DELETE_USERS_SUCCESS,
    DELETE_USERS_FAIL    
} from '../Actions/AdminPageActions';

const initialState = {
   isFetching: false,
   isRendering: false,
   isAdding: false,
   isDeleting: false,
   error: null,
   message: ''
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_START: 
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Started Fetching'
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isRendering: true,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Got users'
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to get the users'
            }   
        case ADD_USERS_START:
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Started addUser'
            }
        case ADD_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: true,
                isDeleting: false,
                error: null,
                message: 'Added User'
            }
        case ADD_USERS_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Fail to add user'
            }
        case DELETE_USERS_START:
            return {
                ...state,
                isFetching: true,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: null,
                message: 'Started deleteUser'
            }
        case DELETE_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: true,
                error: null,
                message: 'User deleted'
            }
        case DELETE_USERS_FAIL:
            return {
                ...state,
                isFetching: false,
                isRendering: false,
                isAdding: false,
                isDeleting: false,
                error: action.payload,
                message: 'Failed to Delete'
            }
        default:
            return state
    }
}