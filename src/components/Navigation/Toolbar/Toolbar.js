import React from "react";

import classes from "./Toolbar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "../SideDrawer/SideDrawer";

const toolbar = () => (
    <header className={classes.Toolbar}>
        <DrawerToggle />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>
)

export default toolbar