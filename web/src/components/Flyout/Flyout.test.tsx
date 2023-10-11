import { render } from '@redwoodjs/testing/web'

import Flyout from './Flyout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Flyout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Flyout />)
    }).not.toThrow()
  })
})
