import fizzbuzz from './fizzbuzz'
import fizz from './fizz'
import buzz from './buzz'

export default function checkNumber (num = 0) {
  if (fizzbuzz(num)) {
    return 'fizzbuzz'
  }
  if (fizz(num)) {
    return 'fizz'
  }
  if (buzz(num)) {
    return 'buzz'
  }
  return '' + num
}

// for (let i = 0; i <= 100; i++) {
//   console.log(checkNumber(i))
// }
