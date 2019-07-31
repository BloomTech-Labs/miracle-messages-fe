import {
    ADDING_VOLUNTEER_START,
    ADDING_VOLUNTEER_SUCCESS,
    ADDING_VOLUNTEER_FAIL
} from '../actions/FormActions';

const initialState = {
    isRegistered: false,
    isFetching: false,
    errors: null,
    volunteer: {}
};

const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADDING_VOLUNTEER_START:
            return {
                ...state,
                isFetching: true,
                isRegistered: false,
                errors: null                
            };
        case ADDING_VOLUNTEER_SUCCESS:
            return {
                isFetching: true,
                isRegistered: true,
                errors: null,                
            };
        case ADDING_VOLUNTEER_FAIL: 
            return {
                isFetching: false,
                isRegistered: false,
                errors: action.payload
            }
        default:
            return state;
    }
}
export default formReducer