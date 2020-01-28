import React, { Component } from 'react';

import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build-Controls/Build-Controls";

export class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 0,
            bacon: 0,
            bread: 0
        },
        totalPrice: 0,
        purchaseable: false
    }

    INGREDIENT_PRICE = {
        cheese: 10.2,
        meat: 45.0,
        salad: 30.0,
        bacon: 15.0,
        bread: 10
    }

    updatePurchase(updatedIngredients) {

        const sum = Object.keys(updatedIngredients)
            .map(key => updatedIngredients[key])
            .reduce((sum, el) => sum + el, 0)
        this.setState({ purchaseable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        let updatedIngredients = {
            ... this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + this.INGREDIENT_PRICE[type]

        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
        this.updatePurchase(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1
        let updatedIngredients = {
            ... this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice - this.INGREDIENT_PRICE[type]

        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
        this.updatePurchase(updatedIngredients)
    }

    orderHandler = () => {

    }

    render() {

        let disabledInfo = {
            ... this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    orderNow={this.orderHandler} />
            </Wrapper>
        )
    }
}