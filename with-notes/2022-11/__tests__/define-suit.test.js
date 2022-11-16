const defineSuit = require('../define-suit')

test('♠ returns spades', () => {
  const card = 'Q♠'
  const expectedValue = 'spades'
  const actualValue = defineSuit(card)
  expect(actualValue).toEqual(expectedValue)
})
test('♦ returns diamonds', () => {
  const card = 'A♦'
  const expectedValue = 'diamonds'
  const actualValue = defineSuit(card)
  expect(actualValue).toEqual(expectedValue)
})
test('♥ returns hearts', () => {
  const card = 'J♥'
  const expectedValue = 'hearts'
  const actualValue = defineSuit(card)
  expect(actualValue).toEqual(expectedValue)
})
test('♣ returns clubs', () => {
  const card = '10♣'
  const expectedValue = 'clubs'
  const actualValue = defineSuit(card)
  expect(actualValue).toEqual(expectedValue)
})