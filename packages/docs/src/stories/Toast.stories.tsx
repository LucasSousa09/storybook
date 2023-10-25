import type {Meta, StoryObj} from '@storybook/react'

import { Toast, ToastProps  } from '@lrdsignite-ui/react'

export default {
    title: 'Challenge/Toast',
    component: Toast,
    args:{ 
        scheduledDate: 'Quarta-feira, 23 de Outubro às 16h',
    },

} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}