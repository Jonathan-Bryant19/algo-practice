const calculateTip = require('../calculate-tip')

test('$20 and an "Excellent" rating yeilds a $4 tip', () => {
    // arrange
    const amount = 20
    const rating = "Excellent"
    const expectedValue = 4
    // act
    const actualValue = calculateTip(amount, rating)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('$26.95 and a "good" rating yeilds a $3 tip', () => {
    // arrange
    const amount = 20
    const rating = "Excellent"
    const expectedValue = 4
    // act
    const actualValue = calculateTip(amount, rating)
    // assert
    expect(actualValue).toEqual(expectedValue)
})