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

import Flyout from './Flyout'

const meta: Meta<typeof Flyout> = {
  component: Flyout,
}

export default meta

type Story = StoryObj<typeof Flyout>

export const Primary: Story = {}
