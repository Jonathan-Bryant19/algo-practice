const presses = require('../presses')

test('should work for simple examples', () => {
  const phrase = "LOL"
  const expectedValue = 9
  const actualValue = presses(phrase)
  expect(actualValue).toEqual(expectedValue)
})
test('should work for phrases with spaces', () => {
  const phrase = "HOW R U"
  const expectedValue = 13
  const actualValue = presses(phrase)
  expect(actualValue).toEqual(expectedValue)
})