import { 
    FETCH_CHAPTER_INFO, 
    FETCH_CHAPTER_SUCCESS,
     FETCH_CHAPTER_FAIL, 
    
    } from "../Actions/index";

import {
    UPDATE_POPUP

} from "../Actions/updatePopupAction"

import { 
    TOGGLE_LEARN_MORE 
} from "../Actions/learnMoreAction";


    const initialState = {
        viewport: {
            latitude: 37.785164,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0
          },
          chapter_data: [], //this gets populated with componentDidMount
          popupInfo: null, //null means no pop-ups are being rendered for any of the cities
          learnMore: false,
          fetching: false, 
          error: null  //learn more is a toggleinside the pop-ups
    };

     export const mapReducer = (state = initialState, action )=>{

        switch (action.type){
            case FETCH_CHAPTER_INFO:
            return {
                ...state, 
                fetching: true,
                error: null
            };

            case FETCH_CHAPTER_SUCCESS:
            return {
                ...state,
                chapter_data: action.payload,
                fetching:false,
                error: null
            };

            case FETCH_CHAPTER_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

            case UPDATE_POPUP:
            return {
                ...state,
                popupInfo:action.payload,

            }
            case TOGGLE_LEARN_MORE:
            return {
                ...state,
                learnMore: action.payload
            }

            default:
            return state;
        }

    }


// get chapter data chapter reducer x 

//viewport reducer
//popup reducer
//learn more reducer
//once we have the form builtjoin chapter/sign up to volunteer.
//create chapter