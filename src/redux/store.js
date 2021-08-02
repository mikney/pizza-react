import {combineReducers, createStore} from "redux";
import pizzasReducer from "./reducers/pizzas";
import filterReducer from "./reducers/filter";
import sortPopupReducer from "./reducers/sortPopup";
import cartReducer from "./reducers/cart";

export default combineReducers({
    pizzas: pizzasReducer,
    filter: filterReducer,
    sortPopup: sortPopupReducer,
    cart: cartReducer
})



