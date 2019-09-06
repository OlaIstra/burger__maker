import React, { Component } from 'react';
import './App.css';

import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import { asyncComponent } from './hoc/asyncComponent/AsyncComponent'

import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
//import mapStateToProps from "react-redux/es/connect/mapStateToProps";

const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout')
})

const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders')
})

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignUp()
    }

    render() {

        let routes = (
            <Switch>
                <Route path='/auth' component={Auth} />
                <Route path='/' exact component={BurgerBuilder}/>
                <Redirect to='/' />
            </Switch>
        )

        if (this.props.isAuth) {
           routes = (
               <Switch>
                   <Route path='/checkout' component={asyncCheckout} />
                   <Route path='/orders' component={asyncOrders} />
                   <Route path='/logout' component={Logout} />
                   <Route path='/auth' component={Auth} />
                   <Route path='/' exact component={BurgerBuilder}/>
                   <Redirect to='/' />
               </Switch>
           )
        }

        return (
            <Layout >
                {routes}
            </Layout>
        );
    }
}

const mapStateToprops = state => {
    return {
        isAuth: state.auth.token !== null
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.checkAuthStatus())
    }
}

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(App));
