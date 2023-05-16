const slope = require('../slope')

test('0', () => {
  const points = [19,3,20,3]
  const expectedValue = "0"
  const actualValue = slope(points)
  expect(actualValue).toEqual(expectedValue)
})
test('-7', () => {
  const points = [2,7,4,-7]
  const expectedValue = "-7"
  const actualValue = slope(points)
  expect(actualValue).toEqual(expectedValue)
})
test('5', () => {
  const points = [10,50,30,150]
  const expectedValue = "5"
  const actualValue = slope(points)
  expect(actualValue).toEqual(expectedValue)
})
test('-5', () => {
  const points = [15,45,12,60]
  const expectedValue = "-5"
  const actualValue = slope(points)
  expect(actualValue).toEqual(expectedValue)
})
test('6', () => {
  const points = [10,20,20,80]
  const expectedValue = "6"
  const actualValue = slope(points)
  expect(actualValue).toEqual(expectedValue)
})
test('undefined', () => {
  const points = [-10,6,-10,3]
  const expectedValue = "undefined"
  const actualValue = slope(points)
  expect(actualValue).toEqual(expectedValue)
})