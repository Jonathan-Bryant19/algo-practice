const isDigit = require('../is-digit')

test('presence of letters should return false', () => {
  const s = 's2324'
  const expectedValue = false
  const actualValue = isDigit(s)
  expect(actualValue).toEqual(expectedValue)
})
test('spaces should not impact a true return value', () => {
  const s = '   3    '
  const expectedValue = true
  const actualValue = isDigit(s)
  expect(actualValue).toEqual(expectedValue)
})