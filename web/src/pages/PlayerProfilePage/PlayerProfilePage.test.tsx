import { render } from '@redwoodjs/testing/web'

import PlayerProfilePage from './PlayerProfilePage'

describe('PlayerProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerProfilePage slug={'42'} />)
    }).not.toThrow()
  })
})
