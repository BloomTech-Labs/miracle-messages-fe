
export const TOGGLE_LEARN_MORE= "TOGGLE_LEARN_MORE"

//this action enables us to toggle the "learn more" button back and forth inside the city pop-ups
export const learnMoreAction = (learnMore)=> dispatch => {
    dispatch ({
        type: TOGGLE_LEARN_MORE,
        payload:!learnMore
    })
}