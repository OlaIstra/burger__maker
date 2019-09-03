import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'
import axios from '../../axios'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSum from '../../components/Burger/OrderSum/OrderSum'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
//import mapStateToProps from "react-redux/es/connect/mapStateToProps";
//import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

class BurgerBuilder extends Component {

    state = {
        isPurchase: false
    }

    componentDidMount() {
        this.props.onInitIngredients()

    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ing => {
                return ingredients[ing]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        return sum > 0
    }

    purchaseHandler = () => {
        this.setState({
            isPurchase: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            isPurchase: false
        })
    }

    purchaseContinueHandler = () => {

        this.props.onInitPurchase()

        /*const queryParams = []

        for (let ing in this.props.ingredients) {
            queryParams.push(encodeURIComponent(ing) + '=' + encodeURIComponent(this.state.ingredients[ing]))
        }
        queryParams.push('price=' + this.props.price)
        const queryString = queryParams.join('&')*/

        this.props.history.push('/checkout')
    }

    render() {

        const disabledIng = {
            ...this.props.ingredients
        }

        for (let key in disabledIng) {
            disabledIng[key] = disabledIng[key] <= 0
        }

        let orderSum = null

        let burger = this.props.error ? <p>Ingredients were not downloaded. Please try later! </p> : <Spinner />

        if (this.props.ingredients) {
            burger = (
                <>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        ingredientAdd={this.props.onIncrease}
                        ingredientRemove={this.props.onDecrease}
                        disabled={disabledIng}
                        purchasable={this.updatePurchaseState(this.props.ingredients)}
                        toPurchase={this.purchaseHandler}
                        totalPrice={this.props.price}
                    />
                </>
            )
            orderSum = <OrderSum
                ingredients={this.props.ingredients}
                onCancel={this.purchaseCancelHandler}
                onContinue={this.purchaseContinueHandler}
                totalPrice={this.props.price}
            />

        }

        return (
            <>
                <Modal
                    show={this.state.isPurchase}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSum}
                </Modal>
                {burger}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrease: (ingName) => dispatch(actions.addIngredient(ingName)),
        onDecrease: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
