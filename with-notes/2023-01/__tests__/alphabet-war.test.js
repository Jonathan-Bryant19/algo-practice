const alphabetWar = require('../alphabet-war')

test('right side wins', () => {
  const fight = "z"
  const expectedValue = "Right side wins!"
  const actualValue = alphabetWar(fight)
  expect(actualValue).toEqual(expectedValue)
})
test('equal sides', () => {
  const fight = "zdqmwpbs"
  const expectedValue = "Let's fight again!"
  const actualValue = alphabetWar(fight)
  expect(actualValue).toEqual(expectedValue)
})
test('left side wins', () => {
  const fight = "wwwwww"
  const expectedValue = "Left side wins!"
  const actualValue = alphabetWar(fight)
  expect(actualValue).toEqual(expectedValue)
})