import type {Meta, StoryObj} from '@storybook/react'

import { Box, MultiSteps, MultiStepsProps  } from '@ignite-ui/react'

export default {
    title: 'Form/Multi Steps',
    component: MultiSteps,
    args: {
        size: 4,
        currentStep: 1,
    },
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                    {Story()}
                </Box>
            )
        }
    ]

} as Meta<MultiStepsProps>

export const Primary: StoryObj<MultiStepsProps> = {
    args: {}
}

export const Full: StoryObj<MultiStepsProps> = {
    args: {
        currentStep: 4
    }
}