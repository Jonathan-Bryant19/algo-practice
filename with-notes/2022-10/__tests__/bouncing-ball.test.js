const bouncingBall = require('../bouncing-ball')

test('Should return 3 bounces', () => {
    // arrange
    const h = 3.0
    const bounce = 0.66
    const window = 1.5
    const expectedValue = 3
    // act
    const actualValue = bouncingBall(h, bounce, window)
    // assert
    expect(expectedValue).toEqual(actualValue)
})
test('Should return 15 bounces', () => {
    // arrange
    const h = 30.0
    const bounce = 0.66
    const window = 1.5
    const expectedValue = 15
    // act
    const actualValue = bouncingBall(h, bounce, window)
    // assert
    expect(expectedValue).toEqual(actualValue)
})
test('Bounce must be greater than 0 and less than 1', () => {
    // arrange
    const h = 3.0
    const bounce = 1.0
    const window = 1.5
    const expectedValue = -1
    // act
    const actualValue = bouncingBall(h, bounce, window)
    // assert
    expect(expectedValue).toEqual(actualValue)
})