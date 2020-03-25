import React from 'react'
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    console.log(props);

    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => (
            <li key={key}>
                <span style={{ textTransform: "capitalize" }}>{key}</span> :
                <span>{props.ingredients[key]}</span>
            </li>
        ))
    return (
        <Wrapper>
            <h3 style={{ textAlign: "center" }}>{props.title}</h3>
            <p>{props.message}</p>
            <div>
                <ul>
                    {ingredientSummary}
                </ul>
            </div>
            <strong>Total Price: {props.totalPrice}</strong>
            <p>Continue to Checkout?</p>
            <div className="rowReverse">
                <Button btnType={'Danger'} click={props.cancel}>Cancel</Button>
                <Button btnType={'Success'} click={props.continue}>Continue</Button>
            </div>

        </Wrapper>
    )
}
export default orderSummary