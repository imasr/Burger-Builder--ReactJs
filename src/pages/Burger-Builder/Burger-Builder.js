import React, { useEffect, useState } from "react";

import Wrapper from "../../core/Wrapper/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build-Controls/Build-Controls";
import Modal from "../../shared/components/Modal/Modal";
import OrderSummary from "../../components/Burger/Order-Summary/Order-Summary";

import axios from "../../axios-orders";
import Spinner from "../../shared/components/Spinner/Spinner";

const INGREDIENT_PRICE = {
  cheese: 10.2,
  meat: 45.0,
  salad: 30.0,
  bacon: 15.0,
  bread: 10,
};
const burgerState = {
  totalPrice: 0,
  purchaseable: false,
  purchasing: false,
  loading: false,
};

const BurgerBuilder = () => {
  const modalmessage = "A Burger with Following ingredients";
  const [state, setState] = useState(burgerState);

  const [ingredients, setIngredients] = useState({
    cheese: 0,
    meat: 0,
    salad: 0,
    bacon: 0,
    bread: 0,
  });

  const updatePurchase = (updatedIngredients, totalPrice) => {
    const sum = Object.keys(updatedIngredients)
      .map((key) => updatedIngredients[key])
      .reduce((sum, el) => sum + el, 0);

    setState({ ...state, purchaseable: sum > 0, totalPrice });
  };

  useEffect(() => {
    console.log(state, ingredients);
  });

  const addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...ingredients,
      [type]: ingredients[type] + 1,
    };

    setIngredients({
      ...ingredients,
      [type]: ingredients[type] + 1,
    });

    const totalPrice = state.totalPrice + INGREDIENT_PRICE[type];
    updatePurchase(updatedIngredients, totalPrice);
  };

  const removeIngredientHandler = (type) => {
    if (ingredients[type] <= 0) {
      return;
    }

    let updatedIngredients = {
      ...ingredients,
      [type]: ingredients[type] - 1,
    };

    setIngredients({
      ...ingredients,
      [type]: ingredients[type] - 1,
    });

    const totalPrice = state.totalPrice - INGREDIENT_PRICE[type];
    updatePurchase(updatedIngredients, totalPrice);
  };

  const initiatePurchasing = () => {
    setState({ ...state, purchasing: true });
  };

  const cancelPurchasing = () => {
    setState({ ...state, purchasing: false });
  };

  const continuePurchase = async () => {
    setState({ ...state, loading: true });
    console.table(state);
    const order = {
      ingredients: ingredients,
      price: state.totalPrice,
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
        setState({ ...state, loading: false, purchasing: false });
      })
      .catch((err) => {
        console.log(err);
        setState({ ...state, loading: false, purchasing: false });
      });
  };

  let disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = (
    <OrderSummary
      title={"Order Summary"}
      message={modalmessage}
      ingredients={ingredients}
      totalPrice={state.totalPrice}
      continue={continuePurchase}
      cancel={cancelPurchasing}
    />
  );
  if (state.loading) orderSummary = <Spinner />;

  return (
    <Wrapper>
      <Modal show={state.purchasing} modalClose={() => {}}>
        {orderSummary}
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        totalPrice={state.totalPrice}
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
        disabledInfo={disabledInfo}
        purchaseable={state.purchaseable}
        orderNow={initiatePurchasing}
      />
    </Wrapper>
  );
};
export default BurgerBuilder;
