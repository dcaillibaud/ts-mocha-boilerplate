import { expect } from 'chai'
import { answer } from 'lib/counter'

describe('mocha runs', () => {
  it('correctly', () => true)
  it('resolve imports with aliases', () => {
    expect(answer()).to.equals(42)
  })
})
