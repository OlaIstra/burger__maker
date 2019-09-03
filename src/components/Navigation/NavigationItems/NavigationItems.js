import React from 'react'

import { NavUL } from "./styled__components";
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = ( props ) => (
    <NavUL>
        <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </NavUL>
)

export default navigationItems
