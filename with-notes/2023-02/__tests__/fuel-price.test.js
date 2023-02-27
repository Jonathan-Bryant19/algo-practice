const fuelPrice = require('../fuel-price')

test('5, 1.23, 5.65', () => {
  const liters = 5
  const pricePerLiter = 1.23
  const expectedValue = 5.65
  const actualValue = fuelPrice(liters, pricePerLiter)
  expect(actualValue).toEqual(expectedValue)
})
test('8, 2.5, 18.40', () => {
  const liters = 8
  const pricePerLiter = 2.5
  const expectedValue = 18.40
  const actualValue = fuelPrice(liters, pricePerLiter)
  expect(actualValue).toEqual(expectedValue)
})
test('5, 5.6, 27.50', () => {
  const liters = 5
  const pricePerLiter = 5.6
  const expectedValue = 27.50
  const actualValue = fuelPrice(liters, pricePerLiter)
  expect(actualValue).toEqual(expectedValue)
})