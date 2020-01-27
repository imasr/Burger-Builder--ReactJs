import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Classes from './Burger-Ingredient.module.scss';

class BurgerIngredient extends Component {

    render() {
        let ingredients = null

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredients = <div className={Classes.BreadBottom}></div>
                break
            case ('bread-top'):
                ingredients = (
                    <div className={Classes.BreadTop}>
                        <div className={Classes.Seeds1}></div>
                        <div className={Classes.Seeds2}></div>
                    </div>
                )
                break
            case ('meat'):
                ingredients = <div className={Classes.Meat}></div>
                break
            case ('cheese'):
                ingredients = <div className={Classes.Cheese}></div>
                break
            case ('bread'):
                ingredients = <div className={Classes.Salad}></div>
                break
            case ('bacon'):
                ingredients = <div className={Classes.Bacon}></div>
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