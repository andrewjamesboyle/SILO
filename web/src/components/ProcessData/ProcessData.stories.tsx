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

import ProcessData from './ProcessData'

const meta: Meta<typeof ProcessData> = {
  component: ProcessData,
}

export default meta

type Story = StoryObj<typeof ProcessData>

export const Primary: Story = {}
