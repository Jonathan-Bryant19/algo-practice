const odds = require('../odds')

test('empty array returns empty array', () => {
  const values = []
  const expectedValue = []
  const actualValue = odds(values)
  expect(actualValue).toEqual(expectedValue)
})
test('evens only', () => {
  const values = [2, 4, 6]
  const expectedValue = []
  const actualValue = odds(values)
  expect(actualValue).toEqual(expectedValue)
})
test('odds only', () => {
  const values = [1, 3, 5]
  const expectedValue = [1, 3, 5]
  const actualValue = odds(values)
  expect(actualValue).toEqual(expectedValue)
})
test('mixed array', () => {
  const values = [1, 2, 3, 4, 5, 6]
  const expectedValue = [1, 3, 5]
  const actualValue = odds(values)
  expect(actualValue).toEqual(expectedValue)
})