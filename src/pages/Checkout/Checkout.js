import React from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
const state = {
  ingredients: {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1,
  },
};
const continueCheckoutHandler = () => {};
const cancelCheckoutHandler = () => {
  console.log("sss");
  this.props.history.goBack();
};

export const Checkout = () => {
  // render() {
  return (
    <div>
      <CheckoutSummary
        ingredients={state.ingredients}
        continueCheckout={continueCheckoutHandler}
        cancelCheckout={cancelCheckoutHandler}
      />
    </div>
  );
  // }
};
