const overTheRoad = require('../over-the-road')

test('2, 3 -> 5', () => {
  const address = 2
  const n = 3
  const expectedValue = 5
  const actualValue = overTheRoad(address, n)
  expect(actualValue).toEqual(expectedValue)
})
test('3, 5 -> 8', () => {
  const address = 3
  const n = 5
  const expectedValue = 8
  const actualValue = overTheRoad(address, n)
  expect(actualValue).toEqual(expectedValue)
})
test('7, 11 -> 16', () => {
  const address = 7
  const n = 11
  const expectedValue = 16
  const actualValue = overTheRoad(address, n)
  expect(actualValue).toEqual(expectedValue)
})
test('23633656673, 310027696726 -> 596421736780', () => {
  const address = 23633656673
  const n = 310027696726
  const expectedValue = 596421736780
  const actualValue = overTheRoad(address, n)
  expect(actualValue).toEqual(expectedValue)
})