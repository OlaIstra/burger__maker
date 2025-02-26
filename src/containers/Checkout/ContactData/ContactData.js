import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as orderActions from '../../../store/actions/index'
import axios from '../../../axios'
import { checkValidaty } from "../../../shared/utility";

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../../components/UI/Spinner/Spinner'
import InputCustom from '../../../components/UI/Input/Input'

class ContactData extends Component {

    state ={
        orderForm: {
            name: {
                elementType: 'text',
                elementConfig: {
                    type:'text',
                    placeholder: 'your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'text',
                elementConfig: {
                    type:'text',
                    placeholder: 'your address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'text',
                elementConfig: {
                    type:'number',
                    placeholder: 'your phone'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'text',
                elementConfig: {
                    type:'email',
                    placeholder: 'your e-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true

            },
            comments: {
                elementType: 'textarea',
                elementConfig: {

                },
                value: '',
                valid: true
            },
        },
        formIsValid: false
    }

    submitHandler = (event) => {
        event.preventDefault()

        const formData = {}

        for (let formElem in this.state.orderForm) {
            formData[formElem] = this.state.orderForm[formElem].value
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, //in real app we have calculate price on server side
            orderData: formData,
            userId: this.props.userId
        }

        this.props.onOrderBurger(order, this.props.token)
    }

    inputChangedHandler = (event, inputID) => {
        const updateForm = {
            ...this.state.orderForm
        }

        const updatedElement = {
            ...updateForm[inputID]
        }

        updatedElement.value = event.target.value
        updatedElement.valid = checkValidaty(updatedElement.value, updatedElement.validation)
        updatedElement.touched = true
        updateForm[inputID] = updatedElement

        let formIsValid = true;
        for ( let inputID in updateForm) {
            formIsValid = updateForm[inputID].valid && formIsValid
        }

        this.setState({
            orderForm: updateForm,
            formIsValid: formIsValid
        })

    }

    render() {

        const formElements = []

        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
                })

        }

        const formToShow = formElements.map((el) => {
            return <InputCustom
                        key={el.id}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        value={el.config.value}
                        invalid={!el.config.valid}
                        touched={el.config.touched}
                        shouldValidate={el.config.validation}
                        changed={(event) => this.inputChangedHandler(event, el.id)}/>
        })

        let form = (
            <form onSubmit={this.submitHandler}>
                {formToShow}
                <button disabled={!this.state.formIsValid}>Send</button>
            </form>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <>
                <h4>Enter your Contact</h4>
                {form}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(orderActions.purchaseBurger(orderData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
