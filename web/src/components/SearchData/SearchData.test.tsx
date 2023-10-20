import { render } from '@redwoodjs/testing/web'

import SearchData from './SearchData'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchData', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchData />)
    }).not.toThrow()
  })
})
