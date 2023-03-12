const validateCode = require("../validate-code")

test('Start with 1', () => {
  const code = 123
  const expectedValue = true
  const actualValue = validateCode(code)
  expect(actualValue).toEqual(expectedValue)
})
test('Start with 2', () => {
  const code = 248
  const expectedValue = true
  const actualValue = validateCode(code)
  expect(actualValue).toEqual(expectedValue)
})
test('Start with 8', () => {
  const code = 8
  const expectedValue = false
  const actualValue = validateCode(code)
  expect(actualValue).toEqual(expectedValue)
})
test('Start with 3', () => {
  const code = 321
  const expectedValue = true
  const actualValue = validateCode(code)
  expect(actualValue).toEqual(expectedValue)
})
test('Start with 9', () => {
  const code = 9453
  const expectedValue = false
  const actualValue = validateCode(code)
  expect(actualValue).toEqual(expectedValue)
})