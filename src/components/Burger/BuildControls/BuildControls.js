import React from 'react'

import { Panel } from './styled__components'
import { OrderBtn } from '../../UI/Button/Button__styled'
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
]


const buildControls = props => {

    return (
        <Panel>
            <div>Total price: $ {props.totalPrice.toFixed(2)}</div>
            {
                controls.map(ctrl => {
                    return <BuildControl
                                key={ctrl.label}
                                label={ctrl.label}
                                added={() => props.ingredientAdd(ctrl.type)}
                                removed={() => props.ingredientRemove(ctrl.type)}
                                disabled={props.disabled[ctrl.type]}
                            />
                })
            }
            <OrderBtn
                disabled={!props.purchasable}
                onClick={props.toPurchase}
                totalPrice={props.totalPrice}
            >
                <ShoppingCart />
            </OrderBtn>
        </Panel>
    )
}

export default buildControls
