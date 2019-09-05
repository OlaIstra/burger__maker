import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Main } from './styled__components'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
//import mapStateToProps from "react-redux/es/connect/mapStateToProps";
//import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    toToggleSideDrawer = () => {
        this.setState((prevState, props) => ({
            showSideDrawer: !prevState.showSideDrawer
        }))
    }

    render() {
        return(
            <>
                <Toolbar
                    toToggleSideDrawer={this.toToggleSideDrawer}
                    isAuth={this.props.isLogin}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    toToggleSideDrawer={this.toToggleSideDrawer}
                    isAuth={this.props.isLogin}
                />
                <Main>
                    {this.props.children}
                </Main>
            </>
            )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)
