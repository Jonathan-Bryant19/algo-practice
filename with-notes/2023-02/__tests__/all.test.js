const all = require('../all')

test('All elements are less than 9', () => {
  const arr = [1, 2, 3, 4, 5]
  const fun = function(v) {
    return v < 9
  }
  const expectedValue = true
  const actualValue = all(arr, fun)
  expect(actualValue).toEqual(expectedValue)
})
test('All elements are less than 9', () => {
  const arr = [10, 11, 12, 13, 14]
  const fun = function(v) {
    return v < 9
  }
  const expectedValue = false
  const actualValue = all(arr, fun)
  expect(actualValue).toEqual(expectedValue)
})
test('All elements are even', () => {
  const arr = [10, 12, 14, 16, 2]
  const fun = function(v) {
    return v % 2 === 0
  }
  const expectedValue = true
  const actualValue = all(arr, fun)
  expect(actualValue).toEqual(expectedValue)
})