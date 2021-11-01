import { render } from '@redwoodjs/testing/web'

import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingSpinner />)
    }).not.toThrow()
  })
})
