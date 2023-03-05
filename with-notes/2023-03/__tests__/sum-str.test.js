const sumStr = require('../sum-str')

test('4 + 5', () => {
  const a = "4"
  const b = "5"
  const expectedResult = "9"
  const actualResult = sumStr(a, b)
  expect(actualResult).toEqual(expectedResult)
})
test('34 + 5', () => {
  const a = "34"
  const b = "5"
  const expectedResult = "39"
  const actualResult = sumStr(a, b)
  expect(actualResult).toEqual(expectedResult)
})