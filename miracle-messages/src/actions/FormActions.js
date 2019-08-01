import axios from 'axios';

export const ADD_VOLUNTEER_START='ADD_VOLUNTEER_START';
export const ADD_VOLUNTEER_SUCCESS='ADD_VOLUNTEER_SUCCESS';
export const ADD_VOLUNTEER_FAIL='ADD_VOLUNTEER_FAIL';

// add a new volunteer


     
    //     'fname': user.fname,
    //     'lname': user.lname,
    //     'email': user.email,
    //     'phone': user.phone,
    //     'city': user.city,
    //     'state': user.state,
    //     'country': user.country,
    //     'comment': user.comment
    // }

    // const config = {
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // }

    export const addVolunteers = (newVolunteer, newInterests ) =>  async dispatch => {
        // console.log(obj.value);
       dispatch({
           type: ADD_VOLUNTEER_START
       });
        // let newVolunteer = 
        axios
          .post('https://miracle-messages-staging.herokuapp.com/api/form', newVolunteer, newInterests)
          .then(res => {console.log("response", res)
              return dispatch({
                  type: ADD_VOLUNTEER_SUCCESS
              });
          })
          .catch(err => {
              return dispatch({ type: ADD_VOLUNTEER_FAIL, payload: err})
          });

    // return (dispatch) => {
    //      dispatch({ 
    //     type: ADDING_VOLUNTEER_START
    //     })    

    // request.then(res => {
    //         dispatch({
    //             type: ADDING_VOLUNTEER_SUCCESS, 
    //             payload: res.data
    //         });
    //     }).catch(err => {
    //         dispatch({ 
    //             type: ADDING_VOLUNTEER_FAIL,
    //             payload: err.data
    //         });
    //     });        
    // }
}
