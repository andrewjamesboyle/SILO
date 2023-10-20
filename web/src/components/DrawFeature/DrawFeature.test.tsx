import { render } from '@redwoodjs/testing/web'

import DrawFeature from './DrawFeature'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DrawFeature', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrawFeature />)
    }).not.toThrow()
  })
})
