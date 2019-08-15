export const ON_VIEWPORT_CHANGED = "ON_VIEWPORT_CHANGED";

//this action enables us to toggle the "learn more" button back and forth inside the city pop-ups
export const onViewportChanged = viewport => dispatch => {
  dispatch({
    type: ON_VIEWPORT_CHANGED,
    payload: viewport
  });
};