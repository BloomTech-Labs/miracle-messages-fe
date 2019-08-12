import { 
    createNotification,
    NOTIFICATION_TYPE_SUCCESS,
    NOTIFICATION_TYPE_ERROR,
    NOTIFICATION_TYPE_WARNING,
    NOTIFICATION_TYPE_INFO } from 'react-redux-notify';

const mySuccessNotification = {
    message: "You Have Been Logged In",
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 5000,
    canDismiss: true
}

const myErrorNotification = {
  message: "You have been logged in!",
  type: NOTIFICATION_TYPE_ERROR,
  duration: 5000,
  canDismiss: true
};

export const successNotification = (message) => dispatch => {
  return dispatch(createNotification({ ...mySuccessNotification, message: message }));
};

export const errorNotification = message => dispatch => {
  return dispatch(
    createNotification({ ...myErrorNotification, message: message })
  );
};