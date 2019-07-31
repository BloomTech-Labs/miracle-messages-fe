import axios from 'axios';

export const ADDING_VOLUNTEER_START='ADDING_VOLUNTEER_START';
export const ADDING_VOLUNTEER_SUCCESS='ADDING_VOLUNTEER_SUCCESS';
export const ADDING_VOLUNTEER_FAIL='ADDING_VOLUNTEER_FAIL';

// add a new volunteer

export const addVolunteers = volunteers => dispatch => {
    const volunteer = {
        'fname': volunteer.fname,
        'lname': volunteer.lname,
        'email': volunteer.email,
        'phone': volunteer.phone,
        'city': volunteer.city,
        'state': volunteer.state,
        'country': volunteer.country,
        'comment': volunteer.comment
    }

    const config = {
        headers: {
            'Content-type': 'aplication/json'
        }
    }

    dispatch({ 
        type: ADDING_VOLUNTEER_START});
    return axios
        .post('', volunteer, config)
        .then(res => {
            dispatch({
                type: ADDING_VOLUNTEER_SUCCESS});
            return true;
        })
        .catch(err => {
            dispatch({ 
                type: ADDING_VOLUNTEER_FAIL,
                payload: err.data
            });
         return false;
    });        
}


