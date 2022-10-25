const findDigit = require('../find-digit')

test('5673, 4 should return 5', () => {
    // arrange
    const num = 5673
    const nth = 4
    const expectedValue = 5
    // act
    const actualValue = findDigit(num, nth)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('nth <= 0 should return -1', () => {
    // arrange
    const num = 65
    const nth = 0
    const expectedValue = -1
    // act
    const actualValue = findDigit(num, nth)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('A negative num should have its sign ignored', () => {
    // arrange
    const num = -123
    const nth = 3
    const expectedValue = 1
    // act
    const actualValue = findDigit(num, nth)
    // assert
    expect(actualValue).toEqual(expectedValue)
})