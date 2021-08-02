export const sort = (activeItem) =>({
    type: 'SORT',
    activeItem
})


export const setActiveItem = (activeValue) => ({
    type: 'SETACTIVEVALUE',
    activeValue
})


export function setItem() {
    return (dispatch, getState) => {
        const state = getState().sortPopup.activeValue
        dispatch(setActiveItem(!state))
    }
}

export function setItemRef (activeItem) {
    return(dispatch) => {
        dispatch(setActiveItem(activeItem))
    }
}