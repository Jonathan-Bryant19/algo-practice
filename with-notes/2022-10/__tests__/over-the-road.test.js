const overTheRoad = require('../over-the-road')

test('1, 3 --> 6', () => {
    // arrange
    const address = 1
    const n = 3
    const expectedValue = 6
    // act
    const actualValue = overTheRoad(address, n)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('3, 3 --> 4', () => {
    // arrange
    const address = 3
    const n = 3
    const expectedValue = 4
    // act
    const actualValue = overTheRoad(address, n)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('3, 5 --> 8', () => {
    // arrange
    const address = 3
    const n = 5
    const expectedValue = 8
    // act
    const actualValue = overTheRoad(address, n)
    // assert
    expect(actualValue).toEqual(expectedValue)
})