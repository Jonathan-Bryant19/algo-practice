const myAtoi = require('../atoi')

test('"42" => 42', () => {
  const s = "42"
  const expectedValue = 42
  const actualValue = myAtoi(s)
  expect(actualValue).toEqual(expectedValue)
})
test('"   -42" => -42', () => {
  const s = "   -42"
  const expectedValue = -42
  const actualValue = myAtoi(s)
  expect(actualValue).toEqual(expectedValue)
})
test('"4193 with words" => 4193', () => {
  const s = "4193 with words"
  const expectedValue = 4193
  const actualValue = myAtoi(s)
  expect(actualValue).toEqual(expectedValue)
})
test('"words and 987" => 0', () => {
  const s = "words and 987"
  const expectedValue = 0
  const actualValue = myAtoi(s)
  expect(actualValue).toEqual(expectedValue)
})