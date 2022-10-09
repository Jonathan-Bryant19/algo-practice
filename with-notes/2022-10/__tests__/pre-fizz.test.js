const preFizz = require('../pre-fizz')

test('1 should return 1', () => {
    // arrange
    const n = 1
    const expectedArray = [1]

    // act
    const actualArray = preFizz(n)

    // assert
    expect(actualArray).toEqual(expectedArray)
})
test('3 should return 1 through 3', () => {
    // arrange
    const n = 3
    const expectedArray = [1, 2, 3]

    // act
    const actualArray = preFizz(n)

    // assert
    expect(actualArray).toEqual(expectedArray)
})