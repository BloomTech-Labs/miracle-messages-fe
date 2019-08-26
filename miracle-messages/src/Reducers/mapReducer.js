import {
  FETCH_CHAPTER_INFO,
  FETCH_CHAPTER_SUCCESS,
  FETCH_CHAPTER_FAIL
} from "../Actions/index";
import { UPDATE_POPUP } from "../Actions/updatePopupAction";
import { TOGGLE_SLIDE } from "../Actions/SlideToggleAction";
import { ON_VIEWPORT_CHANGED } from "../Actions/OnViewportAction";

const initialState = {
  viewport: {
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  },
  chapter_data: [], //this gets populated with componentDidMount
  popupInfo: {
    id: 17,
    city: "San Francisco",
    numvolunteers: 50,
    longitude: -122.431297,
    latitude: 37.773972,
    state: "CA",
    title: "San Francisco",
    numreunions: 150,
    msg_recorded: 75,
    msg_delivered: 25,
    chapter_img_url:
      "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/BrianBevCropped.png",
    reunion_img_url:
      "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/wayne%20jasmine.jpg",
    established_date: "12/01/2014",
    description:
      "We host weekly volunteer sessions at DSCS! Learn more at miraclemessages.org/events",
    story:
      "Wayne reunited with his beloved niece Jasmine and the rest of his family after years of being disconnected from them. Today, Wayne is off-the-streets thanks to his reunion!",
    email: "kevin@miraclemessages.org, jess@miraclemessages.org",
    partners: [
      {
        category: "sponsor",
        name: "AT&T",
        site_url: "https://www.att.com/local/california/san-francisco",
        icon_url:
          "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/att-logo.png"
      },

      {
        category: "partner",
        name: "DSCS",
        site_url: "https://www.dscs.org/",
        icon_url:
          "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/DSCS.jpg"
      }
    ]
  }, //null means no pop-ups are being rendered for any of the cities
  fetching: false,
  error: null, //learn more is a toggleinside the pop-ups
  openDrawer: true
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
