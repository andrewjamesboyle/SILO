// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import LayerToggle from './LayerToggle'

const meta: Meta<typeof LayerToggle> = {
  component: LayerToggle,
}

export default meta

type Story = StoryObj<typeof LayerToggle>

export const Primary: Story = {}
