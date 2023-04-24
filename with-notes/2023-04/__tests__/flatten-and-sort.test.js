const flattenAndSort = require('../flatten-and-sort')

test('empty', () => {
  const array = []
  const expectedValue = []
  const actualValue = flattenAndSort(array)
  expect(actualValue).toEqual(expectedValue)
})
test('one number', () => {
  const array = [[], [1]]
  const expectedValue = [1]
  const actualValue = flattenAndSort(array)
  expect(actualValue).toEqual(expectedValue)
})
test('multiple numbers', () => {
  const array = [[3, 2, 1], [7, 9, 8], [6, 4, 5]]
  const expectedValue = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const actualValue = flattenAndSort(array)
  expect(actualValue).toEqual(expectedValue)
})
test('multiple numbers', () => {
  const array = [[1, 3, 5], [100], [2, 4, 6]]
  const expectedValue = [1, 2, 3, 4, 5, 6, 100]
  const actualValue = flattenAndSort(array)
  expect(actualValue).toEqual(expectedValue)
})