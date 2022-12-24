const switcheroo = require('../switcheroo')

test('one switch', () => {
  const x = 'abc'
  const expectedValue = 'bac'
  const actualValue = switcheroo(x)
  expect(actualValue).toEqual(expectedValue)
})
test('multiple switches', () => {
  const x = 'aaabcccbaaa'
  const expectedValue = 'bbbacccabbb'
  const actualValue = switcheroo(x)
  expect(actualValue).toEqual(expectedValue)
})
test('no switches', () => {
  const x = 'cccc'
  const expectedValue = 'cccc'
  const actualValue = switcheroo(x)
  expect(actualValue).toEqual(expectedValue)
})