const lowercaseCount = require('../lowercase-count')

test('all lowercase', () => {
  const str = 'abc'
  const expectedValue = 3
  const actualValue = lowercaseCount(str)
  expect(actualValue).toEqual(expectedValue)
})
test('mixed letters', () => {
  const str = 'abcABC123'
  const expectedValue = 3
  const actualValue = lowercaseCount(str)
  expect(actualValue).toEqual(expectedValue)
})
test('mixed characters', () => {
  const str = 'abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'
  const expectedValue = 3
  const actualValue = lowercaseCount(str)
  expect(actualValue).toEqual(expectedValue)
})
test('empty string', () => {
  const str = ''
  const expectedValue = 0
  const actualValue = lowercaseCount(str)
  expect(actualValue).toEqual(expectedValue)
})