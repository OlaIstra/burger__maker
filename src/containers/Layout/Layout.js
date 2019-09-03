import React, { Component } from 'react'

import { Main } from './styled__components'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

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
                <Toolbar toToggleSideDrawer={this.toToggleSideDrawer} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    toToggleSideDrawer={this.toToggleSideDrawer}
                />
                <Main>
                    {this.props.children}
                </Main>
            </>
            )
    }
}

export default Layout
