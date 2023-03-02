const coinToss = require("../coin-toss")

test('4, 10, 6.25%', () => {
  const flips = 4
  const samples = 10
  const side = "tails"
  const expectedValue = 6.25
  const actualValue = coinToss(flips, samples, side)
  expect(actualValue).toEqual(expectedValue)
})
test('2, 20, 25.00%', () => {
  const flips = 2
  const samples = 20
  const side = "heads"
  const expectedValue = 25.00
  const actualValue = coinToss(flips, samples, side)
  expect(actualValue).toEqual(expectedValue)
})
test('10, 50000, 0.10%', () => {
  const flips = 10
  const samples = 50000
  const side = "tails"
  const expectedValue = 0.10
  const actualValue = coinToss(flips, samples, side)
  expect(actualValue).toEqual(expectedValue)
})