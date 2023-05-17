const orderOperations = require('../order-operations')

test('should return 32', () => {
  const expectedValue = 32
  const actualValue = orderOperations()
  expect(actualValue).toEqual(expectedValue)
})