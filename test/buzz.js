/* global describe, it */
import { expect } from './test_helper'
import buzz from '../src/buzz'

describe('Buzz', () => {
  it('and its an function', () => {
    const actual = typeof buzz
    const expected = 'function'

    expect(actual).to.be.eql(expected)
  })

  it('returns a boolean', () => {
    const actual = typeof buzz(0)
    const expected = 'boolean'

    expect(actual).to.be.eql(expected)
  })

  it('return false if wrong argument is passed', () => {
    const actual = buzz()
    const expected = false

    expect(actual).to.be.eql(expected)
  })

  it('returns true if a number is dividable by 5', () => {
    const actual = [ buzz(5), buzz(15), buzz(30), buzz(50), buzz(100) ]
    const expected = [ true, true, true, true, true ]

    expect(actual).to.be.eql(expected)
  })

  it('returns false if a number is not dividable by 5', () => {
    const actual = [ buzz(0), buzz(4), buzz(21), buzz(66), buzz(99) ]
    const expected = [ false, false, false, false, false ]

    expect(actual).to.be.eql(expected)
  })
})
