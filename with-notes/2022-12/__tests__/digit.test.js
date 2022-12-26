const digit = require('../digit')

test('blank string', () => {
  const string = ''
  const expectedValue = false
  const actualValue = string.digit()
  expect(actualValue).toEqual(expectedValue)
})
test('single digit', () => {
  const string = '7'
  const expectedValue = true
  const actualValue = string.digit()
  expect(actualValue).toEqual(expectedValue)
})
test('mixed string', () => {
  const string = 'a7'
  const expectedValue = false
  const actualValue = string.digit()
  expect(actualValue).toEqual(expectedValue)
})
test('double digit', () => {
  const string = '14'
  const expectedValue = true
  const actualValue = string.digit()
  expect(actualValue).toEqual(expectedValue)
})