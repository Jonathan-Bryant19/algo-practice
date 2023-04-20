const min = require('../min')

test('Return the value', () => {
  const arr = [1, 2, 3, 4, 5]
  const toReturn = 'value'
  const expectedValue = 1
  const actualValue = min(arr, toReturn)
  expect(actualValue).toEqual(expectedValue)
})
test('Return the index', () => {
  const arr = [1, 2, 3, 4, 5]
  const toReturn = 'index'
  const expectedValue = 0
  const actualValue = min(arr, toReturn)
  expect(actualValue).toEqual(expectedValue)
})