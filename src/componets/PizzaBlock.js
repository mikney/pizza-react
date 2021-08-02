import React, {useEffect} from 'react'
import classNames from 'classnames'
import PropTypes from "prop-types";
import {connect, useDispatch, useSelector} from "react-redux";

import {setPizzas} from "../redux/actions/pizzas";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {addPizzas, cartPizzas, findSumPizza, getPrice, onAddPizzaName} from "../redux/actions/cart";
import Button from "./Button";


function PizzaBlock  (props) {

    const {id, imageUrl, name, types, sizes, price, onAddPizzas, category, rating, activeSizes, sizesClick, sumPizzas,indexPizza} = props
    const {masName, items, selectClick } = useSelector(({cart}) => {
        return {
            masName: cart.masName,
            items: cart.items,
            selectClick: cart.selectClick

        }
    })
    const dispatch = useDispatch()
    function la() {
        console.log(items[id] && items[id].length)
    }
    la()
    // useEffect((()=> {
    //     dispatch(() => onAddPizzaName(name))
    //     console.log('Я запустился', name)
    //
    // }),[])


    const nameTypes = ['традиционное', 'тонкое']
    const typeSize = [26, 30, 40]
    const [activeSize, setSize] = React.useState(sizes[0])
    const [activeType, setType] = React.useState(types[0])


    const onSelectTypes = (index) => {
        setType(index)
    }
    const onClickSize = (mas) => {
        setSize( mas)
    }
    const handlerAddPizza = () => {
        const obj = {
            id, imageUrl, name,
            type:nameTypes[activeType], size: activeSize, price
        }
        onAddPizzas(obj)
    }


        return (
            <div className="pizza-block" key={id} >
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {nameTypes.map((mas, index) => {
                       return <li
                           key={index}
                            className={classNames({
                                active: types.includes(index) && activeType === index ,
                                disabled: !types.includes(index)
                            })}
                            onClick={() => onSelectTypes(index)  }
                        >{mas}</li>
                    })}


                </ul>
                <ul>
                    {typeSize.map((mas, index) => {
                        return (
                            <li
                                key={index}
                                className={classNames({
                                    active: sizes.includes(mas) && activeSize === mas,
                                    disabled: !sizes.includes(mas)
                                })}
                                onClick={() => onClickSize(mas) }
                            >{mas} см.</li>
                        )
                    })}


                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price} руб.</div>
                <Button
                    className="button--add"
                    outline
                    onClick={handlerAddPizza}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{items[id] ? items[id].length : 0}</i>
                </Button>
            </div>
        </div>
        )
}


// PizzaBlock.propTypes =  {
//     name: PropTypes.string
// };


function mapStateToProps (state) {
    return {
        items: state.pizzas.items
    }
}


export default connect(mapStateToProps, null)(PizzaBlock)