// import axios from 'axios';

// export const LOGIN_START = "LOGIN_START";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAIL = "LOGIN_FAIL";

// export const fetchLogin = user => dispatch => {
//     dispatch({ type: LOGIN_START });
//     return axios 
//         .post("", `grant_type=password&username=${user.username}&password=${user.password}`, {
//             headers: {
//                 Authorization: "",
//                 "Content-Type": ""
//             }
//         })
//         .then(res => {
//             dispatch({ type: LOGIN_SUCCESS });
//             localStorage.setItem("token", res.)
//         })
// }