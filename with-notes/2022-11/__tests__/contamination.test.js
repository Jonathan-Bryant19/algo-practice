const contamination = require('../contamination')

test('simple example', () => {
  const text = "abc"
  const char = "z"
  const expectedValue = "zzz"
  const actualValue = contamination(text, char)
  expect(actualValue).toEqual(expectedValue)
})
test('empty strings return empty strings', () => {
  const text = ""
  const char = "z"
  const expectedValue = ""
  const actualValue = contamination(text, char)
  expect(actualValue).toEqual(expectedValue)
})
test('longer example', () => {
  const text = "_3ebzgh4"
  const char = "&"
  const expectedValue = "&&&&&&&&"
  const actualValue = contamination(text, char)
  expect(actualValue).toEqual(expectedValue)
})
test('spaces are not empty', () => {
  const text = "//case"
  const char = " "
  const expectedValue = "      "
  const actualValue = contamination(text, char)
  expect(actualValue).toEqual(expectedValue)
})