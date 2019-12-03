import { axiosWithAuth } from "./AxiosWithAuth";

export const GET_CHAPTERS_SUCCESS = "GET_CHAPTERS_SUCCESS"; 
export const GET_CHAPTERS_FAIL = "GET_CHAPTERS_FAIL"; 

export const getChapter = chapter => async dispatch => {
     dispatch({
        type: GET_CHAPTERS_SUCCESS
    }); 

    axiosWithAuth()
    .get("localhost:5000/api/chapter", chapter)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
        return dispatch ({
            type: GET_CHAPTERS_FAIL
        });
    });
}