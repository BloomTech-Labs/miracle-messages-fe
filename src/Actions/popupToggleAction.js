/* import city_info from "../Components/MapComponents/city_info";
 */
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const CLOSE_POPUP = "CLOSE_POPUP";
export const TOGGLE_REUNION_POPUP = "TOGGLE_REUNION_POPUP";
export const CLOSE_REUNION_POPUP = "CLOSE_REUNION_POPUP";

//this action enables us to toggle the "learn more" button back and forth inside the city pop-ups
export const popupToggleAction = (city_info, openPopup) => (dispatch) => {
  dispatch({
    type: TOGGLE_POPUP,
    payload: {
      openPopup: true,
      latitude: city_info.latitude,
      longitude: city_info.longitude,
    },
  });
};

export const reunionPopupToggle = (reunion_info, openPopup) => (dispatch) => {
  dispatch({
    type: TOGGLE_REUNION_POPUP,
    payload: {
      openPopup: true,
      latitude: reunion_info.destLatitude,
      longitude: reunion_info.destLongitude,
    },
  });
};

export const popupClose = () => (dispatch) => {
  dispatch({
    type: CLOSE_POPUP,
    payload: { openPopup: false },
  });
};

export const reunionPopupClose = () => (dispatch) => {
  dispatch({
    type: CLOSE_REUNION_POPUP,
    payload: { openPopup: false },
  });
};
