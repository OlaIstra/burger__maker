import React, { Component } from 'react'

export const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default})
                })
        }

        render() {
            const Element = this.state.component

            return Element ? <Element {...this.props} /> : null
        }
    }
}


