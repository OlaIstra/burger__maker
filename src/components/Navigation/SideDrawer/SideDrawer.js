import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { SideDrawer, LogoWrapper } from "./style__components"

const sidedrawer= ( props ) => {

    let  showClass = 'close'
    if (props.open) {
        showClass = 'open'
    }

    return(
        <>
            <Backdrop show={props.open} clicked={props.closed}/>

            <SideDrawer className={showClass}>
                <LogoWrapper>
                    <Logo  toToggleSideDrawer={props.toToggleSideDrawer}/>
                </LogoWrapper>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </SideDrawer>
        </>
    )
}



export default sidedrawer
