import axios from "axios";

export const setPizzas = (items, isLoading) => ({
    type: 'SET_PIZZAS',
    payload: items,
    isLoading: isLoading
})

export const getPizzas = (isLoading) => ({
    type: 'GETPIZZAS',
    isLoading: isLoading
})



export const loadingPizzas = (isLoading,filtersActive ,sortActive ) => {
    return async dispatch => {
        dispatch(getPizzas(isLoading))
        let sortName = ''
        switch (sortActive) {
            case 0:
                sortName = 'popular'
                break
            case 1:
                sortName = 'price'
                break
            case 2:
                sortName = 'alphabet'
                break
            default :
                console.log("Hai")
        }
        try {

            console.log(sortName)
            if(filtersActive === 0) {
                axios(`http://localhost:3005/pizzas?_sort=${sortName}&_order=asc`).then(resp => dispatch(setPizzas(resp.data, true)))

            } else {
                axios(`http://localhost:3005/pizzas?category=${filtersActive - 1}&_sort=price&_order=asc`).then(resp => dispatch(setPizzas(resp.data, true)))
            }
        }
        catch (e) {
            console.log(e)
        }

    }
}