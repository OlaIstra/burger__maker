import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import InputCustom from '../../components/UI/Input/Input'
import Spinner from '../../components/UI/Spinner/Spinner'
//import Button from '../../components/UI/Button/Button'

import * as actions from "../../store/actions/index";

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'text',
                elementConfig: {
                    type:'email',
                    placeholder: 'E-mail'
                },
                defaultValue: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'text',
                elementConfig: {
                    type:'password',
                    placeholder: 'Password'
                },
                defaultValue: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    }

    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath) {
            this.props.onSetAuthRedirectPath('/')
        }
    }

    checkValidaty(value, rules) {
        let isValid = true

        if (!rules) {
            return
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /^[.a-z0-9_-]+@[а-яА-Яa-z0-9-]+\.[а-яА-Яa-zA-Z]{2,6}$/i;
            isValid = pattern.test(value) && isValid
        }

        return isValid
    }

    inputChangedHandler = (event, controlName) => {
        const updateForm = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidaty(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }


        this.setState({
            controls: updateForm
        })

    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(
            this.state.controls.email.value,
            this.state.controls.password.value,
            this.state.isSignUp)
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            }
        })
    }

    render() {
        const formElements = []

        for (let key in this.state.controls) {
            formElements.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let formToShow = formElements.map((el) => {
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

        if (this.props.loading) {
            formToShow = <Spinner />
        }

        let errorMessage = null

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        let authRedirect = null

        if (this.props.isAuth) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <>
                {authRedirect}
                {errorMessage}
                <form action="" onSubmit={this.submitHandler}>
                    {formToShow}
                    <button>
                        OK
                    </button>
                </form>
                <button
                    onClick = { this.switchAuthModeHandler}
                >GO TO {this.state.isSignUp ? 'LOG IN' : 'SIGN UP'}</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.buildingBurger,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
