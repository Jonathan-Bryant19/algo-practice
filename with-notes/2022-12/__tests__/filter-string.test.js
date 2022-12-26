const filterString = require('../filter-string')

test('123', () => {
  const value = '123'
  const expectedValue = 123
  const actualValue = filterString(value)
  expect(actualValue).toEqual(expectedValue)
})
test('a1b2c3', () => {
  const value = 'a1b2c3'
  const expectedValue = 123
  const actualValue = filterString(value)
  expect(actualValue).toEqual(expectedValue)
})
test('aa1bb2cc3dd', () => {
  const value = 'aa1bb2cc3dd'
  const expectedValue = 123
  const actualValue = filterString(value)
  expect(actualValue).toEqual(expectedValue)
})