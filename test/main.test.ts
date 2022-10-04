import { expect } from 'chai'

import { answer } from 'lib/counter'
import { response } from 'lib/question'

describe('mocha runs', () => {
  it('correctly', () => true)
  it('resolve imports with aliases', () => {
    expect(answer()).to.equals(42)
    expect(response()).to.equals(24)
  })
})
