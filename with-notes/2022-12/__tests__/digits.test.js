const digits = require('../digits')

test('one digit', () => {
  const n = 5
  const expectedValue = 1
  const actualValue = digits(n)
  expect(actualValue).toEqual(expectedValue)
})
test('five digits', () => {
  const n = 12345
  const expectedValue = 5
  const actualValue = digits(n)
  expect(actualValue).toEqual(expectedValue)
})
test('ten digits', () => {
  const n = 9876543210
  const expectedValue = 10
  const actualValue = digits(n)
  expect(actualValue).toEqual(expectedValue)
})