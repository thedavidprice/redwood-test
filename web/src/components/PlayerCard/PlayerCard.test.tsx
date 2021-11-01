import { render } from '@redwoodjs/testing/web'

import PlayerCard from './PlayerCard'

describe('PlayerCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerCard />)
    }).not.toThrow()
  })
})
