import React from 'react'

import { NavUL } from "./styled__components";
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = ( props ) => (

    <NavUL>
        <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
        {props.isAuth ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
        {props.isAuth ?
            <NavigationItem link='/logout'>Log out</NavigationItem>
            : <NavigationItem link='/auth'>Authentication</NavigationItem>
        }

    </NavUL>
)

export default navigationItems
