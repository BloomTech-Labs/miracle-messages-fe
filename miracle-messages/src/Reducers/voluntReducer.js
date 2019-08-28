import {
    FETCH_VOLUNTEER_INFO,
    FETCH_VOLUNTEER_SUCCESS,
    FETCH_VOLUNTEER_FAIL,
    DELETE_PARTNER,
    DELETE_PARTNER_SUCCESS,
    DELETE_PARTNER_ERR,
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
        case DELETE_VOLUNTEER:
            return {
                ...state,
                error: null,
                fetching: true
            }
        case DELETE_VOLUNTEER_SUCCESS:
            return {
                ...state,
                fetching:false,
                error: null,
                sponsorData: null
            }
        case DELETE_VOLUNTEER_ERR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        
            default:
                 return state
    }
}