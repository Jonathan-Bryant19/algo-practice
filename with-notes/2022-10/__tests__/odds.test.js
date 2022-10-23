const odds = require('../odds')

test('Should only return odds', () => {
    // arrange
    const values = [1,2,3,4,5]
    const expectedValue = [1,3,5]
    // act
    const actualValue = odds(values)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Should return an empty array if no odds', () => {
    // arrange
    const values = [2,4,6,8]
    const expectedValue = []
    // act
    const actualValue = odds(values)
    // assert
    expect(actualValue).toEqual(expectedValue)
})