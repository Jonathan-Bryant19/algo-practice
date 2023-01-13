const solve = require('../solve')

test('Duplicate list 1', () => {
  const arr = [3,4,4,3,6,3]
  const expectedValue = [4,6,3]
  const actualValue = solve(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('Duplicate list 2', () => {
  const arr = [1,2,1,2,1,2,3]
  const expectedValue = [1,2,3]
  const actualValue = solve(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('Duplicate list 3', () => {
  const arr = [1,2,3,4]
  const expectedValue = [1,2,3,4]
  const actualValue = solve(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('Duplicate list 4', () => {
  const arr = [1,1,4,5,1,2,1]
  const expectedValue = [4,5,2,1]
  const actualValue = solve(arr)
  expect(actualValue).toEqual(expectedValue)
})