const solve = require('../solve-position')

test('["abode","ABc","xyzD"] should return [4,3,1]', () => {
    // arrange
    const arr = ["abode","ABc","xyzD"]
    const expectedValue = [4, 3, 1]
    // act
    const actualValue = solve(arr)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('["abide","ABc","xyz"] should return [4,3,0]', () => {
    // arrange
    const arr = ["abide","ABc","xyz"]
    const expectedValue = [4, 3, 0]
    // act
    const actualValue = solve(arr)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"] should return [6,5,7]', () => {
    // arrange
    const arr = ["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]
    const expectedValue = [6, 5, 7]
    // act
    const actualValue = solve(arr)
    // assert
    expect(actualValue).toEqual(expectedValue)
})