const toNumberArray = require('../to-number-array')

test('whole numbers', () => {
  const stringarray = ["1", "2", "3"]
  const expectedValue = [1, 2, 3]
  const actualValue = toNumberArray(stringarray)
  expect(actualValue).toEqual(expectedValue)
})
test('float numbers', () => {
  const stringarray = ["1.1", "2.2", "3.3"]
  const expectedValue = [1.1, 2.2, 3.3]
  const actualValue = toNumberArray(stringarray)
  expect(actualValue).toEqual(expectedValue)
})