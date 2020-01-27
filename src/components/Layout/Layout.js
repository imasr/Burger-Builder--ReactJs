import React from 'react';

import Wrapper from "../../hoc/Wrapper";
import { BurgerBuilder } from "../../containers/Burger-Builder/Burger-Builder";

const layout = (props) => (
    <Wrapper>
        <div>Toolbar, Sidebar, Backdrop</div>
        < main><BurgerBuilder /></main>
    </Wrapper>
)
export default layout