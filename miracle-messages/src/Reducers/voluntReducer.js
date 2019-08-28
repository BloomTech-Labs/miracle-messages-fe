import {
    FETCH_VOLUNTEER_INFO,
    FETCH_VOLUNTEER_SUCCESS,
    FETCH_VOLUNTEER_FAIL
} from '../Actions/index';

const initialState = {
  volunteerData: [],
  fetching: false,
  error: null
};

export const voluntReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VOLUNTEER_INFO: 
            return {
                ...state,
                fetching: true,
                error: null
            }
        case FETCH_VOLUNTEER_SUCCESS: 
            return {
                ...state,
                volunteerData: action.payload,
                fetching: false,
                error: null
            }
        case FETCH_VOLUNTEER_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
//         case ADD_VOLUNTEERS_START: 
//             return {
//                 ...state,
//                 isFetching: true,
//                 isRendering: false,
//                 isAdding: false,
//                 isDeleting: false,
//                 error: null,
//                 message: 'Started Fetching'
//             }
//         case ADD_VOLUNTEERS_SUCCESS: 
//             return {
//                 ...state,
//                 isFetching: false,
//                 isRendering: true,
//                 isAdding: true,
//                 isDeleting: false,
//                 error: null,
//                 message: 'Added volunteer'
//             }
//         case ADD_VOLUNTEERS_FAIL:
//             return {
//                 ...state,
//                 isFetching: false,
//                 isRendering: false,
//                 isAdding: false,
//                 isDeleting: false,
//                 error: action.payload,
//                 message: 'Fail to Add Volunteers'
//             }
//         case DELETE_VOLUNTEERS_START: 
//             return {
//                 ...state,
//                 isFetching: true,
//                 isRendering: false,
//                 isAdding: false,
//                 isDeleting: false,
//                 error: null,
//                 message: 'Started Deleting'
//             }
//         case DELETE_VOLUNTEERS_SUCCESS: 
//             return {
//                 ...state,
//                 isFetching: false,
//                 isRendering: false,
//                 isAdding: false,
//                 isDeleting: true,
//                 error: null,
//                 message: 'Deleted volunteer'
//             }
//         case DELETE_VOLUNTEERS_FAIL:
//             return {
//                 ...state,
//                 isFetching: false,
//                 isRendering: false,
//                 isAdding: false,
//                 isDeleting: false,
//                 error: action.payload,
//                 message: 'Fail to Delete Volunteers'
//             }
//             default:
//                 return state
//     }
// }