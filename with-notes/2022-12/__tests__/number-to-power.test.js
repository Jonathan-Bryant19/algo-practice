const numberToPower = require('../number-to-power')

test('4 to 2', () => {
  const number = 4
  const power = 2
  const expectedValue = 16
  const actualValue = numberToPower(number, power)
  expect(actualValue).toEqual(expectedValue)
})
test('10 to 4', () => {
  const number = 10
  const power = 4
  const expectedValue = 10000
  const actualValue = numberToPower(number, power)
  expect(actualValue).toEqual(expectedValue)
})
test('10 to 0', () => {
  const number = 10
  const power = 0
  const expectedValue = 1
  const actualValue = numberToPower(number, power)
  expect(actualValue).toEqual(expectedValue)
})