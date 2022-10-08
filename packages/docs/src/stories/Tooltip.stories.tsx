import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@zhenri-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    trigger: (
      <span
        style={{
          backgroundColor: '#000',
          borderRadius: '6px',
          padding: '12px 20px',
          fontFamily: 'Roboto, sans-serif',
          color: '#fff',
        }}
      >
        Hold This
      </span>
    ),
    text: '21 de Outubro - Indisponível',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
