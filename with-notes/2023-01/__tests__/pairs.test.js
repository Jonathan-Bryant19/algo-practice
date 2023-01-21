const pairs = require('../pairs')

test('Test 1', ()  => {
  const ar = [21, 20, 22, 40, 39, -56, 30, -55, 95, 94]
  const expectedValue = 2
  const actualValue = pairs(ar)
  expect(actualValue).toEqual(expectedValue)
})
test('Test 2', ()  => {
  const ar = [81, 44, 80, 26, 12, 27, -34, 37, -35]
  const expectedValue = 0
  const actualValue = pairs(ar)
  expect(actualValue).toEqual(expectedValue)
})
test('Test 3', ()  => {
  const ar = [-55, -56, -7, -6, 56, 55, 63, 62]
  const expectedValue = 4
  const actualValue = pairs(ar)
  expect(actualValue).toEqual(expectedValue)
})
test('Test 4', ()  => {
  const ar = [73, 72, 8, 9, 73, 72]
  const expectedValue = 3
  const actualValue = pairs(ar)
  expect(actualValue).toEqual(expectedValue)
})