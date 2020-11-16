import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.scss';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <div className={classes.JustifyCenter}>
                <Button
                    btnType="Danger"
                    clicked={props.cancelCheckout}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={props.continueCheckout}>CONTINUE</Button>
            </div>
        </div >
    );
}

export default checkoutSummary;