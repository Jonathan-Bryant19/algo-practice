const digitize = require('../digitize')

test('Should return array of reversed digits', () => {
  const n = 35231
  const expectedValue = [1,3,2,5,3]
  const actualValue = digitize(n)
  expect(actualValue).toEqual(expectedValue)
})
test('Should return array containing only 0', () => {
  const n = 0
  const expectedValue = [0]
  const actualValue = digitize(n)
  expect(actualValue).toEqual(expectedValue)
})