import React from "react";
import classes from "./Backdrop.module.scss";

const backdrop = ({ show, closeFn }) =>
  show ? <div className={classes.Backdrop} onClick={closeFn}></div> : null;
export default backdrop;
