import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

import * as actions from '../../store/actions/index'

class Checkout extends Component {


    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        let summary = <Redirect to='/' />

        if (this.props.ingredients) {
            let purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null
            summary = (
                <>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ingredients}
                        checkoutCancel={this.checkoutCancelHandler}
                        checkoutContinue={this.checkoutContinueHandler}
                    />
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
                </>
            )
        }
        return summary
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}



export default connect(mapStateToProps)(Checkout)
