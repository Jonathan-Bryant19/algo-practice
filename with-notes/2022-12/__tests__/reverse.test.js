const reverse = require('../reverse')

test('all numbers', () => {
  const array = [1, 2, 3]
  const expectedValue = [3, 2, 1]
  const acutalValue = reverse(array)
  expect(acutalValue).toEqual(expectedValue)
})
test('mixed array', () => {
  const array = [1,null,14,"two"]
  const expectedValue = ["two",14,null,1]
  const acutalValue = reverse(array)
  expect(acutalValue).toEqual(expectedValue)
})