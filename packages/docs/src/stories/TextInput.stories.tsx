import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@zhenri-ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your email address',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
