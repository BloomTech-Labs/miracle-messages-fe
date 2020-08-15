import {
  FETCH_CHAPTER_INFO,
  FETCH_CHAPTER_SUCCESS,
  FETCH_CHAPTER_FAIL,
  FETCH_CHAPTER_DEFAULT_INFO,
  FETCH_CHAPTER_DEFAULT_SUCCESS,
  FETCH_CHAPTER_DEFAULT_FAIL,
  FETCHING_REUNION,
  GET_CHAPTER_REUNIONS,
  FETCH_REUNION_SUCCESS,
  FETCH_REUNION_ERR,
  FETCH_CLUSTER_REUNIONS_SUCCESS,
} from "../Actions/index";
import { UPDATE_POPUP } from "../Actions/updatePopupAction";
import { UPDATE_REUNION_POPUP } from "../Actions/updatePopupAction";
import { TOGGLE_SLIDE } from "../Actions/SlideToggleAction";
import { ON_VIEWPORT_CHANGED } from "../Actions/OnViewportAction";

import { UPDATE_CHAPTERS } from "../Actions/SearchBarAction";
import {
  TOGGLE_POPUP,
  CLOSE_POPUP,
  CLOSE_REUNION_POPUP,
  TOGGLE_REUNION_POPUP,
} from "../Actions/popupToggleAction";
import { FlyToInterpolator } from "react-map-gl";

const initialState = {
  viewport: {
    latitude: 43.785164,
    longitude: -101,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  },
  chapter_data: [], //this gets populated with componentDidMount
  clicked_chapters_reunion: [],
  popupInfo: null,
  fetching_chapters: false,
  fetching_reunions: false,
  chapter_error: null, //learn more is a toggleinside the pop-ups
  reunion_error: null,
  //openDrawer: true,
  openPopup: false,
  openReunionPopup: false,
  zoom: false,
  latitude: 37.785164,
  longitude: -110,
};

export const mapReducer = (state = initialState, action) => {
  //reducer to set the state for chapter_data
  switch (action.type) {
    case FETCH_CHAPTER_INFO:
      return {
        ...state,
        fetching_chapters: true,
        chapter_error: null,
      };

    case FETCH_CHAPTER_SUCCESS:
      return {
        ...state,
        chapter_data: action.payload,
        fetching_chapters: false,
        chapter_error: null,
      };

    case FETCH_CHAPTER_FAIL:
      return {
        ...state,
        fetching_chapters: false,
        chapter_error: action.payload,
      };
    case FETCH_CLUSTER_REUNIONS_SUCCESS:
      return {
        ...state,
        clicked_chapters_reunion: state.chapter_data.filter(
          (a) =>
            Math.round(action.payload[0]) === Math.round(a.originLatitude) &&
            Math.round(action.payload[1]) === Math.round(a.originLongitude)
        ),
      };
    case FETCH_CHAPTER_DEFAULT_INFO:
      return {
        ...state,
        fetching: true,
        chapter_error: null,
      };
    case FETCH_CHAPTER_DEFAULT_SUCCESS:
      return {
        ...state,
        fetching_chapters: false,
        popupInfo: action.payload,
        chapter_error: null,
      };
    case FETCH_CHAPTER_DEFAULT_FAIL:
      return {
        ...state,
        fetching_chapters: false,
        chapter_error: action.payload,
      };
    // reducer to set the state for reunions
    case FETCHING_REUNION:
      return {
        ...state,
        fetching_reunions: true,
        reunion_error: null,
      };
    case FETCH_REUNION_SUCCESS:
      return {
        ...state,
        reunion_data: action.payload,
        fetching_reunions: false,
        reunion_error: null,
      };
    case FETCH_REUNION_ERR:
      return {
        ...state,
        fetching_reunions: false,
        reunion_error: action.payload,
      };
    case GET_CHAPTER_REUNIONS:
      return {
        ...state,
        clicked_chapters_reunion: action.payload,
      };
    //reducer to set the state for the city popups
    case UPDATE_POPUP:
      return {
        ...state,
        popupInfo: action.payload,
      };

    case UPDATE_REUNION_POPUP:
      return {
        ...state,
        popupInfo: action.payload,
      };

    //reducer to toggle the city slide out
    case TOGGLE_SLIDE:
      return {
        ...state,
        openDrawer: action.payload,
      };

    case TOGGLE_POPUP:
      return {
        ...state,
        openPopup: action.payload.openPopup,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        viewport: {
          ...state.viewport,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          transitionDuration: "auto",
          transitionInterpolator: new FlyToInterpolator(),
        },
      };

    case TOGGLE_REUNION_POPUP:
      return {
        ...state,
        openReunionPopup: action.payload.openPopup,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        viewport: {
          ...state.viewport,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          transitionDuration: "auto",
          transitionInterpolator: new FlyToInterpolator(),
        },
      };

    case CLOSE_POPUP:
      return {
        ...state,
        openPopup: action.payload.openPopup,
      };

    case CLOSE_REUNION_POPUP:
      return {
        ...state,
        openReunionPopup: action.payload.openPopup,
      };

    //reducer for viewport
    case ON_VIEWPORT_CHANGED:
      return {
        ...state,
        viewport: action.payload,
      };

    case UPDATE_CHAPTERS:
      return {
        ...state,
        chapter_data: action.payload,
      };

    default:
      return state;
  }
};
