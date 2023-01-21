const increment = require('../incrementer')

test('test one', () => {
  const nums = [1, 2, 3] 
  const expectedValue = [2, 4, 6]
  const actualValue = increment(nums)
  expect(actualValue).toEqual(expectedValue)
})
test('test two', () => {
  const nums = [4, 6, 7, 1, 3] 
  const expectedValue = [5, 8, 0, 5, 8]
  const actualValue = increment(nums)
  expect(actualValue).toEqual(expectedValue)
})
test('test three', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8] 
  const expectedValue = [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
  const actualValue = increment(nums)
  expect(actualValue).toEqual(expectedValue)
})