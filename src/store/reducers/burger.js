import * as actionTypes from '../actions/actionTypes'
import  { updateObject } from "../../shared/utility";

const initialState = {
    ingredients: null,
    totalPrice: 1,
    error: false,
    buildingBurger: false
}

const INGREDIENT_PRICES = {
    salad: 0.2,
    cheese: 0.4,
    meat: 1.2,
    bacon: 0.8
}

const burger = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1}
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                buildingBurger: true
            }
            return updateObject(state, updatedState)

        case actionTypes.REMOVE_INGREDIENT:
            const removeIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedRemoveIngredients = updateObject(state.ingredients, removeIngredient)
            const updatedRemoveState = {
                ingredients: updatedRemoveIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                buildingBurger: true
            }
            return updateObject(state, updatedRemoveState)

        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                totalPrice: 1,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false,
                buildingBurger: false
            })

        case actionTypes.FETCH_INGREDIENTS__FAILED:
            return updateObject(state, {
                error: true
            })
        default:
            return state

    }
}

export default burger



