export const TOGGLE_SLIDE = "TOGGLE_SLIDE";

//this action enables us to toggle the "learn more" button back and forth inside the city pop-ups
export const slideToggleAction = openDrawer => dispatch => {
  dispatch({
    type: TOGGLE_SLIDE,
    payload: !openDrawer
  });
};
