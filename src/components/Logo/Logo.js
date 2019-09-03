import React from 'react'

import burgerlogo from "../../assets/img/burger-logo.png"
import { Logo, LogoImg } from './styled__components'

const logo = ( props ) => (
    <Logo>
        <LogoImg src={burgerlogo} alt="burger" onClick={props.toToggleSideDrawer}/>
    </Logo>
)

export default logo
