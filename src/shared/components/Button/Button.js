import React from "react";
import classes from "./Button.module.scss";
import Button from "@mui/material/Button";
const button = (props) => (
  <Button
    variant="contained"
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(" ")}
  >
    {props.children}
  </Button>
);

export default button;
