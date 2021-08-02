import React from 'react'

const initialState = {
    items: [],
    isLoading: false
}

export default function pizzasReducer (state = initialState, action) {

        switch (action.type) {
            case 'SET_PIZZAS':
                return {
                    ...state,
                    items: action.payload,
                    isLoading: action.isLoading
                }
            case 'GETPIZZAS' :
                return  {
                    ...state,
                    isLoading: action.isLoading
                }
            default :
                return state
        }
}