
export const TOGGLE_LEARN_MORE= "TOGGLE_LEARN_MORE"


export const learnMoreAction = (learnMore)=> dispatch => {
    dispatch ({
        type: TOGGLE_LEARN_MORE,
        payload:!learnMore
    })
}