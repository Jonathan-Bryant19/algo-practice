const isSortedAndHow = require('../is-sorted-and-how')

test('ascending list', () => {
  const array = [1, 2]
  const expectedValue = 'yes, ascending'
  const actualValue = isSortedAndHow(array)
  expect(actualValue).toEqual(expectedValue)
})
test('descending list', () => {
  const array = [15, 7, 3, -8]
  const expectedValue = 'yes, descending'
  const actualValue = isSortedAndHow(array)
  expect(actualValue).toEqual(expectedValue)
})
test('mixed list', () => {
  const array = [4, 2, 30]
  const expectedValue = 'no'
  const actualValue = isSortedAndHow(array)
  expect(actualValue).toEqual(expectedValue)
})