import React, { Component } from 'react'

import { Modal } from './styled__components'
import Backdrop from '../Backdrop/Backdrop'

class ModalWin extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <Modal
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </Modal>
            </>
        )
    }
}

export default ModalWin
