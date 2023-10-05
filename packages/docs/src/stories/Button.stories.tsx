import type {Meta, StoryObj} from '@storybook/react'

import { Button, ButtonProps  } from '@lrdsignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,

    args:{
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'terciary'],
            control: {
                type: 'inline-radio',
            }
        },
        size: {
            options: ['sm', 'md'],
            control: {
                type: 'inline-radio',
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'click'
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new'
    }
}

export const Terciary: StoryObj<ButtonProps> = {
    args: {
        variant: 'terciary',
        children: 'Cancel'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm'
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Próximo passo
                <ArrowRight />
            </>
        )
    }
}