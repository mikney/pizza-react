import pizzas from "./pizzas";


const initialState  = {
    items : {},
    totalCurrentPrice: 0,
    totalItems: 0,
}

export default function cartReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PIZZAS' :
            return  {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload]
                }
            }
        case 'SETCURRENTPRICE':
            return {
                ...state,
                totalCurrentPrice: action.totalCurrentPrice
            }
        case 'TOTALNUMBER':
            return {
                ...state,
                totalItems: action.totalItems
            }
        case 'ADDBUTTON':
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: action.sum
                }
            }
        case 'DELETEITEMS':
            return {
                ...state,
                items: {}
            }
        case 'DELETESELECTITEM':
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: []
                }
            }
        default :
            return state

    }
}