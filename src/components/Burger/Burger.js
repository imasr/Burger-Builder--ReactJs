import React from 'react'

import Classes from './Burger.module.scss';

import BurgerIngredient from './Burger-Ingredient/Burger-Ingredient'

const burger = (props) => {
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger