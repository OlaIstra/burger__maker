import React from 'react'

import { Burger } from './styled__components'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {

    let arrayIngredients = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])].map((_, i) => {
                return <BurgerIngredient type={ing} key={ing+i}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])

    if ( arrayIngredients.length === 0) {
        arrayIngredients = <p>Please add ingredients!</p>
    }
    return (
        <Burger>
            <BurgerIngredient type='bread-top' />
            { arrayIngredients }
            <BurgerIngredient type='bread-bottom' />
        </Burger>
    )
}

export default burger
