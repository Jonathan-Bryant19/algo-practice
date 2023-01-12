const alternateCase = require('../alternate-case')

test('all lower case', () => {
  const s = 'abc'
  const expectedValue = 'ABC'
  const actualValue = alternateCase(s)
  expect(actualValue).toEqual(expectedValue)
})
test('all upper case', () => {
  const s = 'ABC'
  const expectedValue = 'abc'
  const actualValue = alternateCase(s)
  expect(actualValue).toEqual(expectedValue)
})
test('mixed case string', () => {
  const s = 'Hello World'
  const expectedValue = 'hELLO wORLD'
  const actualValue = alternateCase(s)
  expect(actualValue).toEqual(expectedValue)
})