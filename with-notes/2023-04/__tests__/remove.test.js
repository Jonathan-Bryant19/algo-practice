const remove = require('../remove')

test('1 exlamation point', () => {
  const string = "Hi!"
  const expectedValue = "Hi"
  const actualValue = remove(string)
  expect(actualValue).toEqual(expectedValue)
})
test('3 exlamation points', () => {
  const string = "Hi!!!"
  const expectedValue = "Hi"
  const actualValue = remove(string)
  expect(actualValue).toEqual(expectedValue)
})
test('Early exlamation points ignored', () => {
  const string = "!Hi"
  const expectedValue = "!Hi"
  const actualValue = remove(string)
  expect(actualValue).toEqual(expectedValue)
})
test('Mixed', () => {
  const string = "!Hi!"
  const expectedValue = "!Hi"
  const actualValue = remove(string)
  expect(actualValue).toEqual(expectedValue)
})
test('Only from end', () => {
  const string = "Hi! Hi!"
  const expectedValue = "Hi! Hi"
  const actualValue = remove(string)
  expect(actualValue).toEqual(expectedValue)
})