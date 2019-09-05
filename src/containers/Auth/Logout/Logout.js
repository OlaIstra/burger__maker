import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import * as actions from '../../../store/actions/index'

import { connect } from 'react-redux'
//import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

class Logout extends Component {

    componentDidMount() {
        this.props.toLogout()
    }

    render() {
        return <Redirect to="/"/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
