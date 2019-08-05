import axios from "axios";

export const START_LOGGIN = "START_LOGGIN";
export const LOGGIN_SUCCESS = "LOGGIN_SUCCESS";
export const LOGGIN_FAIL = "LOGGIN_FAIL";

export const fetchLogin = user => dispatch => {
    dispatch({type: START_LOGGIN});
    return axios
      .post("", `grant_type=password&username=${user.username}&password=${user.password}`, {
        headers: {
          Authorization: "",
          'Content-Type': ""
        }
      })
      .then(res => {
        dispatch({ type: LOGGIN_SUCCESS });
        localStorage.setItem("token", res.data.access_token)
        return  true;
      })
      .catch(err => {
        dispatch({
          type: LOGGIN_FAIL,
          payload: `Incorrect Credentials`
        });
        return false;
      });
};
