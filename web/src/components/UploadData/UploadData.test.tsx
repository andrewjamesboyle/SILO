import { render } from '@redwoodjs/testing/web'

import UploadData from './UploadData'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UploadData', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadData />)
    }).not.toThrow()
  })
})
