

const initialState = {
    sortName: [
        'популярности',
        'цене',
        'алфавиту'
    ],
    activeItem: 0,
    activeValue: false
}


export default function sortPopupReducer (state = initialState, action) {
    switch (action.type) {
        case 'SORT' :
            return {
                ...state,
                activeItem: action.activeItem,
            }
        case 'SETACTIVEVALUE' :
            return  {
                ...state,
                activeValue: action.activeValue
        }
        default :
            return state
    }
}