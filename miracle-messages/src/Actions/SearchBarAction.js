import axios from "axios"; 

export const GET_CHAPTERS_FETCHING = "GET_CHAPTERS_FETCHING"; 
export const GET_CHAPTERS_SUCCESS = "GET_CHAPTERS_SUCCESS"; 
export const GET_CHAPTERS_FAIL = "GET_CHAPTERS_FAIL"; 
// to filter through chapters 
export const FILTER_CHAPTERS = "FILTER_CHAPTERS"
// to filter through chapters

export const getChapter = chapter => async dispatch => {
     dispatch({
        type: GET_CHAPTERS_FETCHING
    }); 

    axios
    .get("localhost:5000/api/chapter", chapter)
    .then(res => {
        console.log(res)
        dispatch({
            type: GET_CHAPTERS_SUCCESS
        })
    })
    .catch(error => {
        console.log(error)
        return dispatch ({
            type: GET_CHAPTERS_FAIL
        });
    });
}

export const filterChapters = chapters => dispatch => {
    return dispatch[{
        type: FILTER_CHAPTERS, 
        payload: {
          chapter: chapters
        }
    }]
}
