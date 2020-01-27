import React from 'react';

import Auxl from "../../hoc/Auxl";
import { BurgerBuilder } from "../../containers/Burger-Builder/Burger-Builder";

const layout = (props) => (
    <Auxl>
        <div>Toolbar, Sidebar, Backdrop</div>
        < main><BurgerBuilder /></main>
    </Auxl>
)
export default layout