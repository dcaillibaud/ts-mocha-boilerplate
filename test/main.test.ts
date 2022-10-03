import { answer } from '#lib/counter'
import { expect } from 'chai'
// import { response } from '#lib/question'

describe('mocha runs', () => {
  it('correctly', () => true)
  it('resolve imports with aliases', () => {
    expect(answer()).to.equals(42)
  })
 /* it('resolve imports *.js with aliases', () => {
    expect(response().to.equals(24))
  })
  */
})
