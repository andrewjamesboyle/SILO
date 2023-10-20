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

import DrawFeature from './DrawFeature'

const meta: Meta<typeof DrawFeature> = {
  component: DrawFeature,
}

export default meta

type Story = StoryObj<typeof DrawFeature>

export const Primary: Story = {}
