const removeExclamationMarks = require('../remove-exclamation-marks')

test('Only at end', () => {
  const s = "Hello World!"
  const expectedValue = "Hello World"
  const actualValue = removeExclamationMarks(s) 
  expect(actualValue).toEqual(expectedValue)
})
test('Mixed throughout string', () => {
  const s = "!Hello !W!orld!"
  const expectedValue = "Hello World"
  const actualValue = removeExclamationMarks(s) 
  expect(actualValue).toEqual(expectedValue)
})