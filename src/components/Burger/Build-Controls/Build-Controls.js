import React from "react";

import classes from "./Build-Controls.module.scss";

import BuildControl from "./Build-Control/Build-Control";
import Button from "@mui/material/Button";

const controls = [
  { type: "salad", label: "Salad" },
  { type: "cheese", label: "Cheese" },
  { type: "bacon", label: "Bacon" },
  { type: "meat", label: "Meat" },
  { type: "bread", label: "Bread" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <div>
      <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
    </div>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        add={() => props.addIngredient(ctrl.type)}
        remove={() => props.removeIngredient(ctrl.type)}
        disabledInfo={props.disabledInfo[ctrl.type]}
      />
    ))}
    <Button
      variant="contained"
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.orderNow}
    >
      Order Now
    </Button>
  </div>
);

export default buildControls;
