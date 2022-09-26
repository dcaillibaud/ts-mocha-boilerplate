import { expect } from 'chai'
import { answer } from 'lib/counter'

describe('mocha runs', () => {
  it('correctly', () => true)
  it('and import with alias', () => {
    expect(answer()).to.equals(42)
  })
})
