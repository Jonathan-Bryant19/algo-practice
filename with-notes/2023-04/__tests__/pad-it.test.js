const padIt = require('../pad-it')

test('a, 1', () => {
  const str = "a"
  const n = 1
  const expectedValue = "*a"
  const actualValue = padIt(str, n)
  expect(actualValue).toEqual(expectedValue)
})
test('a, 2', () => {
  const str = "a"
  const n = 2
  const expectedValue = "*a*"
  const actualValue = padIt(str, n)
  expect(actualValue).toEqual(expectedValue)
})
test('a, 3', () => {
  const str = "a"
  const n = 3
  const expectedValue = "**a*"
  const actualValue = padIt(str, n)
  expect(actualValue).toEqual(expectedValue)
})
test('a, 4', () => {
  const str = "a"
  const n = 4
  const expectedValue = "**a**"
  const actualValue = padIt(str, n)
  expect(actualValue).toEqual(expectedValue)
})
test('a, 5', () => {
  const str = "a"
  const n = 5
  const expectedValue = "***a**"
  const actualValue = padIt(str, n)
  expect(actualValue).toEqual(expectedValue)
})