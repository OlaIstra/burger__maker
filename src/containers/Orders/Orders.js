import React, { Component } from 'react'

import { connect } from 'react-redux'

import Order from '../../components/Order/Order'
import axios from '../../axios'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
//import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";
//import mapStateToProps from "react-redux/es/connect/mapStateToProps";

import * as actions from '../../store/actions/index'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.toGetOrders(this.props.token, this.props.userId)
    }

    render() {

        let orders = <Spinner />

        if (!this.props.loading) {
            orders = (
                <>
                    {this.props.orders.map(order => (
                        <Order key={order.id} ingredients={order.ingredients} totalPrice={order.price}/>
                    ))}
                </>
            )
        }

        return orders
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toGetOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))
