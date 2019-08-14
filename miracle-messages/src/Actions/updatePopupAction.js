export const UPDATE_POPUP = "UPDATE_POPUP";

//this action enables us to display or hide a pop-up for the city

export const updatePopupAction = popupinfo => dispatch => {
  dispatch({
    type: UPDATE_POPUP,
    payload: popupinfo
  });
};

export default updatePopupAction;
