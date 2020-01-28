import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Classes from './Burger-Ingredient.module.scss';

class BurgerIngredient extends Component {

    ingTypes = Object.freeze({
        cheese: 'Cheese',
        meat: 'Meat',
        bread: 'Bread',
        bacon: 'Bacon',
        salad: "Salad"
    })

    render() {
        let ingredients = null
        switch (this.props.type) {
            case ('bread-top'):
                ingredients = (
                    <div className={Classes.BreadTop}>
                        <div className={Classes.Seeds1}></div>
                        <div className={Classes.Seeds2}></div>
                    </div>
                )
                break
            case ('bread-bottom'):
                ingredients = <div className={Classes.BreadBottom}></div>

                break
            case (this.props.type):
                ingredients = <div className={Classes[this.ingTypes[this.props.type]]}></div>
                break
            default:
                ingredients = null
        }
        return ingredients
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient