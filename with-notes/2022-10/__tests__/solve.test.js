const solve = require("../solve")

test('zodiacs should return 26', () => {
    // arrange
    const s = 'zodiacs'
    const expectedValue = 26
    // act
    const actualValue = solve(s)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('chruschtschov should return 80', () => {
    // arrange
    const s = 'chruschtschov'
    const expectedValue = 80
    // act
    const actualValue = solve(s)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('khrushchev should return 38', () => {
    // arrange
    const s = 'khrushchev'
    const expectedValue = 38
    // act
    const actualValue = solve(s)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('mischtschenkoana should return 80', () => {
    // arrange
    const s = 'mischtschenkoana'
    const expectedValue = 80
    // act
    const actualValue = solve(s)
    // assert
    expect(actualValue).toEqual(expectedValue)
})