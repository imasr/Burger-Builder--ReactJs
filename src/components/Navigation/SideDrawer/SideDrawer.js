import React from "react";

import classes from "./SideDrawer.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Wrapper from "../../../core/Wrapper/Wrapper";
import Backdrop from "../../../shared/components/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let drawer = [classes.SideDrawer, classes.Close];
  if (props.show) {
    drawer = [classes.SideDrawer, classes.Open];
  }
  return (
    <Wrapper>
      <Backdrop show={props.show} closeFn={props.close} />
      <div className={drawer.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Wrapper>
  );
};

export default sideDrawer;
