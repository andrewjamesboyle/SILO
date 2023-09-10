import { render } from '@redwoodjs/testing/web'

import LayerToggle from './LayerToggle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LayerToggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LayerToggle />)
    }).not.toThrow()
  })
})
