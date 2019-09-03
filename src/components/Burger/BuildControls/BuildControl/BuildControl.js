import React from 'react'

import { BuildControl, Label } from './styled__components'
import { ButtonMore, ButtonLess } from '../../../UI/Button/Button__styled'

import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

const buildControl = props => {
    return (
        <BuildControl>
            <ButtonLess onClick={props.removed} disabled={props.disabled}><RemoveCircle /></ButtonLess>
            <Label>{props.label}</Label>
            <ButtonMore onClick={props.added}><AddCircle /></ButtonMore>
        </BuildControl>
    )
}

export default buildControl
