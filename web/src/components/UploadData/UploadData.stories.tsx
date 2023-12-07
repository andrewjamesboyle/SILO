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

import UploadData from './UploadData'

const meta: Meta<typeof UploadData> = {
  component: UploadData,
}

export default meta

type Story = StoryObj<typeof UploadData>

export const Primary: Story = {}
