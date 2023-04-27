const integrate = require('../integrate')

test('3, 2', () => {
  const coefficient = 3
  const exponent = 2
  const expectedValue = "1x^3"
  const actualValue = integrate(coefficient, exponent)
  expect(actualValue).toEqual(expectedValue)
})
test('12, 5', () => {
  const coefficient = 12
  const exponent = 5
  const expectedValue = "2x^6"
  const actualValue = integrate(coefficient, exponent)
  expect(actualValue).toEqual(expectedValue)
})
test('20, 1', () => {
  const coefficient = 20
  const exponent = 1
  const expectedValue = "10x^2"
  const actualValue = integrate(coefficient, exponent)
  expect(actualValue).toEqual(expectedValue)
})
test('40, 3', () => {
  const coefficient = 40
  const exponent = 3
  const expectedValue = "10x^4"
  const actualValue = integrate(coefficient, exponent)
  expect(actualValue).toEqual(expectedValue)
})
test('90, 2', () => {
  const coefficient = 90
  const exponent = 2
  const expectedValue = "30x^3"
  const actualValue = integrate(coefficient, exponent)
  expect(actualValue).toEqual(expectedValue)
})