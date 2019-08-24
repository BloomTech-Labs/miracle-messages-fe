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
    numvolunteers: 77,
    longitude: -122.431297,
    latitude: 37.773972,
    state: "CA",
    title: "San Francisco",
    numreunions: 10,
    msg_recorded: 75,
    msg_delivered: 25,
    chapter_img_url:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    reunion_img_url:
      "https://images.unsplash.com/photo-1503430410-6d2432cf3278?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    established_date: "08/13/2005",
    description:
      "Lorem ipsum dolor sit amet, vim ea probo posse, te erant semper delectus mea. Ne dolorum officiis iracundia his. Expetenda definiebas id vel, munere constituto in sed. Ad est wisi forensibus, ad sed dolore propriae neglegentur, augue debitis quo ad. Agam bonorum his ad",
    story:
      "Lorem ipsum dolor sit amet, vim ea probo posse, te erant semper delectus mea. Ne dolorum officiis iracundia his. Expetenda definiebas id vel, munere constituto in sed. Ad est wisi forensibus, ad sed dolore propriae neglegentur, augue debitis quo ad. Agam bonorum his ad",
    email: "john@miracle-messages.com",
    partners: [
      {
          "category": "sponsor",
          "name": "glide",
          "site_url": "https://www.glide.org/",
          "icon_url": "https://unm5i3x3smv2e4zlycj53ret-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/logo.svg"
      },
      {
          "category": "sponsor",
          "name": "goodWill",
          "site_url": "https://www.goodwill.org/",
          "icon_url": "https://www.goodwill.org/wp-content/uploads/2019/06/cropped-Goodwill-Industries-International-Logo-1.jpg"
      },
      {
          "category": "sponsor",
          "name": "SFPD",
          "site_url": "https://www.sanfranciscopolice.org/",
          "icon_url": "https://pbs.twimg.com/profile_images/880890495651545088/LcAV6z-c_400x400.jpg"
      },
      {
          "category": "sponsor",
          "name": "San Francisco Fire",
          "site_url": "https://sf-fire.org/",
          "icon_url": "https://upload.wikimedia.org/wikipedia/commons/1/19/San_Francisco_Fire_Department_Seal.png"
      },
      {
          "category": "sponsor",
          "name": "LGBT",
          "site_url": "https://www.sfcenter.org/",
          "icon_url": "https://pbs.twimg.com/profile_images/1019981834896097280/quGA-HOi.jpg"
      },
      {
          "category": "sponsor",
          "name": "Coalition on homelessness",
          "site_url": "http://www.cohsf.org/",
          "icon_url": "https://i2.wp.com/www.cohsf.org/wp-content/uploads/2017/03/coh_logo.png?fit=60%2C60"
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
