/* global describe, it */
import { expect } from './test_helper'
import fizzbuzz from '../src/fizzbuzz'

describe('Fizzbuzz', () => {
  it('and its an function', () => {
    const actual = typeof fizzbuzz
    const expected = 'function'

    expect(actual).to.be.eql(expected)
  })

  it('returns a boolean', () => {
    const actual = typeof fizzbuzz(0)
    const expected = 'boolean'

    expect(actual).to.be.eql(expected)
  })

  it('returns false if called without arguments', () => {
    const actual = fizzbuzz()
    const expected = false

    expect(actual).to.be.eql(expected)
  })

  it('returns true if a number is dividable by 3 and 5', () => {
    const actual = [ fizzbuzz(15), fizzbuzz(30), fizzbuzz(90), fizzbuzz(180), fizzbuzz(12) ]
    const expected = [ true, true, true, true, false ]

    expect(actual).to.be.eql(expected)
  })
})
