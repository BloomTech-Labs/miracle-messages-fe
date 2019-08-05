
export const UPDATE_POPUP='UPDATE_POPUP'


export const updatePopupAction = (popupinfo)=> dispatch => {dispatch({ 
    type: UPDATE_POPUP,
    payload:popupinfo})}

    export default updatePopupAction