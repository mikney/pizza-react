


export const addPizzas = (obj) => {
    return {
        type: 'ADD_PIZZAS',
        payload: obj
    }
}

export const handlerAddPizza = (obj) => {
    return (dispatch) => {
        dispatch(addPizzas(obj))
        dispatch(getPrice())
    }
}

export const addButton = (id) => {
    return (dispatch, getState) => {
        const sum = [...getState().cart.items[id]]
        console.log(sum.pop())
        dispatch({
            type: 'ADDBUTTON',
            sum,
            id
        })

        dispatch(getPrice())
    }
}

export const addButtonMinus = (id) => {
    return (dispatch, getState) => {
        const sum = [...getState().cart.items[id]]
        sum.pop()
        dispatch({
            type: 'ADDBUTTON',
            sum,
            id
        })
    }
}
export const addButtonPlus = (id) => {
    return (dispatch, getState) => {
        const sum = getState().cart.items[id]
        const ll = sum[0]
        dispatch(addPizzas(ll))
        dispatch(getPrice())
        // dispatch({
        //     type: 'ADDBUTTON',
        //     sum,
        //     id
        // })
    }
}

export const deleteItems = () => {
    return (dispatch) =>   {
        dispatch({
        type: "DELETEITEMS"
        })
        dispatch(getPrice())
    }
}
export const deleteSelectItem = (id) =>{
    return (dispatch) => {
        dispatch({
            type: 'DELETESELECTITEM',
            id
        })
        dispatch(getPrice())
        }
}

export const getPrice = () => {
    return (dispatch, getState) => {
        let totalCurrentPrice = 0
        let totalNumber = []
        const sum = getState().cart.items
        const objectKeys = Object.keys(sum)
        console.log(objectKeys)
        objectKeys.map((mas, index) => {
            sum[mas].map(mass => {
                totalCurrentPrice += mass.price
                totalNumber.push(mass.id)
            })
            // sum[mas].length
        })
        console.log('Общая сумма ',totalCurrentPrice)
        // sum[0] &&  sum[0].reduce((acc, mas) => {
        //         acc += mas.price
        //     console.log(acc)
        //     },0)

        // console.log('SUMA ',sum)
        dispatch(setCurrentPrice(totalCurrentPrice))
        dispatch(totalItems(totalNumber.length))
    }
}


export const setCurrentPrice = (totalCurrentPrice) => {
    return {
        type: 'SETCURRENTPRICE',
        totalCurrentPrice
    }
}
export const totalItems = (totalItems) => {
    return {
        type: 'TOTALNUMBER',
        totalItems
    }
}