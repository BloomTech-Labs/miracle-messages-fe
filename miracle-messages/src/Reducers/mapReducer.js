import {
  FETCH_CHAPTER_INFO,
  FETCH_CHAPTER_SUCCESS,
  FETCH_CHAPTER_FAIL,
  FETCH_CHAPTER_DEFAULT_INFO,
  FETCH_CHAPTER_DEFAULT_SUCCESS,
  FETCH_CHAPTER_DEFAULT_FAIL
} from '../Actions/index';
import { UPDATE_POPUP } from '../Actions/updatePopupAction';
import { TOGGLE_SLIDE } from '../Actions/SlideToggleAction';
import { ON_VIEWPORT_CHANGED } from '../Actions/OnViewportAction';

const initialState = {
  viewport: {
    latitude: 37.785164,
    longitude: -110,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  },
  chapter_data: [], //this gets populated with componentDidMount
  popupInfo: null,
  fetching: false,
  error: null, //learn more is a toggleinside the pop-ups
  openDrawer: true,
  zoom: false
};

export const mapReducer = (state = initialState, action) => {
  //reducer to set the state for chapter_data
  switch (action.type) {
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
        fetching: false,
        error: null
      };

    case FETCH_CHAPTER_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case FETCH_CHAPTER_DEFAULT_INFO:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_CHAPTER_DEFAULT_SUCCESS:
      return {
        ...state,
        fetching: false,
        popupInfo: action.payload,
        error: null
      };
    case FETCH_CHAPTER_DEFAULT_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    //reducer to set the state for the city popups
    case UPDATE_POPUP:
      return {
        ...state,
        popupInfo: action.payload
      };

    //reducer to toggle the city slide out
    case TOGGLE_SLIDE:
      return {
        ...state,
        openDrawer: action.payload
      };

    //reducer for viewport
    case ON_VIEWPORT_CHANGED:
      return {
        ...state,
        viewport: action.payload
      };

    default:
      return state;
  }
};

// get chapter data chapter reducer x

//viewport reducer
//popup reducer
//learn more reducer
//once we have the form builtjoin chapter/sign up to volunteer.
//create chapter
