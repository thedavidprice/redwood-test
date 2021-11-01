import { render } from '@redwoodjs/testing/web'

import IntersectionSlide from './IntersectionSlide'

describe('IntersectionSlide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IntersectionSlide />)
    }).not.toThrow()
  })
})
