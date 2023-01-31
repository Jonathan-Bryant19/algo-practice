const calculate = require('../calculate')

test('1 + 1 = 2', () => {
  const s = "1 + 1"
  const expectedValue = 2
  const actualValue = calculate(s)
  expect(actualValue).toEqual(expectedValue)
})
test(' 2-1 + 2  = 3', () => {
  const s = " 2-1 + 2 "
  const expectedValue = 3
  const actualValue = calculate(s)
  expect(actualValue).toEqual(expectedValue)
})
test('(1+(4+5+2)-3)+(6+8) = 23', () => {
  const s = "(1+(4+5+2)-3)+(6+8)"
  const expectedValue = 23
  const actualValue = calculate(s)
  expect(actualValue).toEqual(expectedValue)
})
test('-(3 + 2) = -5', () => {
  const s = "-(3 + 2)"
  const expectedValue = -5
  const actualValue = calculate(s)
  expect(actualValue).toEqual(expectedValue)
})