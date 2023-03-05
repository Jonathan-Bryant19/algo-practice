const arrayLeaders = require('../array-leaders')

test('positive values', () => {
  const numbers = [1,2,3,4,0]
  const expectedValue = [4]
  const actualValue = arrayLeaders(numbers)
  expect(actualValue).toEqual(expectedValue)
})
test('positive values', () => {
  const numbers = [16,17,4,3,5,2]
  const expectedValue = [17, 5, 2]
  const actualValue = arrayLeaders(numbers)
  expect(actualValue).toEqual(expectedValue)
})
test('negative values', () => {
  const numbers = [-1,-29,-26,-2]
  const expectedValue = [-1]
  const actualValue = arrayLeaders(numbers)
  expect(actualValue).toEqual(expectedValue)
})
test('negative values', () => {
  const numbers = [-36,-12,-27]
  const expectedValue = [-36, -12]
  const actualValue = arrayLeaders(numbers)
  expect(actualValue).toEqual(expectedValue)
})
test('mixed values', () => {
  const numbers = [5,-2,2]
  const expectedValue = [5, 2]
  const actualValue = arrayLeaders(numbers)
  expect(actualValue).toEqual(expectedValue)
})
test('mixed values', () => {
  const numbers = [0,-1,-29,3,2]
  const expectedValue = [0, -1, 3, 2]
  const actualValue = arrayLeaders(numbers)
  expect(actualValue).toEqual(expectedValue)
})