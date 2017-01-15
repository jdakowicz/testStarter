import fizz from './fizz'
import buzz from './buzz'

export default function fizzbuzz (num = 0) {
  if (num === 0) return false
  return fizz(num) && buzz(num)
}
