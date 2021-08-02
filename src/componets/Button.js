import React from 'react'

import classNames from 'classnames'
export default function Button (props) {


    // const {totalCurrentPrice,totalItems, numbersPizzas} = useSelector(({cart}) => {
    //     return {
    //         totalCurrentPrice: cart.totalCurrentPrice,
    //         totalItems: cart.totalItems,
    //         numbersPizzas: cart.numbersPizzas
    //     }
    // })

    return (
        <button
            onClick={props.onClick}
            className={classNames('button', props.className, {
                'button--outline': props.outline,
            })}>
            {props.children}
        </button>
    )
}