import React from "react";

import "./Logo.scss";

import BurgerLogo from "./../../assets/images/burger-logo.png";

const logo = (props) => (
  <div className="logo-icon" style={{ height: props.height }}>
    <img src={BurgerLogo} alt="burger" />
  </div>
);

export default logo;
