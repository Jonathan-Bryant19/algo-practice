const maxProfit = require('../max-profit')

test('[7,1,5,3,6,4] -> 7', () => {
  const prices = [7,1,5,3,6,4]
  const expectedValue = 7
  const actualValue = maxProfit(prices)
  expect(actualValue).toEqual(expectedValue)
})
test('[1,2,3,4,5] -> 4', () => {
  const prices = [1,2,3,4,5]
  const expectedValue = 4
  const actualValue = maxProfit(prices)
  expect(actualValue).toEqual(expectedValue)
})
test('[7,6,4,3,1] -> 0', () => {
  const prices = [7,6,4,3,1]
  const expectedValue = 0
  const actualValue = maxProfit(prices)
  expect(actualValue).toEqual(expectedValue)
})