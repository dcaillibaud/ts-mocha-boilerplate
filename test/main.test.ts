import { answer } from '#lib/counter'
import { expect } from 'chai'

describe('mocha runs', () => {
  it('correctly', () => true)
  it('resolve imports with aliases', () => {
    expect(answer()).to.equals(42)
  })
})
