import React, { Component } from "react";

import Wrapper from "../../hoc/Wrapper/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build-Controls/Build-Controls";
import Modal from "../../shared/components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/Order-Summary/Order-Summary";

import axios from "../../axios-orders";
import Spinner from "../../shared/components/UI/Spinner/Spinner";
export class BurgerBuilder extends Component {
  modalmessage = "A Burger with Following ingredients";
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      salad: 0,
      bacon: 0,
      bread: 0,
    },
    totalPrice: 0,
    purchaseable: false,
    purchasing: false,
    loading: false,
  };

  INGREDIENT_PRICE = {
    cheese: 10.2,
    meat: 45.0,
    salad: 30.0,
    bacon: 15.0,
    bread: 10,
  };

  updatePurchase(updatedIngredients) {
    const sum = Object.keys(updatedIngredients)
      .map((key) => updatedIngredients[key])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    let updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + this.INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchase(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    let updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - this.INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchase(updatedIngredients);
  };

  initiatePurchasing = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchasing = () => {
    this.setState({ purchasing: false });
  };

  continuePurchase = async () => {
    this.setState({ loading: true });
    console.table(this.state);
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Ashish Singh",
        phone: 8678678689,
        address: {
          street: "ward 12 Mahdah",
          city: "Buxar",
          state: "Bihar",
          country: "India",
          pin: 802103,
        },
        email: "ashishs723@gmail.com",
      },
      deliveyMethod: "fastest",
    };
    axios
      .post("/order", order)
      .then((res) => {
        console.log(res);
        this.setState({ loading: false, purchasing: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        title={"Order Summary"}
        message={this.modalmessage}
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        continue={this.continuePurchase}
        cancel={this.cancelPurchasing}
      />
    );
    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <Wrapper>
        <Modal show={this.state.purchasing} modalClose={() => {}}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchaseable={this.state.purchaseable}
          orderNow={this.initiatePurchasing}
        />
      </Wrapper>
    );
  }
}
