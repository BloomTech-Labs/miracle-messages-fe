import {
    FETCHING_PARTNER,
    FETCH_PARTNER_SUCCCESS,
    FETCH_PARTNER_ERR,
}from '../Actions/index'

const initialState = {
    sponsorData: [],
    fetching: false,
    error: null
};

export const partnerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_PARTNER:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case FETCH_PARTNER_SUCCCESS:
            return {
                ...state,
                sponsorData: action.payload,
                fetching: false,
                error: null
            };
        case FETCH_PARTNER_ERR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
            default:
                return state;
    }
}