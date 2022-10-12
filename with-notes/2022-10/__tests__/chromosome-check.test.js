const chromosomeCheck = require('../chromosome-check')

test('A combination of XX should identify a female', () => {
    // arrange
    const sperm = "XX"
    const expectedResult = "Congratulations! You're going to have a daughter."
    // act
    const actualResult = chromosomeCheck(sperm)
    // assert
    expect(actualResult).toEqual(expectedResult)
})
test('A combination of XY should identify a male', () => {
    // arrange
    const sperm = "XY"
    const expectedResult = "Congratulations! You're going to have a son."
    // act
    const actualResult = chromosomeCheck(sperm)
    // assert
    expect(actualResult).toEqual(expectedResult)
})