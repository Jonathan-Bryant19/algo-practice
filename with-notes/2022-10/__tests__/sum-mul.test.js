const sumMul = require('../sum-mul')

test('Return INVALID if second integer is less than or equal to the first', () => {
    // arrange
    const s = 0
    const m = 0
    const expectedValue = 'INVALID'
    // act
    const actualValue = sumMul(s, m)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Return 20 for inputs of 2 and 9', () => {
    // arrange
    const s = 2
    const m = 9
    const expectedValue = 20
    // act
    const actualValue = sumMul(s, m)
    // assert
    expect(actualValue).toEqual(expectedValue)
})