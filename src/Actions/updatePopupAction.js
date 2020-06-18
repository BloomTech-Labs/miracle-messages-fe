export const UPDATE_POPUP = "UPDATE_POPUP";
export const UPDATE_REUNION_POPUP = "UPDATE_REUNION_POPUP";

//this action enables us to display or hide a pop-up for the city

export const updatePopupAction = (popupinfo) => (dispatch) => {
  dispatch({
    type: UPDATE_POPUP,
    payload: popupinfo,
  });
};

export const updateReunuinAction = (popupinfo) => (dispatch) => {
  dispatch({
    type: UPDATE_REUNION_POPUP,
    payload: popupinfo,
  });
};

export default updatePopupAction;
