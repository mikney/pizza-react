import React from 'react'
import Categories from "../componets/Categories";
import SortPopup from "../componets/SortPopup";
import PizzaBlock from "../componets/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import LoadingBlock from "../componets/PizzaBlock/pizzaLoadingBlock";
import {addPizzas, handlerAddPizza, onAddPizzaName, sumPizzasHandler} from "../redux/actions/cart";

export  default function Home ({pizzas}) {

    const [categories, setCategories] = React.useState(0)
    const [nameSort, setSort] = React.useState(0)
    const [show, setShow] = React.useState(true)
    const {isLoading, items} = useSelector(({pizzas, cart}) => {
        return {
            isLoading: pizzas.isLoading,
            items: cart.items.length
        }
    })

    const dispatch = useDispatch()

    const onClickCategories = (index) => {
        const activeItem = index
        setCategories(() => activeItem)
    }
    const onClickSortPopup = (index) => {
        const activeItem = index
        setSort(() => activeItem)
    }
    const hideSortPopup = (use) => {
        if(use) {
            setShow(!use)
        } else {
            setShow(() => !show)
        }


    }
    //

    //  const sumPizzasHandler = (index) =>   {
    //     const newItem = items[index]
    //      console.log(newItem.sumPizzas)
    //    if (typeof newItem.sumPizzas === undefined) {
    //       return 0
    //     } else {
    //        return newItem.sumPizzas
    //     }
    //
    //
    //   // return items[index].sumPizzas === undefined ? 0 : items[index].sumPizzas
    //   //   return index
    // }

    const onAddPizzas = obj => {
        dispatch(handlerAddPizza(obj))
        console.log(obj)
    }
    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            onClick={onClickCategories}
                            activeItem={categories}
                        />
                        <SortPopup />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {isLoading ? pizzas.map((mas, index) => {
                            // dispatch(sumPizzasHandler(index))
                            //     dispatch(onAddPizzaName(mas.name))
                            return <PizzaBlock
                                key={mas + index}
                                indexPizza={index}
                                id={mas.id}
                                name={mas.name}
                                types={mas.types}
                                sizes={mas.sizes}
                                price={mas.price}
                                category={mas.category}
                                rating={mas.rating}
                                imageUrl={mas.imageUrl}
                                onAddPizzas={onAddPizzas}
                            /> })
                            : Array(10).fill(0).map((_, index) => < LoadingBlock key={index} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

