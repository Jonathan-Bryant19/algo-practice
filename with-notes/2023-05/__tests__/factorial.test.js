const factorial = require('../factorial')

test('0, 1', () => {
  const n = 0
  const expectedResult = 1
  const actualResult = factorial(n)
  expect(actualResult).toEqual(expectedResult)
})
test('1, 1', () => {
  const n = 1
  const expectedResult = 1
  const actualResult = factorial(n)
  expect(actualResult).toEqual(expectedResult)
})
test('2, 2', () => {
  const n = 2
  const expectedResult = 2
  const actualResult = factorial(n)
  expect(actualResult).toEqual(expectedResult)
})
test('3, 6', () => {
  const n = 3
  const expectedResult = 6
  const actualResult = factorial(n)
  expect(actualResult).toEqual(expectedResult)
})