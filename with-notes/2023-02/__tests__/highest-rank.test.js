  const highestRank = require('../highest-rank')

  test('12 as single highest value', () => {
    const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]
    const expectedValue = 12
    const actualValue = highestRank(arr)
    expect(actualValue).toEqual(expectedValue)
  })
  test('12 as multiple highest values', () => {
    const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]
    const expectedValue = 12
    const actualValue = highestRank(arr)
    expect(actualValue).toEqual(expectedValue)
  })
  test('3 as highest value but low number', () => {
    const arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]
    const expectedValue = 3
    const actualValue = highestRank(arr)
    expect(actualValue).toEqual(expectedValue)
  })