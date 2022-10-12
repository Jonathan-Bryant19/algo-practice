const toAlternatingCase = require('../to-alternating-case')

test('All lower case should return all upper case', () => {
    // arrange
    const str = "hello world"
    const expectedString = "HELLO WORLD"

    // act
    const actualString = toAlternatingCase(str)

    // assert
    expect(actualString).toEqual(expectedString)
})
test('All upper case should return all lower case', () => {
    // arrange
    const str = "HELLO WORLD"
    const expectedString = "hello world"

    // act
    const actualString = toAlternatingCase(str)

    // assert
    expect(actualString).toEqual(expectedString)
})
test('Alternating case should return the opposite', () => {
    // arrange
    const str = "HeLlO wOrLd"
    const expectedString = "hElLo WoRlD"

    // act
    const actualString = toAlternatingCase(str)

    // assert
    expect(actualString).toEqual(expectedString)
})