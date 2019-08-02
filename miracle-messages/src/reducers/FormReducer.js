import {
    ADD_VOLUNTEER_START,
    ADD_VOLUNTEER_SUCCESS,
    ADD_VOLUNTEER_FAIL
} from '../actions/FormActions';

const initialState = {
    volunteers: [],
    volunteer: {},
    status: {
    isAdding: false,
    addSuccess: false,
    addFail: false,
    error: null,
    }    
};

const volunteerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_VOLUNTEER_START:
            return {
                ...state,
                status: {
                    isAdding: true,
                    addSuccess: false,
                    addFail: false
                }
                // addingVolunteer: true,
                // volunteerAdded: false,
                // errors: null,
            };           
        case ADD_VOLUNTEER_SUCCESS:
            return {
                ...state,
                volunteers: [...state.volunteers, action.payload],
                volunteer: action.payload,
                status: {
                    ...state.status,
                    isAdding: false,
                    addSuccess: true,
                    addFail: false
                }
                // addingVolunteer: false,
                // volunteerAdded: true,
                // errors: null,          
            };                      
            
        case ADD_VOLUNTEER_FAIL: 
            return {
                ...state,
                status: {
                    ...state.status,
                    addFail: true
                },
                error: action.payload
                // addingVolunteer: false,
                // volunteerAdded: false,
                // errors: action.payload
            }               
           
        default:
            return state;
    }
}
export default volunteerReducer;