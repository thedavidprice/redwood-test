import { render } from '@redwoodjs/testing/web'

import TeamCard from './TeamCard'

describe('TeamCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamCard />)
    }).not.toThrow()
  })
})
