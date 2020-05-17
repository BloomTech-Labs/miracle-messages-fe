export const ON_VIEWPORT_CHANGED = "ON_VIEWPORT_CHANGED";
export const ON_VIEWPORT_ZOOM = "ON_VIEWPORT_ZOOM";
export const FLY_TO_LOCATION = "FLY_TO_LOCATION";

export const onViewportChanged = (viewport) => (dispatch) => {
  dispatch({
    type: ON_VIEWPORT_CHANGED,
    payload: viewport,
  });
};

export const flyToLocation = (lat, long) => (dispatch) => {
  console.log(lat, long);
  dispatch({
    type: FLY_TO_LOCATION,
    payload: { lat: lat, long: long },
  });
};
