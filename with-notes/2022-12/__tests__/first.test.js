const first = require('../first')

test('returns the first element with no second argument', () => {
  const arr = ['a', 'b', 'c', 'd', 'e']
  const expectedValue = ['a']
  const actualValue = first(arr)
  expect(actualValue).toEqual(expectedValue)
})
test('return first 2 elements', () => {
  const arr = ['a', 'b', 'c', 'd', 'e']
  const n = 2
  const expectedValue = ['a', 'b']
  const actualValue = first(arr, n)
  expect(actualValue).toEqual(expectedValue)
})