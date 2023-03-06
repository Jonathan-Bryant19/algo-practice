const removeRotten = require('../remove-rotten')

test('empty array', () => {
  const bagOfFruits = []
  const expectedValue = []
  const actualValue = removeRotten(bagOfFruits)
  expect(actualValue).toEqual(expectedValue)
})
test('one rotten', () => {
  const bagOfFruits = ["apple","rottenBanana","kiwi","melone","orange"]
  const expectedValue = ["apple","banana","kiwi","melone","orange"]
  const actualValue = removeRotten(bagOfFruits)
  expect(actualValue).toEqual(expectedValue)
})
test('all rotten', () => {
  const bagOfFruits = ["rottenApple","rottenBanana","rottenKiwi","rottenMelone","rottenOrange"]
  const expectedValue = ["apple","banana","kiwi","melone","orange"]
  const actualValue = removeRotten(bagOfFruits)
  expect(actualValue).toEqual(expectedValue)
})