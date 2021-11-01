import { render } from '@redwoodjs/testing/web'

import PlayerProfile from './PlayerProfile'

describe('PlayerProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerProfile />)
    }).not.toThrow()
  })
})
