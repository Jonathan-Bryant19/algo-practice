const bump = require('../bump')

test('1 bump', () => {
  const x = 'n'
  const expectedValue = "Woohoo!"
  const actualValue = bump(x)
  expect(actualValue).toEqual(expectedValue)
})
test('14 bumps', () => {
  const x = '__nn_nnnn__n_n___n____nn__nnn'
  const expectedValue = "Woohoo!"
  const actualValue = bump(x)
  expect(actualValue).toEqual(expectedValue)
})
test('15 bumps', () => {
  const x = 'nnn_n__n_n___nnnnn___n__nnn__'
  const expectedValue = "Woohoo!"
  const actualValue = bump(x)
  expect(actualValue).toEqual(expectedValue)
})
test('16 bumps', () => {
  const x = '_nnnnnnn_n__n______nn__nn_nnn'
  const expectedValue = "Car Dead"
  const actualValue = bump(x)
  expect(actualValue).toEqual(expectedValue)
})