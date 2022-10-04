import { expect } from 'chai'

import { answer } from 'lib/counter.js'
import { answer2 } from 'lib/counter2.js'
import { response } from 'lib/question.js'

describe('mocha runs', () => {
  it('correctly', () => true)
  it('resolve imports with aliases', () => {
    expect(answer()).to.equals(42)
    expect(answer2()).to.equals(442)
    expect(response()).to.equals(24)
  })
})
