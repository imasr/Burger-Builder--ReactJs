import React, { Component } from 'react';
import classes from "./Layout.module.scss"

import Wrapper from "../Wrapper/Wrapper";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import { BurgerBuilder } from "../../containers/Burger-Builder/Burger-Builder";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClose = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Wrapper>
                <Toolbar toggleSideDrawer={this.sideDrawerToggler} />
                <SideDrawer show={this.state.showSideDrawer} close={this.sideDrawerClose} />
                <main className={classes.Content}>
                    <BurgerBuilder />
                </main>
            </Wrapper>
        )
    }
}
export default Layout