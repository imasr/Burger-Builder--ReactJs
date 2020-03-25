import React from "react";

import classes from "./SideDrawer.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = () => (
    <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </div>
)

export default sideDrawer