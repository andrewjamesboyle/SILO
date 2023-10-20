import { render } from '@redwoodjs/testing/web'

import ProcessData from './ProcessData'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProcessData', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProcessData />)
    }).not.toThrow()
  })
})
