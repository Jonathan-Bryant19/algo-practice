const foldTo = require('../fold-to')

test('to the moon!', () => {
  const distance = 384000000
  const expectedValue = 42
  const actualValue = foldTo(distance)
  expect(actualValue).toEqual(expectedValue)
})