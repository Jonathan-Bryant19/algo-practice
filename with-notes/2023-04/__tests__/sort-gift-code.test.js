const sortGiftCode = require('../sort-gift-code')

test('abcdef', () => {
  const code = 'abcdef'
  const expectedValue = 'abcdef'
  const actualValue = sortGiftCode(code)
  expect(actualValue).toEqual(expectedValue)
})
test('pqksuvy', () => {
  const code = 'pqksuvy'
  const expectedValue = 'kpqsuvy'
  const actualValue = sortGiftCode(code)
  expect(actualValue).toEqual(expectedValue)
})
test('zyxwvutsrqponmlkjihgfedcba', () => {
  const code = 'zyxwvutsrqponmlkjihgfedcba'
  const expectedValue = 'abcdefghijklmnopqrstuvwxyz'
  const actualValue = sortGiftCode(code)
  expect(actualValue).toEqual(expectedValue)
})