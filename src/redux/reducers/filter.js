

const initialState = {
    activeItem: 0,
    mas: ['Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]
}

export default function filterReducer (state = initialState, action) {
    switch (action.type) {
        case 'FILTER' :
            return {
                ...state,
                activeItem: action.payload
            }
        default :
            return state

    }
}