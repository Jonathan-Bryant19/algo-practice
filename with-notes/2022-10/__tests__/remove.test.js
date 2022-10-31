const remove = require('../remove')

test('"Hi!" => "Hi!"', () => {
    // arrange
    const string = "Hi!"
    const expectedValue = "Hi!"
    // act
    const actualValue = remove(string)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('"Hi!!!" => "Hi!"', () => {
    // arrange
    const string = "Hi!!!"
    const expectedValue = "Hi!"
    // act
    const actualValue = remove(string)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('"!Hi" => "Hi!"', () => {
    // arrange
    const string = "!Hi"
    const expectedValue = "Hi!"
    // act
    const actualValue = remove(string)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('"Hi! Hi!" => "Hi Hi!"', () => {
    // arrange
    const string = "Hi! Hi!"
    const expectedValue = "Hi Hi!"
    // act
    const actualValue = remove(string)
    // assert
    expect(actualValue).toEqual(expectedValue)
})