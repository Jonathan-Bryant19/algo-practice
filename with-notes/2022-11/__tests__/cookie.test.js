const cookie = require('../cookie')

test('String should return Zack', () => {
    // arrange
    const x = "Ryan"
    const expectedValue = "Who ate the last cookie? It was Zach!"
    // act
    const actualValue = cookie(x)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Number should return Monica', () => {
    // arrange
    const x = 19
    const expectedValue = "Who ate the last cookie? It was Monica!"
    // act
    const actualValue = cookie(x)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Input that is not a string or number returns Dog', () => {
    // arrange
    const x = true
    const expectedValue = "Who ate the last cookie? It was the dog!"
    // act
    const actualValue = cookie(x)
    // assert
    expect(actualValue).toEqual(expectedValue)
})