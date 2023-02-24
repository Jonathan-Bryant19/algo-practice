const uniTotal = require('../uni-total')

test('a = 97', () => {
  const string = "a"
  const expectedValue = 97
  const actualValue = uniTotal(string)
  expect(actualValue).toEqual(expectedValue)
})
test('aaa = 291', () => {
  const string = "aaa"
  const expectedValue = 291
  const actualValue = uniTotal(string)
  expect(actualValue).toEqual(expectedValue)
})