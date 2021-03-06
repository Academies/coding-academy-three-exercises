// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => [...str].reverse().join('')

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => (num > 1 ? num * factorial(num - 1) : 1)

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) =>
  arr1.length === arr2.length ? arr1.map((el, i) => [el, arr2[i]]) : -1

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  const fst = []
  const snd = []
  arr.forEach(([x, y]) => {
    fst.push(x)
    snd.push(y)
  })
  return [fst, snd]
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) =>
  str.slice(str.length - num) + str.slice(0, str.length - num)

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7, 2016. It is 15:37 in the afternoon."
const announceDate = () => {
  const date = new Date()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const hours = date.getHours()
  return `Today's date is ${
    months[date.getMonth()]
  } ${date.getDay()}, ${date.getFullYear()}. It is ${hours}:${date.getMinutes()} in the ${
    hours > 11 ? 'afternoon' : 'morning'
  }.`
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
