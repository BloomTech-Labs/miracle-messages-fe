import React from "react"; 
import { axiosWithAuth } from "./AxiosWithAuth";

export const GET_CHAPTERS_SUCCESS = "GET_CHAPTERS_SUCCESS"; 
export const GET_CHAPTERS_FAIL = "GET_CHAPTERS_FAIL"; 

export const getChapter = chapter => async dispatch => {
    return dispatch({
        type: GET_CHAPTERS_SUCCESS
    })

    axiosWithAuth()
        .get()
        .then(res => {
            console.log("response from SearchBarAction", res)
        })
        .catch(error => {
            console.log(error)
            return dispatch({
                type: GET_CHAPTERS_FAIL
            })   
        })
}