const guessBlue = require('../guess-blue')

test('3 blue and 2 red return 0.6', () => {
    const blueStart = 5
    const redStart = 5
    const bluePulled = 2
    const redPulled = 3
    const expectedValue = 0.6
    const actualValue = guessBlue(blueStart, redStart, bluePulled, redPulled)
    expect(actualValue).toEqual(expectedValue)
})
test('5, 7, 4, 3 returns 0.2', () => {
    const blueStart = 5
    const redStart = 7
    const bluePulled = 4
    const redPulled = 3
    const expectedValue = 0.2
    const actualValue = guessBlue(blueStart, redStart, bluePulled, redPulled)
    expect(actualValue).toEqual(expectedValue)
})