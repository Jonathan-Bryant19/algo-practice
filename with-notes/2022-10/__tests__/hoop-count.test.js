const hoopCount = require('../hoop-count')

test('3 should return "Keep at it..."', () => {
    // arrange
    const n = 3
    const expectedResult = "Keep at it until you get it"
    // act
    const actualResult = hoopCount(n)
    // assert
    expect(actualResult).toEqual(expectedResult)
})
test('11 should return "Great..."', () => {
    // arrange
    const n = 11
    const expectedResult = "Great, now move on to tricks"
    // act
    const actualResult = hoopCount(n)
    // assert
    expect(actualResult).toEqual(expectedResult)
})