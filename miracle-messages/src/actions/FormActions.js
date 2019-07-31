import axios from 'axios';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

export const ADDING_VOLUNTEER_START='ADDING_VOLUNTEER_START';
export const ADDING_VOLUNTEER_SUCCESS='ADDING_VOLUNTEER_SUCCESS';
export const ADDING_VOLUNTEER_FAIL='ADDING_VOLUNTEER_FAIL';

// add a new volunteer

export const addVolunteers = user => dispatch => {
    const volunteer = {
        'fname': user.fname,
        'lname': user.lname,
        'email': user.email,
        'phone': user.phone,
        'city': user.city,
        'state': user.state,
        'country': user.country,
        'comment': user.comment
    }

    // const config = {
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // }

    dispatch({ 
        type: ADDING_VOLUNTEER_START});
    return axios
        .post('', volunteer)
        .then(res => {
            console.log("res data")
            dispatch({
                type: ADDING_VOLUNTEER_SUCCESS, payload: res.data});
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


