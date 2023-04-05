// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

const arrayHandler = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
      console.log('resolve ' + num)
    }, num * 1000)
  })
}

const array = [1, 2, 3, 4, 5]

const promiseChaining = array.reduce((promise, num) => {
  return promise.then(() => arrayHandler(num))
}, Promise.resolve(''))

const promiseChainingAsync = array.reduce(async (promise, num) => {
  await promise
  promise = await arrayHandler(num)
  return promise
}, Promise.resolve(''))

promiseChaining.then((data) => console.log(data))
promiseChainingAsync.then(data => console.log(data))
