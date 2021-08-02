import React from 'react'
import {connect} from "react-redux";
import {filters} from "../redux/actions/filter";

 function Categories (props) {
    const mas = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]
    return (
        <div className="categories">
        <ul>
            {props.mas.map((name, index) => {
                return (
                    <li
                        key={name}
                        className={props.activeItem === index ? 'active': ''}
                        onClick={() => props.filters(index)}
                    >{name}</li>
                )
            })}
        </ul>
    </div>
    )
}

function mapStateToProps (state) {
     return {
         activeItem: state.filter.activeItem,
         mas: state.filter.mas
     }
}

function mapDispatchToProps (dispatch) {
    return {
        filters: (index) => dispatch(filters(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)