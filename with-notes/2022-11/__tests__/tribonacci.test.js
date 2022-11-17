const tribonacci = require('../tribonacci')

test('[1,1,1], 10, [1,1,1,3,5,9,17,31,57,105]', () => {
  const signature = [1,1,1]
  const n = 10
  const expectedValue = [1,1,1,3,5,9,17,31,57,105]
  const actualValue = tribonacci(signature, n)
  expect(actualValue).toEqual(expectedValue)
})
test('[0,0,1], 10, [0,0,1,1,2,4,7,13,24,44]', () => {
  const signature = [0,0,1]
  const n = 10
  const expectedValue = [0,0,1,1,2,4,7,13,24,44]
  const actualValue = tribonacci(signature, n)
  expect(actualValue).toEqual(expectedValue)
})
test('[1,2,3], 10, [1,2,3,6,11,20,37,68,125,230]', () => {
  const signature = [1,2,3]
  const n = 10
  const expectedValue = [1,2,3,6,11,20,37,68,125,230]
  const actualValue = tribonacci(signature, n)
  expect(actualValue).toEqual(expectedValue)
})
test('[1,1,1], 1, [1]', () => {
  const signature = [1,1,1]
  const n = 1
  const expectedValue = [1]
  const actualValue = tribonacci(signature, n)
  expect(actualValue).toEqual(expectedValue)
})
test('[300,200,100], 0, []', () => {
  const signature = [300,200,100]
  const n = 0
  const expectedValue = []
  const actualValue = tribonacci(signature, n)
  expect(actualValue).toEqual(expectedValue)
})