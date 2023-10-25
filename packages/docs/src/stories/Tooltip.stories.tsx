import { Tooltip, TooltipProps  } from '@lrdsignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Challenge/Tooltip',
    component: Tooltip,

    args:{
        children: '21 de Outubro indisponível',
    },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}