import { render } from '@redwoodjs/testing/web'

import SimpleComponent from './SimpleComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SimpleComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SimpleComponent />)
    }).not.toThrow()
  })
})
