import { render } from '@redwoodjs/testing/web'

import TeamProfilePage from './TeamProfilePage'

describe('TeamProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamProfilePage slug={'42'} />)
    }).not.toThrow()
  })
})
