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
const continueCheckoutHandler = () => {
  console.log("continueCheckoutHandler");
};
const cancelCheckoutHandler = () => {
  console.log("cancelCheckoutHandler");
  this.props.history.goBack();
};

const Checkout = () => {
  return (
    <div>
      <CheckoutSummary
        ingredients={state.ingredients}
        continueCheckout={continueCheckoutHandler}
        cancelCheckout={cancelCheckoutHandler}
      />
    </div>
  );
};
export default Checkout;
