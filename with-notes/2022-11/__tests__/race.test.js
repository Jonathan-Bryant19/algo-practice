const race = require('../race')

test('720, 850, 70), [0, 32, 18]', () => {
  const v1 = 720
  const v2 = 850
  const v3 = 70
  const expectedValue = [0, 32, 18]
  const actualValue = race(v1, v2, v3)
  expect(actualValue).toEqual(expectedValue)
})
test('80, 91, 37), [3, 21, 49]', () => {
  const v1 = 80
  const v2 = 91
  const v3 = 37
  const expectedValue = [3, 21, 49]
  const actualValue = race(v1, v2, v3)
  expect(actualValue).toEqual(expectedValue)
})
test('80, 100, 40), [2, 0, 0]', () => {
  const v1 = 80
  const v2 = 100
  const v3 = 40
  const expectedValue = [2, 0, 0]
  const actualValue = race(v1, v2, v3)
  expect(actualValue).toEqual(expectedValue)
})
test('720, 850, 37), [0, 17, 4]', () => {
  const v1 = 720
  const v2 = 850
  const v3 = 37
  const expectedValue = [0, 17, 4]
  const actualValue = race(v1, v2, v3)
  expect(actualValue).toEqual(expectedValue)
})