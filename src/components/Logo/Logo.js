import React from "react"

import classes from "./Logo.module.scss"

import BurgerLogo from "./../../assets/images/burger-logo.png.png"

const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={BurgerLogo} alt="burger" />
    </div>
)

export default logo