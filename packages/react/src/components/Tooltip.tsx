import { ComponentProps } from 'react'
import {styled} from '../styles' 

export const Tooltip = styled('span', {
    color: '$white',
    backgroundColor: '$gray900',
    fontFamily: '$default',
    fontSize: '$sm',

    padding: '$3 $4',

    position: 'relative',

    borderRadius: '$sm',

    '&:after': {
        content: '',
        position: 'absolute',
        bottom: '-$2',
        left: 'calc(50% - $2)',

        width: '$4',
        height: '$4',

        transform: 'rotate(45deg)',

        backgroundColor: '$gray900',

        zIndex: '999'
    }
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}