import React, {useEffect} from 'react'
import Home from "./pages/Home";
import Header from "./componets/Header";
import Cart from "./pages/Cart";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import {loadingPizzas, setPizzas} from "./redux/actions/pizzas";
import {connect, useDispatch, useSelector} from "react-redux";



function App (props) {

    const {filtersActive} = useSelector(({filter}) => {
        return {
            filtersActive: filter.activeItem
        }
    })
    const {sortActive} = useSelector(({sortPopup}) => {
        return {
            sortActive: sortPopup.activeItem
        }
    })

    const dispatch = useDispatch()
    React.useEffect (() => {
        dispatch(loadingPizzas(false,filtersActive,sortActive))
    },[filtersActive, sortActive])
    console.log(sortActive)
    return (
        < Header >
            <Route path='/cart' component={Cart}/>
            <Route path='/' exact component={() => <Home
                pizzas={props.items}
            />
            } />
        </Header>
    )
}
function mapStateToProps (state) {
    return {
        items: state.pizzas.items
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setPizzas: (items) => dispatch(setPizzas(items))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(App)

