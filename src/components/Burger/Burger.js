import React from 'react'

import Classes from './Burger.module.scss';

import BurgerIngredient from './Burger-Ingredient/Burger-Ingredient'

const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredient key={key + i} type={key} />
            })
        })
        .reduce((prev, current) => prev.concat(current), [])
    console.log(transformedIngredient);
    if (transformedIngredient.length === 0) {
        transformedIngredient = 'Please start adding ingredients'
    }

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger