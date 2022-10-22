const { add, divide, multiply, mod, exponent, subt } = require('../calculator')

test('2 + 2 = 4', () => {
    // arrange
    const a = 2
    const b = 2
    const expectedValue = 4
    // act
    const actualValue = add(a, b)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('2 / 2 = 1', () => {
    // arrange
    const a = 2
    const b = 2
    const expectedValue = 1
    // act
    const actualValue = divide(a, b)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('3 * 2 = 6', () => {
    // arrange
    const a = 3
    const b = 2
    const expectedValue = 6
    // act
    const actualValue = multiply(a, b)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('3 % 2 = 1', () => {
    // arrange
    const a = 3
    const b = 2
    const expectedValue = 1
    // act
    const actualValue = mod(a, b)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('3 to the second power = 9', () => {
    // arrange
    const a = 3
    const b = 2
    const expectedValue = 9
    // act
    const actualValue = exponent(a, b)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('2 - 2 = 0', () => {
    // arrange
    const a = 2
    const b = 2
    const expectedValue = 0
    // act
    const actualValue = subt(a, b)
    // assert
    expect(actualValue).toEqual(expectedValue)
})