const mango = require('../mango')

test('3, 3 => 6', () => {
  const quantity = 3
  const price = 3
  const expectedValue = 6
  const actualValue = mango(quantity, price)
  expect(actualValue).toEqual(expectedValue)
})
test('9, 5 => 30', () => {
  const quantity = 9
  const price = 5
  const expectedValue = 30
  const actualValue = mango(quantity, price)
  expect(actualValue).toEqual(expectedValue)
})