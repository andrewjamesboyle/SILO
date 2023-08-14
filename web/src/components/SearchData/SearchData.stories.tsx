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

import SearchData from './SearchData'

const meta: Meta<typeof SearchData> = {
  component: SearchData,
}

export default meta

type Story = StoryObj<typeof SearchData>

export const Primary: Story = {}
