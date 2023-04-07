// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test
function multiply (a, b, c) { return a * b * c } // for test
const obj = {
  sum: 100,
  divideSum (x) {
    return this.sum / x
  }
} // for test

// eslint-disable-next-line
function memoize (fn) {
  const hashMap = new Map()

  return function (...args) {
    const key = args.toString()

    if (hashMap.get(key)) {
      console.log('memoized data')
      return hashMap.get(key)
    }

    const result = fn.call(this, ...args)
    hashMap.set(key, result)
    return result
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)
const multiplyMemoized = memoize(multiply)
obj.divideSum = memoize(obj.divideSum)

console.log(sumMemoized(1, 3)) // результат 4
console.log(sumMemoized(3, 3)) // результат 6
console.log(sumMemoized(1, 3)) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
console.log('-----------------------')
console.log(multiplyMemoized(1, 2, 3))
console.log(multiplyMemoized(2, 2, 2))
console.log(multiplyMemoized(1, 2, 3))
console.log('-----------------------')
console.log(obj.divideSum(2))
console.log(obj.divideSum(5))
console.log(obj.divideSum(2))
