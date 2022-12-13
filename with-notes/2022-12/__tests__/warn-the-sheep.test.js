const warnTheSheep = require('../warn-the-sheep')

test('sheep position 2', () => {
  const queue = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]
  const expectedValue = "Oi! Sheep number 2! You are about to be eaten by a wolf!"
  const actualValue = warnTheSheep(queue)
  expect(actualValue).toEqual(expectedValue)
})
test('wolf at end', () => {
  const queue = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]
  const expectedValue = "Pls go away and stop eating my sheep"
  const actualValue = warnTheSheep(queue)
  expect(actualValue).toEqual(expectedValue)
})
test('just a wolf', () => {
  const queue = ["wolf"]
  const expectedValue = "Pls go away and stop eating my sheep"
  const actualValue = warnTheSheep(queue)
  expect(actualValue).toEqual(expectedValue)
})