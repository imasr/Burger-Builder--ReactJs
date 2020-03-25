import React from 'react';
import classes from "./Layout.module.scss"

import Wrapper from "../../hoc/Wrapper";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import { BurgerBuilder } from "../../containers/Burger-Builder/Burger-Builder";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const layout = (props) => (
    <Wrapper>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            <BurgerBuilder />
        </main>
    </Wrapper>
)
export default layout