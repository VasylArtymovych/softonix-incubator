// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

// eslint-disable-next-line
function memoize (fn) {
  const hashMap = new Map()

  return function (...args) {
    const key = args.toString()

    if (hashMap.get(key)) {
      return hashMap.get(key)
    }

    const result = fn.call(this, ...args)
    hashMap.set(key, result)
    return result
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

sumMemoized(1, 3) // результат 4
sumMemoized(3, 3) // результат 6
sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
