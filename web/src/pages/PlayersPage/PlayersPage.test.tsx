import { render } from '@redwoodjs/testing/web'

import PlayersPage from './PlayersPage'

describe('PlayersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayersPage />)
    }).not.toThrow()
  })
})
