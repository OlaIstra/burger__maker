import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />)
    })

    it('should render two <NavigationItem /> if not auth', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it('should render three <NavigationItem /> if auth', () => {
        wrapper.setProps({isAuth: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('should render three <NavigationItem /> if auth', () => {
        wrapper.setProps({isAuth: true})
        expect(wrapper.contains(<NavigationItem link='/logout'>Log out</NavigationItem>)).toEqual(true)
    })
})
