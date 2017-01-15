/* global describe, it */
import { expect } from './test_helper'
import checkNumber from '../src/index'

describe('All together', () => {
  it('it is a function', () => {
    const actual = typeof checkNumber
    const expected = 'function'

    expect(actual).to.be.eql(expected)
  })

  it('it returns a string', () => {
    const actual = typeof checkNumber()
    const expected = 'string'

    expect(actual).to.be.eql(expected)
  })

  it('it returns a fizz if number is dividable by 3', () => {
    const actual = [ checkNumber(3), checkNumber(9), checkNumber(12) ]
    const expected = [ 'fizz', 'fizz', 'fizz' ]

    expect(actual).to.be.eql(expected)
  })

  it('it returns a buzz if number is dividable by 5', () => {
    const actual = [ checkNumber(5), checkNumber(20), checkNumber(35) ]
    const expected = [ 'buzz', 'buzz', 'buzz' ]

    expect(actual).to.be.eql(expected)
  })

  it('it returns a fizzbuzz if number is dividable by 3 and 5', () => {
    const actual = [ checkNumber(15), checkNumber(45), checkNumber(120) ]
    const expected = [ 'fizzbuzz', 'fizzbuzz', 'fizzbuzz' ]

    expect(actual).to.be.eql(expected)
  })

  it('it returns a number if number is not dividable by 3 or 5', () => {
    const actual = [ checkNumber(7), checkNumber(16), checkNumber(82) ]
    const expected = [ '7', '16', '82' ]

    expect(actual).to.be.eql(expected)
  })
})
