import React from 'react'

import { ContinueBtn, CancelBtn} from '../../UI/Button/Button__styled'
import { OrderUL, BtnContainer } from "./styled__components";

const orderSum = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((ing, index) => {
            return (
                <li key={index}>
                    <span style={{textTransform: 'capitalize'}}>
                        {ing}
                    </span>
                    : {props.ingredients[ing]}
                </li>
            )
        })

    return (
        <>
            <h3>Your order</h3>
            <p>A burger with the following ingredients:</p>
            <OrderUL>
                {ingredientSummary}
            </OrderUL>
            <p>Total price: ${props.totalPrice.toFixed(2)}</p>
            <p>Continue?</p>
            <BtnContainer>
                <CancelBtn onClick={props.onCancel}>Cancel</CancelBtn>
                <ContinueBtn onClick={props.onContinue}>Continue</ContinueBtn>
            </BtnContainer>

        </>
    )

}

export default orderSum
