const whatday = require('../whatday')

test('1 returns Sunday', () => {
  const num = 1
  const expectedValue = "Sunday"
  const actualValue = whatday(num)
  expect(actualValue).toEqual(expectedValue)
})
test('2 returns Monday', () => {
  const num = 2
  const expectedValue = "Monday"
  const actualValue = whatday(num)
  expect(actualValue).toEqual(expectedValue)
})
test('3 returns Tuesday', () => {
  const num = 3
  const expectedValue = "Tuesday"
  const actualValue = whatday(num)
  expect(actualValue).toEqual(expectedValue)
})
test('8 returns error message', () => {
  const num = 8
  const expectedValue = "Wrong, please enter a number between 1 and 7"
  const actualValue = whatday(num)
  expect(actualValue).toEqual(expectedValue)
})