import { render } from '@redwoodjs/testing/web'

import TeamProfile from './TeamProfile'

describe('TeamProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamProfile />)
    }).not.toThrow()
  })
})
