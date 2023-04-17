const menFromBoys = require('../men-from-boys')

test('1', () => {
  const arr = [7,3,14,17]
  const expectedValue = [14,17,7,3]
  const actualValue = menFromBoys(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('2', () => {
  const arr = [2,43,95,90,37]
  const expectedValue = [2,90,95,43,37]
  const actualValue = menFromBoys(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('3', () => {
  const arr = [-32,-39,-35,-41]
  const expectedValue = [-32,-35,-39,-41]
  const actualValue = menFromBoys(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('4', () => {
  const arr = [ -644, -614, -314, -92, -90, -32, -24, 4, 6, 32, 42, 60, 84, 112, 136, 302, 462, 997, 971, 911, 773, 175, 93, 83, 59, 37, 29, 5, -1, -9, -9, -27, -27, -71, -137, -767 ]
  const expectedValue = [ -644, -614, -314, -92, -90, -32, -24, 4, 6, 32, 42, 60, 84, 112, 136, 302, 462, 997, 971, 911, 773, 175, 93, 83, 59, 37, 29, 5, -1, -9, -27, -71, -137, -767 ]
  const actualValue = menFromBoys(arr)
  expect(actualValue).toEqual(expectedValue)
})


