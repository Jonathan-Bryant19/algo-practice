const sortMyString = require('../sort-my-string')

test('Codewars', () => {
  const s = 'CodeWars'
  const expectedValue = 'CdWr oeas'
  const actualValue = sortMyString(s)
  expect(actualValue).toEqual(expectedValue)
})
test('Jonathan', () => {
  const s = 'Jonathan'
  const expectedValue = 'Jnta oahn'
  const actualValue = sortMyString(s)
  expect(actualValue).toEqual(expectedValue)
})
test('Logan', () => {
  const s = 'Logan'
  const expectedValue = 'Lgn oa'
  const actualValue = sortMyString(s)
  expect(actualValue).toEqual(expectedValue)
})