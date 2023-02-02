const cubeOdd = require('../cube-odd')

test('All positive numbers', () => {
  const arr = [1, 2, 3, 4]
  const expectedValue = 28
  const actualValue = cubeOdd(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('Negative and positive numbers', () => {
  const arr = [-3, -2, 2, 3]
  const expectedValue = 0
  const actualValue = cubeOdd(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('Invalid input', () => {
  const arr = ["a",12,9,"z",42]
  const expectedValue = undefined
  const actualValue = cubeOdd(arr)
  expect(actualValue).toEqual(expectedValue)
})