const distanceBetweenPoints = require('../distance-between-points')

test('(1,6) and (4, 2) give 5', () => {
  const a = [1, 6]
  const b = [4, 2]
  const expectedValue = 5
  const actualValue = distanceBetweenPoints(a, b)
  expect(actualValue).toEqual(expectedValue)
})
test('(-10.2, 12.5) and (0.3, 14.7) give 10.728001', () => {
  const a = [-10.2, 12.5]
  const b = [0.3, 14.7]
  const expectedValue = 10.728001
  const actualValue = distanceBetweenPoints(a, b)
  expect(actualValue).toEqual(expectedValue)
})