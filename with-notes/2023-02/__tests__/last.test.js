const last = require('../last')

test('man i need a taxi up to ubud', () => {
  const x = "man i need a taxi up to ubud"
  const expectedValue = ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  const actualValue = last(x)
  expect(actualValue).toEqual(expectedValue)
})
test('what time are we climbing up the volcano', () => {
  const x = "what time are we climbing up the volcano"
  const expectedValue = ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
  const actualValue = last(x)
  expect(actualValue).toEqual(expectedValue)
})
test('take me to semynak', () => {
  const x = "take me to semynak"
  const expectedValue = ['take', 'me', 'semynak', 'to']
  const actualValue = last(x)
  expect(actualValue).toEqual(expectedValue)
})