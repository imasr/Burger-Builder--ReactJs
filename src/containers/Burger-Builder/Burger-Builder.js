import React, { Component } from 'react';

import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";

export class BurgerBuilder extends Component {
    render() {
        return (
            <Wrapper>
                <Burger />
            </Wrapper>
        )
    }
}