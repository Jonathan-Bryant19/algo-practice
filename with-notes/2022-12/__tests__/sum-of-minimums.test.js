const sumOfMinimums = require("../sum-of-minimums")

test('Should return 9', () => {
  const arr = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]
  const expectedValue = 9
  const actualValue = sumOfMinimums(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('Should return 76', () => {
  const arr = [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]
  const expectedValue = 76
  const actualValue = sumOfMinimums(arr)
  expect(actualValue).toEqual(expectedValue)
})