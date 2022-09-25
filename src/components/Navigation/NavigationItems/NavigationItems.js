import React from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
    <NavigationItem link="/login">Login</NavigationItem>
  </ul>
);

export default navigationItems;
