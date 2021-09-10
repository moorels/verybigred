import { render } from '@redwoodjs/testing/web'

import HomepagePage from './HomepagePage'

describe('HomepagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomepagePage />)
    }).not.toThrow()
  })
})
