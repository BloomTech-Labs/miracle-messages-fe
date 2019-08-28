export const ON_VIEWPORT_CHANGED = "ON_VIEWPORT_CHANGED";
export const ON_VIEWPORT_ZOOM = "ON_VIEWPORT_ZOOM";


export const onViewportChanged = viewport => dispatch => {
  dispatch({
    type: ON_VIEWPORT_CHANGED,
    payload: viewport
  });
};
