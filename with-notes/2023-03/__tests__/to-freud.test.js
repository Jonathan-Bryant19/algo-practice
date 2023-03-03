const toFreud = require('../to-freud')

test('empty string', () => {
  const string = ""
  const expectedValue = ""
  const actualValue = toFreud(string)
  expect(actualValue).toEqual(expectedValue)
})
test('1 word', () => {
  const string = "test"
  const expectedValue = "sex"
  const actualValue = toFreud(string)
  expect(actualValue).toEqual(expectedValue)
})
test('6 words', () => {
  const string = "You're becoming a true freudian expert"
  const expectedValue = "sex sex sex sex sex sex"
  const actualValue = toFreud(string)
  expect(actualValue).toEqual(expectedValue)
})