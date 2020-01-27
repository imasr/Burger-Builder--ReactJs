import React, { Component } from 'react';

import Auxl from "../../hoc/Auxl";
import Burger from "../../components/Burger/Burger";

export class BurgerBuilder extends Component {
    render() {
        return (
            <Auxl>
                <Burger />
            </Auxl>
        )
    }
}