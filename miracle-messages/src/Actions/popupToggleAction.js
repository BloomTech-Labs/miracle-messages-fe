import city_info from "../Components/MapComponents/city_info";

export const TOGGLE_POPUP = "TOGGLE_POPUP";

//this action enables us to toggle the "learn more" button back and forth inside the city pop-ups
export const popupToggleAction = (city_info, openPopup) => dispatch => {
  dispatch({
    type: TOGGLE_POPUP,
    payload: {  openPopup: !openPopup,
                latitude: city_info.latitude,
                longitude: city_info.longitude
            }
  });
};