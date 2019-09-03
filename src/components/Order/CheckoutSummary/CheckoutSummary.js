import React from 'react'

import Burger from '../../Burger/Burger'
import { ContinueBtn, CancelBtn } from '../../UI/Button/Button__styled'

const checkoutSummary = (props) => {
    return (
        <>
            <h1>Bon appetite! </h1>
            <Burger ingredients={props.ingredients}/>
            <div>
                <CancelBtn
                    onClick={props.checkoutCancel}
                >Cancel</CancelBtn>
                <ContinueBtn
                    onClick={props.checkoutContinue}
                >Continue</ContinueBtn>
            </div>
        </>
    )
}

export default checkoutSummary
