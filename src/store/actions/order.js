import * as actionTypes from './actionTypes'
import axios from "../../axios";


export const purchaseSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseStart())
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data)
                dispatch(purchaseSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseFail(error))
            })
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
            .then(res => {
                const ordersToShow = []
                for (let key in res.data) {
                    ordersToShow.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(ordersToShow))
            })
            .catch(
                error => {
                    dispatch(fetchOrdersFail(error))
                }
            )
    }
}
