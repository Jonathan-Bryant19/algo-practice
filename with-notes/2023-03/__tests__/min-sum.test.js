const minSum = require('../min-sum')

test('2 pairs', () => {
  const arr = [5,4,2,3]
  const expectedValue = 22
  const actualValue = minSum(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('3 pairs double digits', () => {
  const arr = [12,6,10,26,3,24]
  const expectedValue = 342
  const actualValue = minSum(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('4 pairs single digits', () => {
  const arr = [19,2,8,7,5,4,0,6]
  const expectedValue = 74
  const actualValue = minSum(arr)
  expect(actualValue).toEqual(expectedValue)
})