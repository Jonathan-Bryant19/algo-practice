const getNumberFromString = require('../get-number-from-string')

test('"1" should return 1', () => {
  const s = "1"
  const expectedValue = 1
  const actualValue = getNumberFromString(s)
  expect(actualValue).toEqual(expectedValue)
})
test('"123" should return 123', () => {
  const s = "123"
  const expectedValue = 123
  const actualValue = getNumberFromString(s)
  expect(actualValue).toEqual(expectedValue)
})
test('""this is number: 7"" should return 7', () => {
  const s = "this is number: 7"
  const expectedValue = 7
  const actualValue = getNumberFromString(s)
  expect(actualValue).toEqual(expectedValue)
})