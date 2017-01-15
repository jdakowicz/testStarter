/* global describe, it */
import { expect } from './test_helper'
import fizz from '../src/fizz'

describe('Fizz', () => {
  it('and its an function', () => {
    const actual = typeof fizz
    const expected = 'function'

    expect(actual).to.be.eql(expected)
  })

  it('returns a boolean', () => {
    const actual = typeof fizz(0)
    const expected = 'boolean'

    expect(actual).to.be.eql(expected)
  })

  it('returns false if wrong argument is passed', () => {
    const actual = fizz()
    const expected = false

    expect(actual).to.be.eql(expected)
  })

  it('returns true if a number is dividable by 3', () => {
    const actual = [ fizz(3), fizz(6), fizz(12), fizz(30), fizz(60), fizz(66) ]
    const expected = [ true, true, true, true, true, true ]

    expect(actual).to.be.eql(expected)
  })

  it('returns false if a number is not dividable by 3', () => {
    const actual = [ fizz(0), fizz(2), fizz(13), fizz(25), fizz(50), fizz(100) ]
    const expected = [ false, false, false, false, false, false ]

    expect(actual).to.be.eql(expected)
  })
})
