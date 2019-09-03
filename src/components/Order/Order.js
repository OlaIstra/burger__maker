import React from 'react'

const order = (props) => {
    const ingredients = []

    for (let ing in props.ingredients) {
        ingredients.push(
            {
                name: ing,
                amount: props.ingredients[ing]
            })
    }

    const ingToShow = ingredients.map((ing) => {
        return <span key={ing.name}>{ing.name} - {ing.amount}</span>
    })

    return (
        <>
            <p>ingredients {ingToShow}</p>
            <p>Price {props.totalPrice}</p>
        </>
    )
}
export default order
