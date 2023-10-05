import type {Meta, StoryObj} from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps  } from '@lrdsignite-ui/react'

export default {
    title: 'Form/Text Area',
    component: TextArea,
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                    <Text size="sm" >Observações:</Text>
                    {Story()}
                </Box>
            )
        }
    ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Area de Texto:'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}
